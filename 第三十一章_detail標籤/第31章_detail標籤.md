# `details` 標籤

> - 所屬章節：第三十一章｜`details` 標籤  
> - 關鍵字：`details`、`summary`、`open`、展開收合、disclosure widget、FAQ、互動式控件、布林屬性  
> - 建議回查情境：想做 FAQ、想做展開 / 收合區塊、想理解 `<summary>` 的角色、想設定預設展開狀態、想分辨 `<details>` 與一般 `div` 的差異

---

## 本節導讀

`<details>` 是 HTML 原生提供的「展開 / 收合」元素，用來建立 disclosure widget。  
它適合放那些「不是一開始就必須全部顯示，但使用者可能會想進一步查看」的內容，例如 FAQ、注意事項、補充說明、文章摘要或教學提示。

這一章的核心不是背語法，而是掌握三件事：

1. `<details>` 負責建立可展開 / 收合的容器。
2. `<summary>` 負責顯示可點擊的標題或摘要。
3. `open` 屬性負責控制初始是否展開。

一句話理解：

> `<details>` 是原生的收合區塊，`<summary>` 是使用者點擊的開關標題，`open` 決定一開始是否展開。

---

## 你會在這篇學到什麼

- `<details>` 解決什麼問題
- `<details>` 和一般 `div` 有什麼差異
- `<summary>` 為什麼通常要放在 `<details>` 裡面
- `open` 為什麼是布林屬性
- 沒有 `<summary>` 時瀏覽器會怎麼處理
- 什麼情境適合或不適合使用 `<details>`
- 如何用範例判斷展開 / 收合狀態

---

## 30 秒複習入口

- `<details>` 用來建立可展開 / 收合的內容區塊。
- `<summary>` 是 `<details>` 的摘要、標題或開關文字。
- 使用者通常點擊 `<summary>` 來切換父層 `<details>` 的開啟與關閉狀態。
- `open` 是布林屬性；只要出現就代表預設展開。
- 沒有 `open` 時，`<details>` 預設是收合狀態。
- 若沒有提供 `<summary>`, 瀏覽器通常會使用預設標籤文字，例如 `Details`。
- 實務上建議明確撰寫 `<summary>`，讓使用者知道這個區塊可以點擊。

---

## 速查區

### 核心語法

```html
<details>
  <summary>這裡是摘要或標題</summary>
  <p>這裡是展開後才會看到的詳細內容。</p>
</details>
```

### 預設展開

```html
<details open>
  <summary>這裡是摘要或標題</summary>
  <p>這段內容在頁面載入時就會顯示。</p>
</details>
```

### 角色對照

| 元素 / 屬性 | 角色 | 重點 |
|---|---|---|
| `<details>` | 可展開 / 收合的外層容器 | 負責管理開啟與關閉狀態 |
| `<summary>` | 摘要、標題、開關文字 | 通常放在 `<details>` 裡的第一個 `<summary>` 子元素位置 |
| `open` | 初始展開狀態 | 布林屬性，有寫就代表展開 |
| 詳細內容 | 展開後顯示的內容 | 放在 `<summary>` 後方 |

---

## 正文筆記

### 1. `<details>` 在解決什麼問題？

網頁上有些資訊不需要一開始全部顯示出來。  
如果全部攤開，頁面會變長，使用者也比較難快速抓到重點。

例如：

- FAQ 的答案
- 表單欄位的補充說明
- 操作注意事項
- 文章摘要後的完整內容
- 教學中的進階說明

這些內容適合先收合，等使用者需要時再展開。

`<details>` 就是 HTML 原生提供的收合元件。  
它不只是普通容器，而是自帶「可開啟 / 可關閉」狀態的互動元素。

---

### 2. `<details>` 和一般 `div` 有什麼不同？

`div` 只是沒有語意的區塊容器。  
如果想用 `div` 做展開 / 收合，通常還要自己寫 JavaScript 控制顯示與隱藏。

`<details>` 則是瀏覽器原生支援的展開 / 收合元件。  
使用者不需要額外 JavaScript，就可以點擊摘要來切換內容。

簡單比較：

| 寫法 | 是否有原生收合功能 | 是否有語意 | 是否需要自己寫 JS |
|---|---:|---:|---:|
| `<div>` | 否 | 弱 | 通常需要 |
| `<details>` | 是 | 是 | 基本情境不需要 |

所以當需求只是「點一下展開，再點一下收合」時，`<details>` 通常比自己用 `div + JavaScript` 更簡潔。

---

### 3. `<summary>` 在 `<details>` 裡扮演什麼角色？

`<summary>` 是 `<details>` 的摘要、標題或開關文字。  
它是使用者最先看到的文字，也是最常被點擊來切換展開 / 收合狀態的區域。

範例：

```html
<details>
  <summary>什麼是 HTML？</summary>
  <p>HTML 是用來描述網頁結構的標記語言。</p>
</details>
```

畫面初始狀態通常只會看到：

```text
什麼是 HTML？
```

點擊後才會看到：

```text
HTML 是用來描述網頁結構的標記語言。
```

因此可以這樣記：

