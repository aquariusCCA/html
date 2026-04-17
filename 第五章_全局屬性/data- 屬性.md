# data-* 屬性

> 所屬章節：第五章｜全局屬性
> 關鍵字：`data-*`、自定義資料屬性、custom data attributes、`dataset`、`DOMStringMap`、`data-foo-bar`、camelCase
> 建議回查情境：想知道 `data-*` 是做什麼的、想回查 JavaScript 怎麼讀寫 `data-*`、想分清 HTML 屬性名稱和 `dataset` 屬性名稱如何轉換、想知道 `data-*` 和 `id` / `class` 的差別

## 本節導讀

`data-*` 是一組 HTML 全局屬性，
它的作用是：**讓你可以把自定義資料附加在 HTML 元素上，之後再由 JavaScript 或 CSS 利用。**

它常見於前端互動中，因為有些資訊不是元素本身的結構，也不是樣式名稱，
但程式又需要知道，例如：

* 這個按鈕對應哪個商品 `id`
* 這個卡片目前屬於哪種狀態
* 這個項目對應哪個分類
* 這個元素要觸發哪一種行為

這時候，`data-*` 就很適合。

你可以先記一句最核心的話：

> `data-*` 不是拿來命名元素，也不是拿來套樣式；它是用來把「額外資料」附加在元素上，方便程式讀取與使用。

---

## 你會在這篇學到什麼

* `data-*` 屬性是在做什麼
* 它和 `id`、`class` 的差別
* `data-*` 的命名規則與實務建議
* JavaScript 如何透過 `dataset` 讀取與修改它
* `data-user-id` 為什麼會變成 `dataset.userId`
* 為什麼 `data-*` 不會自帶特定瀏覽器行為，但仍然很有用

---

## 30 秒複習入口

* `data-*` 是自定義資料屬性，用來把額外資訊附在 HTML 元素上。
* 這些資料通常不是直接顯示給使用者，而是給 JavaScript 或 CSS 使用。
* JavaScript 常透過 `element.dataset` 讀寫 `data-*`。
* `data-user-id` 進到 `dataset` 後，通常會變成 `dataset.userId`。
* `dataset` 讀到的值本質上都是字串。
* `data-*` 不是拿來取代 `id` 或 `class` 的。

---

## 速查區

### 核心概念

* `data-*` 讓 HTML 元素可以攜帶自定義資料。
* 這些資料通常是給程式邏輯使用，不是 HTML 內建語意的一部分。
* 它是一種標準做法，比亂發明非標準屬性更合適。

### 關鍵規則

* 屬性名稱必須以 `data-` 開頭。
* `data-` 後面要接你自定義的名稱，例如：

  * `data-user-id`
  * `data-role`
  * `data-status`
* 如果打算用 `dataset` 操作，建議採用：

  * **全小寫**
  * **單字之間用連字號 `-`**
* `data-user-id` 會對應到 `dataset.userId`
* `dataset` 裡的值會以**字串**形式存在

### 常見混淆點

* `data-*` 不是用來識別元素，那通常是 `id` 的工作
* `data-*` 不是用來分組元素，那通常是 `class` 的工作
* `data-*` 不會自動改變畫面，也不會自帶像 `href`、`checked` 那樣的瀏覽器行為
* `data-*` 不是沒作用，而是它的作用通常要靠 JavaScript 或 CSS 去利用

### 一句話對比

* `id` 解決的是「這個元素是誰」
* `class` 解決的是「這個元素屬於哪一類」
* `data-*` 解決的是「這個元素額外攜帶了哪些資料」

---

## 這篇在解決什麼問題？

在實際開發中，元素有時不只需要：

* 結構
* 樣式
* 內容

還需要附帶一些**程式邏輯會用到的資訊**。

例如：

```html
<button data-product-id="101">加入購物車</button>
```

這裡的 `101` 不是拿來顯示樣式，也不是元素名稱，
而是給 JavaScript 之後知道：

> 這顆按鈕對應的是商品 101。

所以你可以把 `data-*` 理解成：

> 幫元素附帶一份額外資料，讓程式之後能讀到並使用。

---

# 1. `data-*` 的作用是什麼？

`data-*` 用來把**自定義資料**嵌入 HTML 元素中。

例如：

```html
<div data-user-id="25"></div>
```

這表示這個 `<div>` 附帶了一個額外資料：

* 名稱：`user-id`
* 值：`25`

這類資料最常由 JavaScript 讀取，
也可以在某些情況下讓 CSS 利用。

## 最白話的理解

你可以把它想成：

* 這個元素除了本來的內容與樣式之外
* 還偷偷帶著一份給程式看的備註資料

---

# 2. `data-*` 和 `id`、`class` 有什麼不同？

這三者很容易被混在一起，但用途其實不同。

## `id`

* 用來唯一識別某個元素
* 偏「這個元素是誰」

## `class`

