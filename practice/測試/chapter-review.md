# 練習題：表單章節整合練習

## 來源

- 來源模式：章節複習
- 來源路徑：`notes/測試/`

## 題目總覽

| 題號 | 難度 | 題型 | 對應觀念 |
| --- | --- | --- | --- |
| 1 | Level 3 | 變形題 | 搜尋表單、`method="get"`、`select`、`required` |
| 2 | Level 3 | 變形題 | `radio`、`checkbox`、`checked`、`label` |
| 3 | Level 4 | 除錯題 | `<button>` 預設行為、`label for`、`name`、`autocomplete` |
| 4 | Level 4 | 除錯題 | `textarea`、`select option`、`disabled`、提交資料 |
| 5 | Level 5 | 實戰題 | 會員註冊表單、欄位分組、HTML5 input 類型 |
| 6 | Level 5 | 實戰題 | 活動報名表單、單選複選、下拉選單、多行輸入 |
| 7 | Level 5 | 實戰題 | 客服回饋表單、必填欄位、禁用狀態、重置與提交 |

---

## 題目 1：商品搜尋與篩選表單

- 難度：Level 3
- 題型：變形題
- 對應觀念：`form`、`method="get"`、`input type="search"`、`select`、`required`
- 來源筆記：`notes/測試/01-表單入門與form基本結構.md`、`notes/測試/05-select與textarea表單控件.md`、`notes/測試/07-HTML5-input類型與新增表單屬性.md`

### 任務說明

請建立一個商品搜尋表單。這不是筆記中的一般搜尋範例，你需要加入分類篩選與必填限制。

### 完成條件

- 使用 `<form>`，`action` 設為 `/products/search`，`method` 設為 `get`。
- 建立一個搜尋關鍵字欄位，使用 `type="search"`，欄位名稱為 `keyword`。
- 搜尋關鍵字欄位要有 `<label>`、`placeholder`、`required`、`autocomplete="off"`。
- 建立一個商品分類下拉選單，欄位名稱為 `category`。
- 下拉選單至少包含「全部商品」、「書籍」、「課程」三個選項，並替每個 `<option>` 設定明確的 `value`。
- 使用 `<button type="submit">` 建立提交按鈕。

### 提示

搜尋表單通常適合使用 `method="get"`，因為搜尋條件可以出現在網址查詢參數中。

### 參考答案

```html
<form action="/products/search" method="get">
  <label for="keyword">搜尋關鍵字</label>
  <input
    type="search"
    id="keyword"
    name="keyword"
    required
    placeholder="請輸入商品名稱"
    autocomplete="off"
  >

  <label for="category">商品分類</label>
  <select id="category" name="category">
    <option value="all">全部商品</option>
    <option value="books">書籍</option>
    <option value="courses">課程</option>
  </select>

  <button type="submit">搜尋</button>
</form>
```

### 檢查重點

- `<form>` 的 `action` 和 `method` 是否符合搜尋情境。
- 搜尋欄位是否使用 `type="search"`，而不是一律使用 `text`。
- 重要欄位是否有正式的 `<label>`，而不是只依賴 `placeholder`。
- `<option>` 是否都有明確的 `value`。

---

## 題目 2：通知偏好設定表單

- 難度：Level 3
- 題型：變形題
- 對應觀念：`radio`、`checkbox`、`value`、`checked`、`label`
- 來源筆記：`notes/測試/03-radio與checkbox選項控件.md`、`notes/測試/06-表單標籤分組與禁用狀態.md`

### 任務說明

請建立一個通知偏好設定表單。使用者只能選擇一種通知頻率，但可以勾選多個通知主題。

### 完成條件

- 使用 `<form>`，`action` 設為 `/settings/notifications`，`method` 設為 `post`。
- 建立一組通知頻率 `radio`，欄位名稱都要是 `frequency`。
- 通知頻率至少包含「每天」、「每週」、「不通知」，並讓「每週」預設選取。
- 建立一組通知主題 `checkbox`，欄位名稱都要是 `topics`。
- 通知主題至少包含「課程更新」、「活動消息」、「優惠資訊」。
- 每個選項都要有明確的 `value`。
- 每個選項都要能點擊文字完成選取。

### 提示

同一組 `radio` 必須使用相同的 `name`，才會形成多選一。`checkbox` 可以用相同 `name` 表示同一組可複選資料。

### 參考答案

```html
<form action="/settings/notifications" method="post">
  <fieldset>
    <legend>通知頻率</legend>

    <label>
      <input type="radio" name="frequency" value="daily">
      每天
    </label>

    <label>
      <input type="radio" name="frequency" value="weekly" checked>
      每週
    </label>

    <label>
      <input type="radio" name="frequency" value="none">
      不通知
    </label>
  </fieldset>

  <fieldset>
    <legend>通知主題</legend>

    <label>
      <input type="checkbox" name="topics" value="course">
      課程更新
    </label>

    <label>
      <input type="checkbox" name="topics" value="event">
      活動消息
    </label>

    <label>
      <input type="checkbox" name="topics" value="promotion">
      優惠資訊
    </label>
  </fieldset>

  <button type="submit">儲存設定</button>
</form>
```

### 檢查重點

- 同一組 `radio` 是否使用相同的 `name="frequency"`。
- `checked` 是否只用在合理的預設選項上。
- 每個選項是否都有 `value`，避免只提交畫面文字。
- 文字是否與控件有關聯，方便使用者點擊。

---

## 題目 3：登入表單錯誤修正

- 難度：Level 4
- 題型：除錯題
- 對應觀念：`label for`、`id`、`name`、`button type`、`autocomplete`
- 來源筆記：`notes/測試/02-input標籤與基礎輸入控件.md`、`notes/測試/04-表單按鈕與提交重置操作.md`、`notes/測試/06-表單標籤分組與禁用狀態.md`、`notes/測試/07-HTML5-input類型與新增表單屬性.md`

### 錯誤程式碼

```html
<form action="/login" method="post">
  <label for="user">帳號</label>
  <input type="text" id="username" placeholder="請輸入帳號">

  <label for="password">密碼</label>
  <input type="password" id="password" name="password" placeholder="請輸入密碼">

  <button>取得驗證碼</button>
  <button type="submit">登入</button>
</form>
```

### 任務說明

請指出這段登入表單至少三個錯誤或風險，並寫出修正後的 HTML。

### 完成條件

- 修正 `label for` 與控件 `id` 對不起來的問題。
- 帳號欄位要有 `name`，讓資料能被提交。
- 「取得驗證碼」不能意外提交表單。
- 可以補上合理的 `required` 或 `autocomplete` 設定。
- 保留登入提交按鈕。

### 提示

在表單裡，`<button>` 沒有寫 `type` 時，預設行為是 `submit`。

### 參考答案

```html
<form action="/login" method="post">
  <label for="username">帳號</label>
  <input
    type="text"
    id="username"
    name="username"
    required
    placeholder="請輸入帳號"
    autocomplete="username"
  >

  <label for="password">密碼</label>
  <input
    type="password"
    id="password"
    name="password"
    required
    placeholder="請輸入密碼"
    autocomplete="current-password"
  >

  <button type="button">取得驗證碼</button>
  <button type="submit">登入</button>
</form>
```

### 檢查重點

- `label for="username"` 是否對應 `id="username"`。
- 每個需要提交的欄位是否有 `name`。
- 一般操作按鈕是否使用 `type="button"`。
- 必填與自動完成屬性是否寫在正確欄位上。

---

## 題目 4：回饋表單錯誤修正

- 難度：Level 4
- 題型：除錯題
- 對應觀念：`textarea`、`select`、`option value`、`disabled`、表單提交資料
- 來源筆記：`notes/測試/05-select與textarea表單控件.md`、`notes/測試/06-表單標籤分組與禁用狀態.md`

### 錯誤程式碼

```html
<form action="/feedback" method="post">
  <label for="type">問題類型</label>
  <select id="type">
    <option>功能問題</option>
    <option>帳號問題</option>
  </select>

  <label for="message">問題描述</label>
  <textarea id="message" type="text" value="請輸入問題描述"></textarea>

  <input type="text" name="email" value="user@example.com" disabled>

  <button type="submit">送出</button>
</form>
```

### 任務說明

請指出這段回饋表單的錯誤原因，並寫出修正後的 HTML。

### 完成條件

- `<select>` 要能提交問題類型資料。
- 每個 `<option>` 建議有明確的 `value`。
- `<textarea>` 不要使用 `type` 和 `value` 設定內容。
- 如果 Email 仍需要提交，不應使用 `disabled`。
- 需要提交的欄位都要有 `name`。

### 提示

`disabled` 欄位不會包含在表單提交資料中；`textarea` 的預設內容要放在開始與結束標籤中間。

### 參考答案

```html
<form action="/feedback" method="post">
  <label for="type">問題類型</label>
  <select id="type" name="type">
    <option value="feature">功能問題</option>
    <option value="account">帳號問題</option>
  </select>

  <label for="message">問題描述</label>
  <textarea
    id="message"
    name="message"
    rows="5"
    cols="30"
    placeholder="請輸入問題描述"
  ></textarea>

  <label for="email">Email</label>
  <input type="email" id="email" name="email" value="user@example.com">

  <button type="submit">送出</button>
</form>
```

### 檢查重點

- `<select>` 是否有 `name`。
- `<option>` 是否有明確 `value`。
- `<textarea>` 是否使用正確格式。
- 需要提交的 Email 是否避免使用 `disabled`。

---

## 題目 5：會員註冊表單

- 難度：Level 5
- 題型：實戰題
- 對應觀念：完整表單、欄位分組、`label`、基礎與 HTML5 input 類型、提交按鈕
- 來源筆記：`notes/測試/01-表單入門與form基本結構.md`、`notes/測試/02-input標籤與基礎輸入控件.md`、`notes/測試/06-表單標籤分組與禁用狀態.md`、`notes/測試/07-HTML5-input類型與新增表單屬性.md`

### 任務說明

請建立一個會員註冊表單，讓使用者輸入帳號、密碼、Email、生日與偏好的主題色。

### 需求清單

- 表單 `action` 設為 `/register`，`method` 設為 `post`。
- 使用 `<fieldset>` 和 `<legend>` 分成「帳號資料」與「個人設定」兩組。
- 帳號欄位使用 `type="text"`，欄位名稱為 `username`，最多 20 個字元。
- 密碼欄位使用 `type="password"`，欄位名稱為 `password`，最多 30 個字元。
- Email 欄位使用 `type="email"`，欄位名稱為 `email`。
- 生日欄位使用 `type="date"`，欄位名稱為 `birthday`。
- 主題色欄位使用 `type="color"`，欄位名稱為 `themeColor`。
- 重要欄位要有 `<label>`，且 `for` 要對應控件 `id`。
- 帳號、密碼、Email 要設為必填。
- 表單最後要有提交按鈕。

### 完成條件

- 表單結構完整，可讀性清楚。
- 欄位類型符合資料用途。
- 必填欄位使用 `required`。
- 每個需要提交的欄位都有 `name`。

### 提示

不要把所有欄位都寫成 `type="text"`。HTML5 input 類型可以讓瀏覽器提供更合適的輸入介面與基本驗證。

### 參考答案

```html
<form action="/register" method="post">
  <fieldset>
    <legend>帳號資料</legend>

    <label for="username">帳號</label>
    <input
      type="text"
      id="username"
      name="username"
      maxlength="20"
      required
      placeholder="請輸入帳號"
      autocomplete="username"
    >

    <label for="password">密碼</label>
    <input
      type="password"
      id="password"
      name="password"
      maxlength="30"
      required
      placeholder="請輸入密碼"
      autocomplete="new-password"
    >

    <label for="email">Email</label>
    <input
      type="email"
      id="email"
      name="email"
      required
      placeholder="example@mail.com"
      autocomplete="email"
    >
  </fieldset>

  <fieldset>
    <legend>個人設定</legend>

    <label for="birthday">生日</label>
    <input type="date" id="birthday" name="birthday">

    <label for="themeColor">主題色</label>
    <input type="color" id="themeColor" name="themeColor">
  </fieldset>

  <button type="submit">建立帳號</button>
</form>
```

### 檢查重點

- 欄位是否依資料類型選擇正確的 `input type`。
- `label for` 是否都能對應到控件 `id`。
- 必填欄位是否使用 `required`，而不是只寫提示文字。
- 分組是否讓表單結構更容易閱讀。

---

## 題目 6：活動報名表單

- 難度：Level 5
- 題型：實戰題
- 對應觀念：`radio`、`checkbox`、`select`、`textarea`、`fieldset`、提交資料值
- 來源筆記：`notes/測試/03-radio與checkbox選項控件.md`、`notes/測試/05-select與textarea表單控件.md`、`notes/測試/06-表單標籤分組與禁用狀態.md`

### 任務說明

請建立一個活動報名表單，讓使用者填寫基本資料、選擇票種、選擇可參加時段，並補充備註。

### 需求清單

- 表單 `action` 設為 `/events/register`，`method` 設為 `post`。
- 建立姓名欄位，使用 `type="text"`，欄位名稱為 `fullName`。
- 建立票種下拉選單，欄位名稱為 `ticketType`，至少包含「一般票」、「學生票」、「VIP 票」。
- 建立一組付款方式 `radio`，欄位名稱都要是 `payment`，至少包含「信用卡」與「ATM 轉帳」。
- 建立一組可參加時段 `checkbox`，欄位名稱都要是 `sessions`，至少包含「上午場」、「下午場」、「晚上場」。
- 建立備註欄位，使用 `<textarea>`，欄位名稱為 `note`。
- 使用 `<fieldset>` 和 `<legend>` 分組。
- 每個選項都要有明確 `value`。

### 完成條件

- 票種、付款方式、可參加時段都能提交清楚的資料值。
- 付款方式只能選一個；可參加時段可以複選。
- 備註欄位使用 `<textarea>`，不是 `<input type="text">`。
- 表單最後有提交按鈕。

### 提示

當固定選項很多且想節省空間時，可以使用 `<select>`；只能選一個的選項組用 `radio`；可以選多個的選項組用 `checkbox`。

### 參考答案

```html
<form action="/events/register" method="post">
  <fieldset>
    <legend>基本資料</legend>

    <label for="fullName">姓名</label>
    <input type="text" id="fullName" name="fullName" required>

    <label for="ticketType">票種</label>
    <select id="ticketType" name="ticketType">
      <option value="regular">一般票</option>
      <option value="student">學生票</option>
      <option value="vip">VIP 票</option>
    </select>
  </fieldset>

  <fieldset>
    <legend>付款方式</legend>

    <label>
      <input type="radio" name="payment" value="credit-card" checked>
      信用卡
    </label>

    <label>
      <input type="radio" name="payment" value="atm">
      ATM 轉帳
    </label>
  </fieldset>

  <fieldset>
    <legend>可參加時段</legend>

    <label>
      <input type="checkbox" name="sessions" value="morning">
      上午場
    </label>

    <label>
      <input type="checkbox" name="sessions" value="afternoon">
      下午場
    </label>

    <label>
      <input type="checkbox" name="sessions" value="evening">
      晚上場
    </label>
  </fieldset>

  <label for="note">備註</label>
  <textarea id="note" name="note" rows="4" cols="30"></textarea>

  <button type="submit">送出報名</button>
</form>
```

### 檢查重點

- `radio` 是否使用相同 `name` 形成單選群組。
- `checkbox` 是否允許多個時段一起提交。
- `<select>` 與 `<option>` 是否有穩定的提交值。
- `<textarea>` 是否使用開始與結束標籤，而不是 `value` 屬性。

---

## 題目 7：客服回饋表單

- 難度：Level 5
- 題型：實戰題
- 對應觀念：完整表單、`email`、`select`、`textarea`、`required`、`disabled`、`submit`、`reset`
- 來源筆記：`notes/測試/02-input標籤與基礎輸入控件.md`、`notes/測試/04-表單按鈕與提交重置操作.md`、`notes/測試/05-select與textarea表單控件.md`、`notes/測試/06-表單標籤分組與禁用狀態.md`、`notes/測試/07-HTML5-input類型與新增表單屬性.md`

### 任務說明

請建立一個客服回饋表單。使用者需要留下 Email、選擇問題類型、輸入問題描述，並看見一組目前暫停編輯的系統資訊。

### 需求清單

- 表單 `action` 設為 `/support/tickets`，`method` 設為 `post`。
- Email 欄位使用 `type="email"`，欄位名稱為 `email`，並設為必填。
- 問題類型使用 `<select>`，欄位名稱為 `issueType`，至少包含「帳號」、「付款」、「課程內容」。
- 問題描述使用 `<textarea>`，欄位名稱為 `message`，並設為必填。
- 顯示一組「系統資訊」欄位，使用 `<fieldset disabled>` 包住，裡面放一個目前不可編輯的版本欄位。
- 表單底部要有 `type="reset"` 的重置按鈕，以及 `type="submit"` 的送出按鈕。
- 如果欄位需要提交，不要把它放在 `disabled` 分組裡。

### 完成條件

- 必填欄位使用 `required`。
- 問題類型與描述能正常提交。
- `disabled` 只用於不需要提交的系統資訊。
- 重置按鈕與提交按鈕的 `type` 都明確。

### 提示

`disabled` 可以讓欄位不能操作，但被禁用的控件不會提交資料。`reset` 會把表單恢復成初始狀態，使用時要明確標示。

### 參考答案

```html
<form action="/support/tickets" method="post">
  <fieldset>
    <legend>聯絡資料</legend>

    <label for="email">Email</label>
    <input
      type="email"
      id="email"
      name="email"
      required
      placeholder="example@mail.com"
      autocomplete="email"
    >
  </fieldset>

  <fieldset>
    <legend>問題內容</legend>

    <label for="issueType">問題類型</label>
    <select id="issueType" name="issueType">
      <option value="account">帳號</option>
      <option value="payment">付款</option>
      <option value="course">課程內容</option>
    </select>

    <label for="message">問題描述</label>
    <textarea
      id="message"
      name="message"
      rows="6"
      cols="40"
      required
      placeholder="請描述你遇到的問題"
    ></textarea>
  </fieldset>

  <fieldset disabled>
    <legend>系統資訊</legend>

    <label for="version">系統版本</label>
    <input type="text" id="version" value="HTML Practice v1">
  </fieldset>

  <button type="reset">重新填寫</button>
  <button type="submit">送出回饋</button>
</form>
```

### 檢查重點

- 需要提交的欄位是否都有 `name` 且沒有被 `disabled`。
- `textarea` 是否正確使用 `required` 與提示文字。
- `reset` 和 `submit` 按鈕是否都明確設定 `type`。
- `disabled` 是否只用在不需要提交的資訊上。
