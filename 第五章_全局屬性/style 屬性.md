# style 屬性

> 所屬章節：第五章｜全局屬性
> 關鍵字：`style`、行內樣式、inline style、CSS、宣告、declaration block、樣式覆蓋、cascade、`!important`、繼承
> 建議回查情境：想確認 `style` 真正是做什麼的、想分清行內樣式和 `<style>` / 外部 CSS 的差別、想理解為什麼 `style` 常常會蓋過其他樣式設定

## 本節導讀

`style` 很容易被學成一句話：

> 「把 CSS 直接寫在元素上。」

這句話方向沒有錯，但還不夠精確。
更穩定的理解方式是：

> `style` 是 HTML 的全局屬性，用來在單一元素上直接寫 **inline style**；它承載的是一組 CSS 宣告，所以能直接影響這個元素的樣式。MDN 也明確把它定位為「包含要套用到元素的 CSS 樣式宣告」。 

但要注意，`style` 不等於整份 CSS，也不等於 `<style>` 標籤。
它解決的是：

> **這個元素現在要長什麼樣子。**

不是：

> **整個頁面有哪些樣式規則。**  

---

## 這篇在解決什麼問題

有時你不想另外寫 class，也不想再去外部樣式表補一條規則，只想直接對某個元素指定樣式。
`style` 就是在處理這件事：讓你把 CSS 宣告直接綁在這個元素身上。 

不過它雖然方便，卻也會帶來兩個常見後果：

* 它常常比一般 author stylesheet 規則更容易直接生效
* 大量使用時，樣式會分散在 HTML 中，維護成本會上升  

---

## 先講結論 / 核心理解

先記住這幾點：

* `style` 是 **HTML 全局屬性**。 
* 它放的是 **inline style**，也就是直接寫在元素上的 CSS 宣告。 
* `style` 屬性裡通常寫的是 **宣告集合**，例如 `color: red; font-size: 20px;`，而不是完整 CSS 規則。
* 一般的 inline style 在 CSS cascade 中，會優先於其他一般的 author stylesheet 宣告。
* 但它不是無敵：`!important`、使用者樣式、user-agent important 樣式，以及 transition，都可能改變最終結果。
* `style` 是直接寫在這個元素上，但某些屬性仍可能因 CSS **繼承** 影響後代元素。

---

## 1. `style` 是什麼

`style` 是 HTML 的全局屬性，用來在單一元素上指定 **行內樣式（inline style）**。MDN 對 inline styles 的說法很直接：它們是寫在 `style` attribute 中、影響單一 HTML 元素的 CSS 宣告。 

你可以把它理解成：

> **直接把這個元素的樣式結果寫在元素本身上。**

例如：

```html
<p style="color: red; font-weight: bold;">Hello</p>
```

這裡不是先替元素貼上 class，再讓外部 CSS 去決定樣式；而是直接在元素上寫出它要套用的 CSS 宣告。

---

## 2. `style` 裡寫的是什麼

這是很容易被忽略，但其實很重要的一點。

`style` 屬性裡寫的不是完整 CSS 規則，而是 **CSS 宣告集合**。
也就是說，它裡面通常放的是一組「屬性: 值」：

```html
<p style="color: red; text-align: center;"></p>
```

這裡的 `color: red;`、`text-align: center;` 都是 CSS 宣告。
你不能在 `style` 屬性裡再寫 selector，例如這樣就不對：

```html
<p style="p { color: red; }"></p>
```

因為 selector 和整個規則集屬於 `<style>` 或外部樣式表的語法層級，不是 `style` 屬性本身要承載的內容。

一句話記憶：

* `<style>`：拿來寫整段 CSS 規則
* `style` 屬性：拿來寫某個元素自己的 CSS 宣告  

---

## 3. 為什麼 `style` 常常會蓋過其他樣式

更準確的說法是：

> **一般的 inline style 會優先於其他一般的 author stylesheet 宣告。** 

這代表如果某個元素同時受到下面幾種來源影響：

* 外部 CSS 檔案
* `<style>` 裡的普通規則
* 元素本身的 `style` 屬性

那在都是一般宣告、都沒有 `!important` 的前提下，`style` 屬性中的值通常會贏。MDN 明確寫到：normal inline styles take precedence over any other normal author styles，不管 selector specificity 多高。

所以當你發現：

> 「明明有 class 樣式，為什麼沒生效？」

