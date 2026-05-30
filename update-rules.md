# HTML 筆記包更新與重生成規則

## 1. 文件目的

`update-rules.md` 用來規範 HTML 筆記包中各層資料改動後，哪些下游內容需要重新檢查、重新生成或同步更新。

這份文件的核心目的不是增加流程負擔，而是避免出現以下問題：

```text
origin 改了，但 atomic 沒有同步
atomic 修正了，但 notes 還是舊內容
notes 改了，但 demos / practice / review / appendix 沒有重產
資產路徑改了，但下游筆記仍然引用舊路徑
```

一句話理解：

```text
只要上游資料變動，就要判斷哪些下游產物可能過期。
```

---

## 2. 標準資料流

HTML 筆記包的主要資料流如下：

```text
origin/
  ↓
資產整理
  ↓
atomic/
  ↓
atomic 內容審查
  ↓
notes/
  ↓
appendix/
demos/
practice/
review/
```

可以理解成：

```text
origin  = 原始資料來源
atomic  = 原始資料整理後的候選原子資料
notes   = 正式教學筆記
appendix / demos / practice / review = 從 notes 延伸出的下游學習材料
```

---

## 3. 各層資料責任

| 目錄 | 定位 | 是否可視為來源 |
| --- | --- | --- |
| `origin/` | 原始資料與章節資產 | 是，最上游來源 |
| `atomic/` | 由 origin 整理出的原子化候選資料 | 是，notes 的直接來源 |
| `notes/` | 正式教學筆記 | 是，下游內容的直接來源 |
| `appendix/` | 索引與查表資料 | 否，由 notes 產生 |
| `demos/` | 教學範例 | 否，由 notes 產生 |
| `practice/` | 練習題與實作任務 | 否，由 notes 產生 |
| `review/` | 複習系統與錯題回流 | 否，由 notes 產生 |
| `supplements/` | 補充資料 | 視內容而定 |
| `prompts/` | AI 協作規則 | 不屬於學習內容來源 |

---

## 4. 基本原則

### 4.1 上游改動，下游要檢查

只要上游資料發生變動，就要檢查下游是否需要重生成。

```text
origin 改動
  → 檢查 atomic、notes、appendix、demos、practice、review

atomic 改動
  → 檢查 notes、appendix、demos、practice、review

notes 改動
  → 檢查 appendix、demos、practice、review
```

### 4.2 不要直接改下游來修正上游問題

如果發現 `demos/` 或 `practice/` 的錯誤其實來自 `notes/`，應先修正 `notes/`，再重生成下游內容。

不建議：

```text
只改 demos，notes 保持錯誤
```

建議：

```text
修正 notes
  ↓
重新產生 demos
```

### 4.3 先確認影響範圍，再重生成

不要每次小改都全部重跑。

應先判斷：

```text
改的是錯字？
改的是技術概念？
改的是章節結構？
改的是圖片路徑？
改的是正式筆記標題？
```

不同改動影響範圍不同。

---

## 5. 改動類型與重生成規則

## 5.1 `origin/` 改動

### 情境 A：只修正錯字、標點、格式

例如：

```text
修正錯字
調整 Markdown 清單縮排
修正標題層級
```

處理方式：

| 下游 | 是否需要重跑 | 說明 |
| --- | --- | --- |
| `atomic/` | 視情況 | 如果 atomic 已經吸收過該內容，可不重跑；若錯字也存在於 atomic，應同步修正 |
| `notes/` | 視情況 | 如果正式筆記已經沒有該錯字，可不處理 |
| `demos/` | 不一定 | 通常不需要 |
| `practice/` | 不一定 | 通常不需要 |
| `review/` | 不一定 | 通常不需要 |
| `appendix/` | 不一定 | 通常不需要 |

建議流程：

```text
origin 小修
  ↓
檢查 atomic 是否也有同樣問題
  ↓
必要時同步修正 atomic / notes
```

---

### 情境 B：新增重要概念、範例或注意事項

例如：

```text
新增 HTML 標籤說明
新增常見錯誤
新增重要範例
新增實務判斷
```

處理方式：

| 下游 | 是否需要重跑 | 說明 |
| --- | --- | --- |
| `atomic/` | 需要 | 重新評估 atomic 切分 |
| `atomic review` | 需要 | 新增內容要檢查技術正確性 |
| `notes/` | 需要 | 正式筆記可能要補充 |
| `demos/` | 視情況 | 若新增內容適合觀察或實作，需重產 |
| `practice/` | 視情況 | 若新增內容可出題，需重產 |
| `review/` | 視情況 | 若新增核心概念，需重產 |
| `appendix/` | 需要 | 索引可能要新增關鍵字、FAQ、場景 |

建議流程：

```text
origin 新增重要內容
  ↓
重新產生或更新 atomic
  ↓
重新審查 atomic
  ↓
重新生成 notes
  ↓
重生成 appendix / demos / practice / review
```

---

### 情境 C：刪除或合併原始內容

例如：

```text
刪除重複段落
合併兩篇 origin 筆記
移除錯誤說法
```

處理方式：

| 下游 | 是否需要重跑 | 說明 |
| --- | --- | --- |
| `atomic/` | 需要 | 避免保留已刪除或已合併的舊內容 |
| `atomic review` | 需要 | 確認刪除沒有造成概念斷裂 |
| `notes/` | 需要 | 避免正式筆記仍引用舊內容 |
| `demos/` | 視情況 | 若 demo 依賴被刪內容，需要更新 |
| `practice/` | 視情況 | 若題目依賴被刪內容，需要更新 |
| `review/` | 視情況 | 若複習題依賴被刪內容，需要更新 |
| `appendix/` | 需要 | 移除過期索引 |

---

## 5.2 `origin/<章節>/assets/` 改動

### 情境 A：新增圖片、PDF、Word、Excel 或其他附件

處理方式：

```text
新增資產
  ↓
更新 origin 中的引用
  ↓
執行資產標準化命名
  ↓
檢查 alt / 連結文字
  ↓
視內容更新 atomic / notes
```

需要檢查：

| 檢查項目 | 說明 |
| --- | --- |
| 是否有被 Markdown 正確引用 | 不要只放檔案但沒有引用 |
| 是否符合標準命名 | `<md-slug>-<asset-kind>-<index>-<hash6>.<ext>` |
| 是否有清楚 alt 或連結文字 | 圖片與附件要可理解 |
| 下游路徑是否正確 | atomic / notes 應指向 `../../origin/<章節>/assets/...` |

---

### 情境 B：資產重新命名或搬移

處理方式：

| 下游 | 是否需要重跑 | 說明 |
| --- | --- | --- |
| `origin/` | 需要同步 | Markdown 引用要同步更新 |
| `atomic/` | 需要檢查 | 可能仍指向舊路徑 |
| `notes/` | 需要檢查 | 可能仍指向舊路徑 |
| `demos/` | 視情況 | 若 demo 引用該資產，需更新 |
| `appendix/` | 視情況 | 若索引中有資產連結，需更新 |

禁止只改實體檔案名稱而不更新引用。

---

## 5.3 `atomic/` 改動

### 情境 A：修正技術錯誤

例如：

```text
修正錯誤標籤說明
修正錯誤屬性行為
修正錯誤範例程式碼
```

處理方式：

| 下游 | 是否需要重跑 | 說明 |
| --- | --- | --- |
| `notes/` | 需要 | 正式筆記必須吸收正確內容 |
| `demos/` | 視情況 | 若 demo 與錯誤觀念有關，需重產 |
| `practice/` | 視情況 | 若題目或答案受影響，需重產 |
| `review/` | 視情況 | 若複習題受影響，需重產 |
| `appendix/` | 視情況 | 若索引條目受影響，需重產 |

建議流程：

```text
atomic 修正技術錯誤
  ↓
重新生成 notes
  ↓
重新檢查下游內容是否引用舊說法
```

---

### 情境 B：調整 atomic 切分、合併或順序

例如：

```text
兩篇 atomic 合併
一篇 atomic 拆成兩篇
調整學習順序
移動段落到更合適的 atomic
```

處理方式：

| 下游 | 是否需要重跑 | 說明 |
| --- | --- | --- |
| `notes/` | 需要 | `atomic -> notes` 映射可能改變 |
| `appendix/` | 需要 | 索引路徑與段落可能改變 |
| `demos/` | 視情況 | 若正式筆記拆分或合併，demo 也可能要調整 |
| `practice/` | 視情況 | 題目來源筆記可能改變 |
| `review/` | 視情況 | 知識地圖與題庫可能改變 |

---

## 5.4 `notes/` 改動

`notes/` 是正式教學筆記，也是下游內容的直接來源。

### 情境 A：只修正文句或小錯字

處理方式：

| 下游 | 是否需要重跑 | 說明 |
| --- | --- | --- |
| `appendix/` | 通常不需要 | 除非標題、關鍵字或段落連結改變 |
| `demos/` | 不需要 | 除非範例程式碼改變 |
| `practice/` | 不需要 | 除非題目依據改變 |
| `review/` | 不需要 | 除非複習觀念改變 |

---

### 情境 B：修改標題或段落結構

例如：

```text
修改 H2 / H3 標題
合併段落
調整章節順序
刪除某個小節
```

處理方式：

| 下游 | 是否需要重跑 | 說明 |
| --- | --- | --- |
| `appendix/` | 需要 | 段落 anchor 可能失效 |
| `demos/` | 視情況 | 若學習順序或範例來源改變，需檢查 |
| `practice/` | 視情況 | 題目來源小節可能改變 |
| `review/` | 視情況 | 知識地圖可能改變 |

必做檢查：

```text
所有 appendix 連到 notes 的 anchor 是否仍存在？
```

---

### 情境 C：新增或修改 HTML 範例

處理方式：

| 下游 | 是否需要重跑 | 說明 |
| --- | --- | --- |
| `demos/` | 需要 | demo 應反映最新範例 |
| `practice/` | 視情況 | 題目可能可新增或需更新答案 |
| `review/` | 視情況 | 應用型複習題可能需更新 |
| `appendix/` | 視情況 | 若新增標籤、屬性、場景，需更新索引 |

---

### 情境 D：新增核心概念或重要規則

處理方式：

| 下游 | 是否需要重跑 | 說明 |
| --- | --- | --- |
| `appendix/` | 需要 | 新增關鍵字、FAQ、場景、標籤 |
| `demos/` | 視情況 | 若概念適合觀察，新增 demo |
| `practice/` | 需要 | 新增或更新題目 |
| `review/` | 需要 | 更新知識地圖、題庫、間隔複習、檢查點 |

---

## 5.5 `appendix/` 改動

`appendix/` 是由 `notes/` 產生的索引資料。

### 原則

如果只是修正索引文字，可以直接改。

但如果發現索引缺少內容，應先確認 `notes/` 是否也缺少相關說明。

處理方式：

```text
發現 appendix 缺漏
  ↓
先檢查 notes 是否有該內容
  ↓
如果 notes 有，重生成 appendix
  ↓
如果 notes 沒有，先補 notes，再重生成 appendix
```

---

## 5.6 `demos/` 改動

`demos/` 是由 `notes/` 延伸出的可執行教學範例。

### 原則

可以手動微調 demo，但不要讓 demo 學到 notes 沒有教的觀念。

如果 demo 加入新的教學概念，應回補到 notes。

處理方式：

```text
demo 新增教學概念
  ↓
檢查 notes 是否已有說明
  ↓
若沒有，補 notes
  ↓
再重新檢查 practice / review 是否需要更新
```

---

## 5.7 `practice/` 改動

`practice/` 是由 `notes/` 延伸出的練習題。

### 原則

如果題目答案錯誤，先判斷錯誤來源：

| 錯誤來源 | 處理方式 |
| --- | --- |
| 題目自己設計錯 | 直接修正 practice |
| 來源 notes 說法錯 | 先修正 notes，再重產 practice |
| 題目超出 notes 範圍 | 刪除題目或先補 notes |

---

## 5.8 `review/` 改動

`review/` 是由 `notes/` 延伸出的複習系統。

### 原則

如果正式筆記的核心觀念、標題或範例改變，`review/` 很可能需要更新。

尤其需要重跑的情況：

```text
notes 新增核心概念
notes 刪除核心概念
notes 修改重要規則
notes 修改常見錯誤
notes 修改 HTML 範例
```

---

## 6. 影響範圍判斷表

| 改動位置 | 小改文字 | 技術概念改動 | 結構改動 | 資產改動 | 標題改動 |
| --- | --- | --- | --- | --- | --- |
| `origin/` | 檢查 atomic | 重跑 atomic → notes → 下游 | 重跑 atomic → notes → 下游 | 重跑資產流程 | 視情況 |
| `atomic/` | 檢查 notes | 重跑 notes → 下游 | 重跑 notes → 下游 | 檢查 notes 路徑 | 視情況 |
| `notes/` | 通常不重跑 | 重跑下游 | 重跑 appendix，檢查其他下游 | 檢查下游路徑 | 重跑 appendix |
| `appendix/` | 可直接改 | 先查 notes | 先查 notes | 檢查連結 | 檢查 anchor |
| `demos/` | 可直接改 | 先查 notes | 視情況 | 檢查資產 | 不影響 |
| `practice/` | 可直接改 | 先查 notes | 視情況 | 不影響 | 檢查來源路徑 |
| `review/` | 可直接改 | 先查 notes | 視情況 | 不影響 | 檢查來源路徑 |

---

## 7. 標準更新流程

### 7.1 更新前

更新任何章節前，先確認：

```text
1. 要改的是哪一章？
2. 改動發生在哪一層？
3. 是小修、技術修正、結構調整，還是資產變更？
4. 下游有哪些內容可能過期？
5. chapter-status.md 是否需要更新狀態？
```

---

### 7.2 更新中

建議按照以下順序處理：

```text
1. 修改最上游來源
2. 根據影響範圍重跑必要 workflow
3. 檢查路徑、標題、來源、索引
4. 檢查是否有舊內容殘留
5. 更新 chapter-status.md
```

---

### 7.3 更新後

每次更新完成後，建議記錄：

```md
## 更新紀錄

| 日期 | 章節 | 改動位置 | 改動摘要 | 已重跑流程 | 尚待處理 |
| --- | --- | --- | --- | --- | --- |
| YYYY-MM-DD | HTML簡介 | notes | 新增 HTML5 語意說明 | appendix, review | demos 待確認 |
```

---

## 8. 重生成前檢查清單

重生成任何下游內容前，請先檢查：

- [ ] 是否已確認最新來源是哪一層？
- [ ] 是否已確認上游內容是正確版本？
- [ ] 是否已確認不會覆蓋人工修改但尚未備份的內容？
- [ ] 是否已確認需要重生成的目標範圍？
- [ ] 是否已確認輸出路徑？
- [ ] 是否已確認舊檔案是否要保留、覆蓋或人工比對？
- [ ] 是否已確認重生成後要更新 `chapter-status.md`？

---

## 9. 重生成後檢查清單

重生成完成後，請檢查：

- [ ] 下游內容是否根據最新 `notes/` 產生？
- [ ] 是否仍引用已刪除的標題、段落或檔案？
- [ ] Markdown 連結是否有效？
- [ ] 圖片與附件路徑是否有效？
- [ ] 程式碼區塊是否完整？
- [ ] demos 是否能直接用瀏覽器開啟？
- [ ] practice 的題目、答案與來源筆記是否一致？
- [ ] review 的題庫、排程、錯題回流是否一致？
- [ ] appendix 的 anchor 是否能對應到 notes 中的標題？
- [ ] `chapter-status.md` 是否已同步更新？

