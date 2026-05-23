const inspectionItems = document.querySelectorAll('.inspection');

inspectionItems.forEach((item) => {
  const targetSelector = item.dataset.target;
  const list = document.querySelector(targetSelector);
  const directChildren = Array.from(list.children).map((child) => child.tagName.toLowerCase());

  item.textContent = `父層列表的直接子元素：${directChildren.join(', ')}`;
});

