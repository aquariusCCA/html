請依 `meta/update-rules.md` 協助判斷這次 HTML 筆記包更新的影響範圍。

本次請只做「判斷」與「建議」，不要直接修改任何檔案，不要重生成內容，也不要直接同步 `meta/chapter-status.md` 或章節 log。

## 1. 章節名稱

`第02章_HTML簡介`

## 2. 改動位置

主要改動位置：

```text
notes/第02章_HTML簡介/
demos/第02章_HTML簡介/
appendix/第02章_HTML簡介/
```

## 3. 任務 / 改動類型

```text
章節重構
內容新增
下游材料修正 / 新增
狀態同步判斷
```

## 4. 改動摘要

目前已完成以下工作：

1. 已使用 `prompts/_drafts/atomic-to-html-teaching-notes-draft.md`，將 `atomic/第02章_HTML簡介/*.md` 原子化資料，重構成 `notes/第02章_HTML簡介/*.md` 的正式 HTML 教學筆記。

   已產生或更新的正式 notes 包含：

   ```text
   notes/第02章_HTML簡介/01-網頁與HTML入門.md
   notes/第02章_HTML簡介/02-HTML5版本與兼容性.md
   notes/第02章_HTML簡介/03-HTML版本文件宣告補充.md
   notes/第02章_HTML簡介/04-HTML文件骨架與基本結構.md
   notes/第02章_HTML簡介/05-HTML標籤結構與元素關係.md
   ```

2. 已使用 `prompts/_drafts/html-teaching-notes-content-review-draft.md` 審查 `notes/第02章_HTML簡介/*.md`，確認正式 notes 是否達到可教學、可回查、可維護的品質。

3. 已使用 `prompts/_drafts/notes-to-html-teaching-demos-draft.md`，將下列兩篇 notes 轉換成可直接用瀏覽器開啟、可觀察、可修改、可練習的 HTML 教學 demo：

   ```text
   notes/第02章_HTML簡介/04-HTML文件骨架與基本結構.md
   notes/第02章_HTML簡介/05-HTML標籤結構與元素關係.md
   ```

   demo 輸出位置：

   ```text
   demos/第02章_HTML簡介/04-HTML文件骨架與基本結構/
   demos/第02章_HTML簡介/05-HTML標籤結構與元素關係/
   ```

4. 已使用 `prompts/_drafts/notes-to-index-system-draft.md`，為 `notes/第02章_HTML簡介/` 下的 5 篇正式 notes 產生 HTML 筆記索引系統。

   appendix 輸出位置：

   ```text
   appendix/第02章_HTML簡介/01-網頁與HTML入門/
   appendix/第02章_HTML簡介/02-HTML5版本與兼容性/
   appendix/第02章_HTML簡介/03-HTML版本文件宣告補充/
   appendix/第02章_HTML簡介/04-HTML文件骨架與基本結構/
   appendix/第02章_HTML簡介/05-HTML標籤結構與元素關係/
   ```

   每篇 notes 對應的索引類型：

   ```text
   keyword-index.md
   element-attribute-index.md
   topic-index.md
   category-index.md
   scenario-index.md
   faq-index.md
   tag-index.md
   ```

5. `meta/chapter-status.md` 與 `meta/chapter-logs/第02章_HTML簡介.md` 目前仍可能停留在「第 02 章尚未產生 notes 與下游材料」的舊狀態，需要判斷是否列為候選同步範圍。

## 5. 我希望 AI 判斷

請先判斷影響範圍，再說明需要檢查的內容、候選重生成或候選同步範圍，以及 `meta/chapter-status.md` 建議標記。

請至少回答以下問題：

1. 這次改動的最新正確來源應判定在哪一層？是 `atomic/第02章_HTML簡介/`、`notes/第02章_HTML簡介/`，還是下游材料各自以 notes 為來源？
2. `notes/第02章_HTML簡介/*.md` 已由已完成 atomic content review 的 atomic notes 生成，是否可建議將 `notes生成` 標記為已完成？
3. 已完成 notes content review 後，是否可建議將 `notes完成檢查` 標記為已完成？
4. `demos/第02章_HTML簡介/` 目前只針對第 04 與第 05 篇 notes 產生 demo。請判斷 `demos生成` 應建議標記為已完成、待確認、部分完成，或需要說明哪些 notes 不需要 demo。
5. `appendix/第02章_HTML簡介/` 已為 5 篇 notes 產生索引系統。是否可建議將 `appendix索引` 標記為已完成？
6. `practice/` 與 `review/` 尚未產生，是否應維持未開始、待確認，或列為下一步候選流程？
7. 是否需要檢查 `demos/` 與 `appendix/` 是否完全依賴最新 `notes/`，以及是否存在連結、anchor、檔名或路徑過期風險？
8. 是否需要將 `meta/chapter-status.md` 與 `meta/chapter-logs/第02章_HTML簡介.md` 列為候選同步範圍？
9. 請提出第 02 章下一步建議，例如是否先補做 practice / review，或先同步狀態表與章節 log。