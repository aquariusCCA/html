# `figure` 與 `figcaption` 標籤

> - 所屬章節：第三十六章｜`figure` 與 `figcaption` 標籤  
> - 關鍵字：`figure`、`figcaption`、圖說、caption、圖片語意、圖表、程式碼片段、`alt`、可存取性  
> - 建議回查情境：想替圖片加圖說、想分清 `alt` 和可見說明、想知道圖表或程式碼片段能不能成為獨立內容單元時

## 本節導讀

`<figure>` 表示一個自成一組的內容單元。

這個內容可以是圖片，也可以是圖表、插圖、程式碼片段、表格、引用內容，或其他可以被整體引用的內容。

`<figcaption>` 則是這個內容單元的標題或說明。

這一章的核心不是：

> 只要有圖片，就一定要包 `<figure>`。

而是學會判斷：

> 這個內容是否是一個可以帶說明、可被整體理解或移動的獨立單元？

如果答案是「是」，就可以考慮使用 `<figure>`。  
如果只是單純為了排版，通常用 `<div>` 就好。

## 整理說明

- 原始學習重點：圖片可以搭配說明文字。
- 本次整理方向：把一般圖片、圖文單元、替代文字與可見圖說分清楚。
- 補強內容：加入圖片、圖表、程式碼片段、表格、引用內容和 `alt` / `figcaption` 的分工。
- 參考依據：本節依據 HTML Living Standard 與 MDN 對 `<figure>` / `<figcaption>` 的語意整理。

## 你會在這篇學到什麼

- `<figure>` 的核心語意
- `<figcaption>` 應該放在哪裡
- 圖片什麼時候需要 `<figure>`
- 圖片什麼時候不需要 `<figure>`
- `alt` 和 `<figcaption>` 有什麼不同
- 程式碼、圖表、表格、引用是否可以用 `<figure>`
- 一個 `<figure>` 能不能放多個 `<figcaption>`
- 常見錯誤用法

## 30 秒複習入口

- `<figure>` 表示一個自成一組、可被整體引用或移動的內容單元。
- `<figcaption>` 是 `<figure>` 這個內容單元的標題或說明。
- `<figcaption>` 如果出現在 `<figure>` 中，應放在 `<figure>` 的第一個或最後一個子元素位置。
- 一個 `<figure>` 通常只對應一個 `<figcaption>`。
- 不是每張圖片都需要 `<figure>`。
- `alt` 是圖片替代文字，`figcaption` 是可見圖說。
- `alt` 和 `figcaption` 可以互補，但不要無腦重複。
- 一個 `<figure>` 可以包圖片、圖表、程式碼片段、表格、引用或其他獨立內容。

## 速查區

### 是否適合用 `<figure>`

| 情境 | 是否適合 | 原因 |
|---|---:|---|
| 文章中的配圖，有清楚圖說 | 適合 | 圖與說明形成一組 |
| 教材中的流程圖 | 適合 | 流程圖可作為獨立說明單元 |
| 技術文件中的程式碼範例加標題 | 適合 | 範例和說明形成一組 |
| 報告中的統計圖表 | 適合 | 圖表通常需要標題、說明或資料脈絡 |
| 引用內容搭配來源說明 | 適合 | 引用和說明可被整體理解 |
| 頁面背景裝飾圖 | 不適合 | 不是內容單元 |
| 單純 icon | 通常不適合 | 通常只是介面提示，不是獨立圖文單元 |
| 使用者頭像 | 通常不適合 | 多半是一般圖片內容，不需要額外包成圖文單元 |
| 只為了排版包一層容器 | 不適合 | 這是 `<div>` 的用途，不是 `<figure>` 的用途 |

### `alt` 和 `figcaption`

| 項目 | 作用 | 是否可見 | 重點 |
|---|---|---:|---|
| `alt` | 圖片無法顯示或輔助技術讀取時的替代文字 | 通常不可見 | 說明圖片本身傳達的資訊 |
| `<figcaption>` | 圖片、圖表或內容單元的可見標題 / 說明 | 可見 | 說明這個內容單元在文章中的身份或上下文 |

### 一句話判斷法

> 如果這個內容拿到文章旁邊、附錄、說明區，仍然可以作為一個完整單元被理解，就適合考慮 `<figure>`。

### 實務判斷流程

可以用下面三個問題快速判斷：

