const examples = {
  topic: {
    code: `<h2>課程介紹</h2>
<p>這門課會帶你認識 HTML 的常用標籤與文件結構。</p>

<hr>

<h2>上課前準備</h2>
<p>請先安裝瀏覽器與程式碼編輯器。</p>`,
    html: `<article class="sample-doc">
  <span class="guide">適合：前後內容從課程介紹切換到準備事項。</span>
  <h3>課程介紹</h3>
  <p>這門課會帶你認識 HTML 的常用標籤與文件結構。</p>
  <hr>
  <h3>上課前準備</h3>
  <p>請先安裝瀏覽器與程式碼編輯器。</p>
</article>`,
    codeSummary: "前後內容進入不同主題時，使用 <hr> 表示主題分隔。",
    resultSummary: "水平線出現在兩個內容主題之間，協助讀者辨識段落轉換。"
  },
  decoration: {
    code: `<!-- 不建議：只是想畫標題下方的線 -->
<div class="card">
  <h2>最新消息</h2>
  <hr>
  <p>今天新增三篇文章。</p>
</div>

<!-- 建議：把視覺線條交給 CSS -->
<div class="card visual-line">
  <h2>最新消息</h2>
  <p>今天新增三篇文章。</p>
</div>`,
    html: `<article class="sample-card bad-example">
  <span class="guide">不建議：標題下方的線只是裝飾，不代表主題切換。</span>
  <h3>最新消息</h3>
  <hr>
  <p>今天新增三篇文章。</p>
</article>
<article class="sample-card good-example visual-line">
  <span class="guide">建議：HTML 保持內容結構，線條交給 CSS border。</span>
  <h3>最新消息</h3>
  <p>今天新增三篇文章。</p>
</article>`,
    codeSummary: "只是為了畫線或排版時，應該使用 CSS，而不是濫用 <hr>。",
    resultSummary: "兩種畫面都看得到線，但 CSS 版本沒有把裝飾誤寫成 HTML 語意。"
  },
  syntax: {
    code: `<!-- HTML5 常見寫法 -->
<hr>

<!-- 自閉合風格，也能在 HTML 文件中運作 -->
<hr />

<!-- 不建議：hr 是單標籤，不需要結束標籤 -->
<hr></hr>`,
    html: `<div class="syntax-list">
  <div class="syntax-item">
    <span class="guide">常見 HTML5 寫法</span>
    <span class="tag-pill">&lt;hr&gt;</span>
    <span>單標籤，不包內容。</span>
  </div>
  <div class="syntax-item">
    <span class="guide">專案若採自閉合風格，也可使用</span>
    <span class="tag-pill">&lt;hr /&gt;</span>
    <span>同樣表示水平主題分隔。</span>
  </div>
  <div class="syntax-item bad">
    <span class="guide">不建議</span>
    <span class="tag-pill">&lt;hr&gt;&lt;/hr&gt;</span>
    <span>不需要寫成成對標籤。</span>
  </div>
</div>`,
    codeSummary: "<hr> 是單標籤；<hr> 與 <hr /> 在 HTML 文件中都能運作。",
    resultSummary: "重點不是包住文字，而是在文件中放入一個主題分隔點。"
  }
};

const codeBlock = document.querySelector("#codeBlock");
const resultBox = document.querySelector("#resultBox");
const codeSummary = document.querySelector("#codeSummary");
const resultSummary = document.querySelector("#resultSummary");
const showGuides = document.querySelector("#showGuides");

function setMode(mode) {
  const example = examples[mode];
  codeBlock.textContent = example.code;
  resultBox.innerHTML = example.html;
  codeSummary.textContent = example.codeSummary;
  resultSummary.textContent = example.resultSummary;
  setGuides(showGuides.checked);
}

function setGuides(visible) {
  resultBox.classList.toggle("show-guides", visible);
}

document.querySelectorAll('input[name="mode"]').forEach((input) => {
  input.addEventListener("change", () => setMode(input.value));
});

showGuides.addEventListener("change", () => setGuides(showGuides.checked));

setMode("topic");
