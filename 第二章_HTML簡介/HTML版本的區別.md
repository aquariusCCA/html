# HTML 版本的區別

> 所屬章節：第二章｜HTML 簡介
> 關鍵字：HTML5、HTML Living Standard、WHATWG、W3C、HTML4、HTML 4.01、XHTML、XML syntax、DOCTYPE、標準模式、怪異模式、版本差異、語意化標籤、表單、多媒體、瀏覽器相容性、舊專案辨識
> 建議回查情境：想快速分清 `HTML5`、`HTML4`、`XHTML`、`HTML Living Standard` 的差別、想知道為什麼現在多半寫 `<!DOCTYPE html>`、想看懂舊教材或舊專案中很長的 `DOCTYPE`

## 本節導讀

這一節要處理的是一個很常見的困惑：
為什麼有時候會看到 `HTML5`，有時候又看到 `HTML4`、`XHTML`、`HTML Living Standard`，甚至 `DOCTYPE` 長得完全不一樣？

這一篇的重點不是要你背歷史細節，而是幫你建立一個**夠清楚、夠實用的辨認框架**。

第一次讀這篇時，請先抓住：

- 現代新頁面通常寫 `<!DOCTYPE html>`。
- 入門學習與新專案主要按現代 HTML 寫法來學。
- `HTML4` 和 `XHTML` 主要是辨認舊教材、舊頁面、舊專案時需要懂。
- 更精確地說，今天的 HTML 標準主線是持續演進的 `HTML Living Standard`。

## 你會在這篇學到什麼

- 為什麼現在入門與新專案通常以現代 HTML / `HTML5` 寫法為主
- `HTML Living Standard`、`HTML5`、`HTML4`、`XHTML` 的基本差異
- 為什麼舊教材會出現很長的 `DOCTYPE`
- `DOCTYPE` 和瀏覽器標準模式有什麼關係
- 廣義 `HTML5` 和狹義 `HTML5` 怎麼分
- 實務上該怎麼看待舊版寫法與相容性

## 30 秒複習入口

- 現代新頁面最常見的宣告是 `<!DOCTYPE html>`。
- `HTML5` 是入門教材常用的現代 HTML 代稱，但更精確的標準主線是 `HTML Living Standard`。
- `HTML4` 和 `XHTML` 主要常見於舊教材、舊頁面、歷史文件與舊專案。
- 舊版 `DOCTYPE` 很長，通常是因為它要指向特定 DTD。
- `XHTML` 偏向用 XML 規則寫 HTML，語法要求更嚴格，但不是現代入門主線。
- 學這一節的重點是**能辨認、能理解、知道新專案該用哪條主線**，不是把舊版宣告整段背起來。

## 先講結論

如果你是現在開始學前端，可以先這樣記：

1. **新頁面主線：使用現代 HTML 寫法，從 `<!DOCTYPE html>` 開始。**
2. **標準脈絡：更精確地說，HTML 現在是持續演進的 `HTML Living Standard`。**
3. **教材用語：很多課程仍會把現代 HTML 叫做 `HTML5`，這在入門溝通中很常見。**
4. **舊版知識：`HTML4` 和 `XHTML` 主要用來辨認舊文件與理解歷史脈絡。**

看到舊版 `DOCTYPE` 時，你只需要知道它大致屬於哪個時代、哪種寫法脈絡；一般新專案不需要照抄。

## 這篇在解決什麼問題？

初學 `HTML` 時，常見問題有幾個：

- 為什麼網路上有不同版本名稱？
- 為什麼有些教材說 `HTML5`，有些文件又說 `HTML Living Standard`？
- 為什麼有些 `DOCTYPE` 很短，有些卻長得很誇張？
- 現在到底該學哪一種寫法？
- `XHTML` 是不是比 `HTML5` 更「標準」？
- 看到舊專案中的 `HTML4` 或 `XHTML` 宣告時，要不要照著寫？

這篇的目標，就是先把版本主線建立出來，避免一開始被歷史細節干擾。

## 先有一個總覽

| 名稱 | 可以先怎麼理解 | 今天的學習定位 |
|---|---|---|
| `HTML4` / `HTML 4.01` | 較早期的重要 HTML 標準版本 | 用來辨認舊教材、舊頁面與歷史寫法 |
| `XHTML` | 用更接近 XML 規則來寫 HTML 的分支脈絡 | 用來理解舊寫法與嚴格語法背景，不是入門主線 |
| `HTML5` | 現代 HTML 的常用稱呼，也是舊版 HTML 到現代 Web 的重要轉折 | 入門教材常用主線名詞 |
| `HTML Living Standard` | 持續演進的 HTML 標準主線 | 更精確的現代標準脈絡 |

