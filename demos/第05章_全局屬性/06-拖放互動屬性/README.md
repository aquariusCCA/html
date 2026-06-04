# 拖放互動屬性 HTML 教學範例

來源筆記：`notes/第05章_全局屬性/06-拖放互動屬性.md`

## 建議學習順序

| 順序 | Demo | 對應觀念 | 觀察重點 | 建議修改任務 |
| --- | --- | --- | --- | --- |
| 1 | `01-draggable屬性值與預設拖動.html` | `draggable` 常見值與瀏覽器預設 | `true`、`false`、`auto` 的差異，以及連結與圖片預設可拖動 | 把普通 div 的 `draggable="auto"` 改成 `draggable="true"`，觀察是否可以開始拖動 |
| 2 | `02-draggable需要拖放事件.html` | `draggable` 不等於完整拖放功能 | 只加 `draggable` 能拖起元素，但要放下並移動元素仍需要 `dragover`、`drop` 與 `event.preventDefault()` | 移除 `event.preventDefault()`，觀察右側區域是否還能接收卡片 |
| 3 | `03-拖曳事件順序與狀態變化.html` | `dragstart`、`drag`、`dragend` 事件 | 拖曳開始時改變狀態，拖曳中累計事件次數，拖曳結束時恢復狀態 | 修改 `ondragstart` 中的樣式，觀察拖曳開始時的變化 |
| 4 | `04-dropzone已棄用屬性.html` | `dropzone` 是已棄用屬性 | 錯誤寫法會明確標示 `dropzone` 不建議使用，正確方向改用拖放事件處理 | 刪除錯誤範例中的 `dropzone="move"`，保留事件處理版本 |
| 5 | `05-拖放互動替代操作.html` | 拖放互動需要替代操作 | 排序項目雖可拖動，但也提供上移、下移按鈕給不方便拖曳的使用者 | 新增第四個項目並複製上移、下移按鈕，確認仍可調整順序 |

## 學習提醒

這組 demo 的目標不是取代正式筆記，而是幫助你把筆記中的觀念轉成可觀察、可修改、可練習的 HTML 範例。
