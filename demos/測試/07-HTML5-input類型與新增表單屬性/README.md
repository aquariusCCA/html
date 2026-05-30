# HTML5 input 類型與新增表單屬性 demos

來源筆記：`notes/測試/07-HTML5-input類型與新增表單屬性.md`

## 建議學習順序

1. `01-HTML5常見input類型.html`
2. `02-type提供基本驗證.html`
3. `03-常見表單體驗屬性.html`
4. `04-placeholder樣式.html`
5. `05-常見錯誤對照.html`

## Demo 對應觀念

| 檔案 | 對應觀念 |
| --- | --- |
| `01-HTML5常見input類型.html` | HTML5 常見 `input type` 與不同輸入介面 |
| `02-type提供基本驗證.html` | 特定 `type` 搭配表單提交可觸發瀏覽器基本檢查 |
| `03-常見表單體驗屬性.html` | `required`、`placeholder`、`autofocus`、`autocomplete` |
| `04-placeholder樣式.html` | 使用 `::placeholder` 調整提示文字樣式 |
| `05-常見錯誤對照.html` | `autocomplete` 拼寫錯誤與把 `placeholder` 當 label 的問題 |

## 觀察重點與修改任務

### 01-HTML5常見input類型.html

觀察重點：比較 Email、網址、日期、時間、顏色欄位在瀏覽器中的輸入介面差異。

建議修改任務：新增一個 `type="number"` 的數量欄位。

### 02-type提供基本驗證.html

觀察重點：輸入不完整的 Email 或網址後提交，觀察瀏覽器是否提示格式問題。

建議修改任務：把數量欄位的 `max` 從 `10` 改成 `5`。

### 03-常見表單體驗屬性.html

觀察重點：頁面載入後欄位會自動聚焦，且空白提交會被 `required` 阻擋。

建議修改任務：移除 `autofocus`，重新開啟頁面觀察聚焦差異。

### 04-placeholder樣式.html

觀察重點：查看 CSS 中的 `input::placeholder` 如何改變提示文字顏色。

建議修改任務：把 placeholder 顏色改成 `#777`。

### 05-常見錯誤對照.html

觀察重點：比較錯誤寫法中的 `autocommplete` 和正確寫法中的 `autocomplete`，以及 Email 欄位是否有 label。

建議修改任務：替錯誤寫法補上 `<label>`，並把 `autocommplete` 改成 `autocomplete`。
