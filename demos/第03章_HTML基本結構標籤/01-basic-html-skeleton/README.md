# HTML 文件基本骨架

## 1. Demo 目標

這個 demo 用來示範：

- `<!doctype html>` 應放在 HTML 文件最前面。
- `<html lang="zh-Hant">`、`<head>`、`<body>` 在文件中的位置。
- `<meta charset="UTF-8">` 與 `<title>` 屬於文件設定，不是主要可見內容。

## 2. 對應 notes

- 筆記路徑：`notes/第03章_HTML基本結構標籤/HTML基本結構標籤.md`
- 對應章節：`3.1 HTML 文件的基本骨架`、`3.2 文件類型宣告`、`4.1 建議的 HTML5 基本結構`
- 對應知識點：
  - HTML5 文件基本結構
  - `<!doctype html>`
  - `html lang`
  - `head` 與 `body`

## 3. 如何執行

方式一：直接打開檔案

1. 找到 `index.html`
2. 使用瀏覽器開啟
3. 觀察頁面中的骨架說明與表格

方式二：使用 VS Code Live Server

1. 在 demo 資料夾上按右鍵
2. 選擇 `Open with Live Server`
3. 在瀏覽器中查看結果

## 4. 觀察重點

1. `<!doctype html>` 出現在整份文件第一行。
2. `head` 中的設定不會像 `body` 內容一樣直接出現在主畫面。
3. 本頁實際的 `html lang`、`meta charset` 與 `title` 都可以在原始碼中看到。

## 5. 程式碼重點

### HTML

- 使用最基本的 HTML5 文件骨架。
- 將主要可見內容放在 `body` 裡。

### CSS

- CSS 只用來讓表格與程式碼片段更容易閱讀。

### JavaScript

- 此 demo 不需要 JavaScript。

## 6. 修改練習

請嘗試修改以下內容，觀察結果差異：

1. 修改 `<title>` 文字，觀察瀏覽器分頁標題。
2. 修改 `<html lang="zh-Hant">` 的值，再用開發者工具確認屬性變化。
3. 暫時移除頁面中的可見段落，觀察 `head` 設定不會直接變成畫面內容。

## 7. 常見錯誤

| 錯誤 | 可能造成的問題 | 修正方式 |
|---|---|---|
| 把 `<!doctype html>` 放在 `<html>` 後面 | 瀏覽器可能使用非預期解析模式 | 將 `<!doctype html>` 放在第一行 |
| 以為 `doctype` 是一般標籤 | 會誤加結束標籤或內容 | 記住它是文件類型宣告，不是元素 |
| 把主要頁面內容放在 `head` | 內容不會依預期顯示 | 將標題、段落、表單等內容放在 `body` |

## 8. 自我檢查

- [ ] 我能指出 `doctype` 在文件中的正確位置。
- [ ] 我能說出 `head` 與 `body` 的差異。
- [ ] 我能修改 `title` 並觀察瀏覽器分頁標題變化。
