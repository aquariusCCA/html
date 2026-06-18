---
source:
  - 'origin/050-全局屬性/03-contenteditable 属性.md / 全文'
---

# contenteditable 可編輯內容

> HTML5 新增。目的是讓用戶能夠修改頁面上的元素。

常見值包含：

- `true`：元素可編輯。
- `false`：元素不可編輯。
- `plaintext-only`：只能編輯純文字內容，不啟用富文字格式。

若未設定或使用無效值，元素會依父層的可編輯狀態繼承。

```html
<body>
  <p contenteditable="true">I  love China!</p>
  <p contenteditable="false">I  love China!</p>
  <p contenteditable="plaintext-only">只能輸入純文字。</p>
</body>
```
