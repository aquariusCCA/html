---
source_notes:
  - notes/210-超鏈接標籤/04-特殊-href-用法補充.md
topics: [特殊 href, 空連結, javascript URL, 通訊連結, app scheme]
summary: "特殊 href 寫法、適用情境與限制的回憶檢索複習材料（重點摘要＋問答＋填空＋卡片）。"
review:
  formats: [重點摘要, 問答, 填空, 卡片]
  card_count: 8
  priority: 中
  schedule_days: [1, 3, 7, 16, 35, 90]
---

# 特殊 href 用法補充複習

> 回憶檢索複習。概念與用法說明見 notes/210-超鏈接標籤/04-特殊-href-用法補充.md。

## 重點摘要

- 一般超連結主線是 `<a href="目標地址">連結文字</a>`；特殊 `href` 是補充用法，不應混淆 `<a>` 的主要導航語意。
- `href="#"` 常見於回到頂部或空片段示例，但 `##` 不是可靠的回頂部寫法，正式功能建議使用明確錨點。
- `href=""` 通常會指向目前頁面，點擊後可能重新載入或回到目前 URL；正式頁面中不建議當成真正功能。
- `javascript:` 會在點擊連結時執行 JavaScript，但正式頁面中通常應避免，操作行為建議改用 `<button>` 搭配事件監聽。
- `tel:` 嘗試喚起撥號功能，`mailto:` 嘗試開啟郵件應用，兩者都受使用者裝置與環境影響。
- app scheme 可嘗試喚起指定 app，但依 app、平台與安裝狀態而定，重要流程應提供備用方案。

### 問答 1 · 基礎 · {#210-special-q1}

`href="#"` 的常見效果是什麼？正式回到頂部功能為什麼建議使用更明確的目標？

<details>
<summary>答案</summary>

`href="#"` 會指向目前頁面的空片段，常見效果是點擊後回到頁面頂部。正式功能建議使用明確目標，例如 `<a href="#top">` 搭配 `<header id="top">`，讓讀者與維護者都能看懂目標位置。

</details>

### 問答 2 · 基礎 · {#210-special-q2}

為什麼不建議在正式頁面中長期保留 `href=""`？

<details>
<summary>答案</summary>

空 `href` 通常會指向目前頁面，點擊後可能造成重新載入或回到目前 URL，而且意圖不清楚：可能是重新整理、還沒填連結，或只是 placeholder。

</details>

### 問答 3 · 進階 · {#210-special-q3}

為什麼 `javascript:` 不適合作為正式頁面的主要互動寫法？

<details>
<summary>答案</summary>

它會讓 HTML 結構與 JavaScript 行為混在一起，維護性較差，不利於無障礙與語意判斷，容易讓 `<a>` 被誤用成按鈕，且在安全與內容安全政策較嚴格的環境中可能受限制。

</details>

### 問答 4 · 進階 · {#210-special-q4}

`tel:`、`mailto:` 與 app scheme 的成功與否會受到哪些因素影響？

<details>
<summary>答案</summary>

`tel:` 需要裝置與瀏覽器支援撥號功能；`mailto:` 需要使用者有可用郵件客戶端；app scheme 則依裝置、瀏覽器、作業系統與對應 app 是否安裝而定。

</details>

### 填空 1 · 基礎 · {#210-special-f1}

嘗試喚起裝置撥號功能的特殊連結寫法是 `____`。

<details>
<summary>答案</summary>

`tel:`

</details>

### 填空 2 · 基礎 · {#210-special-f2}

嘗試開啟使用者郵件應用並建立新郵件的特殊連結寫法是 `____`。

<details>
<summary>答案</summary>

`mailto:`

</details>

### 卡片 1 · 進階 · {#210-special-c1}

正面：`javascript:...`

<details>
<summary>答案</summary>

點擊連結時執行 JavaScript；正式頁面中通常應避免作為主要互動，若目的是觸發操作，建議改用 `<button>` 搭配事件監聽。

</details>

### 卡片 2 · 進階 · {#210-special-c2}

正面：app scheme

<details>
<summary>答案</summary>

嘗試讓瀏覽器開啟指定 app；是否成功取決於 app、平台、瀏覽器、作業系統與使用者是否安裝對應 app，重要流程應提供備用方案。

</details>

## 建議複習排程

> 以下為遺忘曲線複習模板（離首次學習的天數），個人實際進度請自行或用 SRS 工具追蹤。

| 第幾次 | 第 1 次 | 第 2 次 | 第 3 次 | 第 4 次 | 第 5 次 | 第 6 次 |
| --- | --- | --- | --- | --- | --- | --- |
| 距首讀 | 第 1 天 | 第 3 天 | 第 7 天 | 第 16 天 | 第 35 天 | 第 90 天 |
