# 表單用途與 form 表單域

## 學習目標

讀完這篇筆記，你應該能夠：

- 理解表單在網頁中的用途。
- 說明表單域、表單控件與提示資訊的關係。
- 使用 `<form>` 建立可以提交資料的表單範圍。
- 知道 `action`、`method`、`name`、`target` 這些屬性的基本作用。

## 問題情境

只顯示文字與圖片的網頁，使用者只能閱讀內容。當網站需要讓使用者輸入帳號、填寫留言、選擇性別、上傳檔案或送出註冊資料時，就需要表單。

表單的核心任務是收集使用者資料，並在需要時把資料送到伺服器。

## 一句話理解

表單是網頁用來「收集使用者輸入」的 HTML 結構，而 `<form>` 是包住這些輸入控件並負責提交資料的表單域。

## 表單的三個組成

一個完整的 HTML 表單通常包含三個部分：

- 表單域：用 `<form>` 定義資料提交的範圍。
- 表單控件：讓使用者輸入或選擇資料，例如 `<input>`、`<select>`、`<textarea>`。
- 提示資訊：告訴使用者每個欄位要填什麼，例如文字標籤、欄位說明、錯誤提示。

![表單由表單控件、提示信息與表單域組成](../../origin/測試/assets/images/form-intro-img-001-a837a3.png)

如果只有輸入框，卻沒有清楚的提示資訊，使用者可能不知道要填什麼。如果只有控件，卻沒有 `<form>` 表單域，資料也不一定會被整理成一次完整的提交。

## form 標籤的作用

`<form>` 標籤用來定義表單域。它會把範圍內可提交的表單控件資料，依指定方式送到指定位置。

```html
<form action="/signup" method="post" name="signupForm" target="_self">
  <label for="username">帳號</label>
  <input type="text" id="username" name="username">

  <button type="submit">送出</button>
</form>
```

這段程式碼中：

- `<form>` 到 `</form>` 之間，就是這份表單的提交範圍。
- `action="/signup"` 表示表單資料要送到 `/signup`。
- `method="post"` 表示使用 POST 方式提交。
- `name="signupForm"` 是表單名稱，可用來辨識這份表單。
- `target="_self"` 表示提交後在目前頁面開啟回應結果。
- `name="username"` 是欄位資料送出時使用的資料名稱。

## form 常用屬性

![form 標籤 action、method、name 屬性說明表](../../origin/測試/assets/images/form-field-img-001-dedcdd.png)

常見屬性可以先這樣理解：

| 屬性 | 作用 | 實務理解 |
| --- | --- | --- |
| `action` | 指定表單資料提交到哪裡 | 通常是後端 API 或伺服器路徑 |
| `method` | 指定提交方式 | 常見為 `get` 或 `post` |
| `name` | 指定表單名稱 | 方便辨識表單 |
| `target` | 指定提交後在哪裡開啟結果 | 例如目前頁面或新視窗 |

`get` 通常適合查詢類資料，例如搜尋關鍵字。`post` 通常適合新增、註冊、登入、留言等會送出較完整資料的情境。

## 常見錯誤

### 把控件放在 form 外面

```html
<form action="/signup" method="post">
  <label for="username">帳號</label>
</form>

<input type="text" id="username" name="username">
```

這個輸入框不在 `<form>` 裡，點擊表單內的提交按鈕時，它不會自然成為這份表單要提交的資料。

### 忘記替可提交欄位加上 name

```html
<form action="/signup" method="post">
  <input type="text" placeholder="請輸入帳號">
  <button type="submit">送出</button>
</form>
```

使用者看得到輸入框，也能輸入內容，但這個欄位沒有 `name`，提交時後端很難用穩定的欄位名稱取得資料。

正確寫法：

```html
<form action="/signup" method="post">
  <input type="text" name="username" placeholder="請輸入帳號">
  <button type="submit">送出</button>
</form>
```

## 重點整理

- 表單用來收集使用者資料。
- 完整表單通常由表單域、表單控件與提示資訊組成。
- `<form>` 定義資料提交的範圍。
- 表單控件若要提交資料，通常需要有 `name`。
- `action` 決定送到哪裡，`method` 決定怎麼送。
