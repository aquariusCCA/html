# `HTML 簡介` 練習題

## 一、基本資訊

| 欄位 | 內容 |
|---|---|
| 對應 notes | `notes/第01章_HTML簡介/HTML簡介.md` |
| 章節名稱 | `HTML 簡介` |
| 建議輸出路徑 | `practice/第01章_HTML簡介/HTML簡介-practice.md` |
| 題目數量 | `12` |
| 難度範圍 | Lv1～Lv5 |
| 答案策略 | 提供提示、參考答案與評分標準 |

## 二、Notes 摘要

本 notes 介紹 HTML 的基礎定位與文件結構。重點包含：

- 網頁通常是一份 HTML 文件，網站則是多個相關網頁與資源組成的集合。
- HTML 是 HyperText Markup Language，用來標記網頁內容與結構，不主要負責流程控制或複雜運算。
- 瀏覽器會讀取 HTML，解析標籤與內容，建立 DOM，再搭配 CSS 與 JavaScript 形成使用者看到的頁面。
- 現代 HTML 開發通常使用 HTML5 的簡潔文件宣告 `<!doctype html>`。
- 基本 HTML 文件骨架包含 `doctype`、`html`、`head`、`meta charset`、`title` 與 `body`。
- HTML 標籤與元素不是同一件事；元素通常由開始標籤、內容與結束標籤組成。
- 多數元素是雙標籤，少數特定元素是 void elements，例如 `meta`、`img`、`br`、`input`。
- HTML 元素會形成父子、兄弟、祖先與後代關係，這會影響 CSS、JavaScript、SEO、可訪問性與維護性。
- 語意清楚的 HTML 結構比只用 `div` 或把標題當作視覺大小工具更適合實務開發。

## 三、題目清單

| 編號 | 題型 | 難度 | 對應 notes 知識點 | 練習目標 |
|---|---|---|---|---|
| C-01 | 概念理解題 | Lv1 | 網頁與網站 | 區分單一網頁、整個網站與 HTML 文件的關係 |
| C-02 | 概念理解題 | Lv1 | HTML 是超文本標記語言 | 說明 HTML 的任務，以及它為什麼不是程式語言 |
| C-03 | 概念理解題 | Lv2 | HTML、瀏覽器與 DOM | 排列並解釋瀏覽器從 HTML 到畫面的基本流程 |
| C-04 | 概念理解題 | Lv2 | HTML5、HTML4 與 XHTML 文件宣告 | 判斷不同文件宣告並選擇現代開發慣用寫法 |
| E-01 | 練習題 | Lv2 | 基本 HTML5 文件骨架 | 補完一份結構完整的 HTML5 文件 |
| E-02 | 練習題 | Lv2 | 標籤、元素、雙標籤與單標籤 | 分類元素類型並辨識元素組成 |
| E-03 | 練習題 | Lv3 | HTML 元素之間的關係 | 依照巢狀結構判斷父子、兄弟、祖先與後代 |
| T-01 | 實作任務 | Lv3 | 簡單文章頁面與語意化結構 | 建立一份語意清楚的 HTML 入門文章頁 |
| T-02 | 實作任務 | Lv4 | 網站、網頁、連結、圖片 alt 與語意結構 | 建立一個教學網站首頁的 HTML 骨架 |
| B-01 | 改錯題 | Lv3 | 基本骨架、字元編碼、標籤閉合與 void elements | 修正結構不完整且容易解析錯誤的 HTML |
| B-02 | 改錯題 | Lv3 | 標題層級與語意化元素 | 修正把標題當樣式工具與過度使用 `div` 的問題 |
| R-01 | 重構題 | Lv5 | 語意化結構、可讀性與維護性 | 將可讀性差的 `div` 結構重構成語意清楚的文章頁 |

---

## 四、題目區

### C-01：判斷網頁、網站與 HTML 文件

| 欄位 | 內容 |
|---|---|
| 題型 | 概念理解題 |
| 難度 | Lv1 |
| 對應 notes 知識點 | `網頁與網站` |

#### 題目

某個教學專案資料夾中有以下檔案與資料夾：

```text
index.html
courses.html
article-html-intro.html
about.html
images/
videos/
```

請判斷：

1. 哪些項目可以視為「網頁」？
2. 整個資料夾內容在概念上比較接近「網頁」還是「網站」？
3. `images/` 與 `videos/` 在這個網站中扮演什麼角色？

#### 作答要求

1. 用自己的話說明「網頁」與「網站」的差異。
2. 至少舉出兩個檔案作為判斷依據。
3. 說明 HTML 文件與圖片、影片等資源之間的關係。

#### 評分重點

