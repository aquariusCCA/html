# Asset Path Normalization Request

## 用途

當我需要整理 Markdown 筆記中的圖片、PDF、附件路徑時，使用這份 request。

請根據以下規則與格式協助我整理：

```text
prompts/system/asset-path-rules.md
prompts/workflows/asset-path-normalization-workflow.md
prompts/formats/asset-path-normalization-format.md
```

---

## 提問模板

````md
你現在是 Markdown 筆記資產整理助手。

請根據 `prompts/system/asset-path-rules.md` 的規則，幫我整理以下 Markdown 中的本地資產路徑。

請完成以下任務：

1. 掃描 Markdown 中所有本地資產連結。
2. 判斷每個資產是圖片、PDF 或一般附件。
3. 將圖片規劃到 `./assets/images/`。
4. 將 PDF 規劃到 `./assets/pdfs/`。
5. 將一般附件規劃到 `./assets/files/`。
6. 將 URL encoded 路徑改成安全的相對路徑。
7. 將沒有語意的檔名改成統一命名格式：
   `<md-slug>-<asset-kind>-<index>-<hash6>.<ext>`
8. 保留圖片 alt 文字。
9. 保留或優化 PDF、附件的 link text。
10. 輸出整理對照表、整理後目錄結構、重寫後 Markdown、需要人工確認的項目與風險。

請使用 `prompts/formats/asset-path-normalization-format.md` 的格式輸出。

---

## 基本資訊

- Markdown 檔名：`<請填入，例如 html-tag-composition.md>`
- Markdown slug：`<請填入，例如 html-tag-composition>`
- 所屬章節目錄：`<請填入，例如 HTML>`
- 是否已取得檔案 hash：`<是/否>`
- 若未提供 hash：請先使用 `<hash6>` 佔位，並在「需要人工確認的項目」中標記。

---

## 原始資產清單

如果有原始資產清單，請放在這裡：

```text
<例如>
標籤組成和關係/image.png
HTML Basic.pdf
demo.zip
```

---

## 原始 Markdown

```md
<請貼上原始 Markdown 內容>
```

````

---

## 實際使用範例

````md
你現在是 Markdown 筆記資產整理助手。

請根據 `prompts/system/asset-path-rules.md` 的規則，幫我整理以下 Markdown 中的本地資產路徑。

請使用 `prompts/formats/asset-path-normalization-format.md` 的格式輸出。

---

## 基本資訊

- Markdown 檔名：`html-tag-composition.md`
- Markdown slug：`html-tag-composition`
- 所屬章節目錄：`HTML`
- 是否已取得檔案 hash：`否`
- 若未提供 hash：請先使用 `<hash6>` 佔位，並在「需要人工確認的項目」中標記。

---

## 原始資產清單

```text
標籤組成和關係/image.png
HTML Basic.pdf
demo.zip
```

---

## 原始 Markdown

```md
# HTML 標籤組成和關係

![](%E6%A8%99%E7%B1%A4%E7%B5%84%E6%88%90%E5%92%8C%E9%97%9C%E4%BF%82/image.png)

![標籤的結構圖](%E6%A8%99%E7%B1%A4%E7%B5%84%E6%88%90%E5%92%8C%E9%97%9C%E4%BF%82/%25E6%25A8%2599%25E7%25B1%25A4%25E7%259A%2584%25E7%25B5%2590%25E6%25A7%258B%25E5%259C%2596.png)

[HTML 講義](HTML%20Basic.pdf)

[練習檔案](demo.zip)
```

````

---

## 簡短版提問

````md
請根據 `prompts/system/asset-path-rules.md`，幫我整理下面 Markdown 的本地資產路徑，並依照 `prompts/formats/asset-path-normalization-format.md` 輸出整理對照表、目錄結構與重寫後 Markdown。

Markdown 檔名：`<file-name>.md`
Markdown slug：`<md-slug>`
章節目錄：`<chapter-name>`
是否已取得 hash：否，請先用 `<hash6>` 佔位。

原始 Markdown：

```md
<貼上 Markdown>
```

````

---