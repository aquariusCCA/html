# `figure` 與 `figcaption` 標籤

> - 所屬章節：第三十六章｜`figure` 與 `figcaption` 標籤  
> - 關鍵字：`figure`、`figcaption`、圖說、caption、圖片語意、圖表、程式碼片段、`alt`、可存取性  
> - 建議回查情境：想替圖片加圖說、想分清 `alt` 和可見說明、想知道圖表或程式碼片段能不能成為獨立內容單元時

## 本節導讀

`<figure>` 表示一個自成一組的內容單元。  
它可以是圖片，也可以是圖表、插圖、程式碼片段、引用內容或其他可以被整體引用的內容。

`<figcaption>` 則是這個內容單元的標題或說明。

這一章的核心不是「圖片都要包 `<figure>`」，而是學會判斷：

> 這個內容是否是一個可以帶說明、可被整體理解或移動的獨立單元？

## 整理說明

- 原始學習重點：圖片可以搭配說明文字。
- 本次整理方向：把一般圖片、圖文單元、替代文字與可見圖說分清楚。
- 補強內容：加入圖片、圖表、程式碼片段和 `alt` / `figcaption` 的分工。
- 待查證：本節以 HTML Living Standard 與 MDN 對 `<figure>` / `<figcaption>` 的語意整理。

## 你會在這篇學到什麼

- `<figure>` 的核心語意
- `<figcaption>` 應該放在哪裡
- 圖片什麼時候需要 `<figure>`
- `alt` 和 `<figcaption>` 有什麼不同
- 程式碼、圖表、引用是否可以用 `<figure>`
- 常見錯誤用法

## 30 秒複習入口

- `<figure>` 表示一個自成一組、可被整體引用的內容單元。
- `<figcaption>` 是 `<figure>` 的標題或說明。
- `<figcaption>` 通常放在 `<figure>` 的第一個或最後一個子元素。
- 不是每張圖片都需要 `<figure>`。
- `alt` 是圖片替代文字，`figcaption` 是可見圖說。
- 一個 `<figure>` 可以包圖片、圖表、程式碼片段、引用或其他獨立內容。

## 速查區

### 是否適合用 `<figure>`

| 情境 | 是否適合 | 原因 |
|---|---:|---|
| 文章中的配圖，有清楚圖說 | 適合 | 圖與說明形成一組 |
| 教材中的流程圖 | 適合 | 可作為獨立說明單元 |
| 程式碼範例加標題 | 適合 | 範例和說明形成一組 |
| 頁面背景裝飾圖 | 不適合 | 不是內容單元 |
| 單純 icon | 通常不適合 | 通常不是獨立圖文單元 |

### `alt` 和 `figcaption`

| 項目 | 作用 | 是否可見 |
|---|---|---:|
| `alt` | 圖片無法顯示或輔助技術讀取時的替代文字 | 通常不可見 |
| `<figcaption>` | 圖片或內容單元的可見說明 | 可見 |

## 正文筆記

### 1. 最基本的圖文單元

```html
<figure>
  <img src="./images/html-structure.png" alt="HTML 文件由 doctype、html、head 和 body 組成">
  <figcaption>HTML 文件基本結構示意圖</figcaption>
</figure>
```

這裡有三層意思：

- `<figure>`：這是一個獨立圖文單元。
- `<img>`：真正的圖片內容。
- `<figcaption>`：這個圖文單元的可見說明。

### 2. `<figure>` 不只用在圖片

`<figure>` 可以包任何自成一組的內容。

例如程式碼範例：

```html
<figure>
  <figcaption>HTML 最小文件骨架</figcaption>
  <pre><code>&lt;!DOCTYPE html&gt;
&lt;html lang="zh-Hant"&gt;
&lt;head&gt;
  &lt;meta charset="UTF-8"&gt;
  &lt;title&gt;Document&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;&lt;/body&gt;
&lt;/html&gt;</code></pre>
</figure>
```

