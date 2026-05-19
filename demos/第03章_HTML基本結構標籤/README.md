# HTML 基本結構標籤對應 Demo 規劃

## 一、Notes 摘要

本章說明一份 HTML 文件開頭最基礎的結構設定，重點包含 `<!doctype html>`、`html lang`、`meta charset`、`head` 與 `body` 的角色、HTML 屬性寫法、布林屬性，以及 HTML 註解的用途與限制。

## 二、Demo 清單

| Demo | 類型 | 對應 notes 知識點 | 學習目標 | 建議路徑 |
|---|---|---|---|---|
| `01-basic-html-skeleton` | 單一概念 | HTML 文件基本骨架、`doctype`、`html`、`head`、`body` | 看懂一份 HTML 文件從宣告到頁面內容的基本組成 | `demos/第03章_HTML基本結構標籤/01-basic-html-skeleton/` |
| `02-lang-charset-compare` | 對照型 | `lang` 文件語言、`meta charset="UTF-8"`、常見語言代碼 | 觀察語言宣告與字元編碼在文件中的位置與用途 | `demos/第03章_HTML基本結構標籤/02-lang-charset-compare/` |
| `03-common-mistake-attributes` | 常見錯誤 | 屬性基本形式、空格分隔、屬性順序、重複屬性 | 比較正確屬性寫法與常見錯誤，避免瀏覽器解析結果不明確 | `demos/第03章_HTML基本結構標籤/03-common-mistake-attributes/` |
| `04-boolean-attributes-form` | 單一概念 | `disabled`、`checked`、`required` 等布林屬性 | 理解布林屬性只要出現就代表啟用狀態 | `demos/第03章_HTML基本結構標籤/04-boolean-attributes-form/` |
| `05-practical-course-signup` | 小型整合 | 基本骨架、屬性、註解、表單範例 | 將本章概念整合成一個可觀察、可修改的課程報名頁 | `demos/第03章_HTML基本結構標籤/05-practical-course-signup/` |

## 三、整體檔案結構

```text
demos/
  第03章_HTML基本結構標籤/
    README.md
    01-basic-html-skeleton/
      index.html
      style.css
      README.md
    02-lang-charset-compare/
      index.html
      style.css
      README.md
    03-common-mistake-attributes/
      index.html
      style.css
      README.md
    04-boolean-attributes-form/
      index.html
      style.css
      README.md
    05-practical-course-signup/
      index.html
      style.css
      README.md
```

## 四、使用方式

每個 demo 都可以直接用瀏覽器開啟 `index.html`。若使用 VS Code，也可以在 demo 資料夾上使用 Live Server 觀察結果。

## 五、自我檢查

- [ ] Demo 內容主要來自 `notes/第03章_HTML基本結構標籤/HTML基本結構標籤.md`。
- [ ] 每個 demo 聚焦一個主要 HTML 基本結構或屬性觀念。
- [ ] 所有 demo 都可以直接打開 `index.html` 觀察。
- [ ] 沒有引入 Vue、React、Bootstrap 或其他第三方框架。
