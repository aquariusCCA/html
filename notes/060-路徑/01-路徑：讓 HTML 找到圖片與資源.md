<!--
source_atomic:
  - atomic/060-路徑/01-路徑基本概念.md
  - atomic/060-路徑/02-絕對路徑.md
  - atomic/060-路徑/03-相對路徑.md
-->

# 路徑：讓 HTML 找到圖片與資源

## 學習目標

讀完這篇筆記，你應該能夠：

- 理解 HTML 中「路徑」的用途。
- 分辨絕對路徑與相對路徑。
- 判斷圖片、CSS、JavaScript 等資源應該怎麼寫路徑。
- 知道本地絕對路徑、外站圖片與相對路徑常見的失效原因。

## 問題情境

網頁不只是一份 HTML 檔案。實際開發時，頁面通常還會引用圖片、CSS、JavaScript、字型或其他檔案。

例如你在 HTML 裡寫：

```html
<img src="images/photo.jpg" alt="個人照片">
```

瀏覽器看到 `src="images/photo.jpg"` 時，必須根據這段路徑去找到真正的圖片檔案。如果路徑寫錯，HTML 標籤本身可能沒有語法錯誤，但圖片仍然會顯示不出來。

這就是為什麼學 HTML 時必須先理解路徑：路徑是 HTML 找到外部資源的位置說明。

## 一句話理解

路徑就是「從某個參考位置出發，找到目標檔案的位置寫法」。

這和現實生活中找地址很像：你要去某個地方，必須知道從哪裡出發、往哪裡走，最後才能到達目的地。

![交通路線規劃示意圖](../../origin/060-路徑/assets/images/path-img-001-d6a090.png)

HTML 也是一樣。當頁面要顯示圖片時，瀏覽器必須依照路徑找到圖片檔案。

## 路徑的兩大類

HTML 中常見的路徑可以分成兩類：

- 絕對路徑：從固定的根位置或完整網址開始描述目標位置。
- 相對路徑：從目前 HTML 檔案所在位置出發，描述目標位置。

兩者的差別不只是寫法不同，更重要的是「參考點」不同。

| 類型 | 參考點 | 範例 | 常見用途 |
| --- | --- | --- | --- |
| 絕對路徑 | 固定根位置或完整網址 | `D:\day01\images\1.jpg`、`https://example.com/logo.gif` | 外部網址、少數固定位置資源 |
| 相對路徑 | 目前 HTML 檔案所在位置 | `images/1.jpg`、`../images/1.jpg` | 專案內圖片、CSS、JavaScript |

## 絕對路徑

絕對路徑指的是從一個固定位置開始，直接描述目標檔案的位置。它不依賴目前 HTML 檔案放在哪裡，而是以某個根位置作為參考點。

常見寫法有兩種。

第一種是本機磁碟路徑：

```text
D:\day01\images\1.jpg
```

第二種是完整網路網址：

```text
https://www.itcast.cn/2018czgw/images/logo.gif
```

如果把它放進圖片標籤中，可能會像這樣：

```html
<img src="https://www.itcast.cn/2018czgw/images/logo.gif" alt="網站標誌">
```

### 絕對路徑的實務注意

本機磁碟路徑在自己的電腦上可能可以用，但一旦換到別人的電腦、部署到伺服器，路徑通常就失效。

例如：

```html
<img src="D:\day01\images\1.jpg" alt="範例圖片">
```

這段路徑只對有 `D:\day01\images\1.jpg` 這個檔案位置的電腦有意義。別人的電腦可能沒有 D 槽，也可能沒有相同資料夾。因此在正式網頁中，很少直接使用本機絕對路徑。

網路絕對路徑比較常見，但也要注意外部資源不一定永遠可用。若對方網站移除圖片、改變網址，或開啟防盜鏈，你的頁面就可能載入失敗。

防盜鏈的意思是：你直接用瀏覽器打開圖片網址可能看得到，但把那張圖片放到自己的網站中引用時，對方伺服器會拒絕顯示。

## 相對路徑

相對路徑是從「目前寫這段 HTML 的檔案位置」出發，去尋找目標檔案。

例如專案結構如下：

```text
project/
  index.html
  images/
    photo.jpg
```

如果 `index.html` 要引用 `images/photo.jpg`，可以寫：

```html
<img src="images/photo.jpg" alt="照片">
```

這裡的意思是：從 `index.html` 所在資料夾出發，進入 `images` 資料夾，再找到 `photo.jpg`。

相對路徑的重點是「目前檔案在哪裡」。同一段 `images/photo.jpg`，放在不同 HTML 檔案中，可能會指向不同位置。

![相對路徑分類與符號說明表](../../origin/060-路徑/assets/images/path-img-002-4c2e46.png)

## 相對路徑常見寫法

### 同一層

如果 HTML 檔案和圖片在同一個資料夾：

```text
project/
  index.html
  logo.png
```

可以寫：

