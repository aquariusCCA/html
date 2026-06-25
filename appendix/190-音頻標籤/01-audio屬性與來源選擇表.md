---
source_notes:
  - notes/190-音頻標籤/01-audio-標籤.md
topics: [audio 標籤, 音訊播放器, source 多格式來源, autoplay 限制, fallback 文字]
summary: "整理 audio 常用屬性、單一 src 與多個 source 的選用情境，以及 autoplay、type 與 fallback 的使用提醒。"
---

# audio 屬性與來源選擇表

> 查表內容整理自 `notes/190-音頻標籤/01-audio-標籤.md`。

## audio 常用屬性

| 項目 | 用途 | 建議寫法 | 使用提醒 |
| --- | --- | --- | --- |
| `<audio>` | 在 HTML 頁面中嵌入音訊播放器 | `<audio src="audio.mp3" controls></audio>` | 用來表示一段可播放的音訊媒體。 |
| `src` | 指定單一音訊檔案的位置 | `src="audio.mp3"` | 只有一個音訊檔，且目標瀏覽器都能支援時，可直接寫在 `<audio>` 上。 |
| `controls` | 顯示瀏覽器內建播放、暫停、音量等控制介面 | `<audio src="audio.mp3" controls></audio>` | 內容型音訊通常要加上，讓使用者自己控制播放。 |
| `autoplay` | 要求瀏覽器嘗試自動播放音訊 | `<audio src="audio.mp3" autoplay></audio>` | 現代瀏覽器常會阻擋未經使用者互動且有聲音的自動播放，不能假設一定生效。 |
| `loop` | 音訊播放結束後自動重新播放 | `<audio src="audio.mp3" controls loop></audio>` | 可和 `controls` 組合，讓音訊可操作且循環播放。 |

## source 多格式來源

| 項目 | 用途 | 建議寫法 | 使用提醒 |
| --- | --- | --- | --- |
| `<source>` | 在 `<audio>` 裡提供一個可播放來源 | `<source src="audio.mp3" type="audio/mpeg">` | 瀏覽器會依序檢查，選擇第一個自己能播放的來源。 |
| `src` | 指定該 `<source>` 的音訊檔案位置 | `src="audio.ogg"` | 和 `<source>` 搭配時，每個來源各自提供檔案位置。 |
| `type` | 告訴瀏覽器來源的 MIME type | `type="audio/mpeg"`、`type="audio/ogg"` | 建議提供，方便瀏覽器判斷是否支援；副檔名、檔案內容與 `type` 不一致會造成除錯困難。 |
| fallback 文字 | 提供不支援 `<audio>` 時的提示 | 放在 `<audio>` 內、所有 `<source>` 後 | 只有瀏覽器完全不支援 `<audio>` 時才會顯示。 |

## 來源寫法選擇

| 情境 | 建議寫法 | 使用提醒 |
| --- | --- | --- |
| 只有一個音訊檔，格式支援明確 | `<audio src="..." controls>` | 最適合初學者先掌握的寫法。 |
| 有多個格式，想讓瀏覽器自行選擇 | `<audio>` 裡放多個 `<source>` | 通常把最希望使用、支援度較好的格式放在前面。 |
| 需要顯示舊瀏覽器提示 | 在 `<audio>` 內、所有 `<source>` 後放 fallback 文字 | 若放在 `<audio>` 外面，就會變成一般頁面文字。 |

## 常見誤用

| 問題 | 不建議原因 | 較可靠做法 |
| --- | --- | --- |
| 把 `autoplay` 當成一定會播放 | `autoplay` 只是要求瀏覽器嘗試自動播放，不代表一定成功。 | 提供 `controls`，讓使用者自己開始播放。 |
| 沒有 `controls` | 頁面上可能沒有播放介面，使用者不知道如何播放。 | 內容型音訊通常加上 `controls`。 |
| MIME type 寫錯或混用 | 瀏覽器可能跳過來源，或造成除錯困難。 | 讓副檔名、檔案內容與 `type` 對應。 |
| fallback 文字放錯位置 | 放在 `<audio>` 外面時，不再是 `<audio>` 的 fallback。 | 放在 `<audio>` 裡面，通常放在所有 `<source>` 後面。 |

## 實務準則

| 準則 | 說明 |
| --- | --- |
| 內容型音訊通常要加 `controls` | 讓使用者自己控制播放。 |
| 不要依賴有聲音的 `autoplay` 一定生效 | 現代瀏覽器可能阻擋。 |
| 多格式支援使用多個 `<source>` | 讓瀏覽器自行選擇可播放來源。 |
| `type` 建議提供 | 方便瀏覽器更快判斷來源格式。 |
| fallback 文字放在 `<audio>` 裡 | 給不支援 `<audio>` 的瀏覽器顯示。 |
