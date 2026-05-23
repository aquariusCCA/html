# 檔案連結、download、tel、mailto

## 1. Demo 目標

這個 demo 用來示範：

- `<a>` 如何連到本地檔案。
- `download` 屬性如何提示瀏覽器下載檔案。
- `tel:` 如何嘗試喚起撥號應用。
- `mailto:` 如何嘗試喚起郵件應用。

## 2. 對應 notes

- 筆記路徑：`notes/第20章_超鏈接標籤/超鏈接標籤.md`
- 對應章節：`5. 範例說明`
- 對應知識點：
  - 跳轉到檔案
  - `download`
  - `tel:`
  - `mailto:`

## 3. 如何執行

方式一：直接打開檔案

1. 找到 `index.html`
2. 使用瀏覽器開啟
3. 點擊檔案連結、下載連結、電話連結與郵件連結

方式二：使用 VS Code Live Server

1. 在 demo 資料夾上按右鍵
2. 選擇 `Open with Live Server`
3. 在瀏覽器中查看結果

## 4. 觀察重點

1. 同一個文字檔可以直接開啟，也可以透過 `download` 提示下載。
2. `download` 的檔名可由屬性值指定。
3. `tel:` 與 `mailto:` 可能會喚起系統應用程式。
4. 應用程式連結是否成功，取決於作業系統、瀏覽器與使用者設定。

## 5. 程式碼重點

### HTML

- 使用相對路徑指向 `./assets/files/sample-download.txt`。
- 使用 `download="hyperlink-demo-note.txt"` 指定下載檔名。
- 使用 `tel:` 與 `mailto:` 示範 URL scheme。

### CSS

- CSS 只用於讓連結更像可點擊的操作項目，方便觀察。

### JavaScript

- 此 demo 不需要 JavaScript。

## 6. 修改練習

請嘗試修改以下內容，觀察結果差異：

1. 修改 `download` 的檔名。
2. 移除 `download` 屬性，比較開啟方式。
3. 修改 `mailto:` 的收件人與 subject。
4. 將檔案路徑改錯，觀察瀏覽器如何回應。

## 7. 常見錯誤

| 錯誤 | 可能造成的問題 | 修正方式 |
|---|---|---|
| `download` 拼成 `dowload` | 瀏覽器不會把它當成下載屬性 | 使用正確拼字 `download` |
| `mailto:` 後有多餘空白 | 可能無法正確喚起郵件應用 | 使用 `mailto:user@example.com` |
| 假設 `tel:` 一定成功 | 桌機或未設定應用時可能沒有作用 | 視為提示行為，並提供其他聯絡方式 |
| 檔案路徑寫錯 | 檔案無法開啟或下載 | 確認相對路徑與檔案位置 |

## 8. 自我檢查

- [ ] 我能寫出檔案連結。
- [ ] 我能說明 `download` 的作用。
- [ ] 我能說明 `tel:` 與 `mailto:` 的限制。
- [ ] 我能修改下載檔名並觀察結果。
