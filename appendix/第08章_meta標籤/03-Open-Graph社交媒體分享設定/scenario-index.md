# Scenario Index

## 用途

從想完成的功能反查本篇筆記中能支援的知識點。

## 實作場景索引

| 我想做什麼 | 需要知道 | 對應段落 |
| --- | --- | --- |
| 讓網址分享到社群平台時顯示正確預覽 | Open Graph、分享卡片、標題、描述、圖片、網址 | [問題情境](../../../notes/第08章_meta標籤/03-Open-Graph社交媒體分享設定.md#問題情境) |
| 在 HTML 裡寫出基本 OG meta | `<meta>`、`property`、`content`、`og:title`、`og:description`、`og:image` | [基本寫法](../../../notes/第08章_meta標籤/03-Open-Graph社交媒體分享設定.md#基本寫法) |
| 設定社群分享標題 | `og:title`、分享預覽標題、可和 `<title>` 不同 | [og:title](../../../notes/第08章_meta標籤/03-Open-Graph社交媒體分享設定.md#ogtitle) |
| 設定社群分享描述 | `og:description`、簡短描述、頁面內容一致 | [og:description](../../../notes/第08章_meta標籤/03-Open-Graph社交媒體分享設定.md#ogdescription) |
| 設定社群分享圖片 | `og:image`、完整 `https://` 圖片 URL、公開可存取圖片 | [og:image](../../../notes/第08章_meta標籤/03-Open-Graph社交媒體分享設定.md#ogimage) |
| 指定頁面的正式分享網址 | `og:url`、正式 URL、主要分享目標 | [og:url](../../../notes/第08章_meta標籤/03-Open-Graph社交媒體分享設定.md#ogurl) |
| 選擇分享內容類型 | `og:type`、`website`、`article` | [og:type](../../../notes/第08章_meta標籤/03-Open-Graph社交媒體分享設定.md#ogtype) |
| 區分搜尋摘要和社群分享摘要 | `meta name="description"`、`og:description`、搜尋引擎、社群平台 | [Open Graph 與搜尋摘要的差異](../../../notes/第08章_meta標籤/03-Open-Graph社交媒體分享設定.md#Open-Graph-與搜尋摘要的差異) |
| 修正把 OG 寫成 `name` 的錯誤 | `property="og:..."`、避免 `name="og:title"` | [用 name 寫 Open Graph](../../../notes/第08章_meta標籤/03-Open-Graph社交媒體分享設定.md#用-name-寫-Open-Graph) |
| 避免社群平台抓不到分享圖 | `og:image`、相對路徑問題、完整圖片 URL | [圖片使用相對路徑](../../../notes/第08章_meta標籤/03-Open-Graph社交媒體分享設定.md#圖片使用相對路徑) |
| 修改 OG 後重新檢查預覽 | 平台快取、等待快取過期、除錯工具重新抓取 | [以為設定後會立刻更新所有平台預覽](../../../notes/第08章_meta標籤/03-Open-Graph社交媒體分享設定.md#以為設定後會立刻更新所有平台預覽) |
