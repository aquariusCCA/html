# 第三十三章｜`head` 補充標籤

> 章節定位：補齊 HTML 文件頭部中「描述文件、連接外部資源、設定 URL 解析基準」的觀念  
> 建議閱讀方式：先分清 `<meta>`、`<title>`、`<link>`、`<base>` 各自負責的事情，再回頭看完整 `head` 範例  
> 適合回查情境：CSS 如何接進 HTML、favicon 怎麼設定、`rel` / `href` 如何分工、`preconnect` / `preload` 差異、`<base>` 為什麼會影響相對 URL

## 本章在學什麼

這一章整理 HTML 文件中 `<head>` 區域的補充標籤，重點放在 `<link>` 和 `<base>`。

前面已經學過：

- `<meta>`：補充文件資訊，例如字元編碼、viewport、description 等。
- `<title>`：設定頁面標題，常出現在瀏覽器分頁、書籤與搜尋結果中。

這一章補的是：

- `<link>` 如何把 CSS、favicon、預連線、預載資源等外部資源和目前 HTML 文件建立關係。
- `rel` 如何描述「目前文件」和「外部資源」之間的關係。
- `href` 如何指定外部資源的位置。
- `type`、`sizes`、`as`、`crossorigin`、`media` 等屬性在什麼情境下會出現。
- 多份 CSS 載入時，為什麼「後面的樣式可能覆蓋前面」，但不能簡化成「後寫一定贏」。
- favicon 的基本寫法與補充格式。
- `preconnect` 與 `preload` 的差異，以及為什麼不要濫用資源提示。
- `<base>` 如何改變整份文件中相對 URL 的解析基準。
- `<base target>` 如何影響連結預設開啟方式。
- 為什麼 `<base>` 雖然有用，但實務上要非常小心。

## 本章核心觀念

這一章可以用下面這條線理解：

```text
<head>
  ↓
描述文件、連接資源、設定瀏覽器解析文件時需要知道的資訊
  ↓
<link>：這份 HTML 文件和外部資源有什麼關係？
<base>：這份 HTML 文件裡的相對 URL 要以哪裡為基準？
```

最重要的不是背標籤，而是能判斷：

```text
rel：這個資源和目前文件是什麼關係？
href：這個資源在哪裡？
base：相對 URL 要從哪個基準開始解析？
```

## 本章與整體地圖的關係

- 前置知識：第二章已學過 HTML 骨架，第八章已學過 `meta`，第九章已學過 `title`。
- 這章的核心任務：補完整份 HTML 文件頭部的資源連接觀念。
- 讀完後通常接：`script` / `noscript`、響應式圖片、結構化資料、SEO、瀏覽器資源載入與前端效能優化。

## 建議閱讀順序

1. 先看 [`head` 補充標籤](./第33章_head補充標籤.md)
2. 先掌握 `<link rel="stylesheet">` 和 `<link rel="icon">`
3. 再理解 `preconnect` / `preload` 屬於資源載入提示
4. 最後再看 `<base>`，因為它是全局設定，對相對 URL 的影響比較大

## 本章所有小節

- [`head` 補充標籤](./第33章_head補充標籤.md)

## 學完本章後應該要會

- 說明 `<head>` 不是畫面上的頁首，而是 HTML 文件的描述區。
- 分清 `<meta>`、`<title>`、`<link>`、`<base>` 的職責。
- 寫出 CSS 樣式表的基本連接方式。
- 寫出 favicon 的基本設定方式。
- 說明 `rel` 和 `href` 的差別。
- 分辨 `<link>` 和 `<a>` 的用途差異。
- 初步理解 `preconnect` 是提前建立連線，`preload` 是提前載入重要資源。
- 知道 `preload` 通常需要搭配 `as` 指定資源類型。
- 說明多份 CSS 的覆蓋不是只看順序，還會受到 CSS 權重與來源規則影響。
- 說明 `<base href>` 會影響整份文件中的相對 URL。
- 知道 `<base target>` 會改變沒有明確設定 `target` 的連結開啟方式。
- 知道 `target="_blank"` 建議搭配 `rel="noopener"`。
- 判斷什麼情況下不應該隨便使用 `<base>`。

## 適合快速回查的主題

- `<head>` 裡通常放什麼
- `<link>` 是做什麼的
- `<link>` 和 `<a>` 有什麼差別
- `rel`、`href`、`type`、`sizes`、`as`、`crossorigin` 的用途
- `rel="stylesheet"` 如何載入 CSS
- 多份 CSS 的載入順序與覆蓋規則
- favicon 怎麼寫
- `preconnect` 和 `preload` 差在哪
- `preload` 為什麼通常要寫 `as`
- `<base>` 會影響哪些相對路徑
- `<base target>` 會影響什麼
- 為什麼 `<base>` 通常不建議隨便使用