- 是否能指出網頁通常是一份 HTML 文件。
- 是否能指出網站是多個相關網頁與資源的集合。
- 是否沒有把圖片、影片資料夾直接當成獨立 HTML 網頁。

---

### C-02：HTML 為什麼不是程式語言

| 欄位 | 內容 |
|---|---|
| 題型 | 概念理解題 |
| 難度 | Lv1 |
| 對應 notes 知識點 | `HTML 是超文本標記語言` |

#### 題目

有同學說：「HTML 可以做網頁，所以 HTML 應該就是一種負責寫邏輯的程式語言。」

請你回應這個說法，並說明：

1. HTML 的英文全名與中文意思。
2. 「超文本」在 HTML 中代表的兩層意義。
3. HTML 的主要任務是什麼。
4. 為什麼互動邏輯通常不應歸到 HTML 的職責。

#### 作答要求

1. 回答必須包含「標記內容與結構」這個核心概念。
2. 至少提到一個 HTML 常見標籤代表的內容意義，例如標題、段落、圖片或連結。
3. 不需要討論 JavaScript 語法，只要說明職責分工。

#### 評分重點

- 是否能說明 HTML 是 HyperText Markup Language。
- 是否能指出 HTML 不主要負責流程控制、條件判斷或複雜運算。
- 是否能說明超文本包含多媒體與超連結的概念。

---

### C-03：排序瀏覽器形成網頁的流程

| 欄位 | 內容 |
|---|---|
| 題型 | 概念理解題 |
| 難度 | Lv2 |
| 對應 notes 知識點 | `HTML、瀏覽器與網頁形成` |

#### 題目

請將下列流程依照合理順序排列，並用 2～4 句話解釋 DOM 在其中扮演的角色。

```text
A. 使用者看到最後的 Web 頁面
B. 瀏覽器讀取 HTML / CSS / JavaScript 檔案
C. 前端人員撰寫 HTML / CSS / JavaScript
D. 瀏覽器解析 HTML 並建立 DOM
E. 瀏覽器套用 CSS 樣式與執行 JavaScript
```

#### 作答要求

1. 寫出正確順序，例如 `C -> B -> ...`。
2. 說明原始 HTML 文件與 DOM 的差異。
3. 說明 CSS 與 JavaScript 為什麼會受到 HTML 結構影響。

#### 評分重點

- 是否能排出 notes 中的流程順序。
- 是否能指出 DOM 是瀏覽器根據 HTML 建立出的物件模型。
- 是否能說明 CSS 與 JavaScript 通常基於 DOM 或元素結構工作。

---

### C-04：選擇適合的文件宣告

| 欄位 | 內容 |
|---|---|
| 題型 | 概念理解題 |
| 難度 | Lv2 |
| 對應 notes 知識點 | `HTML5、HTML4 與 XHTML 文件宣告` |

#### 題目

請閱讀以下三段文件宣告：

```html
<!-- A -->
<!doctype html>

<!-- B -->
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">

<!-- C -->
<!DOCTYPE html
PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
```

請回答：

1. 哪一個是現代初學與一般前端開發通常優先使用的 HTML5 宣告？
2. B 與 C 分別比較接近哪種早期寫法？
3. 為什麼現代 HTML 開發通常不需要使用 B 或 C 的長宣告？

#### 作答要求

1. 必須明確指出 A、B、C 的差異。
2. 不能只回答「A 比較短」，要說明它的用途。
3. 若提到舊瀏覽器相容性，需說明要依實際目標環境確認。

#### 評分重點

- 是否能辨識 `<!doctype html>` 是 HTML5 文件宣告。
- 是否知道 HTML4 與 XHTML 宣告較長，會涉及 DTD 或命名空間。
- 是否能說明現代開發多數情況以 HTML5 宣告為基礎。

---

### E-01：補完整 HTML5 文件骨架

| 欄位 | 內容 |
|---|---|
| 題型 | 練習題 |
| 難度 | Lv2 |
| 對應 notes 知識點 | `基本 HTML5 文件骨架` |

#### 題目

請將下列不完整的 HTML 改成一份結構完整的 HTML5 文件。

#### 初始程式碼

```html
<html>
<head>
  <title></title>
</head>
<body>
  <h1>Hello HTML</h1>
  <p>這是一段網頁內容。</p>
</body>
</html>
```

#### 作答要求

1. 補上 HTML5 文件宣告。
2. 在 `html` 元素上設定繁體中文語言。
3. 在 `head` 中設定 UTF-8 字元編碼。
4. 將 `title` 設定為 `我的第一個網頁`。
5. 保留 `body` 中的標題與段落內容。

#### 限制條件

