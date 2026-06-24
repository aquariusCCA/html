---
source_notes:
  - notes/030-兼容性問題/IE相容性Meta標籤補充.md
topics: [舊版 IE, X-UA-Compatible, 雙核瀏覽器, renderer meta, 相容性模式]
summary: "IE 與雙核瀏覽器相容性 Meta 標籤的回憶檢索複習材料（重點摘要＋問答＋填空＋翻面卡片）。"
review:
  formats: [重點摘要, 問答, 填空, 卡片]
  card_count: 7
  priority: 中
  schedule_days: [1, 3, 7, 16, 35, 90]
---

# IE 相容性 Meta 標籤複習

> 回憶檢索複習。概念與用法說明見 notes/030-兼容性問題/IE相容性Meta標籤補充.md。

## 重點摘要

- `<meta http-equiv="X-UA-Compatible" content="IE=Edge">`：告訴 IE 不要降級到相容性檢視，永遠使用目前安裝版本中最新的文檔模式。
- `<meta name="renderer" content="webkit">`：提示部分雙核瀏覽器（如早期 360 安全瀏覽器）優先使用 WebKit/Blink 核心，而非 IE Trident 核心。
- 兩者都是「提示」而非強制：標準瀏覽器（Chrome、Firefox、Safari）會直接忽略它們。
- `IE=Edge` 只能避免被降級，無法消除不同 IE 版本本來就存在的渲染差異。
- `renderer` 是非 W3C 標準屬性，只對少數雙核瀏覽器有效。
- 現代新專案多數不需要主動加上這兩個標籤；維護舊系統時應能認出並理解其用途。

## 問答題

### 問答 1 · 基礎 · {#030-meta-q1}

`<meta http-equiv="X-UA-Compatible" content="IE=Edge">` 的用途是什麼？

<details>
<summary>答案</summary>

告訴 IE 不要根據相容性檢視清單等條件自動切換到舊版文檔模式，永遠使用目前安裝版本中最新的渲染引擎來解析頁面。

</details>

### 問答 2 · 基礎 · {#030-meta-q2}

`<meta name="renderer" content="webkit">` 的用途與限制是什麼？

<details>
<summary>答案</summary>

用途：提示部分雙核瀏覽器（同時內建 WebKit/Blink 與 IE Trident 核心的瀏覽器）優先使用 WebKit/Blink 核心渲染頁面。
限制：這是非 W3C 標準的提示，不是強制指令；標準瀏覽器（Chrome、Firefox、Safari）以及大多數行動裝置瀏覽器都會直接忽略它。

</details>

### 問答 3 · 進階 · {#030-meta-q3}

為什麼加了 `X-UA-Compatible: IE=Edge` 之後，頁面在 IE8 與 IE11 的渲染結果仍然可能不同？

<details>
<summary>答案</summary>

「IE=Edge」的意思是使用「使用者目前安裝的 IE 版本」中最新的模式——IE8 的 Edge 模式與 IE11 的 Edge 模式是兩種不同的渲染能力。這個標籤只能避免被降級到更舊的相容模式，無法消除不同 IE 版本本來就存在的差異。

</details>

## 填空題

### 填空 1 · 基礎 · {#030-meta-f1}

要告訴 IE 使用最新文檔模式，應在 `<head>` 寫入：`<meta http-equiv="____" content="IE=Edge">`。

<details>
<summary>答案</summary>

`X-UA-Compatible`

</details>

### 填空 2 · 基礎 · {#030-meta-f2}

要提示雙核瀏覽器優先使用 WebKit 核心，應寫：`<meta name="renderer" content="____">`。

<details>
<summary>答案</summary>

`webkit`

</details>

## 翻面卡片

### 卡片 1 · 基礎 · {#030-meta-c1}

正面：`http-equiv="X-UA-Compatible"` 這個 meta 標籤的作用

<details>
<summary>答案</summary>

要求 IE 使用目前安裝版本中最新的文檔模式，避免被自動降級到舊版相容性檢視。

</details>

### 卡片 2 · 基礎 · {#030-meta-c2}

正面：`<meta name="renderer" content="webkit">` — 哪類瀏覽器才會反應？為什麼標準瀏覽器不會？

<details>
<summary>答案</summary>

只有部分雙核瀏覽器（同時具備 WebKit/Blink 與 IE Trident 兩套核心的瀏覽器）才會反應。`renderer` 是這類瀏覽器自行定義的非標準屬性，Chrome、Firefox、Safari 等標準瀏覽器不認識這個屬性，直接忽略。

</details>

## 建議複習排程

> 以下為遺忘曲線複習模板（離首次學習的天數），個人實際進度請自行或用 SRS 工具追蹤。

| 第幾次 | 第 1 次 | 第 2 次 | 第 3 次 | 第 4 次 | 第 5 次 | 第 6 次 |
| --- | --- | --- | --- | --- | --- | --- |
| 距首讀 | 第 1 天 | 第 3 天 | 第 7 天 | 第 16 天 | 第 35 天 | 第 90 天 |
