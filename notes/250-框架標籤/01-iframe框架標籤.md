---
source_atomic:
  - atomic/250-框架標籤/01-iframe框架標籤.md
---

# iframe 框架標籤：在頁面中嵌入另一個內容

## 學習目標

讀完這篇筆記，你應該能夠：

- 說明 `<iframe>` 標籤在 HTML 中的用途。
- 使用 `<iframe>` 嵌入外部網頁或其他可被瀏覽器顯示的內容。
- 理解 `name` 與連結、表單的 `target` 屬性如何配合。
- 避免使用已過時的 `frameborder` 屬性，改用 CSS 控制邊框。

## 使用情境

有時候一個網頁不是只顯示自己的 HTML 內容，而是需要把另一個頁面或文件嵌入進來。例如：

- 在頁面中嵌入廣告、地圖、影音或外部服務頁面。
- 在固定區域中顯示另一個網站或文件。
- 點擊不同連結時，讓內容顯示在同一個框架內。
- 表單送出後，不跳離目前頁面，而是把結果顯示在指定框架中。

這類需求可以用 `<iframe>` 處理。它像是在目前頁面中開出一個小型瀏覽區，裡面載入另一個指定來源。

## 一句話理解

`<iframe>` 是用來在目前 HTML 頁面中嵌入另一個瀏覽內容的標籤。

## 基本語法

最基本的 `<iframe>` 會透過 `src` 指定要嵌入的內容來源：

```html
<iframe src="./demo/home.html" title="示範首頁" width="900" height="300" style="border: 0;"></iframe>
```

這段程式碼會在頁面中建立一個寬 `900`、高 `300` 的框架，並在裡面載入 `./demo/home.html`。`title` 則用來描述這個 iframe 的內容，讓輔助工具使用者知道框架中載入的是什麼。

## 常用屬性

| 屬性 | 作用 |
| --- | --- |
| `src` | 指定 iframe 要載入的網址或文件路徑。 |
| `title` | 描述 iframe 內容，讓輔助工具能辨識這個框架的用途。 |
| `name` | 替 iframe 命名，可讓連結或表單的 `target` 指向它。 |
| `width` | 設定 iframe 的寬度。 |
| `height` | 設定 iframe 的高度。 |
| `frameborder` | 舊式屬性，曾用來控制是否顯示邊框，新內容不建議使用。 |

`frameborder` 常見值是 `0` 或 `1`，但它屬於舊式寫法。現在應該改用 CSS，例如：

```html
<iframe src="page.html" title="頁面內容" style="border: 0;"></iframe>
```

或：

```html
<iframe src="page.html" title="頁面內容" style="border: 1px solid currentColor;"></iframe>
```

## 範例一：嵌入一個普通網頁

```html
<iframe src="./demo/home.html" title="示範首頁" width="900" height="300" style="border: 0;"></iframe>
```

這個範例有四個重點：

- `<iframe>`：建立一個內嵌框架。
- `src="./demo/home.html"`：指定框架要載入的內容來源。
- `title="示範首頁"`：描述這個框架的內容，方便輔助工具辨識。
- `width="900"`、`height="300"`：設定框架在頁面上的顯示尺寸。
- `style="border: 0;"`：用 CSS 移除框架邊框。

如果 `src` 指向的網站拒絕被嵌入，iframe 可能會顯示空白或瀏覽器錯誤訊息。這通常是對方網站的安全設定，不是 HTML 語法錯誤。

## 範例二：嵌入 PDF 或其他文件

```html
<iframe src="./media/test.pdf" title="PDF 文件預覽" style="border: 1px solid currentColor;"></iframe>
```

這個範例示範 iframe 也可以嵌入瀏覽器能顯示的文件，例如 PDF。不過 `./media/test.pdf` 只是示意路徑，實際使用時必須改成專案中真的存在的檔案位置。

需要注意的是，iframe 不是「上傳」或「轉換」文件的工具。它只是把指定路徑的內容嵌入頁面中顯示。如果路徑錯誤、檔案不存在，或瀏覽器無法顯示該格式，iframe 就不會正常呈現內容。

## 範例三：搭配連結的 target 屬性

`<iframe>` 的 `name` 可以和 `<a>` 的 `target` 配合。當連結被點擊時，連結目標會載入到指定名稱的 iframe 中。

```html
<a href="./demo/news.html" target="container">開啟最新消息</a>
<iframe name="container" title="連結開啟結果" width="900" height="300" style="border: 0;"></iframe>
```

這段程式碼的關鍵在於：

- `<iframe name="container">`：建立一個名稱為 `container` 的框架。
- `<a target="container">`：指定點擊連結後，把目標頁面顯示在名為 `container` 的瀏覽區。
- `title="連結開啟結果"`：說明這個框架會顯示連結開啟後的內容。

`target` 的值必須和 iframe 的 `name` 一致。若寫成不同名稱，瀏覽器就找不到對應的 iframe，可能會改用新視窗或其他瀏覽目標開啟。