## 一句話快速對比

- `HTML4`：偏舊標準。
- `XHTML`：偏嚴格的 XML 式語法脈絡。
- `HTML5`：現代 HTML 寫法的常用名稱。
- `HTML Living Standard`：今天更精確的持續演進標準主線。

## 現代標準脈絡：不要只停在「HTML5 是最新版」

入門時說「現在用 `HTML5`」很實用，但如果要更精確，需要補上一層：

- WHATWG 維護 `HTML Living Standard`，它是持續演進的標準。
- W3C 也已指向 WHATWG HTML Standard 作為目前 HTML 標準主線。
- 因此今天更精確的說法不是「HTML5 之後永遠固定不變」，而是「現代 HTML 按 Living Standard 持續演進」。

對初學者來說，實務記法可以是：

- 寫新頁面：用 `<!DOCTYPE html>`。
- 學教材：看到 `HTML5`，通常可以理解成現代 HTML。
- 查標準：以 WHATWG HTML Living Standard 為主要脈絡。
- 看舊專案：能辨認 `HTML4`、`XHTML` 的舊式宣告即可。

## 為什麼現在多半以現代 HTML / HTML5 為主？

因為現代 HTML 更符合現在網站與應用的需求，常見優勢包括：

- 更清楚的語意化元素，例如 `<header>`、`<nav>`、`<main>`、`<section>`、`<article>`、`<footer>`
- 更實用的表單能力，例如更多 `input` 類型與驗證相關屬性
- 更方便的多媒體支援，例如 `<audio>`、`<video>`
- 更適合現代瀏覽器與行動裝置場景
- 與 CSS、JavaScript、DOM、Web API 的現代開發方式更契合
- `DOCTYPE` 更簡潔，文件起手式更清楚

所以現在學習時，通常不會把重心放在舊版寫法，而是以現代 HTML 為主，再補足對舊版本的辨識能力。

## 現代 HTML 文件宣告

現代最常見的起手式是：

```html
<!DOCTYPE html>
<html lang="zh-Hant">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>
  <body>
  </body>
</html>
```

這裡最關鍵的是：

- `<!DOCTYPE html>`：讓瀏覽器用現代標準模式解析。
- `<meta charset="UTF-8">`：宣告文字編碼。
- `<meta name="viewport">`：讓行動裝置顯示更符合現代響應式需求。
- `<html lang="zh-Hant">`：標示頁面主要語言。

你現在建立新頁面時，優先熟悉這種寫法即可。

## `DOCTYPE` 到底在做什麼？

`DOCTYPE` 是文件類型宣告。

在現代 HTML 中：

```html
<!DOCTYPE html>
```

它的重點不是讓你背版本名稱，而是讓瀏覽器知道應該使用現代標準模式來解析頁面。

如果沒有正確的 `DOCTYPE`，瀏覽器在某些情況下可能進入怪異模式，導致 CSS 排版、盒模型或尺寸計算和現代標準不同。

因此可以先記：

- 現代新頁面：寫 `<!DOCTYPE html>`。
- 舊版頁面：可能會看到很長的 `DOCTYPE`。
- 學習重點：能辨認，不必背舊版宣告全文。

## HTML5 要怎麼理解？

### 1. 它是現代 HTML 的常用稱呼

現在很多教材、課程、文章會說「學 `HTML5`」。
在入門語境裡，這通常就是在說：學現代 HTML，而不是學 `HTML4` 或 `XHTML` 這些舊寫法。

### 2. 它不只是「多幾個新標籤」

很多人會把 `HTML5` 簡化成「新增一些標籤」。
這樣不算錯，但不夠完整。更好的理解是：

- `HTML5` 不只是增加部分標籤。
- 它也補強了語意、表單、多媒體與整體現代 Web 的能力。
- 它讓 HTML 更適合描述現代網站與應用。

### 3. 它的文件宣告很簡潔

```html
<!DOCTYPE html>
```

和舊版 `DOCTYPE` 相比，這個寫法短很多，也更適合作為現代新頁面的起點。

## 狹義與廣義的 HTML5

這裡很容易混淆，所以要特別分開。

### 狹義的 HTML5

指的是 HTML 這個標記語言本身的現代版本脈絡。

在這個角度下，重點會放在：

- HTML 元素
- HTML 屬性
- 文件結構
- 語意化標籤
- 表單與多媒體元素

### 廣義的 HTML5

有些教材或文章會把 `HTML5`、`CSS3`、`JavaScript`，以及一些周邊 Web API，一起放進「HTML5 技術」這個大語境裡。

