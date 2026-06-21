const scenarios = {
  features: {
    description: "商品特色是一組並列項目，項目順序不影響內容意義。",
    tag: "<ul>",
    meaning: "順序不重要",
    items: ["價格清楚", "支援行動裝置", "容易維護"],
    ordered: false
  },
  steps: {
    description: "安裝步驟有先後順序，任意交換會改變操作流程。",
    tag: "<ol>",
    meaning: "順序很重要",
    items: ["下載編輯器", "建立 HTML 檔案", "在瀏覽器中開啟"],
    ordered: true
  },
  ranking: {
    description: "排行榜的名次就是內容的一部分，第一名與第二名不能任意交換。",
    tag: "<ol>",
    meaning: "排名有意義",
    items: ["第一名：HTML 基礎", "第二名：CSS 版面", "第三名：JavaScript 入門"],
    ordered: true
  }
};

const buttons = document.querySelectorAll("[data-scenario]");
const description = document.querySelector("#scenario-description");
const tagBadge = document.querySelector("#tag-badge");
const meaningBadge = document.querySelector("#meaning-badge");
const codeOutput = document.querySelector("#code-output");
const renderOutput = document.querySelector("#render-output");

function escapeHtml(value) {
  return value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}

function renderScenario(key) {
  const scenario = scenarios[key];
  const tagName = scenario.ordered ? "ol" : "ul";
  const html = `<${tagName}>\n${scenario.items.map((item) => `  <li>${escapeHtml(item)}</li>`).join("\n")}\n</${tagName}>`;

  description.textContent = scenario.description;
  tagBadge.textContent = scenario.tag;
  meaningBadge.textContent = scenario.meaning;
  codeOutput.innerHTML = escapeHtml(html);
  renderOutput.innerHTML = html;

  buttons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.scenario === key);
  });
}

buttons.forEach((button) => {
  button.addEventListener("click", () => renderScenario(button.dataset.scenario));
});

renderScenario("features");
