const examples = {
  semantic: {
    code: `<p>第一段文字說明同一個主題，因此放在同一個段落裡。</p>
<p>第二段文字開始新的重點，所以使用新的 p 標籤。</p>`,
    html: `<p>第一段文字說明同一個主題，因此放在同一個段落裡。</p>
<p>第二段文字開始新的重點，所以使用新的 p 標籤。</p>`,
    codeSummary: "每個自然段使用一個 <p>。",
    resultSummary: "段落有清楚語意，間距交給 CSS 控制。"
  },
  breaks: {
    code: `第一段文字說明同一個主題。<br><br>
第二段文字開始新的重點。`,
    html: `第一段文字說明同一個主題。<br><br>
第二段文字開始新的重點。`,
    codeSummary: "br 只表示換行，不表示新的段落。",
    resultSummary: "畫面看似分段，但 HTML 沒有標出兩個段落。"
  },
  empty: {
    code: `<p>第一段文字說明同一個主題。</p>
<p></p>
<p>第二段文字開始新的重點。</p>`,
    html: `<p>第一段文字說明同一個主題。</p>
<p></p>
<p>第二段文字開始新的重點。</p>`,
    codeSummary: "空的 <p> 沒有內容，不應拿來排版。",
    resultSummary: "空段落只是製造視覺空白，會讓結構變得不乾淨。"
  }
};

const codeBlock = document.querySelector("#codeBlock");
const resultBox = document.querySelector("#resultBox");
const codeSummary = document.querySelector("#codeSummary");
const resultSummary = document.querySelector("#resultSummary");
const widthRange = document.querySelector("#widthRange");
const widthValue = document.querySelector("#widthValue");
const spacingRange = document.querySelector("#spacingRange");
const spacingValue = document.querySelector("#spacingValue");

function setMode(mode) {
  const example = examples[mode];
  codeBlock.textContent = example.code;
  resultBox.innerHTML = example.html;
  codeSummary.textContent = example.codeSummary;
  resultSummary.textContent = example.resultSummary;
}

function setWidth(value) {
  document.documentElement.style.setProperty("--reading-width", `${value}px`);
  widthValue.textContent = `${value}px`;
}

function setSpacing(value) {
  document.documentElement.style.setProperty("--paragraph-gap", `${value}px`);
  spacingValue.textContent = `${value}px`;
}

document.querySelectorAll('input[name="mode"]').forEach((input) => {
  input.addEventListener("change", () => setMode(input.value));
});

widthRange.addEventListener("input", () => setWidth(widthRange.value));
spacingRange.addEventListener("input", () => setSpacing(spacingRange.value));

setMode("semantic");
setWidth(widthRange.value);
setSpacing(spacingRange.value);
