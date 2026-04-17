# contextmenu 屬性

> 所屬章節：第五章｜全局屬性
> 關鍵字：`contextmenu`、右鍵選單、上下文選單、`<menu>`、`menuitem`、obsolete、舊規格、`contextmenu` 事件、HTML 全局屬性
> 建議回查情境：想知道 `contextmenu` 屬性原本是做什麼的、想分清它和 JavaScript `contextmenu` 事件的差別、想確認為什麼它不適合當成現代專案的主要方案、想知道舊教材中的 `<menu>` / `<menuitem>` 應該怎麼看

## 本節導讀

`contextmenu` 是一個很容易讓人學錯定位的屬性。

如果只看舊教材，你可能會以為它是：

> 「HTML 內建的右鍵選單做法」

這種理解不算完全錯，
但問題在於：**它比較屬於歷史設計知識，而不是今天做專案時應優先採用的主流方案。**

學這個屬性時，真正要搞懂的不是背語法，
而是分清下面三件事：

1. `contextmenu` 屬性原本想解決什麼問題
2. 它依賴的是哪一套舊語法設計
3. 為什麼今天做自訂右鍵選單，通常改用 JavaScript `contextmenu` 事件與自訂 UI

你可以先記一句最核心的話：

> `contextmenu` 屬性的重點，不在於學會怎麼寫舊語法，而在於知道它屬於舊路線；今天要做自訂右鍵選單，通常不會靠它。

---

## 你會在這篇學到什麼

* `contextmenu` 屬性原本是做什麼的
* 它和 `<menu>`、`<menuitem>` 的關係
* 為什麼這條做法比較適合當成歷史知識
* `contextmenu` 屬性和 JavaScript `contextmenu` 事件的差別
* 今天看到舊教材時，應該怎麼判斷它的定位
* 如果現代要做自訂右鍵選單，應該往哪個方向理解

---

## 30 秒複習入口

* `contextmenu` 屬性原本想把某個元素綁定到一份自訂上下文選單。
* 它通常會搭配 `<menu>` 與 `<menuitem>` 這套舊設計一起出現。
* 這套做法比較適合當成歷史語法知識，不適合直接當成現代專案答案。
* `contextmenu` 屬性不是 JavaScript 的 `contextmenu` 事件。
* 今天如果要做自訂右鍵選單，通常會改成：攔截 `contextmenu` 事件，然後自己渲染選單 UI。

---

## 速查區

### 核心概念

* `contextmenu` 屬性原本用來指定：

  * 某個元素在被做「上下文操作」時
  * 應該顯示哪一份選單
* 它建立的是：

  * **元素**
  * 和
  * **某份選單定義**
    之間的關聯

### 關鍵規則

* 它本身不直接定義選單內容
* 它通常把自己的值對應到某個 `<menu>` 的 `id`
* 這套做法常與 `<menu type="context">`、`<menuitem>` 一起出現
* 但這條路線 today 不應視為新專案的主流解法
* 若要做現代自訂右鍵選單，通常改用事件處理與自訂 UI

### 常見混淆點

* `contextmenu` 屬性 ≠ JavaScript `contextmenu` 事件
* `<menu>` 這個元素出現在教材中，不代表舊式右鍵選單機制仍值得直接採用
* 舊教材中的示例可能有教學價值，但那個價值主要是幫你理解歷史設計，不是叫你直接照抄到現代專案
* 「能寫出來」不等於「是今天推薦的做法」

### 一句話抓核心

* `contextmenu` 屬性要學的不是「怎麼背」，而是「怎麼判斷它是舊路線，不是現代主流方案」。

---

## 這篇在解決什麼問題？

有些舊教材會教你：

* 右鍵某個元素
* 跳出一份自訂操作選單
* 選單裡可能有複製、刪除、編輯等項目

`contextmenu` 屬性原本就是為這類需求設計的。

但你真正需要解決的問題不是：

> 這個語法怎麼寫？

而是：

> 這個東西今天到底是要拿來實作，還是拿來理解歷史設計？

所以這篇真正的目標是：

> 幫你把 `contextmenu` 放到正確的位置：
> 它是一段應該知道的 HTML 歷史知識，但通常不是現代專案的主要實作方式。

---