- `<details>`：整個收合區塊
- `<summary>`：區塊標題 / 開關
- `<summary>` 後面的內容：展開後顯示的細節

---

### 4. `<summary>` 一定要放在第一個嗎？

實務上建議把 `<summary>` 放在 `<details>` 裡最前面，讓結構清楚，也讓瀏覽器明確知道哪一段是摘要或開關標題。

推薦寫法：

```html
<details>
  <summary>文章概要</summary>
  <p>這裡是文章內容。</p>
</details>
```

不建議寫成：

```html
<details>
  <p>這裡是文章內容。</p>
  <summary>文章概要</summary>
</details>
```

原因是 `<summary>` 的目的就是先讓使用者看到摘要，再決定是否展開詳細內容。  
如果把詳細內容放在前面，閱讀順序和語意都會變得不直覺。

---

### 5. `open` 屬性在做什麼？

`open` 用來控制 `<details>` 在頁面載入時是否預設展開。

沒有 `open`：

```html
<details>
  <summary>文章概要</summary>
  <p>文章內容。</p>
</details>
```

結果：預設收合。

有 `open`：

```html
<details open>
  <summary>文章概要</summary>
  <p>文章內容。</p>
</details>
```

結果：預設展開。

`open` 是布林屬性。  
重點是：**只要屬性存在，就代表啟用。**

所以這樣寫也會被視為展開：

```html
<details open="false">
  <summary>文章概要</summary>
  <p>文章內容。</p>
</details>
```

因為 HTML 的布林屬性不是看字串值是不是 `"true"` 或 `"false"`，而是看這個屬性是否存在。

比較好的寫法是：

```html
<!-- 預設展開 -->
<details open>
  <summary>文章概要</summary>
  <p>文章內容。</p>
</details>

<!-- 預設收合 -->
<details>
  <summary>文章概要</summary>
  <p>文章內容。</p>
</details>
```

---

### 6. 如果沒有 `<summary>` 會怎樣？

如果 `<details>` 裡沒有提供 `<summary>`，瀏覽器通常會提供預設的摘要文字，例如 `Details`。

範例：

```html
<details>
  <p>這裡是詳細內容。</p>
</details>
```

這段通常仍然可以展開 / 收合。  
但是使用者看到的開關文字可能是瀏覽器預設文字，不一定符合你的頁面語境。

因此實務上不建議省略 `<summary>`。

比較好的寫法是：

```html
<details>
  <summary>查看詳細說明</summary>
  <p>這裡是詳細內容。</p>
</details>
```

這樣使用者會更清楚知道自己點開後會看到什麼。

---

### 7. 常見範例：FAQ

`<details>` 很適合做 FAQ，因為 FAQ 的閱讀模式通常是：

1. 先看到問題
2. 對問題有興趣
3. 點開查看答案

範例：

```html
<details>
  <summary>忘記密碼怎麼辦？</summary>
  <p>請點選登入頁面的「忘記密碼」，並依照系統指示重設密碼。</p>
</details>

<details>
  <summary>可以修改會員資料嗎？</summary>
  <p>可以，請登入後進入會員中心修改個人資料。</p>
</details>
```

在這個結構中：

- 問題放在 `<summary>`
- 答案放在 `<summary>` 後方
- 使用者可以自行決定要展開哪一題

---

### 8. JavaScript 中如何判斷是否展開？

基本使用 `<details>` 不需要 JavaScript。  
但如果想知道使用者是否打開或關閉，可以讀取 `open` 屬性。

```html
<details id="faq">
  <summary>什麼是 HTML？</summary>
  <p>HTML 是用來描述網頁結構的標記語言。</p>
</details>

<script>
  const details = document.querySelector('#faq');

  details.addEventListener('toggle', () => {
    console.log(details.open ? '目前展開' : '目前收合');
  });
</script>
```

重點：

- `details.open === true`：目前展開
- `details.open === false`：目前收合
- `toggle` 事件會在展開 / 收合狀態改變時觸發

這屬於進階用法。  
一般 FAQ 或補充說明不一定需要寫 JavaScript。

---

### 9. 什麼情況適合使用 `<details>`？

適合：

- FAQ
- 補充說明
- 注意事項
- 摘要 / 詳細內容
- 教學中的進階內容
- 表單欄位旁的說明區塊
- 不想讓頁面一開始資訊量太大的內容

不太適合：

- 一定要使用者立刻看到的重要警告
- 複雜的分頁切換介面
- 需要大量客製化互動邏輯的 accordion
- 主要用來排版，而不是用來展開 / 收合資訊的區塊

如果內容是重要到「使用者不能錯過」，就不要把它藏在 `<details>` 裡。

---

### 10. 使用 `<details>` 的實務建議

#### 建議一：`<summary>` 文字要明確

不佳：

```html
<summary>更多</summary>
```

較佳：

```html
<summary>查看付款方式說明</summary>
```

原因是「更多」太模糊，使用者不知道展開後會看到什麼。

---

#### 建議二：不要把 `<details>` 當成普通排版容器

不佳：

```html
<details>
  <summary>區塊標題</summary>
  <section>主要內容</section>
</details>
```

