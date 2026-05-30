# 練習題：表單入門與 form 基本結構

## 來源

- 來源模式：單篇筆記
- 來源路徑：`notes/測試/01-表單入門與form基本結構.md`

## 題目總覽

| 題號 | 難度 | 題型 | 對應觀念 |
| --- | --- | --- | --- |
| 1 | Level 1 | 基礎使用題 | `<form>` 基本語法、`action`、`method` |
| 2 | Level 1 | 基礎使用題 | 表單控件的 `name` 與提交欄位 |
| 3 | Level 2 | 小功能題 | 搜尋表單結構、提示信息、提交按鈕 |
| 4 | Level 2 | 小功能題 | 登入表單結構、表單域與表單控件 |
| 5 | Level 3 | 變形題 | 將留言需求改寫成表單結構 |
| 6 | Level 4 | 除錯題 | 表單控件放在 `<form>` 外導致資料不會提交 |

---

## 題目 1：建立最小表單範圍

- 難度：Level 1
- 題型：基礎使用題
- 對應觀念：`<form>` 是表單域，`action` 指定提交位置，`method` 指定提交方式
- 來源筆記：`notes/測試/01-表單入門與form基本結構.md`

### 任務說明

請寫出一個最小的表單範圍，表單送出時提交到 `/register`，提交方式使用 `post`。

### 完成條件

- 使用 `<form>` 建立表單域。
- `action` 設為 `/register`。
- `method` 設為 `post`。
- 表單內先放一段文字 `註冊表單`，不用建立輸入框。

### 提示

`<form>` 的開始標籤可以同時放 `action` 和 `method` 屬性。

### 參考答案

```html
<form action="/register" method="post">
  註冊表單
</form>
```

### 檢查重點

- 是否使用 `<form>` 包住表單內容。
- `action` 是否寫成 `/register`。
- `method` 是否寫成 `post`。

---

## 題目 2：替輸入框設定提交欄位名稱

- 難度：Level 1
- 題型：基礎使用題
- 對應觀念：`name` 決定表單提交時的欄位名稱
- 來源筆記：`notes/測試/01-表單入門與form基本結構.md`

### 任務說明

請在表單中建立一個帳號輸入框，讓它提交時的欄位名稱是 `username`。

### 完成條件

- 使用 `<form>` 包住輸入框。
- 表單 `action` 設為 `/login`，`method` 設為 `post`。
- 建立一個文字輸入框。
- 輸入框要有 `name="username"`。

### 提示

沒有 `name` 的輸入框，通常不會形成可辨識的提交資料。

### 參考答案

```html
<form action="/login" method="post">
  <input type="text" name="username">
</form>
```

### 檢查重點

- 輸入框是否放在 `<form>` 裡面。
- 輸入框是否有 `name="username"`。
- 表單提交位置與方式是否正確。

---

## 題目 3：建立搜尋表單

- 難度：Level 2
- 題型：小功能題
- 對應觀念：表單域、表單控件、提示信息、提交按鈕
- 來源筆記：`notes/測試/01-表單入門與form基本結構.md`

### 任務說明

請建立一個搜尋表單，讓使用者輸入關鍵字後送到 `/search`。

### 完成條件

- 使用 `<form>`，`action` 設為 `/search`，`method` 設為 `get`。
- 使用 `<label>` 顯示提示文字 `搜尋關鍵字`。
- 建立一個文字輸入框，`id` 設為 `keyword`，`name` 設為 `keyword`。
- 建立一個提交按鈕，按鈕文字為 `搜尋`。

### 提示

`label` 的 `for` 可以對應輸入框的 `id`，讓提示文字和控件關聯起來。

### 參考答案

```html
<form action="/search" method="get">
  <label for="keyword">搜尋關鍵字</label>
  <input type="text" id="keyword" name="keyword">

  <button type="submit">搜尋</button>
</form>
```

### 檢查重點

- 表單是否使用 `method="get"`。
- `label for="keyword"` 是否對應 `input id="keyword"`。
- 輸入框是否有 `name="keyword"`。
- 提交按鈕是否放在表單內。

---

## 題目 4：建立登入表單

