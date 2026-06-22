---
source_notes:
  - notes/050-全局屬性/02-data-自訂資料屬性.md
topics: [data-*, 自訂資料屬性, dataset]
summary: "動手為 HTML 元素加上正確格式的 data-* 屬性，並修正命名大寫與可見內容誤放的常見錯誤。"
---

# data-* 自訂資料屬性練習

> 動手練習。概念與用法說明見 `notes/050-全局屬性/02-data-自訂資料屬性.md`。

---

## 題目 1（基礎）· 應用練習題

下面有一個動物列表，每個 `<li>` 顯示動物名稱，但 JavaScript 需要知道每種動物的分類類型。請為三個 `<li>` 分別加上 `data-animal-type` 屬性，值依序為 `bird`、`fish`、`spider`。

命名規則：屬性名必須用小寫加連字號格式（不能有大寫字母）。

```html
<ul>
  <li class="animal" ___>喜鵲</li>
  <li class="animal" ___>金槍魚</li>
  <li class="animal" ___>蠅虎</li>
</ul>
```

完成標準：三個 `data-animal-type` 屬性名稱格式正確（全小寫加連字號），屬性值分別對應正確的動物類型。

<details>
<summary>參考解答</summary>

```html
<ul>
  <li class="animal" data-animal-type="bird">喜鵲</li>
  <li class="animal" data-animal-type="fish">金槍魚</li>
  <li class="animal" data-animal-type="spider">蠅虎</li>
</ul>
```

解題說明：

- `data-*` 屬性由固定前綴 `data-` 加上自訂名稱組成，例如 `data-animal-type`。
- 屬性名稱**不應包含大寫字母**，慣例使用小寫加連字號。
- 使用者看到的是「喜鵲」等動物名，JavaScript 可透過 `dataset.animalType` 讀取對應的 `bird`、`fish`、`spider`。

</details>

---

## 題目 2（基礎）· 改錯題

下面這段 HTML 有 **2 個錯誤**，請找出並全部修正。

```html
<ul>
  <li data-Animal-Type="bird">喜鵲</li>
  <li data-animal-type="fish">金槍魚</li>
</ul>

<button data-label="刪除"></button>
```

完成標準：兩處錯誤全部修正，且能說明每一處為什麼有問題。

<details>
<summary>參考解答</summary>

```html
<ul>
  <li data-animal-type="bird">喜鵲</li>
  <li data-animal-type="fish">金槍魚</li>
</ul>

<button data-action="delete">刪除</button>
```

兩個錯誤說明：

1. **`data-Animal-Type` 使用了大寫** → `data-*` 屬性名稱不應包含大寫字母，建議統一使用小寫加連字號。使用大寫時，瀏覽器可能自動轉換，也可能造成 JavaScript 透過 `dataset` 讀取時名稱轉換不符預期。應改為 `data-animal-type`。

2. **`<button data-label="刪除"></button>` 把可見文字只放在 `data-*` 裡** → `data-*` 是給程式使用的資料，不會顯示在畫面上。這個按鈕對使用者而言沒有任何可見文字，使用者不知道這個按鈕的用途。可見文字應放在元素內容中；若需要同時存放操作類型，可另外加上語意清楚的 `data-*` 屬性，例如 `data-action="delete"`，並在元素內放上「刪除」文字。

</details>
