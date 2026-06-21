const blockDemo = document.querySelector("#block-demo");
const inlineDemo = document.querySelector("#inline-demo");
const blockCode = document.querySelector("#block-code");
const inlineCode = document.querySelector("#inline-code");
const blockNote = document.querySelector("#block-note");
const inlineNote = document.querySelector("#inline-note");
const spaceToggle = document.querySelector("#space-toggle");

const blockNotes = {
  auto: "width: auto 會吃滿可用水平空間，但它不是永遠等於 width: 100%。遇到 margin、padding、border 時，盒模型計算會影響實際佔用寬度。",
  fixed: "設定固定寬度後，塊級元素仍然會各自另起一行，只是內容盒不再填滿整個容器。",
  full: "width: 100% 讓內容盒等於父層寬度；如果再加 padding、border、margin，實際佔用空間可能超出直覺。"
};

const inlineNotes = {
  inline: "display: inline 的 span 會跟文字同列流動；設定 width 和 height 通常不會像 block 一樣改變主要尺寸。",
  "inline-block": "display: inline-block 仍可和文字同列，但 width、height、padding、margin 的效果更接近可控的小盒子。",
  block: "display: block 會讓 span 改成區塊排版，觀察重點是：排版可以被 CSS 改變，HTML 標籤語意仍要另外判斷。"
};

function selectedValue(name) {
  return document.querySelector(`input[name="${name}"]:checked`).value;
}

function updateDemo() {
  const blockWidth = selectedValue("block-width");
  const inlineDisplay = selectedValue("inline-display");
  const hasSpace = spaceToggle.checked;

  blockDemo.className = `render-box block-demo width-${blockWidth}${hasSpace ? " with-space" : ""}`;
  inlineDemo.className = `render-box inline-demo ${inlineDisplay}-mode${hasSpace ? " with-space" : ""}`;

  const blockCss = blockWidth === "auto" ? "width: auto;" : blockWidth === "fixed" ? "width: 260px;" : "width: 100%;";
  const spaceCss = hasSpace ? "\n  margin: 10px;\n  padding: 10px 14px;\n  border: 2px solid;" : "";
  blockCode.textContent = `<h1>標題</h1>
<p>段落文字</p>
<div>區塊內容</div>

/* 觀察中的 CSS */
h1, p, div {
  ${blockCss}${spaceCss}
}`;

  inlineCode.textContent = `<input type="text">
<span>span 補充文字</span>
<span>另一段 span</span>

/* 觀察中的 CSS */
span {
  display: ${inlineDisplay};
  width: 180px;
  height: 54px;${spaceCss}
}`;

  blockNote.textContent = blockNotes[blockWidth];
  inlineNote.textContent = inlineNotes[inlineDisplay];
}

document.querySelectorAll("input").forEach((input) => {
  input.addEventListener("change", updateDemo);
});

updateDemo();
