---
source_atomic:
  - atomic/050-全局屬性/07-draggable-拖曳屬性.md
---

# draggable：讓元素可以被拖曳

## 學習目標

讀完這篇筆記，你應該能夠：

- 理解 `draggable` 屬性控制的是元素是否可拖動。
- 知道 `draggable` 通常需要搭配 Drag and Drop API 事件。
- 看懂一個基本拖放範例的 HTML、CSS 與 JavaScript 分工。

## 問題情境

有些介面需要使用者把元素拖到另一個位置，例如：

- 把任務卡片拖到另一個欄位。
- 把圖片拖進上傳區。
- 把項目拖到排序列表中。

HTML 的 `draggable` 屬性可以讓元素具備「可被拖曳」的行為，但它本身不是完整拖放功能。真正的拖放流程還需要 JavaScript 事件配合。

## 一句話理解

`draggable` 決定元素能不能被拖起來；拖到哪裡、放下後做什麼，通常由 JavaScript 的拖放事件處理。

## 基本語法

```html
<div draggable="true">可以拖曳的元素</div>
```

明確設定 `draggable` 時，常用值是：

- `true`：元素可拖動。
- `false`：元素不可拖動。
- `auto`：由瀏覽器決定，通常是未設定或無效值時的預設行為。

鏈接和圖像預設通常可拖動。其他元素若要拖曳，通常需要設定 `draggable="true"`。

![draggable 屬性值與拖動狀態對照表](../../origin/050-全局屬性/assets/images/draggable-attribute-img-001-1637f4.png)

## 完整範例

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    .A {
      width: 200px;
      height: 200px;
      background-color: orange;
    }

    .B {
      width: 400px;
      height: 400px;
      background-color: gray;
    }
  </style>
</head>
<body>
  <div id="Adiv" class="A" draggable="true">
    A---拖曳的元素
  </div>
  <div id="Bdiv" class="B">
    B---A被拖進的元素
  </div>

  <script>
    Bdiv.ondragenter = function (e) {
      e.preventDefault();
    };

    Bdiv.ondragover = function (e) {
      e.preventDefault();
    };

    Bdiv.ondrop = function (e) {
      e.preventDefault();
      this.appendChild(Adiv);
    };

    Adiv.ondragstart = function (e) {
      this.style.backgroundColor = 'yellow';
    };

    Adiv.ondrag = function (e) {
      console.log('drag事件');
    };

    Adiv.ondragend = function (e) {
      this.style.backgroundColor = 'orange';
      console.log('dragend事件');
    };
  </script>
</body>
</html>
```

## 範例拆解

### HTML：標記可拖曳元素與目標區域

```html
<div id="Adiv" class="A" draggable="true">
  A---拖曳的元素
</div>
<div id="Bdiv" class="B">
  B---A被拖進的元素
</div>
```

- `Adiv` 是被拖曳的元素。
- `draggable="true"` 讓 `Adiv` 可以被拖起來。
- `Bdiv` 是拖曳目標區域。

### CSS：讓兩個區塊容易辨識

```css
.A {
  width: 200px;
  height: 200px;
  background-color: orange;
}

.B {
  width: 400px;
  height: 400px;
  background-color: gray;
}
```

CSS 只負責視覺呈現，讓拖曳元素與放置區域容易看出來。

### JavaScript：處理拖曳事件

```js
Bdiv.ondragover = function (e) {
  e.preventDefault();
};
```

拖放目標通常需要在 `dragover` 中呼叫 `preventDefault()`，否則瀏覽器可能不允許放置。

```js
Bdiv.ondragenter = function (e) {
  e.preventDefault();
};
```

這段程式在拖曳元素進入 `Bdiv` 時允許目標區域接收拖放。

```js
Bdiv.ondrop = function (e) {
  e.preventDefault();
  this.appendChild(Adiv);
};
```

這段程式在使用者把元素放下時，才把 `Adiv` 加到 `Bdiv` 裡。

```js
Adiv.ondragstart = function (e) {
  this.style.backgroundColor = 'yellow';
};

Adiv.ondragend = function (e) {
  this.style.backgroundColor = 'orange';
};
```

這兩段讓拖曳開始時改變顏色，拖曳結束後恢復顏色。

## 常見拖曳事件

| 事件 | 常見觸發時機 |
| --- | --- |
| `dragstart` | 開始拖曳元素時 |
| `drag` | 拖曳過程中 |
| `dragenter` | 拖曳元素進入某個目標時 |
| `dragover` | 拖曳元素停留在目標上方時 |
| `drop` | 在目標上放下元素時 |
| `dragend` | 拖曳結束時 |

## 常見錯誤

### 錯誤一：只加 draggable，沒有處理事件

```html
<div draggable="true">可以拖曳</div>
```

這只表示元素能被拖起來，不代表它能正確放到某個區域，也不代表資料會被移動。完整功能仍需要事件處理。

### 錯誤二：忘記在 dragover 中 preventDefault

如果拖放目標沒有在 `dragover` 中呼叫 `preventDefault()`，很多情況下 `drop` 或放置行為不會如預期發生。

```js
dropTarget.addEventListener('dragover', function (event) {
  event.preventDefault();
});
```

### 錯誤三：把 draggable 當成排序元件

`draggable` 只是底層能力。完整排序功能還需要判斷拖曳位置、更新資料順序、處理鍵盤操作與儲存狀態。

## 實務判斷

- 要讓一般元素可被拖起來，可設定 `draggable="true"`。
- 只設定 `draggable` 不等於完成拖放功能。
- 拖放目標通常需要處理 `dragover`、`dragenter` 或 `drop`。
- 若功能需要完整可及性與複雜排序，通常要額外設計鍵盤操作與狀態更新。

## 重點整理

- `draggable` 控制元素是否可拖動。
- `true` 和 `false` 是最常見的明確設定值。
- 拖放操作通常需要搭配 JavaScript 事件。
- `preventDefault()` 是拖放目標常見的必要處理。

## 自我檢查

- `draggable="true"` 是否代表元素一定能被成功放到任何位置？
- 為什麼拖放目標常需要在 `dragover` 中呼叫 `preventDefault()`？
- 圖片和連結是否通常預設可拖動？
