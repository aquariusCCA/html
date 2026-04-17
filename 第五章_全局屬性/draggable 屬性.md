# draggable 屬性

> 所屬章節：第五章｜全局屬性
> 關鍵字：`draggable`、拖曳、drag and drop、HTML Drag and Drop API、`true`、`false`、`auto`、`dragstart`、`drop`、`dataTransfer`
> 建議回查情境：想知道 HTML 元素怎麼變成可拖曳、想分清 `draggable="true"` 和預設 `auto` 的差別、想理解 `draggable` 和拖放事件之間的關係

---

## 本節導讀

`draggable` 是 HTML 的全局屬性，用來告訴瀏覽器：**這個元素能不能被拖曳**。

但學這個屬性時，最容易搞混的地方不是「能不能拖」，而是：

* **元素可被拖曳**
* **元素被拖到哪裡**
* **放下之後要做什麼**

這三件事其實不是同一層。
`draggable` 只處理第一件事：**讓元素具備拖曳資格**。
至於拖曳過程中的資料傳遞、放置目標是否接受、放下後的行為，通常還要搭配 HTML Drag and Drop API 的事件一起處理。

所以最穩定的理解方式是：

> `draggable` 解決的是「能不能開始拖」，不是「整個拖放功能是否已完成」。

---

## 先講結論 / 核心理解

先記這幾點：

* `draggable` 用來指定元素是否可被拖曳。
* 它是 **列舉屬性（enumerated attribute）**，不是布林屬性。
* `draggable="true"`：元素可以被拖曳。
* `draggable="false"`：元素不可被拖曳。
* 若沒有設定，預設是 `auto`。
* 在 `auto` 狀態下，通常只有某些瀏覽器原生支援的內容可直接拖曳，例如文字選取、圖片、連結。
* 一個元素可拖曳，不代表放置目標一定能接收，也不代表放下後會自動完成搬移。

---

## 這個屬性到底在控制什麼

`draggable` 控制的是：

> **某個元素能不能成為拖曳來源（drag source）**。

也就是說，它決定的是：

* 使用者能不能從這個元素開始拖
* 瀏覽器是否把這個元素視為可拖曳對象

它**不直接控制**下面這些事情：

* 能不能放進某個區域
* 放下後資料怎麼處理
* 要不要移動 DOM
* 要不要排序、刪除、複製、交換位置

這些都屬於拖放流程的後半段，通常要靠事件處理。

---

## 三個值怎麼理解

## 1. `draggable="true"`

表示這個元素**可以被拖曳**。

這通常用在：

* 可排序卡片
* 待辦清單項目
* 可拖入目標區的物件
* 自訂拖放互動元件

---

## 2. `draggable="false"`

表示這個元素**不可被拖曳**。

當你想明確禁止某個元素被拖動時，可以使用這個值。

---

## 3. `auto`

這是**未明確設定 `draggable` 時的預設狀態**。

在這種狀態下，瀏覽器會依照原生規則決定元素能否被拖曳。
實務上，通常是：

* 文字選取可拖曳
* 圖片可拖曳
* 連結可拖曳

所以要注意：

> **`auto` 不等於 `false`。**
> 它不是「完全不能拖」，而是「交給瀏覽器原生行為判斷」。

---

## 為什麼它不是布林屬性

這是很容易寫錯的地方。

雖然 `draggable` 看起來像 true / false 開關，但它在 HTML 裡是**列舉屬性**，不是像 `disabled`、`checked` 那種布林屬性。

所以你應該這樣寫：

```html
<div draggable="true"></div>
<div draggable="false"></div>
```

而不是這樣寫：

```html
<div draggable></div>
```

上面這種省略值的寫法，不是 `draggable` 的正確理解方式。

---

## `draggable` 和完整拖放功能的差別

這裡一定要切開。

### `draggable` 只解決：

* 這個元素能不能被拖

### 拖放 API 還要解決：

* 拖曳開始時要帶什麼資料
* 放置目標是否允許放下
* 放下時要做什麼
* 拖曳結束後要不要更新畫面

所以：

> `draggable="true"` 不代表拖放功能已經完成，
> 它只代表這個元素可以成為拖曳來源。

---

## `draggable` 和拖放事件怎麼配合

完整拖放流程，常會搭配下面幾種事件：

* `dragstart`：開始拖曳時觸發
* `drag`：拖曳過程中持續觸發
* `dragover`：拖曳物經過某個目標上方時觸發
* `drop`：放下時觸發
* `dragend`：拖曳結束時觸發

### 關鍵觀念

#### 1. 拖曳來源

誰可以被拖？
通常就是設了 `draggable="true"` 的元素。

#### 2. 放置目標

哪裡可以接收放下？
通常要在 `dragover` 事件裡呼叫 `event.preventDefault()`，否則很多情況下目標不會接受放下。

#### 3. 傳遞資料

拖曳過程中常常不只是搬 DOM，還會傳遞資料。
這時通常會用 `event.dataTransfer` 來存放拖曳資料，例如項目 id、型別、排序資訊。

所以更完整的理解是：

> 拖放不只是「把一個元素拖過去」，
> 很多時候其實是「拖一份資料，然後在放下時決定怎麼更新畫面」。

---

