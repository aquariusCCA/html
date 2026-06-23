---
source_notes:
  - notes/240-表單標籤/02-input基礎與文字密碼輸入.md
topics: [input 控件, 文字輸入, 密碼輸入, 檔案上傳]
summary: "練習使用 input 建立文字、密碼與檔案欄位，並分辨 value 與 placeholder 的用途。"
---

# input 文字、密碼與檔案練習

> 動手練習。概念與用法說明見 notes/240-表單標籤/02-input基礎與文字密碼輸入.md。

## 題目 1（基礎）· 應用練習題

請建立一個帳號輸入欄位。

完成標準：

- 使用 `<input>`。
- `type` 為 `text`。
- `name` 為 `username`。
- 有提示文字 `請輸入使用者名稱`。
- 最多輸入 20 個字元。

<details>
<summary>參考解答</summary>

```html
<label for="username">使用者名稱</label>
<input id="username" type="text" name="username" placeholder="請輸入使用者名稱" maxlength="20">
```

解題說明：短文字輸入使用 `type="text"`。`name` 是提交欄位名稱，`placeholder` 是輸入前的提示文字，`maxlength` 限制最多字元數。
</details>

## 題目 2（基礎）· 應用練習題

請建立一個密碼輸入欄位，欄位名稱為 `password`，提示文字為 `請輸入密碼`。

<details>
<summary>參考解答</summary>

```html
<label for="password">密碼</label>
<input id="password" type="password" name="password" placeholder="請輸入密碼">
```

解題說明：密碼欄位使用 `type="password"`，瀏覽器會遮蔽輸入內容。但這只是畫面顯示，不代表資料已經被加密。
</details>

## 題目 3（基礎）· 應用練習題

請建立一個上傳多張生活照的檔案欄位。

完成標準：

- 使用 `type="file"`。
- 欄位名稱為 `photos`。
- 允許一次選擇多個檔案。

<details>
<summary>參考解答</summary>

```html
<label for="photos">上傳多張生活照</label>
<input id="photos" type="file" name="photos" multiple>
```

解題說明：檔案欄位使用 `type="file"`。若允許一次選擇多個檔案，可以加上 `multiple`。
</details>

## 題目 4（進階）· 改錯題

下面欄位把提示文字寫成 `value`。請改成較合適的寫法。

```html
<input type="text" name="username" value="請輸入使用者名稱">
```

<details>
<summary>參考解答</summary>

```html
<input type="text" name="username" placeholder="請輸入使用者名稱">
```

解題說明：`value` 是欄位真正的值，可能被提交；`placeholder` 才是輸入前顯示的提示文字。
</details>
