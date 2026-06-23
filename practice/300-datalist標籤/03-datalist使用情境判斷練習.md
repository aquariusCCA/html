---
source_notes:
  - notes/300-datalist標籤/01-datalist標籤.md
topics: [datalist, 輸入建議, datalist與select差異]
summary: "datalist 使用情境判斷練習，聚焦於自由輸入、建議清單與固定選項邊界。"
---

# datalist 使用情境判斷練習

> 動手練習。概念與用法說明見 notes/300-datalist標籤/01-datalist標籤.md。

## 題目 1（基礎）· 實作任務

你正在做一個商品搜尋表單，使用者可以輸入常見分類，也可以輸入清單外的新分類。請建立符合這個需求的 HTML 片段。

規格：

- 使用文字輸入欄位。
- 欄位名稱用 `name="category"`。
- 使用 `<datalist>` 提供建議。
- 建議值包含 `書籍`、`文具`、`食品`。
- 寫法要保留使用者輸入清單外內容的可能。

<details>
<summary>參考解答</summary>

```html
<label for="category">商品分類：</label>
<input id="category" name="category" type="text" list="category-list">

<datalist id="category-list">
  <option value="書籍"></option>
  <option value="文具"></option>
  <option value="食品"></option>
</datalist>
```

解題說明：這個情境只是提供常見分類建議，不限制答案只能在清單內，因此適合使用 `<datalist>`。`<input>` 仍是文字欄位，使用者可以選建議值，也可以自行輸入其他分類。

</details>

## 題目 2（基礎）· 應用練習題

請為「常用瀏覽器」欄位建立一個建議輸入。需求是：希望使用者看到 `Firefox`、`Chrome`、`Safari`，但也允許輸入 `Edge`、`Brave` 或其他瀏覽器。

完成標準：

- 使用 `<datalist>`，不要把它寫成強制選單。
- 至少提供三個建議值。
- `input[list]` 與 `datalist[id]` 正確對應。

<details>
<summary>參考解答</summary>

```html
<label for="browser">請輸入常用瀏覽器：</label>
<input id="browser" name="browser" type="text" list="browsers">

<datalist id="browsers">
  <option value="Firefox"></option>
  <option value="Chrome"></option>
  <option value="Safari"></option>
</datalist>
```

解題說明：notes 提到，如果只是希望使用者輸入時有建議，但允許輸入 Edge、Brave 或其他瀏覽器，就適合用 `<datalist>`。它提供候選建議值，但不會阻止輸入清單外的內容。

</details>

## 題目 3（進階）· 重構題

下面這段說明和程式片段把 `<datalist>` 當成「只能選固定答案」的工具。請改寫成正確版本：不要宣稱它會限制輸入；如果需求真的必須固定答案，請在說明中指出這不適合用 `<datalist>`。

```html
<!-- 付款方式只能是以下三種，所以用 datalist 限制使用者 -->
<input type="text" list="payment-list">

<datalist id="payment-list">
  <option value="信用卡"></option>
  <option value="轉帳"></option>
  <option value="貨到付款"></option>
</datalist>
```

完成標準：

- 改掉「用 datalist 限制使用者」這個錯誤說法。
- 說明 `<datalist>` 只是建議清單，不會阻止清單外輸入。
- 不需要寫 notes 沒教過的 `<select>` 完整語法。

<details>
<summary>參考解答</summary>

```html
<!-- datalist 只適合提供建議，不會限制使用者只能輸入以下三種付款方式。 -->
<!-- 如果付款方式必須限定為固定答案，這個需求不適合用 datalist。 -->
```

解題說明：notes 明確提醒，`<datalist>` 只是建議清單，不會阻止使用者輸入清單外的值。付款方式若必須限定在固定答案中，應該優先考慮固定選項的做法，不能用 `<datalist>` 假裝完成限制。

</details>
