# 布林屬性表單觀察

## 1. Demo 目標

這個 demo 用來示範：

- `disabled` 只要出現在元素上，就代表欄位停用。
- `checked` 只要出現在 checkbox 上，就代表預設勾選。
- `required` 只要出現在表單欄位上，就代表送出前需要填寫。

## 2. 對應 notes

- 筆記路徑：`notes/第03章_HTML基本結構標籤/HTML基本結構標籤.md`
- 對應章節：`3.6 布林屬性`、`7. 常見錯誤與修正`
- 對應知識點：
  - Boolean attributes
  - `disabled`
  - `checked`
  - `required`
  - `disabled="false"` 的常見誤解

## 3. 如何執行

方式一：直接打開檔案

1. 找到 `index.html`
2. 使用瀏覽器開啟
3. 嘗試聚焦停用欄位、取消勾選 checkbox、直接按下送出按鈕

方式二：使用 VS Code Live Server

1. 在 demo 資料夾上按右鍵
2. 選擇 `Open with Live Server`
3. 在瀏覽器中查看結果

## 4. 觀察重點

1. `disabled` 欄位不能輸入。
2. `disabled="false"` 仍然停用，因為布林屬性只看是否存在。
3. 空白的 `required` email 欄位會阻止表單送出。

## 5. 程式碼重點

### HTML

- 使用表單欄位觀察布林屬性的實際行為。
- 使用 `label for` 與 `input id` 讓標籤對應輸入框。

### CSS

- CSS 將停用欄位、提示文字與表單區塊做出清楚區分。

### JavaScript

- 此 demo 不需要 JavaScript。

## 6. 修改練習

請嘗試修改以下內容，觀察結果差異：

1. 移除第一個輸入框的 `disabled`，觀察是否可以輸入。
2. 移除 checkbox 的 `checked`，觀察預設狀態。
3. 將 `required` 移除後，直接按送出按鈕觀察瀏覽器反應。

## 7. 常見錯誤

| 錯誤 | 可能造成的問題 | 修正方式 |
|---|---|---|
| 寫成 `disabled="false"` 以為可取消停用 | 欄位仍然停用 | 移除整個 `disabled` 屬性 |
| 把布林屬性當成沒有屬性名的值 | 會誤解 HTML 屬性的結構 | 記住 `disabled`、`checked`、`required` 本身都是屬性名 |
| 忘記測試 `required` | 表單可能缺少必要檢查 | 送出前觀察瀏覽器內建驗證 |

## 8. 自我檢查

- [ ] 我能說出布林屬性的判斷方式。
- [ ] 我能解釋為什麼 `disabled="false"` 仍然停用。
- [ ] 我能透過移除屬性改變欄位狀態。
