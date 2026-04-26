# `dialog` 標籤

> - 所屬章節：第四十一章｜`dialog` 標籤  
> - 關鍵字：`dialog`、對話框、modal、non-modal、`show()`、`showModal()`、`close()`、`open`、`method="dialog"`、`::backdrop`  
> - 建議回查情境：想做原生彈窗、確認框、模態表單，或想分清 `open`、`show()`、`showModal()`、`close()` 時

## 本節導讀

`<dialog>` 是 HTML 的原生對話框元素，可以表示彈窗、確認框、提示框或模態表單。

它的價值不只是少寫一點 CSS，而是提供一個有明確語意和原生行為基礎的互動容器。

這一章會先從 HTML 角度理解 `<dialog>`，不深入完整 JavaScript 應用架構。

## 整理說明

- 原始學習重點：補上 HTML 原生互動元件。
- 本次整理方向：分清非模態、模態、開關 API、表單關閉方式與可存取性提醒。
- 補強內容：加入 `::backdrop`、焦點、標題與按鈕配置。
- 待查證：不同瀏覽器與輔助技術對 `<dialog>` 的體驗仍應實測。

## 你會在這篇學到什麼

- `<dialog>` 的基本結構
- `open` 屬性代表什麼
- `show()` 和 `showModal()` 差在哪
- `close()` 如何關閉對話框
- `form method="dialog"` 怎麼用
- `::backdrop` 如何設定背景遮罩
- 使用 `<dialog>` 時的可存取性注意點

## 30 秒複習入口

- `<dialog>` 表示一個對話框。
- `show()` 開啟非模態對話框。
- `showModal()` 開啟模態對話框，背景內容不可互動。
- `close()` 關閉對話框。
- `open` 表示目前對話框是開啟狀態。
- `form method="dialog"` 可以讓表單按鈕關閉 dialog。
- 模態對話框要有清楚標題、關閉方式和焦點管理。

## 速查區

### 開啟方式

| 方法 | 類型 | 背景是否可互動 |
|---|---|---:|
| `dialog.show()` | 非模態 | 通常可以 |
| `dialog.showModal()` | 模態 | 不可以 |
| 加 `open` 屬性 | 開啟狀態 | 不等於完整模態開啟流程 |

### 常見 API

| API / 屬性 | 作用 |
|---|---|
| `open` | 表示對話框目前開啟 |
| `show()` | 開啟非模態對話框 |
| `showModal()` | 開啟模態對話框 |
| `close()` | 關閉對話框 |
| `returnValue` | dialog 關閉時可帶回的值 |
| `::backdrop` | 模態對話框背景遮罩樣式 |

## 正文筆記

### 1. 最基本的 `<dialog>`

```html
<button type="button" id="openDialog">開啟說明</button>

<dialog id="helpDialog">
  <h2>使用說明</h2>
  <p>這裡可以放提示、確認訊息或表單內容。</p>
  <button type="button" id="closeDialog">關閉</button>
</dialog>
```

搭配 JavaScript：

```html
<script>
  const dialog = document.querySelector("#helpDialog");
  const openButton = document.querySelector("#openDialog");
  const closeButton = document.querySelector("#closeDialog");

  openButton.addEventListener("click", () => {
    dialog.showModal();
  });

  closeButton.addEventListener("click", () => {
    dialog.close();
  });
</script>
```

這裡使用 `showModal()`，所以是模態對話框。

### 2. 非模態和模態差在哪？

非模態對話框：

```js
dialog.show();
```

它打開後，背景頁面通常仍然可以互動。  
適合浮動提示、輔助面板等不需要阻擋使用者的內容。

模態對話框：

```js
dialog.showModal();
```

它打開後，使用者需要先處理對話框，背景內容不可互動。  
適合確認刪除、登入、重要表單、必須回應的提示。

### 3. `open` 屬性代表什麼？

