---
source_notes:
  - notes/030-兼容性問題/html5shiv與IE條件註解補充.md
topics: [舊版 IE, html5shiv, IE 條件註解, HTML5 語意標籤, 相容性補丁]
summary: "html5shiv、IE 條件註解語法與條件關鍵字用途速查。"
---

# html5shiv 與 IE 條件註解速查

> 查表用。概念與用法說明見 notes/030-兼容性問題/html5shiv與IE條件註解補充.md。

## html5shiv 條件註解片段

```html
<!--[if lt IE 9]>
<script src="./js/html5shiv.min.js"></script>
<![endif]-->
```

## 片段拆解

| 部分 | 意義 |
| --- | --- |
| `<!--[if lt IE 9]> ... <![endif]-->` | 如果目前瀏覽器是小於 IE9 的版本，就解析並執行裡面的內容 |
| `<script src="./js/html5shiv.min.js"></script>` | 載入 html5shiv 相容性補丁 |
| 其他瀏覽器 | 會把整段視為普通 HTML 註解並忽略 |
| IE9 以上 | 不需要 html5shiv，條件也不會載入這段補丁 |

## 條件關鍵字

| 關鍵字 | 意義 |
| --- | --- |
| `lt` | 小於（less than） |
| `lte` | 小於等於（less than or equal） |
| `gt` | 大於（greater than） |
| `gte` | 大於等於（greater than or equal） |
| `!` | 邏輯非（not） |

## 條件註解範例

| 範例 | 可見範圍 |
| --- | --- |
| `<!--[if IE 8]>僅 IE8 可見<![endif]-->` | 僅 IE8 可見 |
| `<!--[if gt IE 8]>高於 IE8 的 IE 可見<![endif]-->` | 高於 IE8 的 IE 可見 |
| `<!--[if lt IE 8]>低於 IE8 的 IE 可見<![endif]-->` | 低於 IE8 的 IE 可見 |
| `<!--[if gte IE 8]>IE8 以上可見<![endif]-->` | IE8 以上可見 |
| `<!--[if lte IE 8]>IE8 及以下可見<![endif]-->` | IE8 及以下可見 |
| `<!--[if !IE 8]>非 IE8 的 IE 可見<![endif]-->` | 非 IE8 的 IE 可見 |

## html5shiv 作用與限制

| 項目 | 說明 |
| --- | --- |
| 解決的問題 | 讓 IE6～IE8 把 `header`、`nav`、`section`、`article` 等 HTML5 新標籤記住成已知元素，之後 CSS 才能正常套用 |
| 原理 | 對 HTML5 新標籤名稱呼叫 `document.createElement()` |
| 不處理的問題 | 不代表 IE6～IE8 支援 HTML5 的語意、API 或其他新功能 |
| 無作用的瀏覽器 | IE9 以上，以及 Chrome、Firefox、Safari 等本來就能正確識別這些標籤的瀏覽器 |
| 載入建議 | 只在需要的 IE 版本載入，不要讓所有瀏覽器都多下載與執行 |

## 版本限制與常見錯誤

| 項目 | 說明 |
| --- | --- |
| IE10 開始 | 條件註解語法被移除，IE10 以上會把條件註解當成普通 HTML 註解忽略 |
| `<!--[if lt IE 11]> ... <![endif]-->` | 期待在 IE10 / IE11 生效是錯誤的，因為 IE10 以上不解析條件註解語法 |
| 直接寫一般 `<script>` 載入 html5shiv | Chrome、Firefox、IE9 以上也會多下載並執行這個檔案 |
| 專案不需支援 IE6～IE8 | 包著 html5shiv 的條件註解通常可以安全移除 |

