# 第三十六章｜`figure` 與 `figcaption` 標籤

> 章節定位：理解圖片、圖表、程式碼或引用內容如何形成一個可附註說明的獨立單元  
> 建議閱讀方式：先分清一般圖片和圖文單元，再理解 `alt` 與 `figcaption` 的分工

## 本章在學什麼

這一章整理 `<figure>` 和 `<figcaption>`。

它們通常用來把圖片、圖表、程式碼片段、插圖、表格或引用內容包成一個「可以被整體引用或移動」的獨立內容單元。

重點不是所有圖片都要包 `<figure>`，而是判斷：

- 這個內容是否能作為一個獨立說明單元。
- 是否需要一段可見的圖說、標題或補充說明。
- `alt` 和 `figcaption` 是否各自負責不同資訊。
- 這個內容離開主文後，是否仍然可以被讀者理解。

## 本章與整體地圖的關係

- 前置知識：第十八章已學過圖片，第十三章與第二十七章已學過語意化結構。
- 這章的核心任務：補上圖文內容、圖表內容與程式碼範例的語意容器。
- 讀完後通常接：可存取性、響應式圖片、技術文本標籤。

## 建議閱讀順序

1. [`figure` 與 `figcaption` 標籤](./第36章_figure與figcaption標籤.md)
2. [範例程式碼：`figure` 與 `figcaption` 效果展示](./figure_figcaption_demo.html)

## 本章所有小節

- [`figure` 與 `figcaption` 標籤](./第36章_figure與figcaption標籤.md)
- [範例程式碼：`figure` 與 `figcaption` 效果展示](./figure_figcaption_demo.html)

## 範例程式碼

- [範例程式碼：`figure` 與 `figcaption` 效果展示](./figure_figcaption_demo.html)

這個範例用來觀察：

- 圖片與圖說如何組成一個 `<figure>`。
- `<figcaption>` 可以放在 `<figure>` 的第一個或最後一個子元素位置。
- `<figure>` 不只可以包圖片，也可以包程式碼片段。
- `alt` 和 `<figcaption>` 的分工差異。
- 不是每張圖片都需要使用 `<figure>`。
- 多張相關圖片可以共用一個 `<figcaption>`。

## 適合快速回查的主題

- `<figure>` 是做什麼的
- `<figcaption>` 應該放在哪裡
- `alt` 和 `<figcaption>` 差在哪
- 什麼圖片適合包成 `<figure>`
- 什麼圖片不需要包成 `<figure>`
- 程式碼或圖表能不能使用 `<figure>`
- 多張圖片能不能共用一個 `<figcaption>`

## 高頻回查入口

- 想快速知道圖片和圖說怎麼組成一組時，看：[`figure` 與 `figcaption` 標籤](./第36章_figure與figcaption標籤.md)
- 想分清 `alt` 和可見圖說時，看：[`figure` 與 `figcaption` 標籤](./第36章_figure與figcaption標籤.md)
- 想判斷圖片是否需要包 `<figure>` 時，看：[`figure` 與 `figcaption` 標籤](./第36章_figure與figcaption標籤.md)
- 想直接看畫面效果時，看：[範例程式碼：`figure` 與 `figcaption` 效果展示](./figure_figcaption_demo.html)

## 易混淆主題

- `<figure>` vs `<div>`：前者表示獨立內容單元，後者只是沒有語意的中性容器。
- `alt` vs `<figcaption>`：前者是圖片替代文字，後者是可見說明。
- 圖片 vs 圖文單元：不是每張圖片都需要 `<figure>`。
- 圖說 vs 替代文字：圖說是給所有讀者看的，替代文字主要是圖片無法顯示或輔助技術讀取時使用。
- 一張圖片 vs 多張圖片：多張圖片如果共同表達同一個主題，可以放在同一個 `<figure>` 中並共用一個 `<figcaption>`。

## 一句話判斷法

如果這個內容拿到文章旁邊、附錄、說明區，仍然可以作為一個完整單元被理解，就適合考慮使用 `<figure>`。

反過來說，如果圖片只是裝飾、icon、頭像，或只是普通內容的一部分，不一定需要使用 `<figure>`。

## 本章學完後應該能回答

1. `<figure>` 的核心語意是什麼？
2. `<figcaption>` 應該放在 `<figure>` 的哪裡？
3. `alt` 和 `<figcaption>` 的差異是什麼？
4. 什麼情況下圖片不需要使用 `<figure>`？
5. `<figure>` 是否只能用在圖片？
6. 程式碼片段、圖表、引用內容能不能使用 `<figure>`？
7. 多張圖片能不能放在同一個 `<figure>` 裡？

## 導航

- [返回首頁](../README.md)