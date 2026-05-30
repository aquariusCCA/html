# select 與 textarea 表單控件 demos

來源筆記：`notes/測試/05-select與textarea表單控件.md`

## 建議學習順序

1. `01-select建立下拉列表.html`
2. `02-option的value與selected.html`
3. `03-textarea多行文字.html`
4. `04-textarea錯誤寫法對照.html`
5. `05-依需求選擇控件.html`

## Demo 對應觀念

| 檔案 | 對應觀念 |
| --- | --- |
| `01-select建立下拉列表.html` | 使用 `<select>` 與 `<option>` 建立下拉列表 |
| `02-option的value與selected.html` | `option` 的 `value` 是提交值，`selected` 是預設選取 |
| `03-textarea多行文字.html` | 使用 `<textarea>` 建立多行文字輸入 |
| `04-textarea錯誤寫法對照.html` | textarea 的預設內容放在標籤中間，不是 `value` 屬性 |
| `05-依需求選擇控件.html` | 根據需求判斷使用 `select` 或 `textarea` |

## 觀察重點與修改任務

### 01-select建立下拉列表.html

觀察重點：確認 `<select>` 裡面由多個 `<option>` 組成，並查看 `name="city"`。

建議修改任務：新增一個 `value="tw"` 的「台灣」選項。

### 02-option的value與selected.html

觀察重點：頁面載入時預設選到「廣東」，但程式碼中的提交值是 `gd`。

建議修改任務：把 `selected` 從「廣東」移到「遼寧」。

### 03-textarea多行文字.html

觀察重點：查看 `rows`、`cols` 與標籤中間的「預設文字」。

建議修改任務：把 `rows` 改成 `8`，觀察文字區高度變化。

### 04-textarea錯誤寫法對照.html

觀察重點：比較錯誤寫法中的 `type`、`value`，以及正確寫法中標籤中間的預設內容。

建議修改任務：替錯誤寫法補上 `name="message"`，並把預設內容改放到開始標籤與結束標籤中間。

### 05-依需求選擇控件.html

觀察重點：問題類型使用固定選項，問題描述使用多行文字輸入。

建議修改任務：新增一個「其他問題」選項，並把問題描述的 `cols` 改成 `40`。
