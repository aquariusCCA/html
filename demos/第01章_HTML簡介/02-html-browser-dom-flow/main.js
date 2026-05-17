const stages = {
  source: {
    title: "HTML 原始碼",
    description: "HTML 檔案本身是一份文字檔，裡面使用標籤描述內容與結構。",
    code: `<main>
  <h1>HTML 簡介</h1>
  <p>HTML 描述網頁內容與結構。</p>
</main>`,
    preview: `<h3>HTML 簡介</h3>
<p>HTML 描述網頁內容與結構。</p>`,
    domView: false
  },
  parse: {
    title: "瀏覽器解析 HTML",
    description: "瀏覽器讀取標籤與內容，判斷哪些文字是標題、哪些文字是段落。",
    code: `讀取 <main>
  找到 <h1> 與文字內容
  找到 <p> 與文字內容
結束 </main>`,
    preview: `<h3><mark>HTML 簡介</mark></h3>
<p><mark>HTML 描述網頁內容與結構。</mark></p>`,
    domView: false
  },
  dom: {
    title: "建立 DOM 樹",
    description: "DOM 是瀏覽器根據 HTML 建立出的物件模型，CSS 與 JavaScript 多數情況會基於 DOM 工作。",
    code: `document
└─ html
   └─ body
      └─ main
         ├─ h1
         └─ p`,
    preview: `<p>document</p>
<p>&nbsp;&nbsp;└─ html</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;└─ body</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─ main</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├─ h1</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─ p</p>`,
    domView: true
  },
  render: {
    title: "顯示成網頁",
    description: "瀏覽器套用 CSS 樣式並執行 JavaScript 後，使用者看到最後的 Web 頁面。",
    code: `HTML 描述結構
+ CSS 控制樣式
+ JavaScript 處理互動
= 使用者看到的網頁`,
    preview: `<h3>HTML 簡介</h3>
<p>HTML 描述網頁內容與結構。</p>
<button type="button">可以互動的按鈕</button>`,
    domView: false
  }
};

const buttons = document.querySelectorAll(".step");
const title = document.querySelector("#stage-title");
const description = document.querySelector("#stage-description");
const code = document.querySelector("#stage-code code");
const preview = document.querySelector("#render-preview");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const stage = stages[button.dataset.step];

    buttons.forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");

    title.textContent = stage.title;
    description.textContent = stage.description;
    code.textContent = stage.code;
    preview.innerHTML = stage.preview;
    preview.classList.toggle("is-dom-view", stage.domView);
  });
});
