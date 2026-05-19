# lang 與 charset 對照

## 1. Demo 目標

這個 demo 用來示範：

- `lang` 屬性如何宣告文件或元素內容的語言。
- `<meta charset="UTF-8">` 應放在 `head` 前段。
- 不同語言代碼代表的內容差異。

## 2. 對應 notes

- 筆記路徑：`notes/第03章_HTML基本結構標籤/HTML基本結構標籤.md`
- 對應章節：`3.3 lang 文件語言`、`3.4 字元集 charset`、`6.2 避免中文亂碼`
- 對應知識點：
  - `lang="zh-Hant"`
  - `lang="en"`
  - `meta charset="UTF-8"`
  - 中文與特殊字元的正確解析

## 3. 如何執行

方式一：直接打開檔案

1. 找到 `index.html`
2. 使用瀏覽器開啟
3. 觀察語言代碼表與 UTF-8 對照區塊

方式二：使用 VS Code Live Server

1. 在 demo 資料夾上按右鍵
2. 選擇 `Open with Live Server`
3. 在瀏覽器中查看結果

## 4. 觀察重點

1. 整份文件的主要語言宣告在 `<html lang="zh-Hant">`。
2. 個別內容也可以依需要使用自己的 `lang` 屬性。
3. `meta charset="UTF-8"` 放在 `head` 中，讓瀏覽器盡早知道文字編碼。

## 5. 程式碼重點

### HTML

- 使用 `html lang` 宣告主要語言。
- 使用不同 `lang` 值標示不同語言片段。
- 使用 `meta charset="UTF-8"` 指定字元編碼。

### CSS

- CSS 用來排版對照卡片與表格，方便觀察。

### JavaScript

- 此 demo 不需要 JavaScript。

## 6. 修改練習

請嘗試修改以下內容，觀察結果差異：

1. 將 `<html lang="zh-Hant">` 改成 `lang="en"`，再用開發者工具確認。
2. 在語言標記區新增一張 `lang="zh-CN"` 的卡片。
3. 修改 `<title>` 中的中文與符號，觀察 UTF-8 是否能正常顯示。

## 7. 常見錯誤

| 錯誤 | 可能造成的問題 | 修正方式 |
|---|---|---|
| 繁體中文頁面使用不適合的 `lang` | 輔助工具或搜尋引擎可能誤判內容語言 | 繁體中文頁面使用 `zh-Hant` |
| 省略 `meta charset` | 中文或特殊符號可能在某些環境出現亂碼 | 在 `head` 前段加入 `<meta charset="UTF-8">` |
| 把 `charset` 寫在 `body` | 瀏覽器太晚讀到編碼資訊 | 將 `meta charset` 放在 `head` 前段 |

## 8. 自我檢查

- [ ] 我能說出 `zh-Hant` 與 `en` 的差異。
- [ ] 我能指出 `meta charset` 在文件中的位置。
- [ ] 我能解釋為什麼現代網頁通常使用 UTF-8。