* 用來分組元素
* 偏「這些元素屬於哪一類」

## `data-*`

* 用來附加額外資料
* 偏「這個元素還攜帶了什麼資訊」

### 範例

```html
<li id="item-1" class="product-card" data-product-id="101" data-category="book">
  Java 書籍
</li>
```

這段可以這樣理解：

* `id="item-1"`：這個元素的唯一識別名稱
* `class="product-card"`：它屬於商品卡片這一類
* `data-product-id="101"`：它攜帶商品編號 101
* `data-category="book"`：它攜帶分類資訊 book

所以：

> `id`、`class`、`data-*` 可以同時出現，因為它們解決的是不同問題。

---

# 3. 命名規則怎麼看？

`data-*` 的基本形式是：

```html
<element data-名稱="值">
```

例如：

```html
<div data-user-id="25"></div>
<div data-role="admin"></div>
<div data-item-status="active"></div>
```

## 實務上建議怎麼命名？

如果你打算透過 `dataset` 操作，
最穩定、最好讀的寫法通常是：

* 全小寫
* 單字之間用 `-` 分隔

例如：

* `data-user-id`
* `data-item-status`
* `data-animal-type`

這樣之後轉成 JavaScript 屬性時會最自然。

---

# 4. JavaScript 怎麼讀取 `data-*`？

最常見的方式是使用：

```js
element.dataset
```

`dataset` 會提供這個元素所有對應的 `data-*` 資料。
你可以先把它想成：

> 一個專門存放這個元素 `data-*` 資料的物件樣介面。

---

## 例子 1：讀取資料

### HTML

```html
<li class="animal" data-animal-type="bird">喜鵲</li>
```

### JavaScript

```js
const animal = document.querySelector(".animal");
console.log(animal.dataset.animalType);
```

### 這段怎麼理解？

HTML 裡是：

```html
data-animal-type="bird"
```

JavaScript 裡會變成：

```js
animal.dataset.animalType
```

讀到的值是：

```js
"bird"
```

---

## 例子 2：讀取多個元素的資料

### HTML

```html
<ul>
  <li class="animal" data-animal-type="bird">喜鵲</li>
  <li class="animal" data-animal-type="fish">金槍魚</li>
  <li class="animal" data-animal-type="spider">蠅虎</li>
</ul>
```

### JavaScript

```js
const elements = document.querySelectorAll(".animal");

for (const element of elements) {
  console.log(element.dataset.animalType);
}
```

### 這段在說什麼？

每個 `.animal` 元素都各自攜帶一個 `data-animal-type`，
JavaScript 可以逐一讀出來。

---

# 5. JavaScript 怎麼修改 `data-*`？

有兩種常見方式：

## 方式一：用 `dataset`

```js
const apple = document.getElementById("apple");
apple.dataset.foodType = "fruit";
```

這樣會對應成：

```html
data-food-type="fruit"
```

---

## 方式二：用 `setAttribute()`

```js
const apple = document.getElementById("apple");
apple.setAttribute("data-food-type", "fruit");
```

這也會新增：

```html
data-food-type="fruit"
```

---

## 哪個比較常用？

如果你操作的就是 `data-*`，
通常直接用 `dataset` 會更直觀。

因為它能讓你直接以 JavaScript 屬性的方式存取：

```js
element.dataset.userId
element.dataset.userId = "25"
```

---

# 6. `data-foo-bar` 為什麼會變成 `dataset.fooBar`？

這是 `data-*` 最常讓人卡住的地方。

## 基本規則

當你用 `dataset` 存取時：

1. 先移除前綴 `data-`
2. 再把後面的 kebab-case 轉成 camelCase

---

## 範例對照

* `data-test` → `dataset.test`
* `data-user-id` → `dataset.userId`
* `data-animal-type` → `dataset.animalType`
* `data-item-status` → `dataset.itemStatus`

所以：

```html
<div data-user-id="25"></div>
```

會對應成：

```js
element.dataset.userId
```

---

## 為什麼要這樣記？

因為 HTML 屬性常用連字號寫法：

```html
data-user-id
```

但 JavaScript 屬性名稱更常用 camelCase：

```js
userId
```

所以 `dataset` 幫你做了這層轉換。

---

# 7. `dataset` 裡的值要注意什麼？

很重要的一點是：

> `dataset` 讀到的值，本質上都是字串。

例如：

```html
<div data-count="5" data-enabled="true"></div>
```

JavaScript 讀取時：

```js
const box = document.querySelector("div");

console.log(box.dataset.count);   // "5"
console.log(box.dataset.enabled); // "true"
```

注意這裡不是：

* 數字 `5`
* 布林值 `true`

而是：

* 字串 `"5"`
* 字串 `"true"`

所以如果你要拿來做數字運算或布林判斷，
通常還要自己轉型。

例如：

```js
const count = Number(box.dataset.count);
const enabled = box.dataset.enabled === "true";
```

---

# 8. `data-*` 會被「忽略」是什麼意思？

有些教材會說：

> `data-*` 會被瀏覽器忽略

這句話容易讓人誤解成：

> 那它是不是沒作用？

其實不是。

更精確的理解是：

* 瀏覽器不會像處理 `href`、`src`、`checked`、`disabled` 那樣，
  自動賦予它特殊互動或行為
* 但它仍然會保留在 DOM 中
* JavaScript 可以讀它
* CSS 也可以利用它

所以它不是「沒作用」，而是：

> 它本身不自帶特定行為，但很適合拿來存放自定義資料。

---

# 9. CSS 也能怎麼利用 `data-*`？

雖然 `data-*` 最常給 JavaScript 用，
但 CSS 也能在某些情況下利用它。

## 方式一：屬性選擇器

```html
<div data-status="active">啟用中</div>
<div data-status="inactive">未啟用</div>
```

```css
[data-status="active"] {
  border: 1px solid green;
}
```

這表示：

* 只選取 `data-status="active"` 的元素

---

## 方式二：`attr()` 顯示資料

```html
<div data-label="NEW"></div>
```

```css
div::before {
  content: attr(data-label);
}
```

這樣可以把 `data-label` 的值顯示出來。

不過要記得：

> `data-*` 的主要用途通常還是提供額外資料給程式使用，
> 不是專門拿來當畫面內容來源。

---

# 10. `DOMStringMap` 是什麼？

你在文件裡常會看到 `dataset` 和 `DOMStringMap` 這個名詞一起出現。

學習筆記層次可以先這樣理解：

> `element.dataset` 不是普通隨便命名的東西，
> 它是一個專門對應 `data-*` 屬性的資料集合介面。

你不一定要先背 `DOMStringMap` 這個名字，
但要知道：

* `dataset` 是一組和 `data-*` 對應的資料集合
* 裡面的值會以字串形式存在
* 它讓你能用比較自然的 JavaScript 屬性方式操作 `data-*`

---

# 11. 常見混淆點 / 易錯點

## 錯誤一：把 `data-*` 當成 `id` 或 `class` 用

不對。

* `id` 是識別元素
* `class` 是分組元素
* `data-*` 是附加資料

---

## 錯誤二：以為 `data-*` 沒有任何作用

不對。

它沒有內建互動行為，
但仍然可以被 JavaScript 與 CSS 利用。

---

## 錯誤三：以為 `dataset` 讀到的是原本的型別

不對。

`dataset` 讀到的資料預設都是字串。

---

## 錯誤四：搞混 HTML 名稱和 JavaScript 名稱

例如：

```html
data-user-id
```

對應的不是：

```js
dataset.user-id
```

而是：

```js
dataset.userId
```

這是因為 `dataset` 會把 kebab-case 轉成 camelCase。

---

# 12. 一個完整的小例子

## HTML

```html
<ul>
  <li class="product" data-product-id="101" data-category="book">Java 書籍</li>
  <li class="product" data-product-id="102" data-category="tool">IDE 工具</li>
</ul>
```

## JavaScript

```js
const products = document.querySelectorAll(".product");

for (const product of products) {
  console.log(product.dataset.productId);
  console.log(product.dataset.category);
}
```

## 這個例子在說什麼？

* 每個 `.product` 元素都附帶額外資料
* `data-product-id` 對應到 `dataset.productId`
* `data-category` 對應到 `dataset.category`
* 這些資訊可讓 JavaScript 知道每個元素對應什麼資料，而不用把它硬塞進 class 或文字內容裡

---

# 13. 一句話總結

`data-*` 的本質是：

> 讓 HTML 元素攜帶自定義資料，方便 JavaScript 或 CSS 讀取與利用，而不必濫用 `id`、`class` 或非標準屬性。

---

## 自測問題

1. `data-*` 屬性主要在解決什麼問題？
2. `data-user-id` 為什麼會對應到 `dataset.userId`？
3. `data-*` 和 `id`、`class` 在用途上有什麼不同？
4. 為什麼說 `data-*` 不會自帶特定行為，但仍然很有用？
5. 為什麼 `dataset.count` 讀到的通常是字串而不是數字？
6. 什麼情況下你會選擇用 `dataset`，而不是 `id` 或 `class`？

---

## 快速記憶版

* `data-*` = 自定義資料屬性
* 用來附加額外資料，不是拿來識別或分組
* JavaScript 常用 `element.dataset` 操作
* `data-user-id` → `dataset.userId`
* `dataset` 裡的值預設都是字串
* CSS 也可用屬性選擇器或 `attr()` 利用它
* `id` 是誰、`class` 是哪類、`data-*` 是附帶什麼資料

---

## 延伸閱讀

* `id` 屬性
* `class` 屬性
* `dataset`
* `getAttribute()` / `setAttribute()`
* CSS 屬性選擇器
* `attr()`

---