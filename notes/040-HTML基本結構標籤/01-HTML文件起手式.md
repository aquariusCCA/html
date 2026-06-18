---
source_atomic:
  - atomic/040-HTML基本結構標籤/01-文檔類型聲明標籤.md
  - atomic/040-HTML基本結構標籤/02-lang語言種類.md
  - atomic/040-HTML基本結構標籤/03-字符集.md
---

# HTML 文件起手式：DOCTYPE、lang 與 charset

## 學習目標

讀完這篇筆記，你應該能夠：

- 說明 `<!DOCTYPE html>`、`lang` 與 `charset` 各自負責什麼。
- 寫出一份基本 HTML 文件開頭。
- 判斷常見的文件宣告、語言標示與字元編碼錯誤。

## 問題情境

當你新建一個 HTML 檔案時，通常不會直接從 `<h1>` 或 `<p>` 開始寫內容。瀏覽器在顯示頁面之前，會先判斷這份文件該用什麼模式解析、主要語言是什麼、文字應該用哪一種編碼讀取。

如果這些資訊缺失或寫錯，畫面可能仍然能顯示，但可能出現解析模式不一致、翻譯與輔助工具判斷錯誤，甚至中文變成亂碼。

## 先抓住核心

HTML 文件的起手式，是先告訴瀏覽器三件事：

- 這是一份 HTML5 文件。
- 這份文件主要使用哪一種語言。
- 這份文件的文字應該用哪一種字元編碼讀取。

## 基本結構

```html
<!DOCTYPE html>
<html lang="zh-TW">
<head>
  <meta charset="UTF-8">
  <title>我的第一個網頁</title>
</head>
<body>
  <h1>歡迎來到我的網站</h1>
</body>
</html>
```

這段結構中，和本篇主題最相關的是三個位置：

- `<!DOCTYPE html>`：放在文件最前面，聲明目前文件使用 HTML5。
- `<html lang="zh-TW">`：標示整份文件的主要語言。
- `<meta charset="UTF-8">`：標示文件使用的字元編碼。

## `<!DOCTYPE html>`：讓瀏覽器使用標準模式

`<!DOCTYPE html>` 是 HTML5 的文檔類型聲明，通常放在 HTML 文件最前面，位於 `<html>` 標籤之前。

```html
<!DOCTYPE html>
```

它的重點不是「顯示內容」，而是告訴瀏覽器：請用符合標準的方式解析這份頁面。

需要注意的是，`<!DOCTYPE>` 不是 HTML 標籤。它沒有結束標籤，也不是放在 `<head>` 或 `<body>` 裡的內容。

## `lang`：標示文件語言

`lang` 屬性通常寫在 `<html>` 標籤上，用來標示目前文件內容主要使用哪一種語言。

```html
<html lang="zh-TW">
  <!-- 省略其他內容 -->
</html>
```

常見值包含：

| 值 | 常見用途 |
| --- | --- |
| `zh-CN` | 中國大陸中文 |
| `zh-TW` | 台灣繁體中文 |
| `en` | 英語 |

`lang` 會影響輔助工具、搜尋、翻譯與拼字檢查等行為。例如螢幕報讀器可能依照語言決定發音方式，瀏覽器翻譯功能也會參考這個資訊。

## `charset`：避免文字亂碼

`charset` 通常透過 `<meta>` 標籤寫在 `<head>` 裡，用來指定 HTML 文件使用的字元編碼。

```html
<head>
  <meta charset="UTF-8">
</head>
```

字元編碼決定瀏覽器如何把檔案中的位元組讀成文字。常見編碼包含 GB2312、BIG5、GBK 和 UTF-8。實務上，現代網頁通常建議使用 UTF-8，因為 UTF-8 能表示 Unicode 中大量文字與符號，適合多語言內容。

## 常見錯誤

### 把 `<!DOCTYPE html>` 放到 `<html>` 裡面

錯誤寫法：

```html
<html>
  <!DOCTYPE html>
  <head>
    <meta charset="UTF-8">
  </head>
</html>
```

`<!DOCTYPE html>` 應該位於文件最前面、`<html>` 之前。放錯位置會讓文件結構不清楚，也失去它作為文檔類型聲明的意義。

正確寫法：

```html
<!DOCTYPE html>
<html lang="zh-TW">
<head>
  <meta charset="UTF-8">
</head>
</html>
```

### 忘記設定 `charset`

如果沒有設定字元編碼，瀏覽器可能根據環境自行猜測。當猜測結果與實際檔案編碼不同時，中文、標點或特殊符號就可能變成亂碼。

初學階段可以養成固定在 `<head>` 前段加入這行的習慣：

```html
<meta charset="UTF-8">
```

### `lang` 與內容語言不一致

如果整份頁面主要是繁體中文，卻寫成：

```html
<html lang="en">
```

瀏覽器、搜尋工具或輔助技術可能會把頁面當成英文內容處理。這不一定會讓畫面壞掉，但會影響可理解性與可存取性。

## 實務寫法建議

新建 HTML 檔案時，可以先放入以下基本骨架，再開始填寫頁面內容：

```html
<!DOCTYPE html>
<html lang="zh-TW">
<head>
  <meta charset="UTF-8">
  <title>頁面標題</title>
</head>
<body>
  <!-- 頁面內容寫在這裡 -->
</body>
</html>
```

若頁面主要是英文，就把 `lang` 改成 `en`；若是簡體中文，就可使用 `zh-CN`。`charset` 則在大多數現代網頁中維持 `UTF-8`。

## 重點整理

- `<!DOCTYPE html>` 是文檔類型聲明，不是 HTML 標籤。
- `<!DOCTYPE html>` 應放在 HTML 文件最前面、`<html>` 之前。
- `lang` 用來標示文件主要語言，會影響輔助工具、搜尋、翻譯與拼字檢查。
- `<meta charset="UTF-8">` 用來指定字元編碼，能降低文字亂碼風險。
- HTML 文件開頭不是裝飾，而是讓瀏覽器和其他工具正確理解文件。

## 自我檢查

1. `<!DOCTYPE html>` 為什麼應該放在 `<html>` 標籤之前？
2. 如果一份繁體中文頁面寫成 `<html lang="en">`，可能造成什麼問題？
3. `<meta charset="UTF-8">` 通常放在哪裡？它解決的是什麼問題？