1. 這個東西是「內容」嗎？還是只是裝飾或排版？
2. 它是否需要標題、圖說、來源說明或補充說明？
3. 它是否可以被整體引用、整體移動，仍然不影響主文理解？

如果三個問題多數答案是「是」，通常可以考慮使用 `<figure>`。  
如果只是為了套樣式、排版、包一層容器，通常使用 `<div>` 即可。

## 正文筆記

### 1. 最基本的圖文單元

```html
<figure>
  <img
    src="./images/html-structure.png"
    alt="HTML 文件由 doctype、html、head 和 body 組成">
  <figcaption>HTML 文件基本結構示意圖</figcaption>
</figure>
```

這裡有三層意思：

- `<figure>`：這是一個獨立圖文單元。
- `<img>`：真正的圖片內容。
- `<figcaption>`：這個圖文單元的可見說明。

可以這樣理解：

> `<figure>` 負責把內容包成「一組」，`<figcaption>` 負責替這一組內容加上可見說明。

---

### 2. `<figure>` 不只用在圖片

`<figure>` 不是「圖片專用標籤」。

它可以包任何自成一組、可以被整體引用或說明的內容。

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

也就是說，`<figure>` 可以用在：

- 圖片
- 圖表
- 插圖
- 程式碼片段
- 表格
- 引用內容
- 其他可被整體說明或引用的內容

---

### 3. `<figcaption>` 放哪裡？

`<figcaption>` 如果出現在 `<figure>` 裡，應放在 `<figure>` 的第一個或最後一個子元素位置。

放在前面：

```html
<figure>
  <figcaption>圖 1：表單提交流程</figcaption>
  <img
    src="./images/form-flow.png"
    alt="使用者輸入資料後，資料透過表單送到伺服器">
</figure>
```

放在後面：

```html
<figure>
  <img
    src="./images/form-flow.png"
    alt="使用者輸入資料後，資料透過表單送到伺服器">
  <figcaption>圖 1：表單提交流程</figcaption>
</figure>
```

兩種寫法都可以。

常見習慣是：

- 圖片或圖表：`<figcaption>` 常放在內容後面，像一般圖說。
- 程式碼範例：`<figcaption>` 有時放在內容前面，像範例標題。

不建議寫成這樣：

```html
<figure>
  <img src="./images/form-flow.png" alt="表單提交流程">
  <div>
    <figcaption>圖 1：表單提交流程</figcaption>
  </div>
</figure>
```

原因是 `<figcaption>` 應該直接描述它所屬的 `<figure>`，不要再被多包一層不必要的容器。

也不建議把 `<figcaption>` 放在中間，讓它前後都還有其他主要內容：

```html
<figure>
  <img src="./images/before.png" alt="調整前的畫面">
  <figcaption>圖 1：調整前後比較</figcaption>
  <img src="./images/after.png" alt="調整後的畫面">
</figure>
```

如果是同一組比較圖，建議改成：

```html
<figure>
  <img src="./images/before.png" alt="調整前的畫面">
  <img src="./images/after.png" alt="調整後的畫面">
  <figcaption>圖 1：調整前後比較</figcaption>
</figure>
```

---

### 4. `alt` 和 `<figcaption>` 不要混成一件事

`alt` 是圖片替代文字。  
重點是讓圖片無法顯示，或使用輔助技術時，仍能理解圖片本身傳達的資訊。

`figcaption` 是可見圖說。  
重點是幫所有讀者理解這個圖文單元的標題、身份或上下文。

例如：

```html
<figure>
  <img
    src="./images/product-chart.png"
    alt="三條折線分別表示 A、B、C 產品在一到六月的銷售量變化，其中 B 產品在四月後明顯上升">
  <figcaption>圖 2：2026 年上半年產品銷售趨勢</figcaption>
</figure>
```

這裡：

- `alt` 說明圖片本身傳達的內容。
- `figcaption` 說明這張圖在文章中的標題或上下文。

兩者可以互補，但不應該無腦重複。

不建議這樣寫：

```html
<figure>
  <img
    src="./images/product-chart.png"
    alt="圖 2：2026 年上半年產品銷售趨勢">
  <figcaption>圖 2：2026 年上半年產品銷售趨勢</figcaption>
</figure>
```

問題是：

