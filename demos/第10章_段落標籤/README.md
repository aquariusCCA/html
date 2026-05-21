# HTML 段落標籤對應 Demo 規劃

## 一、Notes 摘要

本章說明 `<p>` 是 HTML 的段落元素，用來表示一段完整的文字內容。核心知識點包含段落語意、文章與新聞中的分段、段落預設間距、自動換行、段落與標題或 `div` 的差異，以及常見錯誤如使用 `<br>` 製造段落間距。

## 二、Demo 清單

| Demo | 類型 | 對應 notes 知識點 | 學習目標 | 建議路徑 |
|---|---|---|---|---|
| `01-basic-paragraph-flow` | 單一概念 | `p` 元素的用途、段落分段、自動換行 | 觀察多個 `p` 如何形成正文段落，以及同一段文字如何依容器寬度自動換行 | `demos/第10章_段落標籤/01-basic-paragraph-flow/` |
| `02-compare-paragraph-and-div` | 對照型 | `p`、`div`、標題元素的語意差異 | 比較看起來相似的文字區塊，在 HTML 語意上有什麼不同 | `demos/第10章_段落標籤/02-compare-paragraph-and-div/` |
| `03-common-mistake-br-spacing` | 常見錯誤 | 不應用多個 `<br>` 製造段落間距 | 比較錯誤寫法與正確寫法，並觀察 DOM 中段落與換行標籤的數量 | `demos/第10章_段落標籤/03-common-mistake-br-spacing/` |
| `04-practical-article-page` | 實務應用 | 文章頁中的段落結構、CSS 控制段落樣式、DOM 取得段落 | 建立一個文章頁範例，觀察段落結構與段落間距調整如何分工 | `demos/第10章_段落標籤/04-practical-article-page/` |

## 三、整體檔案結構

```text
demos/
  第10章_段落標籤/
    README.md
    01-basic-paragraph-flow/
      index.html
      style.css
      README.md
    02-compare-paragraph-and-div/
      index.html
      style.css
      README.md
    03-common-mistake-br-spacing/
      index.html
      style.css
      main.js
      README.md
    04-practical-article-page/
      index.html
      style.css
      main.js
      README.md
```

## 四、使用方式

每個 demo 都可以直接用瀏覽器開啟 `index.html`。若使用 VS Code，也可以在 demo 資料夾上使用 Live Server 觀察結果。
