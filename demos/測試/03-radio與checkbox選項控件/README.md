# radio 與 checkbox 選項控件 demos

來源筆記：`notes/測試/03-radio與checkbox選項控件.md`

## 建議學習順序

1. `01-radio多選一.html`
2. `02-radio相同name才同組.html`
3. `03-checkbox可複選.html`
4. `04-value是真正提交值.html`
5. `05-checked預設選取.html`

## Demo 對應觀念

| 檔案 | 對應觀念 |
| --- | --- |
| `01-radio多選一.html` | `radio` 用於多選一的固定選項 |
| `02-radio相同name才同組.html` | 同一組 `radio` 必須使用相同的 `name` |
| `03-checkbox可複選.html` | `checkbox` 用於可複選的固定選項 |
| `04-value是真正提交值.html` | `value` 是真正提交出去的資料值 |
| `05-checked預設選取.html` | `checked` 可以設定預設選取 |

## 觀察重點與修改任務

### 01-radio多選一.html

觀察重點：嘗試點選不同性別選項，確認同一時間只能選一個。

建議修改任務：新增一個 `value="private"` 的「不透露」選項，並保持同樣的 `name="gender"`。

### 02-radio相同name才同組.html

觀察重點：比較錯誤寫法與正確寫法，確認不同 `name` 與相同 `name` 的點選差異。

建議修改任務：把錯誤寫法中的兩個 `name` 都改成 `gender`，讓它們成為同一組。

### 03-checkbox可複選.html

觀察重點：嘗試勾選多個訂閱內容，確認 checkbox 可以同時選多個。

建議修改任務：新增一個 `value="accessibility"` 的「無障礙設計」選項。

### 04-value是真正提交值.html

觀察重點：比較畫面文字「信用卡」與程式碼中的 `value="credit-card"`，理解兩者不一定相同。

建議修改任務：把「銀行轉帳」的 `value` 改成 `transfer`，觀察提交值的語意如何改變。

### 05-checked預設選取.html

觀察重點：頁面剛打開時，哪些 radio 與 checkbox 已經被預設選取。

建議修改任務：把 `checked` 從「一般配送」移到「快速配送」，比較預設選取結果。
