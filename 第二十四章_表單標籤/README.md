# 第三十四章｜`script` 與 `noscript` 標籤

> 章節定位：理解 HTML 如何載入與支援 JavaScript，以及腳本不可用時如何提供替代內容  
> 建議閱讀方式：先理解 `<script>` 的基本載入方式，再分清傳統腳本、`defer`、`async`、`type="module"` 與 `<noscript>` 的用途

## 本章在學什麼

這一章整理 HTML 中和 JavaScript 載入直接相關的標籤。

重點不是學 JavaScript 語法，而是理解：

- `<script>` 可以放內嵌程式，也可以透過 `src` 載入外部 JavaScript 檔案。
- 腳本的「下載」和「執行」是兩件不同的事。
- 腳本放置位置會影響 HTML 解析、DOM 操作時機與頁面可用性。
- 傳統腳本可能阻塞 HTML 解析，因此現代頁面常搭配 `defer`、`async` 或模組腳本。
- `defer` 和 `async` 都能改善傳統腳本阻塞問題，但執行時機與順序保證不同。
- `type="module"` 是現代 JavaScript 模組的載入方式，預設具有類似 `defer` 的延後執行特性。
- `nomodule` 可作為舊瀏覽器的相容性策略。
- `<noscript>` 只能處理腳本被停用或不支援的情境，不是 JavaScript 錯誤處理工具。

## 本章與整體地圖的關係

- 前置知識：前面已學過 HTML 骨架、路徑、表單與互動元素。
- 這章的核心任務：把 HTML 文件與 JavaScript 載入流程接起來。
- 讀完後通常接：後續學 DOM、事件、表單互動、動態內容時，都會回到這章確認腳本如何被載入與執行。

## 建議閱讀順序

1. [`script` 與 `noscript` 標籤](./第34章_script與noscript標籤.md)

## 本章所有小節

- [`script` 與 `noscript` 標籤](./第34章_script與noscript標籤.md)

## 適合快速回查的主題

- `<script>` 是做什麼的
- 內嵌腳本和外部腳本有什麼差別
- `<script src>` 怎麼載入外部 JavaScript
- 腳本的下載和執行有什麼不同
- 為什麼傳統腳本可能阻塞 HTML 解析
- 為什麼腳本常放在 `body` 結尾
- 為什麼現代寫法常在 `<head>` 使用 `defer`
- `defer` 和 `async` 差在哪
- 什麼情況適合使用 `async`
- `type="module"` 有什麼特點
- `nomodule` 是什麼相容性策略
- `<noscript>` 適合處理什麼情境
- `<noscript>` 不能處理哪些 JavaScript 錯誤

## 高頻回查入口

- 想快速知道 JavaScript 檔案怎麼接到 HTML 時，看：[`script` 與 `noscript` 標籤](./第34章_script與noscript標籤.md)
- 想理解腳本為什麼會影響頁面解析時，看：[`script` 與 `noscript` 標籤](./第34章_script與noscript標籤.md)
- 想分清 `defer` 和 `async` 時，看：[`script` 與 `noscript` 標籤](./第34章_script與noscript標籤.md)
- 想知道現代前端專案為什麼使用 `type="module"` 時，看：[`script` 與 `noscript` 標籤](./第34章_script與noscript標籤.md)
- 想確認 `<noscript>` 的用途與限制時，看：[`script` 與 `noscript` 標籤](./第34章_script與noscript標籤.md)

## 易混淆主題

### 1. 載入腳本 vs 執行腳本

下載完成不代表一定立刻執行。

例如：

- `defer` 腳本可以先下載，但會等 HTML 解析完成後再執行。
- `async` 腳本下載完成後會盡快執行。
- `type="module"` 腳本預設具有類似 `defer` 的延後執行特性。

### 2. 傳統腳本 vs `defer`

傳統外部腳本：

```html
<script src="./main.js"></script>
```

瀏覽器解析到它時，可能會先下載並執行腳本，再繼續解析後面的 HTML。

使用 `defer`：

```html
<script src="./main.js" defer></script>
```

腳本下載不阻塞 HTML 解析，並會在 HTML 解析完成後執行。

### 3. `defer` vs `async`

- `defer`：下載不阻塞解析，HTML 解析完成後執行，保留腳本順序。
- `async`：下載不阻塞解析，下載完成後盡快執行，不保證腳本順序。

如果腳本之間有依賴順序，通常選 `defer`；如果是獨立第三方腳本，才比較適合考慮 `async`。

### 4. `async` 的不阻塞

`async` 主要是「下載過程不阻塞 HTML 解析」。

但是腳本真正執行時，瀏覽器仍需要先執行腳本。  
如果當下 HTML 還沒解析完，仍可能短暫中斷 HTML 解析。

### 5. `type="module"` vs 傳統腳本

模組腳本可以使用 `import` / `export`，並且有自己的作用域。  
它不像傳統腳本一樣，直接把頂層變數掛到全域環境。

一般情況下，`type="module"` 本身就有類似 `defer` 的延後執行特性，不需要再特別加 `defer`。

### 6. `<noscript>` vs 錯誤提示

`<noscript>` 只處理腳本停用或瀏覽器不支援腳本的情境。

它不能處理：

- JavaScript 語法錯誤
- JavaScript 執行錯誤
- API 請求失敗
- 套件載入失敗
- 邏輯錯誤造成的畫面異常

這些情況需要 JavaScript 本身的錯誤處理、狀態設計或前端框架的錯誤邊界處理。

## 實務選擇簡表

| 情境 | 常見寫法 | 說明 |
|---|---|---|
| 一般自己寫的主程式 | `<script src="./main.js" defer></script>` | 常見穩定寫法，適合依賴 DOM 的腳本 |
| 多個有依賴順序的腳本 | 多個 `defer` 腳本 | 會保留原本出現順序 |
| 統計、廣告、第三方獨立腳本 | `async` | 適合不依賴其他腳本、也不要求順序的腳本 |
| 現代前端專案入口 | `<script type="module" src="./main.js"></script>` | 支援模組化，常見於 Vite、Webpack 等工具產生的入口 |
| 舊瀏覽器備援 | `nomodule` | 搭配 `type="module"` 提供相容性處理 |
| 腳本不可用時的提示 | `<noscript>...</noscript>` | 提供 JavaScript 被停用或不支援時的替代內容 |

## 本章讀完後要能回答

- `<script>` 可以用哪兩種方式引入 JavaScript？
- 為什麼傳統 `<script src>` 可能阻塞 HTML 解析？
- 腳本放在 `body` 結尾和使用 `defer` 有什麼差別？
- `defer` 的下載與執行時機是什麼？
- `async` 為什麼不適合有依賴順序的腳本？
- `type="module"` 和傳統腳本有什麼不同？
- `nomodule` 是用來解決什麼問題？
- `<noscript>` 能處理哪些情境？
- `<noscript>` 不能處理哪些 JavaScript 問題？

## 導航

- [返回首頁](../README.md)
