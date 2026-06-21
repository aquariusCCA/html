const scenarios = {
  complete: {
    title: "完整寫法",
    badge: "建議",
    tone: "good",
    src: "assets/portrait.jpg",
    alt: "穿黑色西裝的男子在典禮背景前揮手",
    titleAttr: "活動現場照片",
    caption: "圖片正常載入時，alt 不會顯示在畫面上，但仍提供給輔助科技與圖片失敗時使用。",
    output: "穿黑色西裝的男子在典禮背景前揮手",
    judgement: "內容圖片應該用具體 alt 說明圖片傳達的資訊；title 只能補充提示，不能取代 alt。",
    height: ""
  },
  "missing-alt": {
    title: "缺少 alt",
    badge: "錯誤",
    tone: "danger",
    src: "assets/portrait.jpg",
    alt: null,
    titleAttr: "活動現場照片",
    caption: "圖片看起來正常，但缺少 alt 會讓輔助科技少掉必要資訊。",
    output: "沒有 alt 屬性",
    judgement: "只要圖片承載內容，就應該寫 alt。缺少 alt 不是空 alt，兩者語意不同。",
    height: ""
  },
  "vague-alt": {
    title: "alt 太籠統",
    badge: "需修正",
    tone: "warn",
    src: "assets/portrait.jpg",
    alt: "圖片",
    titleAttr: "活動現場照片",
    caption: "泛用文字無法補上圖片真正傳達的內容。",
    output: "圖片",
    judgement: "alt 應描述圖片的資訊，而不是只寫「圖片」「照片」這類沒有內容的字。",
    height: ""
  },
  decorative: {
    title: "裝飾圖片",
    badge: "可用空 alt",
    tone: "good",
    src: "assets/portrait.jpg",
    alt: "",
    titleAttr: "",
    caption: "若圖片只是裝飾，不提供額外資訊，可使用 alt=\"\" 讓輔助科技略過。",
    output: "空字串，輔助科技通常略過此圖",
    judgement: "空 alt 適合純裝飾圖片。若圖片本身有內容，就不應該用空 alt。",
    height: ""
  },
  "title-only": {
    title: "只寫 title",
    badge: "錯誤",
    tone: "danger",
    src: "assets/portrait.jpg",
    alt: null,
    titleAttr: "活動現場照片",
    caption: "title 可能在滑鼠停留時出現，但不能替代 alt 的可及性用途。",
    output: "沒有 alt 屬性，只剩 title",
    judgement: "title 是補充提示，不是替代文字。需要替代文字時仍要寫 alt。",
    height: ""
  },
  "distorted-size": {
    title: "寬高比例錯誤",
    badge: "需修正",
    tone: "warn",
    src: "assets/portrait.jpg",
    alt: "穿黑色西裝的男子在典禮背景前揮手",
    titleAttr: "",
    caption: "同時指定不合比例的 width 與 height，會讓圖片被壓扁或拉伸。",
    output: "穿黑色西裝的男子在典禮背景前揮手",
    judgement: "若只想等比例縮放，通常指定 width 並讓 height 自動計算即可。",
    height: "150"
  }
};

const scenarioSelect = document.querySelector("#scenarioSelect");
const scenarioTitle = document.querySelector("#scenarioTitle");
const statusBadge = document.querySelector("#statusBadge");
const imageStage = document.querySelector("#imageStage");
const demoImage = document.querySelector("#demoImage");
const figureCaption = document.querySelector("#figureCaption");
const widthRange = document.querySelector("#widthRange");
const widthValue = document.querySelector("#widthValue");
const codeBlock = document.querySelector("#codeBlock");
const altOutput = document.querySelector("#altOutput");
const judgement = document.querySelector("#judgement");
const insights = document.querySelectorAll(".insight");

function buildCode(scenario, width) {
  const parts = [`src="${scenario.src}"`];
  if (scenario.alt !== null) {
    parts.push(`alt="${scenario.alt}"`);
  }
  if (scenario.titleAttr) {
    parts.push(`title="${scenario.titleAttr}"`);
  }
  parts.push(`width="${width}"`);
  if (scenario.height) {
    parts.push(`height="${scenario.height}"`);
  }
  return `<img ${parts.join(" ")}>`;
}

function applyTone(tone) {
  statusBadge.className = `status-badge ${tone === "good" ? "" : tone}`.trim();
  insights.forEach((insight) => {
    insight.classList.remove("warn", "danger");
    if (tone !== "good") {
      insight.classList.add(tone);
    }
  });
}

function renderScenario() {
  const scenario = scenarios[scenarioSelect.value];
  const width = widthRange.value;

  scenarioTitle.textContent = scenario.title;
  statusBadge.textContent = scenario.badge;
  applyTone(scenario.tone);

  demoImage.src = scenario.src;
  demoImage.width = Number(width);
  demoImage.removeAttribute("height");
  demoImage.removeAttribute("alt");
  demoImage.removeAttribute("title");

  if (scenario.alt !== null) {
    demoImage.alt = scenario.alt;
  }
  if (scenario.titleAttr) {
    demoImage.title = scenario.titleAttr;
  }
  if (scenario.height) {
    demoImage.height = Number(scenario.height);
  }

  imageStage.classList.toggle("distorted", Boolean(scenario.height));
  figureCaption.textContent = scenario.caption;
  widthValue.textContent = `${width}px`;
  codeBlock.textContent = buildCode(scenario, width);
  altOutput.textContent = scenario.output;
  judgement.textContent = scenario.judgement;
}

scenarioSelect.addEventListener("change", renderScenario);
widthRange.addEventListener("input", renderScenario);
renderScenario();
