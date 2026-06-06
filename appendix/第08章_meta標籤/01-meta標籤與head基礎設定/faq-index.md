# FAQ Index

## 常見問題索引

| 問題 | 簡短回答 | 對應段落 |
| --- | --- | --- |
| `<meta>` 是做什麼的？ | `<meta>` 是放在 `<head>` 裡的文件描述與設定標籤，用來讓瀏覽器、搜尋引擎或工具理解頁面。 | [一句話理解](../../../notes/第08章_meta標籤/01-meta標籤與head基礎設定.md#一句話理解) |
| `<meta>` 通常應該放在哪裡？ | `<meta>` 通常放在 `<head>` 中，因為它描述文件或提供瀏覽器設定。 | [`<meta>` 放在哪裡](../../../notes/第08章_meta標籤/01-meta標籤與head基礎設定.md#meta-放在哪裡) |
| `head` 和 `body` 的分工是什麼？ | `head` 放文件設定與描述資訊；真正要顯示給使用者看的內容應放在 `body`。 | [`<meta>` 放在哪裡](../../../notes/第08章_meta標籤/01-meta標籤與head基礎設定.md#meta-放在哪裡) |
| `charset` 做什麼？ | `charset` 用來指定 HTML 文件使用的字元編碼。 | [字元編碼：`charset`](../../../notes/第08章_meta標籤/01-meta標籤與head基礎設定.md#字元編碼charset) |
| 為什麼常用 `UTF-8`？ | `UTF-8` 能表示中文、英文、符號與多種語言文字，是現代網頁常見選擇。 | [字元編碼：`charset`](../../../notes/第08章_meta標籤/01-meta標籤與head基礎設定.md#字元編碼charset) |
| `viewport` 做什麼？ | `viewport` 會影響行動裝置如何計算頁面寬度，是響應式網頁常見必要設定。 | [行動裝置視窗：`viewport`](../../../notes/第08章_meta標籤/01-meta標籤與head基礎設定.md#行動裝置視窗viewport) |
| `width=device-width` 和 `initial-scale=1.0` 是什麼意思？ | 前者讓頁面寬度以裝置螢幕寬度為基準；後者將初始縮放比例設為 1。 | [行動裝置視窗：`viewport`](../../../notes/第08章_meta標籤/01-meta標籤與head基礎設定.md#行動裝置視窗viewport) |
| 忘記 viewport 會怎樣？ | 手機瀏覽器可能用較寬的虛擬畫布顯示頁面，讓版面看起來被縮小。 | [忘記 viewport](../../../notes/第08章_meta標籤/01-meta標籤與head基礎設定.md#忘記-viewport) |
| `X-UA-Compatible` 現在還需要嗎？ | 它主要服務舊版 IE；新專案是否保留，應依目標瀏覽器與團隊規範判斷。 | [舊版 IE 相容性：`X-UA-Compatible`](../../../notes/第08章_meta標籤/01-meta標籤與head基礎設定.md#舊版-ie-相容性x-ua-compatible) |
| `author` metadata 適合放什麼？ | `author` 可用來記錄頁面作者或內容負責人，通常不會直接顯示在頁面上。 | [作者資訊](../../../notes/第08章_meta標籤/01-meta標籤與head基礎設定.md#作者資訊) |
| `generator` metadata 什麼時候需要？ | 頁面由工具、CMS 或系統產生時可用；手寫頁面不一定需要加入。 | [產生工具](../../../notes/第08章_meta標籤/01-meta標籤與head基礎設定.md#產生工具) |
| `copyright` metadata 可以當正式授權聲明嗎？ | 不建議。它可以作為自訂記錄，但正式版權、授權或使用限制應另以可見文字或條款頁說明。 | [版權資訊記錄](../../../notes/第08章_meta標籤/01-meta標籤與head基礎設定.md#版權資訊記錄) |
| 可以把所有文件資訊都塞進 meta 嗎？ | 不適合。使用者需要閱讀的作者介紹、網站聲明或版權內容，應放在可見區域或獨立頁面。 | [把所有資訊都塞進 meta](../../../notes/第08章_meta標籤/01-meta標籤與head基礎設定.md#把所有資訊都塞進-meta) |
| 新 HTML 文件可以先放哪些 head 基礎設定？ | 可以先放 `charset`、`viewport` 與 `title`；其他 metadata 依專案需求加入。 | [實務使用原則](../../../notes/第08章_meta標籤/01-meta標籤與head基礎設定.md#實務使用原則) |
| `<title>` 是 `<meta>` 嗎？ | 不是；但它同樣屬於 `<head>` 中的重要資訊，用來設定瀏覽器分頁標題。 | [完整範例](../../../notes/第08章_meta標籤/01-meta標籤與head基礎設定.md#完整範例) |