- 只能使用 notes 中出現過的基本 HTML 結構。
- 不需要加入 CSS 或 JavaScript。
- 不要把 `head` 內容放到 `body`。

#### 驗收標準

- [ ] 第一行有 `<!doctype html>`。
- [ ] `html` 有 `lang="zh-Hant"`。
- [ ] `head` 中有 `<meta charset="UTF-8">`。
- [ ] `title` 內容正確。
- [ ] `head` 與 `body` 分工正確。

---

### E-02：分類標籤、元素與 void elements

| 欄位 | 內容 |
|---|---|
| 題型 | 練習題 |
| 難度 | Lv2 |
| 對應 notes 知識點 | `HTML 標籤與元素、雙標籤與單標籤` |

#### 題目

請閱讀以下程式碼，完成分類與辨識。

#### 初始程式碼

```html
<meta charset="UTF-8">
<h1>HTML 簡介</h1>
<p>HTML 是用來描述網頁內容與結構的標記語言。</p>
<img src="html-slide.jpg" alt="HTML 課程投影片">
<br>
<input type="text" name="username">
<a href="https://developer.mozilla.org/">MDN 文件</a>
```

#### 作答要求

1. 將每一行分類為「雙標籤元素」或「void element」。
2. 以 `<p>HTML 是用來描述網頁內容與結構的標記語言。</p>` 為例，指出開始標籤、內容、結束標籤與完整元素。
3. 說明為什麼不能把所有元素都當成可以省略結束標籤。

#### 限制條件

- 分類依據必須來自 notes 中提到的雙標籤與單標籤概念。
- 不需要補充 notes 未介紹的大量 HTML 規格細節。

#### 驗收標準

- [ ] 能正確分類 `meta`、`img`、`br`、`input`。
- [ ] 能正確分類 `h1`、`p`、`a`。
- [ ] 能清楚區分「標籤」與「元素」。
- [ ] 能指出只有特定元素屬於 void elements。

---

### E-03：判斷元素關係

| 欄位 | 內容 |
|---|---|
| 題型 | 練習題 |
| 難度 | Lv3 |
| 對應 notes 知識點 | `HTML 元素之間的關係` |

#### 題目

請根據以下 HTML 結構回答問題。

#### 初始程式碼

```html
<body>
  <main>
    <h1>HTML 簡介</h1>
    <section>
      <h2>什麼是 HTML</h2>
      <p>HTML 是用來描述網頁內容與結構的標記語言。</p>
    </section>
    <section>
      <h2>HTML 與瀏覽器</h2>
      <p>瀏覽器會解析 HTML 並建立 DOM。</p>
    </section>
  </main>
</body>
```

#### 作答要求

1. 指出 `main` 的直接子元素。
2. 指出第一個 `section` 的父元素。
3. 指出 `body` 的後代元素，至少列出 4 個。
4. 指出兩個 `section` 之間的關係。
5. 說明這種階層關係為什麼會影響 CSS 與 JavaScript。

#### 限制條件

- 請根據元素巢狀位置判斷，不要只看縮排猜答案。
- 不需要寫 CSS 或 JavaScript。

#### 驗收標準

- [ ] 能正確辨識父元素與子元素。
- [ ] 能正確辨識祖先與後代。
- [ ] 能正確辨識兄弟元素。
- [ ] 能說明階層關係對 CSS 選取與 DOM 操作有影響。

---

### T-01：建立 HTML 入門文章頁

| 欄位 | 內容 |
|---|---|
| 題型 | 實作任務 |
| 難度 | Lv3 |
| 對應 notes 知識點 | `簡單文章頁面與語意化結構` |

#### 任務背景

你要建立一個給初學者閱讀的 HTML 入門文章頁。這個頁面不需要樣式，但 HTML 結構要清楚，讓瀏覽器、搜尋引擎與輔助工具能理解內容。

#### 功能需求

1. 建立完整 HTML5 文件骨架。
2. `html` 元素需宣告繁體中文語言。
3. `head` 需包含 UTF-8 編碼與頁面標題 `HTML 入門文章`。
4. `body` 中需使用 `header` 放置頁面主標題。
5. `main` 中需有一個 `article`。
6. `article` 內至少包含兩個 `h2` 小節，每個小節各有一段 `p`。
7. 頁面中需有一個連到 MDN 的超連結，連結文字需能看出目的地或用途。

#### 技術限制

- 只使用 HTML。
- 不使用 CSS 控制標題大小。
- 不使用 JavaScript。
- 不要用 `div` 取代所有語意化元素。

#### 完成條件

