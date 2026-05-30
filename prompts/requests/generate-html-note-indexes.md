# HTML 筆記索引系統生成提問模板

## 用途

用來請 AI 依照 `prompts/_drafts/notes-to-index-system-draft.md` 的規則，將指定的單一 `notes/<章節>/<檔名>.md` 正式教學筆記，整理成可查找、可維護的 HTML 筆記索引系統。

這份模板會要求 AI 同步處理：

- 指定正式筆記的索引資料萃取
- 關鍵字、主教學標籤、對照用標籤、屬性、主題、分類、場景、FAQ 與 tag 的查找設計
- 7 種 appendix 索引 Markdown 檔案
- 每個索引項目連到指定正式筆記中的最相關標題段落
- 輸出到 `appendix/<章節>/<筆記名>/`
- 條目數、資料不足類型、段落連結檢查與退回整篇筆記回報

## 適用場景

當單一 `notes/<章節>/<檔名>.md` 已經整理成正式教學筆記，並準備為該篇筆記補上方便日後搜尋、回查與交叉分類的索引檔案時使用。

建議在執行本模板之前，先確認指定筆記已完成內容重構，且標題、程式碼、圖片、附件與內文脈絡都已檢查過。

## 使用方式

1. 將下方「可直接複製的提問」貼給具備檔案系統存取能力的 AI。
2. 將 `<正式筆記路徑>` 替換成實際 Markdown 檔案路徑。
3. 一次只處理一份筆記，避免跨章節或跨檔案誤改。
4. 執行後檢查 `appendix/<章節>/<筆記名>/` 與 git diff，確認索引內容、條目數與回連路徑正確。
5. 確認每個索引檔案中的「對應段落」連結都優先使用 `../../../notes/<章節>/<筆記名>.md#<標題-anchor>`。

## 可直接複製的提問

```text
請依照 prompts/_drafts/notes-to-index-system-draft.md 的完整規則，為以下正式筆記產生或更新 HTML 筆記索引系統：

<正式筆記路徑>

請務必先閱讀 workflow 文件，並嚴格遵守其中的角色、任務、上下文、限制條件、索引資料萃取格式、7 種索引檔案輸出格式、範例與完成回報格式。

請執行以下工作：

1. 只讀取並處理上述指定的單一 Markdown 檔案。
2. 不要讀取或處理同章節的其他筆記。
3. 不要讀取或處理其他章節的筆記。
4. 不要把 origin/ 或 atomic/ 作為索引資料來源，也不要從其中補充索引條目、標題或說明。
5. 不要修改 notes/、origin/、atomic/、demos/、practice/、review/、supplements/ 或 prompts/ 內的內容。
6. 從指定筆記萃取 note_title、note_path、link_path、chapter、note_name、summary、headings、section_links、keywords、html_elements、context_elements、html_attributes、topics、categories、scenarios、faqs 與 tags；其中 context_elements 是可選欄位。
7. html_elements 只放本篇主要教學或直接操作的 HTML 標籤；context_elements 用來記錄只作為比較、反例、注意事項或語意邊界判斷的 HTML 標籤。
8. 只產生來源筆記能支撐的索引項目，不要為了完整度發明筆記沒有提到的標籤、屬性、概念、FAQ、場景或 tag。
9. 將索引檔案直接建立或覆蓋到 appendix/<章節>/<筆記名>/。
10. 請產生或更新以下 7 個索引檔案：
   - keyword-index.md
   - element-attribute-index.md
   - topic-index.md
   - category-index.md
   - scenario-index.md
   - faq-index.md
   - tag-index.md
11. 每個索引項目都必須優先連到同一篇指定正式筆記中的最相關標題段落。
12. 索引檔案位於 appendix/<章節>/<筆記名>/，所以段落連結的 Markdown 相對路徑必須優先使用 ../../../notes/<章節>/<筆記名>.md#<標題-anchor>。
13. 每個索引項目只放 1 個最相關段落連結，不要在同一格塞入多個段落。
14. 優先連到最精準的 H2 或 H3 標題；如果 H3 anchor 複雜或不穩定，可以連到其上層 H2。
15. 只有找不到明確對應標題時，才可以退回 ../../../notes/<章節>/<筆記名>.md，並必須在完成回報列出。
16. 所有索引表格中原本的「相關筆記」欄位請改為「對應段落」。
17. keyword-index.md 需要包含關鍵字、類型、對應段落與說明；不要把 context_elements 輸出成獨立關鍵字。
18. element-attribute-index.md 需要分成 HTML 標籤與 HTML 屬性兩區；標籤與屬性都要使用 inline code；不要把 context_elements 或只屬於 context_elements 的屬性輸出成主索引條目。
19. topic-index.md 需要用學習者容易理解的主題命名，並使用「主題、對應段落、你會學到」三欄。
20. category-index.md 只輸出與該篇筆記相關的分類，不要建立空分類，表格使用「對應段落、內容重點」。
21. scenario-index.md 需要用「我想做什麼」的查找語氣，且場景必須能被來源筆記支援；可以保留 context_elements 參與的語意判斷場景。
22. faq-index.md 的簡短回答最多 1 到 2 句，不要寫成完整教學；可以保留 context_elements 參與的常見判斷問題。
23. tag-index.md 的 tag 請使用小寫英文或 kebab-case，並加上 #。
24. 如果某種索引資料不足，只產生已有來源支撐的內容；必要時在完成回報中列出資料不足的索引類型。
25. 所有內容請使用繁體中文撰寫，並以初學者方便查找與回讀為優先。
26. 完成後請回報指定正式筆記路徑、章節名稱、筆記名稱、產生或更新的檔案清單、每個索引檔案的條目數、資料不足的索引類型、段落連結檢查結果、退回整篇筆記連結的索引項目，以及主要去重或合併規則。

請只根據上述指定的 notes/ 正式筆記產生或更新索引。如果提供的是 origin/ 或 atomic/ 路徑，請停止並要求改提供對應的 notes/<章節>/<筆記名>.md；不要處理其他章節、其他 Markdown 檔案或其他資料夾。
```

## 可替換欄位

| 欄位 | 說明 | 範例 |
| --- | --- | --- |
| `<正式筆記路徑>` | 要產生索引的單一 `notes/` Markdown 正式筆記 | `notes/HTML簡介/標籤組成和關係.md` |
