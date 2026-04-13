# dropzone 屬性

> 所屬章節：第五章｜全局屬性  
> 關鍵字：`dropzone`、拖放目標、drop target、drag and drop、`copy`、`move`、`link`、obsolete、`dragover`、`drop`  
> 建議回查情境：想知道 `dropzone` 原本是做什麼的、想分清它和 `draggable` 的角色差別、想確認為什麼現代拖放實作不再依賴 `dropzone`

## 本節導讀

這篇整理 `dropzone` 這個 HTML 全局屬性的原始用途，以及今天應該怎麼理解它。  
先抓主線：`dropzone` 原本想用「HTML 屬性」直接宣告某個元素是拖放目標，並描述放下後偏向 `copy`、`move` 還是 `link`。

但這篇真正重要的，不只是記住 `copy`、`move`、`link` 三個值。  
依 WHATWG 現行 HTML Standard，`dropzone` 已被列為 obsolete attribute，作者不應再使用；規格也直接建議改用 script 處理 `dragenter` 與 `dragover` 事件。  
所以更好的讀法是：先知道它「原本想解決什麼問題」，再知道「為什麼現代實作幾乎不用它」。

## 你會在這篇學到什麼

- `dropzone` 屬性原本在做什麼
- `copy`、`move`、`link` 三個值怎麼理解
- `dropzone` 和 `draggable` 的分工差別
- 為什麼現代拖放實作通常改用事件式做法

## 30 秒複習入口

- `dropzone` 原本用來描述拖曳資料放到元素上時的預期操作。
- 常見值有 `copy`、`move`、`link`。
- WHATWG 現行 HTML Standard 已把 `dropzone` 列為 obsolete attribute。
- 現代做法通常是讓目標元素處理 `dragenter`、`dragover`、`drop` 等事件，而不是依賴 `dropzone`。

## 速查區

### 核心概念

- `dropzone` 的設計目標，是把元素標示成可接收拖放的區域，並說明拖放後的預期動作。
- 它處理的是「放下後要當成什麼操作」，不是「哪個元素可以被拖動」。

### 關鍵規則 / 判準

- 常見屬性值有 `copy`、`move`、`link`。
- `copy` 表示放下後偏向建立副本，`move` 表示偏向移動原資料，`link` 表示偏向建立指向原資料的連結。
- 依 WHATWG 現行規格，`dropzone` 已屬 obsolete attribute，不應再當成現代 HTML 解法使用。
- 規格建議改用 script 處理 `dragenter` 與 `dragover` 事件；MDN 也說明，若想讓元素真的成為 drop target，通常需要在 `dragover` 中呼叫 `event.preventDefault()`，並在 `drop` 中自行處理資料。

### 常見混淆點

- `dropzone` 不是 `draggable`：前者想描述接收放下的一方，後者描述能不能被拖曳的來源元素。
- 畫出一個視覺上的「拖放區塊」不等於它真的能接收拖放；現代實作仍要補事件處理。
- `copy`、`move`、`link` 描述的是拖放操作語意，不代表只寫屬性就會自動完成整個拖放流程。

### 一句話對比

- `draggable` 解決的是「能不能拖出去」，`dropzone` 原本想解決的是「放到這裡時算哪種放下操作」，而現代做法則改由拖放事件處理後者。

## 正文筆記

### 這篇在解決什麼問題？

- 拖放互動通常同時有兩個面向：拖曳來源，以及接收放下的目標。
- `dropzone` 原本就是想用 HTML 屬性，直接描述某個元素能否作為放置區，以及放下時採用哪種操作語意。

## 1. `dropzone` 的作用

> 舊教材常見說法：當資料被拖放到元素上時，可以用這個屬性描述這次拖放偏向複製、移動，或建立連結。

- 用更白話的方式說，`dropzone` 是在替元素標記「這裡是一個拖放目標」，並說明預期的放下效果。
- 這個設計和 `draggable` 剛好互補：`draggable` 偏向拖曳來源，`dropzone` 偏向放置目標。
- 重點不是瀏覽器會自動幫你完成 `copy`、`move`、`link`，而是它原本想宣告「這個區域的拖放語意」。

## 2. 三個值怎麼理解

### `copy`