- [ ] HTML 文件骨架完整。
- [ ] `head` 與 `body` 分工正確。
- [ ] 標題層級從 `h1` 到 `h2` 合理銜接。
- [ ] 段落使用 `p`，連結使用 `a`。
- [ ] `header`、`main`、`article` 的使用符合內容語意。

#### 加分挑戰

- 在第二個小節中說明 HTML、CSS、JavaScript 的基本職責差異。

---

### T-02：建立教學網站首頁骨架

| 欄位 | 內容 |
|---|---|
| 題型 | 實作任務 |
| 難度 | Lv4 |
| 對應 notes 知識點 | `網站、網頁、連結、圖片 alt 與語意結構` |

#### 任務背景

你要替一個 HTML 教學網站建立首頁 `index.html`。首頁本身是一個網頁，但它要能連到網站中的其他網頁與資源。

#### 功能需求

1. 建立完整 HTML5 文件骨架。
2. `title` 設定為 `HTML 學習站`。
3. `body` 中需有 `header`，包含 `h1`：`HTML 學習站`。
4. 使用 `nav` 放置至少三個連結，分別連到：
   - `index.html`
   - `courses.html`
   - `about.html`
5. 使用 `main` 作為主要內容區。
6. 在 `main` 中建立一個介紹 HTML 的 `section`，包含 `h2` 與 `p`。
7. 在 `main` 中建立一個 `article`，介紹一篇 HTML 入門文章，包含 `h2`、`p` 與一個閱讀文章的連結。
8. 放入一張圖片，使用 `img`，並提供能描述圖片內容的 `alt`。

#### 技術限制

- 只使用 notes 中提到或示範過的 HTML 結構與元素。
- 不使用 CSS 或 JavaScript。
- 不要把導覽連結只寫成普通文字，需使用 `a`。
- 圖片可以使用假路徑，例如 `images/html-course.jpg`。

#### 完成條件

- [ ] 能從 HTML 看出這是「網站首頁」而不是只有零散內容。
- [ ] 至少三個站內連結都使用 `a href`。
- [ ] 圖片有 `src` 與有意義的 `alt`。
- [ ] 主要內容放在 `main`。
- [ ] 結構能清楚區分導覽、介紹區與文章區。

#### 加分挑戰

- 在 `article` 中補上一句說明：網站可以由多個相關網頁與資源組成。

---

### B-01：修正不完整且容易解析錯誤的 HTML

| 欄位 | 內容 |
|---|---|
| 題型 | 改錯題 |
| 難度 | Lv3 |
| 對應 notes 知識點 | `基本骨架、字元編碼、標籤閉合與 void elements` |

#### 錯誤情境

這段 HTML 原本要建立一個包含標題、段落與圖片的簡單頁面，但目前文件骨架不完整，部分標籤閉合錯誤，也沒有處理中文字元編碼與圖片替代文字。

#### 有問題的程式碼

```html
<html>
<head>
  <title>我的第一個網頁<title>
</head>
<body>
  <h1>我的第一個網頁
  <p>這是一段網頁內容。
  <img src="photo.jpg">
</html>
```

#### 預期行為

修正後應是一份完整 HTML5 文件，瀏覽器能清楚解析 `head`、`body`、標題、段落與圖片；中文內容應能用 UTF-8 正常顯示，圖片也應有可描述內容的 `alt`。

#### 修正任務

1. 找出至少 4 個錯誤或缺漏。
2. 修正程式碼。
3. 說明每個修正對應到 notes 中哪個觀念。

---

### B-02：修正標題層級與過度使用 div

| 欄位 | 內容 |
|---|---|
| 題型 | 改錯題 |
| 難度 | Lv3 |
| 對應 notes 知識點 | `標題層級與語意化元素` |

#### 錯誤情境

這段程式碼想呈現一篇 HTML 入門文章，但它把標題元素當成調整字體大小的工具，也幾乎用 `div` 表示所有內容，導致文件結構與語意不清楚。

#### 有問題的程式碼

```html
<!doctype html>
<html lang="zh-Hant">
<head>
  <meta charset="UTF-8">
  <title>HTML 入門</title>
</head>
<body>
  <div>
    <h1>HTML 入門</h1>
    <h4>什麼是 HTML？</h4>
    <div>HTML 是用來描述網頁內容與結構的標記語言。</div>
    <h1>HTML 可以放哪些內容？</h1>
    <div>HTML 可以標記文字、圖片、連結、表單與多媒體內容。</div>
  </div>
</body>
</html>
```

#### 預期行為

修正後仍呈現同樣的文字內容，但 HTML 結構應能清楚表達：頁面主標題、文章內容、主要小節標題與段落。

#### 修正任務

