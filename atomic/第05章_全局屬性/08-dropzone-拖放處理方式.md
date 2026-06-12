# dropzone 拖放處理方式

> 來源：origin/第05章_全局屬性/08-dropzone 属性.md / 全文

> dropzone 屬性曾用於規定被拖動的數據拖放到元素上時，是否被複製、移動或鏈接；但此屬性已過時，現代 HTML 不應再使用。

<aside>
👉

**過時屬性值**

- copy: 拖動資料會產生被拖動資料的副本。
- move: 拖動資料會導致被拖動資料被移動到新位置。
- link: 拖動資料會產生指向原始資料的鏈接。

</aside>

```html
<body>
  <div id="drop-target">拖放到這裡</div>

  <script>
    const dropTarget = document.getElementById('drop-target');

    dropTarget.addEventListener('dragenter', function (event) {
      event.preventDefault();
    });

    dropTarget.addEventListener('dragover', function (event) {
      event.preventDefault();
    });
  </script>
</body>
```

<aside>
⚠️

**`dropzone` 屬性屬於過時用法，拖放行為應使用 Drag and Drop API 事件處理。**

</aside>
