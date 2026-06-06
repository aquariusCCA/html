# 第08章_meta標籤

<aside>
💡 **Questions:**

*Write it during the class*

- **Open Graph 是什麼 ?**
    
    Open Graph（OG）協議是一種標準，用來讓網頁上的內容在社交媒體平台（如 Facebook、Twitter、LinkedIn 等）分享時，顯示出更具吸引力的預覽，像是標題、描述、圖片等。
    
    ### 具體使用方法：
    
    你需要在 HTML 的 `<head>` 區塊中加入適當的 Open Graph 標籤來配置網頁的預覽數據。Open Graph 標籤使用 `property` 屬性來定義內容類型，例如標題、描述、圖片等。
    
    以下是常見的 Open Graph 標籤：
    
    1. **網頁標題：**
        
        ```html
        html
        複製程式碼
        <meta property="og:title" content="你的網頁標題">
        
        ```
        
    2. **網頁描述：**
        
        ```html
        html
        複製程式碼
        <meta property="og:description" content="你的網頁描述">
        
        ```
        
    3. **網頁 URL：**
        
        ```html
        html
        複製程式碼
        <meta property="og:url" content="https://example.com/your-page">
        
        ```
        
    4. **圖片 URL（預覽時顯示的圖片）：**
        
        ```html
        html
        複製程式碼
        <meta property="og:image" content="https://example.com/your-image.jpg">
        
        ```
        
    5. **內容類型：**
        
        ```html
        html
        複製程式碼
        <meta property="og:type" content="website">
        
        ```
        
    6. **網站名稱：**
        
        ```html
        html
        複製程式碼
        <meta property="og:site_name" content="你的網站名稱">
        
        ```
        
    7. **語言：**
        
        ```html
        html
        複製程式碼
        <meta property="og:locale" content="zh_TW">
        
        ```
        
    
    ### 一個完整的例子：
    
    ```html
    html
    複製程式碼
    <head>
      <meta property="og:title" content="我的精彩網頁">
      <meta property="og:description" content="這是一個令人驚嘆的網頁，介紹了許多有趣的內容。">
      <meta property="og:image" content="https://example.com/image.jpg">
      <meta property="og:url" content="https://example.com/my-page">
      <meta property="og:type" content="website">
      <meta property="og:site_name" content="我的網站">
      <meta property="og:locale" content="zh_TW">
    </head>
    
    ```
    
    ### 常用 Open Graph 標籤：
    
    1. **`og:title`**：分享時顯示的標題。
    2. **`og:description`**：分享時的簡短描述。
    3. **`og:image`**：用來代表頁面的圖片。
    4. **`og:url`**：當前網頁的 URL，通常設置為分享的網頁地址。
    5. **`og:type`**：內容類型，通常設置為 `"website"` 或 `"article"`，視內容而定。
    
    ### 常見的社交媒體平台支持：
    
    - **Facebook**：會利用 Open Graph 標籤生成預覽，顯示標題、描述和圖片。
    - **Twitter**：使用類似的 Twitter Cards，但也支持部分 Open Graph 標籤。
    
    這些標籤可以幫助你的內容在社交媒體平台上更具吸引力，並能更好地控制預覽效果。
    
</aside>

<aside>
💡 **Key Points:**

*Write it after the class*

</aside>

<aside>
📌 **Summary:**

*Write it after the class*

</aside>

<aside>
✏️

**Notes:**

*Write it during the class*

- 配置字符編碼
    
    ```html
    <!-- 配置字符編碼 -->
    <meta charset="UTF-8">
    ```
    
- 針對 IE 瀏覽器的一個兼容性設置
    
    ```html
    <!-- 針對 IE 瀏覽器的一個兼容性設置，總是使用最新的文檔模式進行渲染。 -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    ```
    
- 針對移動端的一個配置
    
    ```html
    <!-- 針對移動端的一個配置 -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    ```
    
- 配置網頁作者
    
    ```html
    <!-- 配置網頁作者  -->
    <meta name="author" content="kevin">
    ```
    
- 配置網頁生成工具
    
    ```html
    <!-- 配置網頁生成工具   -->
    <meta name="generator" content="Visual Studio Code">
    ```
    
- 配置定義網頁版權信息
    
    ```html
    <!-- 配置定義網頁版權信息  -->
    <meta name="copyright" content="2023-2027版權所有">
    ```
    
- 配置網頁自動刷新
    
    ```html
    <!-- 自動刷新 -->
    <meta http-equiv="refresh" content="3;url=https://www.bilibili.com/">
    ```
    
- 針對搜索引擎爬蟲配置
    
    ```html
    <!-- 針對搜索引擎爬蟲配置 -->
    <meta name="robots" content="此處可選值見下表">
    ```
    
    ![robots meta 搜尋爬蟲設定值表](./assets/images/meta-tags-img-001-2cd6e3.png)
    
- 關鍵字和描述訊息
    
    ```html
    <!-- 可以解讀為 "你要描述（meta）的內容名稱（name），內容（content）是什麼"。 -->
    <meta name="keywords" content="關鍵詞1, 關鍵詞2, 關鍵詞3">
    <meta name="description" content="這是一個描述內容">
    ```
    
    ![keywords 與 description meta 範例](./assets/images/meta-tags-img-002-d16533.png)
    
    **页面描述也就是搜索引擎显示的简介词语，**如下
    
    ![搜尋結果中的網頁描述預覽](./assets/images/meta-tags-img-003-7e6d0e.png)
    
    - **參考文章  ⇒**  [HTML基础语法（2）-网页关键词和页面描述](https://blog.csdn.net/weixin_45586870/article/details/120138274)
- 社交媒體分享配置（Open Graph）：
    
    ```jsx
    <meta property="og:title" content="網頁標題">
    <meta property="og:description" content="網頁描述">
    <meta property="og:image" content="圖片URL">
    ```
    
</aside>
