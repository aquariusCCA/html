# 第23章_表單標籤 - 附錄查表資料

## 1. 附錄定位

### 適用範圍

本附錄對應 `notes/第23章_表單標籤/表單標籤.md`，範圍聚焦於 HTML 表單標籤、表單控制項、表單常用屬性、`name/value` 提交資料、label 關聯、禁用狀態、表單分組、最小可用片段、常見錯誤與相似概念比較。

### 使用方式

- 快速查找本章提到的表單元素、屬性與最小寫法。
- 比較 `disabled` / `readonly`、`submit` / `button`、`label for` / 巢狀 label 等相似概念。
- 查找表單常見錯誤的原因與修正方向。
- 透過來源索引回到 notes 對應小節閱讀完整說明。

---

## 2. 附錄索引

| 區塊 | 內容類型 | 適合查找的問題 |
|---|---|---|
| 3. 名詞表 | 概念與術語 | 表單域、表單控制項、`name/value` 是什麼？ |
| 4. HTML 元素表 | 元素與用途 | `<form>`、`<input>`、`<label>` 等元素何時使用？ |
| 5. 屬性表 | 屬性與值 | `type`、`name`、`required`、`disabled` 等屬性怎麼查？ |
| 9. 常用片段 | 最小程式碼範例 | 基本表單、label、select、textarea、fieldset 怎麼寫？ |
| 10. 錯誤速查表 | 常見錯誤 | 表單出錯時優先檢查什麼？ |
| 11. 相似概念對照表 | 相似概念比較 | `disabled` 和 `readonly`、`submit` 和 `button` 差在哪？ |
| 12. 來源索引 | notes 對應位置 | 附錄條目來自哪個 notes 小節？ |
| 13. 維護備註 | 維護提醒 | 後續更新時要同步什麼？ |

### 未生成區塊

| 區塊 | 不生成原因 |
|---|---|
| API / 方法表 | 原筆記未明確教 API、DOM 方法或事件；表單與 JavaScript 的關係只作為概念補充。 |
| 指令表 | 原筆記沒有 CLI 指令。 |
| 設定檔範例 | 原筆記沒有設定檔內容。 |

---

## 3. 名詞表

| 名詞 | 英文 | 簡要定義 | 用途 | 注意事項 | 來源 |
|---|---|---|---|---|---|
| 表單 | form | 用來收集使用者輸入資料的 HTML 機制。 | 登入、註冊、搜尋、留言、上傳等互動場景。 | 前端驗證不能取代後端驗證。 | §2、§6 |
| 表單域 | form area / form | 包含一組表單控制項的區域。 | 定義哪些欄位要一起提交。 | 由 `<form>` 建立。 | §3.1、§4.1 |
| 表單控制項 | form control | 使用者實際輸入、選擇或觸發操作的元素。 | 收集文字、選項、檔案與按鈕操作。 | 常見包含 `<input>`、`<select>`、`<textarea>`、`<button>`。 | §3.2 |
| 提示資訊 | label / hint | 告訴使用者欄位用途或填寫要求的文字。 | 說明欄位名稱、輸入要求或錯誤訊息。 | 可見欄位應盡量搭配 `<label>`。 | §3、§3.4 |
| `name/value` | name/value | 表單提交資料的欄位名稱與欄位值。 | 讓後端或 JavaScript 辨識提交資料。 | 沒有 `name` 的欄位通常不會形成有效提交欄位。 | §3.3 |
| 表單提交 | form submission | 將表單範圍內可提交控制項的資料送出。 | 送到後端或被 JavaScript 攔截處理。 | `action` 與 `method` 決定傳統提交目的地與方式。 | §2、§4.1 |
| 單選 | radio | 多個選項中選一個。 | 通知方式、方案、單一選項。 | 同一組 radio 必須使用相同 `name`。 | §4.4 |
| 複選 | checkbox | 多個選項中可選多個。 | 興趣、同意條款、多項篩選。 | 建議明確設定 `value`。 | §4.4 |
| 隱藏欄位 | hidden input | 畫面不可見但會提交的欄位。 | 攜帶固定資料或狀態值。 | 不代表安全，使用者仍可能修改。 | §4.5 |
| 檔案欄位 | file input | 讓使用者選擇本機檔案的欄位。 | 上傳圖片、文件。 | 傳統檔案提交通常需要 `enctype="multipart/form-data"`。 | §4.5 |
| 禁用 | disabled | 表單控制項不可操作的狀態。 | 暫時停用欄位或按鈕。 | disabled 控制項不會提交。 | §4.12 |
| 唯讀 | readonly | 欄位不可編輯但仍可聚焦的狀態。 | 顯示不可修改但仍需提交的值。 | 主要用於文字類型欄位。 | §4.11、§4.12 |
| 表單分組 | fieldset grouping | 將相關控制項分成一組。 | 帳號資訊、通知設定等區塊。 | 使用 `<fieldset>` 搭配 `<legend>`。 | §4.13 |

