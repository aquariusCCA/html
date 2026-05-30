# 表單按鈕與提交重置操作 demos

來源筆記：`notes/測試/04-表單按鈕與提交重置操作.md`

## 建議學習順序

1. `01-submit提交表單.html`
2. `02-input與button提交按鈕.html`
3. `03-reset重置表單.html`
4. `04-button普通按鈕.html`
5. `05-button忘記type的錯誤.html`

## Demo 對應觀念

| 檔案 | 對應觀念 |
| --- | --- |
| `01-submit提交表單.html` | `type="submit"` 會提交表單 |
| `02-input與button提交按鈕.html` | `<input type="submit">` 與 `<button type="submit">` 的按鈕文字差異 |
| `03-reset重置表單.html` | `type="reset"` 會把表單恢復成初始狀態 |
| `04-button普通按鈕.html` | `type="button"` 是不會自動提交的一般操作按鈕 |
| `05-button忘記type的錯誤.html` | 表單中的 `<button>` 沒寫 `type` 時預設是 `submit` |

## 觀察重點與修改任務

### 01-submit提交表單.html

觀察重點：查看提交按鈕與 `<form action="/register" method="post">` 的關係。

建議修改任務：把按鈕文字從「免費註冊」改成「送出資料」。

### 02-input與button提交按鈕.html

觀察重點：比較 `<input type="submit" value="...">` 和 `<button type="submit">...</button>` 的按鈕文字放在哪裡。

建議修改任務：把第一個表單的 `value` 改成「建立帳號」，再把第二個表單的標籤內容也改成「建立帳號」。

### 03-reset重置表單.html

觀察重點：修改暱稱或城市後按「重新填寫」，確認欄位會回到初始值。

建議修改任務：把暱稱的初始 `value` 從「小明」改成自己的名字。

### 04-button普通按鈕.html

觀察重點：「取得簡訊驗證碼」使用 `type="button"`，不會自動提交表單。

建議修改任務：把「取得簡訊驗證碼」的 `type` 改成 `submit`，思考這是否符合按鈕用途。

### 05-button忘記type的錯誤.html

觀察重點：比較錯誤寫法中沒有 `type` 的 `<button>`，以及正確寫法中的 `type="button"`。

建議修改任務：替錯誤寫法的 `<button>` 補上 `type="button"`，避免它預設提交表單。
