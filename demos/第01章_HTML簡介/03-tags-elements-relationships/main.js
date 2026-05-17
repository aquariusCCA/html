const modes = {
  element: {
    title: "元素",
    description: "元素是由標籤與內容組成的完整結構，例如 `<p>這是一段文字。</p>`。",
    code: "<p>這是一段文字。</p>",
    highlighted: ["[data-role='sibling']"],
    related: []
  },
  "parent-child": {
    title: "父元素與子元素",
    description: "`section` 包住 `h3`、`p` 與 `img`，所以 `section` 是父元素，內部元素是子元素。",
    code: `<section>
  <h3>什麼是元素？</h3>
  <p>一個常見元素包含...</p>
  <img src="..." alt="...">
</section>`,
    highlighted: ["[data-role='parent']"],
    related: ["[data-role='child']", "[data-role='void']"]
  },
  siblings: {
    title: "兄弟元素",
    description: "`h2` 與 `p` 在同一個 `header` 裡，彼此並列，因此是兄弟元素。",
    code: `<header>
  <h2>HTML 簡介</h2>
  <p>HTML 用標籤描述...</p>
</header>`,
    highlighted: ["header [data-role='sibling']"],
    related: []
  },
  ancestor: {
    title: "祖先元素與後代元素",
    description: "`article` 包住整段示範文件，因此是內部標題、段落與圖片的祖先元素。",
    code: `<article>
  <header>...</header>
  <section>...</section>
</article>`,
    highlighted: ["#demo-document"],
    related: ["#demo-document h2", "#demo-document p", "#demo-document img"]
  },
  void: {
    title: "單標籤元素",
    description: "`img` 不需要包住文字內容，是常見的 void element。這不代表所有元素都能省略結束標籤。",
    code: '<img src="photo.jpg" alt="圖片說明">',
    highlighted: ["[data-role='void']"],
    related: []
  }
};

const modeButtons = document.querySelectorAll(".controls button");
const modeTitle = document.querySelector("#mode-title");
const modeDescription = document.querySelector("#mode-description");
const modeCode = document.querySelector("#mode-code");
const demoDocument = document.querySelector("#demo-document");

function clearHighlights() {
  demoDocument.querySelectorAll(".is-highlighted, .is-related").forEach((element) => {
    element.classList.remove("is-highlighted", "is-related");
  });
}

function applyMode(modeName) {
  const mode = modes[modeName];

  clearHighlights();
  modeTitle.textContent = mode.title;
  modeDescription.textContent = mode.description;
  modeCode.textContent = mode.code;

  mode.highlighted.forEach((selector) => {
    demoDocument.querySelectorAll(selector).forEach((element) => {
      element.classList.add("is-highlighted");
    });
  });

  mode.related.forEach((selector) => {
    demoDocument.querySelectorAll(selector).forEach((element) => {
      element.classList.add("is-related");
    });
  });
}

modeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    modeButtons.forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");
    applyMode(button.dataset.mode);
  });
});

applyMode("element");
