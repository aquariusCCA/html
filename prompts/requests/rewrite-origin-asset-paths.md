# Origin 本地資產路徑與檔名標準化提問模板

## 用途

用來請 AI 依照 `prompts/_drafts/origin-asset-standardization-draft.md` 的完整規則，標準化指定 `origin/<章節>/` 內單一 Markdown 文件中的本地資產引用路徑與實體資產檔名。

這份模板只處理：

- 本地資產實體檔案重新命名
- Markdown / HTML 中的本地資產引用路徑
- Markdown fenced code block 內可唯一對應到同章節 `assets/` 實體檔案的 HTML `src` / `href` 路徑字串

這份模板不處理教材內容重寫、圖片 alt 文字優化、附件連結文字改寫、外部網址改寫、HTML 標籤結構改寫、屬性順序改寫、縮排改寫或連結顯示文字改寫。

## 適用場景

當單一 `origin/<章節>/<Markdown 檔名>` 中仍有舊圖片路徑、附件路徑、未標準化檔名，或資產檔案尚未符合 `<md-slug>-<asset-kind>-<index>-<hash6>.<ext>` 格式時使用。

也適合處理教材程式碼區塊中可確認的本地資產路徑，例如 HTML 範例中的 `./images/img.jpg`、`./media/movie.mp4`、`./media/test.pdf`。前提是該路徑能唯一對應到同章節 `assets/` 內的實體檔案。

建議先執行 dry-run，確認預覽結果、無法匹配項目、跨文件共用資產與需要人工確認項目後，再執行 apply。

## 不適用場景

不適合用來整理圖片 alt 或附件連結文字。若要處理圖片 alt 與本地附件連結文字，應改用：

```text
prompts/requests/rewrite-origin-alt-and-link-text.md
```

不適合用來重新切分、合併或產生 atomic notes。若要從 `origin/<章節>/` 產生 atomic notes，應改用：

```text
prompts/requests/rewrite-origin-to-atomic-notes.md
```

不適合一次批次處理整個 `origin/` 或多個章節。請一次處理一個章節中的一份 Markdown，並為該 Markdown 提供明確的英文 `md-slug`。

## 使用方式

1. 將下方「dry-run 預覽用提問」貼給具備檔案系統存取能力的 AI。
2. 將 `<章節路徑>`、`<Markdown 檔名>` 與 `<英文-slug>` 替換成實際值。
3. 檢查 dry-run 回報，確認資產唯一匹配、hash 來源、跨文件共用資產、缺少目錄與檔名衝突。
4. 確認安全後，再使用「apply 執行用提問」正式處理。
5. 執行後檢查目標 Markdown、同章節 `assets/`、處理回報與 git diff，確認沒有改到其他 Markdown、其他章節、教材正文、alt 或連結文字。

## dry-run 預覽用提問

```text
請依照 `prompts/_drafts/origin-asset-standardization-draft.md` 的完整規則，預覽處理以下 Markdown 本地資產引用與實體資產檔名：

## 本次處理範圍

* 專案根目錄：`html/`
* 目標章節路徑：`<章節路徑>`
* 目標 Markdown 文件：`<Markdown 檔名>`
* 掃描範圍：`<章節路徑>/<Markdown 檔名>`
* 資產根目錄：`<章節路徑>/assets/`
* 是否處理整個章節中的所有 Markdown：否，只處理上述指定檔案

如果目標章節路徑、目標 Markdown 文件或 md-slug 未填，仍是 placeholder，或不是明確的 `origin/<章節>/` 與章節根目錄下 `.md` 文件，請停止並要求我補充，不要自行掃描整個 `origin/`。

請注意：

1. 本輪只允許 dry-run 預覽，不要建立、修改、刪除、移動或重新命名任何檔案。
2. 請唯讀掃描同章節其他 Markdown，只用來檢查是否有跨 Markdown 共用資產。
3. 不得因為跨文件檢查而修改其他 Markdown。
4. 不要處理其他章節、其他資料夾、`origin/_raw/`、`origin/_manifests/`、`atomic/`、`notes/`、`appendix/`、`demos/`、`practice/`、`review/`、`supplements/`、`prompts/` 或 `meta/`。
5. 請掃描 Markdown 圖片、Markdown 本地附件連結，以及 HTML `src` / `href` 本地資產引用。
6. Markdown fenced code block 內的 HTML `src` / `href` 也屬於掃描範圍；若本地路徑可唯一對應到目前章節 `assets/` 內的實體檔案，請視為可處理資產引用。
7. 可處理程式碼範例中的資產路徑時，只能預覽更新路徑字串，不得改寫 HTML 標籤結構、屬性順序、引號風格、縮排、顯示文字或教材語意。
8. 請排除外部網址、錨點、特殊協議連結、空連結，以及無法唯一對應到目前章節 `assets/` 實體檔案的教學示例路徑。
9. 不要改寫教材正文、標題、清單、表格內容、圖片 alt、附件連結文字、hash、資料夾名稱或不存在的檔案路徑。
10. `hash6` 必須由實體資產檔案 bytes 計算，不得由檔名、路徑、alt 文字或內容推測。

## 本次執行模式

* 執行模式：`dry-run`

## md-slug 對照表

| Markdown 文件 | md-slug |
| --- | --- |
| `<Markdown 檔名>` | `<英文-slug>` |

上表中的 `md-slug` 視為使用者指定 slug。

如果 `md-slug` 未填、仍是 placeholder、或中文 Markdown 檔名無法安全轉成穩定英文 slug，請停止並要求我補充，不要自行翻譯、猜測或根據章節名稱、alt 文字、連結文字或內容創造 slug。

## 回報要求

請依照規則檔中的 dry-run 模式輸出格式回報「預覽摘要」、「預計處理清單」、「無法匹配的資產」、「需要人工確認」與「檢查結果」。

如果沒有某一類問題，請填寫「無」。
```

