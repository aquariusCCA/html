# 第 41 章 `dialog` 標籤 Demo

本目錄提供對應第 41 章筆記的範例頁，重點放在原生 `<dialog>` 的開啟、關閉、模態行為、表單關閉與返回值。

## Demo

- [dialog-tag-demo.html](./dialog-tag-demo.html)：示範 `show()`、`showModal()`、`close()`、`returnValue`、`form method="dialog"`、`::backdrop`、`close` / `cancel` 事件與焦點回復。

## 觀察重點

- `show()` 開啟非模態 dialog，背景通常仍可操作。
- `showModal()` 開啟模態 dialog，背景互動會被阻擋，並可使用 `::backdrop`。
- `open` 是開啟狀態，不建議拿來取代 `show()` 或 `showModal()`。
- `close(value)` 可以關閉 dialog，並把 `value` 存到 `returnValue`。
- `form method="dialog"` 可以讓表單按鈕關閉 dialog，按鈕的 `value` 會成為 `returnValue`。
- dialog 應有清楚標題、說明、取消 / 關閉方式與基本焦點回復。

## 返回

- [回到第 41 章 README](../README.md)
- [回到總目錄](../../README.md)
