# HTML5 input 類型與新增表單屬性

## 學習目標

讀完這篇筆記，你應該能夠：

- 使用 HTML5 常見的新增 `input` 類型。
- 理解瀏覽器如何根據 `type` 提供基本輸入限制。
- 使用 `required`、`placeholder`、`autofocus`、`autocomplete` 改善表單體驗。
- 使用 CSS 調整 placeholder 樣式。

## 問題情境

如果所有欄位都用 `type="text"`，瀏覽器無法知道這個欄位到底是 Email、日期、數字、搜尋還是顏色。

HTML5 提供了更多 `input` 類型，讓表單更有語意，也能讓瀏覽器提供基本檢查與更合適的輸入介面。

## 新增 input 類型

![新增 input 類型與輸入限制表](../../origin/測試/assets/images/form-controls-img-003-b918e4.png)

```html
<form action="/profile" method="post">
  <ul>
    <li>Email：<input type="email" name="email"></li>
    <li>網址：<input type="url" name="website"></li>
    <li>日期：<input type="date" name="birthday"></li>
    <li>時間：<input type="time" name="meetingTime"></li>
    <li>數量：<input type="number" name="quantity"></li>
    <li>手機號碼：<input type="tel" name="phone"></li>
    <li>搜尋：<input type="search" name="keyword"></li>
    <li>顏色：<input type="color" name="themeColor"></li>
  </ul>

  <button type="submit">提交</button>
</form>
```

要看到部分類型的驗證效果，通常需要把欄位放在 `<form>` 裡，並透過提交表單觸發瀏覽器檢查。

## 常見新增表單屬性

![表單新增屬性與使用說明表](../../origin/測試/assets/images/new-form-attributes-img-001-e0f09b.png)

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

  <button type="submit">提交</button>
</form>
```

### 屬性拆解

| 屬性 | 作用 |
| --- | --- |
| `required` | 欄位必填，空白時提交會被瀏覽器阻擋 |
| `placeholder` | 顯示輸入提示文字 |
| `autofocus` | 頁面載入後自動聚焦到該欄位 |
| `autocomplete` | 控制瀏覽器是否使用自動完成 |

## placeholder 樣式

可以使用 `::placeholder` 修改提示文字樣式。

```css
input::placeholder {
  color: pink;
}
```

## 常見錯誤

### 拼錯 autocomplete

```html
<input type="search" autocommplete="off">
```

`autocomplete` 拼錯後，瀏覽器不會把它當成有效屬性。

正確寫法：

```html
<input type="search" autocomplete="off">
```

### 把 placeholder 當成 label

```html
<input type="email" placeholder="Email">
```

這樣雖然畫面上看得到提示，但使用者一輸入內容，提示就會消失。實務上重要欄位仍建議搭配 `<label>`。

```html
<label for="email">Email</label>
<input type="email" id="email" name="email" placeholder="example@mail.com">
```

## 實務判斷

- Email 欄位用 `type="email"`。
- 網址欄位用 `type="url"`。
- 數字欄位用 `type="number"`。
- 搜尋欄位用 `type="search"`。
- 日期、時間、顏色可依需求使用對應 type。
- `required` 適合用在真正不能省略的欄位，不要到處濫用。

## 重點整理

- HTML5 新增 `input` 類型可以讓欄位語意更清楚。
- 特定 `type` 可以讓瀏覽器提供基本驗證或合適輸入介面。
- `required`、`placeholder`、`autofocus`、`autocomplete` 都是常見表單體驗屬性。
- `placeholder` 不是正式標籤文字，重要欄位仍應搭配 `<label>`。
