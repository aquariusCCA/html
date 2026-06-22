---
source_notes:
  - notes/050-全局屬性/01-id-class-style-元素識別分類與樣式.md
topics: [id, class, 元素識別, 唯一性]
summary: "依情境正確選用 id（唯一定位）或 class（可重複分類），並修正重複 id 與 id 誤用為分類的常見錯誤。"
---

# id 與 class 練習

> 動手練習。概念與用法說明見 `notes/050-全局屬性/01-id-class-style-元素識別分類與樣式.md`。

---

## 題目 1（基礎）· 應用練習題

頁面上有以下兩種元素，請依需求選擇正確的屬性：

1. **網站公告**：整個頁面只有一個，之後需要用 CSS 精確定位它，識別碼取名為 `site-notice`。
2. **商品卡片**：頁面上有三張，結構完全相同，未來要共用同一組樣式，類別名稱取名為 `product-card`。

請補全下方 HTML，為每個元素加上適當的屬性：

```html
<p ___>本週促銷活動，全館八折！</p>

<article ___>商品 A</article>
<article ___>商品 B</article>
<article ___>商品 C</article>
```

完成標準：公告段落使用 `id`，三個商品卡片使用相同的 `class`，屬性值與需求描述一致。

<details>
<summary>參考解答</summary>

```html
<p id="site-notice">本週促銷活動，全館八折！</p>

<article class="product-card">商品 A</article>
<article class="product-card">商品 B</article>
<article class="product-card">商品 C</article>
```

解題說明：

- `id` 用來標記**唯一元素**，同一份文件中不應重複。公告只出現一次，適合用 `id="site-notice"`，方便精確定位。
- `class` 用來標記**同類元素**，可以在多個元素上使用同一個值。三個商品卡片結構相同且要共用樣式，正確做法是讓它們共用同一個 class。

</details>

---

## 題目 2（基礎）· 改錯題

下面這段 HTML 有 **2 個錯誤**，請找出並全部修正。

```html
<p id="notice">系統維護通知</p>
<p id="notice">促銷活動公告</p>

<article id="product-card">商品 A</article>
<article id="product-card">商品 B</article>
<article id="product-card">商品 C</article>
```

完成標準：兩處錯誤全部修正，且能說明每一處為什麼有問題。

<details>
<summary>參考解答</summary>

```html
<p class="notice">系統維護通知</p>
<p class="notice">促銷活動公告</p>

<article class="product-card">商品 A</article>
<article class="product-card">商品 B</article>
<article class="product-card">商品 C</article>
```

兩個錯誤說明：

1. **`id="notice"` 重複出現在兩個元素上** → `id` 規定元素的唯一識別碼，同一份文件中不應有兩個元素使用相同的 `id`。這兩個段落都是公告類型的內容，需要的是可重複的分類，應改用 `class="notice"`。

2. **三個商品卡片都用 `id="product-card"`** → `id` 不應用於可重複的分類。商品卡片有多個，結構相同、需共用樣式，應改用 `class="product-card"`。用 `id` 做重複分類會讓 CSS、JavaScript 難以可靠地運作，也破壞了 `id` 唯一性的語意。

</details>
