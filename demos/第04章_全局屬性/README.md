# HTML 全局屬性對應 Demo 規劃

## 一、Notes 摘要

本章介紹 HTML 全局屬性的用途與限制，重點包含 `id`、`class`、`style`、`title`、`hidden`、`data-*`、`lang`、`dir`、`translate`、`contenteditable`、`spellcheck`、`draggable`、`tabindex`、`accesskey` 等屬性，以及它們與 CSS、JavaScript、DOM、可訪問性的關係。

## 二、Demo 清單

| 編號 | Demo 名稱 | 類型 | 對應知識點 | 建議路徑 |
|---:|---|---|---|---|
| 01 | `01-id-class-style-title` | 對照型 | `id`、`class`、`style`、`title` | `demos/第04章_全局屬性/01-id-class-style-title/` |
| 02 | `02-data-hidden-interaction` | 實務應用 | `data-*`、`hidden`、DOM 操作 | `demos/第04章_全局屬性/02-data-hidden-interaction/` |
| 03 | `03-language-dir-translate` | 對照型 | `lang`、`dir`、`translate` | `demos/第04章_全局屬性/03-language-dir-translate/` |
| 04 | `04-editable-spellcheck` | 單一概念 | `contenteditable`、`spellcheck` | `demos/第04章_全局屬性/04-editable-spellcheck/` |
| 05 | `05-focus-drag-attributes` | 小型整合 | `tabindex`、`accesskey`、`draggable` | `demos/第04章_全局屬性/05-focus-drag-attributes/` |

## 三、整體檔案結構

```text
demos/
  第04章_全局屬性/
    README.md
    01-id-class-style-title/
      index.html
      style.css
      README.md
    02-data-hidden-interaction/
      index.html
      style.css
      main.js
      README.md
    03-language-dir-translate/
      index.html
      style.css
      README.md
    04-editable-spellcheck/
      index.html
      style.css
      main.js
      README.md
    05-focus-drag-attributes/
      index.html
      style.css
      main.js
      README.md
```

## 四、使用方式

每個 demo 都可以直接用瀏覽器開啟 `index.html`。若使用 VS Code，也可以在 demo 資料夾上使用 Live Server 觀察結果。

