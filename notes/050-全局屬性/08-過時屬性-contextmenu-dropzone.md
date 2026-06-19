---
source_atomic:
  - atomic/050-全局屬性/04-contextmenu-上下文選單.md
  - atomic/050-全局屬性/08-dropzone-拖放處理方式.md
topics: [過時屬性, contextmenu, dropzone, 右鍵選單, Drag and Drop API]
summary: "說明 `contextmenu` 與 `dropzone` 作為舊屬性不應再依賴，現代實作應改用事件處理。"
---

# 過時屬性補充：contextmenu 與 dropzone

## 學習目標

讀完這篇補充筆記，你應該能夠：

- 知道 `contextmenu` 屬性與 `dropzone` 屬性都不應作為現代 HTML 的主要實作方式。
- 遇到舊教材或舊程式碼時，能判斷替代方向。
- 理解右鍵選單與拖放行為應改由 JavaScript 事件處理。

## 問題情境

查 HTML 屬性資料時，你可能會看到一些舊屬性。它們曾經出現在標準或教材中，但現在已經不適合依賴。

`contextmenu` 和 `dropzone` 就是這類內容：

- `contextmenu` 曾用於指定元素的上下文選單。
- `dropzone` 曾用於規定拖動資料放到元素上時，要複製、移動或建立連結。

現代開發不應把這兩個屬性當成主線寫法。

## 一句話理解

`contextmenu` 與 `dropzone` 都屬於過時屬性；右鍵選單與拖放行為應改用 JavaScript 事件實作。

## contextmenu：過時的上下文選單屬性

`contextmenu` 屬性曾用於指定元素的上下文菜單，但此屬性已過時，現代 HTML 不應再依賴它建立自訂右鍵選單。

如果需要處理右鍵選單，應使用 JavaScript 監聽 `contextmenu` 事件。

```html
<p id="target">右鍵單擊此文本。</p>

<script>
  const target = document.getElementById('target');

  target.addEventListener('contextmenu', function (event) {
    event.preventDefault();
    alert('顯示自訂上下文選單');
  });
</script>
```

這段程式碼中：

- `contextmenu` 是事件名稱，不是 HTML 屬性。
- `event.preventDefault()` 阻止瀏覽器預設右鍵選單。
- 後續可以改成顯示自訂選單元件。

## dropzone：過時的拖放處理屬性

`dropzone` 屬性曾用於規定被拖動的資料拖放到元素上時，是否被複製、移動或鏈接。

舊屬性值包含：

- `copy`：拖動資料會產生副本。
- `move`：拖動資料會被移動到新位置。
- `link`：拖動資料會產生指向原始資料的鏈接。

但在現代 HTML 中，`dropzone` 屬性已過時，拖放行為應使用 Drag and Drop API 事件處理。

```html
<div id="drop-target">拖放到這裡</div>

<script>
  const dropTarget = document.getElementById('drop-target');

  dropTarget.addEventListener('dragenter', function (event) {
    event.preventDefault();
  });

  dropTarget.addEventListener('dragover', function (event) {
    event.preventDefault();
  });
</script>
```

這段範例中：

- `dragenter` 用於拖曳元素進入目標區域。
- `dragover` 用於拖曳元素停留在目標上方。
- `preventDefault()` 讓目標區域可以接受拖放相關行為。

## 對照整理

| 舊屬性 | 曾經用途 | 現代替代方向 |
| --- | --- | --- |
| `contextmenu` | 指定元素的上下文選單 | 監聽 JavaScript 的 `contextmenu` 事件 |
| `dropzone` | 指定拖放資料的處理方式 | 使用 Drag and Drop API 的拖放事件 |

## 常見錯誤

### 錯誤一：把過時屬性當成現代標準寫法

```html
<div contextmenu="menu-id">右鍵區域</div>
```

這種寫法不應作為現代開發方式。若要處理右鍵，使用事件監聽。

### 錯誤二：期待 dropzone 自動完成拖放功能

```html
<div dropzone="copy">拖放到這裡</div>
```

現代開發不應依賴這個屬性。拖放功能應使用 `dragenter`、`dragover`、`drop` 等事件實作。

### 錯誤三：阻止預設右鍵選單卻沒有提供替代操作

如果使用 `event.preventDefault()` 關閉瀏覽器右鍵選單，卻沒有提供清楚的替代操作，使用者可能失去原本可用的瀏覽器功能。

## 實務判斷

- 看到 `contextmenu` 屬性時，應把它視為舊用法。
- 看到 `dropzone` 屬性時，應改查 Drag and Drop API。
- 自訂右鍵選單要注意不要破壞使用者原本的瀏覽器操作。
- 拖放功能除了滑鼠，也應思考鍵盤和輔助技術使用者的替代操作。

## 重點整理

- `contextmenu` 屬性與 `<menuitem>` 元素屬於過時用法。
- `dropzone` 屬性屬於過時用法。
- 現代右鍵選單應使用 JavaScript `contextmenu` 事件。
- 現代拖放行為應使用 Drag and Drop API 事件。

## 自我檢查

- `contextmenu` 作為 HTML 屬性時，是否適合現代開發依賴？
- `dropzone="copy"` 是否是現代拖放功能的建議寫法？
- 使用 `event.preventDefault()` 關閉預設右鍵選單時，為什麼要提供替代操作？
