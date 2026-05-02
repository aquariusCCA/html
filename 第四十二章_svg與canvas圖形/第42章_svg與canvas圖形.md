# `svg` 與 `canvas` 圖形

> - 所屬章節：第四十二章｜`svg` 與 `canvas` 圖形  
> - 關鍵字：`svg`、`canvas`、向量圖、像素畫布、`viewBox`、Canvas API、圖示、資料視覺化、遊戲、可存取性  
> - 建議回查情境：想分清 SVG 和 Canvas、想知道圖示或動態繪圖該用哪個、想理解它們和 `<img>` 的差別時

## 本節導讀

HTML 中除了 `<img>`，還常看到 `<svg>` 和 `<canvas>`。

它們都能顯示圖形，但定位完全不同：

- SVG 是保留圖形結構的向量內容。
- Canvas 是一塊用 JavaScript 繪製像素的畫布。

本節不深入完整 SVG 語法或 Canvas API，而是先建立選型判斷：遇到圖片、圖示、圖表、遊戲畫面、動態效果時，應該優先考慮哪一種技術。

## 整理說明

- 原始學習重點：第十八章已介紹圖片。
- 本次整理方向：補上 HTML 中可內嵌與可動態繪製的圖形技術。
- 補強內容：加入選型流程、`viewBox` 基本觀念、Canvas fallback、DOM 差異與可存取性判斷。
- 待查證：複雜動畫、遊戲、資料視覺化或大量元素互動，仍需要依實作工具、元素數量、更新頻率與效能需求進一步評估。

## 你會在這篇學到什麼

- SVG 和 Canvas 的核心差異
- SVG 適合什麼場景
- Canvas 適合什麼場景
- SVG、Canvas 和 `<img>` 的差別
- `viewBox` 的基本用途
- SVG 如何提供標題與描述
- Canvas 為什麼要考慮 fallback、替代內容或同步 HTML
- 初學時如何快速選型

## 30 秒複習入口

- `<img>`：用來顯示既有圖片檔，最適合普通照片或固定圖片。
- SVG：向量圖形，圖形元素仍存在於 DOM 中，可以被 CSS / JavaScript 操作。
- Canvas：像素畫布，畫完後圖形本身不是 DOM 元素。
- SVG 適合 icon、Logo、線條插圖、流程圖、可互動圖表。
- Canvas 適合大量動態繪製、遊戲、影像處理、簽名板、粒子效果。
- SVG 可以用 `<title>`、`<desc>`、`aria-label` 補可存取資訊。
- Canvas 需要額外提供替代內容、同步文字或資料表。
- 重要文字如果需要被搜尋、選取或被輔助技術理解，不要只畫在 Canvas 上。

## 速查區

### SVG vs Canvas

| 比較 | SVG | Canvas |
|---|---|---|
| 本質 | 向量圖形 | 像素畫布 |
| 是否保留元素結構 | 是，圖形元素會成為 DOM / SVG 節點 | 否，繪製結果主要是像素 |
| 操作方式 | HTML / CSS / JavaScript 操作圖形元素 | JavaScript Canvas API 繪製 |
| 放大是否清晰 | 通常清晰，因為是向量 | 取決於畫布解析度與縮放方式 |
| 適合 | 圖示、Logo、線條圖、流程圖、少量互動圖形 | 遊戲、動畫、大量繪製、影像處理、簽名板 |
| 單一圖形能否被 CSS 選到 | 可以，例如選到 `<circle>`、`<path>` | 不行，畫布裡的圖形不是 DOM 元素 |
| 可存取性 | 可加標題、描述或 ARIA 屬性 | 需要額外提供替代資訊或同步 HTML |

### `<img>` vs SVG vs Canvas

| 需求 | 建議 | 原因 |
|---|---|---|
| 普通照片、商品圖、文章配圖 | `<img>` | 語意直接，瀏覽器原生支援圖片載入與 `alt` |
| 固定 SVG 圖檔，不需要改內部細節 | `<img src="icon.svg">` | 用法簡單，像一般圖片一樣載入 |
| 需要改 SVG 顏色、加動畫、綁事件 | 內嵌 `<svg>` | 內部圖形元素可以被 CSS / JS 操作 |
| 圖示、Logo、線條圖、流程圖 | SVG | 清晰縮放，結構可保留 |
| 大量粒子、遊戲畫面、高頻更新 | Canvas | 適合用程式重複繪製畫面 |
| 重要文字需要被搜尋、選取、朗讀 | HTML 或 SVG 優先 | Canvas 文字是畫上去的像素，不等於 DOM 文字 |