---

## 4. HTML 元素表

| 元素 | 用途 | 常用屬性 | 使用情境 | 最小範例 | 注意事項 | 來源 |
|---|---|---|---|---|---|---|
| `<form>` | 定義表單範圍與提交設定。 | `action`、`method`、`name`、`target`、`enctype` | 一組欄位要一起提交時。 | `<form action="/submit" method="post"></form>` | `<form disabled>` 不是有效禁用方式。 | §3.1、§4.1、§4.12 |
| `<input>` | 建立多種輸入控制項。 | `type`、`name`、`value`、`id`、`placeholder`、`required`、`maxlength`、`checked`、`multiple`、`disabled`、`readonly` | 單行文字、密碼、單選、複選、檔案、按鈕等。 | `<input type="text" name="username">` | 透過 `type` 決定控制項類型。 | §4.2-§4.6 |
| `<label>` | 描述並關聯表單控制項。 | `for` | 欄位名稱、radio / checkbox 文字。 | `<label for="email">電子信箱</label>` | `for` 應對應控制項 `id`；也可包住控制項。 | §3.4、§4.7 |
| `<select>` | 建立下拉選單。 | `id`、`name`、`disabled` | 多個選項且希望節省畫面空間。 | `<select name="city"></select>` | 內部至少應包含 `<option>`。 | §4.8 |
| `<option>` | 定義下拉選單中的單一選項。 | `value`、`selected`、`disabled` | `<select>` 的選項。 | `<option value="taipei">台北</option>` | 若未設定 `value`，提交值通常使用文字內容。 | §4.8 |
| `<textarea>` | 建立多行文字輸入。 | `name`、`id`、`rows`、`cols`、`disabled`、`readonly` | 留言、評論、備註、自我介紹。 | `<textarea name="message"></textarea>` | 不能寫 `type`；預設文字放在開始與結束標籤之間。 | §4.9 |
| `<button>` | 建立提交、重置或普通按鈕。 | `type`、`disabled` | 送出、重置、觸發 JavaScript 操作。 | `<button type="submit">送出</button>` | 表單內未指定 `type` 時預設是 submit。 | §4.10 |
| `<fieldset>` | 為一組相關控制項分組。 | `disabled` | 將帳號資訊、偏好設定等欄位分區。 | `<fieldset><legend>帳號資訊</legend></fieldset>` | 可用 `<fieldset disabled>` 禁用一組控制項。 | §4.12、§4.13 |
| `<legend>` | 定義 `<fieldset>` 的分組標題。 | 原筆記未列專屬屬性。 | 說明一組欄位的主題。 | `<legend>基本資料</legend>` | 應放在 `<fieldset>` 中作為分組標題。 | §4.13 |

---

## 5. 屬性表

### 5.1 表單與控制項常用屬性

