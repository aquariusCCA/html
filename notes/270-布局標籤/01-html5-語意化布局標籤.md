---
source_atomic:
  - atomic/270-布局標籤/01-html5-語義化布局標籤.md
topics: [語意化布局標籤, 頁面結構, article與section, div使用判斷]
summary: "說明 HTML5 布局標籤的語意角色，並建立 article、section 與 div 的選用判斷。"
---

# HTML5 語意化布局標籤

## 學習目標

讀完這篇筆記，你應該能夠：

- 說明 HTML5 常見語意化布局標籤各自代表的內容角色。
- 用 `<header>`、`<nav>`、`<main>`、`<article>`、`<section>`、`<aside>`、`<footer>` 規劃基本頁面結構。
- 判斷什麼時候該用 `<article>`、`<section>`，什麼時候只需要 `<div>`。

## 為什麼需要布局標籤

早期網頁常用大量 `<div>` 搭配 `class` 來切版，例如 `div.header`、`div.nav`、`div.footer`。畫面可以正常顯示，但 HTML 本身沒有清楚說出每個區塊的意義。

HTML5 加入更多語意化布局標籤，是為了讓頁面結構不只「看起來分區」，也能讓瀏覽器、搜尋引擎、輔助技術與其他開發者看懂每個區塊在頁面中的角色。

## 一句話理解

HTML5 語意化布局標籤，就是用標籤名稱直接表達頁面區塊的內容角色。

例如：

- `<header>` 表示頁首或區塊開頭。
- `<nav>` 表示導覽。
- `<main>` 表示頁面主要內容。
- `<footer>` 表示頁尾。

這些標籤不負責讓畫面變漂亮；它們主要負責讓 HTML 結構更有意義。

## 常見 HTML5 布局標籤

| 標籤 | 代表意義 | 常見使用情境 |
| --- | --- | --- |
| `<header>` | 頭部、頁首或某個區塊的開頭 | 網站標題、Logo、頁面標題區 |
| `<nav>` | 導覽區 | 主選單、頁尾連結、側邊欄分類導覽 |
| `<main>` | 頁面主要內容 | 每個頁面最核心、最直接相關的內容 |
| `<article>` | 可獨立理解的完整內容 | 一篇文章、一則商品介紹、一則新聞 |
| `<section>` | 同一主題下的內容分段 | 文章中的章節、頁面中的主題區塊 |
| `<aside>` | 側邊或補充內容 | 側欄、相關連結、推薦內容 |
| `<footer>` | 尾部、頁尾或區塊結尾 | 版權資訊、友情連結、補充導覽 |
| `<hgroup>` | 標題與副標題群組 | 較少使用，初學時了解即可 |

大致布局介面如下：

![HTML5 語義化布局標籤示意圖](../../origin/270-布局標籤/assets/images/layout-tags-img-001-fe28a0.png)

## 先看整體結構

一個常見頁面可以拆成以下結構：

```html
<header>
  <h1>網站名稱</h1>
</header>

<nav>
  <a href="#">首頁</a>
  <a href="#">商品</a>
  <a href="#">會員中心</a>
</nav>

<main>
  <article>
    <h2>文章標題</h2>

    <section>
      <h3>第一個小節</h3>
      <p>這裡放第一個小節的內容。</p>
    </section>

    <section>
      <h3>第二個小節</h3>
      <p>這裡放第二個小節的內容。</p>
    </section>
  </article>
</main>

<aside>
  <nav>
    <h2>相關連結</h2>
    <ul>
      <li><a href="#">推薦文章</a></li>
      <li><a href="#">熱門分類</a></li>
    </ul>
  </nav>
</aside>

<footer>
  <p>Copyright 2026</p>
</footer>
```

這段 HTML 的重點不是排版，而是用標籤表達內容角色：上方是頁首，中間有導覽，主要內容放在 `<main>`，文章放在 `<article>`，文章內的小節用 `<section>`，補充連結放在 `<aside>`，最後是頁尾。

## 逐段拆解

### header：頁首或區塊開頭

`<header>` 通常放網站名稱、Logo、標題或一個區塊的前導內容。

```html
<header>
  <h1>尚品匯</h1>
</header>
```

如果它放在整個頁面最上方，通常代表網站或頁面的頁首；如果它放在 `<article>` 裡，也可以代表那篇文章自己的開頭。

### nav：導覽區

`<nav>` 用來包住主要導覽連結。

```html
<nav>
  <a href="#">首頁</a>
  <a href="#">訂單</a>
  <a href="#">購物車</a>
  <a href="#">我的</a>
</nav>
```

不是所有連結都一定要放進 `<nav>`。如果只是文章內的一個普通超連結，不需要特別包成導覽區。`<nav>` 適合用在一組具有導覽功能的連結。

### main：主要內容

`<main>` 表示這個頁面最核心的內容，一個頁面通常只會有一個主要的 `<main>`。

```html
<main>
  <article>
    ...
  </article>
</main>
```

頁首、導覽列、側邊補充資訊、頁尾通常不是頁面的主要內容，因此不應該全部塞進 `<main>`。

### article：可獨立理解的完整內容

`<article>` 適合表示一塊相對獨立、完整的內容。例如一篇文章、一則新聞、一張商品卡片、一則留言。

```html
<article>
  <h2>前端學習路線</h2>
  <p>這篇文章介紹初學者可以如何安排 HTML、CSS 與 JavaScript 的學習順序。</p>
</article>
```

