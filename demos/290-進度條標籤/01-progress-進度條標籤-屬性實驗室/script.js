const liveProgress = document.getElementById("liveProgress");
const inValue = document.getElementById("in-value");
const outValue = document.getElementById("out-value");
const inMax = document.getElementById("in-max");
const inIndeterminate = document.getElementById("in-indeterminate");
const ratioText = document.getElementById("ratioText");
const codeOut = document.getElementById("codeOut");
const scenarioLabel = document.getElementById("scenarioLabel");

const presets = {
  upload: { label: "上傳進度：", value: 50, max: 100 },
  download: { label: "下載進度：", value: 80, max: 100 },
};

function render() {
  const max = Number(inMax.value);
  const value = Number(inValue.value);
  const indeterminate = inIndeterminate.checked;

  // value slider 的上限跟著 max 走，方便觀察比例
  if (max > 0) {
    inValue.max = String(max);
    if (value > max) inValue.value = String(max);
  }
  outValue.textContent = inValue.value;

  if (indeterminate) {
    // 不確定進度：移除 value 屬性
    liveProgress.removeAttribute("value");
    inValue.disabled = true;
    ratioText.textContent = "不確定（正在進行，比例未知）";
  } else {
    inValue.disabled = false;
    liveProgress.value = Number(inValue.value);
    if (max > 0) liveProgress.max = max;
    const pct = max > 0 ? Math.round((Number(inValue.value) / max) * 100) : 0;
    ratioText.textContent = `${inValue.value} / ${max}（約 ${pct}%）`;
  }

  updateCode(indeterminate, inValue.value, max);
}

function updateCode(indeterminate, value, max) {
  const label = scenarioLabel.textContent.trim();
  let progressTag;
  if (indeterminate) {
    progressTag = `<progress max="${max}"></progress>`;
  } else {
    progressTag = `<progress value="${value}" max="${max}"></progress>`;
  }
  codeOut.textContent = `<span>${label}</span>\n${progressTag}`;
}

function applyPreset(name) {
  const p = presets[name];
  if (!p) return;
  scenarioLabel.textContent = p.label;
  inMax.value = String(p.max);
  inValue.max = String(p.max);
  inValue.value = String(p.value);
  inIndeterminate.checked = false;
  render();
}

inValue.addEventListener("input", render);
inMax.addEventListener("input", render);
inIndeterminate.addEventListener("change", render);

document.querySelectorAll("[data-preset]").forEach((btn) => {
  btn.addEventListener("click", () => applyPreset(btn.dataset.preset));
});

render();
