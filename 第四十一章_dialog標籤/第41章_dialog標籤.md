# `dialog` 標籤

> - 所屬章節：第四十一章｜`dialog` 標籤  
> - 版本定位：9.5 分版｜可教學、可回查、可實作  
> - 關鍵字：`dialog`、對話框、modal、non-modal、`show()`、`showModal()`、`close()`、`returnValue`、`open`、`method="dialog"`、`::backdrop`、焦點管理、可存取性  
> - 建議回查情境：想做原生彈窗、確認框、模態表單，或想分清 `open`、`show()`、`showModal()`、`close()`、`returnValue` 時

## 本節導讀

`<dialog>` 是 HTML 的原生對話框元素，可以表示彈窗、確認框、提示框、設定面板或模態表單。

它的價值不只是「少寫一點 CSS」，而是提供一個有明確語意和原生行為基礎的互動容器。

如果用一句話記住本章：

> `<dialog>` 是瀏覽器原生提供的對話框容器；用 `show()` 開非模態，用 `showModal()` 開模態，用 `close()` 關閉，用 `returnValue` 取得關閉結果。

本章會先從 HTML 角度理解 `<dialog>`，再補上必要的 JavaScript API、表單關閉方式、背景遮罩與可存取性注意點。

## 整理說明

- 原始學習重點：補上 HTML 原生互動元件。
- 本次整理方向：分清非模態、模態、開關 API、表單關閉方式、焦點與可存取性。
- 補強內容：加入 `returnValue`、完整確認框範例、`open` 的精準說明、`::backdrop` 使用時機、實務踩雷整理。
- 使用邊界：本章不深入前端框架中的 Dialog Component 設計，例如 Vue 元件封裝、Teleport、狀態管理等。
- 待查證：不同瀏覽器、螢幕閱讀器與行動裝置對 `<dialog>` 的體驗仍應實測。

## 你會在這篇學到什麼

- `<dialog>` 的基本結構
- `open` 屬性代表什麼
- `show()` 和 `showModal()` 差在哪
- `close()` 如何關閉對話框
- `close(value)` 和 `returnValue` 如何搭配
- `form method="dialog"` 怎麼用
- `::backdrop` 如何設定背景遮罩
- 使用 `<dialog>` 時的可存取性注意點
- 實務開發中容易踩到的問題

## 30 秒複習入口

- `<dialog>` 表示一個原生對話框。
- `show()` 開啟非模態對話框，背景通常仍可互動。
- `showModal()` 開啟模態對話框，背景內容不可互動。
- `close()` 關閉對話框。
- `close(value)` 可以關閉 dialog，並把 `value` 存到 `returnValue`。
- `open` 表示目前 dialog 是開啟狀態，但不建議手動加 `open` 來模擬完整互動流程。
- `form method="dialog"` 可以讓表單按鈕關閉 dialog，按鈕的 `value` 會成為 `returnValue`。
- `::backdrop` 是模態 dialog 背後的背景遮罩。
- 模態對話框要有清楚標題、關閉方式、焦點處理與合理內容量。

## 速查區

### 開啟方式

| 方法 | 類型 | 背景是否可互動 | 典型用途 |
|---|---|---:|---|
| `dialog.show()` | 非模態 | 通常可以 | 浮動說明、輔助面板、不阻塞的提示 |
| `dialog.showModal()` | 模態 | 不可以 | 確認刪除、登入、重要表單、必須回應的提示 |
| 加 `open` 屬性 | 開啟狀態 | 非完整模態流程 | 靜態展示、特殊情境；不建議拿來取代 API |

### 常見 API / 屬性 / 事件

