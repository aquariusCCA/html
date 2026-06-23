---
source_notes:
  - notes/270-布局標籤/01-html5-語意化布局標籤.md
topics: [語意化布局標籤, 頁面結構, nav, main]
summary: "練習 header、nav、main、footer 的角色與使用邊界，包含導覽區與主要內容的判斷。"
---

# header、nav、main、footer 練習

> 動手練習。概念與用法說明見 notes/270-布局標籤/01-html5-語意化布局標籤.md。

## 題目 1（基礎）· 應用練習題

請建立一個頁首區塊，內容包含網站名稱 `尚品匯`。

完成標準：

- 使用 `<header>`。
- 內部放入網站名稱。

<details>
<summary>參考解答</summary>

```html
<header>
  <h1>尚品匯</h1>
</header>
```

解題說明：`<header>` 通常放網站名稱、Logo、標題或一個區塊的前導內容。放在整個頁面最上方時，通常代表網站或頁面的頁首。
</details>

## 題目 2（基礎）· 應用練習題

請建立一組主要導覽連結，包含「首頁」「訂單」「購物車」「我的」。

完成標準：

- 使用 `<nav>` 包住一組具有導覽功能的連結。
- 每個連結使用 `<a>`。

<details>
<summary>參考解答</summary>

```html
<nav>
  <a href="#">首頁</a>
  <a href="#">訂單</a>
  <a href="#">購物車</a>
  <a href="#">我的</a>
</nav>
```

解題說明：`<nav>` 適合用在一組具有導覽功能的連結。不是所有連結都一定要放進 `<nav>`；普通文章連結不需要硬包成導覽區。
</details>

## 題目 3（進階）· 改錯題

下面程式碼把頁首、全站導覽、主要內容與頁尾都放進 `<main>`。請修正。

```html
<main>
  <header>網站名稱</header>
  <nav>首頁 商品 會員中心</nav>
  <article>文章內容</article>
  <footer>Copyright 2026</footer>
</main>
```

完成標準：

- `<main>` 只包住頁面主要內容。
- 頁首、全站導覽與頁尾移到 `<main>` 外。

<details>
<summary>參考解答</summary>

```html
<header>網站名稱</header>
<nav>首頁 商品 會員中心</nav>

<main>
  <article>文章內容</article>
</main>

<footer>Copyright 2026</footer>
```

解題說明：`<main>` 表示頁面最核心的內容。頁首、全站導覽與頁尾通常不是主要內容，因此不應全部塞進 `<main>`。
</details>
