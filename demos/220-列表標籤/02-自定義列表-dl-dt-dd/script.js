const datasets = {
  terms: [
    ["HTML", ["用來描述網頁內容結構的標記語言。"]],
    ["CSS", ["用來控制網頁外觀與版面呈現的樣式語言。"]]
  ],
  specs: [
    ["螢幕尺寸", ["14 吋"]],
    ["重量", ["1.3 公斤"]],
    ["保固", ["兩年有限保固"]]
  ],
  links: [
    ["關注我們", ["新浪微博", "官方微信", "聯絡我們"]],
    ["支援服務", ["常見問題", "維修據點"]]
  ]
};

const modeDetails = {
  dl: {
    badge: "語意清楚",
    relation: "名稱 + 描述",
    explain: "dl 讓每個 dt 與後續 dd 形成名稱與描述的對應關係，適合術語、規格、FAQ 或分類描述。"
  },
  ul: {
    badge: "並列清單",
    relation: "關係變弱",
    explain: "ul 可以列出項目，但不會清楚表達哪個文字是名稱、哪個文字是描述。若內容只是並列項目才適合使用。"
  },
  p: {
    badge: "只有段落",
    relation: "缺少結構",
    explain: "p 能顯示文字，但 HTML 結構沒有描述名稱與內容之間的對應關係。"
  }
};

let currentDataset = "terms";
let currentMode = "dl";

const codeOutput = document.querySelector("#code-output");
const renderOutput = document.querySelector("#render-output");
const structureBadge = document.querySelector("#structure-badge");
const relationBadge = document.querySelector("#relation-badge");
const explainOutput = document.querySelector("#explain-output");
const datasetButtons = document.querySelectorAll("[data-dataset]");
const modeButtons = document.querySelectorAll("[data-mode]");

function escapeHtml(value) {
  return value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}

function buildDl(items) {
  return `<dl>\n${items.map(([term, details]) => `  <dt>${escapeHtml(term)}</dt>\n${details.map((detail) => `  <dd>${escapeHtml(detail)}</dd>`).join("\n")}`).join("\n\n")}\n</dl>`;
}

function buildUl(items) {
  return `<ul>\n${items.map(([term, details]) => `  <li>${escapeHtml(term)}：${details.map(escapeHtml).join("、")}</li>`).join("\n")}\n</ul>`;
}

function buildParagraphs(items) {
  return items.map(([term, details]) => `<p>${escapeHtml(term)}</p>\n<p>${details.map(escapeHtml).join("、")}</p>`).join("\n");
}

function getMarkup(items) {
  if (currentMode === "dl") return buildDl(items);
  if (currentMode === "ul") return buildUl(items);
  return buildParagraphs(items);
}

function render() {
  const items = datasets[currentDataset];
  const details = modeDetails[currentMode];
  const markup = getMarkup(items);

  codeOutput.innerHTML = escapeHtml(markup);
  renderOutput.innerHTML = markup;
  structureBadge.textContent = details.badge;
  relationBadge.textContent = details.relation;
  explainOutput.textContent = details.explain;

  datasetButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.dataset === currentDataset);
  });
  modeButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.mode === currentMode);
  });
}

datasetButtons.forEach((button) => {
  button.addEventListener("click", () => {
    currentDataset = button.dataset.dataset;
    render();
  });
});

modeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    currentMode = button.dataset.mode;
    render();
  });
});

render();
