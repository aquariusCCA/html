# HTML 語意化標籤對應 Demo 規劃

## 一、Notes 摘要

本章說明 semantic HTML 的核心：根據內容意義選擇合適元素，而不是只依照畫面外觀選擇標籤。重點包含 `header`、`nav`、`main`、`article`、`section`、`aside`、`footer` 的用途，語意化標籤與 `div` 寫法的差異，語意化對閱讀、維護、可訪問性與 SEO 的幫助，以及常見誤用情境。

## 二、Demo 清單

| Demo | 類型 | 對應 notes 知識點 | 學習目標 | 建議路徑 |
|---|---|---|---|---|
| `01-basic-page-landmarks` | 單一概念 | 常見語意化標籤與基本頁面結構 | 認識頁首、導覽、主要內容、文章、補充資訊與頁尾的角色 | `demos/第12章_語意化標籤/01-basic-page-landmarks/` |
| `02-compare-div-and-semantic-layout` | 對照型 | `div` 版面與語意化版面的差異 | 比較外觀相似時，HTML 結構語意如何不同 | `demos/第12章_語意化標籤/02-compare-div-and-semantic-layout/` |
| `03-common-mistake-semantic-tags` | 常見錯誤 | 語意化標籤常見誤用與修正 | 辨識 `section`、`nav`、`article`、`main` 的常見錯誤 | `demos/第12章_語意化標籤/03-common-mistake-semantic-tags/` |
| `04-practical-article-layout` | 實務應用 | 文章頁、延伸閱讀、區塊標題與可重複使用的 `header` / `footer` | 建立一個結構清楚的文章頁版面 | `demos/第12章_語意化標籤/04-practical-article-layout/` |

## 三、整體檔案結構

```text
demos/
  第12章_語意化標籤/
    README.md
    01-basic-page-landmarks/
      index.html
      style.css
      README.md
    02-compare-div-and-semantic-layout/
      index.html
      style.css
      README.md
    03-common-mistake-semantic-tags/
      index.html
      style.css
      main.js
      README.md
    04-practical-article-layout/
      index.html
      style.css
      README.md
```

## 四、使用方式

每個 demo 都可以直接用瀏覽器開啟 `index.html`。若使用 VS Code，也可以在 demo 資料夾上使用 Live Server 觀察結果。

