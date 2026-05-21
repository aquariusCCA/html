const inspectResults = document.querySelector("#inspect-results");
const realButton = document.querySelector("#real-button");
const buttonOutput = document.querySelector("#button-output");

function summarizeChildren(selector) {
  const element = document.querySelector(selector);

  if (!element) {
    return "找不到元素";
  }

  return [...element.children]
    .map((child) => child.tagName.toLowerCase())
    .join(", ");
}

const observations = [
  {
    label: "錯誤文章區塊的子元素",
    value: summarizeChildren('[data-inspect="mistake-article"]'),
  },
  {
    label: "正確文章區塊的子元素",
    value: summarizeChildren('[data-inspect="correct-article"]'),
  },
  {
    label: "假按鈕的實際元素",
    value: document.querySelector(".fake-button").tagName.toLowerCase(),
  },
  {
    label: "真按鈕的實際元素",
    value: realButton.tagName.toLowerCase(),
  },
];

inspectResults.innerHTML = observations
  .map((item) => {
    return `
      <div>
        <dt>${item.label}</dt>
        <dd>${item.value}</dd>
      </div>
    `;
  })
  .join("");

realButton.addEventListener("click", () => {
  buttonOutput.textContent = "已觸發原生 button 的 click 事件。";
});
