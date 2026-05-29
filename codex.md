# 本地資產標準化命名規則

處理 `origin/<章節>/*.md` 中的本地資產時，AI 不只改寫引用路徑，也必須同步重新命名實體資產檔案。

標準流程是：

1. 掃描 Markdown / HTML 中的本地資產引用。
2. 確認引用對應到目前章節 `assets/` 內的實體檔案。
3. 依照標準檔名重新命名實體資產。
4. 同步更新 Markdown / HTML 中的引用路徑。

不可只改引用路徑，避免造成斷鏈。

格式如下：

```text
<md-slug>-<asset-kind>-<index>-<hash6>.<ext>
```

欄位定義：

| 欄位 | 說明 | 範例 |
|---|---|---|
| `md-slug` | Markdown 檔名或主題 slug | `html-tag-structure` |
| `asset-kind` | 資產類型代碼：`img`、`pdf`、`excel`、`word`、`file` | `img` |
| `index` | 同類型資產在 Markdown 中出現的順序，固定三位數 | `001` |
| `hash6` | `SHA-256(實體資產檔案 bytes)` 的前 6 碼小寫十六進位字元 | `a82f91` |
| `ext` | 小寫副檔名 | `png` |

## hash6 規則

`hash6` 必須由實體資產檔案內容計算取得，不得由 AI 猜測、手動編造，也不得根據檔名、路徑、alt 文字或 Markdown 內容產生。

計算規則如下：

```text
hash6 = SHA-256(實體資產檔案 bytes) 的前 6 碼小寫十六進位字元
```

如果無法讀取實體檔案內容，或無法計算 SHA-256，不要產生新檔名，必須列入人工確認。

## 序號規則

序號根據資產在 Markdown 中出現的順序決定，固定三位數，不足補零。

不同資產類型分開計算序號。

同一個實體資產在同一份 Markdown 中被引用多次時，只產生一個新檔名，所有引用同步更新成同一個路徑。

例如同一份 Markdown 中依序出現圖片、PDF、圖片、附件：

```text
html-basic-img-001-a82f91.png
html-basic-pdf-001-c19d20.pdf
html-basic-img-002-f8e201.png
html-basic-file-001-d91f3a.zip
```

## 引用路徑規則

Markdown / HTML 中的引用路徑固定改成：

```text
./assets/<資產分類>/<標準檔名>
```

例如：

```text
./assets/images/html-basic-img-001-a82f91.png
./assets/pdfs/html-basic-pdf-001-c19d20.pdf
./assets/files/html-basic-file-001-d91f3a.zip
```

## 安全規則

以下情況不要直接改名，必須列入人工確認：

- 找不到對應實體檔案
- 無法讀取檔案內容或無法計算 `hash6`
- 新檔名會與既有檔案衝突
- 同一個原始檔名在多個資產分類中都存在
- 缺少應有的資產分類目錄

外部網址、錨點、`mailto:`、`tel:`、`javascript:`、空連結不處理。