- 難度：Level 2
- 題型：小功能題
- 對應觀念：表單域包住一組表單控件，提交按鈕送出同一份表單資料
- 來源筆記：`notes/測試/01-表單入門與form基本結構.md`

### 任務說明

請建立一個登入表單，包含帳號欄位、密碼欄位與登入按鈕。

### 完成條件

- 使用 `<form>`，`action` 設為 `/login`，`method` 設為 `post`，`name` 設為 `loginForm`。
- 帳號欄位使用 `name="username"`。
- 密碼欄位使用 `name="password"`。
- 兩個欄位都要放在同一個 `<form>` 裡。
- 建立一個提交按鈕，按鈕文字為 `登入`。

### 提示

同一份表單要提交的控件，應該放在同一個 `<form>` 範圍內。

### 參考答案

```html
<form action="/login" method="post" name="loginForm">
  <label for="username">帳號</label>
  <input type="text" id="username" name="username">

  <label for="password">密碼</label>
  <input type="password" id="password" name="password">

  <button type="submit">登入</button>
</form>
```

### 檢查重點

- 帳號與密碼欄位是否都在同一個 `<form>` 裡。
- 兩個欄位是否都有 `name`。
- 表單是否有 `name="loginForm"`。
- 按鈕是否是提交按鈕。

---

## 題目 5：把留言需求改成表單

- 難度：Level 3
- 題型：變形題
- 對應觀念：根據情境判斷表單域、表單控件與提示信息
- 來源筆記：`notes/測試/01-表單入門與form基本結構.md`

### 任務說明

請根據以下需求建立留言表單，不要直接照抄搜尋或登入範例。

使用者要在文章頁面留下暱稱與留言內容，送出後資料提交到 `/comments`，提交方式使用 `post`。

### 完成條件

- 使用 `<form>`，`action` 設為 `/comments`，`method` 設為 `post`。
- 建立暱稱欄位，欄位名稱為 `nickname`。
- 建立留言內容欄位，欄位名稱為 `message`。
- 兩個欄位都要有提示文字。
- 建立提交按鈕，按鈕文字為 `送出留言`。
- 所有需要提交的欄位都要放在 `<form>` 裡。

### 提示

這題重點不是使用新的標籤，而是能不能把「收集使用者資料」的情境整理成清楚的表單結構。

### 參考答案

```html
<form action="/comments" method="post">
  <label for="nickname">暱稱</label>
  <input type="text" id="nickname" name="nickname">

  <label for="message">留言內容</label>
  <input type="text" id="message" name="message">

  <button type="submit">送出留言</button>
</form>
```

### 檢查重點

- 是否依照留言情境調整 `action` 和欄位名稱。
- 是否避免只照抄搜尋表單的 `keyword`。
- 需要提交的欄位是否都在 `<form>` 裡。
- `name` 是否能清楚表示提交資料的欄位意義。

---

## 題目 6：修正不會提交帳號的表單

- 難度：Level 4
- 題型：除錯題
- 對應觀念：表單控件必須放在對應的 `<form>` 裡，才會自然跟著表單提交
- 來源筆記：`notes/測試/01-表單入門與form基本結構.md`

### 錯誤程式碼

```html
<label for="username">帳號</label>
<input type="text" id="username" name="username">

<form action="/login" method="post">
  <button type="submit">登入</button>
</form>
```

### 任務說明

請指出這段程式碼的錯誤原因，並寫出修正後的 HTML。

### 完成條件

- 說明為什麼帳號欄位不會自然跟著登入表單提交。
- 將帳號欄位移到正確的 `<form>` 範圍內。
- 保留 `action="/login"` 與 `method="post"`。
- 保留提交按鈕。

### 提示

瀏覽器提交的是指定 `<form>` 範圍內的表單控件。

### 參考答案

```html
<form action="/login" method="post">
  <label for="username">帳號</label>
  <input type="text" id="username" name="username">

  <button type="submit">登入</button>
</form>
```

### 檢查重點

- 輸入框是否已移入 `<form>`。
- `name="username"` 是否保留，讓資料有欄位名稱。
- 修正後是否只有一個清楚的登入表單範圍。
