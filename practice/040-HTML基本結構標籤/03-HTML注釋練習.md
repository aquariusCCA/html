---
source_notes:
  - notes/040-HTML基本結構標籤/03-HTML注釋.md
topics: [HTML注釋, 注釋語法, 程式碼維護, 敏感資訊]
summary: "動手為 HTML 區塊撰寫有意義注釋，並修正未閉合注釋與含敏感資訊的注釋錯誤。"
---

# HTML 注釋練習

> 動手練習。概念與用法說明見 `notes/040-HTML基本結構標籤/03-HTML注釋.md`。

---

## 題目 1（基礎）· 應用練習題

下面這個頁面骨架由三個主要區塊組成，目前沒有任何注釋。請在適當位置加上有意義的注釋，說明每個區塊的用途。

```html
<!DOCTYPE html>
<html lang="zh-TW">
<head>
  <meta charset="UTF-8">
  <title>學習筆記</title>
</head>
<body>

  <nav>
    <a href="/">首頁</a>
    <a href="/notes.html">筆記</a>
    <a href="/about.html">關於</a>
  </nav>

  <main>
    <h1>HTML 基礎</h1>
    <p>本篇介紹 HTML 文件的基本結構，包含 DOCTYPE、lang 與 charset。</p>
  </main>

  <footer>
    <p>Copyright 2026 學習筆記</p>
    <a href="/privacy.html">隱私權政策</a>
  </footer>

</body>
</html>
```

完成標準：三個區塊各加一段注釋，注釋說明區塊在頁面中的用途，不只是重複寫「這是 nav」「這是 footer」。

<details>
<summary>參考解答</summary>

```html
<!DOCTYPE html>
<html lang="zh-TW">
<head>
  <meta charset="UTF-8">
  <title>學習筆記</title>
</head>
<body>

  <!-- 網站主導覽：提供首頁、筆記列表與關於頁面的連結 -->
  <nav>
    <a href="/">首頁</a>
    <a href="/notes.html">筆記</a>
    <a href="/about.html">關於</a>
  </nav>

  <!-- 主要內容區：顯示目前頁面的文章標題與正文 -->
  <main>
    <h1>HTML 基礎</h1>
    <p>本篇介紹 HTML 文件的基本結構，包含 DOCTYPE、lang 與 charset。</p>
  </main>

  <!-- 頁尾：包含版權資訊與隱私權政策連結 -->
  <footer>
    <p>Copyright 2026 學習筆記</p>
    <a href="/privacy.html">隱私權政策</a>
  </footer>

</body>
</html>
```

解題說明：

- 好的注釋補充的是「這個區塊負責什麼」，而不是「這個標籤叫什麼」。例如「網站主導覽：提供…連結」比「這是 nav」更有維護價值。
- 注釋語法：`<!--` 開頭，`-->` 結尾，兩者都不能省略。
- 每個主要區塊加一段注釋即可，不需要替每一行程式碼都加，避免過多注釋反而讓程式碼更難讀。

</details>

---

## 題目 2（基礎）· 改錯題

下面這段 HTML 有 **2 個注釋相關問題**，請找出並修正。

```html
<!DOCTYPE html>
<html lang="zh-TW">
<head>
  <meta charset="UTF-8">
  <!-- 測試帳號：admin@example.com / 密碼：hunter2
  <title>網站首頁</title>
</head>
<body>
  <h1>歡迎光臨</h1>
  <p>這是首頁的主要內容。</p>
</body>
</html>
```

完成標準：2 個問題全部修正，且能說明每一處的問題所在。

<details>
<summary>參考解答</summary>

```html
<!DOCTYPE html>
<html lang="zh-TW">
<head>
  <meta charset="UTF-8">
  <title>網站首頁</title>
</head>
<body>
  <h1>歡迎光臨</h1>
  <p>這是首頁的主要內容。</p>
</body>
</html>
```

兩個問題說明：

1. **注釋未閉合（缺少 `-->`）** → 原始碼中 `<!-- 測試帳號…` 沒有對應的結束符 `-->`，導致 `<title>網站首頁</title>` 也被當成注釋內容，頁面完全沒有標題。修正方式：直接移除這整段注釋（見下方第 2 點）。

2. **注釋中放入敏感資訊（帳號與密碼）** → 注釋不會顯示在頁面畫面上，但仍存在於瀏覽器可查看的 HTML 原始碼中，任何人開啟「檢視原始碼」都能看到。帳號、密碼、金鑰等敏感資訊絕對不能寫進 HTML 注釋。修正方式：整段注釋直接刪除。

</details>
