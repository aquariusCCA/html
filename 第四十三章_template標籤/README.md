# 第四十三章｜`template` 標籤

> 章節定位：理解 HTML 中可被 JavaScript 複製使用、但初始不渲染的模板內容  
> 建議閱讀方式：先理解模板內容為什麼是 inert，再看如何用 `content` 複製後插入頁面

## 本章在學什麼

這一章整理 `<template>`。

`<template>` 裡的內容不會在頁面初始渲染，也不會立刻執行或載入成可見內容。  
它常用來存放一段之後要用 JavaScript 複製、填資料、插入頁面的 HTML 結構。

## 本章與整體地圖的關係

- 前置知識：前面已學過 HTML 結構、JavaScript 載入、`id`、`class` 與自定義資料屬性。
- 這章的核心任務：補上原生 HTML 模板片段的概念。
- 讀完後通常接：DOM 操作、元件化、Web Components 或前端框架。

## 建議閱讀順序

1. [`template` 標籤](./第43章_template標籤.md)

## 本章所有小節

- [`template` 標籤](./第43章_template標籤.md)

## 適合快速回查的主題

- `<template>` 是做什麼的
- 為什麼模板內容一開始不顯示
- `template.content` 是什麼
- 如何 clone 模板內容
- `<template>` 和 `display: none` 差在哪

## 高頻回查入口

- 想快速知道原生 HTML 模板怎麼寫時，看：[`template` 標籤](./第43章_template標籤.md)
- 想分清 `<template>` 和隱藏元素時，看：[`template` 標籤](./第43章_template標籤.md)

## 易混淆主題

- `<template>` vs `display: none`：前者內容初始不進入可見 DOM 渲染流程，後者是已存在但被 CSS 隱藏。
- 模板內容 vs 已渲染內容：模板需要被複製並插入後才成為頁面內容。
- HTML 模板 vs 前端框架模板：概念相關，但不是同一套系統。

## 導航

- [返回首頁](../README.md)
