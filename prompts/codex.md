請依照 `meta/update-rules.md` 的完整規則，幫我判斷以下 Origin 原始筆記原子化切分是否需要同步其他層級。

章節：
- 第01章_寫在前面
- 第02章_HTML簡介
- 第03章_兼容性問題
- 第04章_HTML基本結構標籤
- 第05章_全局屬性
- 第06章_路徑

改動檔案或資料夾：
- origin/第01章_寫在前面/
- origin/第02章_HTML簡介/
- origin/第03章_兼容性問題/
- origin/第04章_HTML基本結構標籤/
- origin/第05章_全局屬性/
- origin/第06章_路徑/
- atomic/第01章_寫在前面/
- atomic/第02章_HTML簡介/
- atomic/第03章_兼容性問題/
- atomic/第04章_HTML基本結構標籤/
- atomic/第05章_全局屬性/
- atomic/第06章_路徑/

改動摘要：
我使用 `prompts/_drafts/origin-to-atomic-notes-draft.md` 對第 01-06 章的 `origin/<章節>/*.md` 原始資料進行 Origin 原始筆記原子化切分，目標是產生或更新 `atomic/<章節>/*.md` 候選原子筆記。請判斷這些章節的 `atomic/` 結果是否會使 `notes/`、`appendix/`、`demos/`、`practice/`、`review/` 或章節狀態需要候選同步、候選重生成或重新檢查。

已知最新正確來源：
- 原始來源：origin/第01章_寫在前面/ 到 origin/第06章_路徑/
- 候選概念來源：atomic/第01章_寫在前面/ 到 atomic/第06章_路徑/
- 若 `atomic/` 尚未完成內容審查，請不要把它視為正式教學筆記來源。

希望處理方式：只判斷

補充限制：
- 本輪不要建立、修改、刪除或重生成任何檔案。
- 不要直接更新 `meta/chapter-status.md`。
- 不要處理第 07 章以後的內容。
- 不要把 `origin/` 直接當作正式 `notes/` 來源。
- 不要把 `atomic/` 直接當作最終可閱讀筆記。
- 只列出受第 01-06 章影響或需要確認的位置，不要把整個 repo 列為候選重生成範圍。

請先查證使用者指定的檔案、同章節上下游檔案、`meta/chapter-status.md` 與必要的章節 log：
- meta/chapter-logs/第01章_寫在前面.md
- meta/chapter-logs/第02章_HTML簡介.md
- meta/chapter-logs/第03章_兼容性問題.md
- meta/chapter-logs/第04章_HTML基本結構標籤.md
- meta/chapter-logs/第05章_全局屬性.md
- meta/chapter-logs/第06章_路徑.md

請只輸出 `meta/update-rules.md` 中的「判斷結論格式」：

更新類型：
主要更新位置：
最新正確來源：
是否需要更新：
原因：
上游需要補齊：
下游可能影響：
候選同步 / 候選重生成範圍：
chapter-status.md 建議標記：
建議更新順序：
不應更新的位置：
待確認事項：

本輪不要建立、修改、刪除或重生成任何檔案。