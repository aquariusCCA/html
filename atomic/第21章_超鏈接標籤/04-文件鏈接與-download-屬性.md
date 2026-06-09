# 文件鏈接與 download 屬性

> 來源：origin/第21章_超鏈接標籤/01-超鏈接標籤.md / ## 3.3 跳轉到文件

```html
<!-- 瀏覽器能直接打開文件 -->
<a href="./assets/images/hyperlink-tags-img-002-354aea.jpg">看圖片</a>
<a href="./assets/files/hyperlink-tags-file-002-9a18a4.mp4">看小電影</a>
<a href="./assets/files/hyperlink-tags-file-003-278402.mp3">聽音樂</a>
<a href="./assets/pdfs/hyperlink-tags-pdf-001-78621d.pdf">看 pdf 檔</a>
<hr>

<!-- 瀏覽器不能打開的文件，會自動觸發下載 -->
<a href="./assets/files/hyperlink-tags-file-004-28aaa1.zip">內部資源</a>
<hr>

<!-- 強制觸發下載 -->
<a href="./assets/pdfs/hyperlink-tags-pdf-001-78621d.pdf" download="一份PDF檔.pdf">下載 PDF 檔案</a>
```

<aside>
⚠️

**注意點 :**

- 若瀏覽器無法打開文件，則會引導用戶下載。
- 若想強制觸發下載，請使用 download 屬性，屬性值即為下載文件的名稱。
</aside>
