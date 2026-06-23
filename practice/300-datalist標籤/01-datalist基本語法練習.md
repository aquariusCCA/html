---
source_notes:
  - notes/300-datalist標籤/01-datalist標籤.md
topics: [datalist, 表單輸入, 輸入建議]
summary: "datalist 基本語法的動手練習，包含 input[list]、datalist[id] 與 option value。"
---

# datalist 基本語法練習

> 動手練習。概念與用法說明見 notes/300-datalist標籤/01-datalist標籤.md。

## 題目 1（基礎）· 應用練習題

建立一個讓使用者輸入常用瀏覽器的文字欄位。欄位要使用 `type="text"`，並連到一組 `<datalist>` 建議清單。建議清單至少包含 `Firefox`、`Chrome`、`Safari` 三個值。

完成標準：

- `<input>` 具有 `list` 屬性。
- `<datalist>` 具有 `id` 屬性。
- `input[list]` 的值與 `datalist[id]` 的值完全相同。
- 每個建議值都使用 `<option value="..."></option>`。

<details>
<summary>參考解答</summary>

```html
<input type="text" list="browser-list">

<datalist id="browser-list">
  <option value="Firefox"></option>
  <option value="Chrome"></option>
  <option value="Safari"></option>
</datalist>
```

解題說明：`<input>` 是使用者真正輸入文字的欄位；`list="browser-list"` 會連到 `id="browser-list"` 的 `<datalist>`。兩個值要相同，瀏覽器才知道這個輸入框要使用哪一組建議。

</details>

## 題目 2（基礎）· 應用練習題

建立一個商品分類輸入欄位，讓使用者可以輸入分類，也可以參考建議值。建議清單至少包含 `書籍`、`文具`、`食品`。

完成標準：

- 使用 `<input type="text">` 作為實際輸入欄位。
- 使用 `<datalist>` 保存候選值。
- 每個候選值都明確放在 `option` 的 `value` 屬性。
- 不要把 `<datalist>` 當成可輸入欄位。

<details>
<summary>參考解答</summary>

```html
<input type="text" list="category-list">

<datalist id="category-list">
  <option value="書籍"></option>
  <option value="文具"></option>
  <option value="食品"></option>
</datalist>
```

解題說明：`<datalist>` 的責任是保存候選值，不會單獨形成可輸入欄位。真正讓使用者輸入的是 `<input>`，而建議值主要來自 `<option>` 的 `value` 屬性。

</details>

## 題目 3（進階）· 改錯題

下面這段程式碼想讓瀏覽器輸入框顯示建議，但建議清單不會正確連上。請修正它。

```html
<input type="text" list="browser-list">

<datalist id="browsers">
  <option value="Firefox"></option>
  <option value="Chrome"></option>
</datalist>
```

完成標準：

- 找出 `list` 與 `id` 沒有對上的問題。
- 修正後 `input[list]` 與 `datalist[id]` 的值相同。
- 不需要加入 notes 沒有教過的屬性或 JavaScript。

<details>
<summary>參考解答</summary>

```html
<input type="text" list="browsers">

<datalist id="browsers">
  <option value="Firefox"></option>
  <option value="Chrome"></option>
</datalist>
```

解題說明：原本的 `<input>` 找的是 `browser-list`，但實際的 `<datalist>` 叫 `browsers`。兩者名稱不同時，瀏覽器無法把輸入框與建議清單連起來。修正方式是讓 `list` 和 `id` 使用同一個值。

</details>
