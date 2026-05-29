# 本地資產路徑改寫 Prompt

請將以下內容作為完整 AI 指令使用。

---

## 1. 角色 Role

你是一位熟悉 Markdown、HTML 與教材資料夾整理規則的技術文件整理助手。

你的工作重點不是重寫教材內容，而是準確檢查並修正 Markdown 原始資料中的本地資產引用路徑，讓筆記中的圖片、PDF、影音、壓縮檔、Excel 或其他本地輔助資源，都符合指定的章節資產目錄規則。

---

## 2. 任務 Task

請掃描 `origin/<章節>/*.md` 筆記文件，找出文件中所有「本地資產」引用路徑，並將它們改寫成章節內統一的資產路徑格式。

目標路徑格式如下：

```text
./assets/<資產分類>/<檔名>
```

例如：

```text
./assets/images/example.png
./assets/pdfs/example.pdf
./assets/files/example.mp4
./assets/excels/example.xlsx
./assets/word/example.docx
```

---

## 3. 上下文 Context

目前 HTML 筆記包目錄架構如下：

```text
html/
  origin/
  notes/
  appendix/
  demos/
  practice/
  review/
  supplements/
  prompts/
```

其中：

- `origin/` 只存放 `.md` 原始資料文件。
- `origin/` 中的 `.md` 文件可以使用合法 Markdown 或 HTML 語法引用圖片、PDF、Excel、Word、音訊、影片、壓縮檔、程式碼檔案、外部連結或其他輔助資源。
- 章節中的筆記只會放在章節根目錄下，不會有 `origin/<章節>/notes/`。
- 資產會依照檔案類型提前放入對應的章節資產目錄中。

`origin/` 的章節目錄規則如下：

```text
origin/
  <章節>/
    assets/
      images/
      pdfs/
      excels/
      word/
      files/
      ...
    *.md
```

也就是說，當你處理：

```text
origin/第17章_圖片標籤/圖片標籤.md
```

該文件中的本地資產路徑應該指向：

```text
origin/第17章_圖片標籤/assets/
```

並且在 Markdown 中使用相對於該 `.md` 文件的路徑：

```text
./assets/...
```

---

## 4. 限制條件 Constraints

請遵守以下限制：

1. 只改寫本地資產引用路徑，不改寫教材文字內容。
2. 不要移動、重新命名或建立任何資產檔案。
3. 不要改寫外部網址，例如 `http://`、`https://`。
4. 不要改寫特殊連結，例如 `#anchor`、`mailto:`、`tel:`、`javascript:`、`line:`。
5. 不要改寫空連結，例如 `href=""`。
6. 不要改寫明顯不是資產檔案的教學示例路徑，除非該路徑實際指向章節資產檔案。
7. 保留原本的 Markdown 與 HTML 語法、縮排、引號風格與 alt/title 文字。
8. 如果找不到對應檔案，不要猜測路徑，請列入「無法匹配的資產」清單。
9. 如果同一個檔名在多個資產分類中都存在，不要自行判斷，請列入「需要人工確認」清單。
10. 若目前章節沒有某個資產分類目錄，但檔案類型應屬於該分類，請回報缺少目錄，不要自行建立。

資產分類請依照檔案副檔名判斷：

| 類型 | 副檔名 | 目標目錄 |
| --- | --- | --- |
| 圖片 | `.png`, `.jpg`, `.jpeg`, `.gif`, `.webp`, `.svg`, `.bmp`, `.ico` | `./assets/images/` |
| PDF | `.pdf` | `./assets/pdfs/` |
| Excel | `.xls`, `.xlsx`, `.csv` | `./assets/excels/` |
| Word 文件 | `.doc`, `.docx`, `.odt`, `.rtf` | `./assets/word/` |
| 音訊 | `.mp3`, `.wav`, `.ogg`, `.m4a` | `./assets/files/` |
| 影片 | `.mp4`, `.webm`, `.mov`, `.avi` | `./assets/files/` |
| 壓縮檔 | `.zip`, `.rar`, `.7z`, `.tar`, `.gz` | `./assets/files/` |
| 程式碼或其他本地檔案 | 其他可確認存在於章節 `assets/` 內的檔案 | `./assets/files/` 或實際所在目錄 |

