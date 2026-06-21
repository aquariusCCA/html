const examples = {
  div: {
    code: `<div>我是一個 div，預設會單獨占一行。</div>
<div>我也是 div，會從新的一行開始。</div>`,
    html: `<div class="sample-div">我是一個 div，預設會單獨占一行。</div>
<div class="sample-div">我也是 div，會從新的一行開始。</div>`,
    codeSummary: "兩個 div 預設各自建立一個區塊。",
    resultSummary: "區塊容器會上下排列，適合包住一整塊內容。"
  },
  span: {
    code: `<p>
  請觀察
  <span>百度</span>
  <span>新浪</span>
  <span>搜狐</span>
  這些 span 如何排在同一行。
</p>`,
    html: `<p class="sample-line">請觀察
  <span class="sample-span">百度</span>
  <span class="sample-span">新浪</span>
  <span class="sample-span">搜狐</span>
  這些 span 如何排在同一行。把展示區寬度縮小時，文字仍會依可用空間自然換行。</p>`,
    codeSummary: "span 預設不會主動建立新區塊。",
    resultSummary: "行內容器會跟前後文字排在同一行；寬度不足時仍可能自然換行。"
  },
  semantic: {
    code: `<!-- 畫面可能看得出來，但語意不清楚 -->
<div>網站標題</div>
<div>第一段內容</div>
<div>第二段內容</div>

<!-- 內容有明確意義時，優先使用語意標籤 -->
<h1>網站標題</h1>
<p>第一段內容</p>
<p>第二段內容</p>`,
    html: `<div class="semantic-grid">
  <section class="semantic-card bad" aria-label="全用 div 的寫法">
    <span class="label">不建議</span>
    <div>網站標題</div>
    <div>第一段內容</div>
    <div>第二段內容</div>
  </section>
  <section class="semantic-card good" aria-label="使用語意標籤的寫法">
    <span class="label">較清楚</span>
    <h3>網站標題</h3>
    <p>第一段內容</p>
    <p>第二段內容</p>
  </section>
</div>`,
    codeSummary: "不是所有內容都應該直接包成 div。",
    resultSummary: "畫面相近時，語意標籤仍能讓 HTML 結構更清楚。"
  }
};

const codeBlock = document.querySelector("#codeBlock");
const resultBox = document.querySelector("#resultBox");
const codeSummary = document.querySelector("#codeSummary");
const resultSummary = document.querySelector("#resultSummary");
const stageWidth = document.querySelector("#stageWidth");
const stageWidthValue = document.querySelector("#stageWidthValue");

function setMode(mode) {
  const example = examples[mode];
  codeBlock.textContent = example.code;
  resultBox.innerHTML = example.html;
  codeSummary.textContent = example.codeSummary;
  resultSummary.textContent = example.resultSummary;
}

function setStageWidth(value) {
  document.documentElement.style.setProperty("--stage-width", `${value}px`);
  stageWidthValue.textContent = `${value}px`;
}

document.querySelectorAll('input[name="mode"]').forEach((input) => {
  input.addEventListener("change", () => setMode(input.value));
});

stageWidth.addEventListener("input", () => setStageWidth(stageWidth.value));

setMode("div");
setStageWidth(stageWidth.value);