判斷方式是：如果這塊內容單獨拿出來，讀者仍然能理解它在講什麼，通常就適合用 `<article>`。

### section：同一主題下的分段

`<section>` 表示某個有明確主題的內容區域，常見於文章或頁面中的章節。

```html
<article>
  <h2>前端學習路線</h2>

  <section>
    <h3>先學 HTML</h3>
    <p>HTML 負責描述網頁內容與結構。</p>
  </section>

  <section>
    <h3>再學 CSS</h3>
    <p>CSS 負責控制畫面樣式與版面。</p>
  </section>
</article>
```

`<article>` 裡可以有多個 `<section>`。`<article>` 強調內容本身的獨立性，`<section>` 強調同一主題底下的分段。

### aside：側邊或補充內容

`<aside>` 用來放和主要內容相關，但不是主線內容的一塊區域。

```html
<aside>
  <nav>
    <h2>商品分類</h2>
    <ul>
      <li><a href="#">秒殺專區</a></li>
      <li><a href="#">會員專區</a></li>
      <li><a href="#">領取優惠券</a></li>
    </ul>
  </nav>
</aside>
```

`aside` 不一定只能放在畫面右側。它的重點是「補充內容」，不是「一定浮在旁邊」。

### footer：頁尾或區塊結尾

`<footer>` 通常放頁尾資訊，例如版權、友情連結、聯絡資訊，也可以放在某個文章或區塊的結尾。

```html
<footer>
  <nav>
    <a href="#">友情連結 1</a>
    <a href="#">友情連結 2</a>
    <a href="#">友情連結 3</a>
  </nav>
</footer>
```

## article、section 和 div 的差異

這三個標籤很容易混淆，因為它們都可以包住一塊內容。

| 標籤 | 何時使用 | 判斷重點 |
| --- | --- | --- |
| `<article>` | 內容相對獨立、完整 | 單獨拿出來仍可理解 |
| `<section>` | 同一主題下的有標題分段 | 是一個有主題的小節 |
| `<div>` | 只是排版、分組或樣式容器 | 沒有特定語意 |

可以用這個順序判斷：

1. 這塊內容能不能獨立成一篇完整內容？可以，考慮 `<article>`。
2. 這塊內容是不是同一主題下的一個小節，而且通常可以加標題？可以，考慮 `<section>`。
3. 如果只是為了套 CSS、排版或包住幾個元素，使用 `<div>`。

## 常見錯誤

### 錯誤一：整頁只用 div 分區

```html
<div class="header">...</div>
<div class="nav">...</div>
<div class="main">...</div>
<div class="footer">...</div>
```

這樣寫畫面可能完全正常，但 HTML 本身沒有語意。其他人必須靠 `class` 猜測結構，輔助技術與搜尋引擎也比較難理解頁面角色。

比較好的寫法是：

```html
<header>...</header>
<nav>...</nav>
<main>...</main>
<footer>...</footer>
```

### 錯誤二：把 section 當成萬用容器

```html
<section class="button-group">
  <button>儲存</button>
  <button>取消</button>
</section>
```

這裡只是按鈕群組，沒有形成一個有主題的內容小節，用 `<section>` 反而會製造錯誤語意。更合適的是：

```html
<div class="button-group">
  <button>儲存</button>
  <button>取消</button>
</div>
```

### 錯誤三：混淆 article 和 section

如果一整篇教學文章用 `<section>` 包住，或把文章裡的每個小節都寫成 `<article>`，都可能讓結構失準。

比較穩定的做法是：

```html
<article>
  <h2>HTML5 語意化布局</h2>

  <section>
    <h3>常見布局標籤</h3>
    <p>...</p>
  </section>

  <section>
    <h3>article 與 section 的差異</h3>
    <p>...</p>
  </section>
</article>
```

整篇內容是 `<article>`，文章內的不同小節是 `<section>`。

## 實務使用建議

- 先判斷內容角色，再決定標籤，不要只看畫面位置。
- 頁面的主要內容放進 `<main>`，但頁首、全站導覽、頁尾通常不要放進 `<main>`。
- 有導覽功能的一組連結用 `<nav>`，普通文字連結不需要硬包 `<nav>`。
- 有獨立性的完整內容用 `<article>`。
- 有主題、可加標題的分段用 `<section>`。
- 只為了排版或樣式分組時，使用 `<div>` 仍然是正確選擇。

## 重點整理

- HTML5 語意化布局標籤讓頁面結構更容易被人與機器理解。
- `<header>`、`<nav>`、`<main>`、`<article>`、`<section>`、`<aside>`、`<footer>` 各自代表不同內容角色。
- `<article>` 強調完整、獨立；`<section>` 強調同一主題下的分段；`<div>` 是沒有語意的通用容器。
- 語意化不是把所有 `<div>` 換掉，而是在有明確內容角色時使用更準確的標籤。

## 自我檢查

1. 如果一塊內容是完整的一篇新聞，應該優先考慮使用 `<article>` 還是 `<section>`？為什麼？
2. 如果一個容器只是為了讓兩個按鈕排在同一列，應該用 `<section>` 還是 `<div>`？
3. `<main>` 裡應該放頁面主要內容，還是全站導覽與頁尾也都可以放進去？
4. 側邊欄內容一定要放在畫面右側，才可以使用 `<aside>` 嗎？
