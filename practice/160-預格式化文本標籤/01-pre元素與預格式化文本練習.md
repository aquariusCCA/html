---
source_notes:
  - notes/160-預格式化文本標籤/01-pre-元素與預格式化文本.md
topics: [pre 元素, 預格式化文本, 空白保留, HTML 字元轉義]
summary: "pre 元素與預格式化文本的動手練習，包含保留縮排、修正段落誤用與 HTML 字元轉義。"
---

# pre 元素與預格式化文本練習

> 動手練習。概念與用法說明見 notes/160-預格式化文本標籤/01-pre-元素與預格式化文本.md。

## 題目 1（基礎）· 應用練習題

請把下面這段 CSS 片段寫成 HTML，讓瀏覽器保留原本的換行與縮排。

```css
body {
  background: #fff;
  font: 12px/24px Arial, sans-serif;
}
```

完成標準：

- 使用 `<pre>` 包住需要保留格式的文字。
- CSS 片段中的換行與縮排保留在 `<pre>` 內容中。
- 不使用 `<p>` 來展示這段 CSS。

<details>
<summary>參考解答</summary>

```html
<pre>
body {
  background: #fff;
  font: 12px/24px Arial, sans-serif;
}
</pre>
```

解題說明：`<pre>` 代表預格式化文本，瀏覽器會盡量保留內容中的空格、Tab 與換行。CSS 片段的縮排與換行會影響閱讀，因此比起一般段落，使用 `<pre>` 更合適。

</details>

## 題目 2（基礎）· 改錯題

下面這段 HTML 用 `<p>` 展示 CSS，導致原本的縮排與換行不容易照原樣呈現。請修正它。

```html
<p>
body {
  background: #fff;
}
</p>
```

完成標準：

- 改用適合展示預格式化文本的元素。
- 保留 CSS 片段中的換行與縮排。
- 不新增 notes 未教過的元素或樣式。

<details>
<summary>參考解答</summary>

```html
<pre>
body {
  background: #fff;
}
</pre>
```

解題說明：一般段落元素不負責保留程式碼排版，瀏覽器會把多餘空白與換行折疊成較簡單的顯示結果。當內容的空白、縮排與換行會影響閱讀或理解時，應使用 `<pre>`。

</details>

## 題目 3（進階）· 改錯題

下面這段 HTML 想在頁面上顯示 `<h1>標題</h1>` 這段原始碼，但直接把標籤寫在 `<pre>` 裡。請修正它，讓標籤文字被顯示出來，而不是被瀏覽器當成真正的 HTML 標籤解析。

```html
<pre>
<h1>標題</h1>
</pre>
```

完成標準：

- `<pre>` 仍然用來保留原始碼的排版。
- 將 `<` 與 `>` 轉義成 notes 教過的寫法。
- 修正後畫面能顯示字面上的 `<h1>標題</h1>`。

<details>
<summary>參考解答</summary>

```html
<pre>
&lt;h1&gt;標題&lt;/h1&gt;
</pre>
```

解題說明：`<pre>` 會保留空白與換行，但不會自動把 HTML 標籤變成純文字。若要顯示 HTML 原始碼，需要把 `<` 轉義成 `&lt;`，把 `>` 轉義成 `&gt;`，避免瀏覽器把它們解析成真正的標籤。

</details>
