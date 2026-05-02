# `template` 標籤

> - 所屬章節：第四十三章｜`template` 標籤  
> - 關鍵字：`template`、模板、inert、`content`、`DocumentFragment`、`cloneNode(true)`、DOM、事件委派、JavaScript  
> - 建議回查情境：想在 HTML 裡先放一段不渲染的結構，之後用 JavaScript 複製、填資料並插入頁面時

## 本節導讀

`<template>` 用來保存一段「暫時不顯示、之後再使用」的 HTML 結構。

它很適合放卡片、列表項目、表格列、搜尋結果、通知項目等重複結構。頁面載入時，模板內容不會直接顯示；必須透過 JavaScript 複製模板內容，再插入 DOM，才會出現在畫面上。

## 先講結論

`<template>` 不是拿來「隱藏畫面」的標籤，而是拿來「保存可重複使用的 HTML 結構」的標籤。

可以先把它想成：

> 一份放在 HTML 裡的結構藍圖，等 JavaScript 需要時再複製出來使用。

## 本篇定位

- 原始學習重點：理解 HTML 原生模板容器。
- 本次整理方向：理解 inert、`template.content`、`DocumentFragment`、`cloneNode(true)`、資料填入、事件處理與常見錯誤。
- 範圍限制：本篇只講原生 `<template>`。Web Components 與 Vue / React 等框架模板只會簡單對比，不展開框架語法。

## 你會在這篇學到什麼

- `<template>` 的基本用途
- 為什麼模板內容初始不顯示
- inert 可以怎麼理解
- `template.content` 是什麼
- `DocumentFragment` 在這裡扮演什麼角色
- 如何用 `cloneNode(true)` 複製模板內容
- 如何根據資料陣列產生多個 DOM 節點
- 複製後的事件要怎麼處理
- `<template>`、`hidden`、`display: none` 的差異
- 使用模板時常見的錯誤

## 30 秒複習入口

- `<template>` 裡的內容初始不渲染。
- 模板內容是 inert，也就是暫時不會像一般頁面元素一樣顯示、互動或執行。
- 真正要操作的是 `template.content`，不是 `<template>` 標籤本身。
- `template.content` 是一個 `DocumentFragment`，可以理解成「一包尚未插入頁面的節點集合」。
- 通常用 `cloneNode(true)` 深層複製模板內容。
- 修改複製品後，再插入 DOM，畫面才會出現內容。
- 不建議直接把原本的 `template.content` 插入頁面，因為節點會被移走，模板就不能重複使用。
- 複製節點不會複製用 `addEventListener()` 綁定的事件監聽器，事件通常要在複製後綁定，或使用事件委派。
- `<template>` 不是 CSS 隱藏，它更像一份待使用的 HTML 藍圖。

## 速查區

### 基本流程

| 步驟 | 做什麼 | 重點 |
|---|---|---|
| 1 | 在 HTML 中寫 `<template>` | 先保存一段不直接顯示的結構 |
| 2 | 用 JS 找到 template | 通常用 `querySelector()` 或 `getElementById()` |
| 3 | 取得 `template.content` | 真正的模板內容在 `content` 裡 |
| 4 | 用 `cloneNode(true)` 複製 | `true` 代表深層複製所有子節點 |
| 5 | 修改複製品 | 填入文字、圖片、`data-*` 等資料 |
| 6 | 插入 DOM | 插入後才會成為頁面上的內容 |
| 7 | 處理事件 | 複製後綁定，或用事件委派 |

### 快速判斷該用什麼

| 需求 | 建議做法 |
|---|---|
| 想先保存一段 HTML，之後根據資料複製很多份 | 用 `<template>` |
| 想讓一個已存在的元素暫時不顯示 | 用 `hidden` 或 `display: none` |
| 想做條件渲染、狀態管理、大量清單更新 | 考慮 Vue / React 等框架 |
| 想封裝可重複使用的原生元件 | 可以研究 Web Components 搭配 `<template>` |

## 正文筆記

### 1. `<template>` 是什麼？

`<template>` 是 HTML 原生元素，用來保存一段「暫時不渲染」的 HTML。

```html
<template id="cardTemplate">
  <article class="card">
    <h2 class="card-title"></h2>
    <p class="card-description"></p>
  </article>
</template>

<section id="cardList"></section>
```

