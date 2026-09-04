# 萬記貿易 wanchee.com.tw — 改版專案

原站為 2013 年 Dreamweaver 切版的靜態網站（iframe 拼版 + table 排版 + 切圖選單）。
本專案為改版前置作業：完整鏡像原站 + 製作 RWD 改版 mockup。

## 目錄結構

```
wanchee-site/
├── crawl.mjs        Node 鏡像爬蟲（只抓真實 200 的頁面，跳過 302 停車頁）
├── manifest.json    爬下來的檔案清單
├── original/        原站完整鏡像（參考用，勿刪改）
├── httpdocs/        原站備份（參考用，勿刪改）
├── mockup/
│   └── index.html   RWD 改版 mockup（單檔，可直接開）
└── site/            ★ 正式改版：Astro 多頁靜態網站
    ├── src/
    │   ├── layouts/BaseLayout.astro   共用 <head> + Header + Footer
    │   ├── components/                Header / Footer / ProductCard
    │   ├── data/products.js           產品資料（首頁與產品頁共用）
    │   ├── pages/                     index / about / products / news / contact
    │   └── styles/global.css          全站樣式（沿用 mockup 設計）
    ├── public/images/                 banner / logo 圖片
    └── scripts/check-links.mjs        內部連結檢查器
```

## 正式網站（site/）

Astro 元件化多頁靜態網站，5 頁：首頁、關於萬記、產品系列、最新消息、聯絡我們。
聯絡採 `mailto:` + 電話，無後端。

```bash
cd site
npm install
npm run dev          # 本機開發預覽 http://localhost:4321
npm run build        # 產出純靜態到 site/dist/
npm run check:links  # 檢查內部連結（build 後執行）
```

### 部署到 Cloudflare Pages

不需 GitHub，本機 build 後直接用 Wrangler 上傳：

```bash
cd site
npm run build
npx wrangler login                       # 首次需互動授權
npx wrangler pages deploy ./dist         # 上傳 dist/
```

之後若想改為 push 自動部署，再把專案推到 GitHub 並在 Cloudflare Pages 接 Git 整合即可
（build command：`npm run build`，output：`dist`，root：`site`）。

## 原站鏡像（參考用）

```bash
# 重新爬原站
node crawl.mjs

# 預覽 mockup（或直接用瀏覽器開 mockup/index.html）
npx serve .
```

## 原站盤點

- 真實內容頁約 15 頁：首頁、關於萬記、產品 (product_01~06)、最新消息、
  經銷客戶 (company~company05)、聯絡我們、f1/f2 等
- 技術：XHTML 1.0 + iframe + table 排版，jQuery 1.2.6 輪播，無 CMS、無後端
- 注意：`/index.htm`、`Scripts/`、`Content/`、`News/` 等路徑會 302 轉址到
  HiNet 主機商停車頁 (hiHosting.hinet.net)，並非網站內容
- 聯絡資訊燒在 `bk.png` 圖片內：
  TEL 02-2874-3363 / FAX 02-2873-5510 / abigail@wanchee.com.tw

## 待辦（改版正式版）

- [ ] 圖片內文字 OCR / 重新打成真 HTML 文字
- [ ] 聯絡表單串接後端或表單服務
- [ ] 改用 Astro / 11ty 等靜態框架產生多頁
- [ ] SEO、OG tags、favicon
