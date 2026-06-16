<!--
source_atomic:
  - atomic/050-全局屬性/05-data-自訂資料屬性.md
-->

# data-*：在 HTML 元素上存放自訂資料

## 學習目標

讀完這篇筆記，你應該能夠：

- 理解 `data-*` 屬性用來存放什麼資料。
- 知道 `data-*` 的命名規則。
- 使用 JavaScript 透過 `dataset` 讀取自訂資料。

## 問題情境

有時候，HTML 元素不只需要顯示文字，也需要帶著一點給程式使用的資料。

例如商品清單中的每個商品，畫面上顯示的是商品名稱，但 JavaScript 可能還需要知道商品分類、商品編號或目前狀態。這些資料不一定要顯示給使用者看，卻需要跟元素放在一起，方便互動時讀取。

這時可以使用 `data-*` 屬性。

## 一句話理解

`data-*` 是 HTML 提供給開發者的自訂資料欄位，可以把私有資料放在元素上，讓 JavaScript 讀取。

## 基本語法

```html
<li class="animal" data-animal-type="bird">喜鵲</li>
```

這裡的 `data-animal-type="bird"` 表示這個 `<li>` 有一筆自訂資料，資料名稱是 `animal-type`，資料值是 `bird`。

## 命名規則

`data-*` 屬性由兩個部分組成：

- 固定前綴：`data-`
- 自訂名稱：例如 `animal-type`、`food-type`

```html
<li data-animal-type="fish">金槍魚</li>
<li data-food-type="fruit">蘋果</li>
```

使用時要注意：

- `data-` 後面至少要有一個字元。
- 屬性名稱不應包含大寫字母。
- 屬性值本質上是字串。

## 範例拆解

```html
<ul>
  <li class="animal" data-animal-type="bird">喜鵲</li>
  <li class="animal" data-animal-type="fish">金槍魚</li>
  <li class="animal" data-animal-type="spider">蠅虎</li>
</ul>
```

這段 HTML 中：

- `class="animal"`：把三個項目歸為同一類，方便選取。
- `data-animal-type="bird"`：記錄第一個項目的動物類型。
- 使用者看到的是「喜鵲」「金槍魚」「蠅虎」。
- JavaScript 可以讀到的是 `bird`、`fish`、`spider`。

## 用 JavaScript 讀取 data-*

```html
<ul>
  <li class="animal" data-animal-type="bird">喜鵲</li>
  <li class="animal" data-animal-type="fish">金槍魚</li>
  <li class="animal" data-animal-type="spider">蠅虎</li>
</ul>

<script>
  const elements = document.querySelectorAll('.animal');

  for (let i = 0; i < elements.length; i++) {
    console.log(elements[i].dataset.animalType);
  }
</script>
```

在 JavaScript 中，`data-animal-type` 會變成 `dataset.animalType`。

轉換方式是：

- 去掉 `data-`。
- 將連字號後面的字母轉成大寫。

所以：

- `data-animal-type` 對應 `dataset.animalType`
- `data-food-type` 對應 `dataset.foodType`

## 用 JavaScript 設定 data-*

```html
<ul>
  <li id="apple">蘋果</li>
</ul>

<script>
  const apple = document.getElementById('apple');
  apple.setAttribute('data-food-type', 'fruit');
</script>
```

這段程式會替 `<li id="apple">` 加上一個 `data-food-type="fruit"` 屬性。

也可以使用 `dataset` 設定：

```js
apple.dataset.foodType = 'fruit';
```

## 實務使用情境

`data-*` 常用在需要把資料和元素綁在一起的情境，例如：

- 商品卡片上的商品 ID。
- 按鈕上的操作類型。
- 表格列上的資料狀態。
- 選單項目的分類名稱。

例如：

```html
<button data-action="delete" data-user-id="42">刪除使用者</button>
```

JavaScript 可以根據 `data-action` 判斷要執行刪除，也可以根據 `data-user-id` 知道要刪除哪一位使用者。

## 常見錯誤

### 錯誤一：把重要可見內容只放在 data-* 裡

`data-*` 是給程式使用的資料，不應取代畫面上應該顯示的內容。

```html
<button data-label="刪除"></button>
```

這個按鈕對使用者來說沒有可見文字。應該把可見文字放在元素內容中。

```html
<button data-action="delete">刪除</button>
```

### 錯誤二：在 data-* 放過多資料

```html
<article data-product='{"id":1,"name":"Keyboard","price":1200,"stock":50}'>
  Keyboard
</article>
```

如果資料很複雜，通常應由 JavaScript 狀態、API 回傳資料或資料模型管理，不適合把大量 JSON 塞進 HTML 屬性。

### 錯誤三：屬性名稱使用大寫

```html
<li data-Animal-Type="bird">喜鵲</li>
```

建議使用小寫與連字號：

```html
<li data-animal-type="bird">喜鵲</li>
```

## 重點整理

- `data-*` 用來在 HTML 元素上存放自訂資料。
- `data-*` 的資料通常給 JavaScript 使用，不是主要給使用者閱讀。
- `data-animal-type` 在 JavaScript 中可透過 `dataset.animalType` 讀取。
- 適合存放少量、和元素直接相關的資料。

## 自我檢查

- `data-product-id` 在 JavaScript 的 `dataset` 中會對應到哪個名稱？
- `data-*` 適合拿來存放大量 JSON 資料嗎？
- 如果按鈕需要顯示「刪除」，這個文字應該放在元素內容中，還是只放在 `data-label`？
