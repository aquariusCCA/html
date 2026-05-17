# 基本 HTML5 文件骨架

## 1. Demo 目標

這個 demo 用來示範：

- 一份 HTML5 文件的基本骨架。
- `doctype`、`html`、`head`、`body` 的位置與用途。
- `meta charset`、`title`、`link` 對文件的影響。

## 2. 對應 notes

- 筆記路徑：`notes/第01章_HTML簡介/HTML簡介.md`
- 對應章節：`4.1 基本 HTML5 文件骨架`
- 對應知識點：
  - HTML5 文件宣告
  - 根元素與語言宣告
  - `head` 與 `body` 的分工

## 3. 如何執行

方式一：直接打開檔案

1. 找到 `index.html`
2. 使用瀏覽器開啟
3. 觀察瀏覽器分頁標題與頁面內容

方式二：使用 VS Code Live Server

1. 在 demo 資料夾上按右鍵
2. 選擇 `Open with Live Server`
3. 在瀏覽器中查看結果

## 4. 觀察重點

1. `title` 文字會出現在瀏覽器分頁，不會直接出現在頁面主體。
2. `body` 內的 `header`、`main`、`section` 會顯示成頁面內容。
3. `link rel="stylesheet"` 會讓瀏覽器載入 `style.css`。

## 5. 修改練習

1. 將 `title` 改成自己的頁面名稱，觀察分頁標題變化。
2. 將 `lang="zh-Hant"` 改成 `en`，思考這會影響哪些工具理解頁面。
3. 暫時移除 `<link rel="stylesheet" href="style.css">`，觀察畫面樣式差異。

## 6. 常見錯誤

| 錯誤 | 問題 | 修正方式 |
|---|---|---|
| 少寫 `<!doctype html>` | 瀏覽器可能不使用標準模式解析 | 在文件第一行加入 HTML5 宣告 |
| 少寫 `<meta charset="UTF-8">` | 中文或特殊字元可能顯示錯誤 | 在 `head` 中加入字元編碼設定 |
| 把主要內容放在 `head` | 頁面主體不會正確呈現 | 將使用者要看到的內容放在 `body` |

## 7. 自我檢查

- [ ] 我能說出 `head` 與 `body` 的差異。
- [ ] 我能寫出基本 HTML5 文件骨架。
- [ ] 我能修改 `title` 並觀察瀏覽器分頁變化。
