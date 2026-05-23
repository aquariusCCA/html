# HTML 布局標籤對應 Demo 規劃

## 一、Notes 摘要

本章說明 HTML5 常見布局標籤的用途，重點是用語意描述頁面區域，而不是只用標籤完成視覺排版。核心知識點包含 `header`、`nav`、`main`、`article`、`section`、`aside`、`footer` 的角色，`article` 與 `section` 的差異，以及常見誤用情境。

## 二、Demo 清單

| Demo | 類型 | 對應 notes 知識點 | 學習目標 | 建議路徑 |
|---|---|---|---|---|
| `01-basic-layout-tags` | 單一概念 | 常見布局標籤與基本頁面結構 | 認識頁首、導覽、主要內容、文章、側邊欄與頁尾的角色 | `demos/第26章_布局標籤/01-basic-layout-tags/` |
| `02-compare-div-and-semantic-layout` | 對照型 | 語意化標籤與 `div` 寫法差異 | 觀察外觀相似時，HTML 結構語意如何不同 | `demos/第26章_布局標籤/02-compare-div-and-semantic-layout/` |
| `03-compare-article-and-section` | 對照型 | `article` 與 `section` 的差異 | 判斷內容應該是獨立文章，還是文章中的主題分段 | `demos/第26章_布局標籤/03-compare-article-and-section/` |
| `04-common-mistake-layout-tags` | 常見錯誤 | 布局標籤常見誤用與修正 | 辨識缺少 `main`、濫用 `section`、導覽標示不清等問題 | `demos/第26章_布局標籤/04-common-mistake-layout-tags/` |
| `05-mini-integration-shop-layout` | 小型整合 | 完整頁面布局、`aside`、`article`、多個 `section` | 建立一個接近實務的商品活動頁語意結構 | `demos/第26章_布局標籤/05-mini-integration-shop-layout/` |

## 三、整體檔案結構

```text
demos/
  第26章_布局標籤/
    README.md
    01-basic-layout-tags/
      index.html
      style.css
      README.md
    02-compare-div-and-semantic-layout/
      index.html
      style.css
      README.md
    03-compare-article-and-section/
      index.html
      style.css
      README.md
    04-common-mistake-layout-tags/
      index.html
      style.css
      main.js
      README.md
    05-mini-integration-shop-layout/
      index.html
      style.css
      README.md
```

## 四、使用方式

每個 demo 都可以直接用瀏覽器開啟 `index.html`。若使用 VS Code，也可以在 demo 資料夾上使用 Live Server 觀察結果。

## 五、整體自我檢查

- [ ] 我能說出 `header`、`nav`、`main`、`article`、`section`、`aside`、`footer` 的基本角色。
- [ ] 我能比較語意化標籤與純 `div` 寫法的差異。
- [ ] 我能判斷 `article` 與 `section` 的使用時機。
- [ ] 我能指出常見布局標籤誤用，並提出修正方式。
