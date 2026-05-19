# 相容性 meta 放置位置

## 1. Demo 目標

這個 demo 用來示範：

- `<!doctype html>` 與相容性 meta 標籤在 HTML 文件中的位置。
- `X-UA-Compatible` 主要面向舊版 IE 文件模式。
- `renderer` 主要面向部分雙核瀏覽器，不是通用 HTML 標準。

## 2. 對應 notes

- 筆記路徑：`notes/第02章_兼容性問題/兼容性問題.md`
- 對應章節：`3.2 文件模式與 X-UA-Compatible`、`3.3 雙核瀏覽器與 renderer`、`4.1 建議放置位置`
- 對應知識點：
  - 瀏覽器文件模式
  - `X-UA-Compatible`
  - `renderer`
  - `head` 前段放置相容性設定

## 3. 如何執行

方式一：直接打開檔案

1. 找到 `index.html`
2. 使用瀏覽器開啟
3. 觀察頁面中的 `head` 片段與說明表格

方式二：使用 VS Code Live Server

1. 在 demo 資料夾上按右鍵
2. 選擇 `Open with Live Server`
3. 在瀏覽器中查看結果

## 4. 觀察重點

1. `meta charset`、`X-UA-Compatible`、`renderer` 都放在 `head` 前段。
2. `IE=edge` 是提示 IE 使用最新可用文件模式，不是讓舊 IE 支援所有新功能。
3. `renderer` 只對特定雙核瀏覽器有意義，現代瀏覽器通常不會採用它。

## 5. 程式碼重點

### HTML

- `<!doctype html>` 放在文件第一行。
- `html` 使用 `lang="zh-Hant"`。
- 相容性 meta 標籤放在 `head` 中。

### CSS

- CSS 只用來讓範例與說明表格更容易閱讀。

### JavaScript

- 此 demo 不需要 JavaScript。

## 6. 修改練習

請嘗試修改以下內容，觀察結果差異：

1. 暫時移除 `X-UA-Compatible`，思考現代瀏覽器是否有畫面變化。
2. 暫時移除 `renderer`，思考它為什麼不是通用標準。
3. 使用開發者工具查看 `head` 中的 meta 標籤順序。

## 7. 常見錯誤

| 錯誤 | 可能造成的問題 | 修正方式 |
|---|---|---|
| 以為 `IE=edge` 可以修好所有相容問題 | 它不能補齊舊版 IE 缺少的 HTML5、CSS3 或 JavaScript 能力 | 搭配支援範圍、fallback、polyfill 與實際測試判斷 |
| 把 `renderer` 當成所有瀏覽器都支援 | 多數瀏覽器會忽略它 | 只在確有雙核瀏覽器需求時使用 |
| 忘記 `<!doctype html>` | 瀏覽器可能進入非預期解析模式 | 在 HTML 文件第一行加入宣告 |

## 8. 自我檢查

- [ ] 我能說出 `X-UA-Compatible` 的主要用途。
- [ ] 我能說出 `renderer` 的適用限制。
- [ ] 我能指出相容性 meta 標籤在 HTML 中的建議位置。
