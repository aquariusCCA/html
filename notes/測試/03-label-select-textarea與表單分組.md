# label、select、textarea 與表單分組

## 學習目標

讀完這篇筆記，你應該能夠：

- 使用 `<label>` 將提示文字和表單控件關聯起來。
- 使用 `<select>` 與 `<option>` 建立下拉選單。
- 使用 `<textarea>` 建立多行文字輸入區。
- 使用 `<fieldset>` 與 `<legend>` 替表單控件分組。
- 分辨這些標籤在可用性與語意上的作用。

## 問題情境

如果表單只有一堆輸入框，使用者會很難判斷每個欄位的用途。點擊「帳號」文字時，如果游標不會進入帳號欄位，操作也會比較不直覺。

表單除了要能提交資料，也要讓使用者容易理解、容易操作。`label`、`select`、`textarea`、`fieldset` 這些標籤就是用來補足表單的語意與使用體驗。

## label：把文字提示和控件綁在一起

`<label>` 用來綁定一個表單控件。關聯成功後，使用者點擊 label 文字時，瀏覽器會自動讓對應控件取得焦點或被選取。

這對文字框、單選框、複選框都很重要，尤其是 radio 和 checkbox，因為它們本身可點擊範圍較小。

## label 的兩種寫法

### 使用 for 與 id 關聯

```html
<input type="radio" name="gender" id="man" value="man">
<label for="man">男</label>
```

`label` 的 `for` 必須和對應控件的 `id` 相同。這樣點擊「男」這段文字時，就會選到 `id="man"` 的 radio。

### 把控件包進 label

```html
<label>
  <input type="radio" name="gender" value="woman">
  女
</label>
```

這種寫法不需要 `for` 與 `id`，因為控件已經在 label 內部。

## select 與 option：建立下拉選單

當選項很多，但不希望全部攤開佔用頁面空間時，可以使用 `<select>` 建立下拉選單。

```html
<label for="city">縣市</label>
<select id="city" name="city">
  <option value="hlj">黑龍江</option>
  <option value="ln">遼寧</option>
  <option value="jl">吉林</option>
  <option value="gd" selected>廣東</option>
</select>
```

這段程式碼中：

- `<select>` 是整個下拉選單。
- `<option>` 是每一個可選項目。
- `name="city"` 是提交資料時的欄位名稱。
- `value="gd"` 是選到廣東時提交的資料值。
- `selected` 表示預設選中這個選項。

`<select>` 中至少要有一組 `<option>`。如果 `option` 沒有寫 `value`，提交時通常會送出 option 中間的文字；實務上建議明確設定 `value`，讓資料更穩定。

## textarea：多行文字輸入

當使用者需要輸入較多文字，例如留言、評論、個人簡介，就不適合使用單行的 `input type="text"`，而應該使用 `<textarea>`。

```html
<label for="message">留言內容</label>
<textarea
  id="message"
  name="message"
  rows="6"
  cols="40"
  placeholder="請輸入留言"
></textarea>
```

`textarea` 常見屬性：

| 屬性 | 作用 |
| --- | --- |
| `name` | 提交資料時的欄位名稱 |
| `rows` | 預設顯示行數，影響高度 |
| `cols` | 預設顯示列數，影響寬度 |
| `placeholder` | 提示使用者可以輸入什麼 |
| `maxlength` | 限制可輸入字元數 |
| `disabled` | 禁用欄位 |
| `readonly` | 只能讀取，不能修改 |

`textarea` 不使用 `type` 屬性。實務上，尺寸通常會交給 CSS 控制，`rows` 和 `cols` 主要提供基本預設。

## fieldset 與 legend：替表單分組

當表單欄位變多，可以用 `<fieldset>` 把相關欄位分成一組，再用 `<legend>` 說明這組欄位的標題。

```html
<form action="/profile" method="post">
  <fieldset>
    <legend>主要資訊</legend>

    <label for="account">帳戶</label>
    <input type="text" id="account" name="account" maxlength="10">

    <label for="password">密碼</label>
    <input type="password" id="password" name="password" maxlength="16">
  </fieldset>

  <fieldset>
    <legend>偏好設定</legend>

    <label>
      <input type="radio" name="gender" value="woman">
      女
    </label>

    <label>
      <input type="radio" name="gender" value="man">
      男
    </label>
  </fieldset>

  <button type="submit">提交</button>
</form>
```

`fieldset` 不是單純為了畫框，而是告訴瀏覽器與輔助工具：這些欄位是一組。`legend` 則是這一組欄位的標題。

## 常見錯誤

### label 的 for 和 input 的 id 對不起來

```html
<label for="email">Email</label>
<input type="email" id="userEmail" name="email">
```

這樣點擊 `Email` 文字時，不會正確聚焦到輸入框。

正確寫法：

```html
<label for="email">Email</label>
<input type="email" id="email" name="email">
```

### textarea 寫成 input 的用法

```html
<textarea type="text" name="message" value="預設內容"></textarea>
```

`textarea` 不需要 `type`，內容也不是用 `value` 屬性設定。

正確寫法：

```html
<textarea name="message">預設內容</textarea>
```

### 下拉選單沒有穩定的 value

```html
<select name="city">
  <option>廣東</option>
</select>
```

如果後端期待的是代碼或固定值，建議寫成：

```html
<select name="city">
  <option value="gd">廣東</option>
</select>
```

## 重點整理

- `<label>` 讓提示文字和表單控件建立關聯，可提升操作體驗。
- `label for` 要對應到控件的 `id`。
- `<select>` 用於下拉選單，內部至少要有一組 `<option>`。
- `<textarea>` 用於多行文字輸入，不使用 `type` 屬性。
- `<fieldset>` 和 `<legend>` 可以讓大型表單更有結構，也更符合語意。
