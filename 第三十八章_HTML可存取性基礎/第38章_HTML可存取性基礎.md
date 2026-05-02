# HTML 可存取性基礎

> - 所屬章節：第三十八章｜HTML 可存取性基礎  
> - 關鍵字：可存取性、accessibility、a11y、語意化 HTML、標題階層、`alt`、`label`、表格標頭、landmark、ARIA、WAI-ARIA、accessibility tree、鍵盤操作、焦點順序  
> - 建議回查情境：想檢查 HTML 是否容易被輔助技術理解、想知道 ARIA 何時該用、想整理圖片、連結、表單、表格、標題的可存取性重點時

## 本節導讀

可存取性不是額外加一層魔法屬性。  
很多基礎可存取性，來自正確使用 HTML。

例如：

- 標題用 `h1` 到 `h6`，而不是只用大字。
- 按鈕用 `<button>`，而不是用 `<div>` 假裝按鈕。
- 連結用有 `href` 的 `<a>`，而不是只用文字加點擊事件。
- 表單欄位有可關聯的 `<label>`。
- 圖片有合適的 `alt`。
- 資料表格有 `<caption>`、`<th>` 和必要的 `scope`。

ARIA 很重要，但它是補充工具。  
能用原生 HTML 表達時，通常先用 HTML。

先簡單定義：

> ARIA 是一組補充 HTML 可存取性語意的屬性規範。它主要讓瀏覽器和輔助技術知道某個元素的角色、名稱、狀態與關係。

更精準地說：

> HTML 負責提供原生語意與行為；ARIA 主要用來補充輔助技術看到的角色、名稱、狀態與關係。ARIA 通常不會自動補上鍵盤事件、焦點管理、表單送出行為或樣式。

## 整理說明

- 原始學習重點：語意化標籤、圖片 `alt`、表單 `label`、表格標頭分散在前面章節。
- 本次整理方向：把 HTML 層面的可存取性整理成可回查、可檢查、可套用的筆記。
- 補強內容：加入使用情境、landmark、鍵盤焦點、ARIA 底層觀念、實務檢查流程與常見錯誤。
- 注意事項：具體可存取性表現仍需搭配瀏覽器、輔助技術、實際操作與使用者測試，不應只依賴單一工具分數。

## 你會在這篇學到什麼

- 可存取性主要在解決哪些使用情境
- 為什麼語意化 HTML 是可存取性基礎
- 標題階層怎麼安排
- 圖片 `alt` 如何判斷
- 連結文字為什麼不能只寫「點這裡」
- 表單 `label` 為什麼重要
- 表格標頭、`caption` 和 `scope` 的作用
- landmark 如何幫助頁面導航
- ARIA 是什麼，以及它補充的是哪一層資訊
- ARIA 的基本使用原則
- 鍵盤操作與焦點順序要注意什麼
- 寫完頁面後如何快速檢查基本可存取性

## 30 秒複習入口

- 先用正確 HTML，再考慮 ARIA。
- 可存取性不只和螢幕閱讀器有關，也包含鍵盤操作、清楚文字、焦點狀態與結構理解。
- 標題要表達內容層級，不是只為了字體大小。
- 有資訊的圖片需要合適 `alt`，裝飾圖片可用空 `alt=""`。
- 連結文字要能看出目的，不要整頁都是「點這裡」。
- 表單欄位應該有可關聯的 `<label>`。
- 表格資料應使用 `<caption>`、`<th>`，必要時加 `scope`。
- `nav`、`main`、`header`、`footer` 等 landmark 有助於輔助技術快速跳轉。
- 不要用 `div` 加 `onclick` 假裝按鈕。
- ARIA 是 Accessible Rich Internet Applications 的縮寫，是一組補充可存取性語意的屬性。
- ARIA 不能補齊所有鍵盤行為，互動元件仍要能用鍵盤操作。
- 寫完頁面後，至少要用鍵盤完整操作一次主要流程。

## 速查區

### HTML 可存取性檢查清單