# 1. `contextmenu` 屬性原本是什麼？

`contextmenu` 屬性原本用來指定：

> 當使用者對某個元素開啟上下文選單時，應該對應到哪一份選單定義。

最直白的理解是：

* 某個元素被右鍵操作
* HTML 會根據 `contextmenu` 的值
* 找到對應的那份選單

所以它的重點不是「定義選單長怎樣」，
而是「把元素和某份選單連起來」。

---

# 2. 它原本依賴哪一套設計？

這個屬性通常不是單獨出現，
而是和一整套舊設計一起出現。

常見組合是：

* `<menu>`
* `id`
* `contextmenu="某個 id"`
* `<menuitem>`

你可以把這套模型理解成：

1. 先用 `<menu>` 宣告一份選單
2. 幫這份選單取一個 `id`
3. 再把某個元素的 `contextmenu` 指向那個 `id`
4. 選單內的項目則用 `<menuitem>` 描述

也就是說：

> `contextmenu` 本身只是連線，
> 真正的內容定義通常在那份 `<menu>` 裡。

---

# 3. 為什麼這個屬性今天不適合當主流方案？

因為它背後依賴的那套右鍵選單 HTML 路線，
更適合當成歷史設計理解，而不是現代專案的首選。

你學這個屬性時，要抓住一個很重要的觀念：

> 它不是完全沒知識價值，
> 但它的價值主要是幫你理解 HTML 曾經想用宣告式方式處理自訂右鍵選單。

換句話說：

* 它有歷史上的設計意圖
* 也能幫你看懂舊教材
* 但今天如果真的要做一個可控、可維護、自訂程度高的右鍵選單
* 通常不會再依賴這條 HTML 屬性路線

---

# 4. 它和 JavaScript 的 `contextmenu` 事件不是同一件事

這是最容易混掉的地方。

## `contextmenu` 屬性

* 是 HTML 屬性
* 原本想用宣告式方式把元素綁到一份上下文選單
* 它屬於舊式語法設計脈絡的一部分

## `contextmenu` 事件

* 是 JavaScript 事件
* 通常發生在使用者嘗試開啟右鍵選單時
* 現代自訂右鍵選單，常會攔截這個事件，再自己決定要顯示什麼 UI

你可以這樣記：

> `contextmenu` 屬性是在講「HTML 怎麼綁選單」
> `contextmenu` 事件是在講「JavaScript 怎麼接管右鍵互動」

這兩者名稱很像，
但它們不是同一層次的東西。

---

# 5. 怎麼判斷一份教材是在教舊路線，還是現代做法？

看到 `contextmenu` 主題時，可以用這個順序判斷：

1. 它是不是在講 `contextmenu="某個 id"`？
2. 它是不是搭配 `<menu type="context">`？
3. 它是不是用了 `<menuitem>`？
4. 如果是，那它大多在講舊式 HTML 路線
5. 如果它是在攔截 `contextmenu` 事件並自己畫選單 UI，才比較接近現代做法

你可以把它記成一句話：

> 有 `<menu type="context">` / `<menuitem>` 的教材，通常先把它當成歷史語法理解。

---

# 6. 例子 1：教材中的舊式寫法

```html
<body>
  <menu type="context" id="myContextMenu">
    <menuitem label="Item 1" onclick="alert('Clicked Item 1')"></menuitem>
    <menuitem label="Item 2" onclick="alert('Clicked Item 2')"></menuitem>
    <menuitem label="Item 3" onclick="alert('Clicked Item 3')"></menuitem>
  </menu>

  <p contextmenu="myContextMenu">右鍵單擊此文本顯示上下文菜單。</p>
</body>
```

## 這段在表達什麼？

這段範例真正想表達的是：

* `contextmenu="myContextMenu"` 的值
* 會對應到
* `id="myContextMenu"` 的那份選單

也就是說：

* `<p>` 是被操作的元素
* `<menu>` 是被綁定的選單
* `contextmenu` 負責把它們接起來

## 這段例子的正確學法

不要把它理解成：

> 「這就是今天做右鍵選單的標準答案」

比較好的理解方式是：

> 「這是舊式 HTML 曾經想怎麼處理自訂上下文選單的示意」

這樣你才不會把歷史語法誤當成現代主流方案。

