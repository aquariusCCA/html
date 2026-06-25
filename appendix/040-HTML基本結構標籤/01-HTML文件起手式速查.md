---
source_notes:
  - notes/040-HTML基本結構標籤/01-HTML文件起手式.md
topics: [HTML文件骨架, DOCTYPE, lang, charset]
summary: "HTML 文件起手式中 DOCTYPE、lang 與 charset 的位置、用途與常見錯誤速查。"
---

# HTML 文件起手式速查

> 查表用。概念與用法說明見 notes/040-HTML基本結構標籤/01-HTML文件起手式.md。

## 基本骨架

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

## 起手式項目

| 項目 | 放置位置 | 作用 | 注意事項 |
| --- | --- | --- | --- |
| `<!DOCTYPE html>` | HTML 文件最前面，位於 `<html>` 之前 | 聲明目前文件使用 HTML5，讓瀏覽器用符合標準的方式解析頁面 | 不是 HTML 標籤，沒有結束標籤，也不是放在 `<head>` 或 `<body>` 裡的內容 |
| `lang` | 通常寫在 `<html>` 標籤上 | 標示目前文件內容主要使用哪一種語言 | 會影響輔助工具、搜尋、翻譯與拼字檢查等行為 |
| `<meta charset="UTF-8">` | 通常寫在 `<head>` 裡 | 指定 HTML 文件使用的字元編碼 | 現代網頁通常建議使用 UTF-8，能降低文字亂碼風險 |

## 常見 lang 值

| 值 | 常見用途 |
| --- | --- |
| `zh-CN` | 中國大陸中文 |
| `zh-TW` | 台灣繁體中文 |
| `en` | 英語 |

## 常見編碼

| 編碼 | 備註 |
| --- | --- |
| GB2312 | notes 中列出的常見編碼之一 |
| BIG5 | notes 中列出的常見編碼之一 |
| GBK | notes 中列出的常見編碼之一 |
| UTF-8 | 現代網頁通常建議使用，適合多語言內容 |

## 常見錯誤與正確方向

| 錯誤 | 問題 | 正確方向 |
| --- | --- | --- |
| 把 `<!DOCTYPE html>` 放到 `<html>` 裡面 | 會讓文件結構不清楚，也失去它作為文檔類型聲明的意義 | 放在文件最前面、`<html>` 之前 |
| 忘記設定 `charset` | 瀏覽器可能根據環境自行猜測，猜錯時中文、標點或特殊符號可能變成亂碼 | 在 `<head>` 前段加入 `<meta charset="UTF-8">` |
| `lang` 與內容語言不一致 | 瀏覽器、搜尋工具或輔助技術可能用錯誤語言處理頁面 | 依頁面主要語言設定，例如繁體中文用 `zh-TW`、英文用 `en`、簡體中文用 `zh-CN` |

