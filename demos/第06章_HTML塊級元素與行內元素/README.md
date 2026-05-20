# HTML 塊級元素與行內元素對應 Demo 規劃

## 一、Notes 摘要

本章說明 HTML 塊級元素與行內元素的預設排版差異，並補充元素巢狀限制、`div` 與 `span` 的使用情境、CSS `display` 與盒模型的關係，以及不合法 HTML 結構可能造成的 DOM 解析差異。

## 二、Demo 清單

| Demo | 類型 | 對應 notes 知識點 | 學習目標 | 建議路徑 |
|---|---|---|---|---|
| `01-block-inline-flow` | 對照型 | 塊級元素獨佔一行、行內元素同列排列 | 觀察不同元素的預設排列差異 | `demos/第06章_HTML塊級元素與行內元素/01-block-inline-flow/` |
| `02-box-model-sizing` | 對照型 | `width`、`height`、`margin`、`padding` 對不同元素的影響 | 比較行內、塊級、`inline-block` 與表單控制項的尺寸行為 | `demos/第06章_HTML塊級元素與行內元素/02-box-model-sizing/` |
| `03-common-mistake-nesting` | 常見錯誤 | `p`、標題元素、`a` 的巢狀限制與 DOM 解析 | 觀察錯誤 HTML 被瀏覽器解析後的實際 DOM | `demos/第06章_HTML塊級元素與行內元素/03-common-mistake-nesting/` |
| `04-practical-semantic-card-list` | 實務應用 | 語意元素、塊級容器、行內標記、可點擊卡片 | 在實務頁面中正確組合區塊、行內與語意元素 | `demos/第06章_HTML塊級元素與行內元素/04-practical-semantic-card-list/` |

## 三、整體檔案結構

```text
demos/
  第06章_HTML塊級元素與行內元素/
    README.md
    01-block-inline-flow/
      index.html
      style.css
      README.md
    02-box-model-sizing/
      index.html
      style.css
      README.md
    03-common-mistake-nesting/
      index.html
      style.css
      main.js
      README.md
    04-practical-semantic-card-list/
      index.html
      style.css
      README.md
```

## 四、使用方式

每個 demo 都可以直接用瀏覽器開啟 `index.html`。若使用 VS Code，也可以在 demo 資料夾上使用 Live Server 觀察結果。