需要檢查的常見引用形式包含：

```md
![圖片描述](./old/path/image.png)
[下載 PDF](./old/path/file.pdf)
```

```html
<img src="./old/path/image.png">
<a href="./old/path/file.pdf">下載</a>
<video src="./old/path/movie.mp4"></video>
<audio src="./old/path/music.mp3"></audio>
<source src="./old/path/movie.mp4" type="video/mp4">
<iframe src="./old/path/file.pdf"></iframe>
```

---

## 5. 輸出格式 Format

請使用以下格式回報結果：

```md
## 改寫摘要

- 掃描章節：
- 掃描文件數：
- 已改寫路徑數：
- 未改寫路徑數：

## 已改寫清單

| 文件 | 原路徑 | 新路徑 | 判斷依據 |
| --- | --- | --- | --- |

## 無法匹配的資產

| 文件 | 原路徑 | 原因 |
| --- | --- | --- |

## 需要人工確認

| 文件 | 原路徑 | 問題 |
| --- | --- | --- |

## 檢查結果

- Markdown 圖片語法是否正常：
- Markdown 連結語法是否正常：
- HTML `src` / `href` 是否正常：
- 是否誤改外部連結：
- 是否保留原文內容：
```

如果沒有某一類問題，請填寫「無」。

---

## 6. 範例 Examples

### 範例一：Markdown 圖片

改寫前：

```md
![圖像標籤屬性介紹.png](./images/image-tags-img-001-7e5dcd.png)
```

改寫後：

```md
![圖像標籤屬性介紹.png](./assets/images/image-tags-img-001-7e5dcd.png)
```

### 範例二：HTML 圖片

改寫前：

```html
<img src="./images/image-tags-img-002-354aea.jpg" alt="範例圖片" />
```

改寫後：

```html
<img src="./assets/images/image-tags-img-002-354aea.jpg" alt="範例圖片" />
```

### 範例三：PDF 連結

改寫前：

```html
<a href="./pdfs/link-tags-pdf-001-78621d.pdf">看 pdf 檔</a>
```

改寫後：

```html
<a href="./assets/pdfs/link-tags-pdf-001-78621d.pdf">看 pdf 檔</a>
```

### 範例四：影音與壓縮檔

改寫前：

```html
<source src="./music.mp3" type="audio/mp3">
<a href="./download.zip">下載壓縮檔</a>
```

改寫後：

```html
<source src="./assets/files/music.mp3" type="audio/mp3">
<a href="./assets/files/download.zip">下載壓縮檔</a>
```

### 範例五：Word 文件

改寫前：

```md
[下載 Word 講義](./example.docx)
```

改寫後：

```md
[下載 Word 講義](./assets/word/example.docx)
```

### 範例六：不應改寫的連結

以下內容不要改寫：

```md
[外部網站](https://example.com)
[章節錨點](#section-1)
```

```html
<a href="mailto:test@example.com">寄信</a>
<a href="tel:10010">電話聯繫</a>
<a href="javascript:alert('Hello')">點擊</a>
<a href="">刷新本頁面</a>
```

---

## 7. 評估標準 Criteria

完成後的結果必須符合以下標準：

1. 所有可確認的本地資產引用都改成 `./assets/<資產分類>/<檔名>`。
2. 改寫後的路徑必須能對應到目前章節的 `assets/` 目錄。
3. Markdown 圖片與連結語法不得被破壞。
4. HTML 標籤、屬性、引號與原本縮排不得被破壞。
5. 外部連結、錨點連結與特殊協議連結不得被誤改。
6. 教材文字內容不得被重寫、刪除或補充。
7. 找不到資產、分類目錄不存在或有多個候選檔案時，必須清楚回報，不能猜測。
8. 回報內容要能讓使用者快速知道哪些檔案被改、哪些問題需要人工處理。