這段 HTML 中，`cardTemplate` 裡的卡片不會直接顯示在頁面上。真正會顯示的是後面用 JavaScript 複製後，插入到 `cardList` 裡的內容。

所以 `<template>` 的角色不是「畫面元素」，而是「畫面元素的模板」。

### 2. inert 是什麼意思？

`<template>` 裡的內容是 inert。

可以先這樣理解：

> 瀏覽器會解析並保存模板內容，但它暫時不會像一般頁面元素一樣參與畫面渲染與互動。

也就是說：

- 不會直接顯示在畫面上。
- 不會像一般 DOM 元素一樣成為使用者可互動的內容。
- `<template>` 裡的節點不會直接被當成頁面上的已渲染節點。
- 需要被複製並插入 DOM 後，才會成為真正的頁面內容。

這也是 `<template>` 適合當「待使用模板」的原因。

### 3. `content` 與 `DocumentFragment`

`template.content` 不是普通元素，而是一個 `DocumentFragment`。

可以先把 `DocumentFragment` 想成：

> 一包尚未插入頁面的節點集合。

重點是：

```js
const template = document.querySelector("#cardTemplate");
const fragment = template.content;
```

真正要拿來複製的是 `template.content`，不是 `<template>` 標籤本身。

也就是說，常見流程不是：

```js
template.cloneNode(true);
```

而是：

```js
template.content.cloneNode(true);
```

這樣才是在複製模板裡保存的 HTML 結構。

### 4. 用 JavaScript 複製模板

```html
<template id="cardTemplate">
  <article class="card">
    <h2 class="card-title"></h2>
    <p class="card-description"></p>
  </article>
</template>

<section id="cardList"></section>

<script>
  const template = document.querySelector("#cardTemplate");
  const list = document.querySelector("#cardList");

  const clone = template.content.cloneNode(true);

  clone.querySelector(".card-title").textContent = "HTML 筆記";
  clone.querySelector(".card-description").textContent = "整理 HTML 常用標籤與語意。";

  list.appendChild(clone);
</script>
```

這段程式的核心流程是：

1. 找到 `<template>`。
2. 透過 `template.content` 取得模板內容。
3. 用 `cloneNode(true)` 深層複製模板內容。
4. 修改複製出來的節點。
5. 把複製品插入頁面。

`cloneNode(true)` 的 `true` 代表深層複製，也就是連同所有子節點一起複製。  
如果使用 `cloneNode(false)`，通常只會複製外層節點，不會複製裡面的完整結構，對模板用途幫助很小。

### 5. 實務範例：根據資料產生多張卡片

`<template>` 最常見的用法，是搭配資料陣列產生多個相同結構的 DOM。

```html
<template id="noteCardTemplate">
  <article class="note-card">
    <h2 class="note-title"></h2>
    <p class="note-description"></p>
    <button class="note-button" type="button">查看</button>
  </article>
</template>

<section id="noteList"></section>
```

```js
const notes = [
  {
    id: "html-template",
    title: "template 標籤",
    description: "保存一段初始不渲染的 HTML 結構。",
  },
  {
    id: "dom-clone",
    title: "cloneNode(true)",
    description: "深層複製節點與所有子節點。",
  },
];

const template = document.querySelector("#noteCardTemplate");
const list = document.querySelector("#noteList");
const fragment = document.createDocumentFragment();

for (const note of notes) {
  const clone = template.content.cloneNode(true);

  const card = clone.querySelector(".note-card");
  const title = clone.querySelector(".note-title");
  const description = clone.querySelector(".note-description");

  card.dataset.id = note.id;
  title.textContent = note.title;
  description.textContent = note.description;

  fragment.appendChild(clone);
}

list.appendChild(fragment);
```

這裡多用了 `document.createDocumentFragment()`，目的是先把多個複製出來的節點集中起來，最後再一次插入頁面。

這種寫法的好處是：

- HTML 結構集中在 `<template>` 裡，程式碼比較乾淨。
- JS 只負責複製、填資料、插入頁面。
- 多筆資料可以共用同一份模板。
- 後續若要改卡片結構，只要改 `<template>` 裡的 HTML。

### 6. 複製後的事件處理

需要特別注意：`cloneNode(true)` 會複製節點與屬性，但不會複製用 `addEventListener()` 綁定的事件監聽器。

因此事件處理通常有兩種做法。

#### 做法一：複製後再綁定事件

