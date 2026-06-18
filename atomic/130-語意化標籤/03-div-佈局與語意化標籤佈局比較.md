---
source:
  - 'origin/130-語意化標籤/01-語意化標籤.md / div 範例、語意化標籤範例'
---

# div 佈局與語意化標籤佈局比較

以前做佈局，基本上會用 `div` 來做。`div` 對於搜索引擎來說，是沒有語義的。

語意化不是單純把 `class` 名稱換成同名標籤，而是依內容含義選擇合適元素；如果只是為了樣式或版面包裝，仍可使用 `div`。

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
  <div class="section">
    <h2>最新消息</h2>
    <p>這是一段與最新消息相關的內容。</p>
  </div>
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
  <section>
    <h2>最新消息</h2>
    <p>這是一段與最新消息相關的內容。</p>
  </section>
</body>
```
