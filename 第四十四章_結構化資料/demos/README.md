# 第 44 章 結構化資料 Demo

本目錄提供對應第 44 章筆記的範例頁，重點放在 JSON-LD、Schema.org 類型與頁面可見內容的一致性。

## Demo

- [structured-data-demo.html](./structured-data-demo.html)：示範 `<script type="application/ld+json">`、`@context`、`@type`、Article、Product、Course、Event、FAQPage、可見內容對照表、JSON 格式檢查，以及語意化 HTML / `meta description` / Open Graph / JSON-LD 的分工。

## 觀察重點

- JSON-LD 是資料，不是頁面互動 JavaScript。
- `@context` 通常指定 `https://schema.org`，表示使用 Schema.org 詞彙。
- `@type` 表示資料描述的實體類型，例如 `Article`、`Product`、`Course`、`Event`、`FAQPage`。
- JSON-LD 應描述頁面上真實、可見、存在的內容。
- 結構化資料不能取代語意化 HTML，也不保證 SEO 排名或 rich result。
- 頁面沒有的評分、價格、評論或 FAQ，不應只寫在 JSON-LD 裡。
- 實務上要用測試工具與 DevTools 確認 JSON-LD 格式有效並實際輸出到 HTML。

## 返回

- [回到第 44 章 README](../README.md)
- [回到總目錄](../../README.md)