```js
const clone = template.content.cloneNode(true);
const button = clone.querySelector(".note-button");

button.addEventListener("click", () => {
  console.log("點擊複製出來的按鈕");
});

list.appendChild(clone);
```

這種做法直觀，但如果項目很多，就會建立很多事件監聽器。

#### 做法二：事件委派

更常見的做法，是把事件綁在外層容器，透過 `event.target` 判斷使用者點到哪一張卡片。

```js
list.addEventListener("click", (event) => {
  const target = event.target;

  if (!(target instanceof Element)) return;

  const button = target.closest(".note-button");

  if (!button) return;

  const card = button.closest(".note-card");

  console.log(card?.dataset.id);
});
```

事件委派適合用在動態產生的清單，因為不管之後新增多少張卡片，都可以共用同一個外層事件。

### 7. `<template>`、`hidden`、`display: none` 的差異

這三者都可能讓內容「一開始看不到」，但目的不同。

| 寫法 | 是否在 DOM 中作為一般元素存在 | 主要用途 |
|---|---|---|
| `<template>` | 模板內容保存在 `template.content`，尚未成為頁面上的渲染內容 | 保存之後要複製使用的 HTML 結構 |
| `hidden` | 元素已在 DOM 中，只是被瀏覽器隱藏 | 語意上表示目前不相關或不顯示 |
| `display: none` | 元素已在 DOM 中，只是被 CSS 隱藏 | 單純控制畫面顯示與隱藏 |

範例：

```html
<div style="display: none">
  <p>這段內容已經是 DOM 的一部分，只是不顯示。</p>
</div>
```

```html
<template>
  <p>這段內容是模板，需要複製並插入後才會顯示。</p>
</template>
```

簡單判斷：

- 只是想把現有元素藏起來：用 `hidden` 或 `display: none`。
- 想保存一份之後重複產生的結構：用 `<template>`。

## 常見錯誤與注意事項

### 1. 不要直接插入原本的 `template.content`

不建議這樣寫：

```js
list.appendChild(template.content);
```

原因是 DOM 節點被插入新位置時，會從原本的位置被移走。  
如果直接把 `template.content` 插入頁面，模板內容可能會被搬走，之後就不能穩定地重複使用同一份模板。

比較安全的做法是每次都先複製：

```js
const clone = template.content.cloneNode(true);
list.appendChild(clone);
```

### 2. 修改複製品，不要直接修改原模板

建議修改 `clone`：

```js
const clone = template.content.cloneNode(true);
clone.querySelector(".note-title").textContent = "新的標題";
```

不要把原模板本身當成要顯示的節點來修改。  
模板應該維持為「可重複複製的乾淨藍圖」。

### 3. 多次複製時，避免模板內出現重複 `id`

如果模板裡寫了：

```html
<template id="itemTemplate">
  <article id="itemCard"></article>
</template>
```

複製多次後，頁面上會出現多個 `id="itemCard"`，這不符合 HTML 中 `id` 應該唯一的原則。

實務上，模板內部較常使用：

- `class`
- `data-*`
- 動態產生唯一 id

例如：

```html
<template id="itemTemplate">
  <article class="item-card" data-id=""></article>
</template>
```

### 4. 填入文字時，優先使用 `textContent`

如果資料來自使用者輸入或外部 API，填入文字時建議用：

```js
title.textContent = note.title;
```

不要隨意使用：

```js
title.innerHTML = note.title;
```

因為 `innerHTML` 會把字串當成 HTML 解析，若資料來源不可信，可能造成 XSS 風險。

### 5. 實務上要注意 null 檢查

簡化範例常直接寫：

```js
const template = document.querySelector("#noteCardTemplate");
const list = document.querySelector("#noteList");
```

但實務上，元素可能不存在。比較嚴謹的寫法是：

```js
const template = document.querySelector("#noteCardTemplate");
const list = document.querySelector("#noteList");

if (!(template instanceof HTMLTemplateElement)) {
  throw new Error("找不到 #noteCardTemplate，或它不是 template 元素");
}

if (!(list instanceof HTMLElement)) {
  throw new Error("找不到 #noteList");
}
```

這樣可以避免後續操作 `template.content` 或 `list.appendChild()` 時才出現不明確的錯誤。

## 適合使用 `<template>` 的情境

`<template>` 適合：

