// Source notes: notes/280-度量衡標籤/01-meter-度量衡標籤.md
// 互動觀察：調整 meter 屬性，即時更新渲染、狀態判讀與對應 HTML。

const meter = document.getElementById("liveMeter");
const stateText = document.getElementById("stateText");
const codeOut = document.getElementById("codeOut");
const scenarioLabel = document.getElementById("scenarioLabel");

const inputs = {
  value: document.getElementById("in-value"),
  min: document.getElementById("in-min"),
  max: document.getElementById("in-max"),
  low: document.getElementById("in-low"),
  high: document.getElementById("in-high"),
  optimum: document.getElementById("in-optimum"),
};

const presets = {
  battery: {
    label: "手機電量：",
    value: 50, min: 0, max: 100, low: 20, high: 80, optimum: "",
  },
  disk: {
    label: "磁碟用量：",
    value: 80, min: 0, max: 100, low: 20, high: 80, optimum: 30,
  },
};

function readNum(el) {
  if (el.value.trim() === "") return null;
  const n = Number(el.value);
  return Number.isFinite(n) ? n : null;
}

// 依 low / high / optimum 對 value 做與瀏覽器一致的狀態判讀（簡化文字版）。
function describeState(v, min, max, low, high, optimum) {
  if (v === null || min === null || max === null) return "資料不足，無法判讀";
  if (v < min || v > max) return "value 超出 min~max 範圍";

  // 是否落在偏低 / 偏高 / 中間區
  let band = "中間區";
  if (low !== null && v <= low) band = "偏低區";
  else if (high !== null && v >= high) band = "偏高區";

  if (optimum === null) {
    return `位於${band}（未設定 optimum）`;
  }

  // optimum 決定哪個方向算「好」
  let direction;
  if (low !== null && optimum <= low) direction = "越低越好";
  else if (high !== null && optimum >= high) direction = "越高越好";
  else direction = "接近中間值最好";

  return `位於${band}；optimum=${optimum} 代表此情境「${direction}」`;
}

function render() {
  const v = readNum(inputs.value);
  const min = readNum(inputs.min);
  const max = readNum(inputs.max);
  const low = readNum(inputs.low);
  const high = readNum(inputs.high);
  const optimum = readNum(inputs.optimum);

  // 套用到真實 meter 元素（null 的屬性移除）
  const apply = (attr, val) => {
    if (val === null) meter.removeAttribute(attr);
    else meter.setAttribute(attr, String(val));
  };
  apply("value", v ?? 0);
  apply("min", min);
  apply("max", max);
  apply("low", low);
  apply("high", high);
  apply("optimum", optimum);

  // 量表內文字（fallback）
  if (v !== null && max) {
    meter.textContent = `${v}/${max}`;
  } else {
    meter.textContent = String(v ?? "");
  }

  stateText.textContent = describeState(v, min, max, low, high, optimum);
  codeOut.textContent = buildCode(v, min, max, low, high, optimum);
}

function buildCode(v, min, max, low, high, optimum) {
  const parts = [];
  if (v !== null) parts.push(`value="${v}"`);
  if (min !== null) parts.push(`min="${min}"`);
  if (max !== null) parts.push(`max="${max}"`);
  if (low !== null) parts.push(`low="${low}"`);
  if (high !== null) parts.push(`high="${high}"`);
  if (optimum !== null) parts.push(`optimum="${optimum}"`);
  const inner = v !== null && max !== null ? `${v}/${max}` : (v ?? "");
  return `<meter ${parts.join(" ")}>${inner}</meter>`;
}

function applyPreset(name) {
  const p = presets[name];
  if (!p) return;
  scenarioLabel.textContent = p.label;
  inputs.value.value = p.value;
  inputs.min.value = p.min;
  inputs.max.value = p.max;
  inputs.low.value = p.low;
  inputs.high.value = p.high;
  inputs.optimum.value = p.optimum;
  render();
}

Object.values(inputs).forEach((el) => el.addEventListener("input", render));
document.querySelectorAll("[data-preset]").forEach((btn) =>
  btn.addEventListener("click", () => applyPreset(btn.dataset.preset))
);

render();