```html
<dialog open>
  <p>這個對話框一開始就是開啟狀態。</p>
</dialog>
```

`open` 表示對話框目前開啟。  
但實務上不建議只靠手動加 `open` 來模擬 `showModal()`，因為模態對話框牽涉焦點、背景互動、遮罩等行為。

簡單記：

- 查看狀態：看 `open`。
- 正確開啟：用 `show()` 或 `showModal()`。
- 關閉：用 `close()`。

### 4. 用表單關閉 dialog

`<dialog>` 裡可以放表單，並使用 `method="dialog"`。

```html
<dialog id="confirmDialog">
  <form method="dialog">
    <h2>確認刪除？</h2>
    <p>這個操作無法復原。</p>

    <button value="cancel">取消</button>
    <button value="confirm">確認刪除</button>
  </form>
</dialog>
```

當使用者按下按鈕，dialog 會關閉，按鈕的 `value` 可以成為對話框的返回值。

```js
confirmDialog.addEventListener("close", () => {
  console.log(confirmDialog.returnValue);
});
```

這很適合確認框。

### 5. 背景遮罩 `::backdrop`

模態對話框使用 `showModal()` 開啟時，可以透過 `::backdrop` 設定背景遮罩。

```css
dialog::backdrop {
  background: rgb(0 0 0 / 0.45);
}
```

`::backdrop` 是模態對話框背後的背景層。  
它不是 dialog 內容本身。

### 6. dialog 內容應該有清楚標題

對話框打開時，使用者需要快速知道：

- 這是什麼對話框？
- 要做什麼決定？
- 如何取消或關閉？

所以通常應該有標題：

```html
<dialog id="deleteDialog" aria-labelledby="deleteTitle">
  <form method="dialog">
    <h2 id="deleteTitle">刪除筆記？</h2>
    <p>刪除後無法復原。</p>
    <button value="cancel">取消</button>
    <button value="delete">刪除</button>
  </form>
</dialog>
```

`aria-labelledby` 可以讓對話框和標題建立明確關聯。

### 7. 可存取性注意點

使用 `<dialog>` 時要注意：

- 模態對話框開啟後，焦點應該進入對話框。
- 對話框內應該有可操作的關閉或取消方式。
- 標題和主要說明要清楚。
- 不要把大量頁面內容塞進模態對話框。
- 不要讓使用者迷失在背景頁面和對話框之間。

原生 `<dialog>` 已經幫忙處理一部分行為，但實際體驗仍要測試。

## 常見問法

### `<dialog>` 可以不用 JavaScript 嗎？

如果要互動開關，通常需要 JavaScript。  
單純加 `open` 可以讓它顯示，但不等於完整互動流程。

### `show()` 和 `showModal()` 怎麼選？

需要阻擋背景操作時，用 `showModal()`。  
只是輔助面板或非阻塞提示時，可以考慮 `show()`。

### 按 Esc 可以關閉 dialog 嗎？

模態 dialog 通常會有取消行為，但具體互動仍要測試。  
如果有重要流程，應該也提供明確的取消或關閉按鈕。

### `<dialog>` 可以放表單嗎？

可以。  
`form method="dialog"` 是一個常見模式，適合確認框或簡單彈窗表單。

## 自測問題

1. `<dialog>` 的核心用途是什麼？
2. `show()` 和 `showModal()` 差在哪？
3. `open` 屬性代表什麼？
4. `close()` 做什麼？
5. `form method="dialog"` 有什麼用途？
6. `::backdrop` 是什麼？
7. 使用模態對話框時要注意哪些可存取性問題？

## 延伸閱讀

- [第四十一章｜`dialog` 標籤](./README.md)
- [第三十八章｜HTML 可存取性基礎](../第三十八章_HTML可存取性基礎/README.md)
- [第三十四章｜`script` 與 `noscript` 標籤](../第三十四章_script與noscript標籤/README.md)
- [MDN：`<dialog>` element](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/dialog)