這裡 `<figcaption>` 是程式碼片段的說明，而不是圖片說明。

### 3. `<figcaption>` 放哪裡？

`<figcaption>` 通常放在 `<figure>` 的第一個或最後一個子元素。

放在前面：

```html
<figure>
  <figcaption>圖 1：表單提交流程</figcaption>
  <img src="./images/form-flow.png" alt="使用者輸入資料後透過表單送到伺服器">
</figure>
```

放在後面：

```html
<figure>
  <img src="./images/form-flow.png" alt="使用者輸入資料後透過表單送到伺服器">
  <figcaption>圖 1：表單提交流程</figcaption>
</figure>
```

兩種都能理解。  
教材中常見圖說放在圖片下方；技術文件中有時標題會放在上方。

### 4. `alt` 和 `<figcaption>` 不要混成一件事

`alt` 是替代文字，重點是讓圖片無法顯示或使用輔助技術時，仍能理解圖片內容。

`figcaption` 是可見圖說，重點是幫所有讀者理解這個圖文單元的身份或上下文。

例如：

```html
<figure>
  <img
    src="./images/product-chart.png"
    alt="三條折線分別表示 A、B、C 產品在一到六月的銷售量變化">
  <figcaption>圖 2：2026 年上半年產品銷售趨勢</figcaption>
</figure>
```

這裡：

- `alt` 說明圖片本身傳達的內容。
- `figcaption` 說明這張圖在文章中的標題。

兩者可以互補，但不應該無腦重複。

### 5. 什麼時候不需要 `<figure>`？

如果圖片只是普通內容的一部分，沒有形成獨立圖文單元，就不一定需要 `<figure>`。

例如文章中的頭像：

```html
<img src="./avatar.png" alt="小明的頭像">
```

或裝飾圖：

```html
<img src="./divider.png" alt="">
```

這些情境不一定需要 `<figure>`。

### 6. `<figure>` 和 `<div>` 差在哪？

如果只是為了排版，`<div>` 就是中性容器。

```html
<div class="image-card">
  <img src="./demo.png" alt="示例畫面">
</div>
```

如果內容本身是一個可被整體引用的單元，才考慮 `<figure>`：

```html
<figure>
  <img src="./demo.png" alt="表單頁面包含帳號、密碼與提交按鈕">
  <figcaption>登入表單示例畫面</figcaption>
</figure>
```

簡單判斷：

> 需要圖說、可被整體移動、可被整體引用，就偏向 `<figure>`。

## 常見問法

### 每張圖片都要包 `<figure>` 嗎？

不用。

只有圖片和說明形成一個獨立內容單元時，才適合用 `<figure>`。

### 有 `<figcaption>` 還要寫 `alt` 嗎？

通常仍然要判斷 `alt`。

`figcaption` 是可見圖說，`alt` 是圖片替代文字。  
如果圖片有資訊，就應該提供合適 `alt`。

### `<figcaption>` 可以放多個嗎？

不建議。

一個 `<figure>` 通常只需要一個 `<figcaption>` 作為整組內容的說明。

### 程式碼可以用 `<figure>` 嗎？

可以。

如果程式碼片段是一個可被整體說明或引用的範例，就可以用 `<figure>` 包起來，並搭配 `<figcaption>`。

## 自測問題

1. `<figure>` 的核心語意是什麼？
2. `<figcaption>` 應該放在什麼位置？
3. `alt` 和 `<figcaption>` 差在哪？
4. 什麼圖片不一定需要 `<figure>`？
5. `<figure>` 是否只能包圖片？

## 延伸閱讀

- [第三十六章｜`figure` 與 `figcaption` 標籤](./README.md)
- [第十八章｜圖片標籤](../第十八章_圖片標籤/README.md)
- [第十六章｜預格式化文本標籤](../第十六章_預格式化文本標籤/README.md)
- [MDN：`<figure>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/figure)
- [MDN：`<figcaption>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figcaption)
