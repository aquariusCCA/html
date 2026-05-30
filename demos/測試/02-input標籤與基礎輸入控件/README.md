# input 標籤與基礎輸入控件 demos

來源筆記：`notes/測試/02-input標籤與基礎輸入控件.md`

## 建議學習順序

1. `01-type決定輸入控件.html`
2. `02-text文字框與maxlength.html`
3. `03-value不是提示文字.html`
4. `04-password只遮蔽畫面.html`
5. `05-hidden提交固定資料.html`

## Demo 對應觀念

| 檔案 | 對應觀念 |
| --- | --- |
| `01-type決定輸入控件.html` | `<input>` 的外觀與用途由 `type` 決定 |
| `02-text文字框與maxlength.html` | `type="text"`、`placeholder` 與 `maxlength` 的基本使用 |
| `03-value不是提示文字.html` | `value` 是資料值，`placeholder` 才是提示文字 |
| `04-password只遮蔽畫面.html` | `type="password"` 會遮蔽畫面輸入，但不等於安全加密 |
| `05-hidden提交固定資料.html` | `type="hidden"` 可提交畫面不顯示的固定資料 |

## 觀察重點與修改任務

### 01-type決定輸入控件.html

觀察重點：比較 `type="text"`、`type="password"`、`type="hidden"` 在畫面上的差異。

建議修改任務：把帳號欄位的 `type` 從 `text` 改成 `password`，觀察畫面如何改變。

### 02-text文字框與maxlength.html

觀察重點：輸入暱稱時，確認 `maxlength="12"` 如何限制可輸入字元數。

建議修改任務：把 `maxlength` 改成 `6`，再試著輸入較長的暱稱。

### 03-value不是提示文字.html

觀察重點：比較錯誤寫法中的 `value` 與正確寫法中的 `placeholder`。

建議修改任務：清空錯誤寫法的 `value`，改用 `placeholder="請輸入帳號"`。

### 04-password只遮蔽畫面.html

觀察重點：在密碼欄位輸入文字，確認畫面上會被遮蔽。

建議修改任務：把 `maxlength` 改成 `10`，觀察密碼長度限制。

### 05-hidden提交固定資料.html

觀察重點：畫面上看不到 `articleId`，但 HTML 程式碼中存在 `name="articleId"` 與 `value="100"`。

建議修改任務：把 `articleId` 的 `value` 從 `100` 改成 `200`，理解固定提交資料如何改變。
