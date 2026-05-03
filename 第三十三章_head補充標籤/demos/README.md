# 第 33 章 `head` 補充標籤 Demo

本目錄提供對應第 33 章筆記的互動範例，重點放在 `<head>` 中常見的補充標籤與資源提示。

## Demo

- [head-extra-tags-demo.html](./head-extra-tags-demo.html)：示範 `<link>`、`rel`、`href`、外部 CSS、favicon、`preconnect`、`preload`、`<base href>` 與 `<base target>` 的行為。

## 檔案結構

- `css/base.css`：基礎版面與共用元件樣式。
- `css/page.css`：第 33 章 demo 專用樣式，示範 CSS 後載入覆蓋與 `media="screen"`。
- `css/print.css`：列印專用樣式，示範 `<link media="print">`。
- `assets/favicon.svg`：用於 `<link rel="icon">` 的 favicon。
- `assets/card-preview.svg`：用於 `<link rel="preload" as="image">` 並在頁面中顯示的圖片。

## 觀察重點

- `<link>` 放在 `<head>`，用來描述文件和外部資源的關係；`<a>` 放在 `<body>`，用來建立可點擊的導覽。
- `rel` 說明資源關係，`href` 指向資源位置。
- 多個 CSS 檔會受載入順序、選擇器權重與 `media` 條件影響。
- `preconnect` 是提前準備連線，`preload` 是提前抓取特定資源。
- `<base href>` 會影響相對 URL 的解析，包含連結、圖片、CSS、JS、表單 action 與頁內錨點。
- `<base target>` 會影響未指定 `target` 的連結，通常比在單一 `<a>` 上明確設定更難維護。

## 返回

- [回到第 33 章 README](../README.md)
- [回到總目錄](../../README.md)