| 類型 | 檢查點 | 常見錯誤 |
|---|---|---|
| 標題 | 是否用 `h1` ~ `h6` 表達內容層級 | 只用 CSS 把文字放大，卻沒有標題語意 |
| 圖片 | 是否有合適 `alt`，裝飾圖是否為空 `alt` | `alt="image"`、`alt="chart.png"`、所有圖都空 `alt` |
| 連結 | 連結文字是否能看出目的 | 多個連結都叫「點這裡」 |
| 按鈕 | 是否使用 `<button>` 表示動作 | 用 `<div onclick>` 假裝按鈕 |
| 表單 | 每個欄位是否有 `<label>` 或可存取名稱 | 只靠 placeholder 當欄位名稱 |
| 錯誤提示 | 錯誤訊息是否能被欄位關聯 | 只用紅字顯示錯誤，但輔助技術不知道欄位錯在哪 |
| 表格 | 是否使用 `<caption>`、`<th>`、必要時使用 `scope` | 所有儲存格都用 `<td>` |
| 結構 | 是否使用 `header`、`nav`、`main`、`footer` 等語意區塊 | 全頁都是無語意的 `<div>` |
| 鍵盤 | 是否能不用滑鼠完成主要操作 | 滑鼠能點，但 `Tab` 無法聚焦或 Enter/Space 無法操作 |
| 焦點順序 | `Tab` 順序是否符合視覺與操作順序 | 用大量正整數 `tabindex` 硬調順序 |
| ARIA | 是否只在 HTML 語意不足時補充 | 用 ARIA 修補本來可以用原生 HTML 解決的問題 |

### ARIA 優先順序

| 情境 | 建議 | 原因 |
|---|---|---|
| 原生 HTML 可表達 | 優先使用原生 HTML | 原生元素通常已內建語意、鍵盤行為與瀏覽器支援 |
| 只是想改外觀 | 使用 CSS，不要亂加 ARIA | ARIA 是語意工具，不是樣式工具 |
| 自訂互動元件 | 需要 ARIA，也需要鍵盤行為 | ARIA 只補語意，不會自動補行為 |
| 動態狀態更新 | 可考慮 `aria-live` 等補充 | 讓輔助技術知道畫面內容已改變 |
| 多個相同區塊 | 使用可區分的名稱，例如 `aria-label` | 讓使用者知道不同 `nav`、按鈕或區塊的用途 |

### ARIA 基本概念速查

| 問題 | 答案 |
|---|---|
| ARIA 是什麼？ | Accessible Rich Internet Applications 的縮寫，是一組補充可存取性語意的屬性規範。 |
| 它主要給誰看？ | 主要給瀏覽器、輔助技術與 accessibility tree 使用，不是給一般畫面樣式使用。 |
| 它補什麼？ | 補元素的角色、可存取名稱、狀態、描述與關係。 |
| 它不補什麼？ | 不自動補滑鼠事件、鍵盤事件、焦點管理、表單行為或 CSS 樣式。 |
| 什麼時候常用？ | 原生 HTML 語意不足、自訂互動元件、圖示按鈕、動態訊息、需要補充關聯時。 |


### 原生元素優先表

| 需求 | 優先使用 | 不建議一開始就用 |
|---|---|---|
| 觸發動作 | `<button type="button">` | `<div role="button">` |
| 前往頁面 | `<a href="...">` | `<span onclick="location.href=...">` |
| 主要內容 | `<main>` | `<div id="main">` |
| 導覽區 | `<nav>` | `<div class="nav">` |
| 文字輸入 | `<input>` / `<textarea>` + `<label>` | `contenteditable` 自訂輸入框 |
| 選項清單 | `<select>` / radio / checkbox | 自訂下拉選單 |
| 資料表格 | `<table>` + `<caption>` + `<th>` | 用一堆 `<div>` 排成表格樣子 |

## 正文筆記

### 1. 可存取性在解決什麼問題？

可存取性不是只和身心障礙者有關，也不是只和螢幕閱讀器有關。

它關心的是：不同能力、不同裝置、不同操作方式的使用者，能不能理解並完成頁面上的任務。

常見情境包含：

