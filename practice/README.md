# HTML Practice

這裡用來放根據 `notes/` 延伸出來的實作練習。

練習的重點不是背標籤，而是把 HTML 標籤放進實際頁面情境中使用，確認自己能根據內容選擇正確的語意結構。

## 目錄說明

| 目錄 | 用途 |
|---|---|
| `01-html-only/` | 第一階段實戰練習，只使用 HTML，不加入 CSS 或 JavaScript。 |
| `chapter-drills/` | 單章節、小範圍練習，例如標題、段落、列表、表格、表單等。 |

## `01-html-only/`

這個目錄適合放完整頁面型練習，例如：

1. 個人介紹頁
2. 文章頁
3. 商品介紹頁
4. 報名表單頁
5. 小型網站首頁

限制：

- 只寫 `.html`
- 不使用 CSS
- 不使用 JavaScript
- 重點放在 HTML 結構、標題層級、語意標籤、表單與內容組織

建議每個練習使用獨立資料夾：

```text
01-html-only/
  01-personal-profile-page/
    README.md
    starter/
      index.html
    solution/
      index.html
```

## `chapter-drills/`

這個目錄適合放單章節練習，例如：

```text
chapter-drills/
  第09章_標題標籤/
  第10章_段落標籤/
  第21章_列表標籤/
  第23章_表單標籤/
```

這類練習可以用來加強單一觀念，但主力練習仍建議放在 `01-html-only/`，因為實際寫頁面時通常會混合多種標籤。

## 學習分工

| 目錄 | 角色 |
|---|---|
| `demos/` | 看範例，觀察別人怎麼寫。 |
| `practice/` | 自己動手寫，完成實作任務。 |
| `review/` | 練完後複習與自我檢查。 |

## 練習檢查重點

完成練習後，請檢查：

- HTML 骨架是否完整
- `title`、`meta charset`、`meta viewport` 是否正確
- 頁面是否只有一個主要 `h1`
- 標題層級是否合理
- 段落是否使用 `p`
- 列表是否使用 `ul`、`ol`、`li`
- 圖片是否有合適的 `alt`
- 連結是否真的代表跳轉
- 表單欄位是否搭配 `label`
- 是否避免為了排版濫用 `br`、`hr`、`table`