| 屬性 | 適用元素 | 常見值 | 用途 | 範例 | 注意事項 | 來源 |
|---|---|---|---|---|---|---|
| `action` | `<form>` | URL | 指定表單資料提交目的地。 | `<form action="/register">` | 原筆記以傳統表單提交角度說明。 | §4.1 |
| `method` | `<form>` | `get`、`post` | 指定提交方式。 | `<form method="post">` | `get` 常用於搜尋；`post` 常用於註冊、登入等送出資料情境。 | §4.1 |
| `name` | 表單控制項、`<form>` | 自訂欄位名稱 | 提交時的欄位名稱。 | `<input name="username">` | 沒有 `name` 通常不會形成有效提交欄位。 | §3.3、§4.3、§7 |
| `value` | `<input>`、`<option>` | 自訂值 | 指定提交值或預設值。 | `<input name="source" value="course-page">` | checkbox、radio、option 建議明確設定。 | §3.3、§4.4、§4.8 |
| `target` | `<form>` | `_self` 等 | 指定提交後回應頁面的開啟位置。 | `<form target="_self">` | 原筆記只列為 `<form>` 常用屬性，未展開完整值表。 | §4.1 |
| `enctype` | `<form>` | `multipart/form-data` | 傳統表單提交檔案時的編碼設定。 | `<form enctype="multipart/form-data">` | 原筆記只在檔案上傳情境提及。 | §4.5 |
| `type` | `<input>`、`<button>` | 見 5.2、5.3 | 指定輸入或按鈕類型。 | `<input type="email">` | `<button>` 未指定 `type` 時在表單中預設是 submit。 | §4.2、§4.10 |
| `id` | 表單控制項 | 自訂唯一值 | 讓 label 的 `for` 對應控制項。 | `<input id="email">` | `for` 的值應與 `id` 相同。 | §3.4、§4.7 |
| `for` | `<label>` | 控制項 `id` | 建立 label 與控制項關聯。 | `<label for="email">電子信箱</label>` | 也可用巢狀 label 方式建立關聯。 | §3.4、§4.7 |
| `checked` | radio、checkbox | 布林屬性 | 預設選取。 | `<input type="radio" checked>` | 主要用於單選與複選。 | §4.4 |
| `selected` | `<option>` | 布林屬性 | 預設選取某個下拉選項。 | `<option selected>高雄</option>` | 用於 `<option>`。 | §4.8 |
| `required` | 表單控制項 | 布林屬性 | 必填欄位，提交前做基本檢查。 | `<input required>` | 不能取代後端驗證。 | §4.6、§4.11、§5 |
| `placeholder` | `<input>`、`<textarea>` | 提示文字 | 輸入前顯示提示。 | `<input placeholder="請輸入關鍵字">` | 不是 label，不應取代欄位名稱。 | §4.3、§4.11、§7 |
| `autofocus` | 表單控制項 | 布林屬性 | 頁面載入後自動聚焦。 | `<input autofocus>` | 原筆記列為常見表單屬性。 | §4.11 |
| `autocomplete` | 表單控制項 | `off`、`email` 等 | 控制瀏覽器自動完成建議。 | `<input autocomplete="off">` | 原筆記指出 `autocommplete` 是錯字。 | §4.11、§5 |
| `maxlength` | `<input>` | 數字 | 限制最大輸入字元數。 | `<input maxlength="20">` | 原筆記用於文字與密碼欄位。 | §4.3、§5 |
| `multiple` | `<input type="file">` 等 | 布林屬性 | 允許多選。 | `<input type="file" multiple>` | 原筆記主要用於檔案欄位。 | §4.5、§4.11 |
| `disabled` | `<input>`、`<textarea>`、`<button>`、`<select>`、`<option>`、`<fieldset>` | 布林屬性 | 禁用控制項或一組控制項。 | `<fieldset disabled>` | disabled 欄位不會提交。 | §4.12 |
| `readonly` | 文字類型欄位、`<textarea>` | 布林屬性 | 欄位不可編輯但通常仍會提交。 | `<input readonly>` | 原筆記定位為文字類型欄位常見屬性。 | §4.11、§4.12 |
| `rows` | `<textarea>` | 數字 | 預設顯示行數。 | `<textarea rows="5"></textarea>` | 實務上尺寸通常交給 CSS 控制。 | §4.9 |
| `cols` | `<textarea>` | 數字 | 預設顯示欄數。 | `<textarea cols="40"></textarea>` | 實務上尺寸通常交給 CSS 控制。 | §4.9 |

### 5.2 `<input type>` 常見值