如果這段主要內容本來就應該一直顯示，就不應該用 `<details>` 收起來。

---

#### 建議三：重要內容不要預設藏起來

如果是錯誤訊息、交易風險、法律聲明、重要提醒，就不應該只放在收合內容裡。  
因為使用者可能根本不會展開。

---

#### 建議四：樣式可以調整，但不要讓它看起來不像可點擊

可以用 CSS 美化 `<summary>`，但要保留「可展開」的視覺線索。  
如果樣式讓使用者看不出可以點擊，就會降低可用性。

---

## 完整範例

```html
<section>
  <h2>常見問題</h2>

  <details open>
    <summary>什麼是 HTML？</summary>
    <p>HTML 是用來描述網頁內容結構的標記語言。</p>
  </details>

  <details>
    <summary>HTML 可以控制網頁樣式嗎？</summary>
    <p>HTML 主要負責結構，樣式通常由 CSS 控制。</p>
  </details>

  <details>
    <summary>HTML 需要搭配 JavaScript 嗎？</summary>
    <p>不一定。靜態內容可以只用 HTML 和 CSS；互動行為通常會搭配 JavaScript。</p>
  </details>
</section>
```

這段範例中：

- 第一個 `<details>` 有 `open`，所以預設展開。
- 第二、三個 `<details>` 沒有 `open`，所以預設收合。
- 每個 `<summary>` 都是一個清楚的問題。
- 每段答案都放在對應的 `<summary>` 後方。

---

## 常見錯誤整理

### 錯誤一：把 `open` 當成事件

錯誤理解：

```text
open 是點擊後觸發的事件。
```

正確理解：

```text
open 是布林屬性，用來表示 `<details>` 是否展開。
```

---

### 錯誤二：以為 `open="false"` 代表收合

錯誤寫法：

```html
<details open="false">
  <summary>文章概要</summary>
  <p>文章內容。</p>
</details>
```

這樣仍然會被視為預設展開。  
因為布林屬性只要存在就代表啟用。

正確寫法：

```html
<details>
  <summary>文章概要</summary>
  <p>文章內容。</p>
</details>
```

---

### 錯誤三：省略 `<summary>`

可以省略，但不建議。  
因為瀏覽器會使用預設文字，使用者不一定知道這段內容是什麼。

---

### 錯誤四：把重要內容藏在 `<details>` 裡

如果內容非常重要，應該直接顯示，而不是要求使用者展開後才看到。

---

## 常見問法

### Q1：`<details>` 一定要搭配 `<summary>` 嗎？

不一定。  
沒有 `<summary>` 時，瀏覽器通常會提供預設摘要文字。

但實務上強烈建議搭配 `<summary>`，因為這樣可讀性、可控性和語意都比較好。

---

### Q2：`open` 是什麼型別的屬性？

`open` 是布林屬性。  
有寫就代表預設展開，沒寫就代表預設收合。

---

### Q3：點擊的是 `<details>` 還是 `<summary>`？

實務上通常是點擊 `<summary>`。  
`<summary>` 被點擊後，父層 `<details>` 的展開狀態會被切換。

---

### Q4：`<details>` 可以取代所有 accordion 嗎？

不一定。  
如果只是簡單的展開 / 收合，`<details>` 很適合。  
如果需要複雜狀態控制、動畫、一次只能展開一個、和其他元件高度整合，可能就要搭配 JavaScript 或使用專門的元件。

---

### Q5：`<details>` 可以放任何內容嗎？

展開後的內容可以放段落、列表、圖片、表格、程式碼區塊等常見 HTML 內容。  
但要注意內容本身是否適合被收合，以及使用者是否需要一開始就看到。

---

## 自測問題

1. `<details>` 的主要用途是什麼？
2. `<summary>` 在 `<details>` 裡扮演什麼角色？
3. `open` 屬性會影響什麼？
4. 為什麼 `open="false"` 仍然可能讓內容預設展開？
5. 如果沒有 `<summary>`，瀏覽器通常會怎麼處理？
6. 為什麼 FAQ 很適合用 `<details>`？
7. 什麼內容不適合藏在 `<details>` 裡？

---

## 自測答案

1. `<details>` 用來建立可展開 / 收合的資訊區塊。
2. `<summary>` 是摘要、標題或開關文字，使用者通常點擊它來展開或收合內容。
3. `open` 會影響 `<details>` 初始是否展開。
4. 因為 `open` 是布林屬性，只要屬性存在就代表啟用，不是看值是不是 `"true"`。
5. 瀏覽器通常會提供預設摘要文字，例如 `Details`。
6. 因為 FAQ 很符合「先看問題，再選擇是否展開答案」的閱讀模式。
7. 重要警告、錯誤訊息、法律或交易上必須立即看見的內容，不適合只藏在 `<details>` 裡。

---

## 一句話總結

`<details>` 是 HTML 原生的展開 / 收合區塊；`<summary>` 是使用者看到並點擊的標題；`open` 是控制初始展開狀態的布林屬性。

---

## 延伸閱讀

- [第三十一章｜`details` 標籤](./README.md)
- [返回首頁](../README.md)

---