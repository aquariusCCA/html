---
source_atomic:
  - atomic/190-音頻標籤/01-audio-標籤基本用法.md
  - atomic/190-音頻標籤/02-audio-source-多格式兼容寫法.md
---

# audio 標籤：在網頁中嵌入音訊

## 學習目標

讀完這篇筆記，你應該能夠：

- 理解 `<audio>` 標籤在 HTML 裡的語意與使用情境。
- 使用 `controls`、`autoplay`、`loop` 等常見屬性建立基本音訊播放器。
- 判斷什麼時候使用單一 `src`，什麼時候使用多個 `<source>` 提供不同音訊來源。
- 避免把自動播放、格式支援與 fallback 提示寫成不可靠的用法。

## 使用情境

當網頁需要播放音訊時，例如課程錄音、語音導覽、音樂試聽、提示音效或語言學習素材，就可以使用 `<audio>` 標籤。

`<audio>` 的重點不是「放一個檔案連結」而已，而是告訴瀏覽器：這段內容是一個可以播放的音訊媒體，瀏覽器可以依照屬性顯示播放控制列、載入音訊檔，並在支援的情況下播放。

## 一句話理解

`<audio>` 是用來在 HTML 頁面中嵌入音訊播放器的語意標籤。

## 基本語法

最常見、也最適合初學者先掌握的寫法，是使用 `src` 指定音訊檔案，並加上 `controls` 讓使用者可以操作播放。

```html
<audio src="audio.mp3" controls></audio>
```

這段程式碼會建立一個音訊播放器：

- `<audio>`：表示這是一段音訊內容。
- `src="audio.mp3"`：指定音訊檔案的位置。
- `controls`：顯示瀏覽器內建的播放、暫停、音量等控制介面。

如果沒有 `controls`，使用者通常看不到可以操作的播放介面。除非你打算用 JavaScript 自己製作播放器，否則實務上多數內容音訊都應該加上 `controls`。

## 常見屬性

`<audio>` 常見屬性如下：

![audio 標籤常見屬性表](../../origin/190-音頻標籤/assets/images/html-audio-tag-img-001-623890.png)

其中幾個屬性需要特別注意：

- `controls`：顯示播放控件，讓使用者可以播放、暫停或調整音量。
- `autoplay`：嘗試自動播放音訊，但現代瀏覽器常會阻擋未經使用者互動且有聲音的自動播放，所以不能假設一定會生效。
- `loop`：音訊播放結束後自動重新播放。

可以把這些屬性組合使用：

```html
<audio src="audio.mp3" controls loop></audio>
```

這代表音訊可以由使用者操作播放，並在播放結束後循環播放。

## 使用 source 提供多格式來源

不同瀏覽器對音訊格式與編碼的支援不一定完全相同。常見音訊格式包含 MP3、WAV、Ogg，但實際能不能播放，仍取決於瀏覽器與音訊編碼。

如果你準備了多個不同格式的音訊檔，可以在 `<audio>` 裡放多個 `<source>`。瀏覽器會依序檢查，選擇第一個自己能播放的來源。

```html
<audio controls>
  <source src="../../origin/190-音頻標籤/assets/files/html-audio-tag-file-001-1fa553.mp3" type="audio/mpeg">
  您的瀏覽器不支持 audio 標籤。
</audio>
```

這段程式碼可以拆成三個部分：

- `<audio controls>`：建立音訊播放器，並顯示控制介面。
- `<source>`：提供一個可播放來源。
- `src`：指定音訊檔案位置。
- `type="audio/mpeg"`：告訴瀏覽器這個來源的 MIME type，方便瀏覽器判斷是否支援。
- `您的瀏覽器不支持 audio 標籤。`：當瀏覽器完全不支援 `<audio>` 時，才會顯示這段 fallback 文字。

如果有多種格式，可以這樣排列：

```html
<audio controls>
  <source src="audio.mp3" type="audio/mpeg">
  <source src="audio.ogg" type="audio/ogg">
  您的瀏覽器不支持 audio 標籤。
</audio>
```

