const results = document.querySelector("#dom-results");

function describeParent(selector) {
  const element = document.querySelector(selector);

  if (!element || !element.parentElement) {
    return "找不到元素或父元素";
  }

  const parent = element.parentElement;
  const parentId = parent.id ? `#${parent.id}` : "";

  return `${parent.tagName.toLowerCase()}${parentId}`;
}

function describeChildren(selector) {
  const element = document.querySelector(selector);

  if (!element) {
    return "找不到元素";
  }

  const children = [...element.children].map((child) => {
    const id = child.id ? `#${child.id}` : "";
    return `${child.tagName.toLowerCase()}${id}`;
  });

  return children.length > 0 ? children.join(", ") : "沒有元素子節點";
}

const observations = [
  {
    label: "`#moved-div` 的實際父元素",
    value: describeParent("#moved-div"),
  },
  {
    label: "`#bad-p` 解析後包含的元素子節點",
    value: describeChildren("#bad-p"),
  },
  {
    label: "`#bad-h2` 的實際父元素",
    value: describeParent("#bad-h2"),
  },
  {
    label: "`#inner-link` 的實際父元素",
    value: describeParent("#inner-link"),
  },
];

results.innerHTML = observations
  .map((item) => {
    return `
      <div>
        <dt>${item.label}</dt>
        <dd>${item.value}</dd>
      </div>
    `;
  })
  .join("");

