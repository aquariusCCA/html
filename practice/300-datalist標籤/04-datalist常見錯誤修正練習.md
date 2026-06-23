---
source_notes:
  - notes/300-datalist標籤/01-datalist標籤.md
topics: [datalist, 輸入建議, datalist與select差異]
summary: "datalist 常見錯誤修正練習，包含 list/id 對應、option value 與強制選單誤用。"
---

# datalist 常見錯誤修正練習

> 動手練習。概念與用法說明見 notes/300-datalist標籤/01-datalist標籤.md。

## 題目 1（基礎）· 改錯題

下面的輸入框無法使用預期的城市建議。請修正 `list` 與 `id` 的對應。

```html
<input type="text" list="city-list">

<datalist id="cities">
  <option value="台北"></option>
  <option value="台中"></option>
  <option value="高雄"></option>
</datalist>
```

完成標準：

- `input[list]` 的值與 `datalist[id]` 的值相同。
- 保留三個城市建議值。
- 不加入多餘的技術或屬性。

<details>
<summary>參考解答</summary>

```html
<input type="text" list="cities">

<datalist id="cities">
  <option value="台北"></option>
  <option value="台中"></option>
  <option value="高雄"></option>
</datalist>
```

解題說明：`<input>` 透過 `list` 指定要連到哪一個 `<datalist>`。原本 `list="city-list"` 但 `id="cities"`，兩者沒有對上，所以要改成同一個值。

</details>

## 題目 2（基礎）· 改錯題

下面的建議清單沒有明確把建議值放在 `value` 屬性。請依 notes 的建議改寫。

```html
<input type="text" list="cities">

<datalist id="cities">
  <option>台北</option>
  <option>台中</option>
  <option>高雄</option>
</datalist>
```

完成標準：

- 每個 `<option>` 都明確使用 `value` 屬性。
- 建議值仍是 `台北`、`台中`、`高雄`。
- `input[list]` 與 `datalist[id]` 仍保持對應。

<details>
<summary>參考解答</summary>

```html
<input type="text" list="cities">

<datalist id="cities">
  <option value="台北"></option>
  <option value="台中"></option>
  <option value="高雄"></option>
</datalist>
```

解題說明：notes 說明建議值主要來自 `<option>` 的 `value` 屬性。為了讓選項清楚可靠，應該明確寫出 `value`。

</details>

## 題目 3（進階）· 改錯題

下面的註解說法有誤，因為它把 `<datalist>` 當成資料驗證或固定答案限制。請改寫註解，讓它符合 notes 的說法。

```html
<!-- 這個欄位只能填宅配、超商取貨、門市自取，datalist 會阻止其他輸入。 -->
<input type="text" list="delivery-list">

<datalist id="delivery-list">
  <option value="宅配"></option>
  <option value="超商取貨"></option>
  <option value="門市自取"></option>
</datalist>
```

完成標準：

- 註解不能再宣稱 `<datalist>` 會阻止其他輸入。
- 註解要說明 `<datalist>` 只提供建議。
- 若需求是固定合法範圍，要提醒真正重要的限制仍應另外處理。

<details>
<summary>參考解答</summary>

```html
<!-- datalist 只提供配送方式建議，不會阻止使用者輸入清單外的值。 -->
<!-- 如果配送方式有固定合法範圍，真正重要的限制仍應另外檢查。 -->
<input type="text" list="delivery-list">

<datalist id="delivery-list">
  <option value="宅配"></option>
  <option value="超商取貨"></option>
  <option value="門市自取"></option>
</datalist>
```

解題說明：`<datalist>` 不能取代資料驗證，也不是強制選單。它只是讓輸入框顯示候選建議值，使用者仍可以輸入清單外的內容。

</details>
