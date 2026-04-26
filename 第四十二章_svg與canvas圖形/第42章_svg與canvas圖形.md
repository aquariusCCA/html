# `svg` 與 `canvas` 圖形

> - 所屬章節：第四十二章｜`svg` 與 `canvas` 圖形  
> - 關鍵字：`svg`、`canvas`、向量圖、像素畫布、viewBox、Canvas API、圖示、資料視覺化、遊戲、可存取性  
> - 建議回查情境：想分清 SVG 和 Canvas、想知道圖示或動態繪圖該用哪個、想理解它們和 `<img>` 的差別時

## 本節導讀

HTML 中除了 `<img>`，還常看到 `<svg>` 和 `<canvas>`。

它們都能顯示圖形，但定位完全不同：

- SVG 是保留圖形結構的向量內容。
- Canvas 是一塊用 JavaScript 繪製像素的畫布。

這一章先建立選型判斷，不深入完整 SVG 語法或 Canvas API。

## 整理說明

- 原始學習重點：第十八章已介紹圖片。
- 本次整理方向：補上 HTML 中可內嵌與可動態繪製的圖形技術。
- 補強內容：加入選型表、可存取性、DOM 操作與 fallback 觀念。
- 待查證：複雜圖形、動畫、遊戲或資料視覺化需要依實作工具與效能需求進一步驗證。

## 你會在這篇學到什麼

- SVG 和 Canvas 的核心差異
- SVG 適合什麼場景
- Canvas 適合什麼場景
- 它們和 `<img>` 有什麼不同
- SVG 如何提供標題與描述
- Canvas 為什麼要考慮 fallback 和替代資訊
- 初學時怎麼選

## 30 秒複習入口

- SVG 是向量圖形，元素仍存在於 DOM 中。
- Canvas 是像素畫布，畫完後圖形本身不是 DOM 元素。
- SVG 適合 icon、Logo、簡單插圖、流程圖、可互動圖表。
- Canvas 適合大量動態繪製、遊戲、影像處理、粒子效果。
- 簡單圖片展示用 `<img>` 更直接。
- SVG 可以用 `<title>` 和 `<desc>` 補可存取資訊。
- Canvas 需要額外提供替代內容或同步文字資訊。

## 速查區

### SVG vs Canvas

| 比較 | SVG | Canvas |
|---|---|---|
| 本質 | 向量圖形 | 像素畫布 |
| 是否保留元素結構 | 是 | 否 |
| 操作方式 | HTML / CSS / JS 操作圖形元素 | JS Canvas API 繪製 |
| 放大是否清晰 | 通常清晰 | 取決於畫布解析度 |
| 適合 | 圖示、Logo、圖表、可互動圖形 | 遊戲、動畫、大量繪製、影像處理 |
| 可存取性 | 可加標題描述，元素可被理解 | 需額外提供替代資訊 |

### 先怎麼選？

| 需求 | 建議 |
|---|---|
| 普通照片或內容圖片 | `<img>` |
| 圖示、Logo、線條圖 | SVG |
| 可點擊的少量圖形元素 | SVG |
| 大量粒子、遊戲畫面、即時繪圖 | Canvas |
| 需要文字可被搜尋和選取 | 優先 HTML 或 SVG，不要只畫在 Canvas |

## 正文筆記

### 1. 最簡單的 SVG

```html
<svg width="120" height="120" viewBox="0 0 120 120" role="img" aria-labelledby="svgTitle">
  <title id="svgTitle">圓形圖示</title>
  <circle cx="60" cy="60" r="48" fill="tomato"></circle>
</svg>
```

這裡的 `<circle>` 是 SVG 裡的圖形元素。  
它仍然是一個結構化元素，可以被 CSS 或 JavaScript 操作。

`viewBox` 很重要，它定義 SVG 內部座標系。

### 2. SVG 適合什麼？

SVG 適合：

- 圖示
- Logo
- 線條插圖
- 流程圖
- 簡單資料圖表
- 可點擊的地圖區域
- 需要縮放仍保持清晰的圖形

例如：

```html
<svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
  <path d="M12 2L2 22h20L12 2z"></path>
</svg>
```

如果只是裝飾圖示，可以使用 `aria-hidden="true"` 避免輔助技術讀到無意義內容。  
如果圖示承載資訊，則應提供可存取名稱。

### 3. 最簡單的 Canvas

```html
<canvas id="chart" width="300" height="150">
  你的瀏覽器不支援 canvas，這裡原本會顯示一張簡單圖表。
</canvas>

<script>
  const canvas = document.querySelector("#chart");
  const ctx = canvas.getContext("2d");

  ctx.fillStyle = "steelblue";
  ctx.fillRect(20, 40, 80, 60);
  ctx.fillRect(120, 20, 80, 80);
  ctx.fillRect(220, 70, 50, 30);
</script>
```

Canvas 本身只是一塊畫布。  
真正的圖形是用 JavaScript 畫上去的。

畫上去後，瀏覽器不會知道「這是一個長條圖的第一根柱子」。  
它只看到畫布上的像素。

### 4. Canvas 適合什麼？

Canvas 適合：

- 遊戲畫面
- 粒子動畫
- 大量即時繪製
- 圖像處理
- 簽名板
- 高頻更新的資料視覺化

如果畫面每秒大量變化，Canvas 通常比操作大量 DOM 或 SVG 元素更適合。

### 5. SVG 和 `<img>` 差在哪？

SVG 可以有兩種常見使用方式。

作為圖片檔：

```html
<img src="./icon.svg" alt="搜尋">
```

內嵌在 HTML：

```html
<svg viewBox="0 0 24 24" role="img" aria-label="搜尋">
  <circle cx="10" cy="10" r="6"></circle>
  <line x1="15" y1="15" x2="21" y2="21"></line>
</svg>
```

如果只是顯示一個固定 SVG 檔，`<img>` 很簡單。  
如果需要改顏色、動畫、互動或細部控制，內嵌 SVG 更有彈性。

### 6. Canvas 和 HTML 內容的差別

Canvas 畫出來的文字不是普通 HTML 文字。

```js
ctx.fillText("銷售額", 20, 20);
```

這段文字畫在畫布上後，使用者不能像一般文字那樣選取，輔助技術也不一定能理解。

所以如果資訊很重要，應該提供替代內容，例如：

```html
<canvas id="salesChart" width="400" height="200">
  銷售圖表：一月 120，二月 180，三月 150。
</canvas>
```

或在 Canvas 旁邊提供資料表。

### 7. 可存取性注意點

SVG：

- 有資訊的 SVG 應提供可存取名稱。
- 可以使用 `<title>`、`<desc>`、`aria-label`、`aria-labelledby`。
- 裝飾性 SVG 可以 `aria-hidden="true"`。

Canvas：

- Canvas 內繪製的內容不等於 DOM 結構。
- 重要資訊要提供替代文字、表格或同步 HTML。
- 可互動 Canvas 需要特別處理鍵盤操作和焦點。

### 8. 初學選擇口訣

如果是照片或一般圖片：

> 用 `<img>`。

如果是圖示、Logo、線條圖，且需要清晰縮放或互動：

> 優先 SVG。

如果是大量動態繪製、遊戲、即時動畫：

> 考慮 Canvas。

## 常見問法

### SVG 是圖片嗎？

它可以當圖片使用，也可以直接內嵌成 HTML 中的圖形結構。  
這也是 SVG 和一般點陣圖片的重要差別。

### Canvas 畫出來的圖形可以用 CSS 選到嗎？

不能像 DOM 元素那樣選到單一圖形。  
Canvas 裡的圖形是畫在同一塊畫布上的像素。

### 做圖示該用 SVG 還是 Canvas？

通常用 SVG。  
圖示需要清晰、可縮放、容易改顏色，SVG 更適合。

### 做遊戲該用 SVG 還是 Canvas？

大量動態繪製的 2D 遊戲通常會考慮 Canvas。  
但具體仍要看遊戲類型、元素數量與互動需求。

## 自測問題

1. SVG 和 Canvas 最大差異是什麼？
2. SVG 適合哪些場景？
3. Canvas 適合哪些場景？
4. SVG 作為 `<img>` 和內嵌 SVG 差在哪？
5. 為什麼 Canvas 需要額外考慮替代資訊？
6. 如果只是普通照片，通常應該用什麼？

## 延伸閱讀

- [第四十二章｜`svg` 與 `canvas` 圖形](./README.md)
- [第十八章｜圖片標籤](../第十八章_圖片標籤/README.md)
- [第三十八章｜HTML 可存取性基礎](../第三十八章_HTML可存取性基礎/README.md)
- [MDN：SVG element](https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Element/svg)
- [MDN：`<canvas>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas)
- [MDN：Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)
