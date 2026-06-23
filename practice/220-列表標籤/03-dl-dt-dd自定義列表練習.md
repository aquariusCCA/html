---
source_notes:
  - notes/220-列表標籤/02-自定義列表-dl-dt-dd.md
topics: [dl, dt, dd, "自定義列表"]
summary: "練習用 dl、dt、dd 表示名詞與描述，並辨識不該把 li 放進 dl 的情境。"
---

# dl / dt / dd 自定義列表練習

> 本練習對應 notes/220-列表標籤/02-自定義列表-dl-dt-dd.md

## 練習 1：把名詞解釋寫成自定義列表

請用 `<dl>`、`<dt>`、`<dd>` 表示下面的名詞解釋：

- HTML：負責網頁內容與結構
- CSS：負責網頁樣式
- JavaScript：負責網頁互動

<details>
<summary>參考解答</summary>

```html
<dl>
  <dt>HTML</dt>
  <dd>負責網頁內容與結構</dd>

  <dt>CSS</dt>
  <dd>負責網頁樣式</dd>

  <dt>JavaScript</dt>
  <dd>負責網頁互動</dd>
</dl>
```

解題說明：`<dl>` 用來表示一組名詞與描述。`<dt>` 放名詞或項目名稱，`<dd>` 放對應的描述內容。
</details>

## 練習 2：一個名詞搭配多個描述

請用自定義列表表示下面內容：

- HTML
  - 建立標題、段落、列表等內容
  - 提供網頁的基本結構
- CSS
  - 調整顏色、間距與版面
  - 讓網頁更容易閱讀

<details>
<summary>參考解答</summary>

```html
<dl>
  <dt>HTML</dt>
  <dd>建立標題、段落、列表等內容</dd>
  <dd>提供網頁的基本結構</dd>

  <dt>CSS</dt>
  <dd>調整顏色、間距與版面</dd>
  <dd>讓網頁更容易閱讀</dd>
</dl>
```

解題說明：一個 `<dt>` 可以搭配多個 `<dd>`。只要內容仍是「名詞或項目」與「描述」的關係，就可以用自定義列表。
</details>

## 練習 3：修正錯誤的 dl 結構

下面的 HTML 把 `<li>` 放進 `<dl>` 裡。請改成正確的自定義列表。

```html
<dl>
  <li>HTML</li>
  <li>負責網頁內容與結構</li>
  <li>CSS</li>
  <li>負責網頁樣式</li>
</dl>
```

<details>
<summary>參考解答</summary>

```html
<dl>
  <dt>HTML</dt>
  <dd>負責網頁內容與結構</dd>

  <dt>CSS</dt>
  <dd>負責網頁樣式</dd>
</dl>
```

解題說明：`<li>` 是 `<ul>` 或 `<ol>` 的列表項目，不是 `<dl>` 的項目。自定義列表應使用 `<dt>` 和 `<dd>`。
</details>

## 練習 4：判斷何時不該使用 dl

下面內容只是「需要準備的工具」，不是名詞與描述的配對：

- 編輯器
- 瀏覽器
- 筆記

請選擇更適合的列表標籤，並寫出 HTML。

<details>
<summary>參考解答</summary>

```html
<ul>
  <li>編輯器</li>
  <li>瀏覽器</li>
  <li>筆記</li>
</ul>
```

解題說明：這組內容是同類項目的集合，不是「名詞 + 描述」的關係，因此用 `<ul>` 較合適。`<dl>` 適合用在術語解釋、設定名稱與說明等配對資料。
</details>
