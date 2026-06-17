<!--
source_atomic:
  - atomic/240-表單標籤/11-textarea多行文本域.md
-->

# textarea 多行文本域

## 學習目標

讀完這篇筆記，你應該能夠：

- 說明 `<textarea>` 適合處理哪些輸入情境。
- 正確撰寫 textarea 的基本語法。
- 分辨 textarea 與 `<input type="text">` 的差異。
- 避免用 `value` 或 `type` 錯誤設定 textarea。

## 使用情境

如果使用者只需要輸入帳號、姓名、搜尋關鍵字，單行文字框通常就夠了。但若要輸入留言、評論、地址、問題描述，內容可能超過一行，就應該使用 `<textarea>`。

一句話理解：

> `<textarea>` 是用來收集多行文字的表單控件。

## 基本語法

```html
<label for="message">留言內容</label>
<textarea id="message" name="message" rows="6" cols="40"></textarea>
```

範例拆解：

- `<textarea>` 建立多行文字輸入區。
- `name="message"` 是提交欄位名稱。
- `rows` 指定預設顯示行數。
- `cols` 指定預設顯示列數。
- 開始標籤與結束標籤之間可以放初始內容。

## 初始內容怎麼寫

textarea 的初始內容不是寫在 `value`，而是寫在開始標籤與結束標籤中間。

```html
<textarea name="intro">這是預設文字</textarea>
```

不要寫成：

```html
<textarea name="intro" value="這是預設文字"></textarea>
```

這是很多初學者從 `<input>` 轉到 `<textarea>` 時會犯的錯。`<input>` 透過 `value` 設定值，`<textarea>` 則透過標籤內容設定初始文字。

## textarea 沒有 type 屬性

`textarea` 本身就是多行文本域，不需要也不應使用 `type`。

```html
<!-- 錯誤觀念 -->
<textarea type="text" name="message"></textarea>

<!-- 正確寫法 -->
<textarea name="message"></textarea>
```

如果需要單行輸入，使用 `<input type="text">`；如果需要多行輸入，使用 `<textarea>`。

## rows、cols 與 CSS

`rows` 與 `cols` 可以指定 textarea 的預設大小：

```html
<textarea name="comment" rows="8" cols="50"></textarea>
```

不過在實際開發中，版面大小通常交給 CSS 控制：

```html
<textarea class="comment-box" name="comment"></textarea>
```

```css
.comment-box {
  width: 100%;
  min-height: 160px;
}
```

HTML 屬性描述基本行為與語意，CSS 更適合控制畫面尺寸。

## 常見搭配屬性

textarea 也可以使用許多常見表單屬性：

```html
<label for="feedback">回饋內容</label>
<textarea
  id="feedback"
  name="feedback"
  placeholder="請輸入你的意見"
  maxlength="500"
  required
></textarea>
```

- `placeholder`：提示使用者要輸入什麼。
- `maxlength`：限制最多字元數。
- `required`：設定為必填欄位。

## 常見錯誤

### 用 text input 收長篇內容

```html
<input type="text" name="comment">
```

如果內容可能是多行留言，單行輸入框會讓使用者很難閱讀與編輯。應改用：

```html
<textarea name="comment"></textarea>
```

### 用 value 設定預設內容

textarea 不使用 `value` 設定初始內容。要預填文字，應放在標籤中間。

### 只用 rows 和 cols 控制正式版面

`rows` 與 `cols` 可以作為預設尺寸，但若要符合響應式版面，仍應搭配 CSS 控制寬度、高度與縮放行為。

## 實務判斷準則

- 短文字、單行資料：使用 `<input type="text">`。
- 留言、評論、描述、地址等長文字：使用 `<textarea>`。
- textarea 初始文字寫在標籤內容中。
- 欄位大小在正式版面中通常用 CSS 控制。
- 多行文字仍應搭配 label，讓使用者知道要填什麼。

## 重點整理

- `<textarea>` 用於多行文字輸入。
- textarea 沒有 `type` 屬性。
- 初始內容寫在 `<textarea>` 與 `</textarea>` 中間。
- `rows` 與 `cols` 影響預設顯示大小，但實務版面常用 CSS 控制。
- textarea 可搭配 `name`、`placeholder`、`maxlength`、`required` 等屬性。

## 自我檢查

1. 留言板內容應使用 `<input type="text">` 還是 `<textarea>`？
2. textarea 的預設文字應該寫在哪裡？
3. 為什麼正式版面通常不只靠 `rows` 和 `cols` 控制大小？
