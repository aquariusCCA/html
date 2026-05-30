## 修正摘要

- 章節：`atomic/測試`
- 已修正問題 ID：`ACR-001`、`ACR-002`、`ACR-003`、`ACR-004`、`ACR-005`、`ACR-006`、`ACR-007`、`ACR-008`
- 已更新 atomic notes：
  - `atomic/測試/03-input標籤與常用屬性.md`
  - `atomic/測試/07-submit-reset與button按鈕.md`
  - `atomic/測試/08-select下拉列表.md`
  - `atomic/測試/09-textarea多行文本域.md`
  - `atomic/測試/13-HTML5新增input類型.md`
  - `atomic/測試/14-表單新增屬性與placeholder樣式.md`
- 未修正問題：無
- 仍需人工確認：無

## 修正清單

| 問題 ID | Atomic 檔案 | 原問題 | 修正方式 | 是否影響 origin |
| --- | --- | --- | --- | --- |
| ACR-001 | `atomic/測試/03-input標籤與常用屬性.md` | 說 `name` 和 `value` 是每個表單元素都有的屬性值 | 改為說明 `name` 用來標識提交資料，`value` 依控件類型代表預設值或提交值，並非所有表單元素都用 `value` 設定內容 | 否 |
| ACR-002 | `atomic/測試/03-input標籤與常用屬性.md` | 說單選按鈕和複選框都要求相同 `name` | 改為同一組 `radio` 需要相同 `name`；`checkbox` 可依資料設計使用相同或不同 `name` | 否 |
| ACR-003 | `atomic/測試/07-submit-reset與button按鈕.md` | 說 `reset` 會清除表單中的所有數據 | 改為 `reset` 會恢復到初始值；初始值為空時才看起來像清空 | 否 |
| ACR-004 | `atomic/測試/08-select下拉列表.md` | 說 `<select>` 中至少包含一對 `<option>`，表述過於絕對 | 改為實務上 `<select>` 通常需要搭配至少一個 `<option>` 才有可選項目 | 否 |
| ACR-005 | `atomic/測試/09-textarea多行文本域.md` | 說 textarea 其他屬性與普通文本輸入框一致 | 改為部分常用屬性相近，但 textarea 沒有 `type`，初始文字寫在開始與結束標籤之間，不用 `value` 設定 | 否 |
| ACR-006 | `atomic/測試/13-HTML5新增input類型.md` | 圖片中 `type="data"` 應為 `type="date"` | 因不修改 `origin/assets`，在 atomic 圖片下方補註「上圖中的 `type="data"` 應為 `type="date"`」 | 否 |
| ACR-007 | `atomic/測試/13-HTML5新增input類型.md` | 說驗證時必須添加 form 表單域，表述過於絕對 | 改為若要透過提交按鈕觸發瀏覽器內建驗證，通常需要放在 `form` 表單域中 | 否 |
| ACR-008 | `atomic/測試/14-表單新增屬性與placeholder樣式.md` | 範例保留空的 `id=""` | 移除空 `id=""`，保留其他表單屬性 | 否 |

## 檢查結果

- 是否只修正使用者確認的問題 ID：是
- 是否只更新 `atomic/<章節>/*.md`：是
- 是否未修改 `origin/<章節>/*.md`：是
- 是否未修改 `origin/<章節>/assets/`：是
- 是否保留 atomic note 來源資訊：是
- 是否未將 atomic note 改寫成正式 notes：是
