# div 佈局與語意化標籤佈局對照

> 來源：origin/第13章_語意化標籤/01-語意化標籤.md / Notes「以前佈局」與「換成語意化標籤來佈局」

以前做佈局時，基本上會使用 `div`。但 `div` 對於搜索引擎來說，是沒有語義的。

如果元素只是為了套用樣式或包裹版面，仍可使用 `div`；語意化標籤應用在能表達內容結構與用途的區塊。

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

## 使用語意化標籤佈局

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
  <section>
    <h2>某個區域</h2>
  </section>
</body>
```
