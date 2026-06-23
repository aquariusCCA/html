---
source_notes:
  - notes/320-mark標籤/01-mark-標籤基本用法.md
topics: [mark標籤, HTML語意標籤, 無障礙]
summary: "mark 語意判斷與誤用修正練習，包含 strong、CSS 與 mark 的使用邊界。"
---

# mark 語意判斷與誤用修正練習

> 動手練習。概念與用法說明見 notes/320-mark標籤/01-mark-標籤基本用法.md。

## 題目 1（基礎）· 改錯題

下面這句是重要警告，但使用了 `<mark>`。請改成更合適的語意標籤。

```html
<p><mark>請勿關閉電源。</mark></p>
```

完成標準：

- 改用 `<strong>` 表示內容本身非常重要。
- 不用 `<mark>` 表示警告重要性。
- 保留段落結構。

<details>
<summary>參考解答</summary>

```html
<p><strong>請勿關閉電源。</strong></p>
```

解題說明：notes 說明如果一句話代表重要警告，重點是「內容很重要」，而不是「這段文字被目前上下文標記出來」，那麼 `<strong>` 通常更適合。

</details>

## 題目 2（基礎）· 改錯題

下面這段只是想讓文字有背景色，沒有語意上的標記需求。請改成適合交給 CSS 處理的 HTML 結構。

```html
<p>新品上市：<mark>限量款背包</mark></p>
```

完成標準：

- 不使用 `<mark>`。
- 使用 `span class` 作為 CSS 樣式掛鉤。
- 不把純視覺樣式和語意標記混在一起。

<details>
<summary>參考解答</summary>

```html
<p>新品上市：<span class="sale-text">限量款背包</span></p>
```

解題說明：如果只是想讓文字有顏色、背景或裝飾效果，notes 建議應使用 CSS，而不是把 `<mark>` 當成一般黃底樣式工具。

</details>

## 題目 3（進階）· 重構題

請依情境改寫下面三段 HTML，讓每段使用合適的標籤或樣式掛鉤。

```html
<p>搜尋 HTML 的結果：<strong>HTML</strong> 是網頁結構的基礎。</p>
<p><mark>請務必填寫真實姓名。</mark></p>
<p>活動公告：<mark>週末限定</mark></p>
```

完成標準：

- 搜尋命中的 `HTML` 使用 `<mark>`。
- `請務必填寫真實姓名。` 使用 `<strong>`。
- `週末限定` 若只是視覺活動樣式，改用 `span class`。

<details>
<summary>參考解答</summary>

```html
<p>搜尋 HTML 的結果：<mark>HTML</mark> 是網頁結構的基礎。</p>
<p><strong>請務必填寫真實姓名。</strong></p>
<p>活動公告：<span class="sale-text">週末限定</span></p>
```

解題說明：notes 的判斷準則是先看語意。搜尋命中文字適合 `<mark>`；內容本身非常重要適合 `<strong>`；只是想改背景顏色或做裝飾效果時，應交給 CSS 樣式處理。

</details>
