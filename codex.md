現在我想要製作 **根據 `notes/` 生成練習題、實作任務、改錯題、重構題** 的 AI 提示詞規範。

請你參照如下的架構規範：

```text
prompts/
    ├── system/
        learning-coach.md
        notes-practice-generator-rules.md
    ├── workflows/
    ├── formats/
    └── requests/
```

| 目錄 | 作用 | 用途 |
|---|---|---|
| `prompts/system/` | 系統規則提示詞 | 存放穩定的 AI 角色設定與總體規則，例如語言、教學風格、輸出原則。 |
| `prompts/workflows/` | 工作流程提示詞 | 存放一套完整的生成流程，例如從 `origin/` 生成 `notes/`，或從 `notes/` 生成練習題、複習材料。 |
| `prompts/formats/` | 輸出格式提示詞 | 存放各種固定輸出格式，例如教書型筆記格式、練習題格式、複習卡格式、API 表格格式。 |
| `prompts/requests/` | 實際提問範例 | 存放實際向 AI 發問時可直接使用或參考的提問內容，例如針對某章節、某份原始資料、某個任務的具體問題。 |

目前我只有製作出 `learning-coach.md`、`notes-practice-generator-rules.md` 檔案，我想請你根據這兩個檔案製作出，相應的 `prompts/workflows/`、`prompts/formats/`、`prompts/requests/` 底下的檔案，你認為這是可以做得到的嗎？