# `datalist` 標籤

> - 所屬章節：第三十章｜`datalist` 標籤  
> - 關鍵字：`datalist`、`list`、`input`、`option`、`select`、輸入建議、自動建議、表單、autocomplete  
> - 建議回查情境：想替輸入框加入建議值、想確認 `list` 和 `id` 怎麼配對、想分清 `<datalist>` 和 `<select>` 的差別、想知道它能不能限制使用者只能選清單內的值時

## 本節導讀

`<datalist>` 是 HTML 用來提供「輸入建議」的標籤。

它本身不是輸入框，也不是強制選單，而是搭配 `<input>` 使用，讓使用者在輸入時看到一組預先準備好的建議值。  
例如輸入城市、瀏覽器名稱、常用關鍵字、商品分類代碼時，就可以用 `<datalist>` 提供候選項，幫助使用者更快完成輸入。

這一章的核心不是背語法而已，而是要分清楚三件事：

1. `<datalist>` 負責提供建議值。
2. `<input>` 才是真正接收使用者輸入的欄位。
3. `<datalist>` 不會自動限制使用者只能輸入清單內的值。

## 你會在這篇學到什麼

- `<datalist>` 在解決什麼問題
- `<input>` 如何透過 `list` 屬性綁定 `<datalist>`
- `<datalist>` 裡面的 `<option>` 代表什麼
- `<datalist>` 和 `<select>` 的使用情境差異
- 為什麼 `<datalist>` 不是表單驗證工具
- 實務上什麼時候適合用 `<datalist>`，什麼時候不適合

## 30 秒複習入口

- `<datalist>` 用來替 `<input>` 提供建議值。
- `<input>` 要加上 `list` 屬性。
- `<datalist>` 要加上 `id` 屬性。
- `<input list="xxx">` 的 `xxx` 要等於 `<datalist id="xxx">` 的 `xxx`。
- `<datalist>` 裡通常放一組 `<option>`。
- `<option value="...">` 的 `value` 是真正會被填入輸入框的值。
- 如果表單要送出該欄位，`<input>` 仍然需要 `name`。
- `<datalist>` 只是提供建議，不會強制使用者只能輸入清單內的值。
- 如果需求是「只能從固定選項中選一個」，通常優先考慮 `<select>`。
- `<datalist>` 的顯示方式、鍵盤操作、樣式控制與可存取性支援，可能因瀏覽器而不同。

## 速查區

### 最小結構

```html
<label for="browser">選擇瀏覽器：</label>

<input id="browser" name="browser" type="text" list="browser-list" />

<datalist id="browser-list">
  <option value="Chrome"></option>
  <option value="Firefox"></option>
  <option value="Safari"></option>
  <option value="Edge"></option>
</datalist>
```

這段的重點是：

- `input` 的 `list="browser-list"`
- `datalist` 的 `id="browser-list"`
- 兩個值必須一致
- 使用者最後輸入或選到的值會存在 `<input>` 裡
- 表單送出時，會用 `<input>` 的 `name="browser"` 作為欄位名稱

### 核心概念

- `<datalist>` 本身不是表單輸入欄位。
- `<input>` 才是真正讓使用者輸入資料的元素。
- `<datalist>` 只是提供一組候選建議。
- 使用者通常仍然可以輸入建議清單以外的值。

### 綁定方式

| 角色 | 標籤 / 屬性 | 功能 |
|---|---|---|
| 輸入欄位 | `<input>` | 接收使用者輸入 |
| 綁定屬性 | `list` | 指向某個 `<datalist>` |
| 建議清單 | `<datalist>` | 存放候選建議值 |
| 對應屬性 | `id` | 被 `<input list="...">` 指向 |
| 建議項目 | `<option>` | 定義每一個建議值 |

### 一句話抓核心

> `<datalist>` 是幫 `<input>` 補上一份建議清單，不是建立一個強制只能選清單內值的選單。

## 正文筆記

### 1. `<datalist>` 在解決什麼問題？

有些欄位不適合用固定選單限制使用者，因為使用者可能需要輸入清單以外的值。

例如：

