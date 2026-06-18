---
source_atomic:
  - atomic/240-表單標籤/09-label標籤與控件關聯.md
  - atomic/240-表單標籤/14-fieldset與legend表單分組.md
---

# label 與表單分組

## 學習目標

讀完這篇筆記，你應該能夠：

- 使用 `<label>` 將提示文字與表單控件關聯。
- 分辨 `for/id` 關聯與包覆式 label 寫法。
- 使用 `<fieldset>` 與 `<legend>` 替一組表單控件分組。
- 理解表單語意結構對可用性與無障礙的影響。

## 使用情境

表單如果只有輸入框，使用者不一定知道每個欄位要填什麼。更糟的是，對使用鍵盤或螢幕報讀器的人來說，沒有關聯的文字與控件會讓操作變得困難。

一句話理解：

> `label` 負責說明單一控件，`fieldset` 與 `legend` 負責說明一組控件。

## label 的作用

`<label>` 可以把文字與表單控件關聯。關聯後，使用者點擊文字時，瀏覽器會自動聚焦或選取對應控件。

```html
<input type="radio" name="gender" id="man">
<label for="man">男</label>
```

範例拆解：

- `id="man"` 是控件的唯一識別。
- `label for="man"` 指向這個控件。
- 使用者點「男」這個文字，也會選取 radio。

這能增加可點擊範圍，也讓輔助技術知道這個控件的名稱。

## 兩種 label 寫法

### 使用 for 與 id

```html
<input type="text" id="account" name="account">
<label for="account">帳號</label>
```

這種寫法清楚、常見，適合大多數情境。

### 包覆控件

```html
<label>
  <input type="radio" name="gender" value="female">
  女
</label>
```

這種寫法把控件直接包在 label 裡，不需要 `for/id`。常用於 radio 或 checkbox，結構簡潔。

## fieldset 與 legend 的作用

當表單欄位很多時，應該把相關欄位分組。`<fieldset>` 表示一組表單控件，`<legend>` 是這組控件的標題。

```html
<form action="/signup" method="post">
  <fieldset>
    <legend>主要資訊</legend>

    <label for="account">帳戶</label>
    <input type="text" id="account" name="account" maxlength="10">

    <label for="password">密碼</label>
    <input type="password" id="password" name="password" maxlength="20">
  </fieldset>

  <fieldset>
    <legend>性別</legend>

    <input type="radio" name="gender" value="woman" id="woman">
    <label for="woman">女</label>

    <label>
      <input type="radio" name="gender" value="man">
      男
    </label>
  </fieldset>

  <button type="submit">提交</button>
</form>
```

範例拆解：

- 第一個 `fieldset` 把帳戶與密碼歸為主要資訊。
- 第二個 `fieldset` 把性別選項歸成一組。
- `legend` 讓使用者知道這組欄位的共同主題。
- 每個實際控件仍應有自己的 label。

## 常見錯誤

### 文字看起來在旁邊，但沒有 label 關聯

```html
帳號 <input type="text" name="account">
```

畫面上看起來沒問題，但文字與輸入框沒有語意關聯。應改成：

```html
<label for="account">帳號</label>
<input id="account" type="text" name="account">
```

### for 與 id 不一致

```html
<label for="email">電子郵件</label>
<input id="user-email" type="email" name="email">
```

`for="email"` 找不到 `id="email"` 的控件，因此 label 不會正確關聯。應讓兩者一致。

### fieldset 裡放入不相關欄位

如果把帳號、付款方式、留言內容全放進同一個 fieldset，分組就失去意義。fieldset 應該代表一組同主題或同任務的欄位。

## 實務判斷準則

- 每個需要使用者操作的表單控件都應有可辨識的 label。
- radio 與 checkbox 特別適合用 label 擴大可點擊範圍。
- 一組相關選項或欄位可使用 `fieldset` 分組。
- `legend` 應該清楚描述這組欄位的共同主題。
- 不要只為排版使用 `fieldset`；排版應交給 CSS。

## 重點整理

- `label` 讓提示文字與控件建立語意關聯。
- `for` 必須對應控件的 `id`。
- label 也可以直接包住控件。
- `fieldset` 用於表單分組，`legend` 是分組標題。
- 良好的表單語意能改善可用性、鍵盤操作與無障礙。

## 自我檢查

1. `label for` 應該對應控件的哪個屬性？
2. 為什麼 radio 與 checkbox 很適合搭配 label？
3. 什麼情況下適合使用 `fieldset` 與 `legend`？