- 使用者只能用鍵盤操作，不能用滑鼠。
- 使用者透過螢幕閱讀器理解頁面。
- 使用者使用語音控制或其他輔助工具操作頁面。
- 使用者在手機、小螢幕、陽光下或弱光環境瀏覽頁面。
- 搜尋引擎、自動化測試工具需要理解頁面結構。

所以可存取性不是「額外功能」，而是讓 HTML 更容易被人、瀏覽器與工具理解。

### 2. 語意化 HTML 是第一步

看起來一樣的畫面，HTML 語意可能完全不同。

不好的寫法：

```html
<div class="title">HTML 學習筆記</div>
<div class="button" onclick="submitForm()">送出</div>
```

更好的寫法：

```html
<h1>HTML 學習筆記</h1>
<button type="submit">送出</button>
```

`h1` 和 `button` 不只是預設樣式不同。  
它們提供了瀏覽器和輔助技術可以理解的語意與行為。

以 `<button>` 來說，它通常已經內建：

- 可以被鍵盤聚焦。
- 可以用 Enter 或 Space 操作。
- 可以被輔助技術辨識為按鈕。
- 在表單中具有表單相關行為。

如果用 `<div>` 假裝按鈕，這些行為就要自己補，很容易漏掉。

### 3. 標題階層要表達內容結構

標題不是用來控制字體大小的工具。  
標題應該表達頁面內容層級。

```html
<h1>HTML 學習筆記</h1>

<h2>表單標籤</h2>
<h3>label 標籤</h3>
<h3>fieldset 與 legend</h3>

<h2>圖片標籤</h2>
<h3>alt 屬性</h3>
```

輔助技術常讓使用者按標題快速跳轉。  
如果標題階層混亂，使用者就很難理解頁面地圖。

常見建議：

- 一個頁面通常要有清楚的 `h1`。
- `h2` 表示主要段落。
- `h3` 表示 `h2` 底下的小節。
- 不要為了字體大小而跳級，例如從 `h1` 直接跳到 `h4`。
- 字體大小交給 CSS，內容層級交給標題標籤。

### 4. 圖片 `alt` 如何判斷？

`alt` 的重點不是「描述圖片長什麼樣子」，而是補上圖片在當下情境中傳達的資訊。

#### 4.1 有資訊的圖片

有資訊的圖片，需要用 `alt` 補回資訊：

```html
<img
  src="./chart.png"
  alt="表單提交流程：使用者輸入資料、瀏覽器送出請求、伺服器回應結果"
>
```

判斷方式：

> 如果拿掉這張圖會少掉重要資訊，`alt` 就應該補回那個資訊。

#### 4.2 裝飾圖片

裝飾圖片不提供重要資訊，可以使用空 `alt`：

```html
<img src="./decorative-line.png" alt="">
```

空 `alt` 的意思不是忘記寫，而是告訴輔助技術：這張圖片可以略過。

#### 4.3 功能型圖片

如果圖片本身是按鈕或連結，`alt` 應該描述功能，不是描述圖片外觀。

```html
<a href="/cart">
  <img src="./cart-icon.png" alt="查看購物車">
</a>
```

#### 4.4 不好的寫法

```html
<img src="./chart.png" alt="chart.png">
<img src="./button.png" alt="圖片">
```

`alt="chart.png"` 或 `alt="圖片"` 通常無法提供有效資訊。

### 5. 連結文字要能看出目的

連結文字應該讓使用者不用看上下文，也能大概知道會去哪裡。

不好的寫法：

```html
<a href="./form.html">點這裡</a>
```

更好的寫法：

```html
<a href="./form.html">閱讀表單標籤筆記</a>
```

很多輔助技術可以列出頁面所有連結。  
如果連結都叫「點這裡」，使用者就很難判斷每個連結的目的。

也要注意，`<a>` 要有 `href` 才是真正的連結語意：

```html
<a href="./form.html">閱讀表單標籤筆記</a>
```

如果只是觸發頁面內動作，通常應該用 `<button>`，不要用沒有 `href` 的 `<a>` 假裝按鈕。

### 6. 表單欄位需要 `<label>`

```html
<label for="email">Email</label>
<input id="email" name="email" type="email">
```

`label` 的作用不只是顯示文字。  
它會把欄位名稱和表單控件建立關聯，讓使用者點擊文字也能聚焦欄位，也讓輔助技術知道這個欄位在問什麼。

