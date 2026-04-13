# contextmenu 屬性

> 所屬章節：第五章｜全局屬性  
> 關鍵字：`contextmenu`、右鍵選單、上下文選單、`<menu>`、`id`、全局屬性、舊規格  
> 建議回查情境：想知道 `contextmenu` 原本是做什麼的、想回查 `contextmenu` 與 `<menu>` 的關係、想確認為什麼這個屬性現在不適合當成主流做法

## 本節導讀

這篇整理 `contextmenu` 這個 HTML 全局屬性的原始用途與教材常見示例。  
它的概念很直觀：替元素指定一個上下文選單，讓使用者在右鍵點擊元素時看到對應選單。

不過這篇更重要的不是只記住語法，而是理解它屬於偏舊的設計思路。  
依目前 MDN 對 `<menu>` 元素的說明，早期把 `<menu>` 當成上下文選單的用法已被視為過時，不再是現代規格中的主流做法。這表示下面的示例比較適合拿來理解歷史語法，而不是直接當成現代實務方案。

## 你會在這篇學到什麼

- `contextmenu` 屬性原本在做什麼
- `contextmenu` 的值如何對應到 `<menu>` 元素的 `id`
- 教材中的 `contextmenu` 示例應該怎麼理解
- 為什麼這個屬性現在更適合當成歷史知識而不是主流實作方案

## 30 秒複習入口

- `contextmenu` 原本用來替元素指定右鍵時要打開的上下文選單。
- 這個屬性的值是對應 `<menu>` 元素的 `id`。
- 教材常見寫法會搭配 `<menu type="context">` 與 `<menuitem>`。
- 這套上下文選單語法屬於舊設計，現在不適合當成主流跨瀏覽器方案。

## 速查區

### 核心概念

- `contextmenu` 的設計目標，是讓元素在右鍵操作時顯示指定選單。
- 它本身不直接定義選單內容，而是透過屬性值去指向某個 `<menu>` 元素。

### 關鍵規則 / 判準

- `contextmenu` 的值應該是要打開之 `<menu>` 元素的 `id`。
- 教材中的典型組合是：`<menu type="context" id="...">` 搭配 `<element contextmenu="...">`。
- 這類寫法主要反映的是舊規格中的上下文選單設計。

### 常見混淆點

- `contextmenu` 不是在描述 JavaScript 的 `contextmenu` 事件；前者是 HTML 屬性，後者是事件機制。
- 有 `contextmenu` 屬性，不代表所有瀏覽器都會以一致方式支援這套選單語法。
- 看到教材示例能理解概念即可，不應直接假設它適合現代專案直接採用。

### 一句話對比

- `contextmenu` 解決的是「右鍵時要連到哪個上下文選單」，不是「如何用現代方式可靠地做自訂右鍵選單」。

## 正文筆記

### 這篇在解決什麼問題？

- 有些舊教材會希望在頁面元素被右鍵點擊時，顯示一組自訂操作選單。
- `contextmenu` 原本就是為這類需求設計的：把元素和一個上下文選單綁在一起。

## 1. `contextmenu` 的作用

> `contextmenu` 屬性規定了元素的上下文菜單。當用戶右擊元素時將顯示上下文菜單。`contextmenu` 屬性的值是需要打開的 `<menu>` 元素的 `id`。

- 這個屬性的重點是建立「元素」和「選單定義」之間的關聯。
- 換句話說，右鍵點擊哪個元素，要顯示哪份選單，是透過 `contextmenu` 的值來指定。

## 2. 教材中的基本示例

```html
<body>
  <!-- 定义一个上下文菜单 -->
  <menu type="context" id="myContextMenu">
    <menuitem label="Item 1" onclick="alert('Clicked Item 1')"></menuitem>
    <menuitem label="Item 2" onclick="alert('Clicked Item 2')"></menuitem>
    <menuitem label="Item 3" onclick="alert('Clicked Item 3')"></menuitem>
  </menu>

  <!-- 使用 contextmenu 属性关联上下文菜单 -->
  <p contextmenu="myContextMenu">右键单击此文本显示上下文菜单。</p>
</body>
```

### 這段怎麼理解？

- `id="myContextMenu"` 先定義了一個可被引用的選單。
- `<p contextmenu="myContextMenu">` 代表這個段落在右鍵操作時，會去對應 `id` 為 `myContextMenu` 的選單。
- 這裡最值得記住的不是標籤細節，而是屬性值與選單 `id` 的對應關係。

## 3. 這個例子今天該怎麼看

- 這個示例可以幫你理解 `contextmenu` 的原始設計思路。
- 但依 MDN 對 `<menu>` 元素的說明，早期把 `<menu>` 當成上下文選單的功能已被視為過時，現在不在現代 HTML 規格的主流用法中。
- 因此更穩妥的理解方式是：把它當成歷史語法知識，知道它曾經想解決什麼問題即可。

## 4. 使用時要注意什麼

- 原始教材提醒這個屬性的瀏覽器支援度很差，這個方向和現代文件對其過時定位是一致的。
- 實務上如果要做自訂右鍵選單，通常會改用 JavaScript 事件與自訂 UI 來處理，而不是依賴這套舊式 HTML 寫法。
- 這裡的判斷是根據目前 MDN 對 `<menu>` 舊式上下文選單用途的描述推得：既然相關用法已被視為 obsolete，則把它當成現代主流方案會有風險。

## 自測問題

1. `contextmenu` 屬性原本在解決什麼問題？
2. 為什麼 `contextmenu` 的值會寫成某個 `<menu>` 的 `id`？
3. `contextmenu` 屬性和 JavaScript 的 `contextmenu` 事件有什麼不同？
4. 為什麼說這篇示例更適合理解歷史設計，而不是直接照搬到現代專案？

## 延伸閱讀

- [contenteditable 屬性](./contenteditable%20属性.md)
- [返回第五章：全局屬性](./README.md)
- [返回首頁](../README.md)
