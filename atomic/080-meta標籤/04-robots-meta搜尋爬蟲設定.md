---
source:
  - 'origin/080-meta標籤/01-meta標籤.md / Notes：針對搜索引擎爬蟲配置'
---

# robots meta 搜尋爬蟲設定

`robots` meta 標籤用來針對搜索引擎爬蟲配置。`content` 應填入有效的 robots 指令，可用逗號組合多個指令。

```html
<!-- 允許索引並允許跟隨頁面連結 -->
<meta name="robots" content="index,follow">
```

![robots meta 搜尋爬蟲設定值表](../../origin/080-meta標籤/assets/images/meta-tags-img-001-2cd6e3.png)

> 註：不同搜尋引擎支援的 robots 指令可能不同，請以目標搜尋引擎官方文件為準；例如 Google Search 目前不使用 `noarchive` / `nocache`。