- 城市名稱
- 瀏覽器名稱
- 搜尋關鍵字
- 商品分類
- 常見代碼
- 常用客戶名稱

這些欄位的特性是：

- 可以先提供一些常見選項
- 但不一定要限制使用者只能選這些選項
- 使用者仍可能輸入其他合理內容

這時候就適合用 `<datalist>`。

`<datalist>` 的主要任務是：  
**在不限制輸入自由度的前提下，提供常見建議值。**

### 2. `<datalist>` 怎麼和 `<input>` 綁在一起？

綁定方式靠兩個屬性：

```html
<input list="city-list" />

<datalist id="city-list">
  <option value="台北市"></option>
  <option value="新北市"></option>
  <option value="桃園市"></option>
</datalist>
```

規則是：

1. `<datalist>` 要有 `id`
2. `<input>` 要有 `list`
3. `input` 的 `list` 值要等於 `datalist` 的 `id` 值

也就是：

```html
<input list="city-list" />
<datalist id="city-list">
```

這兩個 `city-list` 必須一致。

如果對不上，例如：

```html
<input list="cities" />

<datalist id="city-list">
  <option value="台北市"></option>
</datalist>
```

那麼輸入框就找不到對應的建議清單。

### 3. `<datalist>` 裡面放什麼？

`<datalist>` 裡面通常放一組 `<option>`。

```html
<datalist id="browser-list">
  <option value="Chrome"></option>
  <option value="Firefox"></option>
  <option value="Safari"></option>
</datalist>
```

每個 `<option>` 代表一個建議值。

其中最重要的是 `value`：

```html
<option value="Chrome"></option>
```

`value="Chrome"` 代表：

- 瀏覽器可以把 `Chrome` 顯示成建議項目
- 使用者選取後，`Chrome` 會被填入 `<input>`
- 表單送出時，送出的也是 `<input>` 目前的值

### 4. `value`、文字內容、`label` 要怎麼理解？

在 `<datalist>` 裡，最穩定、最重要的是 `<option>` 的 `value`。

```html
<option value="Chrome"></option>
```

你也可能看到這種寫法：

```html
<option value="Chrome" label="Google Chrome"></option>
```

或：

```html
<option value="Chrome">Google Chrome</option>
```

實務上要記住：

- `value` 是真正會被填入輸入框的值。
- `label` 或文字內容可能會被瀏覽器拿來輔助顯示。
- 不同瀏覽器顯示 `value`、`label`、文字內容的方式不一定完全相同。
- 為了穩定，建議每個 `<option>` 都明確寫 `value`。

### 5. 搭配表單時，為什麼 `<input>` 要有 `name`？

`<datalist>` 只是建議清單，不是送出資料的欄位。  
真正送出資料的是 `<input>`。

所以如果這個欄位要跟著表單送出，`<input>` 應該要有 `name`。

```html
<form action="/search" method="get">
  <label for="browser">瀏覽器：</label>

  <input
    id="browser"
    name="browser"
    type="text"
    list="browser-list"
    placeholder="請輸入或選擇瀏覽器"
  />

  <datalist id="browser-list">
    <option value="Chrome"></option>
    <option value="Firefox"></option>
    <option value="Safari"></option>
    <option value="Edge"></option>
  </datalist>

  <button type="submit">送出</button>
</form>
```

如果使用者最後輸入或選擇 `Chrome`，表單送出時會帶出類似：

```txt
browser=Chrome
```

這裡的 `browser` 來自：

```html
name="browser"
```

不是來自 `<datalist>` 的 `id`。

## `<datalist>` 和 `<select>` 的差別

這是本章最容易混淆的地方。

### `<select>`：固定選項

```html
<label for="browser-select">瀏覽器：</label>

<select id="browser-select" name="browser">
  <option value="Chrome">Chrome</option>
  <option value="Firefox">Firefox</option>
  <option value="Safari">Safari</option>
  <option value="Edge">Edge</option>
</select>
```

`<select>` 的特性是：

- 使用者通常只能從既有選項中選
- 適合固定選項
- 適合需要限制答案範圍的場景
- 樣式與互動行為也比較像傳統下拉選單

### `<datalist>`：輸入建議

