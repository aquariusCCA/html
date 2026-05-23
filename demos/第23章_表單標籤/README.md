# HTML 表單標籤 對應 Demo 規劃

## 一、Notes 摘要

本章說明 HTML 表單標籤的用途與基本結構，核心知識點包含 `<form>`、`<input>`、`name/value`、`label`、`select`、`textarea`、`button`、`disabled`、`readonly`、`fieldset`、`legend`，以及表單常見錯誤與實務注意事項。

表單的學習重點不是只會排出輸入框，而是要理解使用者輸入如何透過表單控制項保存，再由 `name/value` 組成可提交資料。

## 二、Demo 清單

| Demo | 類型 | 對應 notes 知識點 | 學習目標 | 建議路徑 |
|---|---|---|---|---|
| `01-basic-name-value-submit` | 單一概念 | `<form>`、`input`、`name/value`、提交資料 | 觀察表單資料如何由欄位名稱和值組成 | `demos/第23章_表單標籤/01-basic-name-value-submit/` |
| `02-compare-label-binding` | 對照型 | `<label for>`、巢狀 label、未綁定文字 | 比較有無 label 關聯的操作差異 | `demos/第23章_表單標籤/02-compare-label-binding/` |
| `03-common-mistake-button-and-name` | 常見錯誤 | 缺少 `name`、`button` 預設 submit | 觀察錯誤寫法如何影響提交資料與按鈕行為 | `demos/第23章_表單標籤/03-common-mistake-button-and-name/` |
| `04-compare-disabled-readonly-fieldset` | 對照型 | `disabled`、`readonly`、`fieldset disabled` | 比較禁用、唯讀與分組禁用的提交差異 | `demos/第23章_表單標籤/04-compare-disabled-readonly-fieldset/` |
| `05-mini-registration-form` | 小型整合 | 註冊表單、`fieldset`、`select`、`textarea`、`required`、`file` | 整合常見表單標籤完成可觀察的註冊表單 | `demos/第23章_表單標籤/05-mini-registration-form/` |

## 三、整體檔案結構

```text
demos/
  第23章_表單標籤/
    README.md
    01-basic-name-value-submit/
      index.html
      style.css
      main.js
      README.md
    02-compare-label-binding/
      index.html
      style.css
      main.js
      README.md
    03-common-mistake-button-and-name/
      index.html
      style.css
      main.js
      README.md
    04-compare-disabled-readonly-fieldset/
      index.html
      style.css
      main.js
      README.md
    05-mini-registration-form/
      index.html
      style.css
      main.js
      README.md
```

## 四、使用方式

每個 demo 都可以直接用瀏覽器開啟 `index.html`。若使用 VS Code，也可以在 demo 資料夾上使用 Live Server 觀察結果。

建議學習順序：

1. 先看 `01-basic-name-value-submit`，理解表單提交資料的基本單位。
2. 再看 `02-compare-label-binding`，觀察 label 與控制項關聯的差異。
3. 接著看 `03-common-mistake-button-and-name`，理解缺少 `name` 與按鈕預設行為的問題。
4. 再看 `04-compare-disabled-readonly-fieldset`，比較 `disabled`、`readonly` 與分組禁用。
5. 最後看 `05-mini-registration-form`，把常見表單元素整合到一個完整情境中。