- 代表拖曳資料放下後，傾向視為建立副本。
- 可以把它理解成「原資料保留，目標得到一份拷貝」。

### `move`

- 代表拖曳資料放下後，傾向視為移動。
- 可以把它理解成「資料從原位置移到新位置」。

### `link`

- 代表拖曳資料放下後，傾向視為建立連結。
- 可以把它理解成「目標保留的是對原資料的引用關係，而不是一份獨立複本」。

## 3. 基本示例

```html
<body>
  <div dropzone="copy"></div>
</body>
```

### 這段怎麼理解？

- 這個例子想表達的是：當可拖曳資料被放到這個 `<div>` 上時，預期操作是 `copy`。
- 也就是說，教材希望用 HTML 屬性直接描述這個區塊的拖放語意。
- 但在現代實務裡，僅靠這個屬性並不足以完成可靠的拖放互動。

### 為什麼只寫這樣還不夠？

- `dropzone="copy"` 比較像是在宣告「希望這裡被當成複製型放置區」。
- 但瀏覽器是否真的接受放下、放下後怎麼讀資料、要不要改變畫面，現代都還是要靠事件處理決定。
- 如果沒有處理 `dragover` 與 `drop`，這段 HTML 在實務上通常不會形成可用的拖放功能。

## 4. 這個屬性今天該怎麼看

- 依 WHATWG 現行 HTML Standard 的 obsolete features 章節，`dropzone` 已被列為 obsolete attribute，而且規格直接建議改用 script 處理 `dragenter` 與 `dragover`。
- 這表示 `dropzone` 雖然反映了早期 HTML 曾想把拖放目標直接做成屬性，但這條路線沒有成為現代主流做法。
- 因此更穩妥的理解方式是：把它當成歷史語法知識，知道它原本想解決什麼問題即可。

## 5. 現代替代做法怎麼理解

- 現代拖放通常會讓拖曳來源設定 `draggable="true"`，再讓放置目標處理 `dragenter`、`dragover`、`drop` 等事件。
- WHATWG 現行拖放章節本身就是以事件式機制說明 drop target；MDN 也明確指出，為了讓 `drop` 事件如預期觸發，通常要在 `dragover` 處理器中呼叫 `event.preventDefault()`。
- 換句話說，現代不是靠 `dropzone="copy"` 這種 HTML 宣告來建立放置區，而是靠事件流程決定目標是否接受放下，以及最後採取 `copy`、`move` 或其他處理。

### 最小可理解示例

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

- 這個例子最想傳達的是：現代做法把「能不能放」與「放下後怎麼處理」交給事件，而不是交給 `dropzone` 屬性。
- 因此你在新專案裡，通常會記 `dragover` / `drop` 的處理方式，而不是去背 `dropzone="copy"`。

## 6. 原始教材提醒要怎麼讀

<aside>
⚠️

**原始教材提醒：所有主流瀏覽器都不支持**

</aside>

- 這個提醒和 `dropzone` 已被現行規格列為 obsolete 的定位是一致的。
- 在整理這篇時，更重要的不是把它當成今天可直接使用的屬性，而是把它放回 HTML 拖放歷史脈絡中理解。
- 以 2026-04 查詢結果來看，WHATWG 規格仍把它列為 obsolete，而 Can I use 的備註也指出目前沒有瀏覽器支援 `dropzone` attribute。
- 所以這裡的實務判斷很直接：即使教材保留這個屬性，專案中仍應優先採用事件式拖放方案。

## 自測問題

1. `dropzone` 屬性原本想解決拖放流程中的哪一個面向？
2. `copy`、`move`、`link` 三個值各自代表什麼拖放語意？
3. `dropzone` 和 `draggable` 的角色差別是什麼？
4. 為什麼現代拖放實作通常不再依賴 `dropzone`，而改用 `dragenter`、`dragover`、`drop` 等事件？

## 延伸閱讀

- [draggable 屬性](./draggable%20属性.md)
- [第五章示例索引](./demos/README.md)
- [返回第五章：全局屬性](./README.md)
- [返回首頁](../README.md)
- [WHATWG HTML Standard: Obsolete Features](https://html.spec.whatwg.org/dev/obsolete.html)
- [MDN: HTML Drag and Drop API](https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API)
- [Can I use: Drag and Drop](https://caniuse.com/dragndrop)
