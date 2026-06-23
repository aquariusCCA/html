---
source_notes:
  - notes/020-HTML簡介/02-HTML5版本與特性.md
topics: [HTML5, HTML Living Standard, 前端技術組合, 瀏覽器兼容性]
summary: "HTML5 定位、八大特性方向、狹義/廣義差別與兼容性判斷的回憶檢索複習材料（重點摘要＋問答＋填空＋卡片）。"
review:
  formats: [重點摘要, 問答, 填空, 卡片]
  card_count: 8
  priority: 高
  schedule_days: [1, 3, 7, 16, 35, 90]
---

# HTML5 版本與特性複習

> 回憶檢索複習。概念與用法說明見 notes/020-HTML簡介/02-HTML5版本與特性.md。

## 重點摘要

- **HTML5 定位**：2014 年 10 月由 W3C 完成 Recommendation；現行規格持續以 **HTML Living Standard** 演進。
- **八大特性方向**：語義、本地存儲、設備兼容、連接、網頁多媒體、三維/圖形特效、性能與集成、CSS3。
- **狹義 vs 廣義**：狹義＝HTML 標準本身；廣義＝HTML5 + CSS3 + JavaScript（整套前端）。
- **兼容性原則**：依「功能 × 瀏覽器版本」逐項查詢；需兼容舊 IE 時準備 fallback。
- **HTML5 五大優勢**：更多 JS API、語意化標籤、內建多媒體（取代 Flash）、SEO 友善、適合行動裝置。

---

### 問答 1 · 基礎 · {#020-html5-q1}

HTML5 是哪一年由哪個組織完成 Recommendation？

<details>
<summary>答案</summary>

**2014 年 10 月**，由**萬維網聯盟（W3C）**完成 Recommendation。

</details>

---

### 問答 2 · 基礎 · {#020-html5-q2}

狹義 HTML5 與廣義 HTML5 分別指什麼？平常聽到「熟悉 HTML5」通常是哪一種？

<details>
<summary>答案</summary>

- **狹義 HTML5**：單指這一代的 HTML 標準本身。
- **廣義 HTML5**：指 HTML5 + CSS3 + JavaScript，也就是整套前端技術的組合。
- 職缺或文章寫「熟悉 HTML5」，多半指的是廣義 HTML5——整套前端基礎。

</details>

---

### 問答 3 · 進階 · {#020-html5-q3}

實務上如何判斷某個 HTML5 特性能否在目標環境使用？

<details>
<summary>答案</summary>

- 支援度依「**功能本身**」×「**瀏覽器版本**」而定，沒有一個「全部都支援」的簡單答案。
- Chrome、Safari、Firefox、Opera 等現代主流瀏覽器，對**常用** HTML5 功能大多有良好支援。
- 若需兼容舊版 IE，應針對要用到的功能**逐項查詢支援度**，必要時準備替代方案（fallback）。
- 不需要一開始就追求用盡所有 HTML5 功能，先專注在常用的新特性上。

</details>

---

### 填空 1 · 基礎 · {#020-html5-f1}

現行 HTML 規格的名稱不叫「HTML5」，而是 ____，持續演進中。

<details>
<summary>答案</summary>

**HTML Living Standard**

</details>

---

### 填空 2 · 基礎 · {#020-html5-f2}

廣義 HTML5 通常指 HTML5 加上 ____ 與 ____ 這整套前端基礎，職缺寫「熟悉 HTML5」多半指此。

<details>
<summary>答案</summary>

**CSS3**；**JavaScript**

</details>

---

### 卡片 1 · 基礎 · {#020-html5-c1}

**HTML5「語義特性」**

<details>
<summary>具體內容</summary>

新增能表達內容角色的標籤（例如 `<header>`、`<nav>`、`<main>`、`<article>`），不再只能用 `<div>` 堆疊出語意不明的結構。

</details>

---

### 卡片 2 · 基礎 · {#020-html5-c2}

**HTML5「網頁多媒體特性」**

<details>
<summary>具體內容</summary>

直接支援音訊（`<audio>`）、影片（`<video>`）播放，不再依賴 Flash 等外部插件。

</details>

---

### 卡片 3 · 進階 · {#020-html5-c3}

**HTML5 的五大優勢**

<details>
<summary>列出</summary>

1. 針對 JavaScript 提供了更多可操作的介面（API）
2. 新增語意化標籤與全域屬性，結構更清楚
3. 新增多媒體標籤，取代過去依賴 Flash 的做法
4. 更強調語意化，對 SEO（搜尋引擎優化）較友善
5. 可移植性好，大量應用於行動裝置

</details>

---

## 建議複習排程

> 以下為遺忘曲線複習模板（離首次學習的天數），個人實際進度請自行或用 SRS 工具追蹤。

| 第幾次 | 第 1 次 | 第 2 次 | 第 3 次 | 第 4 次 | 第 5 次 | 第 6 次 |
| --- | --- | --- | --- | --- | --- | --- |
| 距首讀 | 第 1 天 | 第 3 天 | 第 7 天 | 第 16 天 | 第 35 天 | 第 90 天 |
