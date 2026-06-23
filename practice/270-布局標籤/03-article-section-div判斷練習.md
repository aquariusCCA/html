---
source_notes:
  - notes/270-布局標籤/01-html5-語意化布局標籤.md
topics: [article與section, div使用判斷, 語意化布局標籤]
summary: "練習判斷 article、section 與 div 的使用時機，並修正把 section 當成萬用容器的錯誤。"
---

# article、section、div 判斷練習

> 動手練習。概念與用法說明見 notes/270-布局標籤/01-html5-語意化布局標籤.md。

## 題目 1（基礎）· 應用練習題

請用合適的標籤表示一篇可獨立理解的文章。

完成標準：

- 使用 `<article>`。
- 文章中有標題與一段內容。
- 這塊內容單獨拿出來仍能理解。

<details>
<summary>參考解答</summary>

```html
<article>
  <h2>前端學習路線</h2>
  <p>這篇文章介紹初學者可以如何安排 HTML、CSS 與 JavaScript 的學習順序。</p>
</article>
```

解題說明：`<article>` 適合表示相對獨立、完整的內容，例如一篇文章、一則新聞、一張商品卡片或一則留言。
</details>

## 題目 2（基礎）· 情境實作題

請在一篇文章中建立兩個有明確主題的小節：「先學 HTML」與「再學 CSS」。

完成標準：

- 整篇內容使用 `<article>`。
- 文章中的兩個主題分段使用 `<section>`。
- 每個 `<section>` 都有自己的標題與段落。

<details>
<summary>參考解答</summary>

```html
<article>
  <h2>前端學習路線</h2>

  <section>
    <h3>先學 HTML</h3>
    <p>HTML 負責描述網頁內容與結構。</p>
  </section>

  <section>
    <h3>再學 CSS</h3>
    <p>CSS 負責控制畫面樣式與版面。</p>
  </section>
</article>
```

解題說明：`<article>` 強調內容本身的獨立性，`<section>` 強調同一主題底下的分段。文章裡可以有多個有主題的小節。
</details>

## 題目 3（進階）· 改錯題

下面只是按鈕群組，卻使用了 `<section>`。請改成更合適的標籤。

```html
<section class="button-group">
  <button>儲存</button>
  <button>取消</button>
</section>
```

完成標準：

- 不使用 `<section>` 表示沒有主題的小節。
- 改用沒有特定語意、適合排版或分組的容器。

<details>
<summary>參考解答</summary>

```html
<div class="button-group">
  <button>儲存</button>
  <button>取消</button>
</div>
```

解題說明：`<section>` 表示有明確主題的內容區域。按鈕群組只是排版或分組需求，沒有形成有主題的內容小節，使用 `<div>` 更合適。
</details>
