const robotsMeta = document.querySelector('meta[name="robots"]');
const codeOutput = document.querySelector("[data-code-output]");
const indexStatus = document.querySelector("[data-index-status]");
const followStatus = document.querySelector("[data-follow-status]");
const cacheStatus = document.querySelector("[data-cache-status]");
const buttons = Array.from(document.querySelectorAll("[data-robots-value]"));

function getRobotsState(value) {
  const tokens = value.split(",").map((token) => token.trim().toLowerCase());
  const hasNone = tokens.includes("none");

  return {
    index: !(hasNone || tokens.includes("noindex")),
    follow: !(hasNone || tokens.includes("nofollow")),
    cache: !(hasNone || tokens.includes("noarchive") || tokens.includes("nocache")),
  };
}

function updateRobots(value) {
  const state = getRobotsState(value);

  robotsMeta.setAttribute("content", value);
  codeOutput.textContent = `<meta name="robots" content="${value}">`;
  indexStatus.textContent = state.index ? "允許搜尋引擎索引此頁。" : "要求搜尋引擎不要索引此頁。";
  followStatus.textContent = state.follow ? "允許搜尋引擎跟隨頁面上的連結。" : "要求搜尋引擎不要跟隨頁面上的連結。";
  cacheStatus.textContent = state.cache ? "未特別要求不要快取。" : "要求搜尋引擎不要快取頁面內容。";

  buttons.forEach((button) => {
    const isActive = button.dataset.robotsValue === value;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    updateRobots(button.dataset.robotsValue);
  });
});

updateRobots(robotsMeta.getAttribute("content"));

