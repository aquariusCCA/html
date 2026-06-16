> class 屬性定義了元素的類名。 class 屬性通常用於指向樣式表的類，但是，它也可以用於 JavaScript 通過 HTML DOM 來修改 HTML 元素的類名。
 
- 語法 :
    
    ```html
    <element class="value">
    ```
    
- 在 HTML5 中，class 屬性可用於任何的 HTML 元素 ，它會驗證任何HTML元素，但不一定是有用。

- 在 HTML4 中，class 屬性不能用於：`<base>、<head>、<html>、<meta>、<param>、<script>、<style>、<title>`。

## **在HTML文檔中使用class屬性**

```css
h1.intro {
  color: blue;
}

p.important {
  color: green;
}
```

```html
<body>
  <h1 class="intro">Header 1</h1>
  <p>A paragraph.</p>
  <p class="important">Note that this is an important paragraph.</p>
</body>
```

## **向元素添加多個class屬性**

> 屬性值定義元素的類的名稱。如需為一個元素規定多個類，可用空格分隔類名。

```css
.intro {
  color: blue;
  text-align: center;
}

.important {
  background-color: yellow;
}
```

```html
<body>
  <h1 class="intro important">Header 1</h1>
  <p>A paragraph.</p>
</body>
```