---
source_notes:
  - notes/080-meta標籤/02-meta-refresh自動刷新與導向補充.md
topics: [meta refresh, 自動刷新, 延遲導向, 轉址]
summary: "依需求撰寫 meta refresh 語法，並修正缺少提示與手動連結的自動導向頁。"
---

# meta refresh 導向練習

> 動手練習。概念與用法說明見 `notes/080-meta標籤/02-meta-refresh自動刷新與導向補充.md`。

---

## 題目 1（基礎）· 應用練習題

請依需求寫出對應的 meta refresh 標籤。

**(A)** 頁面載入 5 秒後重新整理目前頁面。

```html
___
```

**(B)** 頁面載入 3 秒後導向 `https://example.com/target-page`。

```html
___
```

完成標準：

1. 使用 `<meta http-equiv="refresh">`。
2. 重新整理目前頁面時只設定秒數。
3. 延遲導向時同時設定秒數與 `url`。

<details>
<summary>參考解答</summary>

**(A)**

```html
<meta http-equiv="refresh" content="5">
```

**(B)**

```html
<meta http-equiv="refresh" content="3;url=https://example.com/target-page">
```

解題說明：

- `content="5"` 表示頁面載入 5 秒後重新整理目前頁面。
- `content="3;url=..."` 表示頁面載入 3 秒後前往指定網址。
- 這些 meta 應放在 `<head>` 裡。

</details>

---

## 題目 2（基礎）· 改錯題

下面這個導向頁會在 1 秒後跳轉，但沒有任何提示。請修正它，讓使用者知道會發生什麼事，並提供手動連結。

```html
<!DOCTYPE html>
<html lang="zh-Hant">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="refresh" content="1;url=https://example.com">
  <title>跳轉頁</title>
</head>
<body>
</body>
</html>
```

完成標準：

1. 保留 meta refresh 導向語法。
2. 在 `<body>` 提供清楚提示文字。
3. 提供可手動點擊的連結。
4. 能說明過短延遲與無提示自動跳轉的問題。

<details>
<summary>參考解答</summary>

```html
<!DOCTYPE html>
<html lang="zh-Hant">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="refresh" content="3;url=https://example.com">
  <title>即將前往新頁面</title>
</head>
<body>
  <p>
    頁面即將前往新網址。
    如果沒有自動跳轉，請<a href="https://example.com">點此開啟</a>。
  </p>
</body>
</html>
```

解題說明：

沒有提示就自動跳轉會讓使用者困惑，也不利於無障礙使用者理解頁面變化。範例把延遲調整為 3 秒，並加入提示文字與手動連結，讓使用者知道接下來會前往哪裡。

</details>

---

## 題目 3（進階）· 情境判斷題

請判斷下列情境是否適合把 meta refresh 當作主要方案，並說明理由。

| 情境 | 是否適合 |
| --- | --- |
| 教學中示範 HTML 自動刷新語法 | ___ |
| 正式網站永久搬到新網址 | ___ |
| 狀態頁每隔 1 秒重新整理一次 | ___ |
| 沒有伺服器端設定權限，只能用 HTML 做簡單延遲導向 | ___ |

完成標準：

1. 能指出正式搬家通常優先使用伺服器端 301 或 302。
2. 能指出過度頻繁重新整理會影響閱讀與伺服器負擔。
3. 能辨識教學示範或最低限度處理的可用情境。

<details>
<summary>參考解答</summary>

| 情境 | 是否適合 | 理由 |
| --- | --- | --- |
| 教學中示範 HTML 自動刷新語法 | 適合 | 這正是學習 meta refresh 語法的合理場景。 |
| 正式網站永久搬到新網址 | 不適合當主要方案 | 通常應使用伺服器端 301 或 302，對瀏覽器與搜尋引擎更明確。 |
| 狀態頁每隔 1 秒重新整理一次 | 不適合 | 會打斷閱讀，也可能增加伺服器負擔。 |
| 沒有伺服器端設定權限，只能用 HTML 做簡單延遲導向 | 可作為最低限度處理 | 這是 notes 提到的可用情境，但仍應提供提示與手動連結。 |

</details>