不要只依賴 placeholder：

```html
<input name="email" type="email" placeholder="Email">
```

placeholder 會消失，也不是穩定欄位名稱。

#### 6.1 多個選項可以用 `fieldset` 與 `legend`

當多個欄位屬於同一組問題時，可以用 `fieldset` 和 `legend` 表達群組語意。

```html
<fieldset>
  <legend>通知方式</legend>

  <label>
    <input type="checkbox" name="notice" value="email">
    Email
  </label>

  <label>
    <input type="checkbox" name="notice" value="sms">
    簡訊
  </label>
</fieldset>
```

`legend` 可以讓使用者知道這組 checkbox 是在回答同一個問題。

#### 6.2 錯誤訊息要能和欄位關聯

只用紅字顯示錯誤，視覺使用者看得到，但輔助技術不一定能知道哪個欄位錯了。

可以用 `aria-describedby` 把欄位和說明文字關聯起來：

```html
<label for="email">Email</label>
<input
  id="email"
  name="email"
  type="email"
  aria-invalid="true"
  aria-describedby="email-error"
>
<p id="email-error">請輸入有效的 Email。</p>
```

這裡的重點是：欄位、錯誤狀態、錯誤訊息之間要有明確關聯。

### 7. 表格要使用標頭

資料表格應該使用 `<th>` 表示標頭，也可以用 `<caption>` 說明表格主題。

```html
<table>
  <caption>課程進度</caption>
  <thead>
    <tr>
      <th scope="col">章節</th>
      <th scope="col">主題</th>
      <th scope="col">狀態</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">第三十八章</th>
      <td>HTML 可存取性基礎</td>
      <td>整理中</td>
    </tr>
  </tbody>
</table>
```

`scope="col"` 表示欄標頭，`scope="row"` 表示列標頭。  
這能幫助輔助技術理解儲存格和標頭的關係。

使用原則：

- 資料表格用 `<table>`。
- 排版布局不要優先用 `<table>`。
- 簡單表格可以用 `scope`。
- 複雜表格可能需要更明確的 `headers` / `id` 關聯。

### 8. landmark 可以幫助快速導航

語意化布局標籤也常形成 landmark，讓輔助技術使用者可以快速跳到主要區域。

```html
<header>網站標題與全站工具列</header>
<nav aria-label="主要導覽">...</nav>
<main>...</main>
<footer>網站版權與輔助連結</footer>
```

常見語意：

| 標籤 | 語意 |
|---|---|
| `<header>` | 頁面或區塊的開頭內容 |
| `<nav>` | 導覽區 |
| `<main>` | 頁面主要內容 |
| `<footer>` | 頁面或區塊的結尾內容 |
| `<aside>` | 補充內容、側欄 |
| `<section>` | 有主題的一段內容 |
| `<article>` | 可獨立理解的內容，例如文章、卡片、留言 |

如果一頁有多個 `nav`，可以用 `aria-label` 區分：

```html
<nav aria-label="主要導覽">...</nav>
<nav aria-label="文章目錄">...</nav>
```

注意：

- 一個頁面通常應該有一個主要的 `<main>`。
- 不是每個 `<header>` / `<footer>` 都代表全頁 landmark；如果它們放在 `article` 或 `section` 裡，通常是該區塊自己的頭尾。
- `aria-label` 應該用來補充區塊用途，不是拿來塞一堆說明文字。

### 9. 鍵盤操作和焦點順序

不是所有使用者都用滑鼠。  
頁面主要功能應該能用鍵盤操作。

原生 `<button>`、`<a href>`、表單控件都有內建鍵盤行為。  
如果用 `<div>` 假裝按鈕，就要自己補很多行為，很容易漏掉。

不好的寫法：

```html
<div onclick="save()">儲存</div>
```

更好的寫法：

```html
<button type="button">儲存</button>
```

#### 9.1 基本鍵盤檢查

可以用鍵盤檢查：