- `alt` 和 `figcaption` 幾乎完全重複。
- 輔助技術讀取時，可能得到重複又不夠具體的資訊。
- `alt` 沒有真正說明圖片裡的重點。

比較好的做法是：

```html
<figure>
  <img
    src="./images/product-chart.png"
    alt="A、B、C 三個產品的月銷售量折線圖，B 產品從四月開始成長最快">
  <figcaption>圖 2：2026 年上半年產品銷售趨勢</figcaption>
</figure>
```

---

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

原因是：

- 頭像通常只是使用者資訊的一部分，不一定需要獨立圖說。
- 裝飾圖通常不傳達主要內容，反而應該避免干擾輔助技術。
- 如果只是為了排版包一層，`<div>` 更適合。

---

### 6. `<figure>` 和 `<div>` 差在哪？

如果只是為了排版，`<div>` 是中性容器。

```html
<div class="image-card">
  <img src="./demo.png" alt="示例畫面">
</div>
```

這段的語意是：

> 這裡只是有一個容器，方便套樣式或控制版面。

如果內容本身是一個可被整體引用的單元，才考慮 `<figure>`：

```html
<figure>
  <img
    src="./demo.png"
    alt="表單頁面包含帳號欄位、密碼欄位與提交按鈕">
  <figcaption>登入表單示例畫面</figcaption>
</figure>
```

這段的語意是：

> 這是一個有說明的示例畫面，可以被整體引用或移動。

簡單判斷：

> 只為了排版，用 `<div>`。  
> 內容和說明形成一個獨立單元，用 `<figure>`。

---

### 7. 一個 `<figure>` 可以放多張圖片嗎？

可以，但要看這些圖片是不是同一組內容。

如果多張圖片共同表達同一個主題，可以放在同一個 `<figure>` 裡，搭配一個共同的 `<figcaption>`。

例如調整前後比較：

```html
<figure>
  <img src="./images/before.png" alt="調整前的登入畫面">
  <img src="./images/after.png" alt="調整後的登入畫面">
  <figcaption>圖 3：登入畫面調整前後比較</figcaption>
</figure>
```

這裡兩張圖片共同形成一個比較單元，所以可以共用一個 `<figcaption>`。

但如果每張圖片都有自己的獨立圖說，通常應該拆成多個 `<figure>`：

```html
<figure>
  <img src="./images/login.png" alt="登入頁面畫面">
  <figcaption>圖 1：登入頁面</figcaption>
</figure>

<figure>
  <img src="./images/register.png" alt="註冊頁面畫面">
  <figcaption>圖 2：註冊頁面</figcaption>
</figure>
```

不要把多個互不相干的圖片和多個圖說硬塞進同一個 `<figure>`。

---

### 8. 常見錯誤用法

| 錯誤用法 | 問題 | 建議 |
|---|---|---|
| 每張圖片都包 `<figure>` | 容易濫用語意 | 只有形成獨立圖文單元時才使用 |
| 只為了排版使用 `<figure>` | 語意不準確 | 改用 `<div>` |
| `<figcaption>` 離開 `<figure>` 單獨使用 | 圖說失去所屬對象 | 讓 `<figcaption>` 放在對應的 `<figure>` 中 |
| `<figcaption>` 被包在不必要的 `<div>` 裡 | 結構不清楚 | 讓 `<figcaption>` 直接作為 `<figure>` 的子元素 |
| 同一個 `<figure>` 放多個獨立圖說 | 結構容易混亂 | 拆成多個 `<figure>` |
| `alt` 和 `figcaption` 完全重複 | 輔助技術可能讀到重複資訊 | `alt` 描述圖片內容，`figcaption` 描述標題或上下文 |

## 常見問法

### 每張圖片都要包 `<figure>` 嗎？

不用。

只有圖片和說明形成一個獨立內容單元時，才適合用 `<figure>`。

如果圖片只是頭像、icon、背景裝飾、版面素材，通常不需要 `<figure>`。

---

### 有 `<figcaption>` 還要寫 `alt` 嗎？

通常仍然要判斷 `alt`。

`figcaption` 是可見圖說，`alt` 是圖片替代文字。

如果圖片有資訊，就應該提供合適的 `alt`。  
如果圖片只是裝飾，可能使用空的 `alt=""`。  
如果 `figcaption` 已經完整說明圖片內容，也要避免讓 `alt` 和 `figcaption` 無意義重複。