```html
<img src="logo.png" alt="網站標誌">
```

也可以寫：

```html
<img src="./logo.png" alt="網站標誌">
```

`./` 代表目前資料夾，通常可以省略。

### 下一層

如果圖片放在 HTML 檔案旁邊的 `images` 資料夾：

```text
project/
  index.html
  images/
    logo.png
```

可以寫：

```html
<img src="images/logo.png" alt="網站標誌">
```

這表示從目前位置進入 `images` 資料夾，再找到 `logo.png`。

### 上一層

如果 HTML 檔案在 `pages` 資料夾中，圖片在上一層的 `images` 資料夾：

```text
project/
  images/
    logo.png
  pages/
    about.html
```

在 `about.html` 裡要引用圖片時，可以寫：

```html
<img src="../images/logo.png" alt="網站標誌">
```

`../` 代表回到上一層資料夾。這段路徑的意思是：先從 `pages` 回到 `project`，再進入 `images`，最後找到 `logo.png`。

## 範例拆解

看這段 HTML：

```html
<img src="../images/product.jpg" alt="商品照片">
```

可以拆成三個部分理解：

- `<img>`：建立圖片。
- `src="../images/product.jpg"`：告訴瀏覽器圖片檔案在哪裡。
- `alt="商品照片"`：圖片無法顯示時的替代文字，也提供無障礙說明。

其中 `../images/product.jpg` 的尋找順序是：

1. 從目前 HTML 檔案所在位置出發。
2. 用 `../` 回到上一層資料夾。
3. 進入 `images` 資料夾。
4. 找到 `product.jpg`。

只要其中一層資料夾名稱、檔名或相對位置錯了，圖片就會載入失敗。

## 實務判斷

在一般專案中，自己的圖片、CSS、JavaScript 通常優先使用相對路徑。

```html
<link rel="stylesheet" href="css/style.css">
<script src="js/main.js"></script>
<img src="images/banner.jpg" alt="首頁橫幅">
```

這樣做的好處是：整個專案資料夾搬到另一台電腦或部署到伺服器時，只要內部資料夾結構不變，路徑就仍然有效。

完整網址型絕對路徑適合用在外部資源，例如引用 CDN 或其他網站提供的檔案。

```html
<script src="https://cdn.example.com/library.js"></script>
```

但不要把別人網站上的圖片當成自己網站的穩定資源。外站圖片可能被刪除、改名、拒絕外部引用，或因網路問題載入失敗。

## 常見錯誤

### 錯誤一：使用本機絕對路徑

```html
<img src="D:\day01\images\1.jpg" alt="範例圖片">
```

這種寫法在自己的電腦上可能暫時有效，但換一台電腦或上傳到網站後通常就壞掉。正式專案應把圖片放進專案資料夾，改用相對路徑。

```html
<img src="images/1.jpg" alt="範例圖片">
```

### 錯誤二：搬動 HTML 檔案後沒有更新相對路徑

原本的結構：

```text
project/
  index.html
  images/
    logo.png
```

`index.html` 中可以寫：

```html
<img src="images/logo.png" alt="網站標誌">
```

如果後來把 HTML 移到 `pages` 資料夾：

```text
project/
  images/
    logo.png
  pages/
    index.html
```

原本的 `images/logo.png` 就不再正確，因為它會從 `pages` 裡面尋找 `images`。這時應改成：

```html
<img src="../images/logo.png" alt="網站標誌">
```

### 錯誤三：引用外站圖片卻沒有備案

```html
<img src="https://other-site.example.com/photo.jpg" alt="活動照片">
```

這種寫法依賴對方網站。對方若改網址、刪圖片或限制外部引用，你的頁面就會出現破圖。對於自己網站需要穩定顯示的圖片，應放進自己的專案或自己的伺服器中管理。

## 重點整理

- 路徑用來告訴瀏覽器去哪裡找圖片、CSS、JavaScript 等外部資源。
- 絕對路徑從固定根位置或完整網址開始描述目標位置。
- 相對路徑從目前 HTML 檔案所在位置出發描述目標位置。
- 本機絕對路徑不適合正式網頁，換設備或部署後容易失效。
- 專案內資源通常優先使用相對路徑。
- `./` 代表目前資料夾，通常可以省略；`../` 代表上一層資料夾。
- 相對路徑依賴檔案位置，移動 HTML 或資源檔時要同步檢查路徑。

## 自我檢查

1. 為什麼 HTML 引用圖片時需要寫路徑？
2. `D:\day01\images\1.jpg` 這種路徑為什麼不適合放在正式網頁中？
3. 如果 `about.html` 在 `pages` 資料夾，而圖片在上一層的 `images` 資料夾，應該怎麼寫圖片路徑？
4. `./logo.png` 和 `logo.png` 在多數情況下有什麼關係？
5. 如果移動了 HTML 檔案，為什麼相對路徑可能需要跟著修改？
