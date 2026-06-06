# robots meta 搜尋爬蟲設定

> 來源：origin/第08章_meta標籤/01-meta標籤.md / ✏️ Notes：針對搜索引擎爬蟲配置

```html
<!-- 針對搜索引擎爬蟲配置：要求不要索引此頁，也不要跟隨頁面連結。 -->
<meta name="robots" content="noindex, nofollow">
```

![robots meta 搜尋爬蟲設定值表](../../origin/第08章_meta標籤/assets/images/meta-tags-img-001-2cd6e3.png)

> 備註：各搜尋引擎支援的 robots 指令不完全相同；請以目標 crawler 的最新文件為準，例如 Google 目前已忽略 `noarchive`、`nocache`。
