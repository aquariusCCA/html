const relations = {
  div: {
    title: "目前選取：<div>",
    parent: "無",
    children: "<p> 第一段、<p> 第二段",
    ancestors: "無",
    siblings: "無",
    related: ["p1", "p2"]
  },
  p1: {
    title: "目前選取：<p> 第一段",
    parent: "<div>",
    children: "<strong>",
    ancestors: "<div>",
    siblings: "<p> 第二段",
    related: ["div", "strong", "p2"]
  },
  strong: {
    title: "目前選取：<strong>",
    parent: "<p> 第一段",
    children: "無",
    ancestors: "<p> 第一段、<div>",
    siblings: "無",
    related: ["p1", "div"]
  },
  p2: {
    title: "目前選取：<p> 第二段",
    parent: "<div>",
    children: "無",
    ancestors: "<div>",
    siblings: "<p> 第一段",
    related: ["div", "p1"]
  }
};

const nodes = document.querySelectorAll(".node");
const selectedTitle = document.getElementById("selected-title");
const parentValue = document.getElementById("parent-value");
const childrenValue = document.getElementById("children-value");
const ancestorsValue = document.getElementById("ancestors-value");
const siblingsValue = document.getElementById("siblings-value");

function selectNode(key) {
  const data = relations[key];
  selectedTitle.textContent = data.title;
  parentValue.textContent = data.parent;
  childrenValue.textContent = data.children;
  ancestorsValue.textContent = data.ancestors;
  siblingsValue.textContent = data.siblings;

  nodes.forEach((node) => {
    node.classList.toggle("active", node.dataset.node === key);
    node.classList.toggle("related", data.related.includes(node.dataset.node));
  });
}

nodes.forEach((node) => {
  node.addEventListener("click", () => selectNode(node.dataset.node));
});

selectNode("div");