其中一個優先要檢查的點，就是這個元素是不是已經另外寫了 `style`。 

---

## 4. 但 `style` 不是無敵：`!important` 和 transition 仍可能改變結果

### 一般 inline style

像這樣：

```html
<p style="color: blue;"></p>
```

這種是 **normal inline style**。
它會贏過一般的 author stylesheet 規則。

### inline style 裡也可以寫 `!important`

像這樣：

```html
<p style="color: blue !important;"></p>
```

這種是 **inline important style**。
它會優先於其他 important author styles。

### 但還是有更高優先的情況

MDN 也明確指出：

* user 的 important styles
* user-agent 的 important styles
* transition 中的值

都可能覆蓋 inline important style。尤其 transition 在作用中時，優先級可以高於其他宣告。

所以最穩定的理解不是：

> `style` 一定蓋過所有樣式

而是：

> `style` 在一般情況下很強，但最終還是要放進 CSS cascade 裡一起看。 

---

## 5. `style` 只寫在當前元素上，但不代表影響永遠只停在當前元素

比較完整的理解是：

> `style` 是直接寫在這個元素身上，但某些 CSS 屬性會 **繼承** 給後代元素。 

例如：

```html
<div style="color: red;">
  <p>這段文字通常也會是紅色</p>
</div>
```

這不是因為 `style` 自己會自動「擴散」，而是因為 `color` 這個 CSS 屬性本來就會繼承。
所以更精準的說法是：

* `style` 是寫在當前元素上
* 但最終影響範圍，還要看你設定的 CSS 屬性是否可繼承 

---

## 6. 基本示例

```html
<body>
  <h1 style="color: blue; text-align: center;">This is a header</h1>
  <p style="color: red;">This is a paragraph.</p>
</body>
```

### 這段怎麼理解？

* `<h1>` 的 `style` 直接把文字顏色設成藍色，並把文字置中
* `<p>` 的 `style` 直接把文字顏色設成紅色
* 這裡最重要的不是語法多難，而是看懂：樣式是直接寫在元素上，不需要另外靠 class 或外部 CSS 才能生效  

---

## 7. `style` 和 `<style>`、`class` 怎麼分

### `style` 屬性

直接對這個元素寫 CSS 宣告。

### `<style>` 元素

在文件中寫一整段 CSS 規則，通常會包含 selector。MDN 對 `<style>` 的說明也是：它用來放文件的 style information，也就是 CSS。

### `class`

先替元素貼上分類標記，再由 CSS 規則決定這批元素長什麼樣子。

一句話分開：

* `style`：直接指定這個元素現在的樣子
* `class`：先標記元素，再交給 CSS 統一管理
* `<style>`：放整段 CSS 規則本體  

---

## 8. 什麼時候適合用 `style`

適合：

* 教學示例，想快速展示某個 CSS 效果
* 非常小、非常局部、只影響單一元素的樣式
* JavaScript 臨時動態修改某個元素的外觀。MDN 的 `HTMLElement.style` 也正是用來讀寫元素 inline style 的 API。 

不太適合：

* 大量重複樣式
* 團隊協作下需要長期維護的專案
* 一整批元件需要共用、可擴展、可替換的樣式系統。MDN 也建議：樣式應盡量寫在獨立檔案中，以取得最好的維護性與可重用性。

---

## 常見混淆點 / 易錯點

### 1. `style` 不是 `<style>`

前者是屬性，後者是元素；前者放單一元素的宣告，後者放整段 CSS 規則。 

### 2. `style` 不是外部樣式表

它只直接綁定在某個元素上，不是整份樣式管理方案。 

### 3. `style` 常常會蓋過一般樣式，但不是無敵

一般 inline style 會贏過一般 author stylesheet 規則；但 `!important`、user/user-agent important styles、transition 都可能影響最終結果。

### 4. `style` 裡不是寫 selector

它放的是 CSS 宣告，不是完整 CSS 規則。

### 5. `style` 雖然寫在元素上，但有些屬性會繼承

不要把「寫在當前元素上」誤解成「效果永遠只停在當前元素」。還要看屬性本身是否可繼承。

---

## 一句話抓核心

`style` 的重點不是只背「把 CSS 寫在元素上」，而是理解：

> 它是在單一元素上直接寫 **inline style**；這些宣告在一般情況下會比其他一般 author stylesheet 更直接生效，但最終結果仍要放進 CSS cascade、`!important`、transition 與繼承一起看。 

---