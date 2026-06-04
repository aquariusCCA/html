<!--
source_atomic:
  - atomic/第05章_全局屬性/04-contextmenu-屬性.md
-->

# contextmenu 舊式上下文選單補充

## 學習目標

讀完這篇補充筆記，你應該能夠：

- 知道 `contextmenu` 屬性曾經用來指定元素的上下文選單。
- 理解它與 `<menu type="context">`、`<menuitem>` 都不屬於現代 HTML 建議用法。
- 知道現代自訂右鍵選單通常改用 JavaScript 的 `contextmenu` 事件。

## 問題情境

有些舊資料會提到 `contextmenu` 屬性，好像可以用 HTML 指定某個元素右鍵後顯示哪個選單。這是舊式設計，現代 HTML 不建議使用。

如果只是閱讀舊程式碼或舊教材，需要知道它大概想解決什麼問題；如果是寫新頁面，應該改用 JavaScript 事件處理。

## 一句話理解

`contextmenu` 屬性是舊式上下文選單寫法，現代頁面不建議使用；需要自訂右鍵行為時，通常監聽 JavaScript 的 `contextmenu` 事件。

## 舊式 `contextmenu` 屬性的概念

`contextmenu` 屬性曾用於指定元素的上下文菜單；它的值是要打開的 `<menu>` 元素的 `id`。

不過，`contextmenu` 屬性、`<menu type="context">` 與 `<menuitem>` 都屬於 obsolete 功能，現代 HTML 不建議使用。

## 現代寫法：監聽 `contextmenu` 事件

如果需要攔截右鍵或顯示自訂處理，通常使用 JavaScript 監聽 `contextmenu` 事件。

```html
<p id="target">右鍵單擊此文本顯示自訂處理。</p>

<script>
  const target = document.getElementById('target');

  target.addEventListener('contextmenu', function (event) {
    event.preventDefault();
    alert('顯示自訂上下文選單');
  });
</script>
```

這段程式碼做了三件事：

- 找到 `id="target"` 的元素。
- 監聽該元素的 `contextmenu` 事件。
- 使用 `event.preventDefault()` 阻止瀏覽器預設右鍵選單，改成自訂處理。

## 實務注意事項

自訂右鍵選單會改變使用者熟悉的瀏覽器操作，因此不要隨便攔截整頁右鍵。

如果真的要自訂，應該注意：

- 是否保留使用者完成任務的其他方式。
- 是否影響複製、開新分頁、檢查連結等瀏覽器基本操作。
- 是否提供鍵盤可操作的替代路徑。

## 常見錯誤

### 在新頁面使用舊式屬性

不建議：

```html
<p contextmenu="menu">右鍵顯示選單</p>
```

這屬於舊式寫法，現代 HTML 不建議使用。

### 只為了禁止右鍵而攔截事件

```js
document.addEventListener('contextmenu', function (event) {
  event.preventDefault();
});
```

這會破壞瀏覽器原有操作，不代表能真正保護內容。除非有清楚的產品需求，否則不建議這樣做。

## 重點整理

- `contextmenu` 屬性是舊式上下文選單屬性。
- `<menu type="context">` 與 `<menuitem>` 也不屬於現代 HTML 建議用法。
- 新頁面需要自訂右鍵行為時，通常使用 JavaScript 的 `contextmenu` 事件。
- 自訂右鍵行為要謹慎，避免破壞使用者熟悉的瀏覽器操作。
