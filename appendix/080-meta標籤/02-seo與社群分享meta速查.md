---
source_notes:
  - notes/080-meta標籤/03-搜尋引擎相關meta設定.md
  - notes/080-meta標籤/04-Open-Graph社群分享設定.md
topics: [SEO, robots, description, keywords, Open Graph]
summary: "整理搜尋引擎相關 meta 與 Open Graph 分享預覽欄位的用途、範例與常見設定錯誤。"
---

# SEO 與社群分享 meta 速查

> 查表內容依據 `notes/080-meta標籤/03-搜尋引擎相關meta設定.md` 與 `notes/080-meta標籤/04-Open-Graph社群分享設定.md`。

## 搜尋引擎相關 meta

| 寫法 | 用途 | 使用場景 | 注意事項 |
| --- | --- | --- | --- |
| `<meta name="robots" content="index,follow">` | 允許搜尋引擎索引此頁面並追蹤頁面中的連結 | 希望正常被收錄且追蹤連結 | 通常是預設行為，不一定需要特別寫出來 |
| `<meta name="robots" content="noindex,nofollow">` | 不要把此頁面顯示在搜尋結果中，也不要追蹤此頁面上的連結 | 限制特定頁面 | robots meta 必須在搜尋引擎能讀到該頁 HTML 時才有意義 |
| `<meta name="robots" content="noindex">` | 不希望頁面出現在搜尋結果 | 需要排除特定頁面時 | 要確認爬蟲能讀到頁面；若被 `robots.txt` 阻擋，頁面內的 `noindex` 可能無法被讀到 |
| `<meta name="description" content="...">` | 提供頁面簡短摘要候選文字 | 想提供搜尋摘要 | 搜尋引擎可能依查詢情境改用頁面正文片段，不保證一定採用 |
| `<meta name="keywords" content="HTML, meta, SEO">` | 提供頁面關鍵字 metadata | 歷史上常見 metadata 寫法 | 現代搜尋排名不應依賴它；不要把它當成提升排名的主要工具 |

## robots 指令

| 指令 | 意義 |
| --- | --- |
| `index` | 允許搜尋引擎索引此頁面 |
| `follow` | 允許搜尋引擎追蹤此頁面中的連結 |
| `noindex` | 不要把此頁面顯示在搜尋結果中 |
| `nofollow` | 不要追蹤此頁面上的連結 |

## description 撰寫提醒

| 好的方向 | 避免方向 |
| --- | --- |
| 準確描述本頁內容 | 寫成與內容不符的廣告詞 |
| 對使用者有幫助 | 塞滿關鍵字 |
| 長度適中 | 寫成整篇文章 |
| 每個重要頁面有自己的描述 | 大量頁面重複同一段描述 |

## Open Graph 基本觀念

| 項目 | 說明 |
| --- | --- |
| 主要用途 | 控制社群平台分享預覽卡片 |
| 常見寫法 | Open Graph 標籤通常使用 `property="og:*"` |
| 與一般 metadata 的差異 | 搜尋與一般 metadata 常見 `name="..."`；Open Graph 常見 `property="og:..."` |
| 使用平台 | Open Graph 最早和 Facebook 關係密切，但許多平台都會讀取部分 Open Graph metadata |

## 常見 Open Graph 欄位

| 寫法 | 用途 | 注意事項 |
| --- | --- | --- |
| `<meta property="og:title" content="我的精彩網頁">` | 設定社群分享卡片標題 | 使用場景不同於 `<title>`，可相近但不要混淆 |
| `<meta property="og:description" content="這是一個介紹 HTML meta 標籤的教學頁面。">` | 設定分享卡片簡短描述 | 應準確描述頁面內容 |
| `<meta property="og:image" content="https://example.com/image.jpg">` | 設定分享卡片代表圖片 | 正式網站應使用可公開存取的完整 URL |
| `<meta property="og:image:alt" content="HTML meta 標籤教學封面圖">` | 補充分享圖片替代描述 | 設定 `og:image` 時建議補上 |
| `<meta property="og:url" content="https://example.com/my-page">` | 設定頁面在社群圖譜中的代表網址 | 實務上通常放該頁正式網址，不放追蹤參數很多的臨時網址 |
| `<meta property="og:type" content="website">` | 設定內容類型 | 一般網站頁面可用 `website`，文章頁可依情境使用 `article` |
| `<meta property="og:site_name" content="我的網站">` | 設定整個網站名稱 | 讓分享預覽資訊更完整 |
| `<meta property="og:locale" content="zh_TW">` | 標示內容語系 | 多語系網站也要注意替代語系設定 |

## title、description 與 Open Graph 對照

| 設定 | 常見用途 |
| --- | --- |
| `<title>` | 瀏覽器分頁標題、搜尋結果標題來源之一 |
| `<meta name="description">` | 搜尋結果摘要候選來源之一 |
| `<meta property="og:title">` | 社群分享預覽標題 |
| `<meta property="og:description">` | 社群分享預覽描述 |
| `<meta property="og:image">` | 社群分享預覽圖片 |

## 常見錯誤

| 錯誤 | 風險 | 建議 |
| --- | --- | --- |
| 以為 `keywords` 越多越好 | 大量堆疊關鍵字不會讓頁面自然變得更有價值，metadata 也會失去可讀性 | 把重點放在正文是否清楚、有用、符合使用者需求 |
| 以為 `description` 一定顯示在搜尋結果 | 搜尋引擎可能改用頁面正文中的其他片段 | 把 `description` 寫成準確摘要，而不是保證顯示文字 |
| 以為 `robots` 能解決所有收錄問題 | 若搜尋引擎讀不到該頁 HTML，頁面內 robots meta 可能無法被處理 | 確認頁面能被爬蟲讀到 |
| `og:image` 使用本機或相對路徑 | 社群平台需要從外部抓取圖片，可能無法讀取本機或相對路徑 | 使用可公開存取的完整 URL |
| 忘記設定 `og:url` | 平台可能抓到帶追蹤參數或不同版本的網址 | 設定該頁正式 URL |
| `og:description` 和頁面內容不一致 | 使用者點進來後會失望，也會降低信任感 | 描述應準確反映頁面內容 |
| 以為 Open Graph 只對 Facebook 有用 | 可能忽略其他分享平台的預覽品質 | 一般內容頁可準備核心 OG 欄位 |

## 一般內容頁核心 OG 欄位

| 欄位 | 範例 |
| --- | --- |
| `og:title` | `<meta property="og:title" content="頁面標題">` |
| `og:description` | `<meta property="og:description" content="頁面簡短描述">` |
| `og:image` | `<meta property="og:image" content="https://example.com/images/share.jpg">` |
| `og:image:alt` | `<meta property="og:image:alt" content="分享圖片描述">` |
| `og:url` | `<meta property="og:url" content="https://example.com/page">` |
| `og:type` | `<meta property="og:type" content="website">` |
