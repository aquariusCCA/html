# 第02章_HTML簡介 章節處理紀錄

> 用途：保存第 02 章的詳細流程歷史。`meta/chapter-status.md` 只保留狀態總覽、下一步與短備註。

## 目前狀態摘要

- `origin/第02章_HTML簡介` 已初始匯入 4 份 Markdown 原始資料。
- `origin/第02章_HTML簡介/assets/images/` 已有 8 個圖片資產。
- 第 02 章尚未產生 `atomic/`、`notes/`、`appendix/`、`demos/`、`practice/`、`review/` 對應內容。
- 目前優先待辦是檢查 origin 資產路徑、圖片 alt 與連結文字，再啟動 origin -> atomic。

## 流程紀錄

### Origin 與資產

- 2026-06-02：已將 `origin/第02章_HTML簡介` 作為第 02 章 HTML 簡介的原始來源資料納入章節處理追蹤。
- 本次 origin 初始匯入包含下列 Markdown：
  - `origin/第02章_HTML簡介/01-網頁和網站.md`
  - `origin/第02章_HTML簡介/02-HTML版本的區別.md`
  - `origin/第02章_HTML簡介/03-HTML骨架.md`
  - `origin/第02章_HTML簡介/04-標籤組成和關係.md`
- 本次 origin 初始匯入包含 8 個圖片資產，位於 `origin/第02章_HTML簡介/assets/images/`。
- 已判斷目前圖片引用仍需要檢查與整理：Markdown 內的圖片路徑仍指向舊相對路徑，實際資產位於 `assets/images/`。
- 已判斷圖片 alt 目前多為檔名型文字，後續需要整理為可讀描述。
- 已判斷 `04-標籤組成和關係.md` 含有 `<aside>` 形式的來源格式，後續 origin 整理時應確認是否轉為一般 Markdown。

### Atomic

- 尚未產生 `atomic/第02章_HTML簡介`。
- 後續候選流程：完成 origin 整理後，依 `prompts/_drafts/origin-to-atomic-notes-draft.md` 產生 atomic notes。

### Notes

- 尚未產生 `notes/第02章_HTML簡介`。
- 後續候選流程：完成 atomic 內容審查後，依 `prompts/_drafts/atomic-to-html-teaching-notes-draft.md` 產生正式 notes。

### Downstream

- 尚未產生第 02 章 appendix、demos、practice、review。
- 後續需在 notes content review 完成後，再判斷是否產生或同步下游材料。

## 待確認

- 確認 origin 資料是否完整涵蓋第 02 章 HTML 簡介範圍。
- 檢查並標準化 `origin/第02章_HTML簡介` 的圖片引用路徑。
- 檢查圖片 alt 與連結文字。
- 檢查原始內容中的錯字、用語與格式殘留，再進入 origin -> atomic。
