<!--
source_atomic:
  - atomic/240-表單標籤/03-input基礎與常用屬性.md
  - atomic/240-表單標籤/04-文字與密碼輸入控件.md
-->

# input 基礎與文字、密碼輸入

## 學習目標

讀完這篇筆記，你應該能夠：

- 理解 `<input>` 在表單中的用途。
- 知道 `type` 如何決定輸入控件的型態。
- 使用 `text` 與 `password` 建立基本輸入欄位。
- 分辨 `name`、`value`、`placeholder`、`maxlength` 的作用。

## 使用情境

當網頁需要讓使用者輸入一小段資料時，最常用的控件就是 `<input>`。例如帳號、密碼、手機號碼、搜尋關鍵字、驗證碼，都可以從 `<input>` 開始設計。

一句話理解：

> `<input>` 是表單中用來收集使用者輸入的單標籤，並透過 `type` 決定它呈現成哪一種控件。

## input 的基本語法

```html
<input type="text" name="username">
```

這段程式碼會建立一個單行文字輸入框。

- `<input>`：建立輸入控件。
- `type="text"`：表示這是單行文字欄位。
- `name="username"`：提交時的欄位名稱。

`<input>` 是單標籤，不需要寫成 `<input></input>`。

## type 決定輸入型態

`type` 是 `<input>` 非常重要的屬性。不同的 `type` 會讓瀏覽器產生不同的控件。

![input type 屬性值對照表](../../origin/240-表單標籤/assets/images/form-controls-img-001-849948.png)

例如：

```html
<input type="text">
<input type="password">
<input type="radio">
<input type="checkbox">
<input type="file">
```

它們都使用 `<input>`，但因為 `type` 不同，呈現的控件與行為也不同。

## 常用屬性

![input 標籤常用屬性表](../../origin/240-表單標籤/assets/images/form-controls-img-002-417f2d.png)

初學者最需要先掌握這幾個：

- `name`：提交資料時的欄位名稱。
- `value`：欄位的值；在文字框中可作為初始值，在按鈕或選項中常是提交值或顯示值。
- `placeholder`：輸入前顯示的提示文字。
- `maxlength`：限制最多可輸入的字元數。
- `checked`：讓 radio 或 checkbox 預設被選中。

## 文字框

文字框用於讓使用者輸入單行文字。

```html
<label for="username">使用者名稱</label>
<input id="username" type="text" name="username" placeholder="請輸入使用者名稱" maxlength="20">
```

範例拆解：

- `label` 說明這個欄位要填什麼。
- `for="username"` 對應到 `input` 的 `id="username"`。
- `type="text"` 建立文字輸入框。
- `name="username"` 讓提交資料有欄位名稱。
- `placeholder` 在尚未輸入時提供提示。
- `maxlength="20"` 限制最多輸入 20 個字元。

## 密碼框

密碼框用於輸入不應直接顯示的文字，例如密碼。

```html
<label for="password">密碼</label>
<input id="password" type="password" name="password" placeholder="請輸入密碼">
```

`type="password"` 會讓瀏覽器把輸入內容以遮蔽方式呈現，避免旁人直接看到。

不過要注意：密碼框只是改變畫面顯示方式，不代表資料已經被加密。真正的安全處理仍需要 HTTPS、後端驗證與安全的密碼儲存方式。

## value 與 placeholder 的差異

`value` 是欄位真正的值，`placeholder` 是提示文字。

```html
<!-- 不建議把提示文字放在 value -->
<input type="text" name="username" value="請輸入使用者名稱">

<!-- 較適合的寫法 -->
<input type="text" name="username" placeholder="請輸入使用者名稱">
```

第一種寫法會讓「請輸入使用者名稱」變成欄位值。使用者若直接提交，這段文字可能被送出。第二種寫法只是提示，不會在使用者未輸入時當成欄位值。

## 常見錯誤

### 欄位沒有 name

```html
<input type="text" placeholder="請輸入帳號">
```

使用者可以輸入，但提交時缺少欄位名稱。應改成：

```html
<input type="text" name="account" placeholder="請輸入帳號">
```

### 密碼框預填密碼

```html
<input type="password" name="password" value="123456">
```

這樣不只使用體驗差，也容易造成安全風險。密碼欄位通常不應預填固定值。

### 把 maxlength 當作完整驗證

`maxlength` 只能限制字元數，不能保證內容格式正確。像帳號規則、密碼強度、特殊字元檢查仍應由後端或更完整的驗證流程處理。

## 實務判斷準則

- 短文字輸入使用 `type="text"`。
- 密碼輸入使用 `type="password"`。
- 提示文字用 `placeholder`，不要用 `value` 假裝提示。
- 要提交的欄位一定要有 `name`。
- HTML 屬性可以改善使用體驗，但不能取代後端驗證。

## 重點整理

- `<input>` 是表單中最常見的輸入控件。
- `type` 決定 `<input>` 的控件型態。
- `text` 適合單行文字，`password` 適合密碼輸入。
- `name` 是提交欄位名稱，`value` 是欄位值，`placeholder` 是提示。
- 密碼框只遮蔽畫面，不等於資料安全。

## 自我檢查

1. `value` 與 `placeholder` 最大的差異是什麼？
2. 為什麼密碼欄位通常不建議預填 `value`？
3. 一個要提交到後端的文字欄位，為什麼需要 `name`？
