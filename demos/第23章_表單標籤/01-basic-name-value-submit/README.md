# 表單 name/value 提交資料

## 基本資訊

| 欄位 | 內容 |
|---|---|
| Demo 名稱 | `01-basic-name-value-submit` |
| 建議路徑 | `demos/第23章_表單標籤/01-basic-name-value-submit/` |
| Demo 類型 | 單一概念 |
| 難度 | 基礎 |
| 對應 notes | `notes/第23章_表單標籤/表單標籤.md` |
| 主要知識點 | `<form>`、`input`、`name/value`、表單提交資料 |

## 1. Demo 目標

這個 demo 用來示範：

- `<form>` 定義一組表單資料範圍。
- 表單控制項會透過 `name` 與目前值形成提交資料。
- radio、checkbox、select、textarea 都會參與表單資料收集。
- 隱藏欄位雖然畫面不可見，但仍會提交。

## 2. 對應 notes

- 筆記路徑：`notes/第23章_表單標籤/表單標籤.md`
- 對應章節：`3.3 name 與 value 是表單資料的核心`、`4.2 input 基本語法`
- 對應知識點：
  - 表單資料流
  - `name/value`
  - 常見輸入控制項

## 檔案結構

```text
demos/
  第23章_表單標籤/
    01-basic-name-value-submit/
      index.html
      style.css
      main.js
      README.md
```

## 3. 如何執行

方式一：直接打開檔案

1. 找到 `index.html`
2. 使用瀏覽器開啟
3. 修改欄位後點擊「觀察提交資料」

方式二：使用 VS Code Live Server

1. 在 demo 資料夾上按右鍵
2. 選擇 `Open with Live Server`
3. 在瀏覽器中查看結果

## 4. 觀察重點

1. 輸出區只會顯示有 `name` 的欄位。
2. checkbox 選多個時，會出現多筆相同 `name` 的資料。
3. hidden 欄位不顯示在畫面上，但仍會出現在提交資料中。
4. `method="get"` 時，資料可以組成 query string。

## 5. 程式碼重點

### HTML

- `<form>` 包住需要一起提交的控制項。
- 每個需要提交的欄位都有 `name`。
- `<input type="hidden">` 用來攜帶固定資料。

### CSS

- CSS 只用於讓表單欄位與輸出區更容易觀察。

### JavaScript

- 使用 `FormData` 讀取表單提交時會被收集的資料。
- 使用 `event.preventDefault()` 避免真的跳轉頁面。

## 6. 修改練習

請嘗試修改以下內容，觀察結果差異：

1. 移除 `username` 欄位的 `name`，再提交一次。
2. 勾選多個主題，觀察 `topics` 如何出現多筆資料。
3. 把 `method="get"` 改成 `method="post"`，思考提交方式的語意差異。

## 7. 常見錯誤

| 錯誤 | 可能造成的問題 | 修正方式 |
|---|---|---|
| 忘記設定 `name` | 表單提交資料中沒有該欄位 | 需要提交的欄位都設定有意義的 `name` |
| 以為 hidden 欄位是安全資料 | 使用者仍可修改 hidden 值 | 敏感資料必須由後端驗證 |
| checkbox 沒有設定 `value` | 後端收到的資料不清楚 | 每個 checkbox 明確設定 `value` |

## 8. 自我檢查

- [ ] 我能說明 `name` 與 `value` 在表單提交中的角色。
- [ ] 我能指出哪些欄位會出現在 FormData 中。
- [ ] 我能修改欄位並觀察提交資料變化。
- [ ] 我能說明 hidden 欄位為什麼不等於安全資料。
