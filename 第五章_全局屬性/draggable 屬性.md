# draggable 屬性

> 所屬章節：第五章｜全局屬性  
> 關鍵字：`draggable`、拖曳、drag and drop、HTML Drag and Drop API、`true`、`false`、`auto`、`dragstart`  
> 建議回查情境：想知道 HTML 元素怎麼變成可拖曳、想分清 `draggable="true"` 和預設 `auto` 的差別、想理解 `draggable` 和拖放事件之間的關係

## 本節導讀

這篇整理 `draggable` 這個 HTML 全局屬性的用途與基本規則。  
它的核心作用，是告訴瀏覽器某個元素能不能被拖曳。

但理解這個屬性時，最容易卡住的地方，不是「能不能拖」，而是「可拖曳」和「拖到哪裡、放下後會做什麼」其實是兩個層次。  
`draggable` 只負責讓元素具備拖曳資格；真正的拖放流程，通常還要搭配 HTML Drag and Drop API 的事件一起處理。

## 你會在這篇學到什麼

- `draggable` 屬性是在做什麼
- `true`、`false`、`auto` 的差別
- 為什麼 `draggable` 是列舉屬性，不是布林屬性
- `draggable` 和拖放事件如何配合

## 30 秒複習入口

- `draggable` 用來指定元素是否可被拖曳。
- `draggable="true"` 表示可拖曳，`draggable="false"` 表示不可拖曳。
- 如果沒有設定，預設值是 `auto`，通常只有文字選取、圖片和連結可被原生拖曳。
- 讓元素可拖曳，不等於拖放流程已完成；通常還要搭配 `dragstart`、`dragover`、`drop` 等事件。

## 速查區

### 核心概念

- `draggable` 決定元素能否被拖曳。
- 它常和 HTML Drag and Drop API 一起使用，用來做拖放互動。

### 關鍵規則 / 判準

- `draggable` 是列舉屬性，不是布林屬性。
- 正確寫法是 `draggable="true"` 或 `draggable="false"`，不能只寫成 `<div draggable>`。
- 若未設定，預設值是 `auto`。
- 在 `auto` 狀態下，通常只有文字選取、圖片與連結具備原生拖曳行為。
- 對其他一般元素，常需要同時設定 `draggable="true"`，再搭配拖放事件處理。

### 常見混淆點

- `draggable="true"` 只代表可以開始拖，不代表放下時會自動完成搬移。
- `draggable` 不是所有命名空間都可用；依 MDN 說明，它適用於 HTML namespace 下的元素，不能直接套在 SVG 上。
- 「元素能拖曳」和「元素能被放入某個區域」是兩回事；接收放下的一方通常還要處理 `dragover` 與 `drop`。

### 一句話對比

- `draggable` 解決的是「能不能被拖」，不是「拖放完成後要怎麼處理」。

## 正文筆記

### 這篇在解決什麼問題？

- 有些互動介面希望使用者直接把某個元素拖到另一個區域，例如卡片排序、拖到垃圾桶刪除、拖入某個容器重新排列。
- `draggable` 正是在處理這類需求的第一步：讓元素進入可拖曳狀態。

## 1. `draggable` 的作用

> `draggable` 屬性規定元素是否可拖動。

- 這個屬性通常會和 JavaScript 一起使用，做出更完整的拖放效果。
- 原始教材提到連結和圖像預設可拖曳，這和 MDN 的說法一致。

## 2. 三個狀態怎麼理解

### `true`

- 代表元素可以被拖曳。

### `false`

- 代表元素不可被拖曳。

### `auto`

- 這是沒有設定 `draggable` 時的預設狀態。
- 在這個狀態下，瀏覽器會採用原生預設行為：通常只有文字選取、圖片和連結可拖曳。

## 3. 為什麼說它不是布林屬性

- `draggable` 雖然看起來像 true / false 開關，但它在 HTML 裡是列舉屬性，不是布林屬性。
- 這代表值要明確寫出來，例如 `draggable="true"`，不能省略成 `<img draggable>`。
- 這是 `draggable` 很容易被寫錯的一個點。

## 4. 基本示例

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    .A {
      width: 200px;
      height: 200px;
      background-color: orange;
    }

    .B {
      width: 400px;
      height: 400px;
      background-color: gray;
    }
  </style>
</head>
<body>
  <div id="Adiv" class="A" draggable="true">
    A---拖曳的元素
  </div>
  <div id="Bdiv" class="B">
    B---A被拖進的元素
  </div>
</body>

<script>
  Bdiv.ondragover = function (e) {
    e.preventDefault();
  };

  Bdiv.ondrop = function (e) {
    e.preventDefault();
    this.appendChild(Adiv);
  };

  Adiv.ondragstart = function () {
    this.style.backgroundColor = "yellow";
  };

  Adiv.ondrag = function () {
    console.log("drag事件");
  };

  Adiv.ondragend = function () {
    this.style.backgroundColor = "orange";
    console.log("dragend事件");
  };
</script>
</html>
```

### 這段怎麼理解？

- `Adiv` 設為 `draggable="true"`，所以它可以被拖曳。
- `Bdiv` 在 `ondragover` 中呼叫 `preventDefault()`，表示它允許被放下。
- 當拖曳結束並放到 `Bdiv` 上時，`ondrop` 會把 `Adiv` 加進 `Bdiv` 裡。
- `ondragstart` 和 `ondragend` 則只是補上視覺效果與除錯訊息，方便觀察拖曳流程。

## 5. `draggable` 和拖放 API 的關係

- `draggable` 只是讓元素變成「可拖曳來源」。
- 真正的拖放流程，通常還要搭配 `dragstart`、`drag`、`dragover`、`drop`、`dragend` 等事件。
- 依 MDN 的 Drag and Drop API 說明，拖放至少牽涉三個面向：被拖的項目、傳遞的資料、接收放下的目標。
- 所以實務上不要把 `draggable="true"` 理解成完整拖放功能已經完成，它只是第一步。

## 可執行示例

- [draggable-demo.html](./demos/draggable-demo.html)
- 這個示例把拖曳來源、放置目標與事件日誌拆開呈現，適合直接觀察 `dragstart`、`dragover`、`drop`、`dragend` 的順序。

## 自測問題

1. `draggable` 屬性主要在解決什麼問題？
2. 為什麼 `draggable` 雖然長得像開關，但不能當成布林屬性直接省略值？
3. `draggable="true"` 和預設 `auto` 的差別是什麼？
4. 為什麼一個元素可拖曳，不代表它已經具備完整拖放功能？

## 延伸閱讀

- [dir 屬性](./dir%20屬性.md)
- [第五章示例索引](./demos/README.md)
- [返回第五章｜全局屬性](./README.md)
- [返回首頁](../README.md)


