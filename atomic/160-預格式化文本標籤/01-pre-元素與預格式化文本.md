---
source:
  - 'origin/160-預格式化文本標籤/01-預格式化文本標籤.md / 全文'
---

# pre 元素與預格式化文本

## 作用

HTML 裡的 `pre` 元素，可定義預格式化的文本。在 `pre` 元素中的文本會保留空格和換行符。文本顯現為等寬字體。

## 使用場景

保持文本格式的時候使用 `pre` 標籤。比如當我們要展示純文字、CSS 或部分程式碼時，可以放在 `pre` 中保留格式，不會像放在其它標籤裡那樣，把換行和空格都自動折疊了；若要展示 HTML 標籤本身，需要先將 `<`、`>` 等字元轉義。

下面是一個示例，這裡使用的是一段 CSS 代碼，也可以換成其它內容：

```html
<body>
  body {
    background: #fff;
    font: 12px/24px Arial, sans-serif;
  }
  <hr>

  <pre>
    body {
      background: #fff;
      font: 12px/24px Arial, sans-serif;
    }
  </pre>
</body>
```

<aside>
👉

**可以看出有使用 pre 標籤裡面的 tab，空格，換行都完整的保留下來了。**

</aside>
