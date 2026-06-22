---
source_notes:
  - notes/050-全局屬性/04-hidden-title-顯示與補充資訊.md
topics: [hidden, title, 條件式顯示, 補充提示, 可及性]
summary: "動手為縮寫加 title 提示、為條件式區塊加 hidden，並辨識把必要資訊依賴 title 或永久隱藏的設計問題。"
---

# hidden 與 title 練習

> 動手練習。概念與用法說明見 `notes/050-全局屬性/04-hidden-title-顯示與補充資訊.md`。

---

## 題目 1（基礎）· 應用練習題

頁面上有以下兩種元素，請分別加上適當的屬性：

1. **縮寫「PRC」**：需要讓滑鼠移到縮寫上時顯示全名「People's Republic of China」。
2. **「進階設定」區塊**：目前應預設隱藏，等使用者點擊按鈕後才由 JavaScript 顯示，先加上屬性讓它一開始不出現。

```html
<p>本服務目前僅在 <abbr ___>PRC</abbr> 地區開放。</p>

<section id="advanced-settings" ___>
  <h2>進階設定</h2>
  <p>這裡是進階設定內容。</p>
</section>
```

完成標準：`<abbr>` 上有 `title` 且值為完整說明，`<section>` 上有 `hidden` 屬性。

<details>
<summary>參考解答</summary>

```html
<p>本服務目前僅在 <abbr title="People's Republic of China">PRC</abbr> 地區開放。</p>

<section id="advanced-settings" hidden>
  <h2>進階設定</h2>
  <p>這裡是進階設定內容。</p>
</section>
```

解題說明：

- `title` 提供補充說明，瀏覽器通常在滑鼠移到元素上時顯示為工具提示文字。用在 `<abbr>` 上是非常常見的做法，讓縮寫有可取得的全名。
- `hidden` 是布林屬性，加上它就代表元素不顯示。`<section>` 有 `id="advanced-settings"` 供後續 JavaScript 找到它並在適當時機移除 `hidden`。
- 兩個屬性的功能不同：`hidden` 控制「是否出現」，`title` 提供「額外說明」。

</details>

---

## 題目 2（基礎）· 改錯題

下面這段 HTML 有 **2 個設計問題**，請找出並說明為什麼有問題，以及改善方向。

```html
<button title="點擊後將永久刪除你的帳號，此操作無法復原">刪除帳號</button>

<p hidden>填寫表單前請先閱讀：所有欄位均為必填，送出後無法修改。</p>
<form>
  <input type="text" name="name" placeholder="姓名">
  <button type="submit">送出</button>
</form>
```

完成標準：兩處問題都找出並說明，提出改善方向（不要求寫出完整解答程式碼）。

<details>
<summary>參考解答</summary>

**問題一：把永久刪除的關鍵警告只放在 `title` 裡**

```html
<!-- 有問題的寫法 -->
<button title="點擊後將永久刪除你的帳號，此操作無法復原">刪除帳號</button>
```

問題說明：`title` 的內容只在滑鼠懸停時才顯示，觸控裝置、使用鍵盤操作或使用輔助技術的使用者不一定能穩定取得這段提示。「永久刪除、無法復原」是影響使用者決策的關鍵警告，不應只依賴 `title`。

改善方向：將警告文字放在可見位置（例如按鈕旁邊的 `<p>` 說明），或在點擊後彈出確認對話框，確保所有使用者都能清楚看到這段資訊。

---

**問題二：必要的表單說明加了 `hidden` 卻沒有顯示機制**

```html
<!-- 有問題的寫法 -->
<p hidden>填寫表單前請先閱讀：所有欄位均為必填，送出後無法修改。</p>
```

問題說明：這段說明對使用者完成表單是必要資訊，但加了 `hidden` 後永遠不顯示，也沒有任何互動或 JavaScript 能讓它出現。`hidden` 適合「目前不該顯示、但之後有合理時機會顯示」的內容，不應用來永久藏住必要資訊。

改善方向：如果這段說明對填表是必要的，應移除 `hidden`，讓它直接顯示在表單上方。

</details>
