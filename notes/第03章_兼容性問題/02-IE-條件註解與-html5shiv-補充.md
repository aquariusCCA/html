<!--
source_atomic:
  - atomic/第03章_兼容性問題/02-html5shiv-與-ie-條件註解.md
-->

# IE 條件註解與 html5shiv 補充

## 學習目標

讀完這篇補充筆記，你應該能夠：

- 知道 html5shiv 解決的是舊版 IE 對 HTML5 語意元素支援不足的問題。
- 理解 IE 條件註解如何讓特定 IE 版本才載入相容性腳本。
- 把這類寫法視為維護舊系統時的歷史兼容方案，而不是現代新專案的常規寫法。

## 一句話理解

html5shiv 是讓 IE6 到 IE8 較安全使用部分 HTML5 新語意元素的舊式相容性腳本，通常透過 IE 條件註解只提供給舊 IE 載入。

## 為什麼需要 html5shiv

HTML5 新增了許多語意化標籤，例如：

```html
<header>
  <h1>網站標題</h1>
</header>

<main>
  <article>
    <h2>文章標題</h2>
    <p>文章內容。</p>
  </article>
</main>
```

現代瀏覽器可以理解這些元素，並把它們當作正常的 HTML 元素處理。

但在 IE6、IE7、IE8 這類舊瀏覽器中，HTML5 新元素的支援並不完整。html5shiv 的用途，就是透過 JavaScript 幫助舊 IE 建立這些新元素，讓它們比較能被樣式套用與正常呈現。

它要解決的是舊版 IE 的歷史問題，不代表讓舊 IE 完整支援所有 HTML5 功能。

## 使用條件註解載入 html5shiv

因為 html5shiv 對 IE6、IE7、IE8 之外的瀏覽器沒有意義，所以早期常用 IE 條件註解限制載入範圍：

```html
<!--[if lt IE 9]>
<script src="./js/html5shiv.min.js"></script>
<![endif]-->
```

這段程式碼的意思是：只有低於 IE9 的 IE 才需要讀取 `html5shiv.min.js`。

對其他瀏覽器來說，這段內容看起來只是一般 HTML 註解，不會執行其中的 `<script>`。

## 範例拆解

```html
<!--[if lt IE 9]>
<script src="./js/html5shiv.min.js"></script>
<![endif]-->
```

可以拆成三個部分理解：

- `<!--[if lt IE 9]>`：條件開始，表示「如果是低於 IE9 的 IE」。
- `<script src="./js/html5shiv.min.js"></script>`：符合條件時載入相容性腳本。
- `<![endif]-->`：條件註解結束。

這裡的 `./js/html5shiv.min.js` 是示例路徑。實際專案中要依檔案位置調整，並確認檔案真的存在。

## 條件判斷符號

IE 條件註解常見判斷符號如下：

| 符號 | 意思 | 範例理解 |
| --- | --- | --- |
| `lt` | 小於 | `lt IE 9` 表示低於 IE9。 |
| `lte` | 小於等於 | `lte IE 8` 表示 IE8 及以下。 |
| `gt` | 大於 | `gt IE 8` 表示高於 IE8。 |
| `gte` | 大於等於 | `gte IE 8` 表示 IE8 及以上。 |
| `!` | 邏輯非 | `!IE 8` 表示不是 IE8。 |

範例：

```html
<!--[if IE 8]>僅 IE8 可見<![endif]-->
<!--[if gt IE 8]>僅高於 IE8 的 IE 可見<![endif]-->
<!--[if lt IE 8]>僅低於 IE8 的 IE 可見<![endif]-->
<!--[if gte IE 8]>IE8 以上可見<![endif]-->
<!--[if lte IE 8]>IE8 及以下可見<![endif]-->
<!--[if !IE 8]>非 IE8 的 IE 可見<![endif]-->
```

## 重要限制

IE 條件註解不是所有 IE 版本都支援。

在教材脈絡中要特別記住：IE10 開始不再支援條件註解，所以使用這種寫法時，通常是把 IE10 當成一般瀏覽器處理。

html5shiv 本身也有明確限制：

- 它主要協助舊 IE 識別與樣式化部分 HTML5 元素。
- 它不會讓舊 IE 完整支援所有 HTML5 API。
- 它不應被用來替代功能支援測試。
- 它只適合仍需要照顧 IE6 到 IE8 的舊專案。

## 實務使用場景

你比較可能在以下情境遇到這種寫法：

- 維護很早期的企業內部系統。
- 閱讀舊版前端教材或舊專案程式碼。
- 分析早期 HTML5 語意標籤在 IE 中的兼容方案。

如果是現代新專案，通常不會再把 IE6 到 IE8 當成主要支援目標，也就不會把 html5shiv 作為必要配置。

## 常見錯誤

### 把 html5shiv 當成完整 HTML5 支援工具

html5shiv 只處理一部分舊 IE 對新元素的識別與樣式問題。表單新類型、多媒體、Canvas、Web API 等能力，仍然需要依瀏覽器支援情況另外判斷。

### 對所有瀏覽器都載入 html5shiv

html5shiv 對非舊 IE 瀏覽器沒有必要。早期會用條件註解包起來，就是為了避免不需要的瀏覽器載入它。

### 忽略 IE10 不支援條件註解

IE10 不支援條件註解，因此不能用這套語法去控制 IE10 的行為。

## 重點整理

- html5shiv 是舊 IE 相容性方案，主要服務 IE6、IE7、IE8。
- IE 條件註解可以讓特定 IE 版本才讀取某段 HTML 或腳本。
- `lt`、`lte`、`gt`、`gte`、`!` 是條件註解中的常見判斷符號。
- IE10 不支援條件註解。
- 現代新專案通常不需要 html5shiv；它更適合作為理解與維護舊專案的補充知識。

## 自我檢查

- 我是否知道 html5shiv 主要服務哪些瀏覽器？
- 我是否能讀懂 `<!--[if lt IE 9]>` 的意思？
- 我是否理解 html5shiv 不是完整 HTML5 支援方案？
