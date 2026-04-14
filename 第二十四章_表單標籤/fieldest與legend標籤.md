# fieldset 與 legend 標籤

> 所屬章節：第二十四章｜表單標籤  
> 關鍵字：fieldset、`fieldset`、legend、`legend`、表單分組、分組標題、欄位群組、表單區塊、`fieldset disabled`  
> 建議回查情境：想知道怎麼把相關表單控件分成同一組、想分清 `fieldset` 和 `legend` 各自在做什麼、想理解為什麼一組表單欄位需要一個區塊標題

## 本節導讀

這篇整理 `fieldset` 與 `legend` 標籤。  
它們不是拿來建立新的輸入控件，而是用來把原本零散的表單欄位整理成更清楚的區塊，讓使用者更容易理解「這一組欄位是在填什麼」。

原始內容的例子方向正確，但正文太薄，還混入課堂筆記殘留標記，讀者很難快速掌握主線。  
這裡改成先分清 `fieldset` 和 `legend` 的角色，再看表單分組範例與常見使用情境。

## 你會在這篇學到什麼

- `fieldset` 為什麼能把表單控件分成一組
- `legend` 在分組裡的作用是什麼
- 什麼情況下適合使用欄位分組
- `fieldset` / `legend` 和一般排版容器差在哪
- 為什麼 `fieldset` 也常出現在禁用整組控件的情境裡

## 30 秒複習入口

- `fieldset` 用來把相關的表單控件包成同一組。
- `legend` 是這一組表單控件的標題或說明。
- 兩者常一起出現：`fieldset` 負責分組，`legend` 負責命名。
- 當表單有多個區塊，例如基本資料、聯絡方式、偏好設定時，這種分組會特別清楚。
- `fieldset` 也常和 `disabled` 搭配，用來一次禁用整組表單控件。

## 速查區

### 核心概念

- `fieldset` 是表單中的分組容器。
- `legend` 是分組標題，用來說明這組欄位的主題。
- 它們的價值不在外觀，而在於讓表單結構更清楚、更容易理解。

### 關鍵規則 / 判準

- 想把多個相關欄位視為同一組時，可用 `fieldset` 包起來。
- 想為這組欄位加上標題時，可在 `fieldset` 中使用 `legend`。
- `legend` 的重點是說明「這組欄位在填什麼」。
- 若要一次禁用整組控件，常見寫法是 `<fieldset disabled>`。

### 常見使用場景

- 基本資料與聯絡資料分組
- 地址資訊分組
- 帳號資訊與安全設定分組
- 單選題或複選題的選項分組
- 需要一次禁用某一區塊表單控件的情境

### 常見混淆點

- `fieldset` 不是新的輸入控件，而是包住多個控件的分組容器。
- `legend` 不是一般段落文字，而是對該組欄位的標題說明。
- `fieldset` / `legend` 的重點是表單語意與分組，不只是畫出一個框。
- `fieldset` 和 `label` 不同：前者是管理一整組欄位，後者是綁定單一控件與說明文字。

### 一句話抓核心

- `fieldset` 負責把表單控件分組，`legend` 負責替這組控件命名。

## 正文筆記

### 1. `fieldset` 在做什麼？

- `fieldset` 是表單中的分組容器。
- 當多個表單控件屬於同一個主題時，可以用它把欄位包在一起。
- 這樣使用者看到表單時，會更容易知道哪幾個欄位是在處理同一件事。

### 2. `legend` 在做什麼？

- `legend` 是 `fieldset` 內的分組標題。
- 它通常用來說明這組欄位的主題，例如「主要信息」、「聯絡方式」或「偏好設定」。
- 如果只有分組、沒有標題，使用者仍可能看不出這一區欄位的用途。

### 3. 範例怎麼看？

```html
<form action="">
  <fieldset>
    <legend>主要信息</legend>

    <label for="account">帳戶</label>
    <input type="text" id="account" name="account" maxlength="10" />
    <br />

    <label>
      密碼:
      <input type="password" name="pwd" maxlength="6" />
    </label>
  </fieldset>

  <fieldset>
    <legend>勾選區域</legend>

    性別:
    <input type="radio" name="gender" value="woman" id="woman" />
    <label for="woman">女</label>

    <label>
      <input type="radio" name="gender" value="man" />
      男
    </label>
  </fieldset>

  <input type="submit" value="提交" />
</form>
```

這個例子可以拆成兩層來看：

- 第一層是表單被分成兩組：`主要信息` 與 `勾選區域`。
- 第二層是每組裡再放入對應欄位，例如帳號、密碼、性別選項。

因此真正要記住的不是標籤長相，而是分工：

- `fieldset`：包住同一組欄位。
- `legend`：說明這組欄位的主題。

### 4. 什麼時候特別適合用分組？

- 表單欄位一多，就很容易看起來像一整片沒有區隔的輸入框。
- 若內容可以自然分成幾塊，例如帳號資訊、個人資料、通知設定，就適合用 `fieldset` 分開。
- 這不只對閱讀有幫助，也能讓後續維護表單結構時更清楚。

### 5. 為什麼 `fieldset` 常和 `disabled` 一起被提到？

- 因為 `fieldset` 不只可以分組，也常用來一次控制整組欄位。
- 寫成 `<fieldset disabled>` 時，這一組裡的表單控件通常會一起失效。
- 所以它既是結構工具，也常出現在行為控制的情境裡。

## 常見問法

### `fieldset` 和 `legend` 一定要一起用嗎？

- 不一定是語法上硬性綁死來記，但它們通常會一起出現。
- `fieldset` 負責分組，`legend` 負責讓這組欄位有清楚標題。

### `legend` 是不是只是裝飾文字？

- 不是。
- 它的重點是說明這一組欄位的主題，不只是做外觀排版。

### `fieldset` 和 `label` 差在哪？

- `fieldset` 是管理一整組表單控件的區塊。
- `label` 則是把單一控件和說明文字關聯起來。

### 什麼情況下會想到 `<fieldset disabled>`？

- 當你想一次禁用某一整組表單控件時。
- 這是 `fieldset` 很常見的另一個使用情境。

## 自測問題

1. `fieldset` 和 `legend` 各自在表單中處理什麼事？
2. 為什麼只把欄位包在一起還不夠，常常還需要 `legend`？
3. `fieldset` 和 `label` 在用途上有什麼差別？
4. 為什麼 `fieldset` 也常和 `disabled` 一起出現？

## 延伸閱讀

- [第二十四章｜表單標籤](./README.md)
- [禁用表單控件](./禁用表單控件.md)
- [label 標籤](./label標籤.md)
- [返回首頁](../README.md)
