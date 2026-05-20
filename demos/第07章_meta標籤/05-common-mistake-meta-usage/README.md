# meta 常見錯誤

## 1. Demo 目標

這個 demo 用來示範：

- `<meta>` 通常應放在 `<head>`。
- `description`、`robots` 等 metadata 需要 `content`。
- `<meta>` 是 void element，不需要結束標籤。
- `keywords` 與 `refresh` 都應謹慎使用。

## 2. 對應 notes

- 筆記路徑：`notes/第07章_meta標籤/meta標籤.md`
- 對應章節：`3.1 <meta> 是什麼`、`3.8 自動刷新與跳轉：refresh`、`3.10 關鍵字與描述`、`7. 常見錯誤與修正`
- 對應知識點：
  - `<meta>` 是 void element
  - `<meta>` 通常放在 `<head>`
  - `content` 的必要性
  - `keywords` 不是現代 SEO 排名保證
  - `refresh` 可能影響使用者體驗

## 3. 如何執行

方式一：直接打開檔案

1. 找到 `index.html`
2. 使用瀏覽器開啟
3. 觀察 meta 位置檢查表格與錯誤範例

方式二：使用 VS Code Live Server

1. 在 demo 資料夾上按右鍵
2. 選擇 `Open with Live Server`
3. 在瀏覽器中查看結果

## 4. 觀察重點

1. 表格會列出目前頁面中所有 `<meta>` 的父層位置。
2. 故意放在 `body` 的 `<meta>` 會被標示為通常應移到 `head`。
3. `description` 缺少 `content` 時沒有實際描述內容。
4. `refresh` 自動跳轉可能干擾使用者閱讀或操作。

## 5. 程式碼重點

### HTML

- `<head>` 中放入正確 metadata。
- `<body>` 中故意放入一個錯誤位置的 `<meta>`，方便觀察。
- 使用程式碼區塊呈現錯誤與修正方向。

### CSS

- `.status-ok` 與 `.status-warn` 標示檢查結果。
- 卡片與表格只用來輔助閱讀錯誤範例。

### JavaScript

- 使用 `document.querySelectorAll("meta")` 找出所有 `<meta>`。
- 檢查每個 `<meta>` 的父層是否為 `head`。

## 6. 修改練習

請嘗試修改以下內容，觀察結果差異：

1. 把 `body` 裡的 `<meta name="demo-body-meta">` 移到 `<head>`。
2. 新增 `<meta name="description">`，再思考為什麼它缺少內容。
3. 在錯誤範例中加入 `robots` 缺少 `content` 的案例。

## 7. 常見錯誤

| 錯誤 | 可能造成的問題 | 修正方式 |
|---|---|---|
| 把 `<meta>` 寫在 `<body>` | 文件層級資訊放錯位置 | 移到 `<head>` |
| `<meta name="description">` | 沒有提供頁面描述 | 補上 `content="..."` |
| `<meta charset="UTF-8"></meta>` | 空元素不需要結束標籤 | 寫成 `<meta charset="UTF-8">` |
| 依賴 `keywords` 提升排名 | 可能誤解現代 SEO | 專注內容品質與清楚描述 |
| 濫用 `refresh` 跳轉 | 可能影響可訪問性與使用體驗 | 優先使用伺服器端重新導向或明確連結 |

## 8. 自我檢查

- [ ] 我能指出 `<meta>` 應放在哪裡。
- [ ] 我能修正缺少 `content` 的 metadata。
- [ ] 我能說明為什麼 `<meta>` 不需要結束標籤。
- [ ] 我能說明 `robots`、`keywords`、`refresh` 的常見誤用。

