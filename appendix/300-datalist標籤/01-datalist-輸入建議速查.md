---
source_notes:
  - notes/300-datalist標籤/01-datalist標籤.md
topics: [datalist, 表單輸入, 輸入建議, datalist與select差異]
summary: "`<datalist>` 與 `<input>` 綁定方式、候選建議值結構、與 `<select>` 的使用邊界速查。"
---

# datalist 輸入建議速查

> 查表用。概念與用法說明見 notes/300-datalist標籤/01-datalist標籤.md。

## 基本語意

| 項目 | 說明 |
| --- | --- |
| 標籤 | `<datalist>` |
| 用途 | 替 `<input>` 提供候選建議值 |
| 核心特徵 | 提供建議，但仍允許自由輸入 |
| 不是什麼 | 不是強制選單 |
| 常見情境 | 常用瀏覽器、城市名稱、商品分類等輸入建議 |

## 核心結構

| 元素或屬性 | 寫在哪裡 | 作用 |
| --- | --- | --- |
| `<input>` | 表單欄位位置 | 使用者實際輸入內容的欄位 |
| `list` | `<input>` | 指定要連到哪一個 `<datalist>` |
| `<datalist>` | 建議清單位置 | 保存候選值的容器 |
| `id` | `<datalist>` | 提供給 `input[list]` 對應 |
| `<option>` | `<datalist>` 內 | 定義每一個建議選項 |
| `value` | `<option>` | 表示候選建議值 |

## 綁定規則

| 規則 | 範例 | 說明 |
| --- | --- | --- |
| `input` 的 `list` 要對應 `datalist` 的 `id` | `list="browsers"` 對 `id="browsers"` | 兩個值相同，瀏覽器才知道輸入框要使用哪一組建議選項 |
| `datalist` 本身不建立輸入欄位 | `<datalist id="browsers">...</datalist>` | 真正讓使用者輸入的是 `<input>` |
| 建議值主要寫在 `option[value]` | `<option value="Firefox"></option>` | 使用者可以選建議值，也可以直接輸入其他文字 |

## 基本片段

```html
<input type="text" list="browser-list">

<datalist id="browser-list">
  <option value="Firefox"></option>
  <option value="Chrome"></option>
  <option value="Safari"></option>
</datalist>
```

## 表單送出重點

| 項目 | 說明 |
| --- | --- |
| 會被送出的欄位 | `<input>` |
| 不會作為欄位送出的元素 | `<datalist>` |
| 提交資料名稱來源 | `<input>` 的 `name` |
| 清單外輸入 | 使用者輸入清單外的值也仍然可以送出 |

## datalist 與 select

| 情境 | 建議使用 |
| --- | --- |
| 使用者只能從固定選項中選一個 | `<select>` |
| 使用者可以參考建議，但也能輸入其他值 | `<datalist>` |
| 表單欄位需要強制限制為指定值 | `<select>` |
| 欄位只是提供自動完成或輸入提示 | `<datalist>` |

## 實務注意

| 注意事項 | 說明 |
| --- | --- |
| 原生顯示差異 | 不同瀏覽器顯示選項的方式和互動細節可能不完全相同 |
| 高度客製需求 | 需要高度客製外觀、完整控制鍵盤操作或更完整輔助科技體驗時，通常要另外設計自動完成元件 |
| 資料驗證 | `<datalist>` 不能取代資料驗證 |
| 固定合法範圍 | 重要限制仍應在後端再次檢查 |

## 判斷準則

| 問題 | 若答案多半是「是」 | 建議 |
| --- | --- | --- |
| 這個欄位是否仍然允許使用者輸入清單外的值？ | 是 | 可考慮 `<datalist>` |
| 這些選項是不是只是提示或常見答案，而不是唯一合法答案？ | 是 | 可考慮 `<datalist>` |
| 使用者看到建議值後，是否能更快完成輸入？ | 是 | 可考慮 `<datalist>` |
| 你需要的是「只能選其中一個」嗎？ | 是 | 不要用 `<datalist>` 取代 `<select>` |

## 常見錯誤與修正

| 錯誤 | 問題 | 建議 |
| --- | --- | --- |
| `input[list]` 和 `datalist[id]` 沒有對上 | 瀏覽器無法把輸入框和建議清單連起來 | 讓 `list` 與 `id` 使用相同值 |
| 把 `<datalist>` 當成強制選單 | `<datalist>` 不會阻止使用者輸入清單外的值 | 固定答案應使用 `<select>`，或在後端再做資料驗證 |
| 忘記在 `<option>` 放 `value` | 建議值主要來自 `<option>` 的 `value` 屬性 | 明確寫出 `<option value="..."></option>` |