重點不是「一定寫很長」，而是：

> 讓看不到圖片的人，仍然能理解圖片真正傳達的資訊。

---

### `<figcaption>` 可以放多個嗎？

通常不應該。

一個 `<figure>` 通常只對應一個 `<figcaption>`，用來說明整組內容。

如果多張圖片各自需要自己的圖說，通常應該拆成多個 `<figure>`，而不是在同一個 `<figure>` 裡放多個 `<figcaption>`。

---

### `<figure>` 一定要有 `<figcaption>` 嗎？

不一定。

`<figcaption>` 是可選的。

但是如果完全沒有標題或說明，就要重新思考：

> 這個內容是否真的需要用 `<figure>` 包起來？

如果只是為了版面，使用 `<div>` 通常更合適。

---

### 程式碼可以用 `<figure>` 嗎？

可以。

如果程式碼片段是一個可被整體說明或引用的範例，就可以用 `<figure>` 包起來，並搭配 `<figcaption>`。

例如：

```html
<figure>
  <figcaption>範例 1：基本按鈕</figcaption>
  <pre><code>&lt;button type="button"&gt;送出&lt;/button&gt;</code></pre>
</figure>
```

---

### 表格可以用 `<figure>` 嗎？

可以，但要看情境。

如果表格本身是文章中一個可被整體引用的資料單元，可以使用 `<figure>` 包起來，再用 `<figcaption>` 說明這個資料表的用途。

例如：

```html
<figure>
  <figcaption>表 1：各瀏覽器對 HTML5 語意標籤的支援概況</figcaption>
  <table>
    <thead>
      <tr>
        <th>瀏覽器</th>
        <th>支援情況</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Chrome</td>
        <td>支援</td>
      </tr>
      <tr>
        <td>Firefox</td>
        <td>支援</td>
      </tr>
    </tbody>
  </table>
</figure>
```

但如果是一般資料表，也可以直接使用 `<table>` 搭配 `<caption>`。  
`<table><caption>` 是專門給表格標題使用的語意。

所以表格標題的優先思考是：

- 單純表格標題：可以用 `<caption>`。
- 表格作為文章中的獨立插圖、資料圖、可引用單元：可以考慮外層再用 `<figure>`。

## 自測問題

1. `<figure>` 的核心語意是什麼？
2. `<figcaption>` 應該放在什麼位置？
3. `alt` 和 `<figcaption>` 差在哪？
4. 什麼圖片不一定需要 `<figure>`？
5. `<figure>` 是否只能包圖片？
6. 一個 `<figure>` 通常應該有幾個 `<figcaption>`？
7. 多張圖片可以放在同一個 `<figure>` 裡嗎？什麼情況可以？

## 自測答案

1. `<figure>` 表示一個自成一組、可被整體引用或移動的內容單元。
2. `<figcaption>` 如果出現在 `<figure>` 裡，應放在第一個或最後一個子元素位置。
3. `alt` 是圖片替代文字，通常不可見；`figcaption` 是內容單元的可見圖說或標題。
4. 裝飾圖、單純 icon、頭像、只為了排版的圖片，不一定需要 `<figure>`。
5. 不是。`<figure>` 也可以包圖表、程式碼片段、表格、引用內容等。
6. 通常一個 `<figure>` 只對應一個 `<figcaption>`。
7. 可以。如果多張圖片共同形成一個主題，例如調整前後比較，就可以放在同一個 `<figure>` 中，搭配一個共同圖說。

## 小結

這一章最重要的是不要把 `<figure>` 理解成「圖片外層容器」。

更精準的理解是：

> `<figure>` 是一個可被整體引用或移動的內容單元。  
> `<figcaption>` 是這個內容單元的標題或說明。  
> `alt` 是圖片本身的替代文字，不等於可見圖說。

如果只是排版，用 `<div>`。  
如果內容和說明形成一組可被理解的單元，用 `<figure>`。

## 延伸閱讀

- [第三十六章｜`figure` 與 `figcaption` 標籤](./README.md)
- [第十八章｜圖片標籤](../第十八章_圖片標籤/README.md)
- [第十六章｜預格式化文本標籤](../第十六章_預格式化文本標籤/README.md)
- [MDN：`<figure>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/figure)
- [MDN：`<figcaption>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/figcaption)