例如有些人說「HTML5 遊戲」「HTML5 App」，可能不只是指 HTML 標籤，而是在說一整套現代 Web 技術組合。

所以當你看到有人說「學 HTML5」，要先分清他是在指：

- HTML 這個標記語言本身
- 還是整套現代前端技術脈絡

## HTML4 要怎麼看？

`HTML4`，更常見的完整說法是 `HTML 4.01`，是較早期的重要 HTML 標準版本。

今天學它的重點不是拿來當新專案主線，而是：

- 辨認舊教材。
- 看懂舊專案。
- 理解為什麼有些 `DOCTYPE` 這麼長。
- 理解 HTML 標準演進的歷史背景。

### HTML4 的文件宣告範例

```html
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title></title>
  </head>
  <body>
  </body>
</html>
```

你不用把這段背起來。
你只要知道：**這種比較長、帶有 `PUBLIC`、`DTD`、`HTML 4.01` 的宣告，多半不是現代新專案的預設主線。**

### HTML4 常見特徵

- `DOCTYPE` 通常比較長。
- 常會看到 `HTML 4.01 Strict`、`Transitional` 等字樣。
- 舊教材可能會使用較多偏展示用途的寫法。
- 現代語意化元素和多媒體元素不像現代 HTML 那樣完整。

## XHTML 要怎麼看？

`XHTML` 可以先理解成：**用更接近 XML 的規則來寫 HTML**。

它和 `HTML4` 的關係很近，但重點在於語法要求更嚴謹，例如：

- 標籤要正確閉合。
- 元素嵌套順序要更嚴格。
- 屬性值通常要加引號。
- 文件可能使用 XML 命名空間。

### XHTML 的文件宣告範例

```html
<!DOCTYPE html
PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="zh">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title></title>
  </head>
  <body>
  </body>
</html>
```

同樣地，這段不需要硬背。

你只要能辨認：

- 宣告通常比較長。
- 常會看到 `XHTML`、`DTD`、`xmlns`、`xml:lang` 等字樣。
- 語法要求通常比較嚴格。
- 它不是現代入門與新專案的主線。

### XHTML 不是「更高級的 HTML5」

初學者有時會誤以為 `XHTML` 比 `HTML5` 更嚴格，所以一定更好。
這個理解不完整。

更精確地說：

- `XHTML` 是偏 XML 語法的歷史脈絡。
- 現代 HTML 本身也有清楚的規則，不是隨便寫。
- 新專案一般不需要為了「看起來嚴格」而改用 XHTML。
- 學習主線仍應放在現代 HTML 與 Living Standard 脈絡。

## HTML4、XHTML、HTML5、Living Standard 對照表

| 項目 | HTML4 | XHTML | HTML5 / 現代 HTML | HTML Living Standard |
|---|---|---|---|---|
| 大致定位 | 舊 HTML 標準 | XML 式 HTML 脈絡 | 現代 HTML 的常用稱呼 | 持續演進的標準主線 |
| 新專案是否主線 | 否 | 否 | 是 | 是 |
| `DOCTYPE` | 較長 | 較長 | `<!DOCTYPE html>` | `<!DOCTYPE html>` |
| 語法重點 | 舊標準規範 | XML 式嚴格語法 | 語意、表單、多媒體、現代 Web | 持續更新的 HTML 規範 |
| 學習目的 | 辨認舊文件 | 辨認舊文件與 XML 語法背景 | 入門與實作主線 | 精確理解現代標準 |

## 看到不同 `DOCTYPE` 怎麼判斷？

可以先用這張表快速辨認：

| 看到的宣告特徵 | 大致判斷 |
|---|---|
| `<!DOCTYPE html>` | 現代 HTML |
| `HTML 4.01` | HTML4 脈絡 |
| `XHTML 1.0` | XHTML 脈絡 |
| `PUBLIC`、`DTD`、很長的 URL | 舊版 HTML 或 XHTML 宣告 |
| `strict.dtd` | 舊版 Strict 類型宣告 |
| `transitional.dtd` | 舊版 Transitional 類型宣告 |

實務上：

- 看懂它屬於哪一類就好。
- 不要把舊版宣告直接當成新頁面的模板。
- 新頁面優先使用 `<!DOCTYPE html>`。

## 相容性要怎麼理解？

舊教材常會提到：某些 `HTML5` 新特性在早期瀏覽器，尤其是舊版 `IE`，可能支援不一致。
這種說法有歷史背景，並不是完全沒有意義。

但以現在的學習角度來看，你更應該抓住的是：