| `type` 值 | 用途 | 常見情境 | 最小範例 | 注意事項 | 來源 |
|---|---|---|---|---|---|
| `text` | 單行文字輸入。 | 使用者名稱、暱稱。 | `<input type="text" name="username">` | 可搭配 `maxlength`、`placeholder`。 | §4.2、§4.3 |
| `password` | 密碼輸入，內容會被遮蔽。 | 登入密碼。 | `<input type="password" name="password">` | 密碼欄位通常不設定預設 `value`。 | §4.2、§4.3、§7 |
| `radio` | 單選。 | 通知方式、方案。 | `<input type="radio" name="notice" value="email">` | 同一組 radio 使用相同 `name`。 | §4.2、§4.4 |
| `checkbox` | 複選。 | 興趣、同意條款。 | `<input type="checkbox" name="topics" value="html">` | 建議明確設定 `value`。 | §4.2、§4.4 |
| `hidden` | 隱藏欄位。 | 攜帶固定資料。 | `<input type="hidden" name="source" value="newsletter">` | 不代表安全。 | §4.5 |
| `file` | 檔案選擇。 | 上傳圖片、文件。 | `<input type="file" name="avatar">` | 多檔可搭配 `multiple`。 | §4.5 |
| `submit` | 提交按鈕。 | 送出表單。 | `<input type="submit" value="送出">` | `<input>` 按鈕文字使用 `value`。 | §4.2、§4.10 |
| `reset` | 重置按鈕。 | 還原表單初始值。 | `<input type="reset" value="重置">` | 會還原初始狀態。 | §4.2、§4.10 |
| `button` | 普通按鈕。 | 搭配 JavaScript 操作。 | `<input type="button" value="取得驗證碼">` | 普通操作不應誤用 submit。 | §4.2、§4.10 |
| `email` | 電子信箱。 | 註冊、聯絡資料。 | `<input type="email" name="email">` | 瀏覽器會做基本格式檢查。 | §4.6、§5 |
| `url` | 網址。 | 個人網站。 | `<input type="url" name="website">` | 不同瀏覽器介面可能不同。 | §4.6 |
| `date` | 日期。 | 生日、預約日期。 | `<input type="date" name="birthDate">` | 介面呈現可能因裝置不同。 | §4.6 |
| `time` | 時間。 | 預約時間。 | `<input type="time" name="time">` | 原筆記只列常見用途。 | §4.6 |
| `number` | 數字。 | 數量。 | `<input type="number" name="quantity">` | 原筆記只列常見用途。 | §4.6 |
| `tel` | 電話號碼。 | 手機號碼。 | `<input type="tel" name="phone">` | 手機可能顯示不同鍵盤。 | §4.6 |
| `search` | 搜尋欄位。 | 關鍵字搜尋。 | `<input type="search" name="q">` | 常搭配 `method="get"` 搜尋表單。 | §4.6、§5 |
| `color` | 顏色選擇。 | 選取顏色。 | `<input type="color" name="favoriteColor">` | 介面呈現可能因瀏覽器不同。 | §4.6 |

### 5.3 `<button type>` 常見值

| `type` 值 | 作用 | 最小範例 | 注意事項 | 來源 |
|---|---|---|---|---|
| `submit` | 提交表單。 | `<button type="submit">送出</button>` | 真正送出表單時使用。 | §4.10 |
| `reset` | 重置表單到初始狀態。 | `<button type="reset">重置</button>` | 會還原欄位初始值。 | §4.10 |
| `button` | 普通按鈕。 | `<button type="button">取得驗證碼</button>` | 表單內一般操作按鈕應明確指定。 | §4.10、§7 |

---

## 9. 常用片段

### 9.1 最小表單與 `name/value`

| 項目 | 說明 |
|---|---|
| 使用情境 | 建立一個會提交欄位資料的最小表單。 |
| 使用前提 | 欄位需要有 `name`。 |
| 來源 | §3.1、§3.3 |

```html
<form action="/register" method="post">
  <label for="username">使用者名稱</label>
  <input type="text" id="username" name="username">

  <button type="submit">註冊</button>
</form>
```

### 注意事項

- `name="username"` 是提交時的欄位名稱。
- 沒有 `name` 的欄位通常不會形成有效提交資料。

### 9.2 label 使用 `for/id` 關聯

| 項目 | 說明 |
|---|---|
| 使用情境 | label 與控制項分開排版。 |
| 使用前提 | 控制項有唯一 `id`。 |
| 來源 | §3.4、§4.7 |

```html
<label for="email">電子信箱</label>
<input type="email" id="email" name="email">
```

### 注意事項

- `for` 的值應與控制項 `id` 相同。
- 不要用普通文字取代 `<label>`。

### 9.3 巢狀 label

| 項目 | 說明 |
|---|---|
| 使用情境 | radio 或 checkbox 文字與控制項一起點擊。 |
| 使用前提 | 控制項放在 `<label>` 裡面。 |
| 來源 | §4.7 |

```html
<label>
  <input type="checkbox" name="topics" value="html">
  HTML
</label>
```

### 注意事項

- 點擊 label 文字也能操作對應控制項。
- 若需要更彈性的版面配置，可改用 `for/id`。

### 9.4 radio 單選組

| 項目 | 說明 |
|---|---|
| 使用情境 | 多個選項中只能選一個。 |
| 使用前提 | 同一組 radio 使用相同 `name`。 |
| 來源 | §4.4 |

```html
<input type="radio" id="notice-email" name="notice" value="email" checked>
<label for="notice-email">電子信箱</label>

<input type="radio" id="notice-sms" name="notice" value="sms">
<label for="notice-sms">簡訊</label>
```

### 注意事項

- `checked` 可設定預設選取。
- 同一組 radio 的 `name` 不一致時，無法形成單選效果。

### 9.5 checkbox 複選組

| 項目 | 說明 |
|---|---|
| 使用情境 | 多個選項可同時選取。 |
| 使用前提 | 每個選項有明確 `value`。 |
| 來源 | §4.4 |

```html
<input type="checkbox" id="topic-html" name="topics" value="html">
<label for="topic-html">HTML</label>

<input type="checkbox" id="topic-css" name="topics" value="css">
<label for="topic-css">CSS</label>
```

### 注意事項

- 多個 checkbox 可使用相同 `name` 表示同一組資料。
- 建議明確設定 `value`。

### 9.6 hidden 與 file 欄位

| 項目 | 說明 |
|---|---|
| 使用情境 | 攜帶固定資料與上傳檔案。 |
| 使用前提 | 傳統檔案提交時設定 `enctype="multipart/form-data"`。 |
| 來源 | §4.5 |

```html
<form action="/upload" method="post" enctype="multipart/form-data">
  <input type="hidden" name="source" value="newsletter">

  <label for="avatar">上傳頭像</label>
  <input type="file" id="avatar" name="avatar">

  <button type="submit">上傳</button>
</form>
```

### 注意事項

- hidden 欄位畫面不可見，但不代表安全。
- file 欄位可搭配 `multiple` 允許多選。

### 9.7 select 下拉選單

| 項目 | 說明 |
|---|---|
| 使用情境 | 多個選項且希望節省畫面空間。 |
| 使用前提 | `<select>` 內有 `<option>`。 |
| 來源 | §4.8 |

```html
<label for="city">城市</label>
<select id="city" name="city">
  <option value="">請選擇城市</option>
  <option value="taipei">台北</option>
  <option value="kaohsiung" selected>高雄</option>
</select>
```

### 注意事項

- `<select>` 的 `name` 是提交欄位名稱。
- `<option>` 的 `value` 是被選取時提交的值。

### 9.8 textarea 多行文字

| 項目 | 說明 |
|---|---|
| 使用情境 | 留言、評論、備註、自我介紹。 |
| 使用前提 | 需要多行文字輸入。 |
| 來源 | §4.9 |

```html
<label for="message">留言內容</label>
<textarea id="message" name="message" rows="5">預設文字</textarea>
```

### 注意事項

- `<textarea>` 不能寫 `type`。
- 預設文字放在開始標籤與結束標籤之間。

### 9.9 button 三種 type

| 項目 | 說明 |
|---|---|
| 使用情境 | 提交、重置或一般操作按鈕。 |
| 使用前提 | 按鈕位於表單內時要明確設定 `type`。 |
| 來源 | §4.10 |

```html
<button type="submit">提交表單</button>
<button type="reset">重置表單</button>
<button type="button">取得驗證碼</button>
```

### 注意事項

- 表單內 `<button>` 未指定 `type` 時預設是 submit。
- 普通操作按鈕應寫 `type="button"`。

### 9.10 常見屬性搜尋表單

| 項目 | 說明 |
|---|---|
| 使用情境 | 搜尋表單。 |
| 使用前提 | 搜尋條件適合出現在網址中時可使用 `method="get"`。 |
| 來源 | §4.11、§5 |

```html
<form action="/search" method="get">
  <label for="q">搜尋關鍵字</label>
  <input
    type="search"
    id="q"
    name="q"
    required
    placeholder="搜尋文章"
    autocomplete="off"
  >

  <button type="submit">搜尋</button>
</form>
```

### 注意事項

- `placeholder` 不應取代 label。
- `required` 是前端基本檢查，不是最終資料驗證。

### 9.11 disabled 與 fieldset disabled

| 項目 | 說明 |
|---|---|
| 使用情境 | 停用單一控制項或一組控制項。 |
| 使用前提 | 不需要提交被禁用欄位資料。 |
| 來源 | §4.12 |

```html
<fieldset disabled>
  <legend>帳號資訊</legend>

  <label for="account">帳號</label>
  <input type="text" id="account" name="account" value="demo">

  <button type="button">檢查帳號</button>
</fieldset>
```

