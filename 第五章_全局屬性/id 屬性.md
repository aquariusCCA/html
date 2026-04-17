# id 屬性

> 所屬章節：第五章｜全局屬性
> 關鍵字：`id`、唯一識別、unique identifier、CSS 選擇器、JavaScript 選取、片段連結、fragment、錨點跳轉
> 建議回查情境：想知道 `id` 是做什麼的、想分清 `id` 和 `class` 的差別、想知道為什麼同一頁面的 `id` 應該唯一、想知道 `id` 在 CSS、JavaScript、頁面跳轉中怎麼用

## 本節導讀

`id` 是 HTML 的全局屬性之一。
它最核心的作用，是**替某個元素指定一個在目前頁面中應保持唯一的名稱**。

這個名稱的價值，不是在畫面上直接產生效果，而是讓其他技術可以**精準定位這個元素**。
最常見的使用情境有三種：

1. 用 CSS 精準選到某個元素
2. 用 JavaScript 取得某個特定元素
3. 讓連結跳到頁面中的某個位置

你可以先記一句最核心的話：

> `id` 是用來標記「這個元素是誰」，不是用來表示「這個元素屬於哪一類」。

---

## 你會在這篇學到什麼

* `id` 屬性是什麼
* 為什麼 `id` 應該唯一
* `id` 的基本寫法
* `id` 在 CSS、JavaScript、片段連結中的用途
* `id` 和 `class` 的差別
* 初學者最常誤解的地方

---

## 30 秒複習入口

* `id` 用來唯一識別一個元素。
* 同一份 HTML 文件中，`id` 應該避免重複。
* 一個元素只能有一個 `id` 值。
* `id` 常被 CSS、JavaScript、頁面片段連結拿來定位元素。
* `id` 偏向精準點名某一個元素，`class` 偏向分組與重複使用。

---

## 速查區

### 核心概念

* `id` 是替元素加上一個識別名稱。
* 這個名稱的重點是「精準定位」。
* 在同一頁面中，這個名稱應該具有唯一性。

### 關鍵規則

* 基本語法：`<元素 id="名稱">`
* 一個元素只能有一個 `id`
* 同一份 HTML 文件中，不應該有兩個元素使用同一個 `id`
* CSS 可用 `#id名稱` 選到它
* JavaScript 可用 `document.getElementById()` 找到它
* 連結可用 `href="#id名稱"` 跳到它

### 常見用途

* 精準設定某個單一元素的樣式
* 精準取得某個元素並操作
* 作為頁面中的跳轉目標

### 常見混淆點

* `id` 不是分類標籤，那是 `class` 比較常做的事
* `id` 不是越多越好，通常只在真的需要唯一定位時才使用
* `id` 就算重複寫了，瀏覽器可能還是能解析，但實務上會造成混亂
* `id` 和 `class` 都能標記元素，但用途不同

### 一句話對比

* `id` 像身分證號碼，`class` 像群組標籤。

---

## 這篇在解決什麼問題？

當頁面上有很多元素時，我們有時不是想找「某一類元素」，而是想找「這一個特定元素」。

例如：

* 只改某一個標題的樣式
* 只取得某一個輸入框的值
* 點連結時跳到某一段內容

這時候就需要 `id`。

所以你可以把 `id` 理解成：

> 幫元素取一個專屬名稱，讓 CSS、JavaScript 或連結能精準指向它。

---

# 1. `id` 是什麼？

`id` 屬性用來指定 HTML 元素的識別名稱。
這個名稱在同一份 HTML 文件中，**應該保持唯一**。

例如：

```html
<h1 id="main-title">網站首頁</h1>
```

這裡的 `main-title` 就是這個 `<h1>` 的 `id`。

你可以把它理解成：

* 幫這個元素取名字
* 而且這個名字在同一頁裡，最好只有它能用

也就是說：

> `id="main-title"` 的意思是：這個元素在本頁面中有一個專屬識別名稱叫做 `main-title`。

