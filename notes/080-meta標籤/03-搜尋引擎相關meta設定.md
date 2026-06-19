---
source_atomic:
  - atomic/080-meta標籤/04-robots-meta搜尋爬蟲設定.md
  - atomic/080-meta標籤/05-keywords與description-meta設定.md
topics: [SEO, robots, description, keywords, 搜尋引擎]
summary: "說明搜尋相關 meta 如何提供爬蟲控制與摘要資訊，以及 keywords 的現代限制。"
---

# 搜尋引擎相關 meta 設定

## 學習目標

讀完這篇筆記，你應該能夠：

- 說明 `robots` meta 標籤如何影響搜尋引擎的索引與連結追蹤。
- 看懂 `description` 與 `keywords` 的用途差異。
- 知道現代搜尋引擎不保證採用你設定的所有 metadata。
- 避免把 meta 標籤誤解成「只要加上就能提升排名」的工具。

## 問題情境

當你做完一個網頁後，可能會遇到幾個和搜尋引擎有關的問題：

- 這個頁面要不要被搜尋引擎收錄？
- 搜尋引擎能不能追蹤這個頁面上的連結？
- 搜尋結果摘要要不要提供一段描述？
- `keywords` 到底還有沒有用？

這些問題有些可以透過 meta 標籤提供訊號，但要注意：meta 標籤不是命令所有平台照做的保證，也不是 SEO 排名捷徑。

## 一句話理解

搜尋引擎相關 meta 是寫在 `<head>` 裡，提供「爬蟲控制」與「頁面摘要資訊」的設定。

## `robots`：控制索引與連結追蹤

`robots` meta 標籤用來提供搜尋引擎爬蟲的頁面層級指示。

```html
<meta name="robots" content="index,follow">
```

這段表示：

- `index`：允許搜尋引擎索引此頁面。
- `follow`：允許搜尋引擎追蹤此頁面中的連結。

但 `index,follow` 通常是預設行為，不一定需要特別寫出來。

更常見的是用它限制特定頁面：

```html
<meta name="robots" content="noindex,nofollow">
```

這段表示：

- `noindex`：不要把此頁面顯示在搜尋結果中。
- `nofollow`：不要追蹤此頁面上的連結。

常見 robots 指令可參考下表：

![robots meta 搜尋爬蟲設定值表](../../origin/080-meta標籤/assets/images/meta-tags-img-001-2cd6e3.png)

不同搜尋引擎支援的 robots 指令可能不同，實務上要以目標搜尋引擎官方文件為準。以 Google Search 為例，部分歷史指令已不再使用，例如 `noarchive` 與 `nocache`。

## `description`：提供頁面摘要

`description` 用來提供頁面的簡短摘要：

```html
<meta name="description" content="這是一篇介紹 HTML meta 標籤用途的教學筆記。">
```

這段描述可能成為搜尋結果摘要的來源之一。

![搜尋結果中的網頁描述預覽](../../origin/080-meta標籤/assets/images/meta-tags-img-003-7e6d0e.png)

但要注意：「可能」不等於「一定」。搜尋引擎可能根據使用者查詢、頁面內容或其他判斷，自行選擇不同文字作為摘要。

好的 `description` 通常具備幾個特徵：

- 能準確描述本頁內容。
- 對使用者有幫助，而不是塞滿關鍵字。
- 長度適中，不寫成整篇文章。
- 每個重要頁面有自己的描述，不大量重複。

## `keywords`：歷史用途與現代限制

`keywords` 可用來提供頁面關鍵字 metadata：

```html
<meta name="keywords" content="HTML, meta, SEO, 搜尋引擎">
```

早期搜尋引擎曾較依賴這類 metadata，但現代搜尋引擎不一定採用它作為排名依據。以 Google Search 為例，Google 曾明確說明不使用 `keywords` meta tag 作為網頁排名依據。

因此，學習 `keywords` 時要抓住重點：

