# FAQ Index

## 用途

用常見問題快速找到本篇筆記中能回答的段落。

## 常見問題索引

| 問題 | 簡短回答 | 對應段落 |
| --- | --- | --- |
| Open Graph 解決什麼問題？ | Open Graph 用來控制網址分享到社群平台時產生的預覽內容，避免平台自行抓到不理想的文字或圖片。 | [問題情境](../../../notes/第08章_meta標籤/03-Open-Graph社交媒體分享設定.md#問題情境) |
| OG metadata 要放在哪裡？ | OG metadata 是放在 HTML `<head>` 裡的 `<meta>` 設定。 | [一句話理解](../../../notes/第08章_meta標籤/03-Open-Graph社交媒體分享設定.md#一句話理解) |
| Open Graph meta 要用 `name` 還是 `property`？ | Open Graph 標籤通常使用 `property` 屬性，屬性名稱通常以 `og:` 開頭。 | [基本觀念](../../../notes/第08章_meta標籤/03-Open-Graph社交媒體分享設定.md#基本觀念) |
| 最基本的 OG 分享設定有哪些？ | 最容易影響預覽觀感的是 `og:title`、`og:description` 和 `og:image`。 | [基本寫法](../../../notes/第08章_meta標籤/03-Open-Graph社交媒體分享設定.md#基本寫法) |
| `og:title` 做什麼？ | `og:title` 是分享預覽中的標題，可以和 `<title>` 相同，也可以為社群分享重新設計。 | [og:title](../../../notes/第08章_meta標籤/03-Open-Graph社交媒體分享設定.md#ogtitle) |
| `og:description` 和 `meta name="description"` 有什麼不同？ | 前者主要服務社群平台與分享工具，後者主要服務搜尋引擎。 | [Open Graph 與搜尋摘要的差異](../../../notes/第08章_meta標籤/03-Open-Graph社交媒體分享設定.md#Open-Graph-與搜尋摘要的差異) |
| 為什麼 `og:image` 建議使用完整 `https://` URL？ | 社群平台抓取頁面時不一定能解析本地或相對圖片路徑，完整 URL 較容易被平台讀取。 | [圖片使用相對路徑](../../../notes/第08章_meta標籤/03-Open-Graph社交媒體分享設定.md#圖片使用相對路徑) |
| `og:url` 做什麼？ | `og:url` 指定頁面的正式網址，幫助平台把正確 URL 視為主要分享目標。 | [og:url](../../../notes/第08章_meta標籤/03-Open-Graph社交媒體分享設定.md#ogurl) |
| `og:type` 可以填什麼？ | 一般網站頁面常用 `website`，文章內容可依平台需求使用 `article`。 | [og:type](../../../notes/第08章_meta標籤/03-Open-Graph社交媒體分享設定.md#ogtype) |
| 為什麼改完 OG 後預覽沒有立刻更新？ | 社群平台常會快取網址預覽，可能需要等待快取過期或使用平台除錯工具重新抓取。 | [以為設定後會立刻更新所有平台預覽](../../../notes/第08章_meta標籤/03-Open-Graph社交媒體分享設定.md#以為設定後會立刻更新所有平台預覽) |
| 公開頁面分享前要怎麼檢查 OG？ | 可以依序檢查分享標題、描述、圖片、URL，以及平台預覽是否實際測試過。 | [實務使用原則](../../../notes/第08章_meta標籤/03-Open-Graph社交媒體分享設定.md#實務使用原則) |