---

# 7. 例子 2：今天比較常怎麼理解現代做法

```html
<div id="target">Right-click me</div>
<div id="custom-menu" hidden>
  <button>Item 1</button>
  <button>Item 2</button>
</div>

<script>
  const target = document.getElementById("target");
  const menu = document.getElementById("custom-menu");

  target.addEventListener("contextmenu", (event) => {
    event.preventDefault();
    menu.hidden = false;
    menu.style.left = `${event.clientX}px`;
    menu.style.top = `${event.clientY}px`;
  });
</script>
```

## 這段在表達什麼？

這段不是在重現舊 `contextmenu` 屬性，
而是在表達另一件事：

> 今天做自訂右鍵選單時，核心通常是攔截事件，再自己控制畫面。

它的思路是：

1. 使用者對目標元素觸發右鍵互動
2. JavaScript 監聽 `contextmenu` 事件
3. `preventDefault()` 阻止瀏覽器原本的右鍵選單
4. 再自己顯示自訂選單 UI

---

# 8. 這個現代例子真正要學的是什麼？

不是只學會 `addEventListener("contextmenu", ...)` 而已，
而是要理解整體思路變了。

舊路線比較像：

* HTML 宣告一份選單
* 用屬性綁上去

現代路線比較像：

* 偵測互動事件
* 攔截預設行為
* 用自己的 HTML/CSS/JS 畫出選單
* 自己管理顯示位置、開關、點擊外部關閉等細節

也就是說：

> 現代做法不是「HTML 幫你內建右鍵選單」，
> 而是「你用事件驅動方式，自己實作右鍵選單」。

---

# 9. 常見混淆點 / 易錯點

## 錯誤一：把 `contextmenu` 屬性和 `contextmenu` 事件當成同一件事

不對。

* 一個是 HTML 屬性
* 一個是 JavaScript 事件

它們雖然同名，但不屬於同一種機制。

---

## 錯誤二：看到 `<menu>` 就以為這代表舊式右鍵選單仍是主流方案

不對。

教材裡看到 `<menu>`、`menuitem`，
應先提高警覺：

> 這很可能是在講舊式設計，而不是現代推薦路線。

---

## 錯誤三：以為舊教材能跑，就等於適合新專案

不對。

能看懂、能理解，和適不適合拿來當新專案方案，是兩件不同的事。

---

## 錯誤四：以為今天做自訂右鍵選單，只要知道事件名稱就夠了

也不夠。

現代自訂右鍵選單通常還要自己處理：

* 顯示 / 隱藏
* 選單定位
* 點擊外部關閉
* 鍵盤操作
* 樣式與可用性
* 與預設瀏覽器選單的互動取捨

所以：

> `contextmenu` 事件只是入口，
> 不是整個功能已經完成。

---

# 10. 一句話總結

`contextmenu` 屬性的本質是：

> 一條舊式 HTML 上下文選單設計中的連結機制；
> 今天學它，重點是辨認它屬於歷史路線，而不是把它當成現代主流實作答案。

---

## 自測問題

1. `contextmenu` 屬性原本想解決什麼問題？
2. 為什麼它通常會和 `<menu>`、`<menuitem>` 一起出現？
3. `contextmenu` 屬性和 JavaScript `contextmenu` 事件有什麼差別？
4. 為什麼舊教材中的 `contextmenu` 例子比較適合當成歷史知識？
5. 如果今天要做自訂右鍵選單，核心思路通常是什麼？
6. 為什麼不能把「舊語法看得懂」直接等同於「現代專案就該這樣寫」？

---

## 快速記憶版

* `contextmenu` 屬性：舊式 HTML 綁定上下文選單的做法
* 常和 `<menu>`、`menuitem` 一起出現
* 重點是歷史定位，不是現代主流方案
* `contextmenu` 屬性 ≠ `contextmenu` 事件
* 現代做法通常是：監聽事件 + 阻止預設行為 + 自己渲染 UI
* 學這篇不是為了背舊語法，而是為了判斷技術定位

---

## 延伸閱讀

* `contenteditable` 屬性
* `id` 屬性
* JavaScript 事件模型
* 自訂選單 UI 設計
* 鍵盤可及性與互動元件設計

---