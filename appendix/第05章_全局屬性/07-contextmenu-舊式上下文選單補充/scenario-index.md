# Scenario Index

## 用途

用實作情境反查本篇筆記中能支援的舊式右鍵選單辨識、現代事件處理與操作注意事項。

## 實作場景索引

| 我想做什麼 | 需要知道 | 對應段落 |
| --- | --- | --- |
| 讀懂舊教材中的 `contextmenu` 屬性 | 這是舊式 HTML 指定上下文選單的設計，現代不建議使用 | [問題情境](../../../notes/第05章_全局屬性/07-contextmenu-舊式上下文選單補充.md#問題情境) |
| 判斷新頁面是否該使用 `contextmenu` 屬性 | `contextmenu` 屬性已屬於舊式寫法，不適合作為新頁面的右鍵選單方案 | [舊式 `contextmenu` 屬性的概念](../../../notes/第05章_全局屬性/07-contextmenu-舊式上下文選單補充.md#舊式-contextmenu-屬性的概念) |
| 用 JavaScript 處理單一元素右鍵 | `addEventListener('contextmenu')`、事件物件與自訂處理 | [現代寫法：監聽 `contextmenu` 事件](../../../notes/第05章_全局屬性/07-contextmenu-舊式上下文選單補充.md#現代寫法監聽-contextmenu-事件) |
| 阻止預設右鍵選單並改做自訂處理 | 在事件處理函式中使用 `event.preventDefault()` | [現代寫法：監聽 `contextmenu` 事件](../../../notes/第05章_全局屬性/07-contextmenu-舊式上下文選單補充.md#現代寫法監聽-contextmenu-事件) |
| 避免把右鍵攔截當成保護內容 | 攔截整頁右鍵會破壞瀏覽器操作，也不能真正保護內容 | [只為了禁止右鍵而攔截事件](../../../notes/第05章_全局屬性/07-contextmenu-舊式上下文選單補充.md#只為了禁止右鍵而攔截事件) |
| 保留自訂右鍵行為的替代操作 | 複製、開新分頁、檢查連結與鍵盤操作等替代路徑 | [實務注意事項](../../../notes/第05章_全局屬性/07-contextmenu-舊式上下文選單補充.md#實務注意事項) |
