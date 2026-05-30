# HTML4 與 XHTML 文件宣告補充

## 學習目標

讀完這篇補充筆記，你應該能夠：

- 看懂 HTML4 與 XHTML 文件宣告的大致樣貌。
- 理解舊版文件宣告為什麼比 HTML5 複雜。
- 知道現代初學與一般新專案通常優先使用 HTML5 宣告。

## 這篇為什麼是補充

如果你正在學現代 HTML，主線應該先掌握 HTML5 的基本骨架：

```html
<!DOCTYPE html>
```

HTML4 與 XHTML 屬於較舊的文件宣告形式。它們在閱讀舊教材、維護舊網站、理解版本演進時仍然有參考價值，但初學時不需要把它們當成主要寫法背熟。

## HTML4 文件宣告

HTML4 的文件宣告比 HTML5 長很多，會明確指定 DTD。

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

這段宣告中的重點是：

| 部分 | 說明 |
| --- | --- |
| `DOCTYPE` | 宣告文件類型 |
| `HTML 4.01` | 表示使用 HTML4.01 相關規範 |
| `DTD` | 用來描述該版本 HTML 的文件類型定義 |
| `strict.dtd` | 表示使用較嚴格的 HTML4 DTD |

和 HTML5 相比，HTML4 的宣告更長，也更依賴版本與 DTD 資訊。

## XHTML 文件宣告

XHTML 是把 HTML 以 XML 規則重新定義的版本，因此它的寫法更嚴謹。

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

這段裡可以注意幾個特徵：

| 部分 | 說明 |
| --- | --- |
| `XHTML 1.0 Transitional` | 表示使用 XHTML 1.0 過渡型規範 |
| `xmlns` | 宣告 XML 命名空間 |
| `xml:lang="zh"` | 以 XML 方式宣告語言 |
| `meta http-equiv` | 舊式字元編碼宣告寫法 |

初學時不用急著深入 XML 規則，但要知道 XHTML 的寫法通常比一般 HTML 更嚴格。

## 和 HTML5 宣告比較

現代 HTML5 的宣告非常簡潔：

```html
<!DOCTYPE html>
```

可以用下面表格快速比較：

| 版本 | 宣告特色 | 初學建議 |
| --- | --- | --- |
| HTML4 | 宣告長，需要指定 DTD | 看得懂即可，不作為新專案主線 |
| XHTML | 接近 XML 規則，寫法較嚴謹 | 維護舊文件時再深入 |
| HTML5 | 宣告簡潔，現代網頁常用 | 新專案優先使用 |

## 實務判斷

一般現代新專案，直接使用 HTML5 宣告：

```html
<!DOCTYPE html>
<html lang="zh-Hant">
  <head>
    <meta charset="UTF-8">
    <title>文件標題</title>
  </head>
  <body>
    <p>頁面內容</p>
  </body>
</html>
```

只有在以下情況，你才比較需要回頭理解 HTML4 或 XHTML：

- 維護很舊的網站。
- 閱讀舊教材或舊專案程式碼。
- 需要理解 HTML 文件宣告的歷史演進。
- 專案本身仍有舊版規範或舊系統相容需求。

## 常見錯誤

### 錯誤一：新專案仍複製舊版宣告

如果你正在建立一般現代 HTML 頁面，不需要刻意複製 HTML4 或 XHTML 的長宣告。

建議使用：

```html
<!DOCTYPE html>
```

### 錯誤二：只背宣告，不理解用途

文件宣告的目的，是告訴瀏覽器用哪一種規則理解這份文件。比起背完整舊宣告，更重要的是知道現代 HTML5 為什麼簡化成 `<!DOCTYPE html>`。

## 重點整理

- HTML4 與 XHTML 的文件宣告比 HTML5 複雜，主要是因為它們會指定更明確的 DTD 或 XML 相關資訊。
- XHTML 寫法較嚴謹，常見於舊教材或舊專案脈絡。
- 現代 HTML 新專案通常使用 HTML5 宣告 `<!DOCTYPE html>`。
- 這些舊宣告適合作為補充知識，用來看懂舊文件與理解版本演進。

## 自我檢查

- 你能看出 HTML4 宣告和 HTML5 宣告哪個更簡潔嗎？
- 你知道 XHTML 為什麼會出現 `xmlns` 嗎？
- 建立現代新 HTML 頁面時，你會優先使用哪一種宣告？
