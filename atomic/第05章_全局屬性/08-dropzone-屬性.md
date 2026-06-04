# dropzone 屬性

> 來源：origin/第05章_全局屬性/08-dropzone 属性.md / 全文

`dropzone` 屬性曾用於規定當被拖動的數據拖放到元素上時，是否被複製、移動或鏈接。

> ⚠️ `dropzone` 已屬於 obsolete 屬性，現代 HTML 不建議使用。實作拖放互動時，通常使用 Drag and Drop API 搭配 JavaScript 事件處理。

## 屬性值

- `copy`：拖動資料會產生被拖動資料的副本。
- `move`：拖動資料會導致被拖動資料被移動到新位置。
- `link`：拖動資料會產生指向原始資料的鏈接。

```html
<body>
  <!-- 歷史用法示例；現代 HTML 不建議使用 dropzone。 -->
  <div dropzone="copy"></div>
</body>
```
