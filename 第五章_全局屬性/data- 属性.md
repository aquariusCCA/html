# data-* 屬性

> 所屬章節：第五章｜全局屬性  
> 關鍵字：`data-*`、自定義資料屬性、custom data attributes、`dataset`、`DOMStringMap`、`data-foo-bar`、camelCase  
> 建議回查情境：想知道 `data-*` 是做什麼的、想回查 `data-*` 在 JavaScript 中怎麼讀取、想分清屬性名稱和 `dataset` 屬性名稱之間的轉換規則

## 本節導讀

這篇整理 `data-*` 這組 HTML 全局屬性的用途與基本規則。  
它的核心作用，是讓你可以在 HTML 元素上附加自定義資料，之後再由 JavaScript 讀取或修改。

`data-*` 很常用在前端互動中，因為它讓元素除了結構與樣式之外，還能額外攜帶一些程式會用到的資訊。  
但要真正用得順，關鍵不是只記住「可以自訂資料」，而是要理解命名規則，以及 `data-xxx` 進到 `dataset` 之後會怎麼對應。

## 你會在這篇學到什麼

- `data-*` 屬性是在做什麼
- `data-*` 的命名規則與基本限制
- `data-*` 如何透過 `HTMLElement.dataset` 被 JavaScript 存取
- `data-foo-bar` 為什麼會對應成 `dataset.fooBar`

## 30 秒複習入口

- `data-*` 是一組自定義資料屬性，用來在 HTML 和 JavaScript 之間傳遞額外資訊。
- 這些屬性可以寫在任何 HTML 元素上。
- 在 JavaScript 中，常透過 `element.dataset` 來讀取。
- `data-user-id` 這類 kebab-case 名稱，進到 `dataset` 後通常會變成 `dataset.userId`。

## 速查區

### 核心概念

- `data-*` 讓 HTML 元素能攜帶自定義資料，而不必額外發明非標準屬性名稱。
- 這些資料通常不是拿來直接呈現給使用者，而是給 JavaScript 或 CSS 當作輔助資訊。

### 關鍵規則 / 判準

- 屬性名稱必須以 `data-` 開頭，後面至少還要有一個字元。
- 屬性值可以是任意字串。
- 如果打算透過 `dataset` 存取，`data-` 後面的命名最好維持小寫與連字號形式，例如 `data-user-id`。
- `data-user-id` 會對應到 `dataset.userId`；也就是移除 `data-` 前綴後，再把 kebab-case 轉成 camelCase。

### 常見混淆點

- `data-*` 不是用來取代 `id` 或 `class` 的；它是在補充額外資料，不是在做元素識別或分組。
- `data-*` 不會自動產生畫面效果，但 JavaScript 和 CSS 都可以利用它。
- 「瀏覽器會忽略 `data-`」比較精確的說法是：它不會像標準表單或互動屬性那樣自帶特定行為，但屬性本身仍會保留在 DOM 中，可被程式讀取。

### 一句話對比

- `data-*` 解決的是「如何把自定義資料附在元素上」，不是「如何替元素命名或套樣式」。

## 正文筆記

### 這篇在解決什麼問題？

- 有時候頁面上的元素需要附帶一些額外資訊，像是分類、識別碼、狀態或類型。
- 如果這些資訊是給程式使用，而不是 HTML 原生屬性本來就定義好的內容，`data-*` 就是一個標準且通用的做法。

## 1. `data-*` 的作用

> 使用 `data-*` 屬性來嵌入自定義數據。

- `data-*` 屬性用來儲存頁面或應用程式的私有自定義資料。
- 它讓所有 HTML 元素都可以攜帶額外資訊，之後再由 JavaScript 讀取與利用。
- 依 MDN 的說法，這類屬性是用來在 HTML 和它的 DOM 表示之間交換自定義資料。

## 2. 命名規則怎麼看

- 屬性名稱必須是 `data-` 加上一段自定義名稱，例如 `data-animal-type`。
- 原始教材提到名稱不應包含大寫字母，這和 MDN 的建議方向一致。
- 更實務的理解是：如果你打算用 `dataset` 來操作，最好使用全小寫加連字號的命名方式，這樣後續轉成 JavaScript 屬性時最穩定、最好讀。

## 3. JavaScript 如何讀取 `data-*`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <ul>
    <li class="animal" data-animal-type="bird">喜鹊</li>
    <li class="animal" data-animal-type="fish">金枪鱼</li>
    <li class="animal" data-animal-type="spider">蝇虎</li>
  </ul>

  <ul>
    <li id="apple">蘋果</li>
  </ul>
</body>

<script>
  // 在腳本中讀取 data-* 屬性
  let elements = document.querySelectorAll('.animal');

  for (let i = 0; i < elements.length; i++) {
    console.log(elements[i].dataset.animalType);
  }

  // 在腳本中設定 data-* 屬性
  let apple = document.getElementById('apple');
  apple.setAttribute('data-food-type', 'fruit');
</script>
</html>
```

### 這段怎麼理解？

- HTML 中的 `data-animal-type`，進到 JavaScript 的 `dataset` 後，會變成 `animalType`。
- 所以 `elements[i].dataset.animalType` 讀到的，就是每個 `<li>` 上 `data-animal-type` 的值。
- `setAttribute('data-food-type', 'fruit')` 則是在程式執行時，替元素新增一個 `data-food-type="fruit"` 屬性。

## 4. `dataset` 命名轉換要記什麼

- `data-test` 對應 `dataset.test`
- `data-test-abc` 對應 `dataset.testAbc`
- 依 MDN 說明，若你計畫使用 `dataset`，最好避免像 `data-test-1` 或 `data--test` 這種不利於轉成 JavaScript 屬性名稱的寫法

## 5. 關於「會被忽略」這句話

- 原始筆記寫「自定義屬性前綴 `data-` 會被客戶端忽略」，這句容易讓人誤會成它完全沒作用。
- 更準確的說法是：`data-*` 不像 `href`、`src`、`checked` 這些屬性那樣自帶明確瀏覽器行為，但它仍然會保留在 DOM 裡，能被 JavaScript 透過 `dataset` 或 `getAttribute()` 讀取。
- 此外，CSS 也可以透過屬性選擇器或 `attr()` 在特定情境中利用這些值。

## 自測問題

1. `data-*` 屬性主要在解決什麼問題？
2. 為什麼 `data-user-id` 會對應到 `dataset.userId`？
3. `data-*` 和 `id`、`class` 在用途上有什麼不同？
4. 為什麼說 `data-*` 不會自帶特定行為，但仍然不是「沒作用」？

## 延伸閱讀

- [class 屬性](./class%20属性.md)
- [contenteditable 屬性](./contenteditable%20属性.md)
- [返回第五章：全局屬性](./README.md)
- [返回首頁](../README.md)