- 商品卡片
- 留言項目
- 通知項目
- 表格列
- 搜尋結果項目
- todo 清單項目
- modal / dialog 裡的重複內容
- Web Components 的內部模板
- 小型、不需要前端框架的原生 JavaScript 頁面

## 不太適合使用 `<template>` 的情境

如果需要大量處理以下需求，通常會考慮前端框架或其他架構方式：

- 複雜條件渲染
- 複雜狀態管理
- 大量資料更新與局部更新
- 元件生命週期
- 表單狀態同步
- 跨元件資料流
- 高互動 UI

`<template>` 本身不是資料渲染引擎，也不是狀態管理工具。它只負責保存 HTML 結構。

## 常見問法

### `<template>` 裡的內容會顯示嗎？

不會。  
需要用 JavaScript 複製並插入頁面後才會顯示。

### `<template>` 裡可以放任何 HTML 嗎？

可以放很多原本在當前位置不方便直接寫出的結構，例如卡片、表格列、清單項目等。  
不過實務上仍要注意 HTML 結構是否合法，例如表格相關標籤應該放在合理的表格結構中。

### `template.content` 是元素嗎？

不是。  
它是 `DocumentFragment`，可以理解成一包尚未插入頁面的節點集合。

### 為什麼通常用 `cloneNode(true)`？

因為模板通常是一整段巢狀 HTML。  
使用 `true` 才會把裡面的子節點一起複製出來。

### 複製模板後事件會自動存在嗎？

如果事件是用 `addEventListener()` 綁在原本節點上的，`cloneNode(true)` 不會把那些事件監聽器一起複製過去。

實務上通常有兩種做法：

1. 複製後，對複製出來的元素重新綁定事件。
2. 使用事件委派，把事件綁在外層容器。

### `<template>` 是不是前端框架？

不是。

它是 HTML 原生元素。  
Vue、React 等框架模板通常有自己的語法、狀態管理、條件渲染、列表渲染與生命週期概念。

### `<template>` 和 Vue 的 `<template>` 是同一個東西嗎？

不是完全同一件事。

HTML 原生 `<template>` 是瀏覽器提供的模板元素。  
Vue 單檔元件中的 `<template>` 是 Vue 編譯系統的一部分，會被 Vue 編譯成渲染函式。兩者概念上都和「模板」有關，但運作機制不同。

## 自測問題

1. `<template>` 的核心作用是什麼？
2. 模板內容為什麼一開始不顯示？
3. `template.content` 可以先怎麼理解？
4. `template.content` 是什麼型別的物件？
5. `cloneNode(true)` 中的 `true` 表示什麼？
6. 為什麼不建議直接 `appendChild(template.content)`？
7. `<template>` 和 `display: none` 最大差別是什麼？
8. 複製模板後，如果要處理按鈕點擊事件，常見做法有哪些？
9. 為什麼模板內部不建議寫會被複製多次的固定 `id`？
10. 什麼情境下應該考慮使用前端框架，而不是只靠 `<template>`？

<details>
<summary>參考答案</summary>

1. 保存一段初始不渲染、之後可被 JavaScript 複製使用的 HTML 結構。
2. 因為模板內容是 inert，瀏覽器會保存它，但不會把它當成一般頁面內容渲染。
3. 可以理解成一包尚未插入頁面的節點集合。
4. `DocumentFragment`。
5. 深層複製，也就是連同所有子節點一起複製。
6. 因為插入 DOM 時節點會被移動，直接插入原始 `template.content` 可能讓模板內容被搬走，無法穩定重複使用。
7. `<template>` 是模板內容，尚未成為頁面上的渲染內容；`display: none` 是元素已在 DOM 中，只是被 CSS 隱藏。
8. 複製後重新綁定事件，或使用事件委派。
9. 因為複製多次後會造成頁面上出現重複 `id`，違反 `id` 唯一性，也會影響查找與操作。
10. 當畫面牽涉複雜條件渲染、狀態管理、大量更新、元件生命週期或高互動 UI 時。

</details>

## 延伸閱讀

- [第四十三章｜`template` 標籤](./README.md)
- [第三十四章｜`script` 與 `noscript` 標籤](../第三十四章_script與noscript標籤/README.md)
- [第五章｜全局屬性](../第五章_全局屬性/README.md)
- [MDN：`<template>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template)
- [HTML Living Standard：the template element](https://html.spec.whatwg.org/multipage/scripting.html#the-template-element)
