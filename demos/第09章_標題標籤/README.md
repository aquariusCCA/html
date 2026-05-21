# HTML 標題標籤對應 Demo 規劃

## 一、Notes 摘要

本章說明 `h1` 到 `h6` 是用來描述內容層級的 HTML 標題元素。核心知識點包含標題層級、標題語意與預設樣式的差異、用 CSS 控制外觀、正確安排文件結構，以及常見錯誤與實務頁面中的應用。

## 二、Demo 清單

| Demo | 類型 | 對應 notes 知識點 | 學習目標 | 建議路徑 |
|---|---|---|---|---|
| `01-basic-heading-levels` | 單一概念 | `h1` 到 `h6` 的用途與層級 | 觀察六個標題元素的語意順序與預設呈現 | `demos/第09章_標題標籤/01-basic-heading-levels/` |
| `02-compare-semantic-and-style` | 對照型 | 標題語意與 CSS 外觀分工 | 分辨「標題層級」與「文字大小」不是同一件事 | `demos/第09章_標題標籤/02-compare-semantic-and-style/` |
| `03-common-mistake-heading-jump` | 常見錯誤 | 層級亂跳、普通文字誤用標題 | 比較錯誤與修正後的標題結構 | `demos/第09章_標題標籤/03-common-mistake-heading-jump/` |
| `04-practical-article-outline` | 實務應用 | 文章頁標題結構、DOM 查找標題節點 | 在文章頁中建立可掃描的標題層級並用 JavaScript 列出 outline | `demos/第09章_標題標籤/04-practical-article-outline/` |

## 三、整體檔案結構

```text
demos/
  第09章_標題標籤/
    README.md
    01-basic-heading-levels/
      index.html
      style.css
      README.md
    02-compare-semantic-and-style/
      index.html
      style.css
      README.md
    03-common-mistake-heading-jump/
      index.html
      style.css
      main.js
      README.md
    04-practical-article-outline/
      index.html
      style.css
      main.js
      README.md
```

## 四、使用方式

每個 demo 都可以直接用瀏覽器開啟 `index.html`。若使用 VS Code，也可以在 demo 資料夾上使用 Live Server 觀察結果。
