# select 與 textarea 表單控件

## 學習目標

讀完這篇筆記，你應該能夠：

- 使用 `<select>` 建立下拉列表。
- 使用 `<option>` 設定選項與提交值。
- 使用 `<textarea>` 建立多行文字輸入。
- 判斷什麼時候該用下拉列表，什麼時候該用多行文本域。

## 問題情境

表單不只會用到 `<input>`。

如果有很多固定選項，全部攤開會佔空間，可以使用下拉列表。  
如果使用者要輸入較長內容，例如留言、評論、地址補充，就不適合使用單行文字框，而應該使用多行文本域。

## select 下拉列表

`<select>` 用來建立下拉列表，裡面至少要包含一個 `<option>`。

```html
<form action="/profile" method="post">
  <label for="city">居住地</label>
  <select id="city" name="city">
    <option value="hlj">黑龍江</option>
    <option value="ln">遼寧</option>
    <option value="jl">吉林</option>
    <option value="gd" selected>廣東</option>
  </select>

  <button type="submit">儲存</button>
</form>
```

### 程式碼拆解

- `<select>`：建立下拉列表。
- `name="city"`：提交資料時的欄位名稱。
- `<option>`：下拉列表中的一個選項。
- `value`：該選項真正提交出去的值。
- `selected`：預設選取該選項。

### option 沒有 value 時

```html
<option>廣東</option>
```

如果沒有設定 `value`，提交的資料通常會使用 `<option>` 中間的文字。實務上建議明確設定 `value`，資料比較穩定。

## textarea 多行文本域

`<textarea>` 用來建立多行文字輸入區。

```html
<form action="/comment" method="post">
  <label for="message">留言內容</label>
  <textarea id="message" name="message" rows="5" cols="30">預設文字</textarea>

  <button type="submit">送出留言</button>
</form>
```

### 程式碼拆解

- `<textarea>`：建立多行文字輸入控件。
- `name="message"`：提交資料時的欄位名稱。
- `rows`：預設顯示行數，會影響高度。
- `cols`：預設顯示列數，會影響寬度。
- 標籤中間的文字是預設內容。

## 常見錯誤

### textarea 寫成 input 的格式

```html
<textarea type="text" value="留言內容">
```

`<textarea>` 不是 `<input>`，不需要也不能靠 `type` 變成多行輸入。它的預設內容也不是放在 `value` 屬性，而是放在開始標籤與結束標籤之間。

正確寫法：

```html
<textarea name="message">留言內容</textarea>
```

## 實務判斷

| 需求 | 建議控件 |
| --- | --- |
| 固定選項很多，想節省空間 | `<select>` |
| 固定選項很少且要直接看見所有選項 | `radio` 或 `checkbox` |
| 單行短文字 | `<input type="text">` |
| 多行長文字 | `<textarea>` |

實務上，`rows` 和 `cols` 可以先提供基本尺寸，但正式版面通常會再用 CSS 控制寬高。

## 重點整理

- `<select>` 建立下拉列表，`<option>` 建立每個選項。
- 建議替每個 `<option>` 設定明確的 `value`。
- `<textarea>` 用於多行文字輸入。
- `<textarea>` 的預設內容放在標籤中間，不是放在 `value`。