### 注意事項

- `disabled` 控制項不會提交。
- 禁用一組控制項使用 `<fieldset disabled>`，不是 `<form disabled>`。

### 9.12 fieldset 與 legend 分組

| 項目 | 說明 |
|---|---|
| 使用情境 | 將相關欄位分成清楚區塊。 |
| 使用前提 | 一組控制項屬於同一主題。 |
| 來源 | §4.13、§5 |

```html
<fieldset>
  <legend>基本資料</legend>

  <label for="username">使用者名稱</label>
  <input type="text" id="username" name="username">
</fieldset>
```

### 注意事項

- `<legend>` 是分組標題。
- 表單分組有助於結構清楚與可訪問性。

### 9.13 placeholder 顏色

| 項目 | 說明 |
|---|---|
| 使用情境 | 調整 placeholder 提示文字顏色。 |
| 使用前提 | 只調整視覺樣式，不取代 label。 |
| 來源 | §4.11 |

```css
input::placeholder {
  color: #777;
}
```

### 注意事項

- 這是 CSS 片段，僅作為本章表單屬性補充。
- `placeholder` 不是欄位名稱。

---

## 10. 錯誤速查表

| 錯誤現象 | 可能原因 | 修正方向 | 對應知識點 | 來源 |
|---|---|---|---|---|
| 後端或 JavaScript 收不到某個欄位。 | 表單控制項缺少 `name`。 | 需要提交的欄位都設定有意義的 `name`。 | `name/value` | §3.3、§7 |
| 點擊欄位名稱文字不會聚焦輸入框。 | 沒有使用 `<label>` 或 `for/id` 不一致。 | 使用 `<label for="...">` 對應控制項 `id`，或使用巢狀 label。 | label 關聯 | §3.4、§4.7、§7 |
| 輸入後欄位提示消失，使用者忘記欄位意義。 | 用 `placeholder` 取代 label。 | 保留可見或可被輔助工具讀取的 label。 | `placeholder` vs label | §4.3、§7 |
| radio 可以同時選多個。 | 同一組 radio 的 `name` 不一致。 | 同一組 radio 使用相同 `name`。 | radio 單選 | §4.4、§7 |
| 後端收到 checkbox 資料不清楚。 | checkbox 沒有設定明確 `value`。 | 為每個 checkbox 設定可辨識的 `value`。 | checkbox 複選 | §4.4、§7 |
| 點擊普通按鈕卻送出表單。 | `<button>` 在表單內未指定 `type`，預設是 submit。 | 普通操作按鈕寫 `type="button"`。 | button 預設行為 | §4.10、§7 |
| 想禁用整個表單但沒有作用。 | 使用 `<form disabled>`。 | 使用 `<fieldset disabled>` 或個別設定 `disabled`。 | 禁用表單控制項 | §4.12、§7 |
| disabled 欄位沒有送到後端。 | 忘記 disabled 欄位不會提交。 | 若要不可編輯但仍提交，可考慮 `readonly`。 | `disabled` vs `readonly` | §4.12、§7 |
| 密碼欄位出現預設密碼。 | 對密碼欄位設定預設 `value`。 | 密碼欄位通常不設定預設值。 | password 欄位 | §7 |
| 前端通過驗證就直接信任資料。 | 把前端驗證當成唯一驗證。 | 前端改善體驗，後端仍必須做最終驗證。 | 表單驗證責任 | §4.1、§7 |
| `<textarea>` 寫了 `type` 卻沒有意義。 | 把 `<textarea>` 當成 `<input>`。 | `<textarea>` 不寫 `type`，內容放在開始與結束標籤之間。 | textarea | §4.9 |
| 屬性 `autocomplete` 沒有效果。 | 拼成 `autocommplete`。 | 使用正確拼字 `autocomplete`。 | 常見表單屬性 | §4.11 |

---

## 11. 相似概念對照表

### 11.1 `name` vs `value`

| 比較項目 | `name` | `value` |
|---|---|---|
| 定義 | 欄位名稱。 | 欄位值。 |
| 使用時機 | 需要提交或辨識欄位時。 | 需要指定提交值或預設值時。 |
| 常見寫法 | `<input name="username">` | `<input value="alex">` |
| 注意事項 | 沒有 `name` 通常不會提交。 | radio、checkbox、option 建議明確設定。 |
| 常見錯誤 | 只寫 `id`，忘記 `name`。 | checkbox 不寫 `value`，資料不清楚。 |

