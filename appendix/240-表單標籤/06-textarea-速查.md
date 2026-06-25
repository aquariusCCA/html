---
source_notes:
  - notes/240-表單標籤/07-textarea多行文本域.md
topics: [textarea, 多行文字輸入, rows cols]
summary: "整理 textarea 的用途、初始內容、rows/cols、常見屬性與錯誤。"
---

# textarea 速查

> 查表內容整理自 `notes/240-表單標籤/07-textarea多行文本域.md`。

## 基本用途

| 情境 | 建議控件 | 原因 |
| --- | --- | --- |
| 短文字、單行資料 | `<input type="text">` | 適合單行輸入 |
| 留言、評論、描述、地址等長文字 | `<textarea>` | 適合多行文字輸入 |

## 基本結構

| 部分 | 作用 |
| --- | --- |
| `<textarea>` | 建立多行文字輸入區 |
| `name` | 提交欄位名稱 |
| `rows` | 指定預設顯示行數 |
| `cols` | 指定預設顯示列數 |
| 開始標籤與結束標籤之間的內容 | textarea 的初始內容 |

## 初始內容與 type

| 問題 | 正確觀念 |
| --- | --- |
| textarea 的初始內容怎麼寫？ | 寫在 `<textarea>` 與 `</textarea>` 中間 |
| 可以用 `value` 設定預設內容嗎？ | 不應用 `value` 設定 textarea 初始內容 |
| textarea 需要 `type` 嗎？ | 不需要，也不應使用 `type` |
| 單行與多行怎麼選？ | 單行用 `<input type="text">`，多行用 `<textarea>` |

## rows、cols 與 CSS

| 項目 | 作用 | 實務提醒 |
| --- | --- | --- |
| `rows` | 指定預設顯示行數 | 可作為預設尺寸 |
| `cols` | 指定預設顯示列數 | 可作為預設尺寸 |
| CSS | 控制正式版面中的寬度、高度與縮放行為 | 響應式版面通常仍應搭配 CSS |

## 常見搭配屬性

| 屬性 | 作用 |
| --- | --- |
| `id` | 供 label 關聯 |
| `name` | 提交欄位名稱 |
| `placeholder` | 提示使用者要輸入什麼 |
| `maxlength` | 限制最多字元數 |
| `required` | 設定為必填欄位 |

## 常見錯誤與修正

| 錯誤 | 問題 | 建議 |
| --- | --- | --- |
| 用 `<input type="text">` 收長篇內容 | 單行輸入框難以閱讀與編輯多行內容 | 改用 `<textarea>` |
| 用 `value` 設定 textarea 預設內容 | textarea 不使用 `value` 設定初始內容 | 將預設文字放在標籤中間 |
| 只用 `rows` 和 `cols` 控制正式版面 | 不利於響應式版面 | 搭配 CSS 控制寬度、高度與縮放行為 |
