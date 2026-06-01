# HTML 筆記包章節處理狀態表

> 用途：追蹤每個 HTML 章節從 `origin` 到 `notes`、`demos`、`practice`、`review`、`appendix` 的處理進度。

## 狀態選項

| 狀態 | 說明 |
| --- | --- |
| 未開始 | 尚未處理 |
| 進行中 | 正在處理 |
| 待確認 | 需要人工確認或決策 |
| 已完成 | 已完成並可進入下一階段 |
| 暫停 | 暫時停止處理 |
| 不適用 | 該章節不需要此步驟 |

## 章節狀態表

| 章節 | 優先級 | origin整理 | 資產命名 | alt與連結文字 | atomic切分提案 | atomic產生 | atomic內容審查 | notes生成 | notes完成檢查 | demos生成 | practice生成 | review生成 | appendix索引 | 最終驗收 | 完成率 | 整體狀態 | 下一步 | 備註 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 第01章_寫在前面 | 未設定 | 待確認 | 待確認 | 待確認 | 未開始 | 未開始 | 未開始 | 未開始 | 未開始 | 未開始 | 未開始 | 未開始 | 未開始 | 未開始 | 0% | 進行中 | 先依 `prompts/requests/rewrite-origin-asset-paths.md` 標準化 origin 圖片路徑，再依 `prompts/requests/rewrite-origin-alt-and-link-text.md` 整理 alt 與連結文字。 | `origin/第01章_寫在前面` 已新增 7 份 Markdown 與 10 張圖片資產；目前尚未產生 atomic/notes/appendix/demos/practice/review。初步檢查發現 origin Markdown 內的圖片引用未指向 `./assets/images/...` 且目前無法解析成功，需先完成資產路徑與 alt / 連結文字整理後再進入 atomic 初次產生。 |
