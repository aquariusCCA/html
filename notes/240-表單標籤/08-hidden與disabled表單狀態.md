---
source_atomic:
  - atomic/240-表單標籤/06-hidden隱藏域.md
  - atomic/240-表單標籤/12-disabled禁用表單控件.md
topics: [hidden, disabled, 表單提交, 前端安全]
summary: "比較 hidden 與 disabled 在可見性、可操作性與提交行為上的差異，並提醒不能當安全邊界。"
---

# hidden 與 disabled 表單狀態

## 學習目標

讀完這篇筆記，你應該能夠：

- 說明 `hidden` 隱藏域的用途與限制。
- 使用 `disabled` 禁用表單控件。
- 分辨「看不見」、「不能操作」與「會不會提交」的差異。
- 避免把前端隱藏或禁用當作安全機制。

## 使用情境

有些表單資料不需要使用者手動輸入，但提交時仍要一起帶上，例如分類代號、來源頁面、內部標記。這時可能會使用 `type="hidden"`。

也有些欄位在特定狀態下不允許使用者操作，例如尚未開放的按鈕、不可編輯的欄位、整組暫時停用的表單區。這時可以使用 `disabled`。

一句話理解：

> `hidden` 是看不見但會帶資料；`disabled` 是不能操作且通常不會提交。

## hidden 隱藏域

隱藏域是使用者在畫面上看不到的輸入區域，常用來在提交表單時攜帶固定資料。

```html
<input type="hidden" name="tag" value="100">
```

範例拆解：

- `type="hidden"` 表示這個欄位不顯示在畫面上。
- `name="tag"` 是提交欄位名稱。
- `value="100"` 是實際提交的資料值。

例如文章留言表單可能帶上文章 id：

```html
<form action="/comment" method="post">
  <input type="hidden" name="post_id" value="42">

  <label for="message">留言</label>
  <textarea id="message" name="message"></textarea>

  <button type="submit">送出留言</button>
</form>
```

使用者只看到留言框，但提交時會一併送出 `post_id=42`。

## hidden 不是安全機制

隱藏域只是畫面上不可見，資料仍然在 HTML 裡。使用者可以透過開發者工具看到與修改它。

因此不能把 hidden 當成安全來源。例如價格、權限、使用者身分等重要資料，不應只相信 hidden 欄位送來的值。後端必須重新查詢與驗證。

## disabled 禁用控件

`disabled` 可以讓表單控件無法操作。

```html
<input type="text" value="無法輸入" disabled>
<button disabled>無法點擊的按鈕</button>
```

常見可禁用的控件包含：

- `input`
- `textarea`
- `button`
- `select`
- `option`

禁用後，瀏覽器通常會用灰色或不可互動樣式提示使用者。

## 禁用不同控件

```html
<input type="text" value="無法輸入" disabled>

<button disabled>無法點擊的按鈕</button>

<select disabled>
  <option>選項 1</option>
  <option>選項 2</option>
</select>

<textarea disabled>無法編輯</textarea>

<input type="radio" disabled> 單選按鈕
<input type="checkbox" disabled> 複選框
```

這些控件都會呈現不可操作狀態。

## 使用 fieldset 禁用一組控件

如果想一次禁用一組表單控件，可以在 `<fieldset>` 上使用 `disabled`。

```html
<form action="/settings" method="post">
  <fieldset disabled>
    <legend>進階設定</legend>

    <input type="text" name="setting_name" value="暫不可編輯">
    <button type="button">測試設定</button>
  </fieldset>
</form>
```

這會讓 fieldset 中的表單控件整組被禁用，適合處理「整區暫時不可編輯」的情境。

## hidden 與 disabled 對照

| 特性 | hidden | disabled |
| --- | --- | --- |
| 使用者是否看得到 | 看不到 | 看得到但不可操作 |
| 是否常用來帶固定資料 | 是 | 否 |
| 是否通常會提交 | 會 | 不會 |
| 是否能當安全保護 | 不能 | 不能 |

## 常見錯誤

### 把 hidden 當成不能被修改

```html
<input type="hidden" name="price" value="999">
```

使用者仍可能修改 hidden 值再送出。價格這類重要資料應由後端根據商品 id 查詢，不應相信前端傳來的 hidden 價格。

### 期待 disabled 欄位被提交

```html
<input type="text" name="username" value="amy" disabled>
```

這個欄位顯示了 `amy`，但因為被禁用，提交時通常不會送出。若資料需要提交，應改用其他設計，例如後端保留資料、使用 hidden 搭配後端驗證，或改用 readonly。

### 用 disabled 當權限控制

把按鈕禁用可以改善介面體驗，但不能當成權限控制。使用者仍可能直接呼叫 API。真正的權限必須由後端檢查。

## 實務判斷準則

- 需要提交固定資料且不需要使用者看到時，可使用 hidden。
- 需要讓欄位暫時不可操作時，可使用 disabled。
- 需要提交但不想讓使用者修改的資料，不能只靠 disabled；應由後端設計資料來源與驗證。
- hidden 與 disabled 都是前端狀態，不是安全邊界。

## 重點整理

- `type="hidden"` 會隱藏欄位，但資料仍在前端且通常會提交。
- `disabled` 會讓控件不可操作，且通常不會提交。
- `fieldset disabled` 可以禁用一整組控件。
- hidden 不能保存敏感或可信資料。
- disabled 不能取代後端權限檢查。

## 自我檢查

1. hidden 欄位看不見，是否代表使用者無法修改？
2. disabled 欄位通常會不會跟著表單提交？
3. 如果某個欄位需要送出但不想讓使用者更改，為什麼不能只靠前端 disabled？
