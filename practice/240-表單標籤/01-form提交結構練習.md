---
source_notes:
  - notes/240-表單標籤/01-表單的用途與提交結構.md
topics: [表單結構, 表單提交, form 屬性, name 屬性]
summary: "練習建立可提交的 form 結構，並修正缺少 form 或 name 的常見錯誤。"
---

# form 提交結構練習

> 動手練習。概念與用法說明見 notes/240-表單標籤/01-表單的用途與提交結構.md。

## 題目 1（基礎）· 應用練習題

請建立一個登入表單，送到 `/login`，提交方式為 `post`。

完成標準：

- 使用 `<form>` 包住整組表單控件。
- 設定 `action="/login"` 與 `method="post"`。
- 帳號欄位有 `name="account"`。
- 密碼欄位有 `name="password"`。
- 有一個提交按鈕。

<details>
<summary>參考解答</summary>

```html
<form action="/login" method="post">
  <label for="account">帳號</label>
  <input id="account" type="text" name="account">

  <label for="password">密碼</label>
  <input id="password" type="password" name="password">

  <button type="submit">登入</button>
</form>
```

解題說明：`<form>` 定義資料提交的範圍；`action` 決定資料送到哪裡，`method` 決定提交方式。要提交的欄位需要有 `name`。
</details>

## 題目 2（基礎）· 應用練習題

請建立一個搜尋表單，送到 `/search`，使用 `get` 提交，搜尋欄位名稱為 `keyword`。

<details>
<summary>參考解答</summary>

```html
<form action="/search" method="get">
  <label for="keyword">搜尋關鍵字</label>
  <input id="keyword" type="text" name="keyword">

  <button type="submit">搜尋</button>
</form>
```

解題說明：搜尋通常會把關鍵字作為表單資料提交。`keyword` 來自 `name`，使用者輸入的內容會成為這個欄位的值。
</details>

## 題目 3（進階）· 改錯題

下面畫面有輸入框與按鈕，但沒有明確表單域。請修正成可以原生提交的表單。

```html
<input type="text" name="account">
<button>送出</button>
```

<details>
<summary>參考解答</summary>

```html
<form action="/login" method="post">
  <input type="text" name="account">
  <button type="submit">送出</button>
</form>
```

解題說明：如果需要原生表單提交，表單控件應放在 `<form>` 裡。提交按鈕也應明確設定 `type="submit"`。
</details>

## 題目 4（進階）· 改錯題

下面表單中的輸入框可以輸入，但提交時缺少欄位名稱。請修正。

```html
<form action="/login" method="post">
  <input type="text">
  <button type="submit">登入</button>
</form>
```

<details>
<summary>參考解答</summary>

```html
<form action="/login" method="post">
  <input type="text" name="username">
  <button type="submit">登入</button>
</form>
```

解題說明：表單提交時，後端需要欄位名稱來辨識資料。`name="username"` 會讓使用者輸入的值以 username 這個欄位送出。
</details>
