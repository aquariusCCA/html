> `contextmenu` 屬性規定了元素的上下文菜單。當用戶右擊元素時將顯示上下文菜單。 `contextmenu` 屬性的值是需要打開的 `<menu>` 元素的 id。

```html
<body>

  <!-- 定义一个上下文菜单 -->
  <menu type="context" id="myContextMenu">
    <menuitem label="Item 1" onclick="alert('Clicked Item 1')"></menuitem>
    <menuitem label="Item 2" onclick="alert('Clicked Item 2')"></menuitem>
    <menuitem label="Item 3" onclick="alert('Clicked Item 3')"></menuitem>
  </menu>

  <!-- 使用 contextmenu 属性关联上下文菜单 -->
  <p contextmenu="myContextMenu">右键单击此文本显示上下文菜单。</p>

</body>
```

> ⚠️ ** 目前的主流瀏覽器都不支持該屬性，只有火狐瀏覽器支持。**