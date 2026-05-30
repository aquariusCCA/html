# radio 與 checkbox 選項控件

## 學習目標

讀完這篇筆記，你應該能夠：

- 分辨 `radio` 與 `checkbox` 的使用時機。
- 使用相同的 `name` 建立單選群組。
- 使用 `value` 決定提交資料。
- 使用 `checked` 設定預設選取。

## 問題情境

有些資料不適合讓使用者自由輸入，而是應該從固定選項中挑選。

例如：

- 性別、付款方式、配送方式：通常只能選一個。
- 興趣、訂閱項目、可參加時段：可能可以選多個。

這時候就會用到 `radio` 和 `checkbox`。

## 一句話理解

`radio` 用於「多選一」，`checkbox` 用於「可複選」。

## radio 單選框

```html
<form action="/profile" method="post">
  <p>性別</p>

  <label>
    <input type="radio" name="gender" value="female">
    女
  </label>

  <label>
    <input type="radio" name="gender" value="male">
    男
  </label>

  <label>
    <input type="radio" name="gender" value="other" checked>
    其他
  </label>

  <button type="submit">儲存</button>
</form>
```

### 程式碼拆解

- `type="radio"`：建立單選按鈕。
- `name="gender"`：同一組 radio 要使用相同的 `name`，才會形成多選一。
- `value="female"`：這個選項真正提交出去的資料值。
- `checked`：預設選取這個選項。

### 常見錯誤：同一組 radio 使用不同 name

```html
<input type="radio" name="genderFemale" value="female"> 女
<input type="radio" name="genderMale" value="male"> 男
```

這樣兩個選項不會互斥，使用者可能同時選到多個。

正確寫法：

```html
<input type="radio" name="gender" value="female"> 女
<input type="radio" name="gender" value="male"> 男
```

## checkbox 複選框

```html
<form action="/settings" method="post">
  <p>想訂閱的內容</p>

  <label>
    <input type="checkbox" name="topics" value="html" checked>
    HTML
  </label>

  <label>
    <input type="checkbox" name="topics" value="css">
    CSS
  </label>

  <label>
    <input type="checkbox" name="topics" value="javascript">
    JavaScript
  </label>

  <button type="submit">儲存設定</button>
</form>
```

### 程式碼拆解

- `type="checkbox"`：建立複選框。
- `name="topics"`：同一類資料可以使用相同名稱，方便後端當成一組資料處理。
- `value`：每個選項提交出去的值。
- `checked`：預設勾選。

## radio 與 checkbox 的判斷

| 需求 | 適合控件 |
| --- | --- |
| 使用者只能選一個 | `radio` |
| 使用者可以選零個、一個或多個 | `checkbox` |
| 選項很多且想節省空間 | 優先考慮 `select` |

## 重點整理

- `radio` 是單選，`checkbox` 是複選。
- 同一組 `radio` 必須使用相同的 `name`。
- `value` 是提交出去的資料，不一定等於畫面文字。
- `checked` 可以設定預設選取，但不要讓預設值誤導使用者。
