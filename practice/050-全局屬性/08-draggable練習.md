---
source_notes:
  - notes/050-全局屬性/07-draggable-拖曳屬性與拖放事件.md
topics: [draggable, Drag and Drop API, 拖放事件]
summary: "動手設定 draggable 屬性讓元素可拖曳，並修正 draggable 加在錯誤元素層級的常見問題。"
---

# draggable 練習

> 動手練習。概念與用法說明見 `notes/050-全局屬性/07-draggable-拖曳屬性與拖放事件.md`。

---

## 題目 1（基礎）· 應用練習題

頁面有一個任務卡片和一個放置目標區域，需要設定為拖放介面。請依下列規格完成 HTML：

1. **任務卡片 `<div>`**：這是被拖曳的元素，需設定為可拖動，並加上 `id="task-card"` 供後續 JavaScript 綁定拖曳事件。
2. **放置目標 `<div>`**：這是接收拖放的區域，加上 `id="drop-zone"` 供後續 JavaScript 綁定放置事件。放置目標本身**不需要**設定 draggable。

```html
<div ___ ___>
  任務：完成作業
</div>

<div ___>
  拖到這裡
</div>
```

完成標準：任務卡片有 `draggable="true"` 和 `id="task-card"`；放置目標有 `id="drop-zone"` 且沒有 `draggable` 屬性。

<details>
<summary>參考解答</summary>

```html
<div id="task-card" draggable="true">
  任務：完成作業
</div>

<div id="drop-zone">
  拖到這裡
</div>
```

解題說明：

- `draggable="true"` 加在任務卡片上，讓它可以被使用者拖起來。沒有這個屬性，`<div>` 預設不可拖動。
- `id` 讓 JavaScript 能找到這兩個元素，才能綁定 `dragstart`、`dragover`、`drop` 等事件處理函式。只設定 `draggable` 而沒有事件處理，拖放行為不會完成。
- 放置目標不需要 `draggable`，它不是被拖曳的對象，而是接收拖放的區域。

</details>

---

## 題目 2（基礎）· 改錯題

下面這段 HTML 中，`draggable="true"` 加在了**錯誤的元素**上。請找出問題並修正。

```html
<div id="card" class="card">
  <span draggable="true">任務：送出報告</span>
</div>

<div id="drop-zone">
  拖到這裡
</div>
```

完成標準：找出 draggable 加錯位置的問題，並修正為正確的元素層級。

<details>
<summary>參考解答</summary>

```html
<div id="card" class="card" draggable="true">
  <span>任務：送出報告</span>
</div>

<div id="drop-zone">
  拖到這裡
</div>
```

問題說明：

**`draggable="true"` 加在了內部的 `<span>` 上，而非外層的卡片 `<div>` 上。** 使用者看到的、希望能拖起來的是整張卡片（`<div class="card">`），但 `draggable` 卻只標記了卡片裡的文字 `<span>`。這樣只有點到 `<span>` 文字那一小塊才能拖動，卡片其他部分無法拖動，也不符合「拖整張卡片」的預期行為。

修正方式：將 `draggable="true"` 移到外層的 `<div id="card">` 上，同時移除 `<span>` 的 `draggable`。

</details>
