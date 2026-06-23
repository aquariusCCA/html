---
source_notes:
  - notes/240-表單標籤/06-label與表單分組.md
topics: [label, fieldset, legend, 表單無障礙]
summary: "練習用 label 關聯表單控件，並使用 fieldset 與 legend 建立清楚的表單分組。"
---

# label 與 fieldset 分組練習

> 動手練習。概念與用法說明見 notes/240-表單標籤/06-label與表單分組.md。

## 題目 1（基礎）· 應用練習題

請建立帳號欄位，使用 `label for/id` 讓文字「帳號」與輸入框正確關聯。

<details>
<summary>參考解答</summary>

```html
<label for="account">帳號</label>
<input id="account" type="text" name="account">
```

解題說明：`label for` 要對應控件的 `id`。關聯後，使用者點擊文字時，瀏覽器會聚焦到對應控件。
</details>

## 題目 2（基礎）· 應用練習題

請用包覆式 label 建立一個性別 radio 選項「女」。

<details>
<summary>參考解答</summary>

```html
<label>
  <input type="radio" name="gender" value="female">
  女
</label>
```

解題說明：label 可以直接包住控件，不需要 `for/id`。這種寫法常用於 radio 或 checkbox。
</details>

## 題目 3（進階）· 應用練習題

請建立一個註冊表單，分成「主要資訊」與「性別」兩組。

完成標準：

- 每組使用 `<fieldset>`。
- 每組使用 `<legend>` 說明共同主題。
- 帳號與密碼欄位有 label。
- 性別選項有 label。

<details>
<summary>參考解答</summary>

```html
<form action="/signup" method="post">
  <fieldset>
    <legend>主要資訊</legend>

    <label for="account">帳戶</label>
    <input id="account" type="text" name="account" maxlength="10">

    <label for="password">密碼</label>
    <input id="password" type="password" name="password" maxlength="20">
  </fieldset>

  <fieldset>
    <legend>性別</legend>

    <input type="radio" name="gender" value="woman" id="woman">
    <label for="woman">女</label>

    <label>
      <input type="radio" name="gender" value="man">
      男
    </label>
  </fieldset>

  <button type="submit">提交</button>
</form>
```

解題說明：`fieldset` 表示一組相關控件，`legend` 是分組標題。每個實際控件仍應有自己的 label。
</details>

## 題目 4（進階）· 改錯題

下面的 label 與 input 沒有正確關聯。請修正。

```html
<label for="email">電子郵件</label>
<input id="user-email" type="email" name="email">
```

<details>
<summary>參考解答</summary>

```html
<label for="email">電子郵件</label>
<input id="email" type="email" name="email">
```

解題說明：`for="email"` 必須能找到 `id="email"` 的控件。原本 `for` 與 `id` 不一致，label 不會正確關聯。
</details>
