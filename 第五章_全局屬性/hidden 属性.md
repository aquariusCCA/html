# hidden 屬性

> 所屬章節：第五章｜全局屬性  
> 關鍵字：`hidden`、隱藏元素、布林屬性、Boolean attribute、顯示與隱藏、JavaScript 切換  
> 建議回查情境：想快速確認 `hidden` 是做什麼的、想知道元素為什麼不顯示、想回查怎麼用 JavaScript 讓元素重新顯示

## 本節導讀

這篇整理 HTML 全局屬性 `hidden` 的基本用途。  
它的核心很單純：只要元素帶有 `hidden`，這個元素就會被隱藏，不會顯示在頁面上。

這個屬性常出現在「先不要顯示，等條件成立再顯示」的情境。  
例如先隱藏提示文字、額外內容或某個區塊，等使用者操作後，再用 JavaScript 移除 `hidden`，讓元素重新可見。

## 30 秒複習入口

- `hidden` 用來隱藏元素。
- 只要屬性存在，元素就會被隱藏。
- 常見用法是先隱藏內容，等條件成立後再用 JavaScript 移除 `hidden`。

## 速查區

### 核心概念

- `hidden` 是 HTML 全局屬性，可用在多數元素上。
- 它處理的是「這個元素目前要不要顯示」。

### 關鍵規則 / 判準

- `hidden` 是布林屬性；重點是「有沒有這個屬性」，不是它寫成什麼文字值。
- 元素一旦帶有 `hidden`，預設就不會顯示。
- 若想讓元素重新顯示，可以用 JavaScript 移除 `hidden`。

### 常見使用方式

- 先隱藏說明文字，等勾選選項後再顯示。
- 先隱藏進階設定區塊，等使用者點按按鈕後再展開。
- 先隱藏提示訊息，等驗證結果出現後再顯示。

### 常見混淆點

- `hidden` 是 HTML 屬性，不是 JavaScript 方法。
- `hidden` 的重點是「元素是否隱藏」，不是拿來描述內容的類型或狀態名稱。
- 寫上 `hidden` 後，若沒有後續腳本或其他機制處理，元素會一直保持隱藏。

## 正文筆記

### 這篇在解決什麼問題？

- 有些內容不適合一開始就顯示在畫面上。
- `hidden` 提供一種很直接的寫法，讓你先把元素藏起來，再依條件決定是否顯示。

## 1. `hidden` 是什麼

> `hidden` 屬性用來隱藏元素。當元素帶有這個屬性時，元素不會顯示。

- 可以把它理解成「先把這個元素藏起來」。
- 因為它是全局屬性，所以可套用在多數 HTML 元素上。

## 2. 什麼時候會用到

- 當某段內容只想在特定條件下出現時，可以先加上 `hidden`。
- 例如使用者勾選核取方塊、按下按鈕，或某段資料載入完成後，再把隱藏內容顯示出來。
- 這也是原始教材提到的重點：可以先隱藏元素，等條件成立後再用 JavaScript 移除 `hidden`。

## 3. 基本示例

```html
<body>
  <p>這是一個沒有隱藏的段落</p>
  <p hidden>這是一個隱藏的段落</p>
</body>
```

- 可直接打開示例頁：[hidden-demo.html](./demos/hidden-demo.html)

### 這段怎麼理解？

- 第一個 `<p>` 沒有 `hidden`，所以會正常顯示。
- 第二個 `<p>` 帶有 `hidden`，所以不會顯示在頁面上。
- 這個例子最重要的不是語法多複雜，而是看懂：只要屬性存在，元素就會進入隱藏狀態。

## 4. 怎麼讓它重新顯示

```html
<button id="show-btn">顯示內容</button>
<p id="message" hidden>這段內容原本是隱藏的。</p>

<script>
  const button = document.getElementById("show-btn");
  const message = document.getElementById("message");

  button.addEventListener("click", () => {
    message.removeAttribute("hidden");
  });
</script>
```

- 上面的互動版本也已整理成示例頁：[hidden-demo.html](./demos/hidden-demo.html)

### 這段怎麼理解？

- 一開始 `<p>` 因為帶有 `hidden`，所以不顯示。
- 按下按鈕後，JavaScript 用 `removeAttribute("hidden")` 把屬性移除。
- 屬性被移除後，元素就會重新顯示。

## 自測問題

1. `hidden` 屬性的作用是什麼？
2. 為什麼說 `hidden` 屬性的重點是「有沒有這個屬性」？
3. 如果想讓原本隱藏的元素重新顯示，可以怎麼做？

## 延伸閱讀

- [hidden-demo.html](./demos/hidden-demo.html)
- [第五章示例索引](./demos/README.md)
- [第五章｜全局屬性](./README.md)
- [contenteditable 屬性](./contenteditable%20属性.md)
- [返回首頁](../README.md)
