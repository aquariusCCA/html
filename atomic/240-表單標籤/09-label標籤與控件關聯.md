# label 標籤與控件關聯

> 來源：origin/240-表單標籤/04-label標籤.md / 全文

`label` 標籤可與表單控件相關聯。關聯之後點擊文字，與之對應的表單控件就會獲取焦點。

- 核心：`<label>` 標籤的 `for` 屬性應當與相關元素的 `id` 屬性相同。
- `<label>` 標籤用於綁定一個表單元素。當點擊 `<label>` 標籤內的文本時，瀏覽器就會自動將焦點轉到或者選擇對應的表單元素上，用來增加用戶體驗。

```html
<!-- 兩種使用方式等效 -->
<input type="radio" name="sex" id="man">
<label for="man">男</label>

<label>
  <input type="radio" name="sex">女
</label>
```