## 一個很重要的觀念：搬元素 vs 傳資料

很多初學者第一次學拖放時，會以為拖放就是：

* 把 DOM 節點抓起來
* 放到另一個容器
* `appendChild()` 完成

這種寫法可以作為入門示例，沒有問題。
但實務上常見的模式其實是：

1. 在 `dragstart` 裡放入資料
2. 在 `drop` 裡讀出資料
3. 再決定要不要移動、複製、排序或刪除

例如：

* 看板卡片排序
* 檔案拖入上傳區
* 項目拖到垃圾桶刪除
* 左右清單交換資料

這些情境都比較像「傳資料後再做處理」，而不只是單純搬 DOM。

---

## 基本示例：可拖曳元素拖入放置區

下面這個版本比原始示例更適合教學，因為它：

* 明確取得 DOM
* 保留拖放流程的核心事件
* 額外示範 `dataTransfer`
* 邏輯更接近實務習慣

```html
<!DOCTYPE html>
<html lang="zh-Hant">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>draggable demo</title>
  <style>
    .source {
      width: 200px;
      height: 200px;
      background-color: orange;
      padding: 12px;
      box-sizing: border-box;
      cursor: grab;
    }

    .target {
      width: 400px;
      height: 400px;
      background-color: #ccc;
      margin-top: 20px;
      padding: 12px;
      box-sizing: border-box;
    }
  </style>
</head>
<body>
  <div id="Adiv" class="source" draggable="true">
    A --- 拖曳的元素
  </div>

  <div id="Bdiv" class="target">
    B --- 放置目標
  </div>

  <script>
    const Adiv = document.getElementById("Adiv");
    const Bdiv = document.getElementById("Bdiv");

    Adiv.addEventListener("dragstart", (event) => {
      Adiv.style.backgroundColor = "yellow";
      event.dataTransfer.setData("text/plain", "Adiv");
    });

    Adiv.addEventListener("drag", () => {
      console.log("drag");
    });

    Adiv.addEventListener("dragend", () => {
      Adiv.style.backgroundColor = "orange";
      console.log("dragend");
    });

    Bdiv.addEventListener("dragover", (event) => {
      event.preventDefault();
    });

    Bdiv.addEventListener("drop", (event) => {
      event.preventDefault();

      const draggedId = event.dataTransfer.getData("text/plain");
      const draggedElement = document.getElementById(draggedId);

      Bdiv.appendChild(draggedElement);
    });
  </script>
</body>
</html>
```

---

## 這段示例怎麼理解

### 1. `Adiv` 設成 `draggable="true"`

所以它能成為拖曳來源。

### 2. `dragstart` 裡設定 `dataTransfer`

這代表拖曳時不是只靠「我知道現在拖的是哪個 DOM」，而是明確把資料帶出去。
這種寫法更接近實務模式。

### 3. `dragover` 裡呼叫 `preventDefault()`

這一步很重要。
沒有它，很多情況下 `drop` 不會正常成立。

### 4. `drop` 裡再決定怎麼處理

這裡是把元素加入 `Bdiv`，也就是示範最基本的「搬移」效果。
但你也可以在這裡改成：

* 複製元素
* 更新資料陣列
* 交換排序
* 觸發刪除邏輯

---

## `true` 和 `auto` 的真正差別

這個問題很常考，也很常被誤解。

## `draggable="true"`

代表你**明確指定**這個元素可以被拖曳。

## `auto`

代表你**沒有明確指定**，由瀏覽器依原生規則判斷。

所以差別不只是「一個能拖、一個不能拖」，而是：

* `true`：開發者主動宣告
* `auto`：瀏覽器依預設行為決定

這就是為什麼一般 `div` 如果想變成可拖曳來源，通常要顯式加上：

```html
<div draggable="true"></div>
```

---

## 常見混淆點 / 易錯點

## 1. `draggable="true"` 不等於完整拖放功能

它只表示元素可以開始拖，不代表放下後會自動處理。

---

## 2. `auto` 不等於 `false`

未設定時不是完全禁止，而是依瀏覽器原生行為處理。

---

## 3. `draggable` 不是布林屬性

不要把它寫成只有屬性名、沒有值的形式。

---

## 4. 放置目標需要額外處理

來源可拖，不代表目標一定能接。
通常還要處理 `dragover` 和 `drop`。

---

## 5. 拖放常常不只是搬 DOM

很多實務情境是透過 `dataTransfer` 傳資料，再更新狀態或畫面。

---

## 6. 不要把示例寫法當成唯一做法

教學示例常直接 `appendChild()`，但真實專案中，可能會改成更新陣列、重繪 UI、發送請求或同步狀態。

---

## 補充注意事項

* `draggable` 依說明主要適用於 HTML namespace 下的元素，不能直接照搬到所有命名空間元素上，例如 SVG 不應直接用同樣方式理解。
* 原生拖放行為在不同瀏覽器實作與細節表現上，可能會有差異；入門時先抓核心模型最重要：**來源、資料、目標、放下後的處理**。

---

## 一句話抓核心

`draggable` 的重點不是「拖放功能完成了」，而是：

> **這個元素是否具備被拖曳的資格。**

真正的拖放互動，通常還要再配合事件與資料傳遞機制一起完成。

---