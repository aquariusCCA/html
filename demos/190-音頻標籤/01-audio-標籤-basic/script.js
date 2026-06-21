const audio = document.querySelector("#demo-audio");
const controlsToggle = document.querySelector("#toggle-controls");
const loopToggle = document.querySelector("#toggle-loop");
const autoplayToggle = document.querySelector("#toggle-autoplay");
const reloadButton = document.querySelector("#reload-example");
const codeOutput = document.querySelector("#code-output");
const noControlsNote = document.querySelector("#no-controls-note");
const behaviorNote = document.querySelector("#behavior-note");
const statusBadge = document.querySelector("#status-badge");

function updateExample() {
  audio.controls = controlsToggle.checked;
  audio.loop = loopToggle.checked;
  audio.autoplay = autoplayToggle.checked;

  noControlsNote.hidden = controlsToggle.checked;

  const attributes = ["src=\"audio.mp3\""];
  if (controlsToggle.checked) attributes.push("controls");
  if (loopToggle.checked) attributes.push("loop");
  if (autoplayToggle.checked) attributes.push("autoplay");

  codeOutput.textContent = `<audio ${attributes.join(" ")}></audio>`;

  behaviorNote.dataset.kind = "";
  if (!controlsToggle.checked) {
    statusBadge.textContent = "無控制列";
    behaviorNote.textContent = "沒有 `controls` 時，使用者通常看不到可以操作的播放介面。";
    return;
  }

  if (autoplayToggle.checked) {
    statusBadge.textContent = "可能被阻擋";
    behaviorNote.dataset.kind = "warn";
    behaviorNote.textContent = "`autoplay` 只代表嘗試自動播放；現代瀏覽器可能會阻擋有聲音的自動播放。";
    return;
  }

  if (loopToggle.checked) {
    statusBadge.textContent = "循環播放";
    behaviorNote.textContent = "`loop` 會在音訊播放結束後再次播放。";
    return;
  }

  statusBadge.textContent = "可操作";
  behaviorNote.textContent = "內容型音訊通常要加上 `controls`，讓使用者自行播放、暫停與調整音量。";
}

reloadButton.addEventListener("click", () => {
  audio.pause();
  audio.currentTime = 0;
  audio.load();
  updateExample();
});

controlsToggle.addEventListener("change", updateExample);
loopToggle.addEventListener("change", updateExample);
autoplayToggle.addEventListener("change", updateExample);

updateExample();
