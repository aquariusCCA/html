const resultsBody = document.querySelector("#support-results");
const audio = document.createElement("audio");

const checks = [
  ["audio/mpeg", "MP3 常見 MIME type"],
  ["audio/ogg", "Ogg 音訊"],
  ["audio/wav", "WAV 音訊"]
];

function labelFor(result) {
  if (result === "probably") {
    return { text: "probably，瀏覽器認為很可能可播放", level: "yes" };
  }

  if (result === "maybe") {
    return { text: "maybe，瀏覽器只能判斷可能可播放", level: "maybe" };
  }

  return { text: "空字串，瀏覽器未回報可播放", level: "no" };
}

for (const [type, note] of checks) {
  const result = labelFor(audio.canPlayType(type));
  const row = document.createElement("tr");
  row.innerHTML = `
    <td><code>${type}</code><br><span>${note}</span></td>
    <td><span class="result" data-level="${result.level}">${result.text}</span></td>
  `;
  resultsBody.append(row);
}
