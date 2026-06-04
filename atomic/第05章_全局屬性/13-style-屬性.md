# style 屬性

> 來源：origin/第05章_全局屬性/13-style 属性.md / 全文

`style` 屬性規定元素的行內樣式（inline style）。一般情況下，行內樣式會優先於 `<style>` 標籤或外部樣式表中的普通作者樣式，但仍會受到 CSS cascade、`!important`、使用者樣式與瀏覽器行為等規則影響。

```html
<body>
  <h1 style="color:blue; text-align:center">This is a header</h1>
  <p style="color:red">This is a paragraph.</p>
</body>
```