- 它是歷史上常見的 metadata 寫法。
- 它不應被當成提升排名的主要工具。
- 真正重要的是頁面內容本身是否清楚、有用、符合使用者需求。

## 範例拆解

```html
<head>
  <meta charset="UTF-8">
  <title>HTML meta 標籤教學</title>
  <meta name="description" content="學習 HTML meta 標籤的基本用途，包含 robots、description 與 keywords。">
  <meta name="keywords" content="HTML, meta, robots, description">
  <meta name="robots" content="index,follow">
</head>
```

逐段看：

- `<title>`：搜尋結果中的標題來源之一，也會顯示在瀏覽器分頁。
- `description`：提供頁面摘要候選文字。
- `keywords`：提供關鍵字 metadata，但現代 SEO 不應依賴它。
- `robots`：提供搜尋引擎是否索引與追蹤連結的指示。

![keywords 與 description meta 範例](../../origin/080-meta標籤/assets/images/meta-tags-img-002-d16533.png)

## 常見錯誤

### 錯誤一：以為 `keywords` 越多越好

```html
<meta name="keywords" content="HTML,HTML教學,HTML入門,網頁,網頁設計,前端,SEO,排名,搜尋,關鍵字">
```

大量堆疊關鍵字不會讓頁面自然變得更有價值，反而容易讓 metadata 失去可讀性。

較好的方向是把時間花在正文內容：

- 頁面是否真的回答了使用者問題？
- 標題與段落是否清楚？
- 範例是否具體？
- 內容是否比只堆關鍵字更有幫助？

### 錯誤二：以為 `description` 一定會顯示在搜尋結果

`description` 是摘要候選來源，不是保證顯示文字。搜尋引擎可能依查詢情境改用頁面正文中的其他片段。

因此，`description` 應該準確描述頁面，而不是寫成與內容不符的廣告詞。

### 錯誤三：以為 `robots` 能解決所有收錄問題

`robots` meta 必須在搜尋引擎能讀到該頁 HTML 時才有意義。

如果你用 `robots.txt` 阻擋爬蟲抓取該頁，搜尋引擎可能根本讀不到頁面裡的 `noindex`。這時候就不能期待頁面內的 robots meta 一定被處理。

## 實務判斷準則

一般頁面可以這樣判斷：

| 情境 | 建議設定 |
| --- | --- |
| 希望正常被收錄 | 通常不需要特別寫 `index,follow`，保留預設即可。 |
| 不希望頁面出現在搜尋結果 | 可使用 `<meta name="robots" content="noindex">`，並確認爬蟲能讀到頁面。 |
| 想提供搜尋摘要 | 撰寫準確、簡短的 `description`。 |
| 想靠 `keywords` 提升排名 | 不建議依賴，應改善頁面內容本身。 |

## 重點整理

- `robots` 用來提供索引與連結追蹤相關指示。
- `description` 是頁面摘要候選來源，但不保證一定顯示。
- `keywords` 是歷史上常見 metadata，現代搜尋排名不應依賴它。
- meta 設定應該服務於頁面理解與搜尋呈現，不是關鍵字堆疊工具。
- 不同搜尋引擎支援規則不同，正式專案應查閱目標平台文件。

## 自我檢查

1. `noindex` 與 `nofollow` 分別控制什麼？
2. 為什麼 `description` 不能保證一定成為搜尋結果摘要？
3. 如果有人說「多塞 keywords 可以提升 Google 排名」，你會怎麼回應？
4. 為什麼被 robots.txt 擋住的頁面，頁面內的 `noindex` 可能無法被讀到？

## 延伸參考

- [HTML基础语法（2）-网页关键词和页面描述](https://blog.csdn.net/weixin_45586870/article/details/120138274)
- [Google Search Central：meta tags and attributes that Google supports](https://developers.google.com/search/docs/crawling-indexing/special-tags)
- [Google Search Central：Robots Meta Tags Specifications](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag)
