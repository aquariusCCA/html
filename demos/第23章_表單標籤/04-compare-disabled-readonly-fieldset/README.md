# disabled、readonly、fieldset disabled 對照

## 基本資訊

| 欄位 | 內容 |
|---|---|
| Demo 名稱 | `04-compare-disabled-readonly-fieldset` |
| 建議路徑 | `demos/第23章_表單標籤/04-compare-disabled-readonly-fieldset/` |
| Demo 類型 | 對照型 |
| 難度 | 進階 |
| 對應 notes | `notes/第23章_表單標籤/表單標籤.md` |
| 主要知識點 | `disabled`、`readonly`、`fieldset disabled` |

## 1. Demo 目標

這個 demo 用來示範：

- `readonly` 欄位不可編輯，但通常仍會提交。
- `disabled` 欄位不可操作，也不會提交。
- `<fieldset disabled>` 可以禁用一組表單控制項。
- `<form disabled>` 不是有效的禁用整個表單方式。

## 2. 對應 notes

- 筆記路徑：`notes/第23章_表單標籤/表單標籤.md`
- 對應章節：`4.12 禁用表單控制項`、`7. 常見錯誤與修正`
- 對應知識點：
  - `disabled`
  - `readonly`
  - `<fieldset disabled>`

## 檔案結構

```text
demos/
  第23章_表單標籤/
    04-compare-disabled-readonly-fieldset/
      index.html
      style.css
      main.js
      README.md
```

## 3. 如何執行

方式一：直接打開檔案

1. 找到 `index.html`
2. 使用瀏覽器開啟
3. 嘗試編輯不同欄位
4. 點擊「觀察提交資料」

方式二：使用 VS Code Live Server

1. 在 demo 資料夾上按右鍵
2. 選擇 `Open with Live Server`
3. 在瀏覽器中查看結果

## 4. 觀察重點

1. `readonly` 的帳號 ID 不能編輯，但會出現在提交資料中。
2. `disabled` 的目前方案不能編輯，也不會出現在提交資料中。
3. `fieldset disabled` 內的 checkbox 都不能操作，也不會提交。
4. 一般欄位可以修改並提交。

## 5. 程式碼重點

### HTML

- 使用 `readonly` 表示欄位不可編輯但仍需提交。
- 使用 `disabled` 表示欄位暫時不可用且不需提交。
- 使用 `<fieldset disabled>` 一次禁用一組控制項。

### CSS

- 使用不同背景色輔助觀察 readonly 與 disabled 欄位。

### JavaScript

- 使用 `FormData` 顯示實際會提交的欄位。

## 6. 修改練習

請嘗試修改以下內容，觀察結果差異：

1. 將 `accountId` 從 `readonly` 改成 `disabled`。
2. 移除 `currentPlan` 的 `disabled`。
3. 移除 `<fieldset>` 上的 `disabled`。

## 7. 常見錯誤

| 錯誤 | 可能造成的問題 | 修正方式 |
|---|---|---|
| 以為 `disabled` 欄位會提交 | 後端收不到該欄位 | 若需要提交，改用 `readonly` 或其他設計 |
| 使用 `<form disabled>` | 不會有效禁用整個表單 | 使用 `<fieldset disabled>` 或個別控制項禁用 |
| 對 checkbox 使用 `readonly` | checkbox 不適用 readonly 行為 | 使用 `disabled` 或用 JavaScript 控制狀態 |

## 8. 自我檢查

- [ ] 我能說明 `disabled` 與 `readonly` 的提交差異。
- [ ] 我能使用 `<fieldset disabled>` 禁用一組欄位。
- [ ] 我能判斷什麼情境適合用 disabled。
- [ ] 我能避免使用 `<form disabled>` 當作禁用方式。
