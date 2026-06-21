const examples = {
  address: {
    code: `台北市中正區<br>
重慶南路一段 122 號<br>
3 樓`,
    html: `<p class="address">台北市中正區<br>
重慶南路一段 122 號<br>
3 樓</p>`,
    codeSummary: "地址的每一行都有內容意義，適合用 <br> 固定分行。",
    resultSummary: "同一筆地址資料依指定位置換到下一行。"
  },
  poem: {
    code: `風吹過窗邊<br>
燈光落在書頁<br>
夜晚慢慢安靜`,
    html: `<p class="poem">風吹過窗邊<br>
燈光落在書頁<br>
夜晚慢慢安靜</p>`,
    codeSummary: "短句或詩句的行距節奏也是內容的一部分。",
    resultSummary: "每一行保留原本的閱讀節奏，不受容器自動換行影響。"
  },
  paragraphs: {
    code: `<!-- 不建議：兩個段落被寫成同一段文字 -->
這是第一段文字。<br><br>
這是第二段文字。

<!-- 建議：兩個段落使用兩個 p -->
<p>這是第一段文字。</p>
<p>這是第二段文字。</p>`,
    html: `<div class="sample-card">
  <span class="note-label">不建議：br 只是在同一段裡換行</span>
  這是第一段文字。<br><br>
  這是第二段文字。
</div>
<div class="sample-card">
  <span class="note-label">建議：p 表示真正的段落</span>
  <p>這是第一段文字。</p>
  <p>這是第二段文字。</p>
</div>`,
    codeSummary: "br 不代表新的段落，段落語意應交給 <p>。",
    resultSummary: "畫面可能都能分開，但只有 <p> 清楚標出段落結構。"
  },
  spacing: {
    code: `<!-- 不建議：用 br 撐開標題和內容 -->
<h3>文章標題</h3>
<br>
<br>
<p>文章內容...</p>

<!-- 建議：用 CSS 控制視覺距離 -->
<h3>文章標題</h3>
<p>文章內容...</p>

h3 {
  margin-bottom: 24px;
}`,
    html: `<div class="sample-card bad-space">
  <span class="note-label">不建議：把排版距離寫進 HTML</span>
  <h3>文章標題</h3>
  <br>
  <br>
  <p>文章內容...</p>
</div>
<div class="sample-card good-space">
  <span class="note-label">建議：結構留給 HTML，距離交給 CSS</span>
  <h3>文章標題</h3>
  <p>文章內容...</p>
</div>`,
    codeSummary: "連續 <br> 不是排版工具；視覺間距應使用 CSS。",
    resultSummary: "兩者都能拉開距離，但 CSS 版本的 HTML 結構更乾淨。"
  }
};

const codeBlock = document.querySelector("#codeBlock");
const resultBox = document.querySelector("#resultBox");
const codeSummary = document.querySelector("#codeSummary");
const resultSummary = document.querySelector("#resultSummary");
const widthRange = document.querySelector("#widthRange");
const widthValue = document.querySelector("#widthValue");

function setMode(mode) {
  const example = examples[mode];
  codeBlock.textContent = example.code;
  resultBox.innerHTML = example.html;
  codeSummary.textContent = example.codeSummary;
  resultSummary.textContent = example.resultSummary;
}

function setWidth(value) {
  document.documentElement.style.setProperty("--preview-width", `${value}px`);
  widthValue.textContent = `${value}px`;
}

document.querySelectorAll('input[name="mode"]').forEach((input) => {
  input.addEventListener("change", () => setMode(input.value));
});

widthRange.addEventListener("input", () => setWidth(widthRange.value));

setMode("address");
setWidth(widthRange.value);
