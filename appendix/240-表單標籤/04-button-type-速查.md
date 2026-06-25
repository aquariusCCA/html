---
source_notes:
  - notes/240-表單標籤/04-表單按鈕與提交行為.md
topics: [表單按鈕, submit, reset, button type]
summary: "整理 submit、reset、button 三種表單按鈕行為與 button type 常見錯誤。"
---

# button type 速查

> 查表內容整理自 `notes/240-表單標籤/04-表單按鈕與提交行為.md`。

## 三種按鈕 type

| type | 行為 | 適用情境 |
| --- | --- | --- |
| `submit` | 提交表單 | 要送出表單資料 |
| `reset` | 恢復表單初始狀態 | 需要讓使用者重新填寫，但應謹慎使用 |
| `button` | 普通按鈕，不會自動提交或重置 | 搭配 JavaScript 執行操作 |

## input 按鈕與 button 按鈕

| 寫法 | 顯示文字方式 | 備註 |
| --- | --- | --- |
| `<input type="submit" value="註冊">` | 使用 `value` 指定按鈕文字 | 可提交表單 |
| `<button type="submit">註冊</button>` | 文字寫在開始與結束標籤之間 | 較彈性，可包含文字或其他 HTML 內容 |
| `<input type="button" value="取得驗證碼">` | 使用 `value` 顯示文字 | 普通按鈕 |
| `<button type="button">取得驗證碼</button>` | 文字寫在標籤內容中 | 普通按鈕，常搭配 JavaScript |

## reset 行為

| 觀念 | 說明 |
| --- | --- |
| reset 不是清空所有欄位 | 它會回到頁面載入時的初始值 |
| 有初始 `value` 的欄位 | 按下 reset 後會恢復成初始 `value` |
| 實務提醒 | reset 容易造成誤觸與挫折，除非表單很短且確實需要重填，否則不一定要提供 |

## 實務判斷準則

| 目的 | 建議 type |
| --- | --- |
| 送出表單 | `type="submit"` |
| 恢復表單初始狀態 | `type="reset"`，但謹慎使用 |
| 執行 JavaScript 操作 | `type="button"` |
| 在 `<form>` 裡使用 `<button>` | 一律明確寫 `type` |

## 常見錯誤與修正

| 錯誤 | 問題 | 建議 |
| --- | --- | --- |
| 普通操作按鈕忘記 `type` | 在表單裡，沒有設定 `type` 的 `<button>` 通常會被當成提交按鈕 | 寫成 `<button type="button">` |
| 把 `<button>` 文字寫在 `value` | `value` 在 `<button>` 中可以作為提交值，但不是用來顯示文字的主要方式 | 可見文字寫在標籤內容中 |
| 不必要地使用 reset | 可能清除使用者已填內容，造成誤觸 | 確認真的需要再提供 |
