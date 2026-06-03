<!--
source_atomic:
  - atomic/第02章_HTML簡介/07-HTML標籤結構與單雙標籤.md
  - atomic/第02章_HTML簡介/08-HTML元素間的嵌套與並列關係.md
-->

# HTML 標籤結構與元素關係

## 學習目標

讀完這篇筆記，你應該能夠：

- 說明 HTML 標籤由哪些部分組成。
- 分辨雙標籤與不寫結束標籤的元素。
- 理解父元素、子元素、祖先元素、後代元素與兄弟元素的關係。
- 寫出層級清楚、巢狀正確的 HTML 結構。

## 問題情境

HTML 不是只把標籤一個接一個寫出來。每個標籤都有自己的開始、結束與內容範圍，標籤之間也會形成父子、兄弟或更深層的巢狀關係。

如果這些關係寫錯，瀏覽器可能仍會盡量顯示畫面，但文件結構會變得難理解，也會影響後續 CSS 選取、JavaScript 操作與維護。

## 一句話理解

HTML 標籤用來包住或標記內容；元素之間的巢狀與並列關係，決定了整份文件的結構層級。

## 標籤的基本組成

常見 HTML 元素由起始標籤、內容與結束標籤組成；標籤本身則由 `<`、`>`、`/` 與標籤名等語法片段構成。

![HTML 雙標籤結構示意圖](../../origin/第02章_HTML簡介/assets/images/html-tag-composition-relations-img-001-979b79.png)

以段落為例：

```html
<p>這是一段文字。</p>
```

可以拆成：

| 部分 | 說明 |
| --- | --- |
| `<p>` | 起始標籤，表示段落元素開始。 |
| `這是一段文字。` | 元素內容。 |
| `</p>` | 結束標籤，表示段落元素結束。 |

標籤名通常放在尖括號中，例如 `p`、`h1`、`a`、`body`。結束標籤會在標籤名前加上 `/`。

## 雙標籤與不寫結束標籤的元素

多數 HTML 元素會使用起始標籤與結束標籤，初學教材常稱為雙標籤。

例如：

```html
<h1>文章標題</h1>
<p>文章段落。</p>
<a href="https://example.com">前往範例網站</a>
```

有些特殊元素不寫結束標籤。初學教材常稱為單標籤；在 HTML 中較精確的說法是 void elements。

常見例子：

```html
<br>
<img src="photo.jpg" alt="照片說明">
<input type="text" name="username">
```

這些元素本身不包住文字內容，因此不需要再寫一個結束標籤。

## 元素與標籤的差別

嚴格來說，標籤是語法片段，元素是由標籤與內容形成的完整節點。

例如：

```html
<p>這是一段文字。</p>
```

在這段程式碼中：

- `<p>` 是起始標籤。
- `</p>` 是結束標籤。
- `<p>這是一段文字。</p>` 整體是一個段落元素。

入門階段常會把標籤與元素混用，但理解差別能幫助你之後學 CSS 選擇器與 DOM 操作。

## 嵌套關係

當一個元素包住另一個元素時，就形成嵌套關係。

```html
<article>
  <h1>HTML 入門</h1>
  <p>HTML 用來描述網頁內容與結構。</p>
</article>
```

在這段程式碼中：

- `article` 包住 `h1` 和 `p`。
- `h1` 和 `p` 都在 `article` 裡面。
- `h1` 和 `p` 彼此是同一層級的兩個元素。

## 父元素與子元素

直接包住某個元素的外層元素，稱為父元素。被直接包住的元素，稱為子元素。

![HTML 父元素直接包裹關係示意圖](../../origin/第02章_HTML簡介/assets/images/html-tag-composition-relations-img-002-e7dad3.png)

![HTML 子元素直接包含關係示意圖](../../origin/第02章_HTML簡介/assets/images/html-tag-composition-relations-img-003-1cbae7.png)

例如：

```html
<ul>
  <li>HTML</li>
  <li>CSS</li>
</ul>
```

在這裡：

- `ul` 是兩個 `li` 的父元素。
- 兩個 `li` 是 `ul` 的子元素。

## 祖先元素與後代元素

祖先元素不只包含直接父元素，也包含更外層的父元素。

![HTML 祖先元素關係示意圖](../../origin/第02章_HTML簡介/assets/images/html-tag-composition-relations-img-004-9cd56d.png)

後代元素不只包含直接子元素，也包含更深層的子元素。

![HTML 後代元素關係示意圖](../../origin/第02章_HTML簡介/assets/images/html-tag-composition-relations-img-005-eb1f13.png)

例如：

```html
<main>
  <section>
    <h2>學習主題</h2>
    <p>今天學習 HTML 標籤關係。</p>
  </section>
</main>
```

在這裡：

- `main` 是 `section`、`h2`、`p` 的祖先元素。
- `section` 是 `h2` 和 `p` 的父元素。
- `h2` 和 `p` 是 `main` 的後代元素。

## 兄弟元素與並列關係

同一個父元素底下的同層元素，稱為兄弟元素。

![HTML 兄弟元素關係示意圖](../../origin/第02章_HTML簡介/assets/images/html-tag-composition-relations-img-006-e13b0d.png)

例如：

```html
<nav>
  <a href="/">首頁</a>
  <a href="/about.html">關於我們</a>
  <a href="/contact.html">聯絡我們</a>
</nav>
```

這三個 `a` 元素都直接放在 `nav` 裡面，因此彼此是兄弟元素。

## 常見錯誤

### 標籤交錯閉合

錯誤寫法：

```html
<p><strong>重要文字</p></strong>
```

標籤應該先開後關，內層元素要先結束：

```html
<p><strong>重要文字</strong></p>
```

### 忘記結束標籤

較不理想：

```html
<p>第一段
<p>第二段
```

較清楚：

```html
<p>第一段</p>
<p>第二段</p>
```

瀏覽器可能會自動修正某些錯誤，但正式撰寫時仍應把結構寫完整。

### 把不該包內容的元素寫成雙標籤

較不理想：

```html
<img src="photo.jpg" alt="照片"></img>
```

HTML 中的 `img` 是不寫結束標籤的元素，應寫成：

```html
<img src="photo.jpg" alt="照片">
```

## 實務使用場景

理解元素關係後，之後學 CSS 與 JavaScript 會更容易。

例如 CSS 可能會選取某個區塊裡的段落：

```css
article p {
  line-height: 1.8;
}
```

這個選擇器的意思是：選取 `article` 後代中的所有 `p` 元素。

如果 HTML 結構層級清楚，樣式選取和互動操作就會更穩定。

## 重點整理

- 常見 HTML 元素由起始標籤、內容與結束標籤組成。
- 多數元素是雙標籤；`br`、`img`、`input` 等 void elements 不寫結束標籤。
- 元素之間可以形成父子、祖先後代與兄弟關係。
- 巢狀結構要先開後關，避免標籤交錯閉合。
- 清楚的元素關係有助於 CSS、JavaScript、搜尋引擎與輔助技術理解頁面。

## 自我檢查

- 我是否能分辨起始標籤、內容與結束標籤？
- 我是否能說明父元素、子元素、祖先元素、後代元素與兄弟元素？
- 我是否能檢查一段 HTML 是否有標籤交錯閉合？