1. 調整標題層級，使 `h1` 與 `h2` 的關係合理。
2. 將適合的 `div` 改成更有語意的 HTML 元素。
3. 將段落文字改用合適的段落元素。
4. 說明為什麼不應用標題層級控制視覺大小。

---

### R-01：重構 div 結構成語意化文章頁

| 欄位 | 內容 |
|---|---|
| 題型 | 重構題 |
| 難度 | Lv5 |
| 對應 notes 知識點 | `語意化結構、可讀性與維護性` |

#### 重構前程式碼

```html
<!doctype html>
<html>
<head>
  <meta charset="UTF-8">
  <title>page</title>
</head>
<body>
  <div class="page">
    <div class="top">
      <div>HTML 入門文章</div>
    </div>

    <div class="content">
      <div class="box">
        <div>什麼是 HTML？</div>
        <div>HTML 是用來描述網頁內容與結構的標記語言。</div>

        <div>HTML 可以放哪些內容？</div>
        <div>HTML 可以標記文字、圖片、連結、表單與多媒體內容。</div>

        <a href="https://developer.mozilla.org/">閱讀更多 HTML 文件</a>
      </div>
    </div>
  </div>
</body>
</html>
```

#### 目前問題

1. `html` 沒有宣告主要內容語言。
2. `title` 太籠統，不利於辨識頁面內容。
3. 頁面主標題與小節標題都用 `div` 表示，語意不清楚。
4. 段落文字使用 `div`，無法清楚表達段落。
5. 外層結構大量使用 `div`，不利於閱讀、維護、SEO 與可訪問性。

#### 重構目標

1. 補上合適的 `lang`。
2. 將 `title` 改成能描述頁面的內容。
3. 使用 `header` 表示頁首區域。
4. 使用 `main` 表示主要內容區。
5. 使用 `article` 表示文章內容。
6. 使用 `h1` 表示頁面主標題，使用 `h2` 表示文章小節標題。
7. 使用 `p` 表示段落文字。
8. 保留原本的連結與可見文字內容。

#### 不可改變的外部行為

- 原本可見的文字內容需保留。
- MDN 連結的 `href` 不可改變。
- 不新增 CSS 或 JavaScript。

#### 驗收標準

- [ ] HTML 文件骨架仍完整。
- [ ] `html` 有合適的 `lang`。
- [ ] `title` 能反映文章內容。
- [ ] 頁面結構能清楚看出 `header`、`main`、`article` 的角色。
- [ ] 標題層級合理，不再把標題當作視覺大小工具。
- [ ] 段落文字使用 `p`。
- [ ] 原本連結仍可正常點擊到相同網址。

---

## 五、提示區

### C-01 提示

- 先分清楚「一份 `.html` 檔案」與「一組相關頁面加資源」。
- `images/` 與 `videos/` 通常是網頁會使用的資源，不是 HTML 文件本身。

### C-02 提示

- 可以從 HTML 的全名拆解：HyperText、Markup、Language。
- 判斷是不是程式語言時，重點放在是否主要負責流程控制、條件判斷與複雜運算。

### C-03 提示

- 先從「誰先寫檔案」開始，再想瀏覽器拿到檔案後做什麼。
- DOM 不是原始 `.html` 檔案本身，而是瀏覽器解析後建立出的結構。

### C-04 提示

- HTML5 的宣告非常短。
- HTML4 與 XHTML 的宣告會出現較長的 DTD 或 XHTML 相關網址。

### E-01 提示

- `doctype` 應放在文件最前面。
- `meta charset` 屬於文件資訊，應放在 `head`。

### E-02 提示

- 能包住文字內容的通常需要開始標籤與結束標籤。
- notes 中列出的 `meta`、`img`、`br`、`input` 是常見 void elements。

### E-03 提示

- 直接包住某元素的是父元素。
- 同一個父元素底下、同一層的元素是兄弟元素。

### T-01 提示

- 可以先寫完整骨架，再填入 `header`、`main` 與 `article`。
- `h1` 表示頁面最高層級標題，文章小節可用 `h2`。

### T-02 提示

- 首頁是網站中的一個網頁，所以仍然需要完整 HTML 文件骨架。
- 站內頁面之間的跳轉應使用 `a href`。

### B-01 提示

- 檢查 `title`、`h1`、`p` 是否都有正確結束。
- `img` 是 void element，但仍應提供能描述圖片的 `alt`。

### B-02 提示

- 如果 `h4` 前面沒有合理的 `h2`、`h3`，通常代表標題層級不清楚。
- 段落文字應優先考慮 `p`，不是一律使用 `div`。

### R-01 提示

