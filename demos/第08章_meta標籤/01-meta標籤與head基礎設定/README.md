# meta 標籤與 head 基礎設定 HTML 教學範例

來源筆記：`notes/第08章_meta標籤/01-meta標籤與head基礎設定.md`

## 建議學習順序

| 順序 | Demo | 對應觀念 | 觀察重點 | 建議修改任務 |
| --- | --- | --- | --- | --- |
| 1 | `01-meta應放在head中.html` | `<meta>` 與 `<head>` 的位置關係 | `head` 放文件設定，`body` 放使用者可見內容 | 將錯誤寫法中的 `meta` 移回 `head`，比較結構差異 |
| 2 | `02-charset字元編碼設定.html` | `charset` 字元編碼 | `UTF-8` 能表示中文、英文與符號 | 修改範例文字，觀察中文與符號是否正常顯示 |
| 3 | `03-viewport行動裝置視窗.html` | `viewport` 行動裝置視窗設定 | `width=device-width` 與 `initial-scale=1.0` 讓手機以裝置寬度作為顯示基準 | 暫時刪除 `viewport`，用手機或行動裝置模式比較顯示差異 |
| 4 | `04-舊版IE相容性設定.html` | `X-UA-Compatible` 舊版 IE 相容性 | 這是舊版 Internet Explorer 的歷史相容性設定，現代瀏覽器通常會忽略 | 移除這行設定，只保留新專案常見的基礎 `head` 設定 |
| 5 | `05-文件資訊metadata使用界線.html` | `author`、`generator`、`copyright` 文件資訊 | metadata 是文件資訊記錄，不應取代使用者需要閱讀的可見內容 | 修改 `author` 的 `content`，再新增一段可見的作者或版權文字 |

## 學習提醒

這組 demo 的目標不是取代正式筆記，而是幫助你把筆記中的觀念轉成可觀察、可修改、可練習的 HTML 範例。
