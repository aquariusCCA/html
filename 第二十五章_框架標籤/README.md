# 第二十五章｜框架標籤

> - 章節定位：理解如何在目前頁面中建立內嵌顯示區塊，載入另一份 HTML、PDF 或外部可嵌入內容  
> - 建議閱讀方式：先掌握 `iframe` 的用途，再理解 `src`、`title`、`name`、`target` 的分工，最後學習嵌入限制與查錯方向

## 本章在學什麼

這一章整理 HTML 中現代仍常用的框架標籤：`iframe`。

`iframe` 可以在目前頁面中建立一個獨立的內嵌顯示區塊，用來載入另一份文件或外部內容。常見用途包括嵌入本地 HTML、PDF 預覽、地圖、影片播放器，或把超連結與表單送出的結果顯示在指定區塊中。

學習本章時，不只要記住語法，還要理解三件事：

1. `iframe` 是用來「嵌入另一份內容」的。
2. `name` 可以配合 `<a>` 或 `<form>` 的 `target`，把內容顯示到指定框架。
3. 並不是所有網站都能被嵌入；有些網站會透過安全設定拒絕出現在別人的 `iframe` 中。

## 本章與整體地圖的關係

- 前置知識：前面已學過超鏈接、表單與多種內容標籤，這一章會把它們和「內嵌顯示區塊」串起來。
- 這章的核心任務：理解 `iframe` 如何載入內容，以及 `name` / `target` 如何配合。
- 實務連結：日後遇到 PDF 預覽、第三方嵌入內容、固定結果顯示區、外部網站無法嵌入等問題時，可以回到本章查詢。
- 後續延伸：如果之後學到前端元件化、路由、狀態管理或安全機制，可以再回頭比較哪些情境適合用 `iframe`，哪些情境應該用元件或其他方案處理。

## 本章學習主線

1. 先理解 `iframe` 是「頁面中的頁面」。
2. 再理解 `src` 如何決定一開始載入的內容。
3. 接著理解 `title` 為什麼建議加上，因為它可以描述 `iframe` 的用途。
4. 然後理解 `name` 如何配合 `<a target="...">` 或 `<form target="...">`。
5. 最後理解外部網站無法嵌入時，可能不是 HTML 語法錯誤，而是安全限制造成的。

## 建議閱讀順序

1. [框架標籤（iframe）](./第25章_框架標籤.md)

## 本章所有小節

- [框架標籤（iframe）](./第25章_框架標籤.md)

## 適合快速回查的主題

- `iframe` 是做什麼的
- `src`、`title`、`name`、`width`、`height` 如何分工
- `target` 為什麼可以對應到 `iframe`
- 超連結如何把內容載入指定 `iframe`
- 表單送出後如何把回應顯示到指定 `iframe`
- 什麼情境適合使用 `iframe`
- 什麼情境不適合使用 `iframe`
- 為什麼有些網站不能被嵌入
- `X-Frame-Options` 與 `Content-Security-Policy: frame-ancestors` 是什麼
- `frameborder` 舊式寫法該怎麼理解
- `iframe` 顯示失敗時可以怎麼查錯

## 高頻回查入口

- 想快速知道 `iframe` 怎麼把其他內容嵌進頁面時，看：[框架標籤（iframe）](./第25章_框架標籤.md)
- 想理解 `src`、`title`、`name` 的分工時，看：[框架標籤（iframe）](./第25章_框架標籤.md)
- 想理解 `name` 和 `target` 怎麼互相配合時，看：[框架標籤（iframe）](./第25章_框架標籤.md)
- 想知道表單送出後如何把結果顯示在指定區塊時，看：[框架標籤（iframe）](./第25章_框架標籤.md)
- 想判斷某個需求適不適合用 `iframe` 時，看：[框架標籤（iframe）](./第25章_框架標籤.md)
- 想確認為什麼某些外部網站無法直接嵌入時，看：[框架標籤（iframe）](./第25章_框架標籤.md)
- 想知道舊教材中的 `frameborder` 為什麼不適合當成現代主力寫法時，看：[框架標籤（iframe）](./第25章_框架標籤.md)
- 想查 `iframe` 顯示空白、拒絕載入、target 沒反應等問題時，看：[框架標籤（iframe）](./第25章_框架標籤.md)

## 易混淆主題

- `iframe` vs 舊式 `frame` / `frameset`：現代常用的是 `iframe`；舊式 `frame` / `frameset` 不是新網站主流。
- `src` vs `target`：`src` 決定 `iframe` 一開始載入什麼；`target` 決定超連結或表單結果要顯示到哪裡。
- `name` vs `title`：`name` 是給 `target` 對應用的；`title` 是用來描述 `iframe` 內容或用途的。
- `<form action>` vs `<form target>`：`action` 決定資料送到哪裡；`target` 決定伺服器回應顯示在哪裡。
- 能嵌入 vs 不能嵌入：不一定是語法問題，也可能是對方網站的安全限制。
- `iframe` 限制 vs CORS：外部網站無法被放進 `iframe`，常見原因不是單純 CORS，而是 `X-Frame-Options` 或 `Content-Security-Policy: frame-ancestors`。
- `frameborder` vs CSS `border`：前者常見於舊教材，現代通常改用 CSS 控制邊框。
- `iframe` vs 前端元件：`iframe` 適合嵌入獨立內容，不適合拿來取代一般元件化開發。

## 常見查錯方向

當 `iframe` 沒有正常顯示時，可以依照下面順序檢查：

1. `src` 路徑是否正確。
2. 被嵌入的檔案是否真的存在，例如 HTML 或 PDF 是否放在正確位置。
3. `<a>` 或 `<form>` 的 `target` 是否和 `iframe` 的 `name` 完全一致。
4. 瀏覽器 console 是否出現 `X-Frame-Options` 或 `Content-Security-Policy` 相關錯誤。
5. 外部網站是否本來就禁止被放進其他網站的 `iframe`。
6. 如果使用 `sandbox`，是否因限制太嚴導致表單、腳本或跳轉無法正常運作。
7. 如果是 PDF 預覽，確認瀏覽器或環境是否支援直接顯示 PDF。

## 學完本章應該能回答的問題

- `iframe` 的主要用途是什麼？
- `src`、`title`、`name`、`width`、`height` 各自負責什麼？
- 為什麼 `<a target="...">` 可以把內容顯示到指定 `iframe`？
- 表單的 `action` 和 `target` 差在哪？
- 為什麼有些外部網站明明網址正確，卻不能顯示在 `iframe` 中？
- `frameborder` 為什麼不建議當成現代主要寫法？
- 什麼情境適合用 `iframe`，什麼情境不適合？

## 導航

- [框架標籤（iframe）](./第25章_框架標籤.md)
- [第二十一章｜超鏈接標籤](../第二十一章_超鏈接標籤/README.md)
- [第二十四章｜表單標籤](../第二十四章_表單標籤/README.md)
- [返回首頁](../README.md)

---