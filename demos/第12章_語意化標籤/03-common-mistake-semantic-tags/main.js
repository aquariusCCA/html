const inspectResults = document.querySelector("#inspect-results");

function hasHeading(element) {
  return Boolean(element.querySelector("h1, h2, h3, h4, h5, h6"));
}

function tagName(selector) {
  const element = document.querySelector(selector);
  return element ? element.tagName.toLowerCase() : "找不到元素";
}

const observations = [
  {
    label: "錯誤 section 是否有標題",
    value: hasHeading(document.querySelector('[data-check="mistake-section"]')) ? "有標題" : "沒有標題",
  },
  {
    label: "修正 section 是否有標題",
    value: hasHeading(document.querySelector('[data-check="correct-section"]')) ? "有標題" : "沒有標題",
  },
  {
    label: "錯誤卡片的外層元素",
    value: tagName('[data-check="mistake-card"]'),
  },
  {
    label: "修正卡片的外層元素",
    value: tagName('[data-check="correct-card"]'),
  },
  {
    label: "本頁主要 main 數量",
    value: `${document.querySelectorAll("main").length} 個`,
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