```html
<label for="browser-input">瀏覽器：</label>

<input id="browser-input" name="browser" type="text" list="browser-list" />

<datalist id="browser-list">
  <option value="Chrome"></option>
  <option value="Firefox"></option>
  <option value="Safari"></option>
  <option value="Edge"></option>
</datalist>
```

`<datalist>` 的特性是：

- 使用者可以從建議值中選
- 使用者通常也可以自己輸入其他值
- 適合「常見值很多，但不想完全限制」的場景
- 它比較像輸入框的輔助功能，不是完整的下拉選單元件

### 差異整理

| 比較項目 | `<select>` | `<datalist>` |
|---|---|---|
| 主要用途 | 固定選項選擇 | 輸入時提供建議 |
| 使用者能否輸入其他值 | 通常不行 | 通常可以 |
| 真正輸入/送出的元素 | `<select>` | `<input>` |
| 是否適合強制限制值 | 適合 | 不適合 |
| 是否適合搜尋建議 | 較不適合 | 適合 |
| 樣式與互動可控性 | 相對穩定 | 瀏覽器差異較明顯 |

## `<datalist>` 不等於表單驗證

這一點很重要。

`<datalist>` 只是提供建議值，不會自動檢查使用者輸入的值是否在清單裡。

例如：

```html
<input name="city" type="text" list="city-list" />

<datalist id="city-list">
  <option value="台北市"></option>
  <option value="新北市"></option>
  <option value="桃園市"></option>
</datalist>
```

使用者仍可能輸入：

```txt
高雄市
```

即使 `高雄市` 不在 `<datalist>` 裡，瀏覽器通常仍會接受這個輸入。

如果需求是「只能輸入清單內的值」，可以考慮：

1. 改用 `<select>`
2. 用 JavaScript 檢查輸入值是否存在於清單中
3. 在後端再次驗證資料是否合法

前端建議值不能取代後端驗證。  
在實務專案中，只要是重要資料，都應該由後端做最終驗證。

## `<datalist>` 和 `autocomplete` 的差別

`<datalist>` 和 `autocomplete` 都可能讓使用者看到輸入建議，但來源不同。

### `<datalist>`

建議值由開發者寫在 HTML 裡：

```html
<input name="browser" list="browser-list" />

<datalist id="browser-list">
  <option value="Chrome"></option>
  <option value="Firefox"></option>
</datalist>
```

### `autocomplete`

`autocomplete` 通常是瀏覽器根據欄位語意、使用者過去輸入、帳號資料或表單紀錄提供建議。

```html
<input name="email" type="email" autocomplete="email" />
```

簡單來說：

| 比較項目 | `<datalist>` | `autocomplete` |
|---|---|---|
| 建議來源 | 開發者提供 | 瀏覽器或使用者資料 |
| 常見用途 | 自訂候選值 | 自動填入姓名、信箱、地址等 |
| 是否需要 `<option>` | 需要 | 不需要 |

## 常見使用場景

### 1. 城市名稱建議

```html
<label for="city">城市：</label>

<input id="city" name="city" type="text" list="city-list" />

<datalist id="city-list">
  <option value="台北市"></option>
  <option value="新北市"></option>
  <option value="桃園市"></option>
  <option value="台中市"></option>
  <option value="高雄市"></option>
</datalist>
```

適合原因：

- 城市有常見選項
- 但可能仍要允許使用者輸入其他地區

### 2. 搜尋關鍵字建議

```html
<label for="keyword">搜尋：</label>

<input id="keyword" name="keyword" type="search" list="keyword-list" />

<datalist id="keyword-list">
  <option value="HTML"></option>
  <option value="CSS"></option>
  <option value="JavaScript"></option>
  <option value="Vue"></option>
  <option value="Spring Boot"></option>
</datalist>
```

適合原因：

- 使用者可以參考熱門關鍵字
- 但仍然可以輸入自己的搜尋內容

### 3. 商品代碼或分類建議

```html
<label for="category">商品分類：</label>

<input id="category" name="category" type="text" list="category-list" />

<datalist id="category-list">
  <option value="BOOK"></option>
  <option value="FOOD"></option>
  <option value="CLOTHES"></option>
  <option value="ELECTRONICS"></option>
</datalist>
```