- 重構不是改變文字內容，而是讓結構更能表達內容意義。
- 先辨識每個 `div` 真正代表的角色，再換成合適元素。

---

## 六、參考答案區

### C-01 參考答案

`index.html`、`courses.html`、`article-html-intro.html`、`about.html` 都可以視為不同的網頁，因為它們各自是 HTML 文件，瀏覽器可以讀取後顯示成頁面。

整個資料夾內容比較接近一個網站，因為它包含多個相關網頁，以及 `images/`、`videos/` 這類供網頁使用的資源。網站是集合，網頁是其中的單一頁面。

`images/` 與 `videos/` 是網站資源。它們可以被 HTML 文件引用，成為網頁中的圖片或影片內容，但資料夾本身不等於一份 HTML 網頁。

### C-02 參考答案

HTML 是 HyperText Markup Language，中文常翻成「超文本標記語言」。

「超文本」包含兩層意義：第一，網頁不只可以放一般文字，也可以放圖片、聲音、影片等多媒體內容；第二，網頁可以透過超連結連到其他文件或網站，形成互相連接的資訊網路。

HTML 的主要任務是標記內容與結構，例如用 `h1` 表示主標題、用 `p` 表示段落、用 `img` 表示圖片、用 `a` 表示連結。HTML 不主要負責流程控制、條件判斷或複雜運算，所以不應把它理解成負責互動邏輯的程式語言。互動邏輯通常交給 JavaScript。

### C-03 參考答案

正確順序：

```text
C -> B -> D -> E -> A
```

前端人員先撰寫 HTML / CSS / JavaScript，瀏覽器讀取檔案後會解析 HTML 並建立 DOM。原始 HTML 文件是文字檔，DOM 是瀏覽器根據 HTML 建立出的樹狀物件模型。CSS 會依照元素、屬性或階層關係套用樣式，JavaScript 也常透過 DOM 找到並操作節點，所以 HTML 結構會直接影響後續樣式與互動。

### C-04 參考答案

A 是 HTML5 文件宣告，也是現代初學與一般前端開發通常優先使用的寫法：

```html
<!doctype html>
```

B 是 HTML4 的文件宣告，會指定 DTD。C 是 XHTML 的文件宣告，寫法更接近 XML，也包含 XHTML DTD 與命名空間相關概念。

現代 HTML 開發多數情況會以 HTML5 為基礎，因此通常使用簡潔的 `<!doctype html>`。若專案需要支援非常舊的瀏覽器，仍應依照實際目標環境確認相容性。

### E-01 參考答案

```html
<!doctype html>
<html lang="zh-Hant">
<head>
  <meta charset="UTF-8">
  <title>我的第一個網頁</title>
</head>
<body>
  <h1>Hello HTML</h1>
  <p>這是一段網頁內容。</p>
</body>
</html>
```

### E-02 參考答案

| 程式碼 | 分類 |
|---|---|
| `<meta charset="UTF-8">` | void element |
| `<h1>HTML 簡介</h1>` | 雙標籤元素 |
| `<p>HTML 是用來描述網頁內容與結構的標記語言。</p>` | 雙標籤元素 |
| `<img src="html-slide.jpg" alt="HTML 課程投影片">` | void element |
| `<br>` | void element |
| `<input type="text" name="username">` | void element |
| `<a href="https://developer.mozilla.org/">MDN 文件</a>` | 雙標籤元素 |

以 `<p>HTML 是用來描述網頁內容與結構的標記語言。</p>` 為例：

- 開始標籤：`<p>`
- 內容：`HTML 是用來描述網頁內容與結構的標記語言。`
- 結束標籤：`</p>`
- 完整元素：`<p>HTML 是用來描述網頁內容與結構的標記語言。</p>`

不能把所有元素都當成可以省略結束標籤，因為只有特定元素屬於 void elements。一般雙標籤元素仍應寫出結束標籤，避免瀏覽器解析結果不如預期。

### E-03 參考答案

1. `main` 的直接子元素是：`h1`、第一個 `section`、第二個 `section`。
2. 第一個 `section` 的父元素是 `main`。
3. `body` 的後代元素包含 `main`、`h1`、兩個 `section`、兩個 `h2`、兩個 `p`。
4. 兩個 `section` 同屬於 `main` 底下，是兄弟元素。
5. 這種階層關係會影響 CSS 選擇器如何選取元素，也會影響 JavaScript 透過 DOM 尋找父節點、子節點、兄弟節點或後代節點。

### T-01 參考答案

