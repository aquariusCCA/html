# class 屬性

> 所屬章節：第五章｜全局屬性
> 關鍵字：`class`、類名、類選擇器、CSS class、HTML DOM、JavaScript、全局屬性、多個類名
> 建議回查情境：想知道 `class` 是做什麼的、想確認 `class` 怎麼寫、想知道一個元素能不能有多個 class、想分清 `class` 和 `id` 的差別、想知道 `class` 在 CSS 和 JavaScript 中怎麼用

## 本節導讀

`class` 是 HTML 很重要的全局屬性之一。
它的作用不是「直接改變樣式」，而是**幫元素貼上一個可重複使用的名稱標記**。

這個標記最常拿來做兩件事：

1. 讓 CSS 選到某一類元素並套用樣式
2. 讓 JavaScript 更方便找到、修改或切換元素狀態

你可以先記一句最核心的話：

> `class` 不是樣式本身，`class` 是給 CSS 和 JavaScript 使用的類名標記。

---

## 你會在這篇學到什麼

* `class` 屬性是做什麼的
* `class` 的基本語法
* 一個元素如何同時擁有多個 class
* `class` 在 CSS 與 JavaScript 中的常見用途
* `class` 和 `id` 的差別
* 初學者最常搞混的地方

---

## 30 秒複習入口

* `class` 用來幫元素設定類名。
* `class` 最常用在 CSS 選取元素，也常用在 JavaScript 操作元素。
* 一個元素可以同時有多個 class，類名之間用空格分隔。
* 同一個 class 可以重複給很多元素使用。
* `class` 本身不是樣式，它只是讓樣式和程式更容易找到元素。

---

## 速查區

### 核心概念

* `class` 是替元素加上一個或多個類名。
* 類名本身不會直接產生畫面效果。
* 真正產生效果的，通常是：

  * CSS 根據類名套用樣式
  * JavaScript 根據類名操作元素

### 關鍵規則

* 基本語法：`<元素 class="類名">`
* 一個元素可以有多個 class：`class="a b c"`
* 多個 class 之間用**空格**分隔
* 同一個 class 可以被很多元素共用
* `class` 是全局屬性，幾乎所有常見 HTML 元素都能使用

### 常見混淆點

* `class` 不是樣式本身
* `class` 不是只能有一個
* `class` 可以重複使用，不像 `id` 通常只用在單一元素
* `class="box active"` 代表一個元素同時擁有 `box` 和 `active` 兩個類名，不是一個完整的新名字

---

## 這篇在解決什麼問題？

在實際開發中，我們常常會遇到這些需求：

* 想讓多個元素共用同一組樣式
* 想讓某些元素被 JavaScript 一次找到
* 想把元素的狀態拆成可組合的標記，例如 `card`、`active`、`disabled`

這時候就需要 `class`。

所以你可以把 `class` 理解成：

> 幫元素分類、命名，讓 CSS 和 JavaScript 可以更方便地重複使用與操作。

---

# 1. `class` 屬性是什麼？

`class` 屬性用來定義元素的類名。

這個類名最常有兩種用途：

* 給 CSS 選到元素並套用樣式
* 給 JavaScript 找到元素並進行操作

例如：

```html
<p class="note">這是一段提示文字</p>
```

這裡的 `note` 就是這個 `<p>` 元素的類名。

你可以把它想成是：

* 幫這個元素貼上一張標籤
* 標籤名字叫做 `note`

之後 CSS 或 JavaScript 就可以根據這個標籤找到它。

---

# 2. 基本語法

```html
<element class="class-name">
```

例如：

```html
<p class="note">這是一段提示文字</p>
```

### 這段怎麼理解？

* `p` 是元素
* `class` 是屬性名稱
* `note` 是你幫這個元素取的類名

也就是說：

> `class="note"` 的意思是：這個元素屬於 `note` 這一類。

---

# 3. `class` 最常用在哪裡？

## 用途一：給 CSS 套樣式

CSS 可以透過類名選到元素。

### HTML

```html
<h1 class="title">網站標題</h1>
<p class="note">這是一段提示文字</p>
```

### CSS

```css
.title {
  color: blue;
}

.note {
  color: green;
}
```

### 這個例子在說什麼？

* `.title` 會選到 `class="title"` 的元素
* `.note` 會選到 `class="note"` 的元素

注意：

* CSS 裡的 `.title` 前面有一個點 `.`
* 這個點代表「選取 class 名叫做 `title` 的元素」

---

## 用途二：給 JavaScript 操作元素

JavaScript 也常透過 `class` 找元素或切換狀態。

### HTML

```html
<button class="btn">送出</button>
```

### JavaScript

```js
const button = document.querySelector(".btn");
console.log(button);
```

這段程式會找到第一個 `class="btn"` 的元素。

再例如：

```html
<div class="box"></div>
```

```js
const box = document.querySelector(".box");
box.classList.add("active");
```

這段程式的意思是：

* 先找到 `class="box"` 的元素
* 再幫它加上一個新的類名 `active`

這種做法很常用在：

* 開關選單
* 顯示 / 隱藏元素
* 切換高亮狀態
* 按鈕按下後改變外觀

---

# 4. 一個元素可以有多個 class

可以，而且這是非常常見的寫法。

```html
<h1 class="title important">網站標題</h1>
```

這代表這個 `<h1>` 同時有兩個類名：

