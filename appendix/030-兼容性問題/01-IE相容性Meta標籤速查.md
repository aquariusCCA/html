---
source_notes:
  - notes/030-兼容性問題/IE相容性Meta標籤補充.md
topics: [舊版 IE, X-UA-Compatible, 雙核瀏覽器, renderer meta, 相容性模式]
summary: "IE 與雙核瀏覽器相容性 meta 標籤的用途、限制與適用情境速查。"
---

# IE 相容性 Meta 標籤速查

> 查表用。概念與用法說明見 notes/030-兼容性問題/IE相容性Meta標籤補充.md。

## 常見片段

```html
<meta http-equiv="X-UA-Compatible" content="IE=Edge">
<meta name="renderer" content="webkit">
```

## 標籤用途對照

| 標籤 / 屬性 | 作用對象 | 用途 | 限制 | 備註 |
| --- | --- | --- | --- | --- |
| `<meta http-equiv="X-UA-Compatible" content="IE=Edge">` | IE | 要求 IE 不要降級到相容性檢視，使用目前版本中最新的文檔模式 | 只能避免被降級到更舊的相容模式，不能消除不同 IE 版本本來存在的差異 | meta 寫法實務上應放在 `<head>` 很前面 |
| `http-equiv="X-UA-Compatible"` | IE | 把 meta 標籤當作 HTTP 回應標頭來解讀 | 等同於伺服器送出 `X-UA-Compatible: IE=Edge` | |
| `content="IE=Edge"` | IE | 要求 IE 使用目前安裝版本中最高可用的文檔模式 | IE8 使用者的 Edge 模式和 IE11 使用者的 Edge 模式不是同一回事 | |
| `<meta name="renderer" content="webkit">` | 部分雙核瀏覽器 | 提示優先用 WebKit/Blink 核心開啟頁面 | 非 W3C 標準提示，不是強制指令 | 標準瀏覽器會直接忽略 |
| `name="renderer"` | 部分雙核瀏覽器 | 標記這是給雙核瀏覽器看的渲染引擎提示 | Chrome、Firefox、Safari 等標準瀏覽器會忽略 | |
| `content="webkit"` | 部分雙核瀏覽器 | 請瀏覽器優先用 WebKit/Blink 核心渲染 | 是否切換核心、支援到什麼程度，取決於瀏覽器實作與版本 | |

## 適用情境

| 情境 | 可檢查項目 | 判斷 |
| --- | --- | --- |
| 維護政府機關、銀行、醫院等仍要支援舊版 IE 的系統 | `<head>` 是否有 `X-UA-Compatible` | 可作為舊 IE 顯示異常的排查方向之一 |
| 接手歷史悠久的企業內部系統或舊版 CMS 模板 | 是否存在這兩類 meta 標籤 | 應先理解用途，不宜不明原因直接刪除 |
| 舊版 IE 或雙核瀏覽器跑版，但 Chrome 正常 | 是否缺少或誤寫相容性 meta | 可檢查，但不能當成解決所有相容性問題的萬靈丹 |
| 現代新專案 | 是否仍主動加入這兩個標籤 | 多數情況已不是必要設定 |

## 常見錯誤

| 錯誤 | 問題 |
| --- | --- |
| 以為加了 `IE=Edge` 就能讓所有 IE 版本顯示一致 | Edge 模式是相對於該使用者安裝的 IE 版本而言，IE8 與 IE11 的渲染能力仍不同 |
| 把 `renderer` 當成標準屬性 | `renderer` 是少數雙核瀏覽器自行定義的非標準提示 |
| 期待所有瀏覽器都會反應 `renderer` | Chrome、Firefox、Safari 以及大多數行動裝置瀏覽器會直接忽略 |
| 把這兩個標籤當成相容性萬靈丹 | 它們只是提示或請求，只對特定瀏覽器有意義 |