## 範例四：搭配表單的 target 屬性

表單也可以透過 `target` 指定提交結果要顯示在哪個 iframe 中：

```html
<form action="./demo/search.html" target="container2">
  <input type="text" name="keyword">
  <input type="submit" value="搜索">
</form>

<iframe name="container2" title="表單提交結果" width="900" height="300" style="border: 0;"></iframe>
```

這個範例的流程是：

1. 使用者在文字輸入框中輸入搜尋關鍵字。
2. 點擊送出按鈕後，表單送往 `action` 指定的本地示範頁面。
3. 因為表單設定了 `target="container2"`，所以結果會載入到 `name="container2"` 的 iframe 中。

這種寫法可以讓頁面保留原本的表單區塊，只把結果顯示在下方或旁邊的框架中。

## 常見錯誤

### 錯誤一：用 `frameborder` 控制新頁面的邊框

```html
<iframe src="page.html" frameborder="0"></iframe>
```

這種寫法在舊教材或舊程式碼中很常見，但新內容應避免依賴 `frameborder`。較好的寫法是改用 CSS：

```html
<iframe src="page.html" title="頁面內容" style="border: 0;"></iframe>
```

CSS 的寫法更符合現代 HTML 與樣式分離的習慣，也比較容易和其他樣式規則一起維護。

### 錯誤二：`target` 和 `name` 對不起來

```html
<a href="page.html" target="content">開啟頁面</a>
<iframe name="container"></iframe>
```

這裡的連結目標是 `content`，但 iframe 的名稱是 `container`，兩者不一致。正確寫法應讓它們使用相同名稱：

```html
<a href="page.html" target="content">開啟頁面</a>
<iframe name="content" title="頁面內容"></iframe>
```

### 錯誤三：把 iframe 當成一般版面容器

如果只是要把頁面分成導覽列、主要內容、側邊欄或頁尾，不應該用 iframe 來切版。這些內容應該用一般 HTML 結構與 CSS 排版處理。

`<iframe>` 適合用在「嵌入另一個頁面或文件」的情境，不適合拿來取代 `<div>`、`<section>`、`<main>` 這類結構標籤。

## 實務判斷準則

可以考慮使用 `<iframe>` 的情況：

- 需要嵌入外部服務提供的頁面或元件。
- 需要在指定區域中顯示另一個 URL 的內容。
- 需要搭配連結或表單的 `target`，讓結果載入到固定框架。
- 需要顯示瀏覽器可直接開啟的文件，例如 PDF。

不適合使用 `<iframe>` 的情況：

- 只是為了做一般網頁排版。
- 只是想把一段 HTML 拆成不同區塊。
- 想嵌入的網站本身禁止被 iframe 載入。
- 想嵌入的內容其實應該由目前頁面的 HTML 結構直接呈現。

## 進階實務提醒

除了前面介紹的基礎屬性，實際專案中的 iframe 還常會搭配一些控制安全、權限與效能的屬性：

| 屬性 | 作用 |
| --- | --- |
| `sandbox` | 限制 iframe 內頁面的能力，例如是否允許執行腳本、提交表單或開啟新視窗。 |
| `allow` | 指定 iframe 可以使用哪些瀏覽器功能，例如全螢幕、相機、麥克風或剪貼簿等權限。 |
| `allowfullscreen` | 允許 iframe 內的內容進入全螢幕，常見於影音播放器或互動展示。 |
| `referrerpolicy` | 控制瀏覽器載入 iframe 時，是否以及如何送出來源頁面的 referrer 資訊。 |
| `loading` | 可設定為 `lazy`，讓 iframe 在接近可視範圍時再載入，減少一開始的載入負擔。 |

初學階段先掌握 `src`、`title`、`name`、尺寸與 `target` 的配合即可；當 iframe 內嵌的是第三方服務或會影響效能的內容時，再進一步評估這些進階屬性。

## 重點整理

- `<iframe>` 用來在目前頁面中嵌入另一個瀏覽內容。
- `src` 決定 iframe 載入什麼內容。
- `title` 用來描述 iframe 內容，讓輔助工具能辨識框架用途。
- `name` 可以和 `<a>` 或 `<form>` 的 `target` 配合，讓連結或表單結果顯示在指定 iframe 中。
- `width` 和 `height` 可以設定框架尺寸。
- 新內容不建議使用 `frameborder`，應改用 CSS 的 `border` 控制邊框。
- iframe 適合嵌入外部頁面或文件，不適合拿來做一般版面結構。

## 自我檢查

1. `<iframe>` 的 `src` 屬性負責指定什麼？
2. 為什麼 iframe 應該提供能描述內容的 `title`？
3. 如果 `<a target="result">` 要把連結內容顯示在 iframe 中，iframe 應該設定哪個屬性與值？
4. 為什麼新內容不建議使用 `frameborder`？
5. 如果只是要把頁面分成主要內容與側邊欄，是否適合使用 iframe？為什麼？