* `title`
* `important`

它不是一個叫做 `title important` 的大名字，
而是兩個獨立的 class。

### CSS

```css
.title {
  color: blue;
  text-align: center;
}

.important {
  background-color: yellow;
}
```

### 套用後會發生什麼？

這個 `<h1>` 會同時符合：

* `.title`
* `.important`

所以它會同時拿到兩組樣式。

---

## 為什麼多個 class 很重要？

因為它能把樣式拆成可重複組合的小模組。

例如：

```html
<button class="btn primary large">儲存</button>
```

這裡可能代表：

* `btn`：按鈕的基本樣式
* `primary`：主要按鈕的樣式
* `large`：大尺寸樣式

這樣你就不用為每一種組合都重新取一個新名字。

---

# 5. `class` 和 `id` 有什麼差別？

這是初學者很常混淆的地方。

## `class`

* 用來做「分類」
* 可以重複使用
* 一個元素可以同時有很多個 class
* 適合拿來套共用樣式、狀態樣式、JS 批次操作

## `id`

* 用來做「唯一識別」
* 通常一個頁面內不應重複
* 一個元素通常只會有一個 `id`
* 適合標記某個特定、唯一的元素

### 範例

```html
<h1 id="main-title">網站主標題</h1>

<p class="note">提示一</p>
<p class="note">提示二</p>
<p class="note">提示三</p>
```

### 這個例子在說什麼？

* `id="main-title"` 表示這個標記通常是唯一的
* `class="note"` 可以重複用在很多元素上

所以：

> `id` 比較像身份證號碼，`class` 比較像分類標籤。

---

# 6. `class` 的命名觀念

`class` 的名字是你自己取的，但最好取有意義的名稱。

例如：

* `title`
* `note`
* `card`
* `active`
* `disabled`
* `menu-item`

這樣未來你在看 HTML、CSS、JavaScript 時，會比較容易理解用途。

## 實務上建議

* 名稱要有語意，不要亂取
* 多個單字時，常見寫法是用連字號 `-`
* 例如：

  * `main-title`
  * `user-card`
  * `menu-item`

## 要注意的事

`class` 屬性值裡的空格，是用來分隔多個 class 的。

例如：

```html
<div class="user card"></div>
```

這代表有兩個 class：

* `user`
* `card`

不是一個叫做 `user card` 的類名。

---

# 7. `class` 的適用範圍

在 HTML5 中，`class` 是全局屬性，
也就是說它可以寫在絕大多數常見的 HTML 元素上。

例如：

```html
<div class="box"></div>
<p class="note"></p>
<button class="btn"></button>
<input class="input-field">
```

不過要注意：

> 能寫，不代表一定有意義。
> 還是要看你是否真的需要讓 CSS 或 JavaScript 用這個類名來操作它。

---

# 8. 最常見的錯誤理解

## 錯誤一：以為 `class` 本身會改樣式

不會。

```html
<p class="red-text">文字</p>
```

只有這樣寫，畫面不會自己變紅。
你還需要 CSS：

```css
.red-text {
  color: red;
}
```

---

## 錯誤二：以為一個元素只能有一個 class

不對。

```html
<div class="card active"></div>
```

這是合法而且很常見的寫法。

---

## 錯誤三：把多個 class 當成一個名字

```html
<div class="card active"></div>
```

這不是一個叫做 `card active` 的類名，
而是兩個類名：

* `card`
* `active`

---

## 錯誤四：把 `class` 和 `id` 當成一樣的東西

它們都能標記元素，但目的不一樣：

* `class`：分類、可重複
* `id`：唯一識別、通常不重複

---

# 9. 一個完整的小例子

## HTML

```html
<h1 class="title">我的網站</h1>
<p class="note">歡迎來到這個頁面</p>
<button class="btn primary">送出</button>
```

## CSS

```css
.title {
  color: blue;
}

.note {
  color: green;
}

.btn {
  padding: 8px 16px;
}

.primary {
  background-color: royalblue;
  color: white;
}
```

## 這個例子在說什麼？

* `title` 讓 CSS 可以把標題變成藍色
* `note` 讓 CSS 可以把提示文字變成綠色
* `btn` 是按鈕的基本樣式
* `primary` 是額外疊加的主要按鈕樣式
* `class` 的價值就在於：可以重複、可以組合、可以讓 CSS 和 JS 更容易操作元素

---

# 10. 一句話總結

`class` 的本質是：

> 幫元素加上一個可重複使用的分類標記，讓 CSS 能套樣式、讓 JavaScript 能操作元素。

---

## 自測問題

1. `class` 屬性本身會直接改變樣式嗎？
2. 為什麼說 `class` 適合拿來做分類，而不是做唯一識別？
3. `class="card active"` 代表幾個 class？
4. `class` 和 `id` 最大的差別是什麼？
5. JavaScript 為什麼常透過 `class` 找元素？

---

## 快速記憶版

* `class` = 類名標記
* 不是樣式本身
* 給 CSS 和 JavaScript 使用
* 可重複使用
* 可同時有多個 class
* 多個 class 用空格分隔
* `class` 偏分類，`id` 偏唯一

---

## 延伸閱讀

* `id` 屬性
* `style` 屬性
* CSS 類選擇器 `.className`
* JavaScript 的 `classList`
* `document.querySelector()`

---