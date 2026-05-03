# 第 34 章 `script` 與 `noscript` 標籤 Demo

本目錄提供對應第 34 章筆記的範例，重點是 HTML 如何載入 JavaScript，以及腳本不可用時如何提供基本退路。

## Demo

- [script-noscript-demo.html](./script-noscript-demo.html)：示範內嵌腳本、外部腳本、`defer`、`async`、`type="module"`、`nomodule`、`noscript` 與 body 結尾腳本。

## 檔案結構

- `css/script-noscript-demo.css`：demo 頁面樣式。
- `js/defer-library.js`：模擬先載入的工具庫腳本。
- `js/defer-main.js`：模擬依賴工具庫的主程式，展示 `defer` 保留順序。
- `js/async-analytics.js`：模擬獨立第三方腳本，展示 `async` 適合獨立任務。
- `js/body-end-main.js`：放在 body 結尾載入，示範 DOM 已存在後再操作元素。
- `js/legacy-fallback.js`：給 `nomodule` 範例使用的舊瀏覽器備援腳本。

## 觀察重點

- `defer` 會先下載，等 HTML 解析完成後依序執行。
- `async` 會先下載，下載完成後盡快執行，不保證順序。
- `type="module"` 預設類似 `defer`，且頂層變數屬於模組作用域。
- `nomodule` 是舊瀏覽器備援策略；現代瀏覽器通常不會執行。
- `<noscript>` 只在 JavaScript 停用或不支援時顯示，不處理 JavaScript 程式錯誤。

## 返回

- [回到第 34 章 README](../README.md)
- [回到總目錄](../../README.md)