```html
<!doctype html>
<html lang="zh-Hant">
<head>
  <meta charset="UTF-8">
  <title>HTML 入門文章</title>
</head>
<body>
  <header>
    <h1>HTML 入門文章</h1>
  </header>

  <main>
    <article>
      <h2>什麼是 HTML？</h2>
      <p>HTML 是用來描述網頁內容與結構的標記語言。</p>

      <h2>HTML、CSS 與 JavaScript 的分工</h2>
      <p>HTML 負責文件結構，CSS 負責樣式，JavaScript 負責互動邏輯。</p>

      <a href="https://developer.mozilla.org/">閱讀 MDN HTML 文件</a>
    </article>
  </main>
</body>
</html>
```

### T-02 參考答案

```html
<!doctype html>
<html lang="zh-Hant">
<head>
  <meta charset="UTF-8">
  <title>HTML 學習站</title>
</head>
<body>
  <header>
    <h1>HTML 學習站</h1>
    <nav>
      <a href="index.html">首頁</a>
      <a href="courses.html">課程列表</a>
      <a href="about.html">關於本站</a>
    </nav>
  </header>

  <main>
    <section>
      <h2>認識 HTML</h2>
      <p>HTML 是用來描述網頁內容與結構的標記語言，是建立網頁的基礎。</p>
      <img src="images/html-course.jpg" alt="HTML 課程投影片">
    </section>

    <article>
      <h2>HTML 入門文章</h2>
      <p>網站可以由多個相關網頁與資源組成，而每個網頁通常是一份 HTML 文件。</p>
      <a href="article-html-intro.html">閱讀 HTML 入門文章</a>
    </article>
  </main>
</body>
</html>
```

### B-01 參考答案

#### 錯誤原因

- 缺少 HTML5 文件宣告。
- `html` 沒有設定主要語言。
- `head` 中缺少 `<meta charset="UTF-8">`。
- `title` 結束標籤寫錯。
- `h1` 與 `p` 沒有正確結束。
- 缺少 `body` 結束標籤。
- `img` 雖然是 void element，不需要結束標籤，但應提供能描述圖片內容的 `alt`。

#### 修正後程式碼

```html
<!doctype html>
<html lang="zh-Hant">
<head>
  <meta charset="UTF-8">
  <title>我的第一個網頁</title>
</head>
<body>
  <h1>我的第一個網頁</h1>
  <p>這是一段網頁內容。</p>
  <img src="photo.jpg" alt="我的第一個網頁示意圖片">
</body>
</html>
```

### B-02 參考答案

#### 錯誤原因

- `h4` 前面沒有合理的 `h2`、`h3` 層級，容易讓文件大綱不清楚。
- 第二個主要小節不應再使用 `h1`，因為 `h1` 應表示頁面最高層級標題。
- 段落內容使用 `div`，語意不如 `p` 清楚。
- 外層結構只用 `div`，沒有清楚標示頁首、主要內容與文章內容。

#### 修正後程式碼

```html
<!doctype html>
<html lang="zh-Hant">
<head>
  <meta charset="UTF-8">
  <title>HTML 入門</title>
</head>
<body>
  <header>
    <h1>HTML 入門</h1>
  </header>

  <main>
    <article>
      <h2>什麼是 HTML？</h2>
      <p>HTML 是用來描述網頁內容與結構的標記語言。</p>

      <h2>HTML 可以放哪些內容？</h2>
      <p>HTML 可以標記文字、圖片、連結、表單與多媒體內容。</p>
    </article>
  </main>
</body>
</html>
```

標題元素應該表達文件層級，而不是用來控制字體大小。視覺大小應交給 CSS 處理。

### R-01 參考答案

#### 重構方向

先辨識每個 `div` 的實際角色：最上方區塊是頁首，主要內容區是頁面主內容，內部文字是一篇文章。接著用 `header`、`main`、`article`、`h1`、`h2` 與 `p` 表達這些角色，並保留原本的連結與可見文字。

#### 重構後程式碼

```html
<!doctype html>
<html lang="zh-Hant">
<head>
  <meta charset="UTF-8">
  <title>HTML 入門文章</title>
</head>
<body>
  <header>
    <h1>HTML 入門文章</h1>
  </header>

  <main>
    <article>
      <h2>什麼是 HTML？</h2>
      <p>HTML 是用來描述網頁內容與結構的標記語言。</p>

      <h2>HTML 可以放哪些內容？</h2>
      <p>HTML 可以標記文字、圖片、連結、表單與多媒體內容。</p>

      <a href="https://developer.mozilla.org/">閱讀更多 HTML 文件</a>
    </article>
  </main>
</body>
</html>
```

---

## 七、評分標準區

### C-01 評分標準

