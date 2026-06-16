<!--
source_atomic:
  - atomic/050-全局屬性/02-class-類別屬性.md
  - atomic/050-全局屬性/10-id-唯一識別碼.md
  - atomic/050-全局屬性/13-style-行內樣式.md
-->

# id、class、style：識別元素、分類元素與設定樣式

## 學習目標

讀完這篇筆記，你應該能夠：

- 分辨 `id`、`class`、`style` 三個全局屬性的用途。
- 知道什麼時候用唯一的 `id`，什麼時候用可重複的 `class`。
- 理解行內樣式 `style` 適合用在什麼情境，以及為什麼不適合大量使用。

## 問題情境

寫 HTML 時，你常常會遇到三種需求：

- 想讓某一個元素有唯一名稱，方便 CSS、JavaScript 或頁內連結找到它。
- 想把多個元素歸成同一類，讓它們套用相同樣式或行為。
- 想直接在某個元素上快速設定一點樣式。

這三種需求分別對應到 `id`、`class`、`style`。

## 一句話理解

`id` 用來標記「唯一元素」，`class` 用來標記「同類元素」，`style` 用來直接寫「這個元素自己的 CSS」。

## 基本語法

```html
<p id="intro" class="lead important" style="color: blue;">
  這是一段重要的開場文字。
</p>
```

這段 HTML 同時使用三個屬性：

- `id="intro"`：這個元素在文件中的唯一識別碼。
- `class="lead important"`：這個元素同時屬於 `lead` 和 `important` 兩個類別。
- `style="color: blue;"`：直接在元素上設定文字顏色。

## id：唯一識別碼

`id` 屬性規定 HTML 元素的唯一識別碼。重點是「唯一」：同一份 HTML 文件中，不應該有兩個元素使用相同的 `id`。

```html
<p id="name">這是一段文字。</p>
```

常見用途包含：

- 用 CSS 選取特定元素。
- 用 JavaScript 取得特定元素。
- 作為頁內錨點，例如連到 `#name`。

```html
<h2 id="contact">聯絡方式</h2>

<a href="#contact">跳到聯絡方式</a>
```

如果同一頁有多個 `id="contact"`，瀏覽器和 JavaScript 都很難明確知道你指的是哪一個元素。

## class：可重複的類別

`class` 屬性用來定義元素的類名，通常會搭配 CSS 或 JavaScript 使用。

```html
<h1 class="intro">Header 1</h1>
<p class="important">Note that this is an important paragraph.</p>
```

一個 class 可以套用在很多元素上，所以它適合用來表示「這些元素屬於同一組」。

```css
.important {
  background-color: yellow;
}
```

```html
<p class="important">重要提醒一</p>
<p class="important">重要提醒二</p>
```

同一個元素也可以有多個 class，使用空格分隔。

```html
<h1 class="intro important">Header 1</h1>
```

這代表這個 `<h1>` 同時屬於 `intro` 和 `important` 兩個類別。

## style：行內樣式

`style` 屬性可以直接在元素上寫 CSS。

```html
<h1 style="color: blue; text-align: center;">This is a header</h1>
<p style="color: red;">This is a paragraph.</p>
```

行內樣式通常比外部樣式表或 `<style>` 標籤中的一般規則有更高優先權，但仍會受到 CSS cascade 與 `!important` 影響。

實務上，`style` 適合用於：

- 快速測試一個樣式。
- 少量、一次性的樣式。
- JavaScript 動態調整元素樣式。

但如果整個網站都大量使用 `style`，樣式會分散在 HTML 裡，後續維護會變得困難。

## 三者對照

| 屬性 | 核心用途 | 是否可重複使用同一值 | 常見搭配 |
| --- | --- | --- | --- |
| `id` | 標記唯一元素 | 不應重複 | CSS、JavaScript、頁內錨點 |
| `class` | 標記同類元素 | 可以重複 | CSS、JavaScript |
| `style` | 直接寫行內 CSS | 視元素而定 | CSS 宣告 |

## 常見錯誤

### 錯誤一：重複使用同一個 id

```html
<p id="notice">第一則公告</p>
<p id="notice">第二則公告</p>
```

這種寫法破壞了 `id` 的唯一性。若這兩段都是公告，應該使用 `class`。

```html
<p class="notice">第一則公告</p>
<p class="notice">第二則公告</p>
```

### 錯誤二：把所有樣式都寫在 style 裡

```html
<p style="color: red; font-size: 18px; margin-bottom: 24px;">提醒文字</p>
```

單次測試可以這樣寫，但如果很多地方都要使用相同樣式，應改用 class。

```html
<p class="notice">提醒文字</p>
```

```css
.notice {
  color: red;
  font-size: 18px;
  margin-bottom: 24px;
}
```

### 錯誤三：用 id 做可重複分類

如果有很多商品卡片，不應該每張都使用同一個 `id`。

```html
<article id="product-card">商品 A</article>
<article id="product-card">商品 B</article>
```

應改成：

```html
<article class="product-card">商品 A</article>
<article class="product-card">商品 B</article>
```

## 實務判斷

- 只有一個元素需要被唯一定位時，用 `id`。
- 多個元素需要共用樣式或行為時，用 `class`。
- 臨時、少量、動態的樣式，可以用 `style`；可維護的正式樣式，優先放在 CSS。

## 重點整理

- `id` 是唯一識別碼，同一文件中不應重複。
- `class` 是分類名稱，可以多個元素共用，也可以一個元素有多個 class。
- `style` 是行內 CSS，方便但不適合大量取代樣式表。
- 寫 HTML 時，先想清楚自己是在「唯一定位」「分類群組」還是「直接設定樣式」。

## 自我檢查

- 同一份 HTML 中，兩個元素可以使用同一個 `id` 嗎？
- 為什麼一個元素可以同時有多個 class？
- 如果很多按鈕都要套用同一套樣式，應該用 `class` 還是 `style`？