| 名稱 | 類型 | 作用 | 重點提醒 |
|---|---|---|---|
| `open` | 屬性 | 表示 dialog 是否開啟 | 是狀態，不是推薦的開啟方式 |
| `show()` | 方法 | 開啟非模態 dialog | 背景仍可互動 |
| `showModal()` | 方法 | 開啟模態 dialog | 背景會被阻擋，會有 `::backdrop` |
| `close()` | 方法 | 關閉 dialog | 可傳入字串作為返回值 |
| `close(value)` | 方法 | 關閉並設定 `returnValue` | 常用於確認 / 取消結果 |
| `returnValue` | 屬性 | 取得 dialog 關閉時的結果 | 常搭配 `close` 事件讀取 |
| `method="dialog"` | 表單屬性 | 表單提交時關閉 dialog | 不等於送出資料到後端 |
| `close` | 事件 | dialog 關閉後觸發 | 適合讀取 `returnValue` |
| `cancel` | 事件 | 使用者請求取消時觸發 | 例如按 Esc；必要時可攔截 |
| `::backdrop` | CSS 偽元素 | 設定模態 dialog 背景遮罩 | 只在模態情境有意義 |

## 正文筆記

### 1. 最基本的 `<dialog>`

```html
<button type="button" id="openDialog">開啟說明</button>

<dialog id="helpDialog" aria-labelledby="helpTitle">
  <h2 id="helpTitle">使用說明</h2>
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

補充說明：

- `aria-labelledby="helpTitle"` 讓 dialog 和標題建立關聯。
- 如果按鈕只是用 JavaScript 控制開關，建議加上 `type="button"`，避免它在表單裡被當成送出按鈕。
- 實務上應提供明確的關閉按鈕，不能只依賴 Esc。

### 2. 非模態和模態差在哪？

非模態對話框：

```js
dialog.show();
```

它打開後，背景頁面通常仍然可以互動。  
適合浮動提示、輔助面板、工具說明等不需要阻擋使用者的內容。

模態對話框：

```js
dialog.showModal();
```

它打開後，使用者需要先處理對話框，背景內容不可互動。  
適合確認刪除、登入、重要表單、必須回應的提示。

簡單判斷：

| 使用情境 | 建議 |
|---|---|
| 使用者一定要先做選擇才能繼續 | `showModal()` |
| 只是顯示輔助資訊，背景可以繼續操作 | `show()` |
| 只是要做漂亮的浮動提示 | 不一定要用 `<dialog>`，也可以考慮 popover 或自製元件 |

### 3. `open` 屬性代表什麼？

```html
<dialog open>
  <p>這個對話框一開始就是開啟狀態。</p>
</dialog>
```

`open` 表示 dialog 目前是開啟狀態。

但是要特別注意：

> 手動加上 `open` 只是讓 dialog 處於開啟狀態，不等於透過 `showModal()` 建立完整的模態互動流程。

實務上不建議只靠手動加 `open` 來模擬模態對話框，因為模態對話框還牽涉：

- 背景互動是否被阻擋
- 是否進入 top layer
- 是否產生 `::backdrop`
- 焦點是否正確進入 dialog
- 鍵盤與輔助技術體驗是否合理

簡單記：

- 查看狀態：看 `open`。
- 非模態開啟：用 `show()`。
- 模態開啟：用 `showModal()`。
- 關閉：用 `close()`。

### 4. `close()` 與 `returnValue`

最基本關閉：

```js
dialog.close();
```

關閉時帶回結果：

```js
dialog.close("confirm");
```

之後可以透過 `returnValue` 取得結果：

```js
dialog.addEventListener("close", () => {
  console.log(dialog.returnValue);
});
```

常見用途：

| `returnValue` | 代表意思 |
|---|---|
| `"cancel"` | 使用者取消 |
| `"confirm"` | 使用者確認 |
| `"delete"` | 使用者確認刪除 |
| `""` | 沒有設定返回值 |

實務提醒：

```js
openButton.addEventListener("click", () => {
  dialog.returnValue = "";
  dialog.showModal();
});
```

重新開啟 dialog 前，可以先把 `returnValue` 清空，避免讀到上一次關閉時留下的值。

### 5. 用表單關閉 dialog

`<dialog>` 裡可以放表單，並使用 `method="dialog"`。

```html
<dialog id="confirmDialog" aria-labelledby="confirmTitle">
  <form method="dialog">
    <h2 id="confirmTitle">確認刪除？</h2>
    <p>這個操作無法復原。</p>

    <button value="cancel">取消</button>
    <button value="confirm">確認刪除</button>
  </form>
