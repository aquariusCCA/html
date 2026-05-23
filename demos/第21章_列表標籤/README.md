# HTML 列表標籤 ul、ol、dl 對應 Demo 規劃

## 一、Notes 摘要

本章說明 HTML 列表標籤的語意與用法，核心知識點包含無序列表 `<ul>`、有序列表 `<ol>`、描述列表 `<dl>`、列表項目 `<li>`、描述項目 `<dt>` / `<dd>`、列表巢狀、列表與 CSS 樣式的關係，以及常見錯誤修正。

## 二、Demo 清單

| Demo | 類型 | 對應 notes 知識點 | 學習目標 | 建議路徑 |
|---|---|---|---|---|
| `01-basic-list-types` | 單一概念 / 對照型 | `<ul>`、`<ol>`、`<dl>` 的語意差異 | 比較三種列表適合的內容情境 | `demos/第21章_列表標籤/01-basic-list-types/` |
| `02-description-list-terms` | 單一概念 | `<dl>`、`<dt>`、`<dd>` | 理解描述列表如何表達名詞與說明 | `demos/第21章_列表標籤/02-description-list-terms/` |
| `03-common-mistake-list-nesting` | 常見錯誤 | `<ul>` / `<ol>` 的直接子元素應為 `<li>`、巢狀列表位置 | 觀察錯誤巢狀與正確巢狀的結構差異 | `demos/第21章_列表標籤/03-common-mistake-list-nesting/` |
| `04-practical-navigation-list` | 實務應用 | 導覽列可以用列表表示、CSS 移除預設樣式不改變語意 | 使用 `<nav>`、`<ul>`、`<li>`、`<a>` 建立導覽列 | `demos/第21章_列表標籤/04-practical-navigation-list/` |
| `05-mini-integration-learning-page` | 小型整合 | 列表、步驟、術語、巢狀列表的整合運用 | 在一個小頁面中整合多種列表語意 | `demos/第21章_列表標籤/05-mini-integration-learning-page/` |

## 三、整體檔案結構

```text
demos/
  第21章_列表標籤/
    README.md
    01-basic-list-types/
      index.html
      style.css
      README.md
    02-description-list-terms/
      index.html
      style.css
      README.md
    03-common-mistake-list-nesting/
      index.html
      style.css
      main.js
      README.md
    04-practical-navigation-list/
      index.html
      style.css
      README.md
    05-mini-integration-learning-page/
      index.html
      style.css
      README.md
```

## 四、使用方式

每個 demo 都可以直接用瀏覽器開啟 `index.html`。若使用 VS Code，也可以在 demo 資料夾上使用 Live Server 觀察結果。

建議學習順序：

1. 先看 `01-basic-list-types`，分辨三種列表語意。
2. 再看 `02-description-list-terms`，理解描述列表。
3. 接著看 `03-common-mistake-list-nesting`，避免常見結構錯誤。
4. 最後看 `04-practical-navigation-list` 與 `05-mini-integration-learning-page`，觀察列表在實務頁面中的用法。

