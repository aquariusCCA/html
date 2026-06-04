# HTML文件基本設定 HTML 教學範例

來源筆記：`notes/第04章_HTML基本結構標籤/01-HTML文件基本設定.md`

## 建議學習順序

| 順序 | Demo | 對應觀念 | 觀察重點 | 建議修改任務 |
| --- | --- | --- | --- | --- |
| 1 | `01-基本HTML文件設定.html` | 基本 HTML 文件開頭結構 | `<!doctype html>`、`lang`、`meta charset` 在文件中的位置與用途 | 修改 `title` 與 `h1`，觀察分頁標題與頁面標題的差異 |
| 2 | `02-DOCTYPE放置位置.html` | `<!DOCTYPE html>` 的用途與放置位置 | `<!doctype html>` 必須放在整份文件最前面，且不是 HTML 標籤 | 在正確寫法中新增 `body` 內容，確認 `<!doctype html>` 仍留在第一行 |
| 3 | `03-lang語言標示.html` | `lang` 屬性標示文件語言 | `lang` 寫在 `<html>` 上時，代表整份文件的主要語言 | 依頁面主要語言，把 `lang` 改成 `en`、`zh-CN` 或 `zh-Hant` |
| 4 | `04-charset與中文顯示.html` | `<meta charset="UTF-8">` 指定字元編碼 | UTF-8 設定放在 `<head>` 中，能降低中文與符號出現亂碼的機率 | 加入更多中文或符號，確認頁面仍能正常顯示 |

## 學習提醒

這組 demo 的目標不是取代正式筆記，而是幫助你把筆記中的觀念轉成可觀察、可修改、可練習的 HTML 範例。