瀏覽器會從上往下選擇可播放的來源。通常會把最希望使用、支援度較好的格式放在前面。

## 單一 src 與多個 source 怎麼選

如果你的專案只提供一個音訊檔，而且目標瀏覽器都能支援這個格式，可以使用簡單的 `src` 寫法：

```html
<audio src="audio.mp3" controls></audio>
```

如果你要照顧不同瀏覽器的格式支援，或準備了多種音訊格式，就使用 `<source>`：

```html
<audio controls>
  <source src="audio.mp3" type="audio/mpeg">
  <source src="audio.ogg" type="audio/ogg">
</audio>
```

判斷方式可以很簡單：

| 情境 | 建議寫法 |
| --- | --- |
| 只有一個音訊檔，格式支援明確 | `<audio src="..." controls>` |
| 有多個格式，想讓瀏覽器自行選擇 | `<audio>` 裡放多個 `<source>` |
| 需要顯示舊瀏覽器提示 | 在 `<audio>` 內、所有 `<source>` 後放 fallback 文字 |

## 常見錯誤

### 把 autoplay 當成一定會播放

錯誤理解：

```html
<audio src="audio.mp3" autoplay></audio>
```

`autoplay` 只是要求瀏覽器嘗試自動播放，不代表一定成功。現代瀏覽器通常會阻擋沒有使用者互動、且有聲音的自動播放，避免網頁一打開就發出聲音。

比較可靠的做法是提供 `controls`，讓使用者自己開始播放：

```html
<audio src="audio.mp3" controls></audio>
```

### 沒有 controls，使用者無法操作

如果只寫：

```html
<audio src="audio.mp3"></audio>
```

瀏覽器可能已經載入音訊，但頁面上沒有播放介面。對一般內容音訊來說，這會讓使用者不知道如何播放。

除非你有自訂播放器，否則建議加上 `controls`。

### MIME type 寫錯或混用

`type` 應該描述音訊來源的實際 MIME type。例如 MP3 常用：

```html
<source src="audio.mp3" type="audio/mpeg">
```

如果副檔名、檔案內容與 `type` 對不起來，瀏覽器可能會跳過這個來源，或造成除錯困難。

### fallback 文字放錯位置

fallback 文字應該放在 `<audio>` 裡面，通常放在所有 `<source>` 後面：

```html
<audio controls>
  <source src="audio.mp3" type="audio/mpeg">
  您的瀏覽器不支持 audio 標籤。
</audio>
```

如果把提示文字放在 `<audio>` 外面，它就不再是 `<audio>` 的 fallback，而會變成一般頁面文字。

## 實務使用準則

- 內容型音訊通常要加 `controls`，讓使用者自己控制播放。
- 不要依賴有聲音的 `autoplay` 一定生效。
- 需要支援多種格式時，使用多個 `<source>`，讓瀏覽器自行選擇可播放來源。
- `type` 建議提供，方便瀏覽器更快判斷來源格式。
- `<audio>` 和 `<video>` 的使用方式相似，但音訊不適合用「靜音自動播放」作為主要使用模式；如果要更細緻控制，通常會搭配 JavaScript。

## 重點整理

- `<audio>` 用來在網頁中嵌入音訊播放器。
- `src` 可以指定單一音訊檔；多格式來源則使用多個 `<source>`。
- `controls` 讓使用者看到播放控制介面，是內容音訊常見且重要的屬性。
- `autoplay` 可能被瀏覽器阻擋，不能當成可靠播放流程。
- fallback 文字要寫在 `<audio>` 裡面，給不支援 `<audio>` 的瀏覽器顯示。

## 自我檢查

1. 如果一個音訊是文章中的補充錄音，為什麼通常應該加上 `controls`？
2. `autoplay` 寫在 `<audio>` 上，為什麼仍然可能不會自動播放？
3. 什麼情況下會使用多個 `<source>`，而不是直接在 `<audio>` 上寫 `src`？
4. fallback 文字應該放在 `<audio>` 的哪個位置？它什麼時候才會顯示？