- [ ] 是否能說明網頁通常是一份 HTML 文件。
- [ ] 是否能說明網站是多個相關網頁與資源的集合。
- [ ] 是否能正確判斷 `.html` 檔案、圖片資料夾與影片資料夾的角色。

### C-02 評分標準

- [ ] 是否能說明 HTML 的全名與中文意思。
- [ ] 是否能說明「超文本」包含多媒體與超連結。
- [ ] 是否能指出 HTML 的主要任務是標記內容與結構。
- [ ] 是否能說明 HTML 不主要負責流程控制、條件判斷或複雜運算。

### C-03 評分標準

- [ ] 是否排出正確流程 `C -> B -> D -> E -> A`。
- [ ] 是否能區分原始 HTML 文件與 DOM。
- [ ] 是否能說明 CSS 與 JavaScript 為什麼受到 HTML 結構影響。

### C-04 評分標準

- [ ] 是否能辨識 HTML5、HTML4 與 XHTML 宣告。
- [ ] 是否能說明 `<!doctype html>` 的用途。
- [ ] 是否能用「現代開發通常以 HTML5 為基礎」解釋選擇理由。

### E-01 評分標準

- [ ] 是否完成 HTML5 文件宣告。
- [ ] 是否正確設定 `lang="zh-Hant"`。
- [ ] 是否正確加入 `<meta charset="UTF-8">`。
- [ ] 是否正確設定 `title`。
- [ ] 是否維持 `head` 與 `body` 的正確分工。

### E-02 評分標準

- [ ] 是否正確分類雙標籤元素與 void elements。
- [ ] 是否能指出開始標籤、內容、結束標籤與完整元素。
- [ ] 是否能說明不是所有元素都能省略結束標籤。

### E-03 評分標準

- [ ] 是否正確列出 `main` 的直接子元素。
- [ ] 是否正確判斷第一個 `section` 的父元素。
- [ ] 是否能列出 `body` 的後代元素。
- [ ] 是否能指出兩個 `section` 是兄弟元素。
- [ ] 是否能說明階層關係與 CSS、JavaScript 的關聯。

### T-01 評分標準

- [ ] 是否建立完整 HTML5 文件骨架。
- [ ] 是否使用 `header`、`main`、`article` 建立清楚結構。
- [ ] 是否使用合理的 `h1` 與 `h2` 標題層級。
- [ ] 是否用 `p` 表示段落、用 `a` 表示超連結。
- [ ] 是否沒有用 CSS 或 JavaScript 代替 HTML 語意。

### T-02 評分標準

- [ ] 是否能表達首頁是網站中的一個網頁。
- [ ] 是否完成 `header`、`nav`、`main`、`section`、`article` 的基本結構。
- [ ] 是否至少有三個可用的站內連結。
- [ ] 是否圖片有 `src` 與有意義的 `alt`。
- [ ] 是否避免把所有內容都放在無語意的 `div` 中。

### B-01 評分標準

- [ ] 是否找出文件宣告、語言、編碼、閉合標籤、`body` 結束標籤與圖片 `alt` 等問題。
- [ ] 是否修正成完整 HTML5 文件。
- [ ] 是否能說明每個修正與 notes 知識點的關係。

### B-02 評分標準

- [ ] 是否修正不合理的標題層級。
- [ ] 是否把段落文字改成 `p`。
- [ ] 是否使用語意化元素改善結構。
- [ ] 是否能說明標題元素不是用來控制字體大小。

### R-01 評分標準

- [ ] 是否保留原本可見文字與 MDN 連結。
- [ ] 是否補上合適的 `lang` 並改善 `title`。
- [ ] 是否用 `header`、`main`、`article` 取代不清楚的外層 `div`。
- [ ] 是否用 `h1`、`h2`、`p` 表達內容語意。
- [ ] 是否能說明重構後對可讀性、維護性、SEO 或可訪問性的改善。

---

## 八、資訊不足與補充延伸

本 notes 內容足以支撐本次要求的五種題型：概念理解題、練習題、實作任務、改錯題與重構題。

本練習刻意避免大量延伸到 notes 尚未鋪陳的主題，例如 CSS 選擇器細節、JavaScript DOM API 寫法、表單提交流程、多媒體 API 或完整 SEO 技術。若題目提到 CSS、JavaScript、SEO 或可訪問性，僅用於檢查 notes 中已說明的 HTML 結構影響，不要求實作這些進階技術。

> 補充延伸內容
>
> `nav` 是語意化元素，適合表示頁面或網站導覽區。本 notes 在「過度使用 div」的修正方向中提到可優先使用 `main`、`article`、`nav` 等語意元素；本練習僅在首頁導覽任務中使用 `nav`，不延伸討論更完整的導覽設計規範。
