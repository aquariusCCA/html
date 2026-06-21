const browsers = {
  chrome: {
    name: "Chrome",
    engine: "常見渲染引擎：Blink",
    note: "Blink 是 Chromium 使用的渲染引擎。版本、平台與功能支援仍會影響實際呈現。"
  },
  edge: {
    name: "Edge",
    engine: "常見渲染引擎：Blink",
    note: "現代 Edge 基於 Chromium。舊版 Edge 與 IE 則屬於歷史相容脈絡。"
  },
  firefox: {
    name: "Firefox",
    engine: "常見渲染引擎：Gecko",
    note: "Gecko 是 Mozilla 開發、Firefox 使用的渲染引擎。"
  },
  safari: {
    name: "Safari",
    engine: "常見渲染引擎：WebKit",
    note: "Safari 主要使用 WebKit。行動平台上的限制也會影響實作細節。"
  },
  opera: {
    name: "Opera",
    engine: "常見渲染引擎：Blink",
    note: "現代 Opera 也屬於 Chromium / Blink 生態。"
  }
};

const buttons = document.querySelectorAll(".browser");

function selectBrowser(key) {
  const data = browsers[key];
  document.getElementById("browser-name").textContent = data.name;
  document.getElementById("engine-name").textContent = data.engine;
  document.getElementById("engine-note").textContent = data.note;
  buttons.forEach((button) => button.classList.toggle("active", button.dataset.browser === key));
}

buttons.forEach((button) => {
  button.addEventListener("click", () => selectBrowser(button.dataset.browser));
});

selectBrowser("chrome");