### 選用建議

- 每個要提交的欄位都應有清楚的 `name`。
- 選項型欄位應明確設定可辨識的 `value`。

### 11.2 `get` vs `post`

| 比較項目 | `get` | `post` |
|---|---|---|
| 定義 | 提交方式之一，資料通常放在 URL query string 中。 | 提交方式之一，資料通常放在請求本文中。 |
| 使用時機 | 搜尋、篩選等可被分享或重新整理的請求。 | 註冊、登入、下單、留言等送出內容或改變伺服器資料的情境。 |
| 常見寫法 | `<form method="get">` | `<form method="post">` |
| 注意事項 | 原筆記只說明常見使用情境。 | 原筆記只說明常見使用情境。 |
| 常見錯誤 | 把所有表單都寫成 get。 | 以為 post 就不需要後端驗證。 |

### 選用建議

- 搜尋表單可優先考慮 `get`。
- 註冊、登入、留言等送出資料情境可優先考慮 `post`。

### 11.3 `radio` vs `checkbox`

| 比較項目 | `radio` | `checkbox` |
|---|---|---|
| 定義 | 單選控制項。 | 複選控制項。 |
| 使用時機 | 多個選項中只能選一個。 | 多個選項可同時選取。 |
| 常見寫法 | `<input type="radio" name="notice" value="email">` | `<input type="checkbox" name="topics" value="html">` |
| 注意事項 | 同一組必須使用相同 `name`。 | 建議明確設定 `value`。 |
| 常見錯誤 | 同組 radio 的 `name` 不一致。 | 沒有設定 `value`。 |

### 選用建議

- 互斥選項使用 radio。
- 可多選的選項使用 checkbox。

### 11.4 `label for/id` vs 巢狀 label

| 比較項目 | `label for/id` | 巢狀 label |
|---|---|---|
| 定義 | `for` 對應控制項 `id`。 | 控制項放在 `<label>` 裡。 |
| 使用時機 | label 與控制項需要分開排版。 | 文字與控制項自然放在一起。 |
| 常見寫法 | `<label for="email">電子信箱</label><input id="email">` | `<label><input type="checkbox"> HTML</label>` |
| 注意事項 | `for` 與 `id` 必須一致。 | 版面彈性可能較低。 |
| 常見錯誤 | `for` 寫錯或控制項缺少 `id`。 | 以普通文字取代 label。 |

### 選用建議

- 需要彈性排版時，用 `for/id`。
- checkbox、radio 的簡短文字可用巢狀 label。

### 11.5 `select` vs `radio`

| 比較項目 | `<select>` | `radio` |
|---|---|---|
| 定義 | 下拉選單。 | 單選按鈕。 |
| 使用時機 | 選項較多且希望節省畫面空間。 | 選項較少且希望直接展示所有選項。 |
| 常見寫法 | `<select name="city"><option value="taipei">台北</option></select>` | `<input type="radio" name="city" value="taipei">` |
| 注意事項 | 內部至少應包含 `<option>`。 | 同一組 radio 需相同 `name`。 |
| 常見錯誤 | `<option>` 沒有明確 `value`。 | 同組 `name` 不一致。 |

### 選用建議

- 選項多或空間有限時用 `<select>`。
- 選項少且希望一眼看到全部選項時用 radio。

### 11.6 `<textarea>` vs `<input type="text">`

| 比較項目 | `<textarea>` | `<input type="text">` |
|---|---|---|
| 定義 | 多行文字輸入控制項。 | 單行文字輸入控制項。 |
| 使用時機 | 留言、評論、備註、自我介紹。 | 使用者名稱、暱稱等短文字。 |
| 常見寫法 | `<textarea name="message"></textarea>` | `<input type="text" name="username">` |
| 注意事項 | 不能寫 `type`；預設文字放在標籤中間。 | 透過 `type="text"` 指定文字輸入。 |
| 常見錯誤 | 把 `type` 寫在 `<textarea>` 上。 | 用單行文字框處理大量文字。 |

### 選用建議

- 長文字用 `<textarea>`。
- 短文字用 `<input type="text">`。

### 11.7 `<button>` vs `<input type="button">`

