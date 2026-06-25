---
source_notes:
  - notes/250-框架標籤/01-iframe框架標籤.md
topics: [iframe, iframe 屬性, target, name, iframe 實務]
summary: "整理 iframe 常用屬性、進階實務屬性，以及 name 與 target 搭配時的速查規則。"
---

# iframe 屬性與用法速查

> 查表資料整理自 `notes/250-框架標籤/01-iframe框架標籤.md`。

## iframe 常用屬性速查

| 屬性 | 作用 | 使用提醒 |
| --- | --- | --- |
| `src` | 指定 iframe 要載入的網址或文件路徑。 | 若路徑錯誤、檔案不存在，或瀏覽器無法顯示該格式，iframe 就不會正常呈現內容。 |
| `title` | 描述 iframe 內容，讓輔助工具能辨識這個框架的用途。 | 範例中用來說明框架會顯示的內容，例如「示範首頁」「PDF 文件預覽」「連結開啟結果」。 |
| `name` | 替 iframe 命名，可讓連結或表單的 `target` 指向它。 | `target` 的值必須和 iframe 的 `name` 一致。 |
| `width` | 設定 iframe 的寬度。 | 可搭配 `height` 設定框架在頁面上的顯示尺寸。 |
| `height` | 設定 iframe 的高度。 | 可搭配 `width` 設定框架在頁面上的顯示尺寸。 |
| `frameborder` | 舊式屬性，曾用來控制是否顯示邊框，新內容不建議使用。 | 新內容應改用 CSS，例如 `style="border: 0;"` 或 `style="border: 1px solid currentColor;"`。 |

## 邊框寫法速查

| 目的 | 不建議寫法 | 建議寫法 |
| --- | --- | --- |
| 移除 iframe 邊框 | `<iframe src="page.html" frameborder="0"></iframe>` | `<iframe src="page.html" title="頁面內容" style="border: 0;"></iframe>` |
| 顯示 iframe 邊框 | 使用 `frameborder` 控制邊框 | `<iframe src="page.html" title="頁面內容" style="border: 1px solid currentColor;"></iframe>` |

## name / target 搭配速查

| 搭配對象 | 寫法重點 | 結果 | 注意事項 |
| --- | --- | --- | --- |
| 連結 `<a>` | `<a target="container">` 搭配 `<iframe name="container">` | 點擊連結後，目標頁面會載入到指定名稱的 iframe 中。 | `target` 的值必須和 iframe 的 `name` 一致；若不同，瀏覽器可能改用新視窗或其他瀏覽目標開啟。 |
| 表單 `<form>` | `<form target="container2">` 搭配 `<iframe name="container2">` | 表單送出後，結果會載入到指定名稱的 iframe 中。 | 這種寫法可以保留原本表單區塊，只把結果顯示在下方或旁邊的框架中。 |

## iframe 適用情境速查

| 判斷 | 情況 |
| --- | --- |
| 可以考慮使用 `<iframe>` | 需要嵌入外部服務提供的頁面或元件。 |
| 可以考慮使用 `<iframe>` | 需要在指定區域中顯示另一個 URL 的內容。 |
| 可以考慮使用 `<iframe>` | 需要搭配連結或表單的 `target`，讓結果載入到固定框架。 |
| 可以考慮使用 `<iframe>` | 需要顯示瀏覽器可直接開啟的文件，例如 PDF。 |
| 不適合使用 `<iframe>` | 只是為了做一般網頁排版。 |
| 不適合使用 `<iframe>` | 只是想把一段 HTML 拆成不同區塊。 |
| 不適合使用 `<iframe>` | 想嵌入的網站本身禁止被 iframe 載入。 |
| 不適合使用 `<iframe>` | 想嵌入的內容其實應該由目前頁面的 HTML 結構直接呈現。 |

## 進階實務屬性速查

| 屬性 | 作用 | 使用時機 |
| --- | --- | --- |
| `sandbox` | 限制 iframe 內頁面的能力，例如是否允許執行腳本、提交表單或開啟新視窗。 | iframe 內嵌的是第三方服務，且需要控制安全性時再評估。 |
| `allow` | 指定 iframe 可以使用哪些瀏覽器功能，例如全螢幕、相機、麥克風或剪貼簿等權限。 | iframe 內嵌內容需要特定瀏覽器功能時再評估。 |
| `allowfullscreen` | 允許 iframe 內的內容進入全螢幕，常見於影音播放器或互動展示。 | 影音播放器或互動展示需要全螢幕時使用。 |
| `referrerpolicy` | 控制瀏覽器載入 iframe 時，是否以及如何送出來源頁面的 referrer 資訊。 | 需要控制 iframe 載入時的 referrer 資訊時再評估。 |
| `loading` | 可設定為 `lazy`，讓 iframe 在接近可視範圍時再載入，減少一開始的載入負擔。 | iframe 內容會影響效能時再評估。 |

初學階段先掌握 `src`、`title`、`name`、尺寸與 `target` 的配合即可；當 iframe 內嵌的是第三方服務或會影響效能的內容時，再進一步評估這些進階屬性。
