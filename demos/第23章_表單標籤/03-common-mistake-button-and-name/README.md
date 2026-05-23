# 常見錯誤：缺少 name 與 button 預設 submit

## 基本資訊

| 欄位 | 內容 |
|---|---|
| Demo 名稱 | `03-common-mistake-button-and-name` |
| 建議路徑 | `demos/第23章_表單標籤/03-common-mistake-button-and-name/` |
| Demo 類型 | 常見錯誤 |
| 難度 | 進階 |
| 對應 notes | `notes/第23章_表單標籤/表單標籤.md` |
| 主要知識點 | `name`、`button type`、表單提交行為 |

## 1. Demo 目標

這個 demo 用來示範：

- 沒有 `name` 的欄位不會出現在表單提交資料中。
- `<button>` 在表單內未指定 `type` 時，預設會是 submit。
- 普通操作按鈕應明確使用 `type="button"`。
- 真正要送出表單的按鈕才使用 `type="submit"`。

## 2. 對應 notes

- 筆記路徑：`notes/第23章_表單標籤/表單標籤.md`
- 對應章節：`4.10 button 按鈕標籤`、`7. 常見錯誤與修正`
- 對應知識點：
  - 表單欄位缺少 `name`
  - `button` 預設 submit
  - 常見錯誤與修正

## 檔案結構

```text
demos/
  第23章_表單標籤/
    03-common-mistake-button-and-name/
      index.html
      style.css
      main.js
      README.md
```

## 3. 如何執行

方式一：直接打開檔案

1. 找到 `index.html`
2. 使用瀏覽器開啟
3. 先點擊錯誤表單的「取得驗證碼」
4. 再點擊正確表單的兩個按鈕

方式二：使用 VS Code Live Server

1. 在 demo 資料夾上按右鍵
2. 選擇 `Open with Live Server`
3. 在瀏覽器中查看結果

## 4. 觀察重點

1. 錯誤表單的電子信箱欄位沒有 `name`，所以輸出資料中沒有 email。
2. 錯誤表單的按鈕沒有 `type`，點擊後會觸發 submit。
3. 正確表單的「取得驗證碼」是 `type="button"`，不會提交表單。
4. 正確表單的「送出表單」才是 `type="submit"`。

## 5. 程式碼重點

### HTML

- 錯誤範例故意省略 `name` 與 `button type`。
- 正確範例補上 `name="email"` 與 `type="button"`。

### CSS

- 使用不同背景與邊框顏色輔助比較錯誤與正確寫法。

### JavaScript

- 使用 `FormData` 顯示真正會提交的欄位。
- 使用 `preventDefault()` 避免頁面跳轉。

## 6. 修改練習

請嘗試修改以下內容，觀察結果差異：

1. 幫錯誤表單的 email 加上 `name="email"`。
2. 幫錯誤表單的按鈕加上 `type="button"`。
3. 把正確表單的 `type="button"` 移除，觀察它是否變成提交按鈕。

## 7. 常見錯誤

| 錯誤 | 可能造成的問題 | 修正方式 |
|---|---|---|
| 表單欄位缺少 `name` | 後端或 JavaScript 收不到該欄位 | 需要提交的欄位都設定 `name` |
| 普通按鈕未指定 `type` | 可能誤送出表單 | 普通按鈕寫 `type="button"` |
| 只看畫面以為資料會提交 | 畫面有欄位不代表會提交 | 以 FormData 或後端收到的資料確認 |

## 8. 自我檢查

- [ ] 我能說明為什麼沒有 `name` 的欄位不會出現在 FormData。
- [ ] 我能判斷哪些按鈕會提交表單。
- [ ] 我能修正普通按鈕誤提交的問題。
- [ ] 我能用 `FormData` 檢查表單提交資料。
