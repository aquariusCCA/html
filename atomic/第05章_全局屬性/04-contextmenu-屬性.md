# contextmenu 屬性

> 來源：origin/第05章_全局屬性/04-contextmenu 属性.md / 全文

`contextmenu` 屬性曾用於指定元素的上下文菜單；它的值是要打開的 `<menu>` 元素的 `id`。

> ⚠️ `contextmenu` 屬性、`<menu type="context">` 與 `<menuitem>` 屬於 obsolete 功能，現代 HTML 不建議使用。若需要自訂右鍵選單，通常使用 JavaScript 監聽 `contextmenu` 事件。

```html
<body>
  <p id="target">右鍵單擊此文本顯示自訂處理。</p>

  <script>
    const target = document.getElementById('target');

    target.addEventListener('contextmenu', function (event) {
      event.preventDefault();
      alert('顯示自訂上下文選單');
    });
  </script>
</body>
```
