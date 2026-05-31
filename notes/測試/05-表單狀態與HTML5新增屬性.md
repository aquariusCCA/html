# 表單狀態與 HTML5 新增屬性

## 學習目標

讀完這篇筆記，你應該能夠：

- 使用 `disabled` 禁用表單控件。
- 理解被禁用控件不會提交資料。
- 使用 `required`、`placeholder`、`autofocus`、`autocomplete` 改善表單操作。
- 使用 CSS 調整 `placeholder` 的樣式。
- 避免把提示文字當成真正的欄位標籤。

## 問題情境

有些表單欄位在特定情況下不能讓使用者操作，例如活動已額滿時停用提交按鈕，或某些欄位要等使用者選擇方案後才能填寫。

另外，現代表單也常需要基本驗證、輸入提示、自動聚焦與自動完成控制。這些可以透過 HTML 屬性先處理一部分，不一定一開始就全部交給 JavaScript。

## disabled：禁用表單控件

只要在表單控件上加上 `disabled`，該控件就會被禁用。

```html
<input type="text" value="無法輸入" disabled>
<button disabled>無法點擊的按鈕</button>
```

`input`、`textarea`、`button`、`select`、`option` 都可以設定 `disabled`。

## 禁用單個控件

```html
<input type="text" value="無法輸入" disabled>

<button disabled>無法點擊的按鈕</button>

<select disabled>
  <option>選項 1</option>
  <option>選項 2</option>
</select>

<textarea disabled>無法編輯</textarea>

<input type="radio" disabled> 單選按鈕
<input type="checkbox" disabled> 複選框
```

瀏覽器通常會用灰色或較淡的樣式提示使用者：這個控件目前不可用。

## 禁用一組控件

如果想一次禁用一組相關控件，可以在 `<fieldset>` 上使用 `disabled`。

```html
<fieldset disabled>
  <legend>帳戶資訊</legend>

  <label for="account">帳戶</label>
  <input type="text" id="account" name="account" value="demo">

  <button type="button">檢查帳戶</button>
</fieldset>
```

這樣 `fieldset` 內的多數表單控件都會被停用。

## disabled 的提交行為

被 `disabled` 的控件不會被包含在表單提交資料中。

```html
<form action="/profile" method="post">
  <input type="text" name="username" value="ming">
  <input type="text" name="role" value="admin" disabled>

  <button type="submit">送出</button>
</form>
```

送出時，`username` 會提交，但 `role` 不會提交。若資料必須送出，就不要只依賴 disabled 欄位保存它。

## HTML5 常見表單屬性

![表單新增屬性與用途表](../../origin/測試/assets/images/new-form-attributes-img-001-e0f09b.png)

常見新增屬性可以先掌握這幾個：

| 屬性 | 作用 |
| --- | --- |
| `required` | 表示欄位必填，提交時瀏覽器會檢查 |
| `placeholder` | 顯示輸入提示文字 |
| `autofocus` | 頁面載入後自動聚焦到該欄位 |
| `autocomplete` | 控制瀏覽器是否提供自動完成建議 |

## 綜合範例

```html
<form action="/search" method="get">
  <label for="keyword">搜尋關鍵字</label>
  <input
    type="search"
    id="keyword"
    name="keyword"
    required
    placeholder="請輸入關鍵字"
    autofocus
    autocomplete="off"
  >

  <button type="submit">提交</button>
</form>
```

這段程式碼中：

- `required` 表示欄位不可空白。
- `placeholder` 顯示欄位提示。
- `autofocus` 讓頁面載入後游標直接進入欄位。
- `autocomplete="off"` 要求瀏覽器不要提供自動完成建議。

## 修改 placeholder 樣式

可以使用 `::placeholder` 選擇器修改 placeholder 文字樣式。

```css
input::placeholder {
  color: pink;
}
```

這只會影響提示文字，不會影響使用者真正輸入的內容。

## 常見錯誤

### 期待 disabled 欄位會一起提交

```html
<input type="text" name="userId" value="1001" disabled>
```

這個欄位會顯示在畫面上，但不會提交。若資料需要提交，應重新設計資料來源，不要用 disabled 欄位當作提交依據。

### 只用 placeholder 當標籤

```html
<input type="email" name="email" placeholder="Email">
```

placeholder 會在使用者輸入後消失，不適合取代欄位標籤。比較好的寫法是搭配 `<label>`：

```html
<label for="email">Email</label>
<input type="email" id="email" name="email" placeholder="請輸入 Email">
```

### 忘記 autocomplete 的正確拼字

```html
<input type="search" autocommplete="off">
```

`autocomplete` 拼錯時，瀏覽器不會套用預期效果。

正確寫法：

```html
<input type="search" autocomplete="off">
```

## 實務使用場景

- 欄位暫時不能填寫：使用 `disabled`。
- 欄位必填：使用 `required`。
- 需要提示輸入格式：使用 `placeholder`，但仍保留 `<label>`。
- 表單第一個主要欄位希望自動取得焦點：使用 `autofocus`。
- 不希望瀏覽器顯示歷史輸入建議：使用 `autocomplete="off"`。

## 重點整理

- `disabled` 可以禁用表單控件。
- 被 `disabled` 的控件不會提交資料。
- 可以用 `<fieldset disabled>` 一次禁用一組控件。
- `required`、`placeholder`、`autofocus`、`autocomplete` 能改善基本表單體驗。
- placeholder 是提示文字，不應取代 label。
- `input::placeholder` 可用來調整 placeholder 樣式。
