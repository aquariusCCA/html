# 實務文章頁段落結構

## 1. Demo 目標

這個 demo 用來示範：

- 文章頁中標題與段落的分工。
- 正文每段應使用獨立的 `p`。
- 段落間距與行高應由 CSS 控制。
- JavaScript 可以從 DOM 中取得段落數量與文字內容。

## 2. 對應 notes

- 筆記路徑：`notes/第10章_段落標籤/段落標籤.md`
- 對應章節：`5. 範例說明`、`6. 實務應用場景`、`8. 與其他概念的關係`、`11. 延伸補充`
- 對應知識點：
  - 文章頁中的段落結構
  - 標題與段落的差異
  - CSS 控制段落行高與間距
  - JavaScript 透過 DOM 取得段落節點

## 3. 如何執行

方式一：直接打開檔案

1. 找到 `index.html`
2. 使用瀏覽器開啟
3. 點選「緊湊」、「舒適」、「寬鬆」按鈕觀察段落距離變化

方式二：使用 VS Code Live Server

1. 在 demo 資料夾上按右鍵
2. 選擇 `Open with Live Server`
3. 在瀏覽器中查看結果

## 4. 觀察重點

1. 文章標題使用 `h2`，正文使用多個 `p`。
2. 調整段落間距時，HTML 中的 `p` 數量不會改變。
3. JavaScript 讀取 DOM 中的段落並顯示統計資訊。
4. CSS 變數控制段落的 `line-height` 與 `margin-bottom`。

## 5. 程式碼重點

### HTML

- `article[data-article]` 是主要文章內容。
- `article` 底下的每個正文段落都使用獨立 `p`。
- 控制面板中的按鈕使用 `button type="button"`，避免不必要的表單提交行為。

### CSS

- `--paragraph-gap` 控制段落底部間距。
- `--paragraph-line-height` 控制段落行高。
- `body[data-spacing="compact"]`、`body[data-spacing="comfortable"]`、`body[data-spacing="loose"]` 定義不同閱讀密度。

### JavaScript

- `querySelectorAll(":scope > p")` 取得文章中的正文段落。
- 按鈕點擊後修改 `document.body.dataset.spacing`。
- `aria-pressed` 反映目前被選取的間距選項。

## 6. 修改練習

請嘗試修改以下內容，觀察結果差異：

1. 在文章中新增一個 `p`，觀察段落數量是否更新。
2. 調整 `body[data-spacing="loose"]` 中的 `--paragraph-gap`。
3. 把某段 `p` 改成 `div`，思考語意是否變差。
4. 修改 `spacingMessages` 中的提示文字。

## 7. 常見錯誤

| 錯誤 | 可能造成的問題 | 修正方式 |
|---|---|---|
| 為了調整距離新增空白段落 | HTML 產生沒有內容的節點 | 使用 CSS 控制段落距離 |
| 把正文全部放在一個 `p` | JavaScript 與讀者都難以辨識段落 | 每個獨立段落使用一個 `p` |
| 用 `div` 取代所有正文段落 | 失去段落語意 | 正文文字優先使用 `p` |
| 在按鈕中省略 `type` | 若未來放入表單可能造成預設提交 | 明確寫 `type="button"` |

## 8. 自我檢查

- [ ] 我能說明文章頁中標題與段落的分工。
- [ ] 我能用 CSS 調整段落間距而不改變 HTML 結構。
- [ ] 我能看懂 JavaScript 如何取得文章中的段落。
- [ ] 我能新增段落並觀察統計資訊變化。
