# `datalist` 標籤

> 所屬章節：第三十章｜`datalist` 標籤  
> 關鍵字：`datalist`、`list`、自動建議、輸入建議、`input`、`option`、`select`、autocomplete  
> 建議回查情境：想知道 `<datalist>` 是做什麼的、想把建議值綁到 `<input>`、想分清 `<datalist>` 和 `<select>` 的差別、想確認 `list` 和 `id` 怎麼配對時

## 本節導讀

這篇整理 HTML 的 `<datalist>` 標籤。  
它的用途不是建立一個必選的下拉選單，而是替某個 `<input>` 提供一組「建議值」，讓使用者在輸入時更快選到常見內容。

原始內容方向正確，沒有明顯知識衝突，因此這次不先做內容重構，而是直接用筆記整理方式補上可回查的結構。  
整理重點放在：`<datalist>` 的作用、和 `<input>` 的綁定方式、與 `<select>` 的差別，以及使用時要注意的相容性與限制。

## 你會在這篇學到什麼

- `<datalist>` 在解決什麼問題
- `list` 和 `id` 如何把 `<input>` 與 `<datalist>` 綁起來
- `<datalist>` 和 `<select>` 為什麼不能混用
- 為什麼 `<datalist>` 比較像「建議清單」，不是「強制選單」

## 30 秒複習入口

- `<datalist>` 用來提供 `<input>` 的建議值。
- `<input>` 要用 `list` 屬性，值對應 `<datalist>` 的 `id`。
- `<datalist>` 裡通常放一組 `<option>`。
- 它不是 `<select>` 的替代品，因為使用者通常仍可輸入清單外的值。
- `<datalist>` 的支援度與行為會因瀏覽器而有差異，不能把它當成完全一致的強制選單元件。

## 速查區

### 核心概念

- `<datalist>` 本身不是輸入框。
- 它是和某個表單控制項配合使用的建議值清單。
- 最常見的搭配對象是 `<input>`。

### 綁定方式

- `<datalist>` 要有 `id`
- `<input>` 要有 `list`
- `<input list="...">` 的值要等於 `<datalist id="...">`

### 常見使用場景

- 瀏覽器名稱建議
- 城市名稱建議
- 常見關鍵字建議
- 表單快速輸入常用值

### 和 `<select>` 的差別

- `<select>`：通常從固定選項中擇一
- `<datalist>`：提供建議值，但通常不限制只能選這些值

### 常見錯誤

- 以為 `<datalist>` 本身就是輸入框。
- 忘記讓 `list` 和 `id` 對上。
- 把 `<datalist>` 當成必選清單使用。
- 以為所有瀏覽器顯示方式都完全一樣。

### 一句話抓核心

- `<datalist>` 是幫 `<input>` 補上一份建議清單，不是建立一個強制只能選清單內值的選單。

## 正文筆記

### 1. `<datalist>` 在解決什麼問題？

有些輸入欄位不是要限制使用者只能從固定選項中挑一個，而是希望在輸入時順便提供常見候選值，讓輸入更快、更不容易打錯。  
例如城市、瀏覽器名稱、常見搜尋詞，這類情境都很適合用 `<datalist>`。

因此，`<datalist>` 的重點不是「強制選擇」，而是「提供建議」。

### 2. 它怎麼和 `<input>` 綁在一起？

綁定方式很簡單：

1. `<datalist>` 先設定 `id`
2. `<input>` 再設定 `list`
3. `list` 的值要和 `id` 一樣

只要這兩者對上，輸入框就能讀到 `<datalist>` 提供的建議值。

### 3. `<datalist>` 裡面通常放什麼？

最常見的是一組 `<option>` 元素。  
每個 `<option>` 的 `value` 代表一個建議值，使用者在輸入時，瀏覽器會把這些值當成候選內容顯示出來。

### 4. 為什麼它不是 `<select>` 的替代品？

這是最容易混淆的地方。

`<select>` 比較像是：

- 給你固定選項
- 通常要從裡面選一個

`<datalist>` 比較像是：

- 先給你一些建議值
- 但你通常仍可以輸入清單以外的內容

所以它們雖然都會讓使用者看到候選項，但語意和用途不同。

### 5. 範例怎麼看？

#### 範例 1：和 `<select>` 對照

```html
<!-- <select> 的使用方式 -->
<select name="browser">
  <option value="firefox">Firefox</option>
  <option value="ie">IE</option>
  <option value="chrome">Chrome</option>
  <option value="opera">Opera</option>
  <option value="safari">Safari</option>
</select>

<!-- <datalist> 的使用方式 -->
<input type="text" list="browsers" />
<datalist id="browsers">
  <option value="Firefox"></option>
  <option value="IE"></option>
  <option value="Chrome"></option>
  <option value="Opera"></option>
  <option value="Safari"></option>
</datalist>
```

這段最重要的不是語法長得像不像，而是功能差異：

- `<select>` 讓你從既有選項中選
- `<datalist>` 讓輸入框出現建議值

#### 範例 2：搭配表單使用

```html
<form action="">
  <input type="text" list="city-list" />
</form>

<datalist id="city-list">
  <option value="北京市"></option>
  <option value="廣州市"></option>
  <option value="深圳市"></option>
</datalist>
```

這段代表：

- 使用者在文字輸入框中輸入城市時
- 瀏覽器可提示 `北京市`、`廣州市`、`深圳市`
- 但這通常不是硬性限制，仍可能輸入其他值

### 6. 使用時要注意什麼？

- `<datalist>` 的瀏覽器支援與顯示方式不是完全一致
- 它比較適合做「建議輸入」，不適合做高度依賴一致互動體驗的強制選單
- 如果需求是「只能從固定選項選一個」，通常還是優先考慮 `<select>`

## 常見問法

### `<datalist>` 本身是不是輸入框？

不是。  
真正輸入的是 `<input>`；`<datalist>` 只是建議值清單。

### `list` 和 `id` 為什麼要一樣？

因為 `<input>` 需要靠 `list` 屬性去對應到哪一個 `<datalist>`。  
如果對不上，輸入框就不知道該讀哪份建議清單。

### `<datalist>` 和 `<select>` 最大差別是什麼？

`<select>` 偏向固定選項；`<datalist>` 偏向輸入建議。  
前者通常要求從選項中選，後者通常允許輸入其他值。

### 什麼時候不適合用 `<datalist>`？

當你需要強制限制輸入值、要求一致的選單體驗，或很依賴可存取性與樣式可控性時，就要更保守評估，很多情況下 `<select>` 會更穩定。

## 自測問題

1. `<datalist>` 的主要用途是什麼？
2. `<input>` 和 `<datalist>` 是靠哪兩個屬性綁定？
3. 為什麼 `<datalist>` 不能直接當成 `<select>` 的替代品？
4. 什麼情況比較適合用 `<select>`，不是 `<datalist>`？

## 延伸閱讀

- [第三十章｜`datalist` 標籤](./README.md)
- [第二十四章｜表單標籤](../第二十四章_表單標籤/README.md)
- [返回首頁](../README.md)
