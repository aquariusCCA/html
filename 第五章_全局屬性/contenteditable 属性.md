# contenteditable 屬性

> 所屬章節：第五章｜全局屬性  
> 關鍵字：`contenteditable`、可編輯內容、行內編輯、HTML5、全局屬性、`true`、`false`  
> 建議回查情境：想知道如何讓元素內容能直接在頁面上被修改、想快速回查 `contenteditable` 的基本寫法、想分清 `contenteditable="true"` 和 `contenteditable="false"` 的差別

## 本節導讀

這篇整理 `contenteditable` 這個 HTML 全局屬性的基本用途。  
它的核心作用，是讓元素內的內容可以直接在瀏覽器頁面上被使用者編輯，而不一定要先做成表單欄位。

如果你看到某些頁面上的文字區塊可以直接點擊後修改，背後常見的做法之一，就是替元素加上 `contenteditable`。

## 你會在這篇學到什麼

- `contenteditable` 屬性是在做什麼
- `contenteditable` 的基本寫法
- `contenteditable="true"` 和 `contenteditable="false"` 的差別
- 什麼情況下適合用這個屬性

## 30 秒複習入口

- `contenteditable` 用來控制元素內容能不能直接在頁面上編輯。
- `contenteditable="true"` 代表允許編輯內容。
- `contenteditable="false"` 代表不允許編輯內容。
- 這個屬性改變的是元素內容的可編輯性，不是把元素變成表單控制項。

## 速查區

### 核心概念

- `contenteditable` 是讓元素內容可直接被使用者修改的全局屬性。
- 它最常用在想做「頁面上直接編輯文字」的情境。

### 關鍵規則 / 判準

- 常見寫法是 `<element contenteditable="true">` 或 `<element contenteditable="false">`。
- `true` 表示元素內容可編輯。
- `false` 表示元素內容不可編輯。
- 這個屬性是 HTML5 新增的能力。

### 常見混淆點

- `contenteditable` 讓內容可被修改，但不等於資料已經自動儲存。
- `contenteditable` 不是專門給 `<input>` 或 `<textarea>` 用的；它常用在一般元素上。
- 元素可編輯，不代表所有編輯行為都已經被完整控制，實際應用時通常還要再搭配程式處理。

### 一句話對比

- `contenteditable` 解決的是「元素內容能不能直接在頁面上改」，不是「怎麼提交表單資料」。

## 正文筆記

### 這篇在解決什麼問題？

- 有些頁面希望使用者直接點一下文字區塊就能修改內容，而不是另外跳到表單頁面。
- `contenteditable` 正是在處理這類需求：把一般 HTML 元素變成可直接編輯內容的區域。

## 1. `contenteditable` 的作用

> HTML5 新增。目的是讓用戶能夠修改頁面上的元素。

- 加上 `contenteditable` 之後，使用者可以直接在頁面上編輯元素內的文字內容。
- 這很適合用在簡單的備註區、可即時修改的說明文字，或需要行內編輯的介面。

## 2. 語法與基本示例

```html
<body>
  <p contenteditable="true">I love China!</p>
  <p contenteditable="false">I love China!</p>
</body>
```

### 這段怎麼理解？

- 第一個 `<p>` 設為 `contenteditable="true"`，表示段落內容可以直接被修改。
- 第二個 `<p>` 設為 `contenteditable="false"`，表示段落內容不能直接被修改。
- 這個例子最重要的觀察點，是同樣都是 `<p>`，是否可編輯取決於 `contenteditable` 的值。

## 3. 什麼時候會用到 `contenteditable`

- 當你想讓使用者直接修改頁面上的文字內容時。
- 當你想做簡單的行內編輯介面，而不是先建立完整表單流程時。
- 當你只是要提供可編輯區域時，它很方便；但如果還需要驗證、送出、儲存，通常仍要再搭配 JavaScript 或後端處理。

## 自測問題

1. `contenteditable` 屬性主要在解決什麼問題？
2. `contenteditable="true"` 和 `contenteditable="false"` 的差別是什麼？
3. 為什麼說 `contenteditable` 讓內容可編輯，不代表資料一定已經被保存？
4. 哪些情況適合使用 `contenteditable`，哪些情況可能還要搭配其他程式處理？

## 延伸閱讀

- [class 屬性](./class%20属性.md)
- [返回第五章：全局屬性](./README.md)
- [返回首頁](../README.md)
