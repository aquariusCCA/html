---
source_notes:
  - notes/080-meta標籤/03-搜尋引擎相關meta設定.md
topics: [SEO, robots, description, keywords, 搜尋引擎]
summary: "依搜尋情境設定 robots、description 與 keywords，並修正把 meta 當成排名捷徑的常見誤解。"
---

# 搜尋引擎 meta 練習

> 動手練習。概念與用法說明見 `notes/080-meta標籤/03-搜尋引擎相關meta設定.md`。

---

## 題目 1（基礎）· 應用練習題

請依情境補上合適的 meta。

**(A)** 這是一個內部測試頁，不希望出現在搜尋結果中，也不希望搜尋引擎追蹤頁面上的連結。

```html
___
```

**(B)** 這是一篇介紹 HTML meta 標籤用途的教學頁，想提供搜尋結果摘要候選文字：

```html
___
```

摘要內容請使用：「學習 HTML meta 標籤的基本用途，包含 robots、description 與 keywords。」

完成標準：

1. (A) 使用 `robots`，並正確設定 `noindex,nofollow`。
2. (B) 使用 `description`，並把摘要文字放在 `content` 中。
3. 能說明 `description` 是候選摘要，不保證一定顯示。

<details>
<summary>參考解答</summary>

**(A)**

```html
<meta name="robots" content="noindex,nofollow">
```

**(B)**

```html
<meta name="description" content="學習 HTML meta 標籤的基本用途，包含 robots、description 與 keywords。">
```

解題說明：

- `noindex` 表示不要把此頁顯示在搜尋結果中。
- `nofollow` 表示不要追蹤此頁面上的連結。
- `description` 可以提供搜尋結果摘要候選文字，但搜尋引擎可能依查詢情境或頁面內容選擇不同片段。

</details>

---

## 題目 2（基礎）· 改錯題

下面這段 meta 有兩個常見誤解。請指出問題，並寫出較合理的版本或建議。

```html
<meta name="keywords" content="HTML,HTML教學,HTML入門,網頁,網頁設計,前端,SEO,排名,搜尋,關鍵字,第一名,流量">
<meta name="description" content="全網最強、保證排名第一的 HTML meta 教學。">
```

完成標準：

1. 能指出堆疊 keywords 不應被當成提升排名的主要工具。
2. 能指出 `description` 應準確描述頁面，而不是與內容不符的廣告詞。
3. 寫出較合理的 `description` 範例。

<details>
<summary>參考解答</summary>

問題說明：

1. `keywords` 是歷史上常見的 metadata，但現代搜尋排名不應依賴它。大量堆疊關鍵字不會讓頁面自然變得更有價值。
2. `description` 應該準確描述頁面內容，而不是寫成誇張或無法證明的廣告詞。

較合理的寫法：

```html
<meta name="description" content="學習 HTML meta 標籤的搜尋相關設定，包含 robots、description 與 keywords 的用途差異。">
```

解題說明：

真正重要的是頁面內容是否清楚、有用、符合使用者需求。`description` 是摘要候選來源，不是搜尋結果一定採用的保證文字。

</details>

---

## 題目 3（進階）· 情境說明題

某頁面加了：

```html
<meta name="robots" content="noindex">
```

但同時這個頁面又被 `robots.txt` 阻擋，搜尋引擎無法抓取頁面 HTML。請說明為什麼頁面內的 `noindex` 可能無法發揮預期效果。

完成標準：

1. 能指出 robots meta 必須在搜尋引擎讀到 HTML 時才有意義。
2. 能說明若爬蟲被 `robots.txt` 擋住，可能讀不到頁面中的 `noindex`。
3. 不延伸到 notes 未教的進階 SEO 操作。

<details>
<summary>參考解答</summary>

`robots` meta 是寫在頁面 HTML 裡的設定。搜尋引擎必須能抓取並讀到這份 HTML，才有機會看到其中的 `noindex`。

如果 `robots.txt` 已經阻擋爬蟲抓取該頁，搜尋引擎可能根本讀不到頁面裡的：

```html
<meta name="robots" content="noindex">
```

因此不能期待頁面內的 `noindex` 一定被處理。這也是為什麼 notes 提醒：`robots` meta 不能解決所有收錄問題。

</details>
