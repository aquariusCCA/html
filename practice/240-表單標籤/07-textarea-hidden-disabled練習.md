---
source_notes:
  - notes/240-表單標籤/07-textarea多行文本域.md
  - notes/240-表單標籤/08-hidden與disabled表單狀態.md
topics: [textarea, hidden, disabled, 表單提交]
summary: "練習建立 textarea 多行文字欄位，並使用 hidden 與 disabled 表示不同的表單狀態。"
---

# textarea、hidden 與 disabled 練習

> 動手練習。概念與用法說明見 notes/240-表單標籤/07-textarea多行文本域.md 與 notes/240-表單標籤/08-hidden與disabled表單狀態.md。

## 題目 1（基礎）· 應用練習題

請建立一個留言欄位。

完成標準：

- 使用 `<textarea>`。
- 欄位名稱為 `message`。
- 顯示 6 行、40 列。
- 有 label。

<details>
<summary>參考解答</summary>

```html
<label for="message">留言內容</label>
<textarea id="message" name="message" rows="6" cols="40"></textarea>
```

解題說明：多行文字輸入應使用 `<textarea>`。`rows` 指定預設顯示行數，`cols` 指定預設顯示列數。
</details>

## 題目 2（基礎）· 應用練習題

請建立一個文章留言表單，畫面上讓使用者填留言，但提交時一起帶上文章 id `42`。

<details>
<summary>參考解答</summary>

```html
<form action="/comment" method="post">
  <input type="hidden" name="post_id" value="42">

  <label for="message">留言</label>
  <textarea id="message" name="message"></textarea>

  <button type="submit">送出留言</button>
</form>
```

解題說明：`type="hidden"` 不顯示在畫面上，但通常會隨表單提交。這適合帶上文章 id 這類固定資料。
</details>

## 題目 3（基礎）· 應用練習題

請建立一組暫時不可編輯的進階設定區。

完成標準：

- 使用 `<fieldset disabled>` 禁用整組控件。
- 使用 `<legend>` 標示分組標題。
- 裡面有一個文字欄位與一個普通按鈕。

<details>
<summary>參考解答</summary>

```html
<form action="/settings" method="post">
  <fieldset disabled>
    <legend>進階設定</legend>

    <input type="text" name="setting_name" value="暫不可編輯">
    <button type="button">測試設定</button>
  </fieldset>
</form>
```

解題說明：`fieldset disabled` 可以禁用一整組表單控件。禁用後，控件通常不可操作，也通常不會提交。
</details>

## 題目 4（進階）· 改錯題

下面 textarea 的初始內容寫錯位置了，也多加了不需要的 `type`。請修正。

```html
<textarea type="text" name="intro" value="這是預設文字"></textarea>
```

<details>
<summary>參考解答</summary>

```html
<textarea name="intro">這是預設文字</textarea>
```

解題說明：`textarea` 沒有 `type` 屬性。它的初始內容不是寫在 `value`，而是寫在開始標籤與結束標籤中間。
</details>