適合原因：

- 常用代碼可以先列出來
- 使用者輸入時比較不容易拼錯

## 什麼時候適合用 `<datalist>`？

適合：

- 想提供輸入建議
- 不想限制使用者只能選固定值
- 候選值只是輔助，不是唯一合法答案
- 欄位本質上仍是文字輸入
- 需求不強烈依賴各瀏覽器完全一致的下拉體驗

例如：

- 搜尋框
- 城市輸入
- 關鍵字輸入
- 常用名稱輸入
- 常用代碼輸入

## 什麼時候不適合用 `<datalist>`？

不適合：

- 必須強制使用者只能選清單內的值
- 需要高度客製化下拉選單樣式
- 需要複雜選項內容，例如圖片、多欄資料、群組分類
- 需要非常一致的鍵盤操作與可存取性體驗
- 選項資料很多，且需要遠端搜尋、分頁、非同步載入

這些情境通常可以考慮：

- `<select>`
- 自製 autocomplete component
- UI library 的 Select / AutoComplete 元件
- 搭配 JavaScript 的自動完成元件

## 常見錯誤

### 錯誤 1：以為 `<datalist>` 本身是輸入框

錯誤觀念：

```html
<datalist id="browser-list"></datalist>
```

這樣不會產生可輸入的欄位。

正確觀念：

```html
<input list="browser-list" />

<datalist id="browser-list">
  <option value="Chrome"></option>
</datalist>
```

真正輸入的是 `<input>`。

### 錯誤 2：`list` 和 `id` 沒有對上

錯誤寫法：

```html
<input list="browser-list" />

<datalist id="browsers">
  <option value="Chrome"></option>
</datalist>
```

`browser-list` 和 `browsers` 不一致，所以綁定失敗。

正確寫法：

```html
<input list="browser-list" />

<datalist id="browser-list">
  <option value="Chrome"></option>
</datalist>
```

### 錯誤 3：表單欄位忘記加 `name`

不完整寫法：

```html
<input id="browser" type="text" list="browser-list" />
```

如果要讓表單送出這個欄位，應該加上 `name`：

```html
<input id="browser" name="browser" type="text" list="browser-list" />
```

### 錯誤 4：以為 `<datalist>` 會限制輸入值

錯誤觀念：

> 只要選項裡沒有 `高雄市`，使用者就不能輸入 `高雄市`。

正確觀念：

> `<datalist>` 只提供建議，不負責限制。使用者通常仍可以輸入清單外的值。

如果要限制輸入，請使用 `<select>` 或額外做驗證。

### 錯誤 5：以為所有瀏覽器顯示完全一樣

`<datalist>` 的候選清單外觀、顯示時機、鍵盤操作、`label` 顯示方式可能因瀏覽器而不同。

所以它適合用來做簡單建議輸入，不適合當成高度客製化的下拉元件。

## 實務判斷流程

遇到一個欄位時，可以這樣判斷：

### 問題 1：使用者是否只能選固定答案？

如果是，優先考慮：

```html
<select>
```

如果不是，繼續看下一題。

### 問題 2：你是否只是想提供常見建議值？

如果是，可以考慮：

```html
<input list="..." />
<datalist id="...">
```

### 問題 3：是否需要漂亮、可控、功能複雜的選單？

如果是，`<datalist>` 可能不夠，應考慮 JavaScript 元件。

### 問題 4：輸入值是否很重要？

如果重要，不管用 `<select>`、`<datalist>` 還是自製元件，都要做後端驗證。

## 完整範例

```html
<!doctype html>
<html lang="zh-Hant">
  <head>
    <meta charset="UTF-8" />
    <title>datalist 範例</title>
  </head>
  <body>
    <form action="/search" method="get">
      <label for="browser">請輸入或選擇瀏覽器：</label>

      <input
        id="browser"
        name="browser"
        type="text"
        list="browser-list"
        placeholder="例如：Chrome"
      />

      <datalist id="browser-list">
        <option value="Chrome"></option>
        <option value="Firefox"></option>
        <option value="Safari"></option>
        <option value="Edge"></option>
        <option value="Opera"></option>
      </datalist>

      <button type="submit">送出</button>
    </form>
  </body>
</html>
```

