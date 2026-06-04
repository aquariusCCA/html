# tabindex 屬性

> 來源：origin/第05章_全局屬性/14-tabindex 属性.md / 全文

`tabindex` 屬性規定當使用 `tab` 鍵進行導航時元素的順序。

- 在 HTML5 中，`tabindex` 屬性可用於任何的 HTML 元素，它會驗證任何 HTML 元素，但不一定是有用。
- 在 HTML4 中，`tabindex` 屬性可用於：`<a>`、`<area>`、`<button>`、`<input>`、`<object>`、`<select>`、`<textarea>`。

> ⚠️ 通常應避免使用大於 `0` 的 `tabindex`，以免破壞自然的鍵盤焦點順序。優先讓 DOM 順序符合操作順序，必要時使用 `tabindex="0"` 讓元素加入自然焦點順序。

```html
<body>
  <a href="http://www.w3school.com.cn/" tabindex="2">W3School</a>
  <a href="http://www.google.com/" tabindex="1">Google</a>
  <a href="http://www.microsoft.com/" tabindex="3">Microsoft</a>
</body>
```
