# 第四十一章｜`dialog` 標籤

> 版本定位：9.5 分版｜可教學、可回查、可實作  
> 章節定位：理解 HTML 原生對話框元素如何表示彈窗、確認框與模態互動  
> 建議閱讀方式：先分清「非模態 / 模態」，再理解 `show()`、`showModal()`、`close()`、`returnValue` 與 `form method="dialog"`

## 本章在學什麼

這一章整理 HTML 的 `<dialog>` 元素。

`<dialog>` 可以表示一個原生對話框，例如提示、確認框、表單彈窗、設定面板或模態互動。  
本章重點不是「把彈窗做得漂亮」，而是理解：

- `<dialog>` 的 HTML 語意
- 模態與非模態的差異
- 正確的開啟與關閉 API
- 表單如何透過 `method="dialog"` 關閉對話框
- 焦點、標題、關閉方式與可存取性注意點

## 本章核心心智模型

可以把 `<dialog>` 想成：

> 一個具有原生語意與開關狀態的互動容器。

它和一般 `<div>` 彈窗最大的差異在於：

| 比較項目 | `<div>` 自製彈窗 | `<dialog>` 原生對話框 |
|---|---|---|
| 語意 | 需要自己補 ARIA 與互動規則 | 本身就是對話框元素 |
| 開關方式 | 自己控制 class / display | 使用 `show()`、`showModal()`、`close()` |
| 模態行為 | 需要自己阻擋背景互動 | `showModal()` 會建立模態互動 |
| 背景遮罩 | 自己新增遮罩元素 | 可用 `::backdrop` |
| 表單關閉 | 自己寫事件邏輯 | 可用 `form method="dialog"` |

## 本章與整體地圖的關係

- 前置知識：已學過按鈕、表單、基本可存取性與 JavaScript 載入方式。
- 這章任務：補上 HTML 原生互動元件，理解瀏覽器已經提供的對話框能力。
- 讀完後通常接：JavaScript DOM 操作、表單互動、事件處理、焦點管理與更深入的可存取性。

## 建議閱讀順序

1. [`dialog` 標籤](./第41章_dialog標籤.md)
2. 回頭比較：`open`、`show()`、`showModal()` 的差異
3. 實作一次確認框：用 `form method="dialog"` 搭配 `returnValue`
4. 補看可存取性：標題、說明、關閉方式、焦點回復

## 本章所有小節

- [`dialog` 標籤](./第41章_dialog標籤.md)

## 適合快速回查的主題

- `<dialog>` 是做什麼的
- `show()` 和 `showModal()` 差在哪
- `open` 屬性代表什麼
- `close()` 如何關閉對話框
- `close(value)` 和 `returnValue` 如何搭配
- `form method="dialog"` 有什麼用
- `::backdrop` 什麼時候才有效
- `<dialog>` 的可存取性注意點
- 實務上哪些情境適合用 `<dialog>`

## 高頻回查入口

- 想快速做原生彈窗時，看：[`dialog` 標籤｜完整確認框範例](./第41章_dialog標籤.md#8-完整確認框範例)
- 想分清模態與非模態時，看：[`dialog` 標籤｜非模態和模態差在哪](./第41章_dialog標籤.md#2-非模態和模態差在哪)
- 想知道 `open` 為什麼不等於 `showModal()` 時，看：[`dialog` 標籤｜open-屬性代表什麼](./第41章_dialog標籤.md#3-open-屬性代表什麼)
- 想知道表單按鈕如何關閉彈窗時，看：[`dialog` 標籤｜用表單關閉-dialog](./第41章_dialog標籤.md#5-用表單關閉-dialog)
- 想避免實務踩雷時，看：[`dialog` 標籤｜實務踩雷整理](./第41章_dialog標籤.md#10-實務踩雷整理)

## 易混淆主題

| 主題 | 容易誤解 | 正確理解 |
|---|---|---|
| `open` vs `showModal()` | 以為加 `open` 就是完整模態 | `open` 是狀態；`showModal()` 是用模態流程開啟 |
| `show()` vs `showModal()` | 以為兩者只是外觀不同 | `show()` 是非模態；`showModal()` 會阻擋背景互動 |
| `close()` vs `returnValue` | 以為 `close()` 只能關閉 | `close(value)` 可以設定關閉後的 `returnValue` |
| `method="dialog"` vs 一般表單送出 | 以為會送資料到後端 | 它主要用來關閉 dialog 並設定返回值 |
| `::backdrop` vs dialog 本體 | 以為是 dialog 內容背景 | `::backdrop` 是模態 dialog 後面的背景層 |
| 彈窗外觀 vs 對話框語意 | 只重視 CSS 外觀 | 互動語意、焦點、標題與關閉方式也要正確 |

## 學完本章應該能做到

讀完後，你應該可以：

- 說明 `<dialog>` 的用途。
- 區分非模態與模態對話框。
- 正確使用 `show()`、`showModal()`、`close()`。
- 解釋為什麼不建議只靠手動加 `open` 來模擬模態對話框。
- 使用 `form method="dialog"` 做一個確認框。
- 使用 `returnValue` 判斷使用者按了「取消」或「確認」。
- 使用 `::backdrop` 設定模態對話框的背景遮罩。
- 寫出有標題、有取消方式、有基本焦點考量的 dialog。

## 實作練習建議

1. 做一個「刪除確認」dialog。
2. 做一個「編輯暱稱」dialog，送出後顯示使用者輸入結果。
3. 做一個「設定面板」dialog，練習取消、確認、Esc 關閉與焦點回復。
4. 比較同一個 UI 用 `<div>` 和 `<dialog>` 實作時，事件與語意差在哪。

## 導航

- [返回首頁](../README.md)
