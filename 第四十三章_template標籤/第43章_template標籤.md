# `template` 標籤

> - 所屬章節：第四十三章｜`template` 標籤  
> - 關鍵字：`template`、模板、inert、`content`、DocumentFragment、clone、DOM、元件、JavaScript  
> - 建議回查情境：想在 HTML 裡先放一段不渲染的結構，之後用 JavaScript 複製並插入頁面時

## 本節導讀

`<template>` 用來保存一段「暫時不顯示、之後再使用」的 HTML。

它很適合放列表項目、卡片、彈窗內容、表格列等重複結構。  
頁面載入時，模板內的內容不會直接顯示，必須透過 JavaScript 複製後插入頁面。

## 整理說明

- 原始學習重點：補上 HTML 原生模板容器。
- 本次整理方向：理解 inert、`content`、clone 與插入 DOM 的基本流程。
- 補強內容：加入 `<template>` 和 `display: none` 的差異。
- 待查證：本章只講原生 `<template>`，不展開 Web Components 或框架模板語法。

## 你會在這篇學到什麼

- `<template>` 的基本用途
- 為什麼模板內容初始不顯示
- `template.content` 是什麼
- 如何複製模板內容
- `<template>` 和隱藏元素差在哪
- 使用模板時要注意什麼

## 30 秒複習入口

- `<template>` 裡的內容初始不渲染。
- 模板內容是 inert，也就是不會像一般 DOM 一樣立即顯示或互動。
- JavaScript 可以透過 `template.content` 取得模板內容。
- 通常使用 `cloneNode(true)` 複製模板。
- 複製後插入 DOM，內容才會出現在頁面上。
- `<template>` 不是 CSS 隱藏，它更像一段待使用的 HTML 藍圖。

## 速查區

### 基本流程

| 步驟 | 做什麼 |
|---|---|
| 1 | 在 HTML 中寫 `<template>` |
| 2 | 用 JS 找到 template |
| 3 | 透過 `template.content` 取得內容 |
| 4 | 用 `cloneNode(true)` 複製 |
| 5 | 填入資料或修改節點 |
| 6 | 插入頁面 |

### 和隱藏元素差別

| 寫法 | 特點 |
|---|---|
| `<template>` | 初始不渲染，作為模板內容保存 |
| `hidden` | 元素在 DOM 中，只是被隱藏 |
| `display: none` | 元素已在 DOM 中，只是不顯示 |

## 正文筆記

### 1. 最基本的 `<template>`

```html
<template id="cardTemplate">
  <article class="card">
    <h2 class="card-title"></h2>
    <p class="card-description"></p>
  </article>
</template>

<section id="cardList"></section>
```

這段 HTML 中，`cardTemplate` 不會直接顯示在頁面上。  
真正顯示的是後面用 JavaScript 插入到 `cardList` 的複製內容。

### 2. 用 JavaScript 複製模板

```html
<script>
  const template = document.querySelector("#cardTemplate");
  const list = document.querySelector("#cardList");

  const clone = template.content.cloneNode(true);
  clone.querySelector(".card-title").textContent = "HTML 筆記";
  clone.querySelector(".card-description").textContent = "整理 HTML 常用標籤與語意。";

  list.appendChild(clone);
</script>
```

關鍵是：

- `template.content` 取得模板內容。
- `cloneNode(true)` 深層複製所有子節點。
- 修改複製品，而不是直接修改原模板。
- 插入 DOM 後才會出現在頁面上。

### 3. `content` 是什麼？

`template.content` 不是普通元素，而是一個 `DocumentFragment`。

可以先把它想成：

> 一包還沒有插進頁面的節點集合。

它很適合拿來複製，因為你可以把一整段結構當成模板管理。

### 4. `<template>` 為什麼不是 `display: none`？

隱藏元素仍然是頁面 DOM 的一部分：

```html
<div style="display: none">
  <p>這段內容已在 DOM 中，只是不顯示。</p>
</div>
```

`<template>` 內的內容則是等待被使用的模板：

```html
<template>
  <p>這段內容需要複製並插入後才會顯示。</p>
</template>
```

所以 `<template>` 更適合保存「之後要重複生成」的結構，而不是單純藏住現有內容。

### 5. 常見使用場景

`<template>` 適合：

- 商品卡片
- 留言項目
- 通知項目
- 表格列
- 搜尋結果項目
- dialog 內的重複內容
- Web Components 的內部模板

例如列表項目：

```html
<template id="todoTemplate">
  <li>
    <input type="checkbox">
    <span class="todo-text"></span>
  </li>
</template>
```

JavaScript 可以根據資料陣列複製多次。

### 6. 使用模板時要注意什麼？

模板本身不是資料渲染引擎。  
它只是保存 HTML 結構。

如果需要：

- 條件渲染
- 狀態管理
- 複雜事件綁定
- 大量清單更新
- 元件生命週期

通常會進一步使用 JavaScript 架構或 Web Components。

但在簡單原生頁面中，`<template>` 是很乾淨的選擇。

## 常見問法

### `<template>` 裡的內容會顯示嗎？

不會。  
需要用 JavaScript 複製並插入頁面後才會顯示。

### `<template>` 裡可以放任何 HTML 嗎？

可以放很多原本在當前位置不方便直接寫的結構。  
這也是它適合保存表格列、卡片等模板的原因。

### 複製模板後事件會自動存在嗎？

如果事件是複製後再綁定，就會存在。  
如果期待模板裡某些執行狀態自動保存，通常不應該這樣理解。

### `<template>` 是不是前端框架？

不是。

它是 HTML 原生元素。  
框架模板通常有自己的語法、狀態和渲染系統。

## 自測問題

1. `<template>` 的核心作用是什麼？
2. 模板內容為什麼一開始不顯示？
3. `template.content` 可以先怎麼理解？
4. `cloneNode(true)` 中的 `true` 表示什麼？
5. `<template>` 和 `display: none` 最大差別是什麼？
6. 什麼情境適合使用 `<template>`？

## 延伸閱讀

- [第四十三章｜`template` 標籤](./README.md)
- [第三十四章｜`script` 與 `noscript` 標籤](../第三十四章_script與noscript標籤/README.md)
- [第五章｜全局屬性](../第五章_全局屬性/README.md)
- [MDN：`<template>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template)
- [HTML Living Standard：the template element](https://html.spec.whatwg.org/multipage/scripting.html#the-template-element)
