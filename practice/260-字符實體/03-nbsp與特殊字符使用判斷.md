---
source_notes:
  - notes/260-字符實體/01-字符實體基本概念.md
topics: [字符實體, 空白處理, HTML 特殊字符, nbsp]
summary: "練習使用 nbsp 與 amp 顯示特殊文字，並判斷何時不應把字符實體當成排版工具。"
---

# nbsp 與特殊字符使用判斷練習

> 動手練習。概念與用法說明見 notes/260-字符實體/01-字符實體基本概念.md。

## 題目 1（基礎）· 應用練習題

請讓 `hello` 和 `world` 中間保留 5 個不會被合併的空格效果。

完成標準：

- 使用 5 個 `&nbsp;`。
- 文字順序為 `hello`、空格效果、`world`。

<details>
<summary>參考解答</summary>

```html
hello&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;world
```

解題說明：一般 HTML 文字排版中，連續空白通常會被合併成一個空格。`&nbsp;` 不會像一般空格那樣被合併，因此可以用來顯示特殊空格效果。
</details>

## 題目 2（基礎）· 應用練習題

請讓頁面文字顯示下面內容：

```text
Tom & Jerry
```

完成標準：

- 文字中的 `&` 要寫成字符實體。
- 畫面應顯示和號本身。

<details>
<summary>參考解答</summary>

```html
Tom &amp; Jerry
```

解題說明：`&` 在字符實體中有特殊意義。如果要在文字中顯示和號本身，常需要寫成 `&amp;`。
</details>

## 題目 3（進階）· 改錯題

下面寫法用大量 `&nbsp;` 控制姓名和文字之間的距離。請改成更合適的做法說明。

```html
姓名：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;小明
```

完成標準：

- 不把大量 `&nbsp;` 當成主要排版工具。
- 保留文字內容。
- 說明若目的是控制距離，應交給 CSS 處理。

<details>
<summary>參考解答</summary>

```html
姓名：小明
```

解題說明：`&nbsp;` 適合處理文字中的特殊空格，不適合作為主要排版工具。若只是想控制表單、標籤或區塊之間的距離，應使用 CSS 的 `margin`、`padding`、`gap` 等排版方式。
</details>
