<!--
source_atomic:
  - atomic/050-全局屬性/01-accesskey-鍵盤快捷鍵.md
  - atomic/050-全局屬性/14-tabindex-鍵盤導覽順序.md
-->

# tabindex 與 accesskey：鍵盤操作與導覽

## 學習目標

讀完這篇筆記，你應該能夠：

- 理解 `tabindex` 如何影響 Tab 鍵導覽順序。
- 理解 `accesskey` 如何提供鍵盤快捷鍵。
- 避免破壞鍵盤使用者與輔助技術使用者的操作體驗。

## 問題情境

不是所有使用者都用滑鼠操作網頁。有些人使用鍵盤，有些人搭配輔助技術，有些人只是習慣用 Tab 鍵在表單和按鈕之間移動。

HTML 本身有一套自然的鍵盤導覽順序。互動元素，例如連結、按鈕、輸入框，通常可以用 Tab 鍵依照文件順序聚焦。

`tabindex` 和 `accesskey` 都能影響鍵盤操作，但它們也很容易被誤用。

## 一句話理解

`tabindex` 控制元素能不能被 Tab 鍵聚焦以及聚焦順序，`accesskey` 則提供快速跳到元素或啟動元素的快捷鍵。

## tabindex：鍵盤導覽順序

`tabindex` 屬性規定當使用 Tab 鍵進行導覽時，元素的聚焦行為。

```html
<button>原本就可用 Tab 聚焦的按鈕</button>
<div tabindex="0">加入一般 Tab 鍵導覽順序</div>
<div tabindex="-1">不在一般 Tab 鍵導覽順序中，但可由 JavaScript 聚焦</div>
```

常見值有三種：

| 值 | 意義 | 實務建議 |
| --- | --- | --- |
| `-1` | 可被程式聚焦，但不會出現在一般 Tab 順序中 | 常用於跳轉焦點、對話框等情境 |
| `0` | 加入一般 Tab 順序，順序依文件位置決定 | 非原生互動元素需要可聚焦時使用 |
| 大於 `0` | 強制指定 Tab 順序 | 通常應避免 |

## 為什麼通常避免正數 tabindex

```html
<input tabindex="3">
<input tabindex="1">
<input tabindex="2">
```

這種寫法會強制改變 Tab 鍵順序。當頁面變複雜後，焦點順序很容易和視覺順序、文件順序不一致，使用者會覺得焦點跳來跳去。

比較好的做法是讓 HTML 結構本身按照合理順序排列，必要時使用 `tabindex="0"` 或 `tabindex="-1"`，避免用正數硬排。

## accesskey：鍵盤快捷鍵

`accesskey` 可以為頁面上的元素設定快捷鍵，讓熟悉網站的使用者快速訪問常用元素。

```html
<a href="https://www.baidu.com" accesskey="a">百度</a>
<a href="https://www.sina.com" accesskey="g">新浪</a>
```

在 HTML5 中，`accesskey` 可用於任何 HTML 元素，但不是用在任何元素上都有實際意義。

需要注意的是，快捷鍵的啟用方式會依作業系統與瀏覽器不同。不能假設所有使用者都是按 `Alt + accesskey`。

## accesskey 的限制

`accesskey` 看起來方便，但有幾個實務風險：

- 不同瀏覽器和作業系統的觸發方式不同。
- 可能和瀏覽器、作業系統或輔助工具快捷鍵衝突。
- 使用者不一定知道頁面有哪些快捷鍵。

所以它適合少量、明確、真的有必要的快捷操作，不適合替每個元素都設定快捷鍵。

## 綜合範例

```html
<main>
  <a href="#content" accesskey="c">跳到主要內容</a>

  <section id="content" tabindex="-1">
    <h1>主要內容</h1>
    <p>這裡是頁面主要內容。</p>
  </section>

  <div tabindex="0">這個區塊可以用 Tab 聚焦。</div>
</main>
```

這段範例中：

- `accesskey="c"` 提供快速跳到主要內容的可能。
- `tabindex="-1"` 讓 `#content` 可由程式聚焦，但不加入一般 Tab 順序。
- `tabindex="0"` 讓原本不能聚焦的 `<div>` 加入自然 Tab 順序。

## 常見錯誤

### 錯誤一：大量使用正數 tabindex

```html
<button tabindex="4">第四個</button>
<button tabindex="1">第一個</button>
<button tabindex="3">第三個</button>
<button tabindex="2">第二個</button>
```

這會讓鍵盤焦點順序脫離文件順序。頁面一改版，順序就可能混亂。

### 錯誤二：把不可互動元素硬加 tabindex

```html
<p tabindex="0">這只是一段普通文字。</p>
```

如果元素不需要互動，也不需要被鍵盤聚焦，就不應加入 Tab 順序。過多無意義焦點會讓鍵盤使用者操作變慢。

### 錯誤三：假設 accesskey 的按法固定

`accesskey="a"` 不代表所有環境都是按 `Alt + A`。實際按法會因瀏覽器與作業系統而異。

## 實務判斷

- 優先使用原生互動元素，例如 `<a>`、`<button>`、`<input>`，它們本來就有合理鍵盤行為。
- 需要讓非互動元素可聚焦時，才考慮 `tabindex="0"`。
- 需要程式控制焦點，但不想放進一般 Tab 順序時，使用 `tabindex="-1"`。
- 避免使用正數 `tabindex`。
- 少量且有明確需求時，才考慮 `accesskey`。

## 重點整理

- `tabindex="0"` 讓元素加入自然 Tab 順序。
- `tabindex="-1"` 讓元素可被程式聚焦，但不進入一般 Tab 順序。
- 正數 `tabindex` 容易破壞鍵盤導覽，通常應避免。
- `accesskey` 的觸發方式依環境不同，不應假設固定按法。

## 自我檢查

- 為什麼正數 `tabindex` 通常不建議使用？
- `tabindex="-1"` 代表元素完全不能被聚焦嗎？
- 使用 `accesskey` 時，為什麼要考慮瀏覽器與作業系統差異？
