# contenteditable 與 spellcheck

## 1. Demo 目標

這個 demo 用來示範：

- `contenteditable="true"` 可以讓一般元素內容變成可編輯。
- `spellcheck` 可以提示瀏覽器是否進行拼字檢查。
- 可編輯內容不會自動保存，仍需要 JavaScript 讀取或提交資料。
- 拼字檢查結果會受到瀏覽器與使用者環境影響。

## 2. 對應 notes

- 筆記路徑：`notes/第04章_全局屬性/全局屬性.md`
- 對應章節：`4.7 contenteditable 與 spellcheck`、`5. 範例說明`
- 對應知識點：
  - `contenteditable`
  - `spellcheck`
  - JavaScript 讀取可編輯內容

## 3. 如何執行

方式一：直接打開檔案

1. 找到 `index.html`
2. 使用瀏覽器開啟
3. 點擊「可編輯內容」區塊並修改文字
4. 按「讀取內容」觀察右側輸出

方式二：使用 VS Code Live Server

1. 在 demo 資料夾上按右鍵
2. 選擇 `Open with Live Server`
3. 在瀏覽器中查看結果

## 4. 觀察重點

1. `p` 元素加上 `contenteditable="true"` 後可以直接編輯。
2. 按「讀取內容」前，修改只存在畫面中，不會自動送出或保存。
3. `spellcheck="true"` 與 `spellcheck="false"` 的 textarea 可能出現不同的拼字提示。
4. 拼字提示是否出現，不完全由 HTML 決定，也和瀏覽器設定有關。

## 5. 程式碼重點

### HTML

- `id="bio"` 讓 JavaScript 可以選取可編輯區塊。
- `contenteditable="true"` 啟用內容編輯。
- `spellcheck` 控制拼字檢查提示。

### CSS

- `.editable-box` 讓可編輯區塊看起來像輸入區，方便觀察。
- `:focus` 樣式讓鍵盤焦點更明確。

### JavaScript

- `bio.textContent` 讀取可編輯內容。
- `bio.textContent = defaultText` 還原文字。

## 6. 修改練習

請嘗試修改以下內容，觀察結果差異：

1. 將 `contenteditable="true"` 改成 `false`。
2. 將第一個 textarea 的 `spellcheck="true"` 改成 `false`。
3. 把 `bio.textContent` 改成 `bio.innerHTML`，觀察讀取結果差異，並思考安全風險。

## 7. 常見錯誤

| 錯誤 | 可能造成的問題 | 修正方式 |
|---|---|---|
| 以為 `contenteditable` 會自動保存 | 重新整理頁面後修改可能消失 | 使用 JavaScript 讀取並設計保存流程 |
| 沒有處理使用者輸入內容 | 可能產生不安全或不符合格式的內容 | 送出前驗證與清理資料 |
| 依賴 `spellcheck` 當資料驗證 | 拼字檢查不是正式驗證機制 | 重要資料仍需前後端驗證 |
| 沒有明顯 focus 樣式 | 鍵盤使用者不容易知道目前位置 | 補上清楚的 `:focus` 樣式 |

## 8. 自我檢查

- [ ] 我能說明 `contenteditable` 的用途。
- [ ] 我能用 JavaScript 讀取可編輯內容。
- [ ] 我能說出 `spellcheck` 的限制。
- [ ] 我能說明為什麼可編輯內容需要另外設計保存流程。

