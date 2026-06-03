# 瀏覽器渲染模式 Meta 標籤 HTML 教學範例

來源筆記：`notes/第03章_兼容性問題/01-瀏覽器渲染模式-Meta-標籤.md`

## 建議學習順序

| 順序 | Demo | 對應觀念 | 觀察重點 | 建議修改任務 |
| --- | --- | --- | --- | --- |
| 1 | `01-DOCTYPE與head位置.html` | 標準文件宣告與 head 中 meta 的位置 | `<!doctype html>` 位於檔案最前面，meta 放在 `<head>` 內且位置靠前 | 檢視原始碼，確認 `doctype`、`head`、`meta charset` 的位置 |
| 2 | `02-IE最高文檔模式.html` | `X-UA-Compatible` 與舊版 IE 文檔模式 | `http-equiv="X-UA-Compatible"` 與 `content="IE=Edge"` 如何組成相容性提示 | 修改 `content` 值，練習辨認這個 meta 的屬性與用途 |
| 3 | `03-雙核瀏覽器renderer.html` | `renderer` 與雙核瀏覽器核心選擇 | `name="renderer"`、`content="webkit"` 是特定瀏覽器約定，不是通用 HTML 標準 | 修改 `content` 值，觀察它只是對特定瀏覽器可能有效的提示 |
| 4 | `04-meta不能取代測試.html` | 相容性 meta 的能力邊界 | meta 不能讓瀏覽器自動支援所有原本不支援的功能 | 改寫「錯誤寫法」文字，練習分辨 meta 能做與不能做的事 |
| 5 | `05-現代專案使用判斷.html` | 新專案與舊系統是否保留相容性 meta 的判斷 | 先確認標準結構、支援情況與測試結果，再決定是否加入特定設定 | 將情境文字改成自己的專案狀況，判斷是否需要保留這些 meta |

## 學習提醒

這組 demo 的目標不是取代正式筆記，而是幫助你把筆記中的觀念轉成可觀察、可修改、可練習的 HTML 範例。
