# viewport 排版對照

## 1. Demo 目標

這個 demo 用來示範：

- viewport 設定會影響行動裝置的版面寬度。
- `width=device-width` 讓版面符合裝置寬度。
- 缺少 viewport 時，行動瀏覽器可能用桌面版寬度排版再縮小顯示。

## 2. 對應 notes

- 筆記路徑：`notes/第07章_meta標籤/meta標籤.md`
- 對應章節：`3.5 行動裝置設定：viewport`、`7. 常見錯誤與修正`
- 對應知識點：
  - `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
  - `width=device-width`
  - `initial-scale=1.0`
  - 缺少 viewport 的行動版問題

## 3. 如何執行

方式一：直接打開檔案

1. 找到 `index.html`
2. 使用瀏覽器開啟
3. 比較兩個手機預覽框

方式二：使用 VS Code Live Server

1. 在 demo 資料夾上按右鍵
2. 選擇 `Open with Live Server`
3. 在瀏覽器中查看結果

## 4. 觀察重點

1. 左側內容依照手機寬度排版，文字自然換行。
2. 右側用固定桌面寬度模擬缺少 viewport 時的縮小效果。
3. viewport 不會產生可見內容，但會影響行動版解析寬度。
4. 響應式 CSS 常需要正確 viewport 才能如預期運作。

## 5. 程式碼重點

### HTML

- `<head>` 中有正確 viewport 設定。
- 頁面用兩個預覽框呈現對照。

### CSS

- `.with-viewport` 呈現符合手機寬度的版面。
- `.without-viewport .wide-page` 用固定寬度與縮放模擬缺少 viewport 的常見結果。

### JavaScript

- 此 demo 不需要 JavaScript。

## 6. 修改練習

請嘗試修改以下內容，觀察結果差異：

1. 把 `.wide-page` 的 `width` 從 `980px` 改成 `760px`。
2. 把 `.without-viewport .wide-page` 的 `transform: scale(0.34)` 改成 `scale(0.5)`。
3. 在瀏覽器手機模擬模式中開啟頁面，觀察整個 demo 的響應式排列。

## 7. 常見錯誤

| 錯誤 | 可能造成的問題 | 修正方式 |
|---|---|---|
| 忘記設定 viewport | 手機上文字可能過小或排版異常 | 加入標準 viewport 設定 |
| 只寫 `initial-scale=1.0` | 版面寬度仍可能不符合裝置寬度 | 補上 `width=device-width` |
| 以為 CSS media query 一定會自動符合手機寬度 | 缺少 viewport 時條件可能不如預期 | 讓 viewport 與 CSS 響應式設計一起設定 |

## 8. 自我檢查

- [ ] 我能說明 viewport 的用途。
- [ ] 我能說明 `width=device-width` 的意思。
- [ ] 我能說明缺少 viewport 時行動版可能出現的問題。
- [ ] 我能修改 CSS 模擬不同的縮小效果。