- `Tab` 是否可以依照合理順序移動？
- `Shift + Tab` 是否可以往回移動？
- 目前焦點位置是否清楚可見？
- 按鈕是否能用 Enter 或 Space 操作？
- 連結是否能用 Enter 開啟？
- 彈窗打開後，焦點是否進入彈窗？
- 彈窗關閉後，焦點是否回到原本觸發的位置？

#### 9.2 `tabindex` 的基本原則

| 寫法 | 含義 | 建議 |
|---|---|---|
| `tabindex="0"` | 讓元素進入自然 Tab 順序 | 少量用在自訂元件 |
| `tabindex="-1"` | 可用程式聚焦，但不進入 Tab 順序 | 常用於錯誤提示、彈窗標題、跳轉定位 |
| `tabindex="1"` 以上 | 人工指定 Tab 順序 | 通常不建議，容易讓焦點順序混亂 |

更好的做法通常是：讓 HTML 原始順序符合視覺與操作順序，而不是用正整數 `tabindex` 硬修。

### 10. ARIA 是什麼？

ARIA 是 **Accessible Rich Internet Applications** 的縮寫，完整來說常稱為 **WAI-ARIA**。

可以先把它理解成：

> ARIA 是一組 HTML 屬性，用來補充「輔助技術能理解的語意、狀態與關係」。

它不是新的 HTML 標籤，也不是 CSS，更不是 JavaScript 框架。  
它通常是加在 HTML 元素上的屬性，例如：

```html
<button aria-expanded="false" aria-controls="menu">
  選單
</button>
```

這段的意思是：

- `aria-expanded="false"`：告訴輔助技術，這個按鈕控制的內容目前是收合狀態。
- `aria-controls="menu"`：告訴輔助技術，這個按鈕和 `id="menu"` 的元素有控制關係。

#### 10.1 ARIA 主要影響的是 accessibility tree

瀏覽器不只會根據 HTML 建立畫面，也會整理出一份給輔助技術理解的結構，常稱為 **accessibility tree**。

可以簡化理解成：

```text
HTML DOM
   ↓
瀏覽器解析語意
   ↓
accessibility tree
   ↓
螢幕閱讀器、語音控制、其他輔助技術
```

ARIA 的主要作用，就是在原生 HTML 語意不足時，補充這棵 accessibility tree 裡面的資訊。

例如一個普通 `div`：

```html
<div onclick="save()">儲存</div>
```

輔助技術可能只知道它是一段文字，不一定知道它是可以操作的按鈕。

如果加上：

```html
<div role="button" tabindex="0" onclick="save()">儲存</div>
```

輔助技術比較可能知道它是一個按鈕，鍵盤也可以聚焦到它。

但這仍然不等於真正的 `<button>`，因為你還要自己補 Enter、Space、disabled、表單提交等行為。  
所以如果只是普通按鈕，最好的做法仍然是：

```html
<button type="button">儲存</button>
```

#### 10.2 ARIA 通常補四種資訊

| 類型 | 作用 | 常見例子 |
|---|---|---|
| 角色 role | 告訴輔助技術「這是什麼元件」 | `role="button"`、`role="dialog"`、`role="tab"` |
| 名稱 name | 告訴輔助技術「這個元件叫什麼」 | `aria-label`、`aria-labelledby` |
| 狀態 state | 告訴輔助技術「目前狀態是什麼」 | `aria-expanded`、`aria-selected`、`aria-checked`、`aria-invalid` |
| 關係 property | 告訴輔助技術「它和誰有關」 | `aria-controls`、`aria-describedby`、`aria-labelledby` |

範例：圖示按鈕沒有可見文字時，可以用 `aria-label` 補上可存取名稱。

```html
<button type="button" aria-label="關閉對話框">
  ×
</button>
```

範例：欄位錯誤訊息可以用 `aria-describedby` 建立關聯。

```html
<label for="email">Email</label>
<input
  id="email"
  type="email"
  aria-invalid="true"
  aria-describedby="email-error"
>
<p id="email-error">請輸入有效的 Email。</p>
```

#### 10.3 ARIA 解決的是「語意不足」，不是「行為不足」

這句很重要：

> ARIA 可以讓輔助技術更理解元件，但不會自動讓元件變得好操作。

例如：

