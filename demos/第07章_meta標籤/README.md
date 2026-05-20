# HTML meta 標籤對應 Demo 規劃

## 一、Notes 摘要

本章說明 `<meta>` 是描述 HTML 文件中繼資訊的空元素，通常放在 `<head>` 中。核心知識點包含 `charset`、viewport、`name` / `content`、`http-equiv`、`robots`、`description`、Open Graph，以及常見錯誤與實務注意事項。

## 二、Demo 清單

| Demo | 類型 | 對應 notes 知識點 | 學習目標 | 建議路徑 |
|---|---|---|---|---|
| `01-basic-head-metadata` | 單一概念 | `<meta>` 放在 `<head>`、`charset`、viewport、`description`、`robots`、Open Graph | 觀察 metadata 不直接顯示在頁面，但會存在於 DOM 中 | `demos/第07章_meta標籤/01-basic-head-metadata/` |
| `02-compare-viewport-layout` | 對照型 | viewport 對行動裝置排版的影響 | 比較有 viewport 與缺少 viewport 時的閱讀差異 | `demos/第07章_meta標籤/02-compare-viewport-layout/` |
| `03-compare-robots-rules` | 對照型 | `robots` 的 `index`、`noindex`、`follow`、`nofollow`、`noarchive`、`none` | 理解 robots 是搜尋引擎索引建議，不是權限控管 | `demos/第07章_meta標籤/03-compare-robots-rules/` |
| `04-practical-open-graph-card` | 實務應用 | `property` + `content`、Open Graph metadata | 用分享卡片預覽理解 `og:title`、`og:description`、`og:image`、`og:url`、`og:type` | `demos/第07章_meta標籤/04-practical-open-graph-card/` |
| `05-common-mistake-meta-usage` | 常見錯誤 | `<meta>` 放錯位置、缺少 `content`、錯誤結束標籤、濫用 `keywords` / `refresh` | 辨識常見錯誤並知道修正方向 | `demos/第07章_meta標籤/05-common-mistake-meta-usage/` |

## 三、整體檔案結構

```text
demos/
  第07章_meta標籤/
    README.md
    01-basic-head-metadata/
      index.html
      style.css
      main.js
      README.md
    02-compare-viewport-layout/
      index.html
      style.css
      README.md
    03-compare-robots-rules/
      index.html
      style.css
      main.js
      README.md
    04-practical-open-graph-card/
      index.html
      style.css
      main.js
      README.md
    05-common-mistake-meta-usage/
      index.html
      style.css
      main.js
      README.md
```

## 四、使用方式

每個 demo 都可以直接用瀏覽器開啟 `index.html`。若使用 VS Code，也可以在 demo 資料夾上使用 Live Server 觀察結果。

