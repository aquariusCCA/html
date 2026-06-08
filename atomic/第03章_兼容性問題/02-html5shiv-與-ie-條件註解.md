# html5shiv 與 IE 條件註解

> 來源：origin/第03章_兼容性問題/01-兼容性問題.md / # 2. 使用 html5shiv 讓低版本瀏覽器認識 H5 的語意化標籤

html5shiv 是一段讓 IE6、IE7、IE8 支援 HTML5 標籤的 JavaScript；但 html5shiv 對 IE6、IE7、IE8 外瀏覽器並無意義，故建議用 IE 的條件註解載入 html5shiv。

## IE Conditional Comment 條件註解

- IE 獨有的語法。其他瀏覽器看起來是註解，IE 看起來是程式碼，因此只有 IE 會執行。但是 IE10 不支援了，所以請把 IE10 當成其他瀏覽器。

```html
<!--[if lt IE 9]>
<script src="./js/html5shiv.min.js"></script>
<![endif]-->
```

## 條件判斷語法

- lt：小於
- lte：小於等於
- gt：大於
- gte：大於等於
- !：邏輯非

```html
<!--[if IE 8]>僅支持IE8可見<![endif]-->
<!--[if gt IE 8]>僅 IE8 以上可見<![endif]-->
<!--[if lt IE 8]>僅 IE8 以下可見<![endif]-->
<!--[if gte IE 8]>IE8 以上可見<![endif]-->
<!--[if lte IE 8]>IE8 及以下可見<![endif]-->
<!--[if !IE 8]>非 IE8 的 IE 可見<![endif]-->
```

## 參考文章

- HTML5新标签的兼容性处理
