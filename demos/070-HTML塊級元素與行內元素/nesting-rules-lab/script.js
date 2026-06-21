const cases = {
  "div-flow": {
    name: "div 作為通用 flow 容器",
    status: "合理",
    tone: "ok",
    note: "div 沒有特定語意，常用來包住一組 flow content。這個例子可包含文字、span、input 與另一個 div。",
    raw: `<div>
  <span>尚硅谷1</span>
  <input type="text" value="表單控制項">
  <div>尚硅谷2</div>
</div>`,
    fixed: `<div>
  <span>尚硅谷1</span>
  <input type="text" value="表單控制項">
  <div>尚硅谷2</div>
</div>`
  },
  "span-phrasing": {
    name: "span 包住 phrasing content",
    status: "合理",
    tone: "ok",
    note: "span 適合包住文字中的小片段，也可以包含其他 phrasing content，例如 strong、em、input 等。",
    raw: `<span>
  <strong>重點</strong>
  <em>補充</em>
  <input type="text" value="小元件">
</span>`,
    fixed: `<span>
  <strong>重點</strong>
  <em>補充</em>
  <input type="text" value="小元件">
</span>`
  },
  "span-div": {
    name: "span 包 div",
    status: "不適合",
    tone: "bad",
    note: "問題不只是 div 會換行，而是 span 的內容模型通常不適合包 div 這類區塊內容。應改用 div 作為外層容器。",
    raw: `<span>
  <div>這是一個區塊</div>
</span>`,
    fixed: `<div>
  <span>這是一段行內文字</span>
  <div>這是一個區塊</div>
</div>`
  },
  "heading-nesting": {
    name: "h1 包 h2",
    status: "錯誤巢狀",
    tone: "bad",
    note: "標題元素應用順序與層級表達文件結構，不應把 h2 放進 h1 裡。瀏覽器可能會自動結束前一個標題元素。",
    raw: `<h1>
  尚硅谷1
  <h2>尚硅谷2</h2>
</h1>`,
    fixed: `<h1>尚硅谷1</h1>
<h2>尚硅谷2</h2>`
  },
  "p-div": {
    name: "p 包 div",
    status: "錯誤巢狀",
    tone: "bad",
    note: "p 代表段落，適合段落內文字與 phrasing content。div 這類區塊內容應放在 p 外，瀏覽器通常會提前結束 p。",
    raw: `<p>
  <div>尚硅谷</div>
</p>`,
    fixed: `<p>這是一段段落文字。</p>

<div>
  <p>這是一個區塊中的段落。</p>
</div>`
  },
  "anchor-nesting": {
    name: "a 包 a",
    status: "錯誤巢狀",
    tone: "bad",
    note: "a 可以在某些情況下包住區塊內容，但不能包含另一個 a 或其他互動內容。卡片內若有多個可點擊目標，應拆分互動區域。",
    raw: `<a href="#card">
  外層連結
  <a href="#about">內層連結</a>
</a>`,
    fixed: `<div class="card">
  <a href="#card">外層連結文字</a>
  <a href="#about">內層連結文字</a>
</div>`
  }
};

const buttons = document.querySelectorAll(".case-button");
const nameEl = document.querySelector("#case-name");
const statusEl = document.querySelector("#case-status");
const noteEl = document.querySelector("#case-note");
const rawCode = document.querySelector("#raw-code");
const fixedCode = document.querySelector("#fixed-code");
const rawPreview = document.querySelector("#raw-preview");
const domTree = document.querySelector("#dom-tree");

function makePreviewDocument(markup) {
  return `<!doctype html>
<html lang="zh-Hant">
<head>
  <meta charset="utf-8">
  <style>
    body {
      margin: 0;
      padding: 16px;
      font: 16px/1.6 system-ui, sans-serif;
      color: #18202a;
    }
    div, p, h1, h2, span, a, input, strong, em {
      outline: 2px solid rgba(36, 95, 158, .35);
      outline-offset: 2px;
      margin: 8px;
      padding: 6px;
    }
    a { color: #245f9e; }
    input { font: inherit; }
  </style>
</head>
<body>${markup}</body>
</html>`;
}

function treeFor(node, depth = 0) {
  const indent = "  ".repeat(depth);
  if (node.nodeType === Node.TEXT_NODE) {
    const text = node.textContent.trim();
    return text ? `${indent}"${text}"` : "";
  }

  if (node.nodeType !== Node.ELEMENT_NODE) {
    return "";
  }

  const attrs = Array.from(node.attributes)
    .map((attr) => ` ${attr.name}="${attr.value}"`)
    .join("");
  const current = `${indent}<${node.tagName.toLowerCase()}${attrs}>`;
  const children = Array.from(node.childNodes)
    .map((child) => treeFor(child, depth + 1))
    .filter(Boolean);

  if (!children.length) {
    return current;
  }

  return [current, ...children].join("\n");
}

function parsedTree(markup) {
  const doc = new DOMParser().parseFromString(makePreviewDocument(markup), "text/html");
  const children = Array.from(doc.body.childNodes)
    .map((child) => treeFor(child, 0))
    .filter(Boolean);
  return children.join("\n") || "(body 內沒有可顯示節點)";
}

function selectCase(caseId) {
  const item = cases[caseId];
  buttons.forEach((button) => {
    button.classList.toggle("active", button.dataset.case === caseId);
  });

  nameEl.textContent = item.name;
  statusEl.textContent = item.status;
  statusEl.className = `status ${item.tone}`;
  noteEl.textContent = item.note;
  rawCode.textContent = item.raw;
  fixedCode.textContent = item.fixed;
  rawPreview.srcdoc = makePreviewDocument(item.raw);
  domTree.textContent = parsedTree(item.raw);
}

buttons.forEach((button) => {
  button.addEventListener("click", () => selectCase(button.dataset.case));
});

selectCase("div-flow");
