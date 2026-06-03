# 瀏覽器渲染模式 Meta 標籤

> 來源：origin/第03章_兼容性問題/01-兼容性問題.md / # 1. 添加元信息，讓瀏覽器處於最優渲染模式

透過 HTML meta 標籤，可以讓瀏覽器處於較合適的渲染模式，減少不同瀏覽器核心或舊版瀏覽器造成的兼容性問題。

## 強制 Internet Explorer 使用最新文檔模式的 HTML Meta 標籤

- 這是一個 HTML meta 標籤，它可以告訴 Internet Explorer 瀏覽器使用哪種文檔模式進行渲染。
- IE 總是會嘗試以自己的方式解釋 HTML 和 CSS 代碼，但由於 IE 的不同版本之間存在差異，因此在某些情況下可能會發生兼容性問題。
- 為了避免這種情況，可以使用這個 meta 標籤讓 IE 優先使用該版本可支援的最高文檔模式進行渲染，即 IE=Edge。這可以降低兼容性視圖或舊文檔模式造成的差異，但不同 IE 版本仍需要實際測試。

```html
<!-- 設置 IE 總是使用最新的文檔模式進行渲染 -->
<meta http-equiv="X-UA-Compatible" content="IE=Edge">
```

## 控制雙核瀏覽器渲染行為的 HTML Meta 標籤：renderer

- 由於眾所周知的原因，國內的主流瀏覽器都是雙核瀏覽器，例如：百度、360 安全瀏覽器、UC 瀏覽器、搜狗高速瀏覽器。
  - 雙核是：webkit 內核和 IE 的 Trident 內核。
- `content="webkit"`：在支援 `renderer` 標籤的雙核瀏覽器中，讓瀏覽器優先使用 webkit 內核渲染頁面。
- 內核控制標籤：部分雙核瀏覽器（如 360）支援 `meta name="renderer"`。這不是 HTML 標準行為，實際效果需要依瀏覽器支援為準。

```html
<!-- 優先使用 webkit 內核進行渲染，針對 360 等瀏覽器 -->
<meta name="renderer" content="webkit">
```

## 參考文章

- 浏览器兼容
- 前端页面中的意义
