---
source_notes:
  - notes/050-全局屬性/06-tabindex-accesskey-鍵盤操作與導覽.md
topics: [tabindex, accesskey, 鍵盤導覽, 焦點管理, 可及性]
summary: "動手設定 tabindex 讓非互動元素加入或排除 Tab 順序，並修正大量正數 tabindex 破壞焦點順序的常見錯誤。"
---

# tabindex 與 accesskey 練習

> 動手練習。概念與用法說明見 `notes/050-全局屬性/06-tabindex-accesskey-鍵盤操作與導覽.md`。

---

## 題目 1（基礎）· 應用練習題

頁面上有兩個元素，請依各自的需求加上正確的 `tabindex` 值：

1. **自訂卡片 `<div>`**：需要讓鍵盤使用者可以用 Tab 鍵聚焦（加入自然 Tab 導覽順序）。
2. **對話框 `<section>`**：不應出現在一般 Tab 順序中，但需要讓 JavaScript 在適當時機以程式聚焦它（例如開啟對話框時）。

```html
<div class="card" ___>
  <h2>精選文章</h2>
  <p>這是一張可以鍵盤操作的卡片。</p>
</div>

<section id="dialog" ___>
  <h2>確認操作</h2>
  <p>你確定要繼續嗎？</p>
</section>
```

完成標準：自訂卡片使用 `tabindex="0"`，對話框使用 `tabindex="-1"`。

<details>
<summary>參考解答</summary>

```html
<div class="card" tabindex="0">
  <h2>精選文章</h2>
  <p>這是一張可以鍵盤操作的卡片。</p>
</div>

<section id="dialog" tabindex="-1">
  <h2>確認操作</h2>
  <p>你確定要繼續嗎？</p>
</section>
```

解題說明：

- `tabindex="0"` 讓原本不能被 Tab 聚焦的元素（如 `<div>`）加入自然 Tab 導覽順序，聚焦順序由文件中的位置決定。
- `tabindex="-1"` 讓元素可被 JavaScript 用 `.focus()` 聚焦，但不會出現在一般 Tab 順序中。對話框一開始通常不在 Tab 順序裡，等到 JavaScript 開啟對話框時才把焦點移進去，這是常見的焦點管理做法。

</details>

---

## 題目 2（基礎）· 改錯題

下面這段 HTML 有 **4 個按鈕都使用了正數 tabindex**，請找出問題並說明如何修正。

```html
<nav>
  <button tabindex="3">關於我們</button>
  <button tabindex="1">首頁</button>
  <button tabindex="4">聯絡方式</button>
  <button tabindex="2">服務項目</button>
</nav>
```

完成標準：說明正數 tabindex 的問題，並提供修正後的 HTML（移除正數 tabindex，讓文件順序決定 Tab 順序）。

<details>
<summary>參考解答</summary>

```html
<nav>
  <button>首頁</button>
  <button>關於我們</button>
  <button>服務項目</button>
  <button>聯絡方式</button>
</nav>
```

問題說明與修正：

**正數 tabindex 會強制改變 Tab 鍵順序，導致焦點順序與文件順序、視覺順序不一致。** 原本的寫法中，頁面上按鈕的視覺排列是「關於我們、首頁、聯絡方式、服務項目」，但 Tab 鍵的聚焦順序卻是「首頁（1）→ 服務項目（2）→ 關於我們（3）→ 聯絡方式（4）」，焦點會在畫面上跳來跳去，讓鍵盤使用者感到困惑。

修正方式有兩種，任選其一即可：

1. **移除所有 tabindex，並將 HTML 排列成合理順序**（如參考解答）：讓按鈕的 HTML 順序與視覺順序一致，瀏覽器自然會按文件順序聚焦。
2. **移除正數 tabindex**（只移除 tabindex，保留原有 HTML 順序）：`<button>` 本來就是可聚焦元素，不加 tabindex 也能用 Tab 鍵操作，瀏覽器依文件順序決定焦點順序。

</details>
