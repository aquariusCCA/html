const projectFiles = new Set([
  "project/index.html",
  "project/images/logo.png",
  "project/pages/about.html"
]);

const recommendations = {
  "index.html": "images/logo.png",
  "pages/about.html": "../images/logo.png"
};

const fileButtons = document.querySelectorAll(".file-button");
const pathChoice = document.querySelector("#pathChoice");
const treeStatus = document.querySelector("#treeStatus");
const htmlSnippet = document.querySelector("#htmlSnippet");
const resultCard = document.querySelector("#resultCard");
const resultBadge = document.querySelector("#resultBadge");
const previewImage = document.querySelector("#previewImage");
const resolvedPath = document.querySelector("#resolvedPath");
const recommendedPath = document.querySelector("#recommendedPath");
const steps = document.querySelector("#steps");

let currentFile = "index.html";

function normalizePath(parts) {
  const stack = [];
  parts.forEach((part) => {
    if (!part || part === ".") return;
    if (part === "..") {
      stack.pop();
      return;
    }
    stack.push(part);
  });
  return stack.join("/");
}

function resolveRelativePath(htmlFile, relativePath) {
  const htmlParts = ["project", ...htmlFile.split("/")];
  htmlParts.pop();
  return normalizePath([...htmlParts, ...relativePath.split("/")]);
}

function renderSteps(htmlFile, path, resolved, found) {
  const startFolder = htmlFile.includes("/") ? "project/pages/" : "project/";
  const pathParts = path.split("/");
  const items = [
    `從目前 HTML 所在資料夾出發：${startFolder}`,
    `依序處理路徑片段：${pathParts.join(" → ")}`,
    `最後指向：${resolved}`,
    found ? "專案中有這個檔案，所以圖片可以顯示。" : "專案中沒有這個檔案，所以圖片會載入失敗。"
  ];

  steps.replaceChildren(
    ...items.map((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      return li;
    })
  );
}

function updateDemo() {
  const selectedPath = pathChoice.value;
  const resolved = resolveRelativePath(currentFile, selectedPath);
  const found = projectFiles.has(resolved);
  const recommendation = recommendations[currentFile];

  treeStatus.textContent = `目前：${currentFile}`;
  htmlSnippet.textContent = `<img src="${selectedPath}" alt="網站標誌">`;
  resolvedPath.textContent = resolved;
  recommendedPath.textContent = recommendation;
  resultBadge.textContent = found ? "找到圖片" : "找不到圖片";
  resultCard.classList.toggle("missing", !found);
  previewImage.alt = found ? "網站標誌預覽" : "圖片載入失敗示意";

  renderSteps(currentFile, selectedPath, resolved, found);
}

fileButtons.forEach((button) => {
  button.addEventListener("click", () => {
    currentFile = button.dataset.file;
    fileButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    updateDemo();
  });
});

pathChoice.addEventListener("change", updateDemo);
updateDemo();