---

# 2. 為什麼 `id` 要唯一？

因為 `id` 的目的是讓程式或連結可以**精準找到某一個元素**。

如果同一頁面中有兩個元素都叫做 `main-title`，就會出現問題：

* CSS 雖然可能還是會套用
* JavaScript 可能只拿到其中一個
* 錨點跳轉的結果也可能不如預期
* 之後維護程式的人會很難判斷你真正要指的是哪一個元素

所以實務上要記住：

> `id` 的價值就在於唯一；一旦重複，它的意義就被削弱了。

## 補充理解

要特別注意一點：

* 「應該唯一」是實務規則，也是標準希望你遵守的做法
* 不是說你一重複寫，頁面就一定完全壞掉
* 而是它會讓定位與維護變得混亂，因此**不應這樣做**

---

# 3. 基本語法

```html
<element id="unique-name">
```

例如：

```html
<p id="user-name">王小明</p>
```

### 這段怎麼理解？

* `p` 是元素
* `id` 是屬性名稱
* `user-name` 是這個元素的唯一識別名稱

之後如果你想精準選到這個段落，就可以透過 `user-name` 來定位它。

---

# 4. `id` 最常用在哪裡？

## 用途一：給 CSS 精準套樣式

### HTML

```html
<h1 id="main-title">網站首頁</h1>
```

### CSS

```css
#main-title {
  color: steelblue;
}
```

### 這個例子在說什麼？

* `#main-title` 的意思是：選取 `id="main-title"` 的元素
* `#` 在 CSS 裡代表 `id` 選擇器
* 因為 `id` 預期是唯一的，所以這種寫法通常用在單一元素

---

## 用途二：給 JavaScript 取得特定元素

### HTML

```html
<p id="message">原本內容</p>
```

### JavaScript

```js
const message = document.getElementById("message");
message.textContent = "內容已更新";
```

### 這個例子在說什麼？

* `document.getElementById("message")` 會找到 `id="message"` 的元素
* 找到之後，就可以進一步修改內容、樣式、事件等

這也是 `id` 在 JavaScript 裡最常見的用途之一。

---

## 用途三：作為頁面跳轉目標

這是很多人第一次學 `id` 時容易忽略，但很實用的功能。

### HTML

```html
<a href="#contact">前往聯絡資訊</a>

<section id="contact">
  <h2>聯絡資訊</h2>
  <p>email@example.com</p>
</section>
```

### 這個例子在說什麼？

* `href="#contact"` 表示跳到 `id="contact"` 的元素
* 點擊連結後，瀏覽器會移動到對應區塊

這種做法常用在：

* 頁面目錄
* 返回某段內容
* 單頁式網站導覽
* 常見問題 FAQ 跳轉

---

# 5. `id` 和 `class` 怎麼分？

這是最常見的混淆點之一。

## `id`

* 用來唯一識別某個元素
* 同一頁中不應重複
* 適合拿來精準定位單一元素

## `class`

* 用來表示某一類元素
* 可以重複使用在很多元素上
* 適合共用樣式、共用狀態、批次操作

### 範例

```html
<h1 id="main-title">網站主標題</h1>

<p class="note">提示一</p>
<p class="note">提示二</p>
<p class="note">提示三</p>
```

### 這個例子在說什麼？

* `main-title` 是一個特定元素的專屬名稱
* `note` 是一組元素共同的分類標記

所以你可以這樣記：

> `id` 是「這個元素是誰」
> `class` 是「這個元素屬於哪一類」

---

# 6. `id` 的命名觀念

`id` 的名字是你自己取的，但最好取有意義、可讀性高的名稱。

例如：

* `main-title`
* `login-form`
* `user-name`
* `contact`
* `footer-nav`

這樣未來你在 HTML、CSS、JavaScript 中看到它時，比較容易理解用途。

## 實務建議

* 名稱要有語意
* 多個單字時，常用連字號 `-`
* 避免取太模糊的名字，例如：

  * `a`
  * `box1`
  * `temp`

