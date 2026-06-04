<!--
source_atomic:
  - atomic/第04章_HTML基本結構標籤/01-文檔類型聲明標籤.md
  - atomic/第04章_HTML基本結構標籤/02-lang語言種類.md
  - atomic/第04章_HTML基本結構標籤/03-字符集.md
-->

# HTML 文件基本設定

## 學習目標

讀完這篇筆記，你應該能夠：

- 知道 `<!DOCTYPE html>` 的用途與放置位置。
- 理解 `<html lang="...">` 為什麼要標示文件語言。
- 知道 `<meta charset="UTF-8">` 如何影響文字顯示。
- 能寫出一份基本且正確的 HTML 文件開頭結構。

## 問題情境

一份 HTML 文件不只需要放內容，也需要先告訴瀏覽器幾件事：

- 這份文件要用哪一種 HTML 規則解析。
- 主要使用哪一種自然語言。
- 文件裡的文字要用哪一種字元編碼解讀。

這些設定通常不會直接顯示在頁面上，但會影響瀏覽器解析、搜尋引擎理解、輔助工具朗讀，以及中文是否能正常顯示。

## 一句話理解

HTML 文件的基本設定，是在頁面內容開始之前，先讓瀏覽器知道「用 HTML5 解析、這份文件是什麼語言、文字用什麼編碼」。

## 基本結構

常見的 HTML 文件開頭會長這樣：

```html
<!DOCTYPE html>
<html lang="zh-Hant">
<head>
  <meta charset="UTF-8">
  <title>我的第一個網頁</title>
</head>
<body>
  <h1>Hello HTML</h1>
</body>
</html>
```

這段結構中，和本章相關的三個重點是：

- `<!DOCTYPE html>`：宣告這份文件使用 HTML5。
- `lang="zh-Hant"`：標示文件主要語言。
- `<meta charset="UTF-8">`：指定文件使用 UTF-8 字元編碼。

## `<!DOCTYPE html>`：文件類型宣告

`<!DOCTYPE html>` 的作用，是告訴瀏覽器這份文件應該以現代 HTML 標準來解析。

```html
<!DOCTYPE html>
```

它有兩個重要注意點：

- 必須放在整份 HTML 文件最前面，位於 `<html>` 標籤之前。
- 它不是 HTML 標籤，而是文件類型宣告。

初學時可以先記住：HTML5 文件最前面通常就寫這一行。

## `lang`：標示文件語言

`lang` 屬性用來指定元素內容使用的語言。當它寫在 `<html>` 上時，通常代表整份文件的主要語言。

```html
<html lang="en">
  <!-- 省略其他內容 -->
</html>
```

常見值包含：

| 寫法 | 常見含義 |
| --- | --- |
| `en` | 英語 |
| `zh-CN` | 中國大陸中文 |
| `zh-Hant` | 繁體中文 |

`lang` 不只是給人看的，它也有實務價值：

- 輔助工具可以用較合適的語音規則朗讀內容。
- 搜尋引擎可以更準確理解頁面語言。
- 瀏覽器或翻譯工具可以更容易判斷是否需要翻譯。

## `<meta charset="UTF-8">`：指定字元編碼

字元編碼決定瀏覽器如何把檔案中的位元資料解讀成文字。

在 HTML 中，通常會在 `<head>` 裡使用 `<meta charset="UTF-8">`：

```html
<head>
  <meta charset="UTF-8">
</head>
```

如果編碼設定不正確，中文、符號或其他語言文字可能會出現亂碼。

常見字元編碼包含 `GB2312`、`BIG5`、`GBK` 和 `UTF-8`。現代網頁通常建議使用 `UTF-8`，因為它是 Unicode 的常用編碼方式，可以表示大量不同語言的文字。

## 常見錯誤

### 把 `<!DOCTYPE html>` 放到 `<html>` 裡面

錯誤寫法：

```html
<html lang="zh-Hant">
  <!DOCTYPE html>
  <head>
    <meta charset="UTF-8">
  </head>
</html>
```

正確寫法：

```html
<!DOCTYPE html>
<html lang="zh-Hant">
<head>
  <meta charset="UTF-8">
</head>
</html>
```

`<!DOCTYPE html>` 必須出現在 `<html>` 之前。

### 忘記設定字元編碼

錯誤寫法：

```html
<head>
  <title>中文網頁</title>
</head>
```

建議寫法：

```html
<head>
  <meta charset="UTF-8">
  <title>中文網頁</title>
</head>
```

對初學者來說，只要建立 HTML 文件，就應該先把 UTF-8 寫好。

## 實務使用原則

建立新 HTML 文件時，可以先從這個基本骨架開始：

```html
<!DOCTYPE html>
<html lang="zh-Hant">
<head>
  <meta charset="UTF-8">
  <title>頁面標題</title>
</head>
<body>
  頁面內容
</body>
</html>
```

如果頁面主要是英文，就把 `lang` 改成 `en`；如果頁面主要是簡體中文，可以使用 `zh-CN`。`charset` 則通常維持 `UTF-8`。

## 重點整理

- `<!DOCTYPE html>` 用來宣告 HTML5，放在文件最前面。
- `<!DOCTYPE html>` 不是 HTML 標籤。
- `lang` 用來標示文件或元素內容的語言。
- `<meta charset="UTF-8">` 通常放在 `<head>` 中，用來指定字元編碼。
- 現代網頁通常使用 UTF-8，能降低多語言文字出現亂碼的機率。