| 比較項目 | `<button>` | `<input type="button">` |
|---|---|---|
| 定義 | 按鈕元素。 | `input` 的按鈕型態。 |
| 使用時機 | 提交、重置、一般操作。 | 一般按鈕或舊式寫法。 |
| 常見寫法 | `<button type="button">取得驗證碼</button>` | `<input type="button" value="取得驗證碼">` |
| 注意事項 | 表單內未指定 `type` 時預設是 submit。 | 按鈕文字使用 `value`。 |
| 常見錯誤 | 忘記寫 `type="button"`。 | 用 `value` 以外方式設定文字。 |

### 選用建議

- 原筆記指出 `<button>` 彈性通常較好。
- 表單內按鈕都應明確指定 `type`。

### 11.8 `disabled` vs `readonly`

| 比較項目 | `disabled` | `readonly` |
|---|---|---|
| 定義 | 控制項不可操作。 | 欄位不可編輯但可聚焦。 |
| 使用時機 | 暫時停用欄位或按鈕。 | 顯示不可修改但仍需提交的值。 |
| 常見寫法 | `<input name="account" disabled>` | `<input name="account" readonly>` |
| 注意事項 | 不會提交。 | 通常會提交。 |
| 常見錯誤 | 以為 disabled 欄位會提交。 | 對不適用 readonly 的控制項期待同樣效果。 |

### 選用建議

- 不需要提交的停用欄位用 `disabled`。
- 需要提交但不允許修改的文字欄位用 `readonly`。

### 11.9 `required` vs 後端驗證

| 比較項目 | `required` | 後端驗證 |
|---|---|---|
| 定義 | HTML 原生必填檢查。 | 伺服器端資料檢查。 |
| 使用時機 | 改善使用者填表體驗。 | 最終確認資料是否合法可信。 |
| 常見寫法 | `<input required>` | 原筆記未提供後端程式碼。 |
| 注意事項 | 可被繞過，不能當唯一驗證。 | 原筆記強調後端仍必須驗證。 |
| 常見錯誤 | 只做前端驗證。 | 原筆記未提供後端實作細節。 |

### 選用建議

- 前端驗證用來改善體驗。
- 後端驗證負責最終資料安全與正確性。

---

## 12. 來源索引

| 附錄區塊 | 對應 notes 路徑 | 對應章節或小節 | 備註 |
|---|---|---|---|
| 1. 附錄定位 | `notes/第23章_表單標籤/表單標籤.md` | 2. 本章定位、6. 實務應用場景 | 定義附錄範圍與使用方式。 |
| 3. 名詞表 | `notes/第23章_表單標籤/表單標籤.md` | 2. 本章定位、3. 核心概念、4. 語法與基本用法 | 取自本章核心術語與表單資料流。 |
| 4. HTML 元素表 | `notes/第23章_表單標籤/表單標籤.md` | 3.2 表單控制項負責保存使用者輸入、4.2-4.13 | 本章主題是表單標籤，因此生成完整元素表。 |
| 5. 屬性表 | `notes/第23章_表單標籤/表單標籤.md` | 3.3、4.1-4.12、5. 範例說明 | 僅收錄 notes 明確提到的屬性與 `type` 值。 |
| 9. 常用片段 | `notes/第23章_表單標籤/表單標籤.md` | 3.1-3.4、4.1-4.13、5. 範例說明 | 範例裁切為最小可用片段。 |
| 10. 錯誤速查表 | `notes/第23章_表單標籤/表單標籤.md` | 4.3-4.12、7. 常見錯誤與修正 | 整理錯誤現象、原因與修正方向。 |
| 11. 相似概念對照表 | `notes/第23章_表單標籤/表單標籤.md` | 3.3、4.1、4.4、4.7-4.12、7. 常見錯誤與修正 | 比較本章容易混淆的概念。 |
| 13. 維護備註 | `notes/第23章_表單標籤/表單標籤.md` | 全文 | 後續 notes 更新時同步維護本附錄。 |

---

## 13. 維護備註

- 若 `notes/` 新增表單元素、屬性或 `input type` 值，需同步更新「HTML 元素表」與「屬性表」。
- 若 `notes/` 後續加入 DOM API、事件處理或表單驗證 API，再補生成「API / 方法表」；目前不生成。
- 若 `notes/` 新增後端提交、檔案上傳或安全驗證細節，應同步補充「常用片段」與「錯誤速查表」。
- 若新增 demo、practice 或 review，不應直接混入本附錄；本附錄只保存 notes 可支撐的查表型資料。
- 本附錄的範例皆採最小可用片段；若需要完整教學流程，回到 `notes/第23章_表單標籤/表單標籤.md` 閱讀。
