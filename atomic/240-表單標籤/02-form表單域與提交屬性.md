---
source:
  - 'origin/240-表單標籤/02-表單域.md / 全文'
---

# form 表單域與提交屬性

表單域是一個包含表單元素的區域。

- 在 HTML 標籤中，`<form>` 標籤用於定義表單域，以實現用戶信息的收集和傳遞。
- 提交表單時，`<form>` 會依照設定將可提交的表單控件資料送出，例如有 `name` 且未被禁用的欄位。
- 表單域常用屬性如下：

![form 表單域常用屬性表](../../origin/240-表單標籤/assets/images/form-tag-img-001-dedcdd.png)

```html
<form action="url地址" method="提交方式" name="表單域的名稱" target="如何打開頁面">
  <!-- 省略... -->
</form>
```
