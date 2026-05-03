# 第 43 章 `template` 標籤 Demo

本目錄提供對應第 43 章筆記的範例頁，重點放在原生 `<template>` 的保存、複製、填資料與插入流程。

## Demo

- [template-tag-demo.html](./template-tag-demo.html)：示範 inert 模板內容、`template.content`、`DocumentFragment`、`cloneNode(true)`、資料渲染、批次插入、表格列模板、通知模板與事件委派。

## 觀察重點

- `<template>` 內容初始不渲染，不是單純的 CSS 隱藏。
- 真正要複製的是 `template.content`，它是 `DocumentFragment`。
- 通常使用 `template.content.cloneNode(true)` 深層複製模板內容。
- 修改複製品後再插入 DOM，畫面才會出現內容。
- 多筆資料可先放進 `document.createDocumentFragment()`，最後再一次插入。
- 不要直接 `appendChild(template.content)`，避免把原始模板內容移走。
- 動態產生的清單可以使用事件委派處理點擊。
- 模板內部避免固定 `id`，優先使用 `class`、`data-*` 或動態產生唯一值。

## 返回

- [回到第 43 章 README](../README.md)
- [回到總目錄](../../README.md)
