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

請根據以下三份提示詞協助我整理 Markdown 中的本地資產路徑：

1. 規則依據：
   `prompts/system/asset-path-rules.md`

2. 執行流程：
   `prompts/workflows/asset-path-normalization-workflow.md`

3. 輸出格式：
   `prompts/formats/asset-path-normalization-format.md`

請嚴格依照 `asset-path-normalization-workflow.md` 的 Step 1 到 Step 8 執行：

1. 確認輸入資料。
2. 掃描 Markdown 中的本地資產連結。
3. 判斷資產類型。
4. 判斷檔名策略。
5. 建立序號。
6. 產生目標資產路徑。
7. 重寫 Markdown 連結。
8. 產生整理報告。

最後請依照 `asset-path-normalization-format.md` 的格式輸出結果。

---

## 基本資訊

- Markdown 檔名：`<請填入，例如 html-tag-composition.md>`
- Markdown slug：`<請填入，例如 html-tag-composition>`
- 所屬章節目錄：`<請填入，例如 HTML>`
- 是否可讀取實體資產檔案並計算 hash：`<是/否>`
- 若無法讀取實體資產檔案：請不要使用 `<hash6>` 佔位，應列入「需要人工確認的項目」。

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
- 是否可讀取實體資產檔案並計算 hash：`否`
- 若無法讀取實體資產檔案：請不要使用 `<hash6>` 佔位，應列入「需要人工確認的項目」。

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

請根據：

- `prompts/system/asset-path-rules.md`
- `prompts/workflows/asset-path-normalization-workflow.md`
- `prompts/formats/asset-path-normalization-format.md`

幫我整理下面 Markdown 的本地資產路徑

Markdown 檔名：`<file-name>.md`
Markdown slug：`<md-slug>`
章節目錄：`<chapter-name>`
是否可讀取實體資產檔案並計算 hash：否；請不要使用 `<hash6>` 佔位，應列入「需要人工確認的項目」。

原始 Markdown：

```md
<貼上 Markdown>
```

````

---
