# hidden 屬性

> 所屬章節：第五章｜全局屬性
> 關鍵字：`hidden`、隱藏元素、列舉屬性、enumerated attribute、`hidden="until-found"`、`beforematch`、顯示與隱藏、JavaScript 切換
> 建議回查情境：想知道 `hidden` 到底是布林屬性還是列舉屬性、想分清一般 `hidden` 和 `hidden="until-found"` 的差別、想知道 `hidden` 和 CSS 隱藏的用途邊界

---

## 本節導讀

`hidden` 很容易被學成一句話：

> 「只要元素有 `hidden`，它就不會顯示。」

這句話方向沒有錯，但只拿它來理解 `hidden`，會少掉兩件很重要的事。
第一，`hidden` 在現在應該理解成 **列舉屬性（enumerated attribute）**，不只是傳統口語裡的布林開關。第二，它除了常見的 hidden 狀態，還有 **`until-found`** 這個值，表示元素先隱藏，但仍可被頁內搜尋或 fragment navigation 找到。

更穩定的理解方式是：

> `hidden` 處理的是「這段內容目前是否應被呈現給使用者」，
> 而不只是單純的「畫面上看不看得到」。

---

## 這篇在解決什麼問題

有些內容不適合一開始就顯示，例如：

* 登入前不能使用的區塊
* 先折疊起來的詳細說明
* 等條件成立才要出現的提示內容
* 可被搜尋找到，但預設先收起來的段落

`hidden` 就是在處理這類需求，但要注意：它不是單純的 CSS 類別替代品，而是 HTML 層級的語意標記，表示這段內容 **目前不該被呈現**，或在 `until-found` 的情況下，先隱藏但允許被搜尋或導覽揭露。

---

## 先講結論 / 核心理解

先記這幾點：

* `hidden` 是 **全局屬性**。
* 它現在應理解為 **列舉屬性**。
* 常見值包括：

  * `hidden`
  * `until-found`
  * 空字串
  * 不帶值的寫法
    其中除了 `until-found` 之外，這些情況都會讓元素進入一般的 hidden state。甚至無效值也會讓元素進入 hidden state。
* 一般 hidden state 表示：這段內容目前不相關，不應直接呈現給使用者。
* `hidden="until-found"` 表示：元素先隱藏，但內容仍可被頁內搜尋或 fragment navigation 找到。

---

## 1. `hidden` 是什麼

`hidden` 是 HTML 的全局屬性，用來表示：

> **這個元素的內容目前不應呈現給使用者。** 

MDN 對它的描述，不只是「不顯示」，而是更偏語意地說：
這段內容可能是 **目前與頁面無關**，或只是作為其他部分重用的內容，不應直接展示。

所以你不要只把它背成：

> `hidden = display: none`

這樣太扁平。
更好的理解是：

> `hidden` 是 HTML 在說「這段內容現在不該直接呈現」。 

---

## 2. 為什麼它不該再只說成布林屬性

依照 MDN 現行文件，`hidden` 是 **列舉屬性**，可接受：

* `hidden`
* `until-found`
* 空字串
* 不帶值

此外，就算你寫成無效值，例如 `hidden="bananas"`，元素仍然會被視為 hidden state。

所以最精準的說法不是：

> 「它是布林屬性，所以看有沒有寫就好」

而是：

> 「它是列舉屬性；一般情況會進入 hidden state，而 `until-found` 是另一個特殊狀態。」 

---

## 3. 一般 hidden state 怎麼理解

當元素處於一般 hidden state 時，瀏覽器不會渲染它的內容。
MDN 也提到，瀏覽器常會用 `display: none` 來實作這個狀態，因此元素通常不參與版面配置。

但這裡有一個很重要的細節：

> `hidden` 的效果 **可能被 CSS 覆蓋**。

如果你後來在 CSS 中把這個 hidden 元素設成 `display: block`，它仍可能被顯示出來。
所以 `hidden` 不是不可推翻的「絕對隱藏魔法」，而是一個 HTML 層級的狀態，瀏覽器通常用 CSS 機制去落實它。

---

## 4. `hidden="until-found"` 是什麼

這是現在 `hidden` 很值得知道的延伸點。

當元素寫成：

```html
<div hidden="until-found">...</div>
```

它表示：

