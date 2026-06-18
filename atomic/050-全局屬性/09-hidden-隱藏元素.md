---
source:
  - 'origin/050-全局屬性/09-hidden 属性.md / 全文'
---

# hidden 隱藏元素

> hidden 屬性規定對元素進行隱藏。隱藏的元素不會被顯示。如果使用該屬性，則會隱藏元素。可以對 hidden 屬性進行設置，使用戶在滿足某些條件時才能看到某個元素（比如選中復選框，等等）。然後，可使用 JavaScript 來刪除 hidden 屬性，使該元素變得可見。

## 定義和用法

- hidden 屬性也可用於防止用戶查看元素，直到匹配某些條件（比如選擇了某個複選框）。然後，JavaScript 可以刪除 hidden 屬性，以使此元素可見。
- `hidden` 或空值會讓元素處於一般隱藏狀態，不被使用者代理渲染。
- `hidden="until-found"` 也會隱藏元素，但內容仍可被頁內搜尋或 fragment navigation 找到；使用者代理找到目標時會移除 `hidden` 以顯示內容。此值的瀏覽器支援仍需確認，不適合作為唯一顯示機制。

```html
<body>
  <p>这是一个没有隐藏的段落</p>
  <p hidden>这是一个隐藏的段落</p>
  <section hidden="until-found">搜尋命中時可被揭露的內容</section>
</body>
```
