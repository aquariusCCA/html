# Open Graph 社交媒體分享設定 HTML 教學範例

來源筆記：`notes/第08章_meta標籤/03-Open-Graph社交媒體分享設定.md`

## 建議學習順序

| 順序 | Demo | 對應觀念 | 觀察重點 | 建議修改任務 |
| --- | --- | --- | --- | --- |
| 1 | `01-Open-Graph控制社群預覽.html` | Open Graph 解決社群分享預覽問題 | OG metadata 寫在 `head` 中，提供分享標題、描述與圖片 | 修改 `og:title` 與 `og:description` 的 `content`，再同步調整模擬預覽文字 |
| 2 | `02-常用OG標籤組合.html` | 常見 OG 標籤完整組合 | `og:title`、`og:description`、`og:image`、`og:url`、`og:type`、`og:site_name`、`og:locale` 各自描述不同分享資訊 | 把範例改成一篇教學文章的分享設定，判斷 `og:type` 要用 `website` 還是 `article` |
| 3 | `03-name與property用途差異.html` | `name` 類 meta 與 `property="og:..."` 的差異 | 搜尋摘要常用 `name="description"`，Open Graph 通常使用 `property="og:..."` | 分別修改搜尋摘要與社群摘要內容，練習讓兩者服務不同目的 |
| 4 | `04-常見錯誤與實務檢查.html` | OG 圖片、正式 URL 與預覽更新注意事項 | `og:image` 建議使用完整 `https://` URL，`og:url` 指向正式網址，平台預覽可能有快取 | 將錯誤圖片路徑改成完整 URL，並確認 `og:url` 是否為正式分享目標 |

## 學習提醒

這組 demo 的目標不是取代正式筆記，而是幫助你把筆記中的觀念轉成可觀察、可修改、可練習的 HTML 範例。
