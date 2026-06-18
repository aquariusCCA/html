---
source:
  - 'origin/050-全局屬性/04-contextmenu 属性.md / 全文'
---

# contextmenu 上下文選單

> contextmenu 屬性曾用於指定元素的上下文菜單，但此屬性已過時，現代 HTML 不應再依賴它建立自訂右鍵選單。若需要自訂上下文選單，應使用 JavaScript 監聽 `contextmenu` 事件處理。

```html
<body>
  <p id="target">右键单击此文本。</p>

  <script>
    const target = document.getElementById('target');

    target.addEventListener('contextmenu', function (event) {
      event.preventDefault();
      alert('顯示自訂上下文選單');
    });
  </script>
</body>
```

<aside>
⚠️

**`contextmenu` 屬性與 `<menuitem>` 元素屬於過時用法，主流瀏覽器不應依賴。**

</aside>
