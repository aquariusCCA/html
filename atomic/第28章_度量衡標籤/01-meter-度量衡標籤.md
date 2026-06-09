# meter 度量衡標籤

> 來源：origin/第28章_度量衡標籤/01-度量衡標籤.md / 全文

`<meter>` 標籤定義已知範圍或分數值內的標量測量，也被稱為 gauge（尺度），例如電量、磁盤用量等。

<aside>
👉

**meter 標籤屬性：**

- value：規定度量的當前值，必要參數。
- high：規定被視作高的值的範圍。
- low：規定被視作低的值的範圍。
- max：規定範圍的最大值。
- min：規定範圍的最小值。
- optimum：規定度量的最優值。
</aside>

<aside>
⚠️

- **`<meter>` 標籤不應用於指示進度（在進度條中）。如果標記進度條，請使用 `<progress>` 標籤。**
</aside>

## 範例 1

![meter 低高範圍警告示意圖](../../origin/第28章_度量衡標籤/assets/images/meter-tag-img-001-19a2bc.png)

```html
<span>手機電量 : </span>
<meter value="50" min="0" max="100" low="20" high="80"></meter><br>
```

## 範例 2

![meter optimum 最佳值範圍示意圖](../../origin/第28章_度量衡標籤/assets/images/meter-tag-img-002-94c82e.png)

```html
<span>手機電量 : </span>
<meter value="70" min="0" max="100" low="20" high="80" optimum="90"></meter><br>
```
