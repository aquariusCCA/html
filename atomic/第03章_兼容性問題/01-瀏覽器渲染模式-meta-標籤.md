# 瀏覽器渲染模式 Meta 標籤

> 來源：origin/第03章_兼容性問題/01-兼容性問題.md / # 1. 添加元信息，讓瀏覽器處於最優渲染模式

## 強制 Internet Explorer 使用最新文檔模式

- 這是一個 HTML meta 標籤，它可以告訴 Internet Explorer 瀏覽器使用哪種文檔模式進行渲染。
- IE 總是會嘗試以自己的方式解釋 HTML 和 CSS 代碼，但由於 IE 的不同版本之間存在差異，因此在某些情況下可能會發生兼容性問題。
- 為了避免舊文檔模式或相容性檢視造成的差異，可以使用這個 meta 標籤要求 IE 使用可用的最高文檔模式進行渲染，即 IE=Edge；但不同 IE 版本仍可能有功能與渲染差異，不能保證完全一致。

```html
<!-- 設置 IE 總是使用最新的文檔模式進行渲染 --><meta http-equiv="X-UA-Compatible" content="IE=Edge">
```

## 控制雙核瀏覽器渲染行為

- 部分國內瀏覽器曾採用 WebKit/Blink 與 IE Trident 雙核心，例如：360安全瀏覽器、搜狗高速瀏覽器等；實際核心與支援情況會依瀏覽器版本而不同。
    - 常見雙核心組合是 WebKit/Blink 內核和 IE 的 Trident 內核。
- `content="webkit"`：在支援 `renderer` 的雙核瀏覽器中，提示瀏覽器優先使用 WebKit/Blink 內核渲染頁面。
- `renderer` 是特定瀏覽器支援的非標準 meta 提示；實際是否切換內核取決於瀏覽器支援與版本，不是所有瀏覽器都會立即切換。

```html
<!-- 優先使用 webkit 內核進行渲染，針對 360 等瀏覽器 --><meta name="renderer" content="webkit">
```

## 參考文章

- 浏览器兼容
- 前端页面中的意义
