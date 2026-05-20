# Asset Path Rules

## 目的

本文件只定義 Markdown 筆記中的本地資產路徑規則，包含圖片、PDF、附件與其他可下載檔案的分類、命名與引用方式。

本文件回答「什麼是正確的資產路徑」。實際處理步驟請交給 `prompts/workflows/asset-path-normalization-workflow.md`，輸出格式請交給 `prompts/formats/asset-path-normalization-format.md`。

適用的章節型筆記結構：

```text
<章節>/
    assets/
        images/
        pdfs/
        files/
    *.md
```

---

## 資產分類規則

| 資產類型 | 常見副檔名 | 存放目錄 | Markdown 寫法 |
|---|---|---|---|
| 圖片 | `.png`, `.jpg`, `.jpeg`, `.webp`, `.gif`, `.svg` | `assets/images/` | `![alt](path)` |
| PDF | `.pdf` | `assets/pdfs/` | `[text](path)` |
| 一般附件 | `.docx`, `.pptx`, `.xlsx`, `.csv`, `.zip`, `.json`, `.xml`, `.sql`, `.txt` | `assets/files/` | `[text](path)` |

外部網址不屬於本地資產。若筆記需要離線保存，應先下載檔案，再依本規則整理到 `assets/` 目錄中。

---

## 路徑規則

所有本地資產都必須集中到同一章節目錄下的 `assets/`，不得引用桌面、下載資料夾、上一層目錄或工具匯出的臨時資料夾。

Markdown 中的本地資產引用必須使用相對路徑：

```md
./assets/<asset-type>/<normalized-file-name>
```

正確：

```md
![](./assets/images/html-tag-structure-img-001-a82f91.png)
[HTML 講義 PDF](./assets/pdfs/html-basic-pdf-001-c19d20.pdf)
[範例程式](./assets/files/html-demo-file-001-f8e201.zip)
```

錯誤：

```md
![](標籤組成和關係/image.png)
![](/Users/user/Desktop/image.png)
![](C:\Users\user\Desktop\image.png)
[講義](../../Downloads/html-basic.pdf)
[附件](%E9%99%84%E4%BB%B6/demo.zip)
```

---

## Markdown 語法規則

圖片必須使用圖片語法：

```md
![<原始 alt 文字>](./assets/images/<normalized-file-name>)
```

圖片原本沒有 alt 文字時，可以保持空 alt，不要硬補檔名：

```md
![](./assets/images/<normalized-file-name>)
```

PDF 必須使用一般連結語法：

```md
[<原始或優化後的 link text>](./assets/pdfs/<normalized-file-name>)
```

一般附件必須使用一般連結語法：

```md
[<原始或優化後的 link text>](./assets/files/<normalized-file-name>)
```

PDF 與一般附件不得使用圖片語法。

---

## Alt 文字與 Link Text 規則

檔名負責管理，alt 文字與 link text 負責語意。

- 圖片原本有 alt 文字時，原則上保留。
- 圖片原本沒有 alt 文字時，可以保持空 alt。
- PDF 與附件原本有 link text 時，原則上保留。
- 若 PDF 或附件的 link text 為空，必須補上可讀文字。
- 若 link text 過於模糊，例如 `下載`、`附件`、`點我`，可以依內容補成更具語意的文字，並在輸出中說明。

---

## 檔名規則

有明確語意的原始檔名可以沿用語意，但建議轉成安全 slug，避免跨平台或工具處理時產生編碼問題。

```text
標籤的結構圖.png      -> tag-structure.png
HTML 基礎講義.pdf     -> html-basic-guide.pdf
表單驗證範例.zip      -> form-validation-demo.zip
```

沒有明確語意的檔名必須使用統一命名格式。

沒有語意的檔名包含：

```text
image.png
image 1.png
img.png
picture.png
screenshot.png
untitled.png
file.pdf
document.pdf
attachment.zip
下載.pdf
未命名.docx
```

統一命名格式：

```text
<md-slug>-<asset-kind>-<index>-<hash6>.<ext>
```

欄位定義：

| 欄位 | 說明 | 範例 |
|---|---|---|
| `md-slug` | Markdown 檔名或主題 slug | `html-tag-structure` |
| `asset-kind` | 資產類型代碼：`img`、`pdf`、`file` | `img` |
| `index` | 同類型資產在 Markdown 中出現的順序，固定三位數 | `001` |
| `hash6` | 檔案內容 hash 前 6 碼 | `a82f91` |
| `ext` | 小寫副檔名 | `png` |

範例：

```text
html-tag-structure-img-001-a82f91.png
html-tag-structure-img-002-c19d20.png
html-basic-pdf-001-d91f3a.pdf
html-practice-file-001-f8e201.zip
```

副檔名必須統一小寫。

---

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

---

## Hash 規則

hash 用於避免不同資產檔名衝突，也能協助判斷兩個檔案是否可能為同一內容。

預設 hash 規則：

- 必須由資產檔案內容產生。
- 使用 SHA-256。
- 取前 6 碼小寫十六進位字元。
- 不得人工猜測或捏造。

正確：

```text
html-tag-structure-img-001-a82f91.png
```

禁止在最終檔名或 Markdown 引用路徑中保留下列佔位文字：

```text
<hash6>
hash6
<hash>
```

錯誤：

```text
html-tag-structure-img-001-<hash6>.png
```

若無法讀取實體檔案或尚未取得資產內容，不得產生含假 hash 的檔名；必須標記為需要人工確認。

---

## URL 編碼與安全字元規則

整理後的 Markdown 路徑不得保留 URL encoded path。

錯誤：

```md
![](%E6%A8%99%E7%B1%A4/image.png)
[講義](HTML%20Basic.pdf)
```

正確：

```md
![](./assets/images/html-tag-structure-img-001-a82f91.png)
[HTML 基礎講義](./assets/pdfs/html-basic-pdf-001-c19d20.pdf)
```

整理後檔名建議只使用：

```text
a-z
0-9
-
_
.
```

避免使用空白、括號、`#`、`?`、`%`、反斜線與特殊符號。

---

## 衝突處理規則

不同內容的檔案不得因為同名而互相覆蓋。

若不同檔案產生相同目標檔名，應改用更長 hash，或將項目標記為需要人工確認。

相同內容的重複資產可以共用同一檔案，並讓多個 Markdown 連結指向同一個整理後路徑。

---

## 禁止事項

不得：

- 使用絕對路徑。
- 保留 URL encoded 路徑。
- 使用上一層或多層相對路徑引用資產。
- 將所有資產混放在同一個資料夾。
- 將 PDF 或附件放到 `assets/images/`。
- 使用圖片語法引用 PDF 或一般附件。
- 只依賴圖片 alt 文字作為唯一命名依據。
- 因為圖片沒有 alt 文字就跳過處理。
- 因為附件沒有 link text 就跳過處理。
- 在不同內容檔案同名時直接覆蓋。
- 在最終結果中保留 `<hash6>`、`hash6`、`<hash>`。
