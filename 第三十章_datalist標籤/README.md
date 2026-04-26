# 第三十章｜`datalist` 標籤

> - 章節定位：理解 `<datalist>` 如何替 `<input>` 提供「建議值」  
> - 建議閱讀方式：先掌握 `input[list]` 與 `datalist[id]` 的綁定方式，再分清它和 `<select>`、表單驗證、`autocomplete` 的差別

## 本章在學什麼

這一章整理 HTML 的 `<datalist>` 標籤。

本章的核心不是背語法，而是建立一個穩定觀念：`<datalist>` 不是必選下拉選單，而是替某個表單控制項提供一組候選建議值。最常見的搭配方式是讓 `<input>` 透過 `list` 屬性連到 `<datalist>` 的 `id`。

換句話說，`<datalist>` 解決的是「讓使用者輸入時有建議可選」的問題，不是「限制使用者只能選固定選項」的問題。

## 本章與整體地圖的關係

- 前置知識：前面已學過表單元素、文字輸入框、選單類型與基本表單送出。
- 本章補強：帶有建議值的輸入模式，也就是「可輸入、也可參考候選值」的表單互動。
- 後續應用：搜尋建議、城市輸入、瀏覽器名稱輸入、常用關鍵字輸入、商品名稱建議等情境。

## 本章核心觀念

- `<datalist>` 本身不是輸入框。
- 真正讓使用者輸入資料的是 `<input>`。
- `<input>` 透過 `list` 屬性指定要使用哪一個 `<datalist>`。
- `<datalist>` 透過 `id` 被 `<input list="...">` 對應。
- `<datalist>` 裡通常放多個 `<option>`，每個 `<option value="...">` 代表一個建議值。
- `<datalist>` 只提供建議，不會自動限制使用者一定要輸入清單內的值。
- 如果需求是強制從固定選項中選擇，通常應優先考慮 `<select>` 或額外做驗證。

## 建議閱讀順序

1. [`datalist` 標籤](./第30章_datalist標籤.md)

## 本章所有小節

- [`datalist` 標籤](./第30章_datalist標籤.md)

## 適合快速回查的主題

- `<datalist>` 在解決什麼問題
- `input[list]` 和 `datalist[id]` 如何綁定
- `<option value="...">` 在 `<datalist>` 裡代表什麼
- `<input name="...">` 和 `<datalist id="...">` 的差別
- `<datalist>` 和 `<select>` 為什麼不能互相替代
- 為什麼 `<datalist>` 不等於表單驗證
- 什麼情況適合用 `<datalist>`，什麼情況應該用 `<select>`
- 城市、瀏覽器、關鍵字等建議輸入範例怎麼寫

## 30 秒回查入口

- 想讓輸入框出現建議值：使用 `<input list="...">` 搭配 `<datalist id="...">`。
- 想讓表單送出欄位資料：重點是 `<input name="...">`，不是 `<datalist id="...">`。
- 想限制只能選固定選項：優先考慮 `<select>`，不要只靠 `<datalist>`。
- 想做輸入建議，但允許使用者輸入其他內容：適合使用 `<datalist>`。
- 想做嚴格檢查：需要搭配前端或後端驗證，`<datalist>` 本身不負責驗證。

## 高頻回查入口

- 想快速知道 `<datalist>` 是做什麼的時，看：[`datalist` 標籤](./第30章_datalist標籤.md)
- 想確認 `<input>` 和 `<datalist>` 怎麼綁定時，看：[`datalist` 標籤](./第30章_datalist標籤.md)
- 想分清 `<datalist>` 和 `<select>` 怎麼選時，看：[`datalist` 標籤](./第30章_datalist標籤.md)
- 想確認 `name`、`list`、`id` 分別負責什麼時，看：[`datalist` 標籤](./第30章_datalist標籤.md)
- 想知道為什麼 `<datalist>` 不能當驗證機制時，看：[`datalist` 標籤](./第30章_datalist標籤.md)
- 想回看表單搭配建議輸入的完整範例時，看：[`datalist` 標籤](./第30章_datalist標籤.md)

## 易混淆主題

### `<datalist>` vs `<select>`

- `<datalist>`：提供輸入建議，通常仍允許使用者輸入清單外的內容。
- `<select>`：提供固定選項，通常要求使用者從既有選項中選擇。

