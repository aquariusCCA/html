# accesskey 屬性

> 來源：origin/第05章_全局屬性/01-accesskey 屬性設置訪問元素的鍵盤快捷鍵.md / 全文

使用 `accesskey` 可以設置一個或者多個頁面上的元素的快捷方式，其目的是讓網頁或者網站的熟客可以使用快捷鍵訪問經常用到的元素。

`accesskey` 的啟用方式依作業系統與瀏覽器而異；Windows 上常見組合包含 `Alt + key` 或 `Alt + Shift + key`。

> ⚠️ 注意：在不同操作系統與不同瀏覽器中，訪問快捷鍵的方式不同。

- 在 HTML5 中，`accesskey` 屬性可用於任何 HTML 元素，它會驗證任何 HTML 元素，但不一定是有用。
- 在 HTML4 中，`accesskey` 屬性可使用於：`<a>`、`<area>`、`<button>`、`<input>`、`<label>`、`<legend>`、`<textarea>`。

## 語法

```html
<element accesskey="character">
```

## 用法

```html
<!-- 依瀏覽器快捷鍵設定，啟用 accesskey="a" 會跳轉到百度首頁；啟用 accesskey="g" 會跳轉到新浪首頁。 -->
<a href="http://www.baidu.com" accesskey="a">百度</a>
<a href="http://www.sina.com" accesskey="g">新浪</a>
```
