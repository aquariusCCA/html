const analysisBody = document.querySelector("[data-analysis-body]");
const samples = document.querySelectorAll("[data-sample]");

samples.forEach((sample) => {
  const label = sample.dataset.sample;
  const sampleContent = sample.querySelector(".sample-content");
  const paragraphCount = sampleContent.querySelectorAll("p").length;
  const breakCount = sampleContent.querySelectorAll("br").length;
  const row = document.createElement("tr");
  const labelCell = document.createElement("td");
  const paragraphCell = document.createElement("td");
  const breakCell = document.createElement("td");
  const resultCell = document.createElement("td");
  const usesBreakSpacing = breakCount >= 2 && paragraphCount === 1;

  labelCell.textContent = label;
  paragraphCell.textContent = `${paragraphCount} 個`;
  breakCell.textContent = `${breakCount} 個`;
  resultCell.textContent = usesBreakSpacing
    ? "把不同段落塞在同一個 p，並用 br 模擬段落距離"
    : "每段文字都有自己的 p，結構較清楚";
  resultCell.className = usesBreakSpacing ? "result-warning" : "result-ok";

  row.append(labelCell, paragraphCell, breakCell, resultCell);
  analysisBody.append(row);
});
