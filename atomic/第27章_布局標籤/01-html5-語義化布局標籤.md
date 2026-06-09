# HTML5 語義化布局標籤

> 來源：origin/第27章_布局標籤/01-布局標籤.md / 全文

相比較之前的 HTML 版本，HTML5 在網頁製作中加入更多具有語義性的標籤，幫助前端人員更高效地開發一個網頁。

- `<header>`：頭部標籤。
- `<nav>`：導航標籤。
- `<article>`：內容標籤。
- `<section>`：定義文檔某個區域。
- `<aside>`：側邊欄標籤。
- `<footer>`：尾部標籤。
- `<main>`：表示文件或頁面的主要內容區域，通常用來包住與頁面主題直接相關的內容。
- `<hgroup>`：用來組合一個標題與相關副標題、替代標題或 tagline；實務上較少使用，初學時了解即可。

大致布局介面如下：

![HTML5 語義化布局標籤示意圖](../../origin/第27章_布局標籤/assets/images/layout-tags-img-001-fe28a0.png)

## article 和 section

- `article` 裡面可以有多個 `section`。
- 一塊內容相對獨立、完整，應該使用 `article`；如果想將一塊內容分成幾段，應該使用 `section`。
  - `section` 強調的是分段或分塊。
- `article` 比 `section` 更強調獨立性，一塊內容如果比較獨立、比較完整，應該使用 `article` 元素。

```html
<!-- 頭部 -->
<header>
  <h1>尚品匯</h1>
</header>
<hr>

<!-- 主導航 -->
<nav>
  <a href="#">首頁</a>
  <a href="#">訂單</a>
  <a href="#">購物車</a>
  <a href="#">我的</a>
</nav>

<!-- 主要內容 -->
<div>
  <!-- 側邊欄導航 -->
  <aside style="float: right;">
    <nav>
      <ul>
        <li><a href="#">秒殺專區</a></li>
        <li><a href="#">會員專區</a></li>
        <li><a href="#">領取優惠券</a></li>
        <li><a href="#">品牌專區</a></li>
      </ul>
    </nav>
  </aside>
  <!-- 文章內容 -->
  <article>
    <h2>如何一夜暴富</h2>
    <section>
      <h3>第一種方式: 通過作夢</h3>
      <p>你要這麼作夢: xxxxxxxxxxxxxx</p>
    </section>
    <section>
      <h3>第二種方式: 通過買彩票</h3>
      <p>你要這麼買彩票: xxxxxxxxxxxx</p>
    </section>
    <section>
      <h3>第三種方式: 通過學習前端</h3>
      <p>你要來到尚硅谷前端: xxxxxxxxxxxxx</p>
    </section>
  </article>
</div>
<hr>

<footer>
  <nav>
    <a href="#">友情鏈接1</a>
    <a href="#">友情鏈接2</a>
    <a href="#">友情鏈接3</a>
    <a href="#">友情鏈接4</a>
  </nav>
</footer>
```
