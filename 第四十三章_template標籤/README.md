# 第四十三章｜`template` 標籤

> 章節定位：理解 HTML 中「先保存、暫不渲染，之後再由 JavaScript 複製使用」的原生模板機制。  
> 建議閱讀方式：先理解 `<template>` 為什麼是 inert，再看 `template.content`、`cloneNode(true)` 與插入 DOM 的流程。

## 一句話理解

`<template>` 是 HTML 原生提供的「結構藍圖」：它可以先存放一段 HTML，但這段內容一開始不會顯示，必須透過 JavaScript 複製後插入頁面，才會變成真正的畫面內容。

## 本章在學什麼

這一章整理 `<template>` 標籤。

它常用來保存之後會重複產生的 HTML 結構，例如：

- 卡片
- 清單項目
- 表格列
- 搜尋結果
- 通知項目
- Web Components 的內部模板

本章重點不是學前端框架的模板語法，而是先理解瀏覽器原生的 HTML 模板容器。

## 為什麼值得學

如果只想把元素藏起來，可以用 `hidden` 或 `display: none`。  
但如果目標是「先準備一份 HTML 結構，之後根據資料複製很多份」，`<template>` 會比隱藏元素更乾淨。

學會 `<template>` 之後，會更容易理解：

- DOM 操作如何產生畫面
- 為什麼要先複製節點再插入頁面
- 原生 HTML 模板和前端框架模板的差異
- Web Components 為什麼常搭配 `<template>` 使用

## 本章與整體地圖的關係

- 前置知識：HTML 結構、`id`、`class`、`data-*`、基本 DOM 查找、基本 JavaScript。
- 本章核心任務：理解原生 HTML 模板片段如何被保存、複製與插入。
- 讀完後通常接：DOM 操作、事件委派、元件化、Web Components 或前端框架模板系統。

## 建議閱讀順序

1. [`template` 標籤](./第43章_template標籤.md)

## 本章所有小節

- [`template` 標籤](./第43章_template標籤.md)

## 適合快速回查的主題

| 想查什麼 | 建議看哪裡 |
|---|---|
| `<template>` 是做什麼的 | 「先講結論」、「1. `<template>` 是什麼」 |
| 為什麼模板內容一開始不顯示 | 「2. inert 是什麼意思」 |
| `template.content` 是什麼 | 「3. `content` 與 `DocumentFragment`」 |
| 如何複製模板內容 | 「4. 用 JavaScript 複製模板」 |
| 如何根據陣列產生多個項目 | 「5. 實務範例：根據資料產生多張卡片」 |
| 事件怎麼處理 | 「6. 複製後的事件處理」 |
| `<template>` 和 `display: none` 差在哪 | 「7. `<template>`、`hidden`、`display: none` 的差異」 |
| 常見錯誤 | 「常見錯誤與注意事項」 |

## 高頻回查入口

- 想快速知道原生 HTML 模板怎麼寫時，看：[`template` 標籤](./第43章_template標籤.md#4-用-javascript-複製模板)
- 想看完整資料渲染流程時，看：[`template` 標籤](./第43章_template標籤.md#5-實務範例根據資料產生多張卡片)
- 想分清 `<template>` 和隱藏元素時，看：[`template` 標籤](./第43章_template標籤.md#7-templatehidden-display-none-的差異)
- 想避開實務坑時，看：[`template` 標籤](./第43章_template標籤.md#常見錯誤與注意事項)

## 易混淆主題

| 主題 | 容易誤解 | 正確理解 |
|---|---|---|
| `<template>` vs `display: none` | 都是不顯示，所以差不多 | `<template>` 是未啟用的模板內容；`display: none` 是已在 DOM 中但被 CSS 隱藏的元素 |
| `template` vs `template.content` | 可以直接複製 `<template>` 本身 | 真正要複製的是 `template.content` 裡面的模板內容 |
| 模板內容 vs 已渲染內容 | 寫在 HTML 裡就算頁面內容 | 模板內容要被複製並插入 DOM 後，才會成為頁面上的內容 |
| `cloneNode(true)` vs `cloneNode(false)` | 都是複製模板 | `true` 會深層複製所有子節點；`false` 幾乎只會得到空的片段 |
| HTML 模板 vs 前端框架模板 | 都是同一種模板系統 | 概念相關，但框架模板通常包含狀態、條件渲染、列表渲染與生命週期 |

## 閱讀完成檢查清單

讀完本章後，應該能回答：

- `<template>` 的核心用途是什麼？
- 為什麼 `<template>` 內容初始不顯示？
- `template.content` 和 `DocumentFragment` 有什麼關係？
- 為什麼通常要使用 `cloneNode(true)`？
- 為什麼不建議直接把 `template.content` 插入頁面？
- 複製出來的節點如果要綁定事件，通常有哪些做法？
- `<template>`、`hidden`、`display: none` 分別適合什麼情境？

## 對應示例

- [`template` 標籤 Demo](./demos/template-tag-demo.html)
- [demos 說明](./demos/README.md)

## 導航

- [返回首頁](../README.md)
