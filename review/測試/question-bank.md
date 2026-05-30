# 複習題庫：測試

## 題目總覽

| 題號 | 層次 | 題型 | 對應觀念 | 來源筆記 |
| --- | --- | --- | --- | --- |
| L1-001 | Level 1 記憶型 | 定義回憶 | 表單用途與三個組成 | `notes/測試/01-表單入門與form基本結構.md` |
| L1-002 | Level 1 記憶型 | 屬性默寫 | `<form>` 常用屬性 | `notes/測試/01-表單入門與form基本結構.md` |
| L1-003 | Level 1 記憶型 | 規則整理 | 基礎 `<input>` 屬性 | `notes/測試/02-input標籤與基礎輸入控件.md` |
| L1-004 | Level 1 記憶型 | 分類判斷 | `radio` 與 `checkbox` | `notes/測試/03-radio與checkbox選項控件.md` |
| L1-005 | Level 1 記憶型 | 分類判斷 | 表單按鈕 `type` | `notes/測試/04-表單按鈕與提交重置操作.md` |
| L1-006 | Level 1 記憶型 | 語法回憶 | `<select>`、`<option>`、`<textarea>` | `notes/測試/05-select與textarea表單控件.md` |
| L1-007 | Level 1 記憶型 | 規則整理 | `label`、`fieldset`、`disabled` | `notes/測試/06-表單標籤分組與禁用狀態.md` |
| L1-008 | Level 1 記憶型 | 分類整理 | HTML5 input 類型與新增屬性 | `notes/測試/07-HTML5-input類型與新增表單屬性.md` |
| L2-001 | Level 2 理解型 | 原因解釋 | 表單域與控件關係 | `notes/測試/01-表單入門與form基本結構.md` |
| L2-002 | Level 2 理解型 | 差異比較 | `value`、`placeholder`、`password` | `notes/測試/02-input標籤與基礎輸入控件.md` |
| L2-003 | Level 2 理解型 | 原因解釋 | radio 群組與提交值 | `notes/測試/03-radio與checkbox選項控件.md` |
| L2-004 | Level 2 理解型 | 情境判斷 | submit、reset、button | `notes/測試/04-表單按鈕與提交重置操作.md` |
| L2-005 | Level 2 理解型 | 情境判斷 | select、radio、checkbox、textarea | `notes/測試/05-select與textarea表單控件.md` |
| L2-006 | Level 2 理解型 | 原因解釋 | label 關聯與 disabled 提交行為 | `notes/測試/06-表單標籤分組與禁用狀態.md` |
| L2-007 | Level 2 理解型 | 情境判斷 | HTML5 type、required、placeholder 與 label | `notes/測試/07-HTML5-input類型與新增表單屬性.md` |
| L3-001 | Level 3 應用型 | 結構設計 | 註冊表單基本結構 | `notes/測試/01-表單入門與form基本結構.md` |
| L3-002 | Level 3 應用型 | 小實作 | hidden 與文字輸入 | `notes/測試/02-input標籤與基礎輸入控件.md` |
| L3-003 | Level 3 應用型 | 改需求 | radio 與 checkbox 組合 | `notes/測試/03-radio與checkbox選項控件.md` |
| L3-004 | Level 3 應用型 | 除錯 | 表單按鈕預設提交 | `notes/測試/04-表單按鈕與提交重置操作.md` |
| L3-005 | Level 3 應用型 | 結構設計 | fieldset、label、select、textarea | `notes/測試/05-select與textarea表單控件.md`、`notes/測試/06-表單標籤分組與禁用狀態.md` |
| L3-006 | Level 3 應用型 | 小實作 | HTML5 input 類型與新增屬性 | `notes/測試/07-HTML5-input類型與新增表單屬性.md` |

---

## L1-001：說出表單的用途與三個組成

- 複習層次：Level 1 記憶型
- 題型：定義回憶
- 對應觀念：表單用途、表單域、表單控件、提示信息
- 來源筆記：`notes/測試/01-表單入門與form基本結構.md`
- 建議複習節點：D0, D1, D7

### 題目

不看筆記，請用 1 到 2 句話說明表單的用途，並列出一個完整表單通常包含哪三個部分。

### 作答要求

- 必須提到「收集使用者輸入」與「送出資料」。
- 必須列出表單域、表單控件、提示信息。

### 參考答案 / 評分要點