## 選型流程

1. 只是顯示普通照片、商品圖、文章圖片？  
   → 優先用 `<img>`。

2. 圖形是 icon、Logo、線條圖、流程圖，或需要縮放後仍保持清晰？  
   → 優先用 SVG。

3. 需要操作單一圖形元素，例如點擊某個區塊、改某個圖形顏色、做簡單動畫？  
   → 優先用內嵌 SVG。

4. 畫面需要大量、高頻率重繪，例如遊戲、粒子、簽名板、影像處理？  
   → 考慮 Canvas。

5. 圖形裡的文字或資料需要被搜尋、選取或讓輔助技術理解？  
   → 優先用 HTML / SVG，或在 Canvas 旁邊同步提供 HTML 文字與資料表。

## 正文筆記

### 1. 最簡單的 SVG

```html
<svg width="120" height="120" viewBox="0 0 120 120" role="img" aria-labelledby="svgTitle svgDesc">
  <title id="svgTitle">圓形圖示</title>
  <desc id="svgDesc">一個位於畫面中央的紅色圓形</desc>
  <circle cx="60" cy="60" r="48" fill="tomato"></circle>
</svg>
```

這裡的 `<circle>` 是 SVG 裡的圖形元素。  
它仍然是一個結構化元素，可以被 CSS 或 JavaScript 操作。

例如可以針對 `<circle>` 改顏色、加 class、綁事件：

```css
circle {
  fill: tomato;
}
```

`viewBox` 很重要，它定義 SVG 的內部座標系。

以這個例子來說：

```html
viewBox="0 0 120 120"
```

可以理解成：

| 數值 | 意義 |
|---|---|
| 第一個 `0` | 內部座標系的 x 起點 |
| 第二個 `0` | 內部座標系的 y 起點 |
| `120` | 內部座標系的寬度 |
| `120` | 內部座標系的高度 |

所以：

```html
<circle cx="60" cy="60" r="48"></circle>
```

代表圓心在內部座標 `(60, 60)`，半徑是 `48`。  
因為內部座標寬高都是 `120`，所以 `(60, 60)` 剛好在中央。

補充理解：

- `width` / `height`：偏向 SVG 在頁面上的顯示尺寸。
- `viewBox`：決定 SVG 內部怎麼計算座標。
- 有 `viewBox` 後，SVG 比較容易依不同顯示尺寸縮放。

### 2. SVG 適合什麼？

SVG 適合：

- 圖示
- Logo
- 線條插圖
- 流程圖
- 簡單資料圖表
- 可點擊的地圖區域
- 需要縮放仍保持清晰的圖形
- 需要用 CSS / JavaScript 控制局部圖形的場景

例如裝飾性圖示：

```html
<svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
  <path d="M12 2L2 22h20L12 2z"></path>
</svg>
```

如果只是裝飾圖示，可以使用 `aria-hidden="true"`，避免輔助技術讀到無意義內容。

如果圖示本身承載資訊，應提供可存取名稱：

```html
<svg viewBox="0 0 24 24" role="img" aria-label="警告">
  <path d="M12 2L2 22h20L12 2z"></path>
</svg>
```

判斷方式：

- 只是裝飾畫面：可以隱藏給輔助技術。
- 圖示本身有意義：要提供名稱或描述。

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

這段程式的意思是：

| 程式 | 意義 |
|---|---|
| `document.querySelector("#chart")` | 取得 `<canvas>` 元素 |
| `canvas.getContext("2d")` | 取得 2D 繪圖環境 |
| `ctx.fillStyle = "steelblue"` | 設定填滿顏色 |
| `ctx.fillRect(x, y, width, height)` | 畫一個填滿矩形 |

畫上去後，瀏覽器不會知道「這是一個長條圖的第一根柱子」。  
它只看到畫布上的像素。

因此 Canvas 和 SVG 最大差異不是「能不能畫圖」，而是：

- SVG 畫出來的圖形仍有結構。
- Canvas 畫出來的圖形主要是像素結果。

