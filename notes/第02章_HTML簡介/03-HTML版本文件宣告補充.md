<!--
source_atomic:
  - atomic/第02章_HTML簡介/05-HTML版本文件宣告比較.md
-->

# HTML 版本文件宣告補充

## 學習目標

讀完這篇補充筆記，你應該能夠：

- 認識 HTML5、HTML4 與 XHTML 文件宣告的差異。
- 知道現代 HTML 文件通常使用簡潔的 HTML5 宣告。
- 把舊版本宣告當成閱讀歷史資料時的對照，而不是新專案的預設寫法。

## 一句話理解

文件宣告用來告訴瀏覽器應該用哪種規則解析文件；現代 HTML 頁面通常使用 `<!DOCTYPE html>`。

## HTML5 文件宣告

HTML5 的文件宣告非常簡潔：

```html
<!DOCTYPE html>
<html lang="zh-Hant">
  <head>
    <meta charset="UTF-8">
    <title>Document</title>
  </head>
  <body>

  </body>
</html>
```

這裡最重要的是第一行：

```html
<!DOCTYPE html>
```

它不是 HTML 標籤，而是文件類型宣告。它會讓瀏覽器以標準模式解析頁面，避免進入舊式兼容模式。

## HTML4 文件宣告

HTML4 的宣告比較長，會指定 DTD：

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

這類寫法常見於舊教材或舊系統。新建 HTML 頁面時，一般不需要使用這種長宣告。

## XHTML 文件宣告

XHTML 的寫法更接近 XML 風格，宣告也更嚴格：

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

XHTML 對語法格式要求更嚴格，例如標籤閉合、大小寫與屬性寫法都更接近 XML 規則。初學現代 HTML 時，不需要把 XHTML 當成主要寫法，但要能在舊資料中辨認它。

## 對照表

| 版本 | 宣告特徵 | 學習建議 |
| --- | --- | --- |
| HTML5 | `<!DOCTYPE html>`，簡潔。 | 新頁面優先使用。 |
| HTML4 | 宣告包含 HTML 4.01 DTD。 | 閱讀舊系統或舊教材時作為對照。 |
| XHTML | 宣告包含 XHTML DTD，語法更接近 XML。 | 了解歷史脈絡即可。 |

## 常見錯誤

### 省略文件宣告

較不理想：

```html
<html>
  <head>
    <title>Document</title>
  </head>
  <body></body>
</html>
```

現代 HTML 文件建議加上：

```html
<!DOCTYPE html>
```

### 把舊宣告複製到新頁面

新建頁面時，不需要從舊教材複製 HTML4 或 XHTML 的長宣告。除非你正在維護特定舊系統，否則以 HTML5 宣告為主。

## 重點整理

- `<!DOCTYPE html>` 是現代 HTML 常用的文件宣告。
- 文件宣告不是一般 HTML 標籤，而是告訴瀏覽器解析模式的宣告。
- HTML4 與 XHTML 宣告主要用於理解舊資料或維護舊系統。
- 新建頁面時，通常使用 HTML5 的簡潔宣告即可。
