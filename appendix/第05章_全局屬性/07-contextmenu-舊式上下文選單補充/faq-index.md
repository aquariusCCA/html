# FAQ Index

## 用途

用常見問題快速定位本篇筆記中能回答舊式 `contextmenu` 屬性與現代右鍵事件處理疑問的段落。

## 常見問題索引

| 問題 | 簡短回答 | 對應段落 |
| --- | --- | --- |
| `contextmenu` 屬性做什麼？ | 它曾用來指定元素的上下文選單，值是要打開的 `<menu>` 元素的 `id`。 | [舊式 `contextmenu` 屬性的概念](../../../notes/第05章_全局屬性/07-contextmenu-舊式上下文選單補充.md#舊式-contextmenu-屬性的概念) |
| `contextmenu` 屬性現代還建議使用嗎？ | 不建議。這是舊式上下文選單寫法，現代 HTML 不建議使用。 | [一句話理解](../../../notes/第05章_全局屬性/07-contextmenu-舊式上下文選單補充.md#一句話理解) |
| `<menu type="context">` 和 `<menuitem>` 還建議使用嗎？ | 不建議。筆記說明它們和 `contextmenu` 屬性都屬於 obsolete 功能。 | [舊式 `contextmenu` 屬性的概念](../../../notes/第05章_全局屬性/07-contextmenu-舊式上下文選單補充.md#舊式-contextmenu-屬性的概念) |
| 新頁面要自訂右鍵選單該怎麼做？ | 通常使用 JavaScript 監聽 `contextmenu` 事件，再依需求執行自訂處理。 | [現代寫法：監聽 `contextmenu` 事件](../../../notes/第05章_全局屬性/07-contextmenu-舊式上下文選單補充.md#現代寫法監聽-contextmenu-事件) |
| 為什麼範例要呼叫 `event.preventDefault()`？ | 它用來阻止瀏覽器預設右鍵選單，讓自訂處理能接手。 | [現代寫法：監聽 `contextmenu` 事件](../../../notes/第05章_全局屬性/07-contextmenu-舊式上下文選單補充.md#現代寫法監聽-contextmenu-事件) |
| 可以只為了禁止右鍵而攔截 `contextmenu` 事件嗎？ | 不建議。這會破壞瀏覽器原有操作，也不代表能真正保護內容。 | [只為了禁止右鍵而攔截事件](../../../notes/第05章_全局屬性/07-contextmenu-舊式上下文選單補充.md#只為了禁止右鍵而攔截事件) |
| 自訂右鍵選單要注意什麼？ | 應避免隨便攔截整頁右鍵，並保留其他操作方式與鍵盤可操作的替代路徑。 | [實務注意事項](../../../notes/第05章_全局屬性/07-contextmenu-舊式上下文選單補充.md#實務注意事項) |
