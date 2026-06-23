---
source_notes:
  - notes/300-datalist標籤/01-datalist標籤.md
topics: [datalist, 表單輸入, 輸入建議]
summary: "datalist 搭配 label、form、name 與 button 的表單練習。"
---

# datalist 表單搭配練習

> 動手練習。概念與用法說明見 notes/300-datalist標籤/01-datalist標籤.md。

## 題目 1（基礎）· 應用練習題

建立一個搜尋城市的表單。表單需求如下：

- 表單使用 `action="/search"` 與 `method="get"`。
- 欄位標籤文字為 `城市：`。
- 實際輸入欄位的 `id` 是 `city`，`name` 是 `city`。
- 輸入欄位使用 `type="text"`，並連到 `id="city-list"` 的 datalist。
- 建議值包含 `北京市`、`广州市`、`深圳市`。
- 表單有一個送出按鈕，按鈕文字為 `搜尋`。

<details>
<summary>參考解答</summary>

```html
<form action="/search" method="get">
  <label for="city">城市：</label>
  <input id="city" name="city" type="text" list="city-list">

  <button type="submit">搜尋</button>
</form>

<datalist id="city-list">
  <option value="北京市"></option>
  <option value="广州市"></option>
  <option value="深圳市"></option>
</datalist>
```

解題說明：真正會被送出的欄位是 `<input>`，所以它需要 `name="city"`。`label for="city"` 對應到 `input id="city"`，而 `input list="city-list"` 對應到 `datalist id="city-list"`。

</details>

## 題目 2（基礎）· 應用練習題

建立一個輸入常用瀏覽器的表單片段。請把 `<datalist>` 放在 `</form>` 後面，但仍要讓表單中的輸入框可以使用它。

完成標準：

- `<input>` 放在 `<form>` 裡。
- `<datalist>` 放在 `<form>` 外。
- `input[list]` 仍正確對應到 `datalist[id]`。
- 輸入欄位有 `name`，表單送出時才有資料名稱。

<details>
<summary>參考解答</summary>

```html
<form action="/search" method="get">
  <label for="browser">請輸入常用瀏覽器：</label>
  <input id="browser" name="browser" type="text" list="browsers">

  <button type="submit">搜尋</button>
</form>

<datalist id="browsers">
  <option value="Firefox"></option>
  <option value="Chrome"></option>
  <option value="Safari"></option>
</datalist>
```

解題說明：notes 說明 `<datalist>` 常和表單一起使用，但不一定要放在 `<form>` 裡面。只要 `input[list]` 能對上 `datalist[id]`，輸入框就能使用這組建議。

</details>

## 題目 3（進階）· 改錯題

下面這段表單想送出城市搜尋，但有兩個問題：標籤沒有正確對應輸入框，且欄位少了送出資料時使用的名稱。請修正。

```html
<form action="/search" method="get">
  <label for="city">城市：</label>
  <input id="keyword" type="text" list="city-list">

  <button type="submit">搜尋</button>
</form>

<datalist id="city-list">
  <option value="北京市"></option>
  <option value="广州市"></option>
  <option value="深圳市"></option>
</datalist>
```

完成標準：

- `label[for]` 與 `input[id]` 對應。
- `<input>` 補上 `name`。
- 保留 `input[list]` 與 `datalist[id]` 的正確連接。

<details>
<summary>參考解答</summary>

```html
<form action="/search" method="get">
  <label for="city">城市：</label>
  <input id="city" name="city" type="text" list="city-list">

  <button type="submit">搜尋</button>
</form>

<datalist id="city-list">
  <option value="北京市"></option>
  <option value="广州市"></option>
  <option value="深圳市"></option>
</datalist>
```

解題說明：`label for="city"` 要對應到輸入框的 `id="city"`，這樣標籤才是在描述該欄位。`name="city"` 則是表單送出時使用的資料名稱；`<datalist>` 本身不是會被送出的欄位。

</details>