```html
<div role="button">送出</div>
```

這只是在語意上告訴輔助技術：「這看起來像按鈕」。

但它不會自動獲得：

- `Tab` 聚焦能力
- Enter / Space 觸發能力
- disabled 狀態行為
- 表單 submit 行為
- 瀏覽器預設焦點樣式

所以 ARIA 不是萬能修補工具。  
**能用原生 HTML，就先用原生 HTML。**

### 11. ARIA 是補充，不是替代

理解 ARIA 是什麼之後，下一個重點是：**什麼時候該用，什麼時候不該用**。

最重要的原則是：

> 能用原生 HTML 表達，就優先使用原生 HTML；只有在原生 HTML 語意不足時，才用 ARIA 補充。

#### 11.1 適合使用 ARIA 的情境

| 情境 | 為什麼需要 ARIA | 常見屬性 |
|---|---|---|
| 圖示按鈕沒有可見文字 | 需要補上按鈕名稱 | `aria-label` |
| 自訂選單、分頁、彈窗 | 需要補角色、狀態、關係 | `role`、`aria-expanded`、`aria-selected`、`aria-controls` |
| 表單錯誤提示 | 需要把錯誤訊息和欄位關聯 | `aria-invalid`、`aria-describedby` |
| 動態訊息更新 | 需要通知輔助技術畫面內容改變 | `aria-live` |
| 同頁多個相同 landmark | 需要區分區塊用途 | `aria-label`、`aria-labelledby` |

範例：圖示按鈕如果只有 `×`，視覺上可能知道是關閉，但輔助技術不一定知道完整意思。

```html
<button type="button" aria-label="關閉對話框">
  ×
</button>
```

#### 11.2 不適合使用 ARIA 的情境

| 情境 | 問題 | 更好的做法 |
|---|---|---|
| 原生元素已能表達 | 多加 ARIA 可能反而造成混亂 | 直接用原生元素 |
| 只是想改外觀 | ARIA 不控制樣式 | 使用 CSS |
| 想讓 `div` 變按鈕 | ARIA 不自動補行為 | 使用 `<button>` |
| 想修補錯誤結構 | 錯的語意可能比沒有語意更糟 | 先修 HTML 結構 |

不好的寫法：

```html
<div role="button" onclick="submitForm()">送出</div>
```

如果只是普通表單送出按鈕，應該直接寫：

```html
<button type="submit">送出</button>
```

#### 11.3 ARIA 狀態要和畫面同步

ARIA 不是寫上去就結束。  
如果畫面狀態改變，ARIA 狀態也要同步更新。

例如選單收合時：

```html
<button aria-expanded="false" aria-controls="menu">
  選單
</button>
<nav id="menu" hidden>...</nav>
```

選單展開後，畫面和 ARIA 狀態都要改：

```html
<button aria-expanded="true" aria-controls="menu">
  選單
</button>
<nav id="menu">...</nav>
```

如果畫面已經展開，但 `aria-expanded` 還是 `false`，輔助技術得到的資訊就會和畫面不一致。

#### 11.4 ARIA 的使用原則

- 能用原生 HTML，就不要先用 ARIA。
- 不要加錯 `role`，錯的語意比沒有語意更糟。
- ARIA 狀態要和畫面狀態同步。
- ARIA 不會自動補鍵盤操作。
- ARIA 不會自動補焦點管理。
- ARIA 不會自動讓元素變得可點擊或可提交表單。
- 使用 ARIA 後，更應該用鍵盤和輔助工具思維檢查一次流程。

### 12. 如何快速檢查 HTML 可存取性？

寫完頁面後，可以先用下面流程做基本檢查。

#### 12.1 只用鍵盤操作一次

不要碰滑鼠，只用鍵盤完成主要流程。

檢查問題：

- 能不能從頁首移動到主要功能？
- 操作順序是否合理？
- 焦點位置是否明顯？
- 所有按鈕、連結、表單欄位是否都能操作？
- 有沒有鍵盤進得去、出不來的區域？

#### 12.2 看頁面結構

檢查問題：

