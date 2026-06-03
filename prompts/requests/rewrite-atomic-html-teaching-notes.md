# HTML 教學筆記重構提問模板

## 用途

用來請 AI 依照 `prompts/_drafts/atomic-to-html-teaching-notes-draft.md` 的規則，讀取指定章節的 `atomic/<章節>/*.md` 原子化資料，先建立正式筆記映射，再重構成一組高品質 HTML 教學筆記，並在每篇 notes 開頭加入 `source_atomic` 隱藏註解作為 atomic 來源追溯。

## 適用場景

當整個 `atomic/<章節>/` 已經完成原子化整理，並準備轉換成正式 `notes/<章節>/` 教學筆記時使用。

執行本模板之前，應先使用 `prompts/requests/rewrite-origin-asset-paths.md` 完成該章節的本地資產路徑標準化。

如果尚未完成資產標準化，請先不要執行本模板。

## 使用方式

1. 將下方「可直接複製的提問」貼給具備檔案系統存取能力的 AI。
2. 將 `<atomic章節路徑>` 替換成實際章節資料夾路徑。
3. 確認該章節已完成 `prompts/requests/rewrite-origin-asset-paths.md` 的資產標準化流程。
4. 一次只處理一個章節，避免跨章節誤改。
5. 執行後檢查 `notes/<章節>/` 與 git diff，確認篇章映射、`source_atomic` 隱藏註解、內容與圖片、附件路徑正確。

## 可直接複製的提問

```text
請依照 `prompts/_drafts/atomic-to-html-teaching-notes-draft.md` 的完整規則，重構以下章節的 atomic notes：

`<atomic章節路徑>`

若發現 origin 資產尚未依照 `prompts/requests/rewrite-origin-asset-paths.md` 完成標準化，請停止並提醒我先執行該流程。

請只處理上述指定章節，不要處理其他章節、其他 Markdown 檔案或其他資料夾。

請只輸出到對應的 `notes/<章節>/`；補充型 notes 也放在 `notes/<章節>/`，不要輸出到 `appendix/` 或 `supplements/`。

不要修改 `origin/<章節>/`、`atomic/<章節>/`、`assets/` 或其他正式產出目錄。
```

## 可替換欄位

| 欄位 | 說明 | 範例 |
| --- | --- | --- |
| `<atomic章節路徑>` | 要重構的 `atomic/` 章節資料夾 | `atomic/HTML簡介/` |
