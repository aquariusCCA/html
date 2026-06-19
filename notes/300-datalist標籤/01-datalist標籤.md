---
source_atomic:
  - atomic/300-datalist標籤/01-datalist標籤.md
topics: [datalist, 表單輸入, 輸入建議, datalist與select差異]
summary: "說明 `<datalist>` 如何與 `<input>` 綁定提供建議選項，並辨別它與 `<select>` 的使用邊界。"
---

# datalist 標籤：替輸入框提供建議選項

## 學習目標

讀完這篇筆記，你應該能夠：

- 說明 `<datalist>` 的用途與語意。
- 寫出 `<input>` 搭配 `<datalist>` 的基本結構。
- 理解 `input` 的 `list` 屬性與 `datalist` 的 `id` 屬性如何綁定。
- 分辨什麼時候適合用 `<datalist>`，什麼時候應該用 `<select>`。

## 使用情境

假設你正在做一個表單，使用者需要輸入常用瀏覽器、城市名稱或商品分類。你希望畫面能提供一些建議，讓使用者更快輸入；但你又不想把答案限制在固定選項裡，因為使用者可能輸入清單之外的值。

這種「提供建議，但仍允許自由輸入」的情境，就適合使用 `<datalist>`。

## 一句話理解

`<datalist>` 是替 `<input>` 提供「候選建議值」的標籤；它不是強制選單，使用者仍然可以輸入清單外的內容。

## 標籤語意

`<datalist>` 本身不會單獨形成一個可輸入的欄位。它的責任是保存一組 `<option>`，讓指定的 `<input>` 在輸入時可以顯示建議。

核心關係是：

- `<input>`：使用者實際輸入內容的欄位。
- `list` 屬性：寫在 `<input>` 上，用來指定要連到哪一個 `<datalist>`。
- `<datalist>`：保存候選值的容器。
- `id` 屬性：寫在 `<datalist>` 上，提供給 `input[list]` 對應。
- `<option>`：每一個建議選項，通常用 `value` 表示候選值。

## 基本語法

```html
<input type="text" list="browser-list">

<datalist id="browser-list">
  <option value="Firefox"></option>
  <option value="Chrome"></option>
  <option value="Safari"></option>
</datalist>
```

這段程式碼的重點是：`input` 的 `list="browser-list"` 必須對應到 `datalist` 的 `id="browser-list"`。兩個值相同，瀏覽器才知道這個輸入框要使用哪一組建議選項。

## 範例拆解

```html
<label for="browser">請輸入常用瀏覽器：</label>
<input id="browser" name="browser" type="text" list="browsers">

<datalist id="browsers">
  <option value="Firefox"></option>
  <option value="IE"></option>
  <option value="Chrome"></option>
  <option value="Opera"></option>
  <option value="Safari"></option>
</datalist>
```

逐段來看：

- `<label for="browser">`：替輸入框提供可讀的欄位名稱，`for` 對應到 `input` 的 `id`。
- `<input id="browser" ...>`：這是使用者真正輸入文字的欄位。
- `name="browser"`：表單送出時，這個欄位會用 `browser` 作為資料名稱。
- `type="text"`：表示這是一個文字輸入框。
- `list="browsers"`：告訴瀏覽器，這個輸入框要使用 `id="browsers"` 的 `<datalist>`。
- `<datalist id="browsers">`：定義一組瀏覽器候選值。
- `<option value="Firefox">`：提供一個建議值。使用者可以選它，也可以直接輸入其他文字。

## 搭配表單使用

`<datalist>` 常和表單一起使用，但它不一定要放在 `<form>` 裡面。真正會被送出的欄位是 `<input>`，不是 `<datalist>`。

```html
<form action="/search" method="get">
  <label for="city">城市：</label>
  <input id="city" name="city" type="text" list="city-list">

  <button type="submit">搜尋</button>
</form>

<datalist id="city-list">
  <option value="北京市"></option>
  <option value="广州市"></option>
  <option value="深圳市"></option>
</datalist>
```

