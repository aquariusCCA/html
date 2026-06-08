# accesskey 鍵盤快捷鍵

> 來源：origin/第05章_全局屬性/01-accesskey 屬性設置訪問元素的鍵盤快捷鍵.md / 全文

> 使用 accesskey 可以设置一个或者多个页面上的元素的快捷方式，其目的是让网页或者网站的熟客可以使用快捷键访问经常用到的元素。Windows 系统下快捷键的按法是：Alt+accesskey 的属性值。
>
> **注意：在不同操作系統中不同的瀏覽器中訪問快捷鍵的方式不同。**

- 在 HTML5 中 accesskey 屬性可用於任何 HTML 元素，它會驗證任何 HTML 元素，但不一定是有用。
- 在 HTML4 中 accesskey 屬性可使用於：`<a>、<area>、<button>、<input>、<label>、<legend>、<textarea>`。

## 語法

```html
<element accesskey="character">
```

## 用法

```html
<!-- 使用 Alt+a，會自動跳轉到百度首頁；使用 Alt+g 會自動跳轉到新浪首頁。 -->
<a href="http://www.baidu.com" accesskey="a">百度</a>
<a href="http://www.sina.con" accesskey="g">新浪</a>
```
