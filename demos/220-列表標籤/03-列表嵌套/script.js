const cases = {
  correct: {
    description: "內層 ul 被放在上海這個 li 裡，表示景點是上海的子項目。",
    status: "結構清楚",
    good: true,
    code: `<ul>
  <li>成都</li>
  <li>
    上海
    <ul>
      <li>外灘</li>
      <li>杜莎夫人蠟像館</li>
      <li><a href="">東方明珠</a></li>
      <li>迪士尼樂園</li>
    </ul>
  </li>
  <li>西安</li>
  <li>武漢</li>
</ul>`,
    tree: [
      ["node", "外層 ul"],
      ["node child", "li：成都"],
      ["node child", "li：上海"],
      ["node child", "上海 li 裡的子 ul：外灘、杜莎夫人蠟像館、東方明珠、迪士尼樂園"],
      ["node child", "li：西安"],
      ["node child", "li：武漢"]
    ]
  },
  sibling: {
    description: "內層 ul 直接放在外層 ul 裡，沒有被上海的 li 包住。",
    status: "ul 放錯層",
    good: false,
    code: `<ul>
  <li>上海</li>
  <ul>
    <li>外灘</li>
    <li>迪士尼樂園</li>
  </ul>
</ul>`,
    tree: [
      ["node", "外層 ul"],
      ["node child", "li：上海"],
      ["node warning", "內層 ul 成了外層 ul 的直接子元素，不是上海 li 的子內容"]
    ]
  },
  closed: {
    description: "縮排看起來像子列表，但上海的 li 已經先結束，內層 ul 不在 li 裡。",
    status: "li 過早結束",
    good: false,
    code: `<ul>
  <li>上海</li>
    <ul>
      <li>外灘</li>
    </ul>
</ul>`,
    tree: [
      ["node", "外層 ul"],
      ["node child", "li：上海 已經結束"],
      ["node warning", "縮排不能建立父子關係，標籤位置才是結構依據"]
    ]
  }
};

const buttons = document.querySelectorAll("[data-case]");
const description = document.querySelector("#case-description");
const statusBadge = document.querySelector("#status-badge");
const codeOutput = document.querySelector("#code-output");
const renderOutput = document.querySelector("#render-output");
const treeOutput = document.querySelector("#tree-output");

function escapeHtml(value) {
  return value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}

function renderCase(key) {
  const item = cases[key];

  description.textContent = item.description;
  statusBadge.textContent = item.status;
  statusBadge.classList.toggle("good", item.good);
  statusBadge.classList.toggle("bad", !item.good);
  codeOutput.innerHTML = escapeHtml(item.code);
  renderOutput.innerHTML = item.code;
  treeOutput.innerHTML = item.tree.map(([className, text]) => `<div class="${className}">${escapeHtml(text)}</div>`).join("");

  buttons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.case === key);
  });
}

buttons.forEach((button) => {
  button.addEventListener("click", () => renderCase(button.dataset.case));
});

renderCase("correct");
