---
source:
  - 'origin/050-全局屬性/16-translate 属性.md / 全文'
---

# translate 翻譯控制

> translate 屬性規定元素內容是否要翻譯。

## 指定元素禁止翻譯

```html
<body>
  <p>
    The question in the
    <cite translate="no">How Far Can You Go?</cite> applies to...
  </p>
</body>
```

## 全站禁止翻譯

```html
<!DOCTYPE html>
<html translate="no">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
  <p>
    The question in the
    <cite>How Far Can You Go?</cite> applies to...
  </p>
</body>
</html>
```