表單是用來收集使用者輸入，並把資料送出去的 HTML 結構。一個完整表單通常包含表單域、表單控件與提示信息。

### 錯題回流

如果答錯，請回到 Level 1 補強表單用途，再重做 L1-002。

---

## L1-002：默寫 `<form>` 的常用屬性

- 複習層次：Level 1 記憶型
- 題型：屬性默寫
- 對應觀念：`action`、`method`、`name`、`target`
- 來源筆記：`notes/測試/01-表單入門與form基本結構.md`
- 建議複習節點：D0, D1, D7

### 題目

請列出 `<form>` 的 4 個常用屬性，並各用一句話說明用途。

### 作答要求

- 必須包含 `action`、`method`、`name`、`target`。
- 說明要短，不需要寫完整教學。

### 參考答案 / 評分要點

- `action`：指定表單資料要送到哪個位址。
- `method`：指定提交方式，例如 `get` 或 `post`。
- `name`：表單名稱，方便程式識別。
- `target`：指定提交後結果在哪裡開啟。

### 錯題回流

如果答錯，請重讀 `<form>` 常用屬性表，並在 D1 重新默寫。

---

## L1-003：整理基礎 `<input>` 屬性的角色

- 複習層次：Level 1 記憶型
- 題型：規則整理
- 對應觀念：`type`、`name`、`value`、`placeholder`、`maxlength`
- 來源筆記：`notes/測試/02-input標籤與基礎輸入控件.md`
- 建議複習節點：D0, D1, D7

### 題目

請說明 `type`、`name`、`value`、`placeholder`、`maxlength` 在 `<input>` 中各自負責什麼。

### 作答要求

- 不要把 `value` 和 `placeholder` 混在一起。
- 必須提到 `name` 與提交資料有關。

### 參考答案 / 評分要點

- `type` 決定輸入控件類型。
- `name` 是提交資料時的欄位名稱。
- `value` 是預設值或真正提交的值。
- `placeholder` 是輸入前顯示的提示文字。
- `maxlength` 限制最大輸入字元數。

### 錯題回流

如果答錯，請先重做 `value` 與 `placeholder` 的比較，再做 L2-002。

---

## L1-004：分辨 `radio` 與 `checkbox`

- 複習層次：Level 1 記憶型
- 題型：分類判斷
- 對應觀念：單選與複選
- 來源筆記：`notes/測試/03-radio與checkbox選項控件.md`
- 建議複習節點：D0, D1, D7

### 題目

請分別說明 `radio` 與 `checkbox` 適合用在什麼選項需求。

### 作答要求

- 必須指出 `radio` 是多選一。
- 必須指出 `checkbox` 可以選零個、一個或多個。

### 參考答案 / 評分要點

`radio` 用於一組固定選項中只能選一個的情境；`checkbox` 用於可以複選的情境，使用者可以不選、選一個或選多個。

### 錯題回流

如果答錯，請回到來源筆記的「radio 與 checkbox 的判斷」表，再補做 L2-003。

---

## L1-005：整理三種表單按鈕

- 複習層次：Level 1 記憶型
- 題型：分類判斷
- 對應觀念：`submit`、`reset`、`button`
- 來源筆記：`notes/測試/04-表單按鈕與提交重置操作.md`
- 建議複習節點：D0, D1, D7

### 題目

請列出表單按鈕常見的三種 `type`，並說明各自的行為。

### 作答要求

- 必須包含 `submit`、`reset`、`button`。
- 必須提到表單中的 `<button>` 沒寫 `type` 時預設是 `submit`。

### 參考答案 / 評分要點

- `submit`：提交表單。
- `reset`：把表單恢復成初始狀態。
- `button`：不做預設表單行為，常搭配 JavaScript。
- 表單中的 `<button>` 未指定 `type` 時，預設是 `submit`。

### 錯題回流

如果答錯，請重新整理三種按鈕行為，並在 D1 重做本題。

---

## L1-006：回憶 `<select>`、`<option>` 與 `<textarea>`

- 複習層次：Level 1 記憶型
- 題型：語法回憶
- 對應觀念：下拉列表與多行文本域
- 來源筆記：`notes/測試/05-select與textarea表單控件.md`
- 建議複習節點：D0, D3, D7

### 題目

請說明 `<select>`、`<option>`、`<textarea>` 各自的用途，以及 `<textarea>` 的預設內容應該放在哪裡。

### 作答要求

- 必須提到 `<option>` 是下拉列表中的選項。
- 必須指出 `<textarea>` 預設內容放在開始標籤與結束標籤中間。

### 參考答案 / 評分要點

`<select>` 建立下拉列表，`<option>` 建立列表中的選項，`<textarea>` 建立多行文字輸入區。`<textarea>` 的預設內容放在標籤中間，不是放在 `value` 屬性。

### 錯題回流

如果答錯，請補做 L2-005 前先重讀 `<textarea>` 常見錯誤。

---

## L1-007：整理 label、fieldset 與 disabled

- 複習層次：Level 1 記憶型
- 題型：規則整理
- 對應觀念：`<label>`、`<fieldset>`、`<legend>`、`disabled`
- 來源筆記：`notes/測試/06-表單標籤分組與禁用狀態.md`
- 建議複習節點：D0, D3, D7

### 題目

請說明 `<label>`、`<fieldset>`、`<legend>` 與 `disabled` 在表單中的作用。

### 作答要求

- 必須提到 `label for` 要對應控件的 `id`。
- 必須提到被 `disabled` 的控件不會提交資料。

### 參考答案 / 評分要點

`<label>` 讓提示文字與表單控件建立關聯；`<fieldset>` 包住一組相關控件；`<legend>` 是分組標題；`disabled` 會禁用控件，而且被禁用的控件不會包含在提交資料中。

### 錯題回流

如果答錯，請回到來源筆記重看「label 的 for 和 id 對不起來」與 disabled 範例。

---

## L1-008：列出 HTML5 input 類型與新增屬性

- 複習層次：Level 1 記憶型
- 題型：分類整理
- 對應觀念：HTML5 input 類型、`required`、`autofocus`、`autocomplete`
- 來源筆記：`notes/測試/07-HTML5-input類型與新增表單屬性.md`
- 建議複習節點：D0, D3, D7

### 題目

請列出至少 5 種 HTML5 常見 `input` 類型，並說明 `required`、`autofocus`、`autocomplete` 的用途。

### 作答要求

- 類型可以從 `email`、`url`、`date`、`time`、`number`、`tel`、`search`、`color` 中選。
- 必須說明 `required` 會影響提交檢查。

### 參考答案 / 評分要點

常見類型包含 `email`、`url`、`date`、`time`、`number`、`tel`、`search`、`color`。`required` 表示欄位必填，空白提交會被瀏覽器阻擋；`autofocus` 讓欄位在頁面載入後自動聚焦；`autocomplete` 控制瀏覽器是否使用自動完成。

### 錯題回流

如果答錯，請先重建 HTML5 input 類型清單，再做 L2-007。

---

## L2-001：解釋為什麼表單控件要放在 `<form>` 裡

- 複習層次：Level 2 理解型
- 題型：原因解釋
- 對應觀念：表單域與提交範圍
- 來源筆記：`notes/測試/01-表單入門與form基本結構.md`
- 建議複習節點：D3, D7, D30

### 題目

為什麼登入表單中的帳號輸入框應該放在對應的 `<form>` 裡，而不是寫在 `<form>` 外面？

### 作答要求

- 用自己的話說明。
- 必須提到提交時瀏覽器會送出 `<form>` 範圍內的資料。

### 參考答案 / 評分要點

`<form>` 定義一組要提交的表單資料範圍。輸入框如果放在 `<form>` 外面，畫面上仍會顯示，但提交這份表單時不會自然跟著送出，資料提交流程也不清楚。

### 錯題回流

如果答錯，請重做 L1-001 與 L1-002，再用自己的話重答本題。

---

## L2-002：比較 `value`、`placeholder` 與密碼框遮蔽

- 複習層次：Level 2 理解型
- 題型：差異比較
- 對應觀念：資料值、提示文字、密碼顯示
- 來源筆記：`notes/測試/02-input標籤與基礎輸入控件.md`
- 建議複習節點：D3, D7, D30

### 題目

為什麼不應該用 `value="請輸入帳號"` 當提示文字？另外，`type="password"` 為什麼不等於資料已經安全加密？

### 作答要求

- 必須清楚分辨 `value` 與 `placeholder`。
- 必須指出 password 只負責遮蔽畫面輸入。

### 參考答案 / 評分要點

`value` 是預設值或真正提交的值，若使用者沒改，可能會把「請輸入帳號」當資料送出；提示文字應用 `placeholder`。`type="password"` 只是讓畫面上的字元被遮蔽，不代表資料傳輸或儲存時已經被安全加密。

### 錯題回流

如果答錯，請先重做 L1-003，再整理一組 `value` 與 `placeholder` 的例子。

---

## L2-003：解釋 radio 為什麼要使用相同的 `name`

- 複習層次：Level 2 理解型
- 題型：原因解釋
- 對應觀念：radio 群組、`name`、`value`
- 來源筆記：`notes/測試/03-radio與checkbox選項控件.md`
- 建議複習節點：D3, D7, D30

### 題目

同一組性別選項如果每個 `radio` 都使用不同的 `name`，會發生什麼問題？`value` 在這組選項中又負責什麼？

### 作答要求

- 必須說明不同 `name` 會破壞多選一效果。
- 必須說明 `value` 是提交出去的資料值。

### 參考答案 / 評分要點

同一組 `radio` 要使用相同的 `name` 才會形成互斥的多選一。如果使用不同 `name`，瀏覽器會把它們當成不同群組，使用者可能同時選到多個。`value` 決定該選項提交出去的值，不一定等於畫面文字。

### 錯題回流

如果答錯，請先補做 L1-004，再寫一組正確的 radio 範例。

---

## L2-004：判斷按鈕 type 對表單行為的影響

- 複習層次：Level 2 理解型
- 題型：情境判斷
- 對應觀念：`submit`、`reset`、`button`、預設提交
- 來源筆記：`notes/測試/04-表單按鈕與提交重置操作.md`
- 建議複習節點：D3, D7, D30

### 題目

登入表單裡有「取得簡訊驗證碼」與「登入」兩個按鈕。為什麼前者應該寫成 `type="button"`，後者才寫成 `type="submit"`？

### 作答要求

- 必須提到一般操作按鈕不應自動提交表單。
- 必須提到 `<button>` 在表單中沒寫 `type` 時預設是 `submit`。

### 參考答案 / 評分要點

「取得簡訊驗證碼」只是一般操作，通常等待 JavaScript 處理，不應提交表單，所以要用 `type="button"`。「登入」才是送出表單資料的動作，應用 `type="submit"`。如果表單中的 `<button>` 沒寫 `type`，預設是 `submit`，容易造成意外提交。

### 錯題回流

如果答錯，請重做 L1-005，再看 L3-004 的除錯題。

---

## L2-005：判斷何時使用 select、radio、checkbox 或 textarea

- 複習層次：Level 2 理解型
- 題型：情境判斷
- 對應觀念：表單控件選擇
- 來源筆記：`notes/測試/05-select與textarea表單控件.md`
- 建議複習節點：D3, D7, D30

### 題目

請判斷以下需求分別適合用什麼控件：城市很多但只能選一個、付款方式只能選一個、訂閱主題可以選多個、留言內容可能很多行。

### 作答要求

- 每個需求都要給出控件。
- 必須簡短說明原因。

### 參考答案 / 評分要點

城市很多但只能選一個適合 `<select>`，因為可節省空間；付款方式只能選一個適合 `radio`；訂閱主題可以選多個適合 `checkbox`; 留言內容可能很多行適合 `<textarea>`。

### 錯題回流

如果答錯，請先重做 L1-004 與 L1-006，再用自己的話重建控件選擇表。

---

## L2-006：解釋 label 關聯與 disabled 的提交影響

- 複習層次：Level 2 理解型
- 題型：原因解釋
- 對應觀念：`label for` / `id`、`disabled`
- 來源筆記：`notes/測試/06-表單標籤分組與禁用狀態.md`
- 建議複習節點：D3, D7, D30

### 題目

為什麼 `label for="user"` 必須對應到控件的 `id="user"`？如果一個欄位仍需要提交資料，為什麼不能直接加上 `disabled`？

### 作答要求

- 必須說明 label 關聯會影響點擊文字時的聚焦或選取。
- 必須說明 disabled 欄位不會包含在提交資料中。

### 參考答案 / 評分要點

`label for` 要對應控件的 `id`，使用者點擊提示文字時才會聚焦或選取對應控件。`disabled` 會讓欄位不能操作，而且被禁用的控件不會提交資料；如果資料仍要送出，就不應直接使用 `disabled`。

### 錯題回流

如果答錯，請重做 L1-007，再修正一組 for/id 不一致的範例。

---

## L2-007：判斷 HTML5 type 與新增屬性的使用

- 複習層次：Level 2 理解型
- 題型：情境判斷
- 對應觀念：HTML5 input 類型、`required`、placeholder 與 label
- 來源筆記：`notes/測試/07-HTML5-input類型與新增表單屬性.md`
- 建議複習節點：D3, D7, D30

### 題目

為什麼 Email 欄位應該優先使用 `type="email"` 而不是全部寫成 `type="text"`？為什麼重要欄位不能只靠 `placeholder` 當標籤文字？

### 作答要求

- 必須提到特定 `type` 可以提供語意、基本檢查或合適輸入介面。
- 必須提到使用者輸入後 placeholder 會消失，重要欄位仍應搭配 `<label>`。

### 參考答案 / 評分要點

`type="email"` 讓瀏覽器知道欄位語意，能提供基本格式檢查或更合適的輸入介面。`placeholder` 只是輸入前的提示，使用者一輸入就會消失，重要欄位仍應使用 `<label>` 提供穩定的欄位名稱。

### 錯題回流

如果答錯，請先重做 L1-008，再整理 `placeholder` 與 `<label>` 的差異。

---

## L3-001：設計一個註冊表單基本結構

- 複習層次：Level 3 應用型
- 題型：結構設計
- 對應觀念：`<form>`、`action`、`method`、`label`、`input`、`submit`
- 來源筆記：`notes/測試/01-表單入門與form基本結構.md`
- 建議複習節點：D7, D14, D30

### 任務情境

請設計一個註冊表單，包含帳號欄位與提交按鈕。

### 任務要求

- 表單提交到 `/register`。
- 使用 `method="post"`。
- 帳號欄位的 `name` 是 `username`。
- 必須有提示文字與提交按鈕。

### 參考答案 / 評分要點

```html
<form action="/register" method="post" name="registerForm">
  <label for="username">帳號</label>
  <input type="text" id="username" name="username">

  <button type="submit">註冊</button>
</form>
```

### 錯題回流

如果答錯，請拆回 L1-001、L1-002 與 L2-001，確認 `<form>` 範圍與 `name` 的角色。

---

## L3-002：建立留言表單並帶上隱藏資料

- 複習層次：Level 3 應用型
- 題型：小實作
- 對應觀念：`type="hidden"`、`type="text"`、`name`、`value`
- 來源筆記：`notes/測試/02-input標籤與基礎輸入控件.md`
- 建議複習節點：D7, D14, D30

### 任務情境

文章留言表單需要讓使用者輸入留言，同時提交文章 ID `100`。

### 任務要求

- 表單提交到 `/article/comment`，使用 `post`。
- 使用 hidden 欄位提交 `articleId=100`。
- 留言欄位的 `name` 是 `comment`。
- 不要把提示文字放進 `value`。

### 參考答案 / 評分要點

```html
<form action="/article/comment" method="post">
  <input type="hidden" name="articleId" value="100">

  <label for="comment">留言</label>
  <input type="text" id="comment" name="comment" placeholder="請輸入留言">

  <button type="submit">送出留言</button>
</form>
```

### 錯題回流

如果答錯，請重做 L1-003 與 L2-002，再檢查 hidden 欄位是否有 `name` 與 `value`。

---

## L3-003：設計單選與複選設定表單

- 複習層次：Level 3 應用型
- 題型：改需求
- 對應觀念：`radio`、`checkbox`、相同 `name`、`value`、`checked`
- 來源筆記：`notes/測試/03-radio與checkbox選項控件.md`
- 建議複習節點：D7, D14, D30

### 任務情境

使用者要設定配送方式與訂閱主題。配送方式只能選一個，訂閱主題可以選多個。

### 任務要求

- 配送方式使用 `radio`，同一組 `name` 是 `delivery`。
- 訂閱主題使用 `checkbox`，同一類資料 `name` 是 `topics`。
- 每個選項都要有 `value`。
- 至少設定一個預設選取。

### 參考答案 / 評分要點

```html
<form action="/settings" method="post">
  <p>配送方式</p>
  <label>
    <input type="radio" name="delivery" value="home" checked>
    宅配
  </label>
  <label>
    <input type="radio" name="delivery" value="store">
    超商取貨
  </label>

  <p>訂閱主題</p>
  <label>
    <input type="checkbox" name="topics" value="html" checked>
    HTML
  </label>
  <label>
    <input type="checkbox" name="topics" value="css">
    CSS
  </label>

  <button type="submit">儲存</button>
</form>
```

### 錯題回流

如果答錯，請重做 L1-004 與 L2-003，確認 radio 是否同名且 checkbox 是否允許複選。

---

## L3-004：修正意外提交的驗證碼按鈕

- 複習層次：Level 3 應用型
- 題型：除錯
- 對應觀念：`<button>` 預設 `submit`、`type="button"`
- 來源筆記：`notes/測試/04-表單按鈕與提交重置操作.md`
- 建議複習節點：D7, D14, D30

### 任務情境

以下登入表單中，使用者點「取得簡訊驗證碼」時會意外提交表單。

```html
<form action="/login" method="post">
  <label for="phone">手機號碼</label>
  <input type="text" id="phone" name="phone">

  <button>取得簡訊驗證碼</button>
  <button type="submit">登入</button>
</form>
```

### 任務要求

- 指出錯誤原因。
- 寫出修正後的 HTML。

### 參考答案 / 評分要點

錯誤原因：表單中的 `<button>` 沒有寫 `type` 時預設是 `submit`，所以會意外提交表單。

```html
<form action="/login" method="post">
  <label for="phone">手機號碼</label>
  <input type="text" id="phone" name="phone">

  <button type="button">取得簡訊驗證碼</button>
  <button type="submit">登入</button>
</form>
```

### 錯題回流

如果答錯，請回到 L1-005 與 L2-004，重新整理三種按鈕行為。

---

## L3-005：設計分組的個人資料表單

- 複習層次：Level 3 應用型
- 題型：結構設計
- 對應觀念：`fieldset`、`legend`、`label`、`select`、`textarea`
- 來源筆記：`notes/測試/05-select與textarea表單控件.md`、`notes/測試/06-表單標籤分組與禁用狀態.md`
- 建議複習節點：D7, D14, D30

### 任務情境

請建立一個個人資料表單，分成「基本資料」與「補充說明」兩組。

### 任務要求

- 使用 `<fieldset>` 與 `<legend>` 分組。
- 城市使用 `<select>`，每個 `<option>` 都要有 `value`，並設定一個 `selected`。
- 補充說明使用 `<textarea>`，包含 `rows` 與 `cols`。
- 需要使用 `label for` 對應控件 `id`。

### 參考答案 / 評分要點

```html
<form action="/profile" method="post">
  <fieldset>
    <legend>基本資料</legend>

    <label for="city">居住地</label>
    <select id="city" name="city">
      <option value="tp">台北</option>
      <option value="tc" selected>台中</option>
      <option value="ks">高雄</option>
    </select>
  </fieldset>

  <fieldset>
    <legend>補充說明</legend>

    <label for="message">說明</label>
    <textarea id="message" name="message" rows="5" cols="30">無</textarea>
  </fieldset>

  <button type="submit">儲存</button>
</form>
```

### 錯題回流

如果答錯，請拆回 L1-006、L1-007、L2-005 與 L2-006，逐一檢查 select、textarea、label 與 fieldset。

---

## L3-006：建立 HTML5 搜尋表單

- 複習層次：Level 3 應用型
- 題型：小實作
- 對應觀念：`type="search"`、`required`、`placeholder`、`autofocus`、`autocomplete`
- 來源筆記：`notes/測試/07-HTML5-input類型與新增表單屬性.md`
- 建議複習節點：D7, D14, D30

### 任務情境

請建立一個搜尋表單，讓使用者輸入關鍵字。

### 任務要求

- 表單提交到 `/search`，使用 `get`。
- 欄位使用 `type="search"`。
- 欄位必填，並提供 placeholder。
- 頁面載入後自動聚焦到搜尋欄位。
- 關閉瀏覽器自動完成。
- 重要欄位要搭配 `<label>`，不能只靠 placeholder。

### 參考答案 / 評分要點

```html
<form action="/search" method="get">
  <label for="keyword">搜尋</label>
  <input
    type="search"
    id="keyword"
    name="keyword"
    required
    placeholder="請輸入關鍵字"
    autofocus
    autocomplete="off"
  >

  <button type="submit">搜尋</button>
</form>
```

### 錯題回流

如果答錯，請重做 L1-008 與 L2-007，檢查 `autocomplete` 拼字、`required` 與 `<label>` 是否正確。
