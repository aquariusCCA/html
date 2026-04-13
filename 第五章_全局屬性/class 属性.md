# class 屬性

> 所屬章節：第五章｜全局屬性  
> 關鍵字：`class`、類名、類選擇器、CSS class、HTML DOM、JavaScript、全局屬性、多個類名  
> 建議回查情境：想知道 `class` 屬性是做什麼的、想回查 `class` 的基本語法、想確認一個元素可不可以同時有多個 class、想分清 `class` 在 CSS 和 JavaScript 中的用途

## 本節導讀

這篇整理 `class` 這個 HTML 全局屬性的基本用途與常見寫法。  
它最常見的用途，是讓元素能被 CSS 樣式表選中，也能讓 JavaScript 更方便地找到或修改元素。

如果你剛開始學 HTML 和 CSS，這篇可以先幫你建立一個關鍵觀念：`class` 本身不是樣式，而是給元素貼上一個可重複使用的「類名標記」。

## 你會在這篇學到什麼

- `class` 屬性是在做什麼
- `class` 的基本語法
- `class` 在 CSS 與 JavaScript 中常見的用途
- 一個元素如何同時指定多個 class

## 30 秒複習入口

- `class` 用來定義元素的類名。
- `class` 最常拿來給 CSS 選中元素，也常被 JavaScript 用來操作元素。
- 一個元素可以同時有多個 class，類名之間用空格分隔。
- 在 `HTML5` 中，`class` 可用於任何 HTML 元素；`HTML4` 的可用範圍則有限制。

## 速查區

### 核心概念

- `class` 是替元素加上一個或多個可重複使用的類名。
- 類名本身不會直接產生效果，真正的效果通常來自 CSS 樣式或 JavaScript 操作。

### 關鍵規則 / 判準

- 基本語法是 `<element class="value">`。
- 一個元素可以有多個 class，類名之間以空格分隔。
- 同一個 class 名稱可以被多個元素重複使用。
- 在 `HTML5` 中，`class` 屬於全局屬性，因此理論上可以寫在任何 HTML 元素上。

### 常見混淆點

- `class` 不是樣式本身，而是給 CSS 或 JavaScript 使用的識別標記。
- 一個元素可以有多個 class，不需要只保留一個。
- `class` 可以重複用在多個元素上，這和通常只對應單一元素的 `id` 不同。

### 一句話對比

- `class` 解決的是「如何把一群元素歸成某個類別並重複引用」，不是「元素本身顯示成什麼樣子」。

## 正文筆記

### 這篇在解決什麼問題？

- 當我們希望多個元素共用同一組樣式，或希望程式能快速找到某類元素時，就需要一種可重複使用的標記方式。
- `class` 就是在處理這類需求：替元素指定類名，讓 CSS 和 JavaScript 能更容易地選取與操作它們。

## 1. `class` 屬性的作用

> `class` 屬性定義了元素的類名。它通常用來指向樣式表中的類，也可以讓 JavaScript 透過 HTML DOM 來修改元素的類名或找到對應元素。

- `class` 最常見的用途，是讓 CSS 能依據類名選中元素並套用樣式。
- 除了 CSS，JavaScript 也常會透過類名來查找、修改或切換元素狀態。

## 2. 語法

```html
<element class="value">
```

### 這段怎麼理解？

- `element` 代表任意 HTML 元素。
- `value` 代表你指定給這個元素的類名。
- 這個類名之後可以被 CSS 選擇器或 JavaScript 拿來使用。

## 3. `class` 的適用範圍

- 在 `HTML5` 中，`class` 屬性可用於任何 HTML 元素。
- 這表示它屬於全局屬性，但不代表寫在每個元素上都一定有實際意義，仍要看使用情境。
- 在 `HTML4` 中，`class` 屬性不能用於：`<base>`、`<head>`、`<html>`、`<meta>`、`<param>`、`<script>`、`<style>`、`<title>`。

## 4. 在 HTML 文檔中使用 `class` 屬性

```css
h1.intro {
  color: blue;
}

p.important {
  color: green;
}
```

```html
<body>
  <h1 class="intro">Header 1</h1>
  <p>A paragraph.</p>
  <p class="important">Note that this is an important paragraph.</p>
</body>
```

### 這個例子在說什麼？

- `h1.intro` 代表選中具有 `intro` 類名的 `<h1>` 元素。
- `p.important` 代表選中具有 `important` 類名的 `<p>` 元素。
- HTML 裡的 `class` 值，正是讓 CSS 能把樣式對應到特定元素的關鍵。

## 5. 向元素添加多個 class

> 如果需要為一個元素同時指定多個類名，可以在 `class` 屬性值中用空格分隔。

```css
.intro {
  color: blue;
  text-align: center;
}

.important {
  background-color: yellow;
}
```

```html
<body>
  <h1 class="intro important">Header 1</h1>
  <p>A paragraph.</p>
</body>
```

### 這個例子在說什麼？

- `class="intro important"` 代表同一個元素同時具有 `intro` 和 `important` 兩個類名。
- 這表示這個 `<h1>` 會同時匹配 `.intro` 和 `.important` 兩組規則。
- 用多個 class 的好處，是能把樣式拆成可重複組合的小單位，而不是每次都重新寫一組新類名。

## 自測問題

1. `class` 屬性主要在解決什麼問題？
2. `class` 為什麼常同時出現在 CSS 與 JavaScript 的語境裡？
3. 一個元素如果要同時套用兩組 class，應該怎麼寫？
4. 為什麼說 `class` 是可重複使用的標記，而不是樣式本身？

## 延伸閱讀

- [accesskey 屬性設置訪問元素的鍵盤快捷鍵](./accesskey%20屬性設置訪問元素的鍵盤快捷鍵.md)
- [返回第五章：全局屬性](./README.md)
- [返回首頁](../README.md)
