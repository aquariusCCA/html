請依 `meta/update-rules.md` 協助判斷這次 HTML 筆記包更新的影響範圍。

1. 章節名稱：第03章_兼容性問題

2. 改動位置：
   - `demos/第03章_兼容性問題/01-瀏覽器渲染模式-Meta-標籤/`
   - `demos/第03章_兼容性問題/02-IE-條件註解與-html5shiv-補充/`
   - `appendix/第03章_兼容性問題/01-瀏覽器渲染模式-Meta-標籤/`
   - `appendix/第03章_兼容性問題/02-IE-條件註解與-html5shiv-補充/`

3. 任務 / 改動類型：
   - 內容新增
   - 子類型：`notes -> demos` 教學範例生成
   - 子類型：`notes -> appendix` 索引系統生成
   - 子類型：下游材料新增後的影響範圍與狀態同步判斷

4. 改動摘要：
   - 已使用 `prompts/_drafts/notes-to-html-teaching-demos-draft.md`，根據以下兩篇正式教學筆記產生可直接用瀏覽器開啟、可觀察、可修改、可練習的 HTML 教學 demo：
     - `notes/第03章_兼容性問題/01-瀏覽器渲染模式-Meta-標籤.md`
     - `notes/第03章_兼容性問題/02-IE-條件註解與-html5shiv-補充.md`
   - 已使用 `prompts/_drafts/notes-to-index-system-draft.md`，根據同兩篇正式教學筆記建立索引系統，輸出到對應的 `appendix/第03章_兼容性問題/<筆記名>/` 目錄。
   - 本次改動只新增或更新下游材料，未修改 `origin/`、`atomic/` 或 `notes/`。
   - 目前 `meta/chapter-status.md` 中 `第03章_兼容性問題` 的 `demos生成` 為 `待確認`，`appendix索引` 為 `未開始`。

5. 我希望 AI 判斷：
   - 這次下游材料新增後，是否需要檢查 `notes/`、`notes完成檢查`、`practice/` 或 `review/`。
   - `demos/` 是否只需要檢查是否符合來源 notes、可直接開啟、未超出正式筆記教學範圍。
   - `appendix/` 是否需要檢查索引條目、去重規則、標題 anchor 與回連正式筆記的路徑。
   - `meta/chapter-status.md` 中 `demos生成`、`appendix索引`、`最終驗收`、`完成率`、`整體狀態`、`下一步`、`備註` 應如何建議標記。
   - 是否有候選同步範圍，例如章節 log 或狀態表備註，但不要直接修改任何檔案。

請先判斷影響範圍，再說明需要檢查的內容、候選重生成或候選同步範圍，以及 `meta/chapter-status.md` 建議標記。

限制：本次只做判斷型請求，不改檔、不重生成、不同步 `meta/chapter-status.md`。
