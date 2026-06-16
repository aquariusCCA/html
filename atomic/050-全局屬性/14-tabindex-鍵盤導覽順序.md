# tabindex 鍵盤導覽順序

> 來源：origin/050-全局屬性/14-tabindex 属性.md / 全文

> tabindex 屬性規定當使用 "tab" 鍵進行導航時元素的順序。

- 在 HTML5 中 tabindex 屬性可用於任何的 HTML 元素，它會驗證任何 HTML 元素，但不一定是有用。
- 在 HTML4 中，tabindex 屬性可用於：`<a>、<area>、<button>、<input>、<object>、<select>、<textarea>`。
- `tabindex="-1"` 表示元素可被程式聚焦，但不會出現在一般 Tab 鍵導覽順序中。
- `tabindex="0"` 表示元素加入一般 Tab 鍵導覽順序，順序依文件中的位置決定。
- 大於 `0` 的值會強制指定導覽順序，容易破壞鍵盤操作與輔助技術使用體驗，通常應避免使用。

```html
<body>
  <button>原本就可用 Tab 聚焦的按鈕</button>
  <div tabindex="0">加入一般 Tab 鍵導覽順序</div>
  <div tabindex="-1">不在一般 Tab 鍵導覽順序中，但可由 JavaScript 聚焦</div>
</body>
```