---

## 10. 避免過期內容的規則

### 10.1 不保留無來源支撐的下游內容

如果 `notes/` 已經刪除某個概念，下游也不應繼續保留相關題目、索引或 demo。

### 10.2 下游不要自行擴展新知識

`demos/`、`practice/`、`review/`、`appendix/` 不應自行加入 `notes/` 沒有教的核心知識。

如果需要加入，應先回補到 `notes/`。

### 10.3 標題改名後必查 appendix

只要 `notes/` 的 H2 / H3 標題改名，就必須檢查 `appendix/` 裡的 anchor 是否失效。

### 10.4 範例程式碼改動後必查 demos / practice

只要 `notes/` 的 HTML 範例改動，就必須檢查：

```text
demos/
practice/
review/
```

是否仍使用舊範例或舊答案。

---

## 11. 建議更新順序

### 11.1 小型文字修正

```text
notes 小修
  ↓
檢查 appendix anchor 是否受影響
  ↓
更新 chapter-status.md
```

### 11.2 技術概念修正

```text
origin / atomic / notes 修正
  ↓
重新生成 notes
  ↓
重新生成 appendix
  ↓
檢查 demos
  ↓
重新生成 practice
  ↓
重新生成 review
  ↓
更新 chapter-status.md
```

### 11.3 章節重構

```text
origin 重新整理
  ↓
重新產生 atomic
  ↓
atomic content review
  ↓
重新產生 notes
  ↓
重新產生 appendix
  ↓
重新產生 demos
  ↓
重新產生 practice
  ↓
重新產生 review
  ↓
更新 chapter-status.md
```

### 11.4 資產重整

```text
整理 origin/<章節>/assets/
  ↓
更新 origin 引用路徑
  ↓
執行資產標準化命名
  ↓
執行 alt / 連結文字整理
  ↓
檢查 atomic / notes 資產路徑
  ↓
檢查 demos 是否引用資產
  ↓
更新 chapter-status.md
```

---

## 12. 章節狀態表同步規則

每次完成重生成後，請同步更新：

```text
chapter-status.md
```

建議欄位：

```text
章節
origin
asset
atomic
atomic review
notes
demos
practice
review
appendix
最後更新日
備註
```

狀態建議使用：

```text
未開始
進行中
待審查
需更新
完成
暫緩
```

如果上游被修改，相關下游應標記為：

```text
需更新
```

例如：

```text
notes 已修改
  → appendix / demos / practice / review 標記為需更新
```

---

## 13. 完成標準

一個章節可以視為完整完成，至少需要符合：

```text
origin 已整理
asset 已標準化
atomic 已產生
atomic 已完成內容審查
notes 已產生並通過檢查
appendix 已根據 notes 建立
demos 已根據 notes 建立
practice 已根據 notes 建立
review 已根據 notes 建立
chapter-status.md 已同步更新
```

如果某一層不需要產出，必須在 `chapter-status.md` 備註原因。

例如：

```text
本章無圖片資產，因此 asset 標記為「完成」，備註「無本地資產」。
```

---

## 14. 快速判斷口訣

```text
改 origin，要想到 atomic。
改 atomic，要想到 notes。
改 notes，要想到所有下游。
改標題，要想到 appendix。
改範例，要想到 demos / practice / review。
改資產，要想到所有引用路徑。
```

---

## 15. 總結

`update-rules.md` 的核心不是要求每次都全部重跑，而是建立一個穩定判斷方式：

```text
1. 先找改動位置
2. 再判斷改動類型
3. 再決定影響範圍
4. 再重跑必要流程
5. 最後更新 chapter-status.md
```

這樣可以讓 HTML 筆記包在長期維護時保持一致，不會出現上游已更新、下游卻仍停留在舊版本的情況。
