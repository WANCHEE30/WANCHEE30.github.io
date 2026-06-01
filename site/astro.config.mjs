// @ts-check
import { defineConfig } from 'astro/config';

// 純靜態輸出，build 產物在 dist/，可直接 `wrangler pages deploy ./dist`
export default defineConfig({
  output: 'static',
  site: 'https://wanchee.com.tw',
  trailingSlash: 'ignore',
});
