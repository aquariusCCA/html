---
source:
  - 'origin/240-表單標籤/06-textarea文本域表單元素.md / 全文'
---

# textarea 多行文本域

在表單元素中，`<textarea>` 標籤是用於定義多行文本輸入的控件。

- 使用場景：當用戶輸入內容較多的情況下，不能使用文本框表單，此時可以使用 `<textarea>` 標籤。多行文本輸入控件可以輸入更多文字，常見於留言板、評論。

```html
<textarea name="msg" rows="22" cols="3">文本內容</textarea>
```

<aside>

**常用屬性如下：**

- `rows` 屬性：指定默認顯示的行數，會影響文本域的高度。
- `cols` 屬性：指定默認顯示的列數，會影響文本域的寬度。
- `<textarea>` 沒有 `type` 屬性；常見的 `name`、`placeholder`、`maxlength`、`required` 等屬性可使用，但初始內容寫在開始與結束標籤中間，不使用 `value` 屬性。
- `cols="每行中的字符數"`、`rows="顯示的行數"`。實際開發中通常不使用這兩個屬性控制大小，而是用 CSS 改變大小。

</aside>
