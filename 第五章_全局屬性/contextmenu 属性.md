# contextmenu 屬性

> 所屬章節：第五章｜全局屬性  
> 關鍵字：`contextmenu`、右鍵選單、上下文選單、`<menu>`、`menuitem`、舊規格、obsolete、`contextmenu` 事件、全局屬性  
> 建議回查情境：想知道 `contextmenu` 屬性原本在做什麼、想分清它和 JavaScript `contextmenu` 事件的差別、想確認為什麼它不適合當成現代主流做法

## 本節導讀

這篇重構的重點，不是把 `contextmenu` 寫得更漂亮，而是把它的定位講清楚。  
原始教材常把它當成「做右鍵選單的 HTML 屬性」，這在歷史脈絡上沒錯，但如果不補上規格現況，讀者很容易誤以為這是今天仍可直接採用的主流方案。

現在比較穩定的理解方式是：

- `contextmenu` 屬性原本想把元素和自訂上下文選單綁在一起。
- 這套做法依賴舊的 `<menu type="context">` / `<menuitem>` 路線。
- WHATWG 現行 HTML Standard 已把 `contextmenu` 屬性列為 obsolete attribute，也把 `menuitem` 列為 obsolete element。
- 如果今天要做自訂右鍵選單，主流做法是處理 JavaScript `contextmenu` 事件，再自己渲染 UI。

## 這篇在解決什麼問題

- 有些舊教材會示範：右鍵點擊元素時，跳出一組自訂操作選單。
- `contextmenu` 屬性原本就是為這件事設計的，目的是讓某個元素對應到一份上下文選單定義。
- 但學這篇時真正需要解決的問題不是「怎麼背語法」，而是「怎麼判斷這是歷史語法，還是今天仍應使用的方案」。

## 先講結論 / 核心理解

先記住一件事：`contextmenu` 屬性比較適合當成 HTML 歷史設計知識，而不是現代專案的實作答案。  
更精確地說：

- 它原本想解決「右鍵某元素時顯示哪份自訂選單」。
- 它的值會對應到某個 `<menu>` 的 `id`。
- 但這條語法路線今天已不再是現代規格鼓勵的方向。
- 如果你要做真正可控的自訂右鍵選單，應改用 script 處理 `contextmenu` 事件。

## 核心定義 / 規則

## 1. `contextmenu` 原本在控制什麼

`contextmenu` 屬性原本用來指定：  
當使用者對某個元素做上下文操作時，應該顯示哪一份選單。

它本身不負責定義選單內容，而是負責建立「元素」和「選單定義」之間的連結。

## 2. 它依賴的是哪條舊語法路線

教材中的典型寫法通常是：

- 用 `<menu>` 宣告選單
- 用 `id` 命名那份選單
- 用 `contextmenu="某個 id"` 把元素連到該選單
- 選單內再寫 `<menuitem>`

這個模型要成立，讀者得把以下幾個東西視為同一套設計的一部分：

- `contextmenu` 屬性
- `<menu type="context">`
- `<menuitem>`

而問題就在這裡：這套上下文選單語法今天已經不是現代 HTML 的推薦方向。

## 3. 它和 `contextmenu` 事件不是同一件事

這是最容易混掉的地方。

### `contextmenu` 屬性

- 是 HTML 屬性。
- 原本想用宣告式方式，把元素綁到一份上下文選單定義。

### `contextmenu` 事件

- 是 JavaScript 事件。
- 今日實作自訂右鍵選單時，通常是攔截這個事件，再自己決定顯示什麼 UI。

如果把這兩者混在一起，就會以為舊 HTML 屬性等於今天的事件式實作，其實不是。

## 判斷條件或推理過程

如果你看到一段 `contextmenu` 教材，可以這樣判斷它屬於哪一類知識：

1. 它是不是搭配 `<menu type="context">` 和 `<menuitem>`？
2. 它是不是在講 HTML 屬性如何直接綁定右鍵選單？
3. 如果是，那它多半屬於歷史語法理解，不是現代主流方案。
4. 如果你的目標是現代可控的自訂右鍵選單，應轉向 `contextmenu` 事件與自訂 UI。

## 例子說明

### 例子 1：教材中的舊式寫法

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

- 這段示例最想表達的，其實是「`contextmenu` 的值對應 `<menu>` 的 `id`」。
- 它有教學價值，但價值在於幫你理解這套舊設計原本想怎麼運作。
- 它不應被直接理解成今天仍有良好支援、可直接搬到新專案的方案。

### 例子 2：今天該怎麼理解現代做法

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

- 這段不是在重現舊 `contextmenu` 屬性。
- 它想傳達的是：今天若要做自訂右鍵選單，核心是攔截 `contextmenu` 事件，再用自己的 UI 來呈現。
- 這就是「舊 HTML 屬性」和「現代事件式方案」的根本差異。

## 常見混淆點 / 易錯點

- `contextmenu` 屬性不是 JavaScript 的 `contextmenu` 事件。
- `<menu>` 今天在 HTML 中比較接近語意上的清單替代方案，不應再把它直接等同於舊式上下文選單機制。
- `menuitem` 與 `menu type="context"` 若出現在教材裡，應優先把它們當成歷史知識，而不是新專案語法。
- 如果你的目標是跨瀏覽器可控的右鍵選單，不要依賴 `contextmenu` 屬性。

## 一句話抓核心

`contextmenu` 屬性的關鍵不在於背它怎麼綁 `<menu>`，而在於知道這是一條已經退場的 HTML 路線；今天要做自訂右鍵選單，應改學 `contextmenu` 事件。

## 延伸閱讀

- [contenteditable 屬性](./contenteditable%20属性.md)
- [第五章｜全局屬性](./README.md)
- [返回首頁](../README.md)