因為這些名字在稍大一點的專案裡很難維護。

---

# 7. `id` 的適用範圍

`id` 是 HTML 的全局屬性，
也就是說它可以寫在大多數常見元素上。

例如：

```html
<div id="app"></div>
<input id="email">
<section id="about"></section>
<button id="submit-btn">送出</button>
```

但要記住：

> 可以寫，不代表一定要寫。
> 只有在你真的需要唯一定位這個元素時，才使用 `id`。

---

# 8. 最常見的錯誤理解

## 錯誤一：把 `id` 當成 `class` 在用

錯誤示例：

```html
<p id="note">提示一</p>
<p id="note">提示二</p>
<p id="note">提示三</p>
```

這樣不適合，因為三個元素用了同一個 `id`。

比較正確的做法是：

```html
<p class="note">提示一</p>
<p class="note">提示二</p>
<p class="note">提示三</p>
```

因為這三個段落是同一類，而不是同一個元素。

---

## 錯誤二：以為 `id` 重複也沒關係

雖然頁面有時看起來還能運作，但這會造成：

* 選取不精準
* 維護困難
* 程式意圖不明

所以不要因為「看起來還能跑」就覺得是正確寫法。

---

## 錯誤三：以為 `id` 本身會產生樣式或功能

不會。

```html
<h1 id="main-title">首頁</h1>
```

只有這樣寫，不會自動改變外觀。
你還需要 CSS 或 JavaScript 來利用這個 `id`。

---

## 錯誤四：把 `id` 和 `name`、`class` 混在一起理解

它們都能放在元素上，但用途不同：

* `id`：唯一識別
* `class`：分類
* `name`：常見於表單欄位提交資料時的名稱

學習時最好把它們分開理解。

---

# 9. 一個完整的小例子

## HTML

```html
<a href="#profile">跳到個人資料</a>

<h1 id="main-title">會員中心</h1>

<section id="profile">
  <p id="user-name">王小明</p>
  <button id="edit-btn">修改名稱</button>
</section>
```

## CSS

```css
#main-title {
  color: steelblue;
}

#user-name {
  font-weight: bold;
}
```

## JavaScript

```js
const button = document.getElementById("edit-btn");
const userName = document.getElementById("user-name");

button.addEventListener("click", function () {
  userName.textContent = "李小華";
});
```

## 這個例子在說什麼？

* `#main-title` 用來設定單一標題樣式
* `getElementById("edit-btn")` 用來取得按鈕
* `getElementById("user-name")` 用來取得要被修改的文字
* `href="#profile"` 用來跳到 `id="profile"` 的區塊

這剛好展示了 `id` 的三大常見用途：

1. CSS 精準選取
2. JavaScript 精準操作
3. 頁面內跳轉

---

# 10. 一句話總結

`id` 的本質是：

> 幫某個元素指定一個在目前頁面中應保持唯一的名稱，讓 CSS、JavaScript 或連結能精準指向它。

---

## 自測問題

1. `id` 屬性的核心作用是什麼？
2. 為什麼同一頁面中的 `id` 應該唯一？
3. `id` 和 `class` 在用途上有什麼差別？
4. CSS 裡如何選取 `id="main-title"` 的元素？
5. `href="#contact"` 會跳到哪裡？
6. 為什麼不應該把同一個 `id` 重複用在多個元素上？

---

## 快速記憶版

* `id` = 唯一識別名稱
* 同一頁面中應避免重複
* 一個元素只能有一個 `id`
* CSS 用 `#id名稱`
* JavaScript 用 `getElementById()`
* 連結可用 `href="#id名稱"` 跳轉
* `id` 偏單一元素，`class` 偏群組分類

---

## 延伸閱讀

* `class` 屬性
* `style` 屬性
* CSS 的 `#id` 選擇器
* `document.getElementById()`
* 頁面片段連結與錨點跳轉

---