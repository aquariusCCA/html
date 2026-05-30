# input 標籤與基礎輸入控件

## 學習目標

讀完這篇筆記，你應該能夠：

- 說明 `<input>` 在表單中的角色。
- 使用 `type` 切換不同輸入控件。
- 正確使用文字框、密碼框與隱藏欄位。
- 理解 `name`、`value`、`placeholder`、`maxlength` 的差異。

## 問題情境

註冊頁面通常需要讓使用者輸入帳號、密碼，有時還會帶上一些使用者看不到、但提交時需要一起送出的固定資料。

這些需求大多可以透過 `<input>` 完成。

## 一句話理解

`<input>` 是表單中最常見的輸入控件，真正的樣子由 `type` 屬性決定。

![input type 屬性值與控件類型表](../../origin/測試/assets/images/form-controls-img-001-849948.png)

## input 的基本語法

```html
<input type="text" name="username">
```

這段程式碼中：

- `<input>`：建立輸入控件。
- `type="text"`：指定這是一個單行文字輸入框。
- `name="username"`：指定提交資料時的欄位名稱。

`<input>` 是單標籤，不需要寫成 `<input></input>`。

## 常用屬性

![input 常用屬性與作用表](../../origin/測試/assets/images/form-controls-img-002-417f2d.png)

| 屬性 | 作用 | 注意 |
| --- | --- | --- |
| `type` | 決定輸入控件類型 | 例如 `text`、`password`、`hidden` |
| `name` | 提交資料時的欄位名稱 | 沒有 `name` 通常不會形成可辨識的提交資料 |
| `value` | 預設值或真正提交的值 | 不等於提示文字 |
| `placeholder` | 輸入前顯示的提示文字 | 使用者輸入後會消失 |
| `maxlength` | 限制可輸入的最大字元數 | 適合簡單長度限制 |

## 文本框

文本框用於單行文字輸入，例如帳號、姓名、搜尋關鍵字。

```html
<form action="/register" method="post">
  <label for="username">帳號</label>
  <input
    type="text"
    id="username"
    name="username"
    placeholder="請輸入帳號"
    maxlength="20"
  >

  <button type="submit">送出</button>
</form>
```

### 常見錯誤：把 value 當成提示文字

```html
<input type="text" name="username" value="請輸入帳號">
```

`value` 是真正的預設值。若使用者沒有修改，這段文字可能會被當成資料提交出去。

比較適合的寫法是：

```html
<input type="text" name="username" placeholder="請輸入帳號">
```

## 密碼框

密碼框用於輸入不希望直接顯示在畫面上的內容。

```html
<form action="/login" method="post">
  <label for="password">密碼</label>
  <input
    type="password"
    id="password"
    name="password"
    placeholder="請輸入密碼"
    maxlength="30"
  >

  <button type="submit">登入</button>
</form>
```

注意：密碼框只是讓畫面上的字元被遮蔽，不代表資料已經被安全加密。

## hidden 隱藏域

`type="hidden"` 會建立使用者看不到的輸入欄位。它通常用來提交固定資料。

```html
<form action="/article/comment" method="post">
  <input type="hidden" name="articleId" value="100">

  <label for="comment">留言</label>
  <input type="text" id="comment" name="comment">

  <button type="submit">送出留言</button>
</form>
```

這段表單送出時，除了使用者輸入的留言，也會一起提交 `articleId=100`。

## 實務判斷

- 使用者需要輸入短文字：用 `type="text"`。
- 使用者需要輸入密碼：用 `type="password"`。
- 畫面不需要顯示，但提交時需要帶資料：用 `type="hidden"`。
- 想放提示文字：用 `placeholder`，不要用 `value` 假裝提示文字。

## 重點整理

- `<input>` 的型態由 `type` 決定。
- `name` 是提交資料時很重要的欄位名稱。
- `value` 是資料值；`placeholder` 是提示文字。
- `password` 只負責遮蔽畫面輸入，不等於安全處理。
- `hidden` 不會顯示在畫面上，但會跟著表單提交。