</dialog>
```

當使用者按下表單裡的按鈕時：

1. dialog 會關閉。
2. 被按下的按鈕 `value` 會成為 dialog 的 `returnValue`。
3. 可以在 `close` 事件中讀取結果。

```js
confirmDialog.addEventListener("close", () => {
  console.log(confirmDialog.returnValue);
});
```

這很適合確認框。

注意：

> `method="dialog"` 的重點是關閉 dialog 並回傳按鈕 value，不是把表單資料送到後端。

如果你需要真的送資料到後端，通常會在 `close` 事件或按鈕事件中另外處理。

### 6. 背景遮罩 `::backdrop`

模態對話框使用 `showModal()` 開啟時，可以透過 `::backdrop` 設定背景遮罩。

```css
dialog::backdrop {
  background: rgb(0 0 0 / 0.45);
}
```

`::backdrop` 是模態 dialog 背後的背景層。  
它不是 dialog 內容本身。

完整一點的樣式範例：

```css
dialog {
  width: min(90vw, 420px);
  border: none;
  border-radius: 12px;
  padding: 24px;
}

dialog::backdrop {
  background: rgb(0 0 0 / 0.45);
}
```

補充：

- `::backdrop` 通常和 `showModal()` 搭配。
- 如果只是用 `show()` 開啟非模態 dialog，通常不會有模態遮罩效果。
- 如果要點背景就關閉，不要直接假設瀏覽器預設會幫你處理，應依需求明確設計。

### 7. dialog 內容應該有清楚標題

對話框打開時，使用者需要快速知道：

- 這是什麼對話框？
- 要做什麼決定？
- 有什麼後果？
- 如何確認？
- 如何取消或關閉？

所以通常應該有標題：

```html
<dialog id="deleteDialog" aria-labelledby="deleteTitle" aria-describedby="deleteDesc">
  <form method="dialog">
    <h2 id="deleteTitle">刪除筆記？</h2>
    <p id="deleteDesc">刪除後無法復原。</p>
    <button value="cancel">取消</button>
    <button value="delete">刪除</button>
  </form>
</dialog>
```

這裡的重點：

- `aria-labelledby`：指定 dialog 的標題。
- `aria-describedby`：指定 dialog 的補充說明。
- 標題不要只寫「提示」，應該寫出具體行為，例如「刪除筆記？」。
- 重要操作應該有明確的取消按鈕。

### 8. 完整確認框範例

這個範例可以當作日後實作確認框的模板。

```html
<button type="button" id="deleteButton">刪除筆記</button>

<dialog id="deleteDialog" aria-labelledby="deleteTitle" aria-describedby="deleteDesc">
  <form method="dialog">
    <h2 id="deleteTitle">確認刪除筆記？</h2>
    <p id="deleteDesc">刪除後無法復原，請確認是否繼續。</p>

    <div class="actions">
      <button value="cancel">取消</button>
      <button value="delete">確認刪除</button>
    </div>
  </form>
</dialog>

<script>
  const deleteButton = document.querySelector("#deleteButton");
  const deleteDialog = document.querySelector("#deleteDialog");

  deleteButton.addEventListener("click", () => {
    deleteDialog.returnValue = "";
    deleteDialog.showModal();
  });

  deleteDialog.addEventListener("close", () => {
    if (deleteDialog.returnValue === "delete") {
      console.log("執行刪除");
      return;
    }

    console.log("取消刪除");
  });
</script>
```

可以補上簡單 CSS：

```css
dialog {
  width: min(90vw, 420px);
  border: none;
  border-radius: 12px;
  padding: 24px;
}

dialog::backdrop {
  background: rgb(0 0 0 / 0.45);
}