- 新特性要考慮瀏覽器支援情況。
- 實務上應根據專案需求查相容性。
- 不需要一開始就去背一整張舊瀏覽器支援表。
- 如果專案需要支援很舊的瀏覽器，才需要特別研究舊版限制與替代方案。

也就是說，入門時不要被舊版相容性嚇住；先把現代 HTML 主線學穩，再依專案需求補查支援狀況。

## 三個版本怎麼記最省力？

你可以直接記成下面這樣：

- `HTML4`：偏舊標準。
- `XHTML`：偏嚴格 XML 語法脈絡。
- `HTML5`：現代 HTML 的常用名稱。
- `HTML Living Standard`：今天更精確的標準主線。

如果是現在開始學前端：

- 把現代 HTML 當主線。
- 寫新頁面時使用 `<!DOCTYPE html>`。
- 把 `HTML4`、`XHTML` 當辨識舊文件的背景知識。
- 需要查標準時，優先查 WHATWG HTML Standard。

## 常見混淆點

### `HTML5` 不只是「多幾個標籤」

它代表的是現代 HTML 的重要轉折，而不只是標籤數量變多。

### `HTML5` 不等於標準永遠停在一個固定版本

今天更精確的標準脈絡是 `HTML Living Standard`，也就是持續演進的標準。

### 廣義 HTML5 不等於狹義 HTML5

有時候別人說的 `HTML5`，其實是指整套現代前端技術脈絡，不一定只是在講 HTML 標準本身。

### `XHTML` 不是單純夾在 `HTML4` 和 `HTML5` 中間的一版

它更像是一條強調 XML 式嚴格語法的分支脈絡。

### `DOCTYPE` 短不代表比較隨便

`<!DOCTYPE html>` 很短，但它是現代 HTML 的標準起手式，不是省略或偷懶。

### 看到舊版 `DOCTYPE` 不代表今天要照抄

你需要的是理解與辨認，而不是把舊專案寫法原封不動搬到現代專案。

### XHTML 的嚴格語法不代表新專案應該優先使用 XHTML

現代 HTML 同樣可以寫得清楚、合法、可維護。
新專案通常以現代 HTML / Living Standard 脈絡為主。

## 小練習

請判斷下面宣告比較像哪一種脈絡：

### 例子 1

```html
<!DOCTYPE html>
```

答案：現代 HTML / HTML5 / Living Standard 脈絡。

### 例子 2

```html
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
```

答案：HTML4 脈絡。

### 例子 3

```html
<!DOCTYPE html
PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
```

答案：XHTML 脈絡。

## 自測問題

1. 現代新頁面最常見的 `DOCTYPE` 怎麼寫？
2. 為什麼說今天不應只停在「HTML5 是最新版」這種說法？
3. `HTML Living Standard` 和 `HTML5` 可以怎麼區分？
4. `HTML4`、`XHTML` 最適合怎麼快速區分？
5. 為什麼舊版 `DOCTYPE` 通常比較長？
6. 廣義與狹義的 `HTML5` 差別是什麼？
7. 為什麼 `XHTML` 不是現代入門主線？
8. 看到舊版 `DOCTYPE` 時，實務上應該怎麼處理？

## 一句話抓核心

- **現在寫新頁面通常使用 `<!DOCTYPE html>` 與現代 HTML 寫法；`HTML5` 是常見教材名稱，而更精確的標準脈絡是持續演進的 `HTML Living Standard`；`HTML4` 和 `XHTML` 則主要用來理解歷史與辨認舊文件。**

## 官方參考

- [W3C HTML](https://www.w3.org/html/Overview.html)：W3C 指向 WHATWG HTML Standard 作為目前 HTML 標準主線。
- [WHATWG HTML Standard](https://html.spec.whatwg.org/multipage/)：HTML Living Standard。
- [WHATWG HTML Standard：Is this HTML5?](https://html.spec.whatwg.org/dev/introduction.html#is-this-html5)：說明 `HTML5` 這個詞在現代 Web 語境中的用法。
- [W3C 與 WHATWG 共同維護單一 HTML / DOM 規格的公告](https://www.w3.org/news/2019/w3c-and-the-whatwg-have-just-signed-an-agreement-to-collaborate-on-the-development-of-a-single-version-of-the-html-and-dom-specifications/)：說明雙方合作維護單一規格脈絡。

## 延伸閱讀

- [網頁和網站](./網頁和網站.md)
- [HTML骨架](./HTML骨架.md)
- [標籤組成和關係](./標籤組成和關係.md)
- [返回第二章：HTML 簡介](./README.md)
- [返回首頁](../README.md)
