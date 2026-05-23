# 小型註冊表單整合

## 基本資訊

| 欄位 | 內容 |
|---|---|
| Demo 名稱 | `05-mini-registration-form` |
| 建議路徑 | `demos/第23章_表單標籤/05-mini-registration-form/` |
| Demo 類型 | 小型整合 |
| 難度 | 整合 |
| 對應 notes | `notes/第23章_表單標籤/表單標籤.md` |
| 主要知識點 | `<form>`、`input`、`select`、`textarea`、`button`、`fieldset`、`legend`、`required`、`file` |

## 1. Demo 目標

這個 demo 用來示範：

- 如何將多種表單控制項組成一個註冊表單。
- 如何使用 `<fieldset>` 與 `<legend>` 分組。
- 如何使用 `required`、`maxlength`、`placeholder`、`autocomplete` 等常見屬性。
- 如何使用 `FormData` 觀察提交時會被收集的資料。
- 檔案欄位在傳統表單提交時為什麼需要 `enctype="multipart/form-data"`。

## 2. 對應 notes

- 筆記路徑：`notes/第23章_表單標籤/表單標籤.md`
- 對應章節：`4. 語法與基本用法`、`5. 範例說明`、`6. 實務應用場景`
- 對應知識點：
  - 註冊表單
  - 表單分組
  - 常見 input 類型
  - 下拉選單與多行文字輸入
  - 原生必填驗證

## 檔案結構

```text
demos/
  第23章_表單標籤/
    05-mini-registration-form/
      index.html
      style.css
      main.js
      README.md
```

## 3. 如何執行

方式一：直接打開檔案

1. 找到 `index.html`
2. 使用瀏覽器開啟
3. 填寫表單並點擊「送出註冊」

方式二：使用 VS Code Live Server

1. 在 demo 資料夾上按右鍵
2. 選擇 `Open with Live Server`
3. 在瀏覽器中查看結果

## 4. 觀察重點

1. 未填寫 required 欄位時，瀏覽器會先阻止表單提交。
2. `fieldset` 與 `legend` 讓表單分區更清楚。
3. 每個要提交的欄位都有 `name`。
4. checkbox 可提交多筆相同 `name` 的資料。
5. hidden 欄位不顯示，但會出現在提交摘要中。

## 5. 程式碼重點

### HTML

- 使用 `<form enctype="multipart/form-data">` 示範檔案欄位的傳統提交設定。
- 使用 `<fieldset>` 與 `<legend>` 分成基本資料、課程偏好與補充資訊。
- 使用正確 label 關聯每個可見欄位。

### CSS

- 使用簡單間距、邊框與 focus 樣式，讓表單結構與操作狀態清楚。

### JavaScript

- 使用 `FormData` 讀取表單資料。
- 對 file 欄位顯示檔名與檔案類型。
- 使用 `preventDefault()` 避免真的送到伺服器。

## 6. 修改練習

請嘗試修改以下內容，觀察結果差異：

1. 移除 `email` 欄位的 `required`，再嘗試空白提交。
2. 新增一個 radio 選項，例如「電話通知」。
3. 新增一個 checkbox 主題，例如「表單驗證」。
4. 移除某個欄位的 `name`，觀察提交摘要是否還有該資料。

## 7. 常見錯誤

| 錯誤 | 可能造成的問題 | 修正方式 |
|---|---|---|
| 只有 placeholder，沒有 label | 欄位名稱會在輸入後消失，也不利於可訪問性 | 每個欄位都搭配 label |
| 檔案表單缺少 `enctype` | 傳統表單上傳檔案可能無法正確送出 | 使用 `enctype="multipart/form-data"` |
| 只依賴前端 required | 使用者仍可能繞過前端驗證 | 後端必須做最終驗證 |
| 普通按鈕未指定 type | 可能誤送出表單 | 普通按鈕使用 `type="button"` |

## 8. 自我檢查

- [ ] 我能建立包含多種控制項的完整表單。
- [ ] 我能使用 `fieldset` 與 `legend` 分組。
- [ ] 我能說明 `required` 的作用與限制。
- [ ] 我能指出哪些欄位會出現在提交摘要中。
- [ ] 我能說明檔案欄位為什麼需要 `multipart/form-data`。