.actions {
  display: flex;
  justify-content: flex-end;
  gap: 8px;
}
```

這個範例的重點：

- 用 `showModal()` 開啟模態確認框。
- 用 `form method="dialog"` 關閉 dialog。
- 用按鈕的 `value` 區分「取消」與「確認刪除」。
- 用 `close` 事件讀取 `returnValue`。
- 開啟前清空 `returnValue`，避免殘留上一次結果。

### 9. 可存取性注意點

使用 `<dialog>` 時要注意：

- 模態對話框開啟後，焦點應該進入對話框。
- 關閉 dialog 後，焦點最好回到原本開啟 dialog 的按鈕。
- 對話框內應該有可操作的關閉、取消或返回方式。
- 標題和主要說明要清楚。
- 不要把大量頁面內容塞進模態對話框。
- 不要讓使用者迷失在背景頁面和對話框之間。
- 不要把 `tabindex` 加在 `<dialog>` 元素本身上。

原生 `<dialog>` 已經幫忙處理一部分行為，但實際體驗仍要測試，尤其是：

- 鍵盤操作
- Esc 關閉
- 行動裝置返回手勢
- 螢幕閱讀器朗讀效果
- 關閉後焦點是否回到合理位置

### 10. 實務踩雷整理

| 問題 | 原因 | 建議 |
|---|---|---|
| 只加 `open`，以為就是模態 | `open` 只是狀態 | 模態請用 `showModal()` |
| 背景沒有遮罩 | 沒用 `showModal()` 或沒設定 `::backdrop` | 用 `showModal()` 並設定 `dialog::backdrop` |
| 按鈕意外送出表單 | button 預設可能是 submit | 純 JS 按鈕加 `type="button"` |
| 重新開啟讀到舊的 `returnValue` | 上次值還留著 | 開啟前先 `dialog.returnValue = ""` |
| 使用者不知道怎麼關閉 | 沒有明確取消 / 關閉按鈕 | 一定要提供可見的關閉方式 |
| 內容太多，像完整頁面 | dialog 只適合短流程 | 大量內容改成頁面或側邊面板 |
| 呼叫 `showModal()` 出錯 | dialog 已經開啟，或狀態不符合 | 開啟前檢查 `dialog.open` |

可以加一個保護：

```js
function openModal(dialog) {
  if (!dialog.open) {
    dialog.showModal();
  }
}
```

### 11. 什麼情況適合用 `<dialog>`？

適合：

- 確認刪除
- 登入或驗證流程
- 簡短設定表單
- 重要警告
- 必須先回應才能繼續的操作

不一定適合：

- 大量內容閱讀
- 複雜多步驟流程
- 需要長時間停留的工作區
- 純提示泡泡
- 只是 hover tooltip

如果內容很大，通常應該考慮：

- 新頁面
- 側邊面板
- 抽屜 Drawer
- Popover
- 一般元件區塊

### 12. 補充：`requestClose()` 與 `closedby`

這一段屬於延伸補充，不是入門必背。

部分現代文件中你可能會看到：

- `requestClose()`：請求關閉 dialog，流程上會觸發可取消的關閉請求，適合需要攔截取消行為的情境。
- `closedby`：控制使用者可以透過哪些方式關閉 dialog，例如 Esc、點背景、或只能用開發者提供的按鈕。

初學階段可以先記：

> 一般確認框先掌握 `showModal()`、`close()`、`form method="dialog"`、`returnValue` 就夠了。

如果專案真的要精細控制「按 Esc 能不能關」、「點背景能不能關」，再查 `cancel` 事件、`requestClose()` 和 `closedby` 的瀏覽器支援。

## 常見問法

### `<dialog>` 可以不用 JavaScript 嗎？

如果要互動開關，通常需要 JavaScript。  
單純加 `open` 可以讓它顯示，但不等於完整互動流程。

### `show()` 和 `showModal()` 怎麼選？

需要阻擋背景操作時，用 `showModal()`。  
只是輔助面板或非阻塞提示時，可以考慮 `show()`。

### 按 Esc 可以關閉 dialog 嗎？

模態 dialog 通常會有取消行為，但重要流程仍應提供明確的取消或關閉按鈕。  
如果你需要控制 Esc 是否能關閉，可以研究 `cancel` 事件、`requestClose()` 或 `closedby`。

### `<dialog>` 可以放表單嗎？

可以。  
`form method="dialog"` 是一個常見模式，適合確認框或簡單彈窗表單。

### `method="dialog"` 會送資料到後端嗎？

不會。  
它主要是讓 dialog 關閉，並讓按鈕的 `value` 成為 `returnValue`。  
如果要真的送資料，需要自己另外寫 JavaScript 或使用一般表單送出流程。

### 為什麼不建議只用 `open`？

因為 `open` 只是開啟狀態，不代表你完成了模態對話框需要的互動流程。  
實務上要開非模態用 `show()`，開模態用 `showModal()`。

## 自測問題

1. `<dialog>` 的核心用途是什麼？
2. `show()` 和 `showModal()` 差在哪？
3. `open` 屬性代表什麼？
4. 為什麼不建議只靠手動加 `open` 來模擬模態 dialog？
5. `close()` 做什麼？
6. `close(value)` 和 `returnValue` 有什麼關係？
7. `form method="dialog"` 有什麼用途？
8. `::backdrop` 是什麼？
9. 使用模態對話框時要注意哪些可存取性問題？
10. 什麼情境不適合塞進 dialog？

## 自測參考答案

1. `<dialog>` 用來表示原生對話框，可以是模態或非模態互動容器。
2. `show()` 開啟非模態；`showModal()` 開啟模態並阻擋背景互動。
3. `open` 表示 dialog 目前處於開啟狀態。
4. 因為 `open` 只是狀態，不等於完整的模態流程，例如背景阻擋、top layer、遮罩與焦點處理。
5. `close()` 用來關閉 dialog。
6. `close(value)` 可以設定 dialog 的 `returnValue`，之後可在 `close` 事件中讀取。
7. `form method="dialog"` 可讓表單按鈕關閉 dialog，並把按鈕 `value` 作為返回值。
8. `::backdrop` 是模態 dialog 背後的背景遮罩。
9. 要注意標題、說明、關閉方式、焦點進入、焦點回復、鍵盤操作與內容量。
10. 大量內容、複雜多步驟流程、長時間工作區、純 tooltip 通常不適合塞進 dialog。

## 實作練習

### 練習 1：刪除確認框

需求：

- 點「刪除」按鈕打開 dialog。
- dialog 有「取消」和「確認刪除」。
- 按取消時不做事。
- 按確認刪除時印出 `執行刪除`。

練習重點：`showModal()`、`form method="dialog"`、`returnValue`。

### 練習 2：編輯暱稱

需求：

- 點「編輯暱稱」打開 dialog。
- dialog 裡有一個文字輸入框。
- 按確認後，把輸入結果顯示到頁面上。
- 按取消時不更新。

練習重點：表單資料、確認 / 取消流程、焦點回復。

### 練習 3：加入焦點回復

需求：

- 開啟 dialog 前記住是哪個按鈕開啟的。
- 關閉 dialog 後，把焦點回到原本的按鈕。

練習重點：鍵盤使用者體驗與可存取性。

## 延伸閱讀

- [第四十一章｜`dialog` 標籤](./README.md)
- [第三十八章｜HTML 可存取性基礎](../第三十八章_HTML可存取性基礎/README.md)
- [第三十四章｜`script` 與 `noscript` 標籤](../第三十四章_script與noscript標籤/README.md)
- [MDN：`<dialog>` element](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/dialog)
- [MDN：HTMLDialogElement](https://developer.mozilla.org/docs/Web/API/HTMLDialogElement)
- [MDN：HTMLDialogElement.showModal()](https://developer.mozilla.org/docs/Web/API/HTMLDialogElement/showModal)
- [MDN：HTMLDialogElement.close()](https://developer.mozilla.org/docs/Web/API/HTMLDialogElement/close)