這個範例中：

- `<input>` 是真正的輸入欄位
- `name="browser"` 決定表單送出時的欄位名稱
- `list="browser-list"` 指向建議清單
- `<datalist id="browser-list">` 提供候選值
- `<option value="Chrome">` 是其中一個建議值
- 使用者可以選 `Chrome`，也可以自己輸入其他瀏覽器名稱

## 常見問法

### `<datalist>` 本身是不是輸入框？

不是。  
真正輸入資料的是 `<input>`，`<datalist>` 只是提供建議值。

### `list` 和 `id` 為什麼要一樣？

因為 `<input>` 要靠 `list` 屬性找到對應的 `<datalist>`。  
如果 `list` 的值和 `datalist` 的 `id` 對不上，建議清單就不會被正確綁定。

### `<datalist>` 和 `<select>` 最大差別是什麼？

`<select>` 是固定選項選擇。  
`<datalist>` 是輸入框的建議清單。

簡單說：

- 要限制只能選固定值：用 `<select>`
- 要讓使用者自由輸入，但順便提供建議：用 `<datalist>`

### `<datalist>` 可以限制使用者只能輸入清單中的值嗎？

不適合。  
`<datalist>` 本身不負責強制限制輸入值。

如果真的要限制，應該用：

- `<select>`
- JavaScript 驗證
- 後端驗證

### `<option>` 一定要寫結束標籤嗎？

在 HTML 中，`<option>` 常見寫法可以是：

```html
<option value="Chrome">
```

也可以寫成：

```html
<option value="Chrome"></option>
```

為了讓初學者更容易看懂結構，筆記中使用完整結束標籤寫法。

### `<datalist>` 可以搭配所有 `<input>` 類型嗎？

不一定。  
不同 `input type` 和不同瀏覽器的支援行為可能不同。

最常見、最穩定的搭配是：

```html
<input type="text" list="..." />
```

其他類型如 `search`、`email`、`url`、`number` 等，是否有一致的建議清單行為，需要依瀏覽器實測。

## 自測問題

### 問題 1

`<datalist>` 的主要用途是什麼？

答案：  
替 `<input>` 提供建議值，讓使用者輸入時可以參考或選取常見候選內容。

### 問題 2

`<input>` 和 `<datalist>` 是靠哪兩個屬性綁定？

答案：  
`<input>` 的 `list` 屬性，以及 `<datalist>` 的 `id` 屬性。

### 問題 3

下面這段為什麼無法正確綁定？

```html
<input list="city-list" />

<datalist id="cities">
  <option value="台北市"></option>
</datalist>
```

答案：  
因為 `input` 的 `list="city-list"` 和 `datalist` 的 `id="cities"` 不一致。

### 問題 4

如果要強制使用者只能選「台北市、新北市、桃園市」其中一個，應該優先考慮什麼？

答案：  
優先考慮 `<select>`，或搭配 JavaScript 與後端驗證。

### 問題 5

表單送出時，欄位名稱來自 `<datalist>` 的 `id` 嗎？

答案：  
不是。  
欄位名稱來自 `<input>` 的 `name`。

例如：

```html
<input name="city" list="city-list" />
```

送出時欄位名稱是 `city`。

## 本章總結

`<datalist>` 是一個用來輔助輸入的 HTML 標籤。

它的核心觀念是：

```html
<input list="some-list" />

<datalist id="some-list">
  <option value="建議值"></option>
</datalist>
```

請記住：

- `<input>` 負責輸入。
- `<datalist>` 負責提供建議。
- `input[list]` 要對應 `datalist[id]`。
- `<option value="...">` 是候選建議值。
- 表單送出靠 `<input name="...">`。
- `<datalist>` 不是 `<select>`。
- `<datalist>` 不負責強制驗證。
- 重要資料一定要做後端驗證。

## 延伸閱讀

- [第三十章｜`datalist` 標籤](./README.md)
- [第二十四章｜表單標籤](../第二十四章_表單標籤/README.md)
- [返回首頁](../README.md)

---