補充理解：

- `<canvas width="300" height="150">` 的 `width` / `height` 是畫布內部繪圖尺寸。
- CSS 也可以改 Canvas 顯示大小，但如果 CSS 尺寸和內部繪圖尺寸差太多，可能造成畫面模糊或比例不一致。
- 實務上要區分「畫布解析度」和「頁面顯示尺寸」。

### 4. Canvas 適合什麼？

Canvas 適合：

- 遊戲畫面
- 粒子動畫
- 大量即時繪製
- 圖像處理
- 簽名板
- 高頻更新的資料視覺化
- 需要直接處理像素或反覆重繪畫面的場景

如果畫面每秒大量變化，Canvas 通常比操作大量 DOM 或大量 SVG 元素更適合。

但這不是絕對規則。簡單互動圖形、少量元素或需要可存取性結構時，SVG 仍可能更適合。

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

兩者差異：

| 用法 | 優點 | 限制 |
|---|---|---|
| `<img src="icon.svg">` | 寫法簡單，適合固定圖片 | 不容易直接操作 SVG 內部圖形 |
| 內嵌 `<svg>` | 可以控制內部元素、改顏色、加動畫、綁事件 | HTML 會變長，管理大量圖示時要注意維護方式 |

如果只是顯示一個固定 SVG 檔，`<img>` 很簡單。  
如果需要改顏色、動畫、互動或細部控制，內嵌 SVG 更有彈性。

### 6. Canvas 和 HTML 內容的差別

Canvas 畫出來的文字不是普通 HTML 文字。

```js
ctx.fillText("銷售額", 20, 20);
```

這段文字畫在畫布上後，使用者不能像一般文字那樣選取，搜尋功能也不會把它當成普通 DOM 文字，輔助技術也不一定能理解。

所以如果資訊很重要，不應該只把資訊畫在 Canvas 裡。

可以提供 fallback 內容：

```html
<canvas id="salesChart" width="400" height="200">
  銷售圖表：一月 120，二月 180，三月 150。
</canvas>
```

但更穩的做法，是在 Canvas 旁邊同步提供 HTML 資訊，例如資料表：

```html
<canvas id="salesChart" width="400" height="200">
  銷售圖表：一月 120，二月 180，三月 150。
</canvas>

<table>
  <caption>銷售資料</caption>
  <thead>
    <tr>
      <th>月份</th>
      <th>銷售額</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>一月</td>
      <td>120</td>
    </tr>
    <tr>
      <td>二月</td>
      <td>180</td>
    </tr>
    <tr>
      <td>三月</td>
      <td>150</td>
    </tr>
  </tbody>
</table>
```

重點不是「Canvas 不能顯示資訊」，而是：

> Canvas 可以畫出資訊，但畫出來的資訊不等於 HTML 結構。

### 7. 可存取性注意點

| 技術 | 注意事項 |
|---|---|
| `<img>` | 圖片有資訊時提供 `alt`；純裝飾圖片可使用空的 `alt=""` |
| SVG | 有資訊的 SVG 應提供可存取名稱；可用 `<title>`、`<desc>`、`aria-label`、`aria-labelledby` |
| 裝飾性 SVG | 可使用 `aria-hidden="true"`，避免輔助技術讀到無意義圖示 |
| Canvas | Canvas 內繪製的內容不等於 DOM 結構；重要資訊要提供替代文字、資料表或同步 HTML |
| 可互動 Canvas | 需要額外處理鍵盤操作、焦點狀態、文字說明與操作回饋 |

簡單判斷：

- 圖形只是裝飾：不要讓輔助技術讀到一堆無意義內容。
- 圖形承載資訊：要提供名稱、描述或等價文字。
- Canvas 承載重要資料：最好同步提供 HTML 版本。

### 8. 初學選擇口訣

如果是照片或一般圖片：

> 用 `<img>`。

如果是圖示、Logo、線條圖，且需要清晰縮放或互動：

> 優先 SVG。

如果是大量動態繪製、遊戲、即時動畫：

> 考慮 Canvas。

如果圖形內容需要被搜尋、選取、朗讀或被程式理解：

> 不要只依賴 Canvas，優先保留 HTML / SVG 結構。

## 常見問法

### SVG 是圖片嗎？

