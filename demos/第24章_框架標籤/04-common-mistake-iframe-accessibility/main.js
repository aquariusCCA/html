const checkButton = document.querySelector("[data-check]");
const badResult = document.querySelector("#bad-result");
const goodResult = document.querySelector("#good-result");

document.querySelectorAll(".sample-link").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
  });
});

function renderList(target, messages) {
  target.innerHTML = "";

  messages.forEach((message) => {
    const item = document.createElement("li");
    item.textContent = message.text;
    item.className = message.type;
    target.append(item);
  });
}

function checkCase(scope) {
  const messages = [];
  const iframe = scope.querySelector("iframe");
  const namedFrames = new Set(
    Array.from(scope.querySelectorAll("iframe[name]")).map((frame) => frame.name)
  );

  if (!iframe.title.trim()) {
    messages.push({
      type: "issue",
      text: "缺少 title：輔助工具難以說明 iframe 內容。"
    });
  } else {
    messages.push({
      type: "pass",
      text: `title 已設定為「${iframe.title}」。`
    });
  }

  const width = Number(iframe.getAttribute("width") || 0);
  if (width > 720) {
    messages.push({
      type: "issue",
      text: `固定 width="${width}" 可能在窄螢幕造成水平溢出。`
    });
  } else if (iframe.classList.contains("responsive-frame")) {
    messages.push({
      type: "pass",
      text: "使用 CSS class 控制 iframe 尺寸，較容易做響應式調整。"
    });
  }

  scope.querySelectorAll("a[target], form[target]").forEach((element) => {
    const targetName = element.getAttribute("target");
    if (!namedFrames.has(targetName)) {
      messages.push({
        type: "issue",
        text: `target="${targetName}" 找不到同名 iframe。`
      });
    } else {
      messages.push({
        type: "pass",
        text: `target="${targetName}" 已對應到同名 iframe。`
      });
    }
  });

  return messages;
}

checkButton.addEventListener("click", () => {
  renderList(badResult, checkCase(document.querySelector('[data-case="bad"]')));
  renderList(goodResult, checkCase(document.querySelector('[data-case="good"]')));
});