兩者不是語法上不能一起出現，而是用途不同，不能直接互相替代。

### `<datalist>` 本身 vs `<input>`

- `<input>`：使用者真正輸入資料的表單控制項。
- `<datalist>`：提供候選建議值的清單。

所以 `<datalist>` 不會自己產生一個可輸入欄位，它需要被 `<input list="...">` 使用。

### `list` vs `id`

- `input` 的 `list`：指定要使用哪一份建議清單。
- `datalist` 的 `id`：提供給 `input[list]` 對應。

兩者的值要一致，輸入框才知道要讀取哪一個 `<datalist>`。

### `name` vs `id`

- `input name`：表單送出時使用的欄位名稱。
- `datalist id`：讓 `<input list="...">` 找到建議清單。

`datalist id` 不等於表單欄位名稱。若要讓表單送出該欄位，仍然要在 `<input>` 上設定 `name`。

### 建議值 vs 表單驗證

- `<datalist>`：只提供建議。
- 表單驗證：負責判斷輸入值是否合法。

如果需求是「只能輸入清單內的值」，不能只依賴 `<datalist>`，需要改用 `<select>` 或搭配 JavaScript、後端驗證。

### `<datalist>` vs `autocomplete`

- `<datalist>`：開發者在 HTML 中明確提供一組建議值。
- `autocomplete`：瀏覽器根據欄位類型或使用者過去輸入紀錄提供自動填入建議。

兩者都可能影響輸入體驗，但來源與控制方式不同。

## 實務判斷流程

1. 使用者是否需要自己輸入文字？
   - 是：可以考慮 `<input>`。
   - 否：可以考慮 `<select>`、radio、checkbox 等固定選項元件。

2. 是否只是想提供常見建議值？
   - 是：可以使用 `<datalist>`。
   - 否：繼續判斷是否需要限制輸入。

3. 是否要求只能選固定選項？
   - 是：優先使用 `<select>` 或額外做驗證。
   - 否：`<datalist>` 通常適合。

4. 是否需要高度一致的選單樣式與互動體驗？
   - 是：要謹慎使用 `<datalist>`，因為不同瀏覽器的呈現方式可能不同。
   - 否：可用 `<datalist>` 快速完成原生建議輸入。

## 最小語法印象

```html
<label for="browser">選擇瀏覽器：</label>

<input id="browser" name="browser" list="browser-list" />

<datalist id="browser-list">
  <option value="Chrome"></option>
  <option value="Firefox"></option>
  <option value="Safari"></option>
  <option value="Edge"></option>
</datalist>
```

這段要注意三個重點：

- `input[list="browser-list"]` 對應 `datalist[id="browser-list"]`
- `input[name="browser"]` 才是表單送出時的欄位名稱
- `option[value="Chrome"]` 才是建議值本身

## 自測問題

1. `<datalist>` 的主要用途是什麼？
2. `<input>` 和 `<datalist>` 是靠哪兩個屬性綁定？
3. `<input name="...">` 和 `<datalist id="...">` 差在哪裡？
4. 為什麼 `<datalist>` 不能直接當成 `<select>` 的替代品？
5. 為什麼 `<datalist>` 不等於表單驗證？
6. 什麼情況比較適合用 `<select>`，不是 `<datalist>`？
7. `<datalist>` 和 `autocomplete` 的差別是什麼？

## 自測答案

1. `<datalist>` 用來替輸入框提供一組建議值，讓使用者輸入時可以參考或選取。
2. `<input>` 使用 `list`，`<datalist>` 使用 `id`，兩者值要一致。
3. `input name` 是表單送出時的欄位名稱；`datalist id` 是給 `input[list]` 對應建議清單用的識別名稱。
4. 因為 `<select>` 偏向固定選項選擇，而 `<datalist>` 偏向輸入建議，通常仍允許使用者輸入清單外的值。
5. 因為 `<datalist>` 只提供候選建議，不會自動檢查使用者輸入是否合法。
6. 當需求是只能從固定選項中選擇，或需要穩定一致的選單互動時，比較適合用 `<select>`。
7. `<datalist>` 的建議值由開發者在 HTML 中提供；`autocomplete` 通常由瀏覽器根據欄位類型或過去輸入紀錄提供建議。

## 導航

- [返回首頁](../README.md)

---