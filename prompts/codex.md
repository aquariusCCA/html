請依照 `prompts/_drafts/notes-to-index-system-draft.md` 的完整規則，為以下正式筆記產生或更新 HTML 筆記索引系統：

`notes/第06章_路徑/01-HTML資源路徑.md`

請根據指定筆記的標題、段落結構、核心概念、HTML 標籤、HTML 屬性、使用場景與常見問題，建立短、清楚、容易掃讀的 Markdown 索引。

請只處理上述單一 `notes/` Markdown 筆記，並只建立或覆蓋由該路徑推導出的 `appendix/<章節>/<筆記名>/` 目標目錄中的以下 7 個索引檔案：

- `keyword-index.md`
- `element-attribute-index.md`
- `topic-index.md`
- `category-index.md`
- `scenario-index.md`
- `faq-index.md`
- `tag-index.md`

請不要讀取或處理其他 `notes/` 檔案，也不要讀取 `origin/`、`atomic/`、`demos/`、`practice/`、`review/`、`supplements/`、`meta/` 或 `prompts/` 作為索引內容來源。

索引項目必須以指定正式筆記作為唯一內容來源，優先連到該筆記中最相關的 H2 或 H3 標題段落。只有在找不到穩定對應標題時，才可以退回整篇筆記連結，並在完成回報中列出項目與原因。

如果某一類索引資料不足，仍請建立對應索引檔案，並在檔案中用簡短文字說明資料不足原因，不要用臆測條目補滿。

完成後請依照規則檔中的完成回報格式，回報指定正式筆記、產生或更新的索引檔案、每個索引檔案的條目數、資料不足的索引類型、段落連結檢查結果、退回整篇筆記連結的索引項目，以及主要去重或合併規則。