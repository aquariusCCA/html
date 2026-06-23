---
source_notes:
  - notes/320-mark標籤/01-mark-標籤基本用法.md
topics: [mark標籤, CSS樣式調整, HTML語意標籤]
summary: "mark 樣式調整練習，包含保留語意並調整背景色與文字色，以及純樣式需求的替代寫法。"
---

# mark 樣式調整練習

> 動手練習。概念與用法說明見 notes/320-mark標籤/01-mark-標籤基本用法.md。

## 題目 1（基礎）· 應用練習題

保留 `<mark>` 的語意，並把 `<mark>` 的背景色調整成 `#ffe08a`。

起始碼：

```html
<p>這堂課會先介紹 <mark>HTML5 新增標籤</mark> 的用途。</p>
```

完成標準：

- HTML 保留 `<mark>`。
- CSS 選擇器使用 `mark`。
- 設定 `background-color: #ffe08a;`。

<details>
<summary>參考解答</summary>

```html
<p>這堂課會先介紹 <mark>HTML5 新增標籤</mark> 的用途。</p>
```

```css
mark {
  background-color: #ffe08a;
}
```

解題說明：notes 說明瀏覽器通常會替 `<mark>` 加上黃色背景，但可以用 CSS 調整。這樣仍然保留 `<mark>` 的語意，只改變畫面呈現。

</details>

## 題目 2（基礎）· 應用練習題

延續上一題，除了背景色，也把 `<mark>` 的文字顏色調整成 `#1f2933`。

完成標準：

- 使用 notes 示範過的 `mark { ... }`。
- 同時設定 `background-color` 與 `color`。
- 不移除 HTML 中的 `<mark>`。

<details>
<summary>參考解答</summary>

```html
<p>這堂課會先介紹 <mark>HTML5 新增標籤</mark> 的用途。</p>
```

```css
mark {
  background-color: #ffe08a;
  color: #1f2933;
}
```

解題說明：這份解答對應 notes 的樣式調整範例。`<mark>` 負責語意，CSS 負責呈現，因此改顏色不需要放棄 `<mark>`。

</details>

## 題目 3（進階）· 改錯題

下面這段只是想做促銷黃底樣式，並不是標示目前上下文中被參照或需要注意的片段。請改成 notes 示範過的替代思路。

```html
<p>今天特價：<mark>全部商品 8 折</mark></p>
```

完成標準：

- 不使用 `<mark>` 做純視覺促銷樣式。
- 改用 `span class` 表示樣式掛鉤。
- 不需要設計完整 CSS，只要保留可用 CSS 調整的結構。

<details>
<summary>參考解答</summary>

```html
<p>今天特價：<span class="sale-text">全部商品 8 折</span></p>
```

解題說明：notes 提醒 `<mark>` 應先看語意是否成立，再看畫面效果。如果目的只是視覺促銷樣式，而不是標示目前上下文中被參照的片段，使用 CSS class 會更清楚。

</details>
