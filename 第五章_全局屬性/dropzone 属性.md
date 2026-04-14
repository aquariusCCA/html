# dropzone 屬性

> 所屬章節：第五章｜全局屬性  
> 關鍵字：`dropzone`、拖放目標、drop target、drag and drop、`copy`、`move`、`link`、obsolete、`dragenter`、`dragover`、`drop`  
> 建議回查情境：想知道 `dropzone` 原本是做什麼的、想分清它和 `draggable` 的角色差別、想確認為什麼現代拖放實作不再依賴 `dropzone`

## 本節導讀

這篇重構的重點，是把 `dropzone` 放回它真正的位置：  
它不是現代拖放 API 的核心屬性，而是 HTML 曾經嘗試用宣告式屬性描述拖放目標的一條舊路線。

如果只記教材裡的 `copy`、`move`、`link`，很容易得到錯誤印象：  
好像只要替元素加上 `dropzone="copy"`，它就會變成可靠的拖放區。  
這正是最需要修正的地方。依 WHATWG 現行 HTML Standard，`dropzone` 已被列為 obsolete attribute；今天真正可靠的做法，是讓目標元素處理拖放事件。

## 這篇在解決什麼問題

- 拖放互動通常同時有兩個面向：誰可以被拖，以及哪裡可以接收放下。
- `dropzone` 原本想處理後者，也就是「這個元素是否應被視為放置目標，以及放下後偏向哪種操作語意」。
- 但真正需要釐清的是：它今天更適合拿來理解歷史設計，不適合拿來當現代實作答案。

## 先講結論 / 核心理解

先記住一件事：`dropzone` 不是「現代拖放區開關」，而是已退出主流的舊 HTML 宣告式方案。  
你可以這樣理解：

- `dropzone` 原本想描述某個元素是拖放目標。
- `copy`、`move`、`link` 描述的是希望被當成哪種放下語意。
- 但現行規格已把 `dropzone` 列為 obsolete attribute。
- 今天要做真正可用的 drop target，應改用 `dragenter`、`dragover`、`drop` 等事件。

## 核心定義 / 規則

## 1. `dropzone` 原本在控制什麼

`dropzone` 原本想讓開發者直接用 HTML 屬性宣告：

- 這個元素可以接收拖放
- 接收時偏向哪種操作語意

它關心的是「放下後如何理解這次拖放」，不是「哪個元素能開始被拖曳」。

## 2. 三個值原本怎麼理解

### `copy`

- 表示放下後偏向建立副本。
- 重點是「目標得到的是一份拷貝」，不是原資料被搬走。

### `move`

- 表示放下後偏向移動原資料。
- 重點是「資料從原位置轉移到新位置」。

### `link`

- 表示放下後偏向建立對原資料的連結或引用。
- 重點不是取得獨立副本，而是保留和原資料的關聯。

這三個值描述的是拖放語意，不是保證瀏覽器會自動替你完成整套拖放流程。

## 3. 它和 `draggable` 在處理不同面向

這兩個屬性很容易被一起記混。

### `draggable`

- 關心的是拖曳來源。
- 在問：「這個元素能不能被拖出去？」

### `dropzone`

- 原本關心的是放置目標。
- 在問：「這個元素接收放下時，應該把操作理解成哪一類？」

所以它們不是互斥，而是原本想分別處理拖放互動的兩端。

## 判斷條件或推理過程

如果你看到一段 `dropzone` 教材，可以用這個順序判斷：

1. 它是不是在用 HTML 屬性直接聲明拖放區？
2. 它是不是把 `copy`、`move`、`link` 當成核心語法？
3. 如果是，那它大多屬於歷史設計理解，不是現代拖放實作主線。
4. 如果你的目標是做真正可用的 drop target，應轉向 `dragover`、`drop` 等事件流程。

## 例子說明

### 例子 1：教材中的基本寫法

```html
<body>
  <div dropzone="copy"></div>
</body>
```

- 這段示例想表達的是：這個 `<div>` 原本希望被當成一個 `copy` 型的放置區。
- 它的教學價值在於幫你理解 `dropzone` 曾想把「拖放目標 + 操作語意」做成宣告式屬性。
- 但它不代表今天只要這樣寫，瀏覽器就會替你完成可靠的拖放邏輯。

### 例子 2：今天的最小可理解做法

```html
<div id="target">Drop here</div>

<script>
  const target = document.getElementById("target");

  target.addEventListener("dragover", (event) => {
    event.preventDefault();
  });

  target.addEventListener("drop", (event) => {
    event.preventDefault();
    // 在這裡讀取 event.dataTransfer，並自行決定 copy / move / link 的處理方式
  });
</script>
```

- 這段最想傳達的是：現代拖放不靠 `dropzone="copy"` 來建立可用的放置區。
- 真正關鍵的是讓目標元素在 `dragover` 階段允許放下，並在 `drop` 階段自行處理資料。
- 也就是說，今天的核心是事件流程，不是舊的宣告式屬性。

## 常見混淆點 / 易錯點

- `dropzone` 不是 `draggable`；前者原本想描述放置目標，後者描述拖曳來源。
- `dropzone="copy"` 不等於拖放流程已完成；它只是在舊設計裡表達一種放下語意。
- 畫面上看起來像拖放區，不代表瀏覽器真的會接受 drop；現代通常仍要處理 `dragover` 和 `drop`。
- 如果你的目標是新專案實作，應優先記事件式拖放，不要把 `dropzone` 當成主解法。

## 一句話抓核心

`dropzone` 的關鍵不在於背三個值，而在於知道它代表的是一條已經退場的 HTML 宣告式拖放方案；今天真正該學的是事件式 drop target。

## 延伸閱讀

- [draggable 屬性](./draggable%20属性.md)
- [第五章示例索引](./demos/README.md)
- [返回第五章：全局屬性](./README.md)
- [返回首頁](../README.md)
