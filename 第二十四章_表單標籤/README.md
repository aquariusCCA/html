# 第二十四章｜表單標籤

> 章節定位：建立 HTML 表單收集使用者資料、組織控件與提交互動的基礎判讀
> 建議閱讀方式：先理解表單整體組成，再看表單域、控件、提示關聯、分組、禁用與常見屬性

## 本章在學什麼

這一章整理 HTML 的表單標籤。
重點不是只記住某個輸入框怎麼寫，而是理解一份表單如何由表單域、表單控件與提示信息組成，並進一步處理提交、分組、禁用、按鈕行為與填寫體驗。

## 本章與整體地圖的關係

- 前置知識：前面學過的超鏈接、列表、表格與基本標籤，能幫助理解表單裡的提示、分組和資料結構。
- 這章的核心任務：學會用 `<form>` 組織表單資料，並分清 `input`、`label`、`textarea`、`select`、`button`、`fieldset`、`legend` 等角色。
- 讀完後通常接：後續做登入、註冊、搜尋、問卷、留言、後台查詢條件時，都會回到這章確認表單結構。

## 建議閱讀順序

1. [表單介紹](./表單介紹.md)
2. [表單域](./表單域.md)
3. [表單控件](./表單控件.md)
4. [label 標籤](./label標籤.md)
5. [textarea 文本域表單元素](./textarea文本域表單元素.md)
6. [button 按鈕標籤](./button%20按鈕標籤.md)
7. [fieldset 與 legend 標籤](./fieldset與legend標籤.md)
8. [禁用表單控件](./禁用表單控件.md)
9. [新增表單屬性](./新增表單屬性.md)
10. [select 下拉表單元素](./select下拉表單元素.md)

## 本章所有小節

- [表單介紹](./表單介紹.md)
- [表單域](./表單域.md)
- [表單控件](./表單控件.md)
- [label 標籤](./label標籤.md)
- [textarea 文本域表單元素](./textarea文本域表單元素.md)
- [button 按鈕標籤](./button%20按鈕標籤.md)
- [fieldset 與 legend 標籤](./fieldset與legend標籤.md)
- [禁用表單控件](./禁用表單控件.md)
- [新增表單屬性](./新增表單屬性.md)
- [select 下拉表單元素](./select下拉表單元素.md)

## 適合快速回查的主題

- 表單域、表單控件、提示信息的分工
- `<form>` 的 `action`、`method`、`name`、`target`
- `input type` 如何決定控件類型
- `label for` 為什麼對應 `id` 而不是 `name`
- `textarea` 與單行輸入框的差異
- `<button>` 的 `submit`、`reset`、`button`
- `fieldset` / `legend` 的分組語意
- `disabled` 與 `fieldset disabled`
- `required`、`placeholder`、`autofocus`、`autocomplete`

## 高頻回查入口

- 想先建立表單整體觀念時，看：[表單介紹](./表單介紹.md)
- 想知道 `<form>` 如何組織提交資料時，看：[表單域](./表單域.md)
- 想分清各種 `input type` 時，看：[表單控件](./表單控件.md)
- 想讓點擊文字也能操作欄位時，看：[label 標籤](./label標籤.md)
- 想處理多行留言或備註時，看：[textarea 文本域表單元素](./textarea文本域表單元素.md)
- 想避免按鈕誤提交時，看：[button 按鈕標籤](./button%20按鈕標籤.md)
- 想一次禁用整組欄位時，看：[禁用表單控件](./禁用表單控件.md)

## 易混淆主題

- 表單不是只有輸入框：它包含表單域、控件與提示信息。
- `label for` 對應的是 `id`，不是 `name`。
- `textarea` 不是 `input type="text"`，也不是單標籤。
- `<button>` 在表單中若省略 `type`，通常會被當成 `submit`。
- `disabled` 不是只有變灰，通常也不會參與表單提交。
- `placeholder` 是提示文字，不是欄位真正的值。

## 對應示例

- [表單標籤 Demo](./demos/form-tags-demo.html)
- [demos 說明](./demos/README.md)

## 導航

- [返回首頁](../README.md)