- 是否有清楚的 `h1`？
- `h2`、`h3` 是否反映內容層級？
- 頁面主要內容是否放在 `<main>`？
- 導覽是否使用 `<nav>`？
- 資料表格是否有 `<th>` 與必要的 `scope`？

#### 12.3 看表單

檢查問題：

- 每個欄位是否有 label？
- radio / checkbox 群組是否有 `fieldset` 和 `legend`？
- 錯誤訊息是否能和欄位關聯？
- 錯誤提示是否只靠顏色表達？

#### 12.4 看圖片與連結

檢查問題：

- 有資訊的圖片是否有有效 `alt`？
- 裝飾圖片是否用 `alt=""`？
- 連結文字是否能看出目的？
- 是否存在一堆「點這裡」、「更多」、「查看」但沒有上下文的連結？

#### 12.5 使用工具輔助

可以使用瀏覽器開發者工具、Lighthouse 或其他 accessibility checker 做初步檢查。

但要注意：

> 工具可以抓出一部分明顯錯誤，但不能完全判斷內容是否清楚、流程是否合理、替代文字是否真的有意義。

## 常見錯誤整理

### 錯誤 1：畫面看起來像標題，但沒有標題語意

```html
<div class="heading">課程列表</div>
```

建議改成：

```html
<h2>課程列表</h2>
```

### 錯誤 2：用 `div` 假裝按鈕

```html
<div class="btn" onclick="save()">儲存</div>
```

建議改成：

```html
<button type="button">儲存</button>
```

### 錯誤 3：只用 placeholder 當欄位名稱

```html
<input type="text" placeholder="姓名">
```

建議改成：

```html
<label for="name">姓名</label>
<input id="name" name="name" type="text">
```

### 錯誤 4：圖片 `alt` 寫成檔名

```html
<img src="flow.png" alt="flow.png">
```

建議根據圖片資訊改寫：

```html
<img src="flow.png" alt="註冊流程：填寫資料、驗證 Email、完成註冊">
```

### 錯誤 5：表格沒有標頭

```html
<table>
  <tr>
    <td>姓名</td>
    <td>分數</td>
  </tr>
  <tr>
    <td>Amy</td>
    <td>90</td>
  </tr>
</table>
```

建議改成：

```html
<table>
  <caption>學生分數表</caption>
  <thead>
    <tr>
      <th scope="col">姓名</th>
      <th scope="col">分數</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Amy</td>
      <td>90</td>
    </tr>
  </tbody>
</table>
```

### 錯誤 6：用 ARIA 掩蓋錯誤 HTML

```html
<div role="button" onclick="submitForm()">送出</div>
```

如果只是普通按鈕，建議直接使用：

```html
<button type="submit">送出</button>
```

## 常見問法

### 可存取性是不是只和螢幕閱讀器有關？

不是。

它也包含鍵盤操作、色彩與對比、焦點狀態、清楚文字、表單錯誤提示、結構語意等。  
HTML 這一章先聚焦結構與語意基礎。

### ARIA 是什麼？

ARIA 是 Accessible Rich Internet Applications 的縮寫。  
它是一組補充可存取性語意的 HTML 屬性，主要用來讓輔助技術知道元素的角色、名稱、狀態與關係。

簡單說：

- HTML 原生元素本身就有語意，例如 `<button>` 是按鈕。
- ARIA 是在原生語意不夠時，補充輔助技術需要知道的資訊。
- ARIA 不會自動補上鍵盤操作、焦點管理或表單行為。

### 有 ARIA 就不用語意化 HTML 嗎？

不是。

能用正確 HTML 表達時，通常先用 HTML。  
ARIA 是補語意、狀態與關係，不是把錯誤 HTML 變成完整元件的捷徑。

### 圖片 `title` 可以取代 `alt` 嗎？

不能。

`title` 常是滑鼠提示，並不等於圖片替代文字。  
圖片是否需要 `alt` 要根據圖片在當下情境中傳達的資訊判斷。

### `tabindex` 可以解決焦點順序嗎？

可以輔助，但不要濫用正整數 `tabindex`。  
更好的做法通常是讓 HTML 原始順序符合視覺與操作順序。

### `aria-label` 可以取代畫面上的文字嗎？

有時可以，但不要濫用。

