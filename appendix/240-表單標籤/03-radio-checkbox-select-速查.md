---
source_notes:
  - notes/240-表單標籤/03-單選複選與下拉選項.md
topics: [選項控件, radio, checkbox, select]
summary: "整理 radio、checkbox、select 與 option 的使用時機、提交值與常見錯誤。"
---

# radio checkbox select 速查

> 查表內容整理自 `notes/240-表單標籤/03-單選複選與下拉選項.md`。

## 使用時機對照

| 情境 | 建議控件 | 原因 |
| --- | --- | --- |
| 性別、方案、付款方式等只能選一個 | radio | 選項少且需要直接看到所有選項 |
| 興趣、技能、通知方式等可選多個 | checkbox | 使用者可以勾選多個項目 |
| 地區、年份、分類等選項較多 | select | 節省畫面空間 |

## 控件規則

| 控件 | 作用 | 提交規則 |
| --- | --- | --- |
| `type="radio"` | 建立單選框 | 同一組 radio 必須共用相同的 `name`，才會形成多選一 |
| `type="checkbox"` | 建立複選框 | 多個 checkbox 常共用同一個 `name`，可提交多個同名欄位值 |
| `<select>` | 定義下拉列表 | `select` 的 `name` 是提交欄位名稱 |
| `<option>` | 定義下拉列表中的每一個選項 | `option` 的 `value` 是該選項被選中時提交的值 |

## 預設選中

| 屬性 | 適用對象 | 作用 |
| --- | --- | --- |
| `checked` | radio、checkbox | 設定預設選中 |
| `selected` | option | 設定下拉列表預設選項 |

## value 與顯示文字

| 情況 | 說明 |
| --- | --- |
| radio 的 `value` | 實際提交的資料值 |
| checkbox 的 `value` | 勾選時提交的資料值 |
| option 的 `value` | 該選項被選中時提交的資料值 |
| option 沒有 `value` | 瀏覽器通常會提交選項中間的文字 |
| 實務建議 | 明確設定 `value`，讓顯示文字與提交資料分開維護 |

## 常見錯誤與修正

| 錯誤 | 問題 | 建議 |
| --- | --- | --- |
| 同一組 radio 沒有共用 `name` | 瀏覽器會把它們視為不同組，無法形成互斥選擇 | 同一組 radio 使用相同 `name` |
| checkbox 缺少 `value` | 後端難以判斷使用者勾選的是哪個項目 | 為每個 checkbox 明確設定 `value` |
| 用 radio 呈現大量選項 | 畫面很長，使用者難以掃描 | 選項很多時通常更適合使用 `<select>` 或其他搜尋選擇介面 |