* 元素預設隱藏
* 但內容仍可被瀏覽器的 **Find in page** 功能找到
* 也可被 **fragment navigation** 找到，例如網址跳到某個 `id` 對應的位置 

當使用者真的透過搜尋或片段導覽找到它時，瀏覽器會：

1. 先觸發 `beforematch` 事件
2. 移除 `hidden` 屬性
3. 再捲動到該元素 

這代表 `hidden="until-found"` 不是單純「藏起來」，而是：

> **先隱藏，但保留被搜尋揭露的能力。** 

---

## 5. `until-found` 和一般 `hidden` 的差別

你可以這樣分：

### 一般 `hidden`

* 現在不應呈現
* 瀏覽器通常不渲染
* 一般也不該拿 visible 內容去連到它 

### `hidden="until-found"`

* 先隱藏
* 但內容仍能被頁內搜尋或 fragment navigation 找到
* 被找到時，瀏覽器會自動揭露它 

一句話記憶：

* `hidden`：先藏，而且通常不參與一般呈現
* `hidden="until-found"`：先藏，但保留被找到後展開的能力 

---

## 6. 基本示例

### 例子 1：一般 hidden

```html
<p>這是一個正常顯示的段落</p>
<p hidden>這是一個隱藏的段落</p>
```

這段最重要的理解是：

* 第一個 `<p>` 沒有 `hidden`，所以正常顯示
* 第二個 `<p>` 處於 hidden state，所以瀏覽器不會渲染它的內容 

---

### 例子 2：JavaScript 讓它重新顯示

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

這段怎麼理解：

* 一開始 `<p>` 帶有 `hidden`，因此處於 hidden state
* 點擊按鈕後，用 `removeAttribute("hidden")` 把屬性移除
* 屬性移除後，元素就不再處於 hidden state，會重新顯示 

---

### 例子 3：`hidden="until-found"`

```html
<a href="#detail">跳到隱藏內容</a>

<div id="detail" hidden="until-found">
  這段內容預設隱藏，但可以被導覽找到後揭露。
</div>
```

這段想表達的是：

* 一開始內容先隱藏
* 但如果使用者透過片段導覽跳到 `#detail`
* 瀏覽器可以在揭露內容後再捲動過去 

如果你要監聽「即將被揭露」這個時機，也可以用 `beforematch`。MDN 目前把 `beforematch` 標示為 2025 年底起在最新裝置與瀏覽器版本可用，因此實務上仍要留意較舊環境的支援情況。

---

## 7. 什麼時候適合用 `hidden`

適合：

* 某段內容 **現在不相關**
* 某區塊要等條件成立才出現
* 預設折疊，但希望能被搜尋揭露的段落（用 `until-found`）
* 作為不直接呈現、但可被其他機制引用的內容 

不適合：

* 只是想做某一種呈現方式下的「視覺隱藏」
* 只想對螢幕使用者隱藏，但還想讓輔助技術單獨讀到
* 把它當成純 CSS 的 show/hide 工具替代品 

MDN 明確提醒：
`hidden` **不能只用來對某一種 presentation 隱藏內容**；如果內容被標成 hidden，它是對所有 presentation 都隱藏，包括螢幕閱讀器。

---

## 常見混淆點 / 易錯點

### 1. `hidden` 不只是「不顯示」

更精確地說，它是在表達：

> 這段內容目前不應被呈現。 

---

### 2. `hidden` 不是單純布林屬性

現在更精準的理解是：它是 **列舉屬性**，而且還有 `until-found` 這個值。

---

### 3. `hidden` 不等於永遠等同 `display: none`

瀏覽器常會這樣實作，但 CSS 的 `display` 仍可能覆蓋 hidden state。

---

### 4. 不要拿 `hidden` 只做單純視覺隱藏

如果內容被標示為 hidden，它會從所有 presentation 中隱去，不只是一般畫面顯示。

---

### 5. 一般 hidden 內容不應隨便被 visible 內容直接連結

MDN 建議：visible 內容不應直接連到 hidden 區塊；例外是 `hidden="until-found"` 這種設計本來就允許被找到後揭露。

---

## 一句話抓核心

`hidden` 的重點不是只背「有寫就不顯示」，而是理解：

> 它在 HTML 中表示這段內容目前不應被呈現；
> 而 `hidden="until-found"` 則是先隱藏、但保留被搜尋或導覽揭露的能力。 

---