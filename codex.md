# Codex 工作草稿

你認為除了請 AI 將 **本地資產** 改寫引用路徑之外，還需要請 AI **重新命名引用路徑** 嗎？

格式如下：

```text
<md-slug>-<asset-kind>-<index>.<ext>
```

欄位定義：

| 欄位 | 說明 | 範例 |
|---|---|---|
| `md-slug` | Markdown 檔名或主題 slug | `html-tag-structure` |
| `asset-kind` | 資產類型代碼：`img`、`pdf`、`ecvel`、`file` | `img` |
| `index` | 同類型資產在 Markdown 中出現的順序，固定三位數 | `001` |
| `ext` | 小寫副檔名 | `png` |

## 序號規則

序號根據資產在 Markdown 中出現的順序決定，固定三位數，不足補零。

不同資產類型分開計算序號。

例如同一份 Markdown 中依序出現圖片、PDF、圖片、附件：

```text
html-basic-img-001-a82f91.png
html-basic-pdf-001-c19d20.pdf
html-basic-img-002-f8e201.png
html-basic-file-001-d91f3a.zip
```