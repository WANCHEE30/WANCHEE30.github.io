// 內部連結檢查器：掃描 dist/ 內所有 .html，驗證每個相對/根目錄連結
// 都能對應到實際產出的檔案。外部連結(http/https)、mailto:、tel:、錨點(#)
// 一律略過。輸出最後一行為 `<N> broken`，exit code 非 0 代表有斷鏈。
//
// 取代 linkinator：linkinator 在本機目錄模式下於 Node 25 會掃到 0 links
// （v6/v7 皆然），且其輸出措辭為 "scanned"，不含 "broken"，無法穩定驗收。
import { readFileSync, existsSync } from 'node:fs';
import { execSync } from 'node:child_process';

const root = process.argv[2] || 'dist';
const htmls = execSync(`find ${root} -name "*.html"`).toString().trim().split('\n').filter(Boolean);

const broken = [];
let total = 0;

for (const f of htmls) {
  const html = readFileSync(f, 'utf8');
  const refs = [...html.matchAll(/(?:href|src)="([^"]+)"/g)].map((m) => m[1]);
  for (const ref of refs) {
    if (/^(https?:|mailto:|tel:|#|data:|javascript:)/.test(ref)) continue;
    const clean = ref.split('#')[0].split('?')[0];
    if (!clean) continue;
    total++;
    const base = clean.startsWith('/') ? root + clean : root + '/' + clean;
    const candidates = [
      base,
      base.replace(/\/$/, '') + '/index.html',
      base + '/index.html',
      base + '.html',
    ];
    if (!candidates.some((c) => existsSync(c))) broken.push(`${f}  ->  ${ref}`);
  }
}

console.log(`internal links checked: ${total}`);
if (broken.length) {
  console.log('broken links:');
  for (const b of broken) console.log('  ' + b);
}
console.log(`${broken.length} broken`);
process.exit(broken.length ? 1 : 0);
