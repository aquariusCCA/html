---
source_notes:
  - notes/250-框架標籤/01-iframe框架標籤.md
topics: [iframe, target 導向, 表單 target, 使用判斷]
summary: "練習讓表單提交結果顯示在指定 iframe 中，並判斷 iframe 是否適合用在指定情境。"
---

# iframe 表單 target 與使用判斷練習

> 動手練習。概念與用法說明見 notes/250-框架標籤/01-iframe框架標籤.md。

## 題目 1（基礎）· 應用練習題

請建立一個搜尋表單，送出後把 `./demo/search.html` 的結果顯示在下方 iframe 中。

完成標準：

- `<form>` 的 `action` 指向 `./demo/search.html`。
- `<form>` 的 `target` 指向 iframe 的名稱。
- 表單內有一個 `name="keyword"` 的文字輸入框。
- 表單內有一個提交按鈕。
- iframe 的 `name` 與表單的 `target` 一致，並提供 `title`。

<details>
<summary>參考解答</summary>

```html
<form action="./demo/search.html" target="container2">
  <input type="text" name="keyword">
  <input type="submit" value="搜索">
</form>

<iframe name="container2" title="表單提交結果" width="900" height="300" style="border: 0;"></iframe>
```

解題說明：表單可以透過 `target` 指定提交結果顯示在哪個 iframe 中。這樣頁面可保留原本的表單區塊，只把結果顯示在指定框架中。
</details>

## 題目 2（進階）· 改錯題

下面表單想把提交結果顯示在 iframe 裡，但名稱沒有對齊。請修正。

```html
<form action="./demo/search.html" target="searchResult">
  <input type="text" name="keyword">
  <input type="submit" value="搜索">
</form>

<iframe name="container2" title="表單提交結果" width="900" height="300" style="border: 0;"></iframe>
```

完成標準：

- 表單的 `target` 與 iframe 的 `name` 必須相同。
- 保留 `action`、文字輸入框、提交按鈕與 iframe 的 `title`。

<details>
<summary>參考解答</summary>

```html
<form action="./demo/search.html" target="searchResult">
  <input type="text" name="keyword">
  <input type="submit" value="搜索">
</form>

<iframe name="searchResult" title="表單提交結果" width="900" height="300" style="border: 0;"></iframe>
```

解題說明：表單的 `target` 和 iframe 的 `name` 對齊後，提交結果才會載入到指定框架中。這和連結搭配 iframe 的規則相同。
</details>

## 題目 3（進階）· 情境實作題

請根據需求選擇是否使用 iframe，並寫出合適的 HTML 片段。

需求：在固定區域中顯示 `./demo/report.html` 這個獨立頁面的內容。

完成標準：

- 使用 iframe，因為需求是嵌入另一個 URL 的內容。
- `src` 指向 `./demo/report.html`。
- 提供描述性的 `title`。
- 用 CSS 控制邊框。

<details>
<summary>參考解答</summary>

```html
<iframe src="./demo/report.html" title="報表內容" width="900" height="300" style="border: 1px solid currentColor;"></iframe>
```

解題說明：iframe 適合用在需要於指定區域中顯示另一個 URL 內容的情境。若只是把目前頁面拆成主要內容、側邊欄或頁尾，則不應使用 iframe。
</details>
