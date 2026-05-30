# 表單標籤、分組與禁用狀態 demos

來源筆記：`notes/測試/06-表單標籤分組與禁用狀態.md`

## 建議學習順序

1. `01-label-for與id關聯.html`
2. `02-label包住控件.html`
3. `03-fieldset與legend分組.html`
4. `04-disabled禁用單個控件.html`
5. `05-fieldset-disabled與提交注意.html`

## Demo 對應觀念

| 檔案 | 對應觀念 |
| --- | --- |
| `01-label-for與id關聯.html` | `label for` 必須對應控件的 `id` |
| `02-label包住控件.html` | 可以把控件包在 `<label>` 裡建立關聯 |
| `03-fieldset與legend分組.html` | 使用 `<fieldset>` 與 `<legend>` 替表單欄位分組 |
| `04-disabled禁用單個控件.html` | 使用 `disabled` 禁用單個控件 |
| `05-fieldset-disabled與提交注意.html` | `<fieldset disabled>` 會禁用整組控件，且禁用控件不會提交資料 |

## 觀察重點與修改任務

### 01-label-for與id關聯.html

觀察重點：比較錯誤寫法與正確寫法，點擊 label 文字時是否能聚焦到對應輸入框。

建議修改任務：把錯誤寫法中的 `for="user"` 改成 `for="username"`。

### 02-label包住控件.html

觀察重點：點擊「女」或「男」文字，確認 radio 也會被選取。

建議修改任務：新增一個「不透露」選項，並用相同方式把 radio 包在 `<label>` 裡。

### 03-fieldset與legend分組.html

觀察重點：找出兩個 `<fieldset>` 各自包住哪些欄位，以及 `<legend>` 顯示的分組標題。

建議修改任務：把「勾選區域」改成「性別選擇」。

### 04-disabled禁用單個控件.html

觀察重點：嘗試點擊 Email 欄位、方案下拉列表與按鈕，確認它們都不能操作。

建議修改任務：移除 Email 欄位上的 `disabled`，觀察欄位是否恢復可輸入。

### 05-fieldset-disabled與提交注意.html

觀察重點：比較錯誤寫法中整組被禁用的 Email，與正確寫法中仍可提交的 Email。

建議修改任務：把錯誤寫法的 Email 移出 `<fieldset disabled>`，只保留按鈕在禁用區域內。