在這個例子中，使用者如果選擇或輸入 `深圳市`，表單送出時會送出 `city=深圳市`。如果使用者輸入清單外的城市名稱，也仍然可以送出。

## datalist 與 select 的差異

`<datalist>` 和 `<select>` 都會出現選項，但它們的用途不同。

| 情境 | 建議使用 |
| --- | --- |
| 使用者只能從固定選項中選一個 | `<select>` |
| 使用者可以參考建議，但也能輸入其他值 | `<datalist>` |
| 表單欄位需要強制限制為指定值 | `<select>` |
| 欄位只是提供自動完成或輸入提示 | `<datalist>` |

例如瀏覽器選單如果只能是 Firefox、Chrome、Safari 其中之一，應該用 `<select>`。如果只是希望使用者輸入時有建議，但允許輸入 Edge、Brave 或其他瀏覽器，就適合用 `<datalist>`。

## 實務注意

`<datalist>` 是瀏覽器原生提供的建議清單，不同瀏覽器顯示選項的方式和互動細節可能不完全相同。如果你需要高度客製的外觀、完整控制鍵盤操作，或需要更完整的輔助科技體驗，通常要另外設計自動完成元件。

另外，`<datalist>` 不能取代資料驗證。只要資料有固定合法範圍，前端可以用 `<select>` 或其他介面降低輸入錯誤，但真正重要的限制仍然應該在後端再次檢查。

## 常見錯誤

### `list` 和 `id` 沒有對上

錯誤寫法：

```html
<input type="text" list="browser-list">

<datalist id="browsers">
  <option value="Firefox"></option>
</datalist>
```

`input` 找的是 `browser-list`，但實際的 `datalist` 叫 `browsers`。兩者名稱不同，瀏覽器無法把輸入框和建議清單連起來。

正確寫法：

```html
<input type="text" list="browsers">

<datalist id="browsers">
  <option value="Firefox"></option>
</datalist>
```

### 把 datalist 當成強制選單

`<datalist>` 只是建議清單，不會阻止使用者輸入清單外的值。如果欄位必須限定在幾個固定答案中，例如付款方式、配送方式、班級代號，應該使用 `<select>`，或在後端再做資料驗證。

### 忘記在 option 放 value

建議值主要來自 `<option>` 的 `value` 屬性。為了讓選項清楚可靠，建議明確寫出 `value`。

```html
<datalist id="cities">
  <option value="台北"></option>
  <option value="台中"></option>
  <option value="高雄"></option>
</datalist>
```

## 實務判斷準則

使用 `<datalist>` 前，可以先問自己三個問題：

1. 這個欄位是否仍然允許使用者輸入清單外的值？
2. 這些選項是不是只是提示或常見答案，而不是唯一合法答案？
3. 使用者看到建議值後，是否能更快完成輸入？

如果答案大多是「是」，`<datalist>` 通常合適。反過來，如果你需要的是「只能選其中一個」，就不要用 `<datalist>` 取代 `<select>`。

## 重點整理

- `<datalist>` 用來替指定的 `<input>` 提供建議選項。
- `<input list="...">` 的值要等於 `<datalist id="...">` 的值。
- `<option value="...">` 用來定義每一個候選值。
- `<datalist>` 不會限制輸入內容，使用者仍可輸入清單外的值。
- 必須限制固定選項時，應該優先考慮 `<select>`。

## 自我檢查

1. `<input>` 的哪一個屬性負責連接 `<datalist>`？
2. `<datalist>` 的哪一個屬性需要和 `input[list]` 的值相同？
3. 如果欄位只能填「宅配」「超商取貨」「門市自取」三種答案，應該用 `<datalist>` 還是 `<select>`？為什麼？
4. 使用者能不能在 `<datalist>` 欄位輸入清單外的值？
