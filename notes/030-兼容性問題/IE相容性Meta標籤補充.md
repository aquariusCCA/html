---
source_atomic:
  - atomic/030-兼容性問題/01-瀏覽器渲染模式-meta-標籤.md
topics: [舊版 IE, X-UA-Compatible, 雙核瀏覽器, renderer meta, 相容性模式]
summary: "說明 IE 與雙核瀏覽器的渲染模式提示標籤，幫助判斷舊專案 head 設定的用途與限制。"
---

# IE 與雙核瀏覽器的相容性 Meta 標籤

## 學習目標

讀完這篇筆記，你應該能夠：

- 理解 `<meta http-equiv="X-UA-Compatible" content="IE=Edge">` 的用途與限制。
- 理解 `<meta name="renderer" content="webkit">` 的用途與限制。
- 看到舊專案 `<head>` 裡這兩個標籤時，知道它們在解決什麼問題，以及現在是否還需要。

## 問題情境

如果你維護一個有些年頭的網站，或是政府機關、企業內部系統，打開原始碼常常會在 `<head>` 看到類似這樣的標籤：

```html
<meta http-equiv="X-UA-Compatible" content="IE=Edge">
<meta name="renderer" content="webkit">
```

這兩行看起來既不是樣式也不是腳本，卻被放在每個頁面最前面。如果不知道它們的用途，遇到「同一個頁面在某些舊瀏覽器排版跑掉」的問題時，就不知道該怎麼排查；也可能會誤以為這只是過時、可以隨意刪除的程式碼。

## 一句話理解

這兩個 meta 標籤，都是在告訴瀏覽器「請用哪一種引擎、哪一種文檔模式來渲染這個頁面」，目的是避免瀏覽器自作主張切換到舊的相容模式。

## 概念拆解

### 為什麼 IE 需要 X-UA-Compatible

IE 瀏覽器內部會依據各種條件（例如網域是否在「相容性檢視清單」中）決定要用哪一個版本的引擎來解析 HTML/CSS，這個過程開發者無法直接控制。如果 IE 切換到舊版文檔模式，現代的 CSS 與 HTML5 寫法可能完全失效或顯示異常。

`<meta http-equiv="X-UA-Compatible" content="IE=Edge">` 的作用是明確告訴 IE：「不要管相容性設定，永遠用你目前安裝版本中最新的渲染引擎來解析這個頁面」。

要注意的是，「最新引擎」仍然是「該使用者安裝的 IE 版本」的最新引擎——IE8 使用者的 Edge 模式跟 IE11 使用者的 Edge 模式並不是同一回事。這個標籤只能避免「被降級到更舊的模式」，不能保證所有 IE 版本的渲染結果完全一致。

### 為什麼會有 renderer 這個標籤

部分中國大陸的瀏覽器（例如早期的 360 安全瀏覽器、搜狗高速瀏覽器）內建了兩套渲染引擎：一套是現代的 WebKit/Blink 核心，另一套是相容舊網站用的 IE Trident 核心，這類瀏覽器稱為「雙核瀏覽器」。

這類瀏覽器預設可能用 Trident 核心開啟頁面，導致現代 CSS3、HTML5 標籤在這些瀏覽器上顯示不正常，即使在 Chrome、Firefox 上完全正常。

`<meta name="renderer" content="webkit">` 是這類雙核瀏覽器自行定義（非 W3C 標準）的提示，作用是請瀏覽器「優先用 WebKit/Blink 核心開啟這個頁面」。

這同樣不是強制指令：是否真的切換核心、支援到什麼程度，取決於瀏覽器本身的實作與版本；標準瀏覽器（Chrome、Firefox、Safari 等）會直接忽略這個標籤。

## 範例拆解

```html
<!-- 設置 IE 總是使用最新的文檔模式進行渲染 -->
<meta http-equiv="X-UA-Compatible" content="IE=Edge">

<!-- 優先使用 webkit 內核進行渲染，針對 360 等雙核瀏覽器 -->
<meta name="renderer" content="webkit">
```

- `http-equiv="X-UA-Compatible"`：把這個 meta 標籤當作一個 HTTP 回應標頭來解讀，等同於伺服器送出 `X-UA-Compatible: IE=Edge`；若使用 meta 寫法，實務上應放在 `<head>` 很前面，避免瀏覽器已經開始用其他文檔模式解析頁面。
- `content="IE=Edge"`：要求 IE 使用目前安裝版本中最高可用的文檔模式，而不是相容性檢視模式。
- `name="renderer"`：標記這是給雙核瀏覽器看的渲染引擎提示，標準瀏覽器會忽略這個 `name`。
- `content="webkit"`：請瀏覽器優先用 WebKit/Blink 核心渲染，而不是 IE Trident 核心。

## 實務意義

在目前的開發環境中，多數使用者已不再使用 IE，雙核瀏覽器也逐漸式微，這兩個標籤對絕大多數新專案已經不是必要設定。但你仍然可能在以下情境遇到它們：

- 維護政府機關、銀行、醫院等對瀏覽器相容性要求嚴格、仍要支援舊版 IE 的系統。
- 接手歷史悠久的企業內部系統或舊版 CMS 模板。
- 閱讀一些較舊的教學文章或範本，裡面把這些標籤當作「標準頭部設定」直接複製貼上。

理解這兩個標籤的用途後，遇到「同一頁面在舊版 IE 或雙核瀏覽器上跑版，但在 Chrome 正常」時，可以多檢查 `<head>` 裡是否缺少或誤寫這些標籤，作為排查方向之一；但不能把它們當成「解決所有相容性問題」的萬靈丹。

## 常見錯誤

- **以為加了 `IE=Edge` 就能讓所有 IE 版本顯示一致**：實際上「Edge 模式」是相對於「該使用者安裝的 IE 版本」而言的最新模式，IE8 與 IE11 的 Edge 模式仍然是兩種不同的渲染能力。這個標籤只能避免被降級到更舊的相容模式，不能消除不同 IE 版本之間本來就存在的差異。
- **把 `renderer` 當成標準屬性，期待所有瀏覽器都會反應**：`renderer` 是少數雙核瀏覽器自行定義的非標準提示，標準瀏覽器（Chrome、Firefox、Safari）以及大多數行動裝置瀏覽器都會直接忽略它；如果頁面在 Chrome 上有顯示問題，加這個標籤不會有任何幫助。

## 重點整理

- `<meta http-equiv="X-UA-Compatible" content="IE=Edge">`：要求 IE 不要降級到相容性檢視，使用目前版本中最新的文檔模式。
- `<meta name="renderer" content="webkit">`：提示部分雙核瀏覽器優先使用 WebKit/Blink 核心，而不是 IE Trident 核心。
- 兩者都只是「提示」或「請求」，不是保證；也都只對特定瀏覽器有意義，標準瀏覽器會忽略它們。
- 現代專案多數不需要主動加上這兩個標籤，但維護舊系統時應該認得它們、知道它們在解決什麼問題。

## 自我檢查

1. 如果一個頁面在 IE11 與 IE8 上都加了 `X-UA-Compatible: IE=Edge`，這兩台瀏覽器的渲染結果是否一定完全相同？為什麼？
2. 一個只在 Chrome 上測試、且 Chrome 顯示正常的頁面，加上 `<meta name="renderer" content="webkit">` 之後，畫面會不會因此產生變化？