## 高頻回查入口

- 想快速知道 CSS 和 favicon 怎麼放進 HTML 時，看：[`head` 補充標籤](./第33章_head補充標籤.md)
- 想分清 `<link>` 和 `<a>` 的差別時，看：[`head` 補充標籤](./第33章_head補充標籤.md)
- 想確認 `rel` 和 `href` 怎麼分工時，看：[`head` 補充標籤](./第33章_head補充標籤.md)
- 想知道 `preconnect` 和 `preload` 差在哪時，看：[`head` 補充標籤](./第33章_head補充標籤.md)
- 想確認 `preload` 的 `as`、`type`、`crossorigin` 怎麼理解時，看：[`head` 補充標籤](./第33章_head補充標籤.md)
- 想確認 `<base>` 為什麼會讓相對路徑變得難查時，看：[`head` 補充標籤](./第33章_head補充標籤.md)
- 想知道 `<base target>` 和單一 `<a target>` 的差異時，看：[`head` 補充標籤](./第33章_head補充標籤.md)

## 易混淆主題

### `<head>` vs `<header>`

- `<head>`：HTML 文件的描述區，通常不直接顯示在頁面上。
- `<header>`：頁面或區塊的頁首內容，會放在 `<body>` 裡，通常會顯示在畫面上。

### `<link>` vs `<a>`

- `<link>`：描述目前文件和外部資源的關係，通常放在 `<head>`。
- `<a>`：建立使用者可以點擊的超連結，通常放在 `<body>`。

### `rel` vs `href`

- `rel`：描述關係，例如 `stylesheet`、`icon`、`preconnect`、`preload`。
- `href`：指定資源位置，例如 `./css/main.css`、`/favicon.ico`。

### `preconnect` vs `preload`

- `preconnect`：提前建立連線，還沒有指定要下載哪個具體檔案。
- `preload`：提前下載指定的重要資源，通常要搭配 `as` 說明資源類型。

### CSS 載入順序 vs CSS 覆蓋結果

- 樣式寫在後面，通常有機會覆蓋前面。
- 但實際結果還會受到選擇器權重、來源順序、繼承、`!important` 等因素影響。
- 所以不能簡化成「後寫一定贏」。

### `<base>` vs 一般相對路徑

- 一般相對路徑：依照目前文件所在位置解析。
- `<base href>`：改變整份文件中相對 URL 的解析基準。
- 因為 `<base>` 是全局設定，所以使用前要確認整個頁面有哪些相對 URL。

### `<base target>` vs `<a target>`

- `<base target>`：設定整份文件中連結的預設開啟目標。
- `<a target>`：只設定單一連結的開啟目標。
- 如果只是某個外部連結要開新分頁，通常直接寫在該 `<a>` 上即可。

## 本章實務提醒

- 初學階段先掌握 `<link rel="stylesheet">`、`<link rel="icon">`、`rel`、`href` 即可。
- `preconnect`、`preload` 屬於效能優化，不要看到就亂加。
- `preload` 應該只用在真的重要、很快會用到的資源。
- `<base>` 不常用，且容易影響整份文件的相對 URL，實務上要謹慎。
- 使用 SPA、前端路由、Vite、Vue、React 或其他建置工具時，不要隨便手動加 `<base>`，應先理解專案的部署路徑設定。
- `target="_blank"` 開新分頁時，建議搭配 `rel="noopener"`，避免新頁面透過 `window.opener` 影響原頁面。

## 自我檢查

讀完本章後，可以用下面問題確認是否真的理解：

1. `<head>` 和 `<header>` 差在哪？
2. `<link>` 的核心作用是什麼？
3. `rel` 和 `href` 分別在描述什麼？
4. CSS 樣式表最常見的 `<link>` 寫法是什麼？
5. favicon 可以如何設定？
6. `<link>` 和 `<a>` 都有 `href`，差別在哪？
7. `preconnect` 和 `preload` 的差異是什麼？
8. `preload` 為什麼常常需要搭配 `as`？
9. 多份 CSS 中，後面的 CSS 一定會覆蓋前面的 CSS 嗎？
10. `<base href>` 會影響哪些相對 URL？
11. `<base target="_blank">` 會造成什麼效果？
12. 為什麼 `<base>` 不適合隨便加？

## 導航

- [返回 HTML 學習首頁](../README.md)
