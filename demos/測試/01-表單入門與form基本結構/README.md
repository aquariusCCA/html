# 表單入門與 form 基本結構 demos

來源筆記：`notes/測試/01-表單入門與form基本結構.md`

## 建議學習順序

1. `01-表單三個組成.html`
2. `02-form決定提交範圍.html`
3. `03-action與method提交方向.html`
4. `04-name欄位名稱.html`
5. `05-target開啟位置.html`

## Demo 對應觀念

| 檔案 | 對應觀念 |
| --- | --- |
| `01-表單三個組成.html` | 表單域、表單控件、提示信息 |
| `02-form決定提交範圍.html` | `<form>` 會決定哪些控件屬於同一份表單 |
| `03-action與method提交方向.html` | `action` 指定送出位置，`method` 指定提交方式 |
| `04-name欄位名稱.html` | `name` 決定提交資料時的欄位名稱 |
| `05-target開啟位置.html` | `target` 指定提交結果的開啟位置 |

## 觀察重點與修改任務

### 01-表單三個組成.html

觀察重點：找出哪一段是表單域、哪裡是表單控件、哪裡是提示信息。

建議修改任務：新增一個「姓名」輸入框，並替它加上對應的 `<label>`。

### 02-form決定提交範圍.html

觀察重點：比較「錯誤寫法」與「正確寫法」中，輸入框是否被包在 `<form>` 裡。

建議修改任務：把錯誤寫法中的帳號輸入框移進 `<form>`，讓它變成可提交的欄位。

### 03-action與method提交方向.html

觀察重點：查看 `<form>` 開始標籤上的 `action="/search"` 與 `method="get"`。

建議修改任務：把 `action` 改成 `/products`，並觀察程式碼語意如何改變。

### 04-name欄位名稱.html

觀察重點：比較兩個 `<input>` 的 `name` 值，理解它們會成為提交資料的欄位名稱。

建議修改任務：把電子信箱欄位的 `name` 從 `email` 改成 `userEmail`。

### 05-target開啟位置.html

觀察重點：查看 `<form>` 上的 `target="_blank"`，理解提交結果會嘗試在新分頁開啟。

建議修改任務：移除 `target="_blank"`，比較提交後開啟位置的差異。
