請依 `meta/update-rules.md` 協助判斷這次 HTML 筆記包更新的影響範圍。

1. 章節名稱：第08章_meta標籤

2. 改動位置：

`origin/第08章_meta標籤/`
`origin/第08章_meta標籤/assets/`
`atomic/第08章_meta標籤/`
`notes/第08章_meta標籤/`
`appendix/第08章_meta標籤/`
`demos/第08章_meta標籤/`

3. 任務 / 改動類型：

原始資料整理、資產異動 / 資產引用標準化、origin -> atomic、atomic review、atomic -> notes、notes content review、notes -> appendix、notes -> demos、狀態同步判斷。

4. 改動摘要：

目前已經對 `第08章_meta標籤` 完成以下處理：

- 使用 `prompts/_drafts/origin-asset-standardization-draft.md` 處理 `origin/第08章_meta標籤/` 內 Markdown 文件的本地資產引用。
- 使用 `prompts/_drafts/origin-asset-alt-and-link-text-draft.md` 掃描 `origin/第08章_meta標籤/*.md`，保守整理本地圖片替代文字與本地附件連結文字。
- 使用 `prompts/_drafts/origin-to-atomic-notes-draft.md` 將 `origin/第08章_meta標籤/*.md` 整理成 `atomic/第08章_meta標籤/*.md`。
- 使用 `prompts/_drafts/atomic-content-review-draft.md` 審查 `atomic/第08章_meta標籤/` 內的 atomic notes。
- 使用 `prompts/_drafts/atomic-to-html-teaching-notes-draft.md` 將 `atomic/第08章_meta標籤/*.md` 重構成 `notes/第08章_meta標籤/*.md` 的正式 HTML 教學筆記。
- 使用 `prompts/_drafts/html-teaching-notes-content-review-draft.md` 審查 `notes/第08章_meta標籤/*.md` 是否達到可教學、可回查、可維護的品質。
- 使用 `prompts/_drafts/notes-to-index-system-draft.md` 將 `notes/第08章_meta標籤/*.md` 產生 HTML 筆記索引系統到 `appendix/第08章_meta標籤/`。
- 使用 `prompts/_drafts/notes-to-html-teaching-demos-draft.md` 將 `notes/第08章_meta標籤/*.md` 轉換成可直接用瀏覽器開啟、可觀察、可修改、可練習的 HTML 教學 demo 到 `demos/第08章_meta標籤/`。

5. 我希望 AI 判斷：

請先依 `meta/update-rules.md` 判斷本次多層處理完成後的影響範圍，再說明：

- 最新正確來源目前應視為哪一層。
- 需要檢查哪些上游或下游內容，例如 origin 資產引用、atomic 切分、notes 正式教學內容、appendix 索引、demos 範例、anchor、標題、資產路徑與來源連結。
- 是否有候選重生成或候選同步範圍，尤其是 `practice/`、`review/`、最終驗收，以及 `meta/chapter-status.md` 狀態同步。
- `meta/chapter-status.md` 對 `第08章_meta標籤` 的建議標記；如果狀態表尚未有該章列，請只提出新增或同步建議，不要直接修改狀態表。
- 過期內容風險與建議下一步。

本次請只做影響範圍判斷、候選處理範圍與狀態標記建議；不要改檔、不要重生成內容、不要同步 `meta/chapter-status.md`。