可以說 SVG 可以「當圖片使用」，但它不只是一張普通圖片。  
SVG 本質上是描述圖形的 XML / 標記內容，所以它可以作為圖片檔載入，也可以直接內嵌成 HTML 中的圖形結構。

### Canvas 畫出來的圖形可以用 CSS 選到嗎？

不能像 DOM 元素那樣選到單一圖形。  
Canvas 裡的圖形是畫在同一塊畫布上的像素。

例如你可以選到整個 `<canvas>`：

```css
canvas {
  border: 1px solid #ccc;
}
```

但不能用 CSS 直接選到 Canvas 裡某一個 `fillRect()` 畫出來的矩形。

### 做圖示該用 SVG 還是 Canvas？

通常用 SVG。  
圖示需要清晰、可縮放、容易改顏色，SVG 更適合。

Canvas 可以畫圖示，但通常沒有必要，除非它只是某個大型 Canvas 畫面的一部分。

### 做遊戲該用 SVG 還是 Canvas？

大量動態繪製的 2D 遊戲通常會考慮 Canvas。  
但具體仍要看遊戲類型、元素數量與互動需求。

如果遊戲元素很少，而且需要大量 DOM / CSS 互動，也可能用 HTML 或 SVG 完成。

### 做資料圖表該用 SVG 還是 Canvas？

兩者都可能。

- 少量資料、需要互動、需要保留圖形結構：SVG 常見。
- 大量資料點、高頻更新、效能壓力較大：Canvas 可能更適合。
- 資料很重要：不論用哪一種，都應該考慮文字說明、表格或可存取性。

## 常見錯誤觀念

### 錯誤觀念 1：SVG 和 Canvas 只是兩種畫圖語法

不精準。  
真正關鍵是：SVG 保留元素結構，Canvas 主要留下像素結果。

### 錯誤觀念 2：Canvas 效能一定比 SVG 好

不一定。  
大量、高頻重繪時 Canvas 常有優勢；但少量元素、需要互動與可存取性時，SVG 可能更好維護。

### 錯誤觀念 3：只要 Canvas 裡有文字，輔助技術就一定能理解

不建議這樣假設。  
重要資訊應該額外提供 HTML 文字、資料表或其他替代資訊。

### 錯誤觀念 4：SVG 一定要內嵌在 HTML 裡

不一定。  
固定圖示或圖片可以用 `<img src="xxx.svg">` 載入；需要控制內部元素時，再考慮內嵌 SVG。

## 自測問題

1. SVG 和 Canvas 最大差異是什麼？
2. SVG 適合哪些場景？
3. Canvas 適合哪些場景？
4. SVG 作為 `<img>` 和內嵌 SVG 差在哪？
5. `viewBox="0 0 120 120"` 大致代表什麼？
6. 為什麼 Canvas 畫出來的文字不等於 HTML 文字？
7. 如果圖表資訊很重要，Canvas 旁邊可以補什麼？
8. 如果只是普通照片，通常應該用什麼？
9. 做 icon 通常用 SVG 還是 Canvas？為什麼？
10. 做大量粒子動畫通常會考慮什麼？為什麼？

## 自測答案簡版

1. SVG 保留圖形結構，Canvas 主要是像素畫布。
2. SVG 適合 icon、Logo、線條圖、流程圖、少量互動圖形。
3. Canvas 適合遊戲、大量動畫、影像處理、簽名板、高頻重繪。
4. `<img>` 載入 SVG 簡單但不易控制內部；內嵌 SVG 可操作內部元素。
5. 內部座標從 `(0, 0)` 開始，寬高都是 `120`。
6. Canvas 文字是畫在畫布上的像素，不是 DOM 文字。
7. 可以補 HTML 文字、資料表、說明文字或替代內容。
8. 用 `<img>`。
9. 通常用 SVG，因為清晰縮放、容易改顏色、結構可操作。
10. 通常考慮 Canvas，因為適合大量、高頻繪製。

## 延伸閱讀

- [第四十二章｜`svg` 與 `canvas` 圖形](./README.md)
- [第十八章｜圖片標籤](../第十八章_圖片標籤/README.md)
- [第三十八章｜HTML 可存取性基礎](../第三十八章_HTML可存取性基礎/README.md)
- [MDN：SVG element](https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Element/svg)
- [MDN：`<canvas>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas)
- [MDN：Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)
