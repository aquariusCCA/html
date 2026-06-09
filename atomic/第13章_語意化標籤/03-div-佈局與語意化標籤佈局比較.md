# div 佈局與語意化標籤佈局比較

> 來源：origin/第13章_語意化標籤/01-語意化標籤.md / div 範例、語意化標籤範例

以前做佈局，基本上會用 `div` 來做。`div` 對於搜索引擎來說，是沒有語義的。

## 使用 div 佈局

```css
.header, .nav {
  height: 120px;
  background-color: pink;
  border-radius: 15px;
  width: 800px;
  margin: 15px auto;
}

.section {
  width: 500px;
  height: 300px;
  background-color: skyblue;
}
```

```html
<body>
  <div class="header">頭部標籤</div>
  <div class="nav">導航欄標籤</div>
  <div class="section">某個區域</div>
</body>
```

## 換成語意化標籤佈局

```css
header, nav {
  height: 120px;
  background-color: pink;
  border-radius: 15px;
  width: 800px;
  margin: 15px auto;
}

section {
  width: 500px;
  height: 300px;
  background-color: skyblue;
}
```

```html
<body>
  <header>頭部標籤</header>
  <nav>導航欄標籤</nav>
  <section>某個區域</section>
</body>
```