## apply 執行用提問

```text
請依照 `prompts/_drafts/origin-asset-standardization-draft.md` 的完整規則，正式處理以下 Markdown 本地資產引用與實體資產檔名：

## 本次處理範圍

* 專案根目錄：`html/`
* 目標章節路徑：`<章節路徑>`
* 目標 Markdown 文件：`<Markdown 檔名>`
* 掃描範圍：`<章節路徑>/<Markdown 檔名>`
* 資產根目錄：`<章節路徑>/assets/`
* 是否處理整個章節中的所有 Markdown：否，只處理上述指定檔案

如果目標章節路徑、目標 Markdown 文件或 md-slug 未填，仍是 placeholder，或不是明確的 `origin/<章節>/` 與章節根目錄下 `.md` 文件，請停止並要求我補充，不要自行掃描整個 `origin/`。

請注意：

1. 只允許修改目標 Markdown 文件，以及同章節 `assets/` 內可安全匹配並可安全重新命名的實體資產。
2. 請唯讀掃描同章節其他 Markdown，只用來檢查是否有跨 Markdown 共用資產。
3. 不得因為跨文件檢查而修改其他 Markdown。
4. 不要處理其他章節、其他資料夾、`origin/_raw/`、`origin/_manifests/`、`atomic/`、`notes/`、`appendix/`、`demos/`、`practice/`、`review/`、`supplements/`、`prompts/` 或 `meta/`。
5. 請掃描 Markdown 圖片、Markdown 本地附件連結，以及 HTML `src` / `href` 本地資產引用。
6. Markdown fenced code block 內的 HTML `src` / `href` 也屬於掃描範圍；若本地路徑可唯一對應到目前章節 `assets/` 內的實體檔案，請視為可處理資產引用。
7. 可處理程式碼範例中的資產路徑時，只能更新路徑字串，不得改寫 HTML 標籤結構、屬性順序、引號風格、縮排、顯示文字或教材語意。
8. 請排除外部網址、錨點、特殊協議連結、空連結，以及無法唯一對應到目前章節 `assets/` 實體檔案的教學示例路徑。
9. 不要改寫教材正文、標題、清單、表格內容、圖片 alt、附件連結文字、hash、資料夾名稱或不存在的檔案路徑。

## 本次執行模式

* 執行模式：`apply`

## md-slug 對照表

| Markdown 文件 | md-slug |
| --- | --- |
| `<Markdown 檔名>` | `<英文-slug>` |

上表中的 `md-slug` 視為使用者指定 slug。

如果 `md-slug` 未填、仍是 placeholder、或中文 Markdown 檔名無法安全轉成穩定英文 slug，請停止並要求我補充，不要自行翻譯、猜測或根據章節名稱、alt 文字、連結文字或內容創造 slug。

## 執行前確認

請先根據規則檔檢查是否可以安全處理。

只有在以下條件都成立時，才可以實際修改檔案：

1. 目標章節、目標 Markdown 與章節 `assets/` 目錄都可以讀取。
2. 本地資產可以唯一匹配到目前章節 `assets/` 內的實體檔案。
3. `hash6` 可以由實體資產檔案 bytes 計算，不得由檔名、路徑、alt 文字、連結文字或內容推測。
4. 目標資產分類目錄已存在；如果缺少目錄，請回報「缺少目錄」，不要自行建立。
5. 新檔名不會與既有檔案衝突。
6. 既有標準檔名若 hash 與目前檔案內容不一致，必須列入「需要人工確認」。
7. 同一實體資產若被同章節多份 Markdown 共用，且依不同 Markdown 會產生不同標準檔名，必須列入「需要人工確認」。
8. 實體資產檔案可以安全重新命名。
9. Markdown / HTML 引用路徑可以同步更新且語法不會被破壞。
10. 程式碼範例中的可匹配本地資產路徑只會更新路徑字串，不會改寫其他程式碼範例內容。
11. 不會誤改外部連結、錨點、特殊協議連結、空連結或無法唯一對應到 `assets/` 的教學示例路徑。
12. 不會改寫教材正文、圖片 alt 文字、附件連結文字、HTML 標籤結構、屬性順序、引號風格、縮排或顯示文字。

如果有任何不確定，請不要修改，並列入「需要人工確認」或「無法匹配的資產」。如果無法安全處理整體任務，請停止並回報原因。

## 回報要求

請依照規則檔中的 apply 模式輸出格式回報「處理摘要」、「已處理清單」、「無法匹配的資產」、「需要人工確認」與「檢查結果」。

如果沒有某一類問題，請填寫「無」。
```

## 可替換欄位

| 欄位 | 說明 | 範例 |
| --- | --- | --- |
| `<章節路徑>` | 要處理的 `origin/` 章節目錄 | `origin/第21章_超鏈接標籤/` |
| `<Markdown 檔名>` | 章節目錄下要處理的單一 Markdown 檔案 | `01-超鏈接標籤.md` |
| `<英文-slug>` | 使用者指定的穩定英文 kebab-case slug | `hyperlink-tag` |