如果畫面上本來就可以放清楚文字，通常應優先讓可見文字本身清楚。  
`aria-label` 比較適合用在圖示按鈕、同頁多個同類 landmark，或需要補充可存取名稱的情境。

例如：

```html
<button type="button" aria-label="關閉對話框">×</button>
```

### Lighthouse 分數高就代表可存取性沒問題嗎？

不一定。

工具可以發現部分問題，例如缺少 `alt`、表單沒有 label、對比不足等。  
但工具無法完全判斷連結文字是否真的清楚、`alt` 是否真的描述正確、鍵盤流程是否符合使用者預期。

## 自測問題

1. 為什麼正確 HTML 是可存取性的第一步？
2. 可存取性除了螢幕閱讀器之外，還包含哪些使用情境？
3. 標題階層應該依照什麼安排？
4. 什麼情況圖片可以使用 `alt=""`？
5. 功能型圖片的 `alt` 應該描述外觀還是功能？
6. 為什麼連結文字不建議只寫「點這裡」？
7. 為什麼 placeholder 不能取代 label？
8. `fieldset` 和 `legend` 適合用在哪些表單情境？
9. 表格中的 `th`、`caption` 和 `scope` 有什麼作用？
10. landmark 對輔助技術使用者有什麼幫助？
11. 為什麼不建議用 `div` 假裝按鈕？
12. `tabindex="0"`、`tabindex="-1"`、正整數 `tabindex` 有什麼差別？
13. ARIA 是什麼？
14. ARIA 主要補充哪幾種資訊？
15. ARIA 的基本使用原則是什麼？
16. 為什麼 `role="button"` 不等於真正的 `<button>`？
17. 寫完頁面後，可以用哪些方式快速檢查基本可存取性？

## 答案方向

1. 因為原生 HTML 通常已提供語意、鍵盤行為與瀏覽器支援。
2. 包含鍵盤操作、語音控制、放大工具、小螢幕、弱光環境、搜尋工具理解等。
3. 依內容結構安排，不應只為了字體大小選標題層級。
4. 圖片只是裝飾，拿掉不會少掉重要資訊時。
5. 描述功能，例如「查看購物車」，不是只描述「購物車圖示」。
6. 因為輔助技術可能列出所有連結，使用者需要單獨看連結文字就知道目的。
7. placeholder 會消失，也不是穩定欄位名稱。
8. 適合 radio、checkbox 等多個欄位共同回答同一個問題的情境。
9. `caption` 說明表格主題，`th` 表示標頭，`scope` 表示標頭作用方向。
10. 可以讓使用者快速跳到主要內容、導覽、頁尾等區域。
11. 因為 `div` 沒有原生按鈕的語意、鍵盤行為與表單行為。
12. `0` 進入自然順序，`-1` 可程式聚焦但不進入 Tab 順序，正整數會人工指定順序且容易混亂。
13. ARIA 是 Accessible Rich Internet Applications 的縮寫，是一組補充可存取性語意的 HTML 屬性。
14. 主要補充角色、名稱、狀態與關係，例如 `role`、`aria-label`、`aria-expanded`、`aria-describedby`。
15. 原生 HTML 優先；ARIA 補語意、狀態與關係；狀態要同步；不能取代鍵盤與焦點行為。
16. 因為 `role` 只補輔助技術看到的語意，不會自動補 Enter/Space、焦點、disabled、submit 等行為。
17. 可以用鍵盤操作、檢查標題與 landmark、檢查 label 與錯誤訊息、檢查圖片與連結、再用工具輔助掃描。

## 延伸閱讀

- [第三十八章｜HTML 可存取性基礎](./README.md)
- [第十三章｜語意化標籤](../第十三章_語意化標籤/README.md)
- [第二十七章｜布局標籤](../第二十七章_布局標籤/README.md)
- [第二十四章｜表單標籤](../第二十四章_表單標籤/README.md)
- [MDN：HTML accessibility](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/HTML)
- [MDN：ARIA](https://developer.mozilla.org/docs/Web/Accessibility/ARIA)
- [MDN：WAI-ARIA basics](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Accessibility/WAI-ARIA_basics)
