const analysisBody = document.querySelector("[data-heading-analysis]");
const samples = document.querySelectorAll("[data-heading-sample]");

samples.forEach((sample) => {
  const sampleName = sample.dataset.headingSample;
  const headings = Array.from(sample.querySelectorAll("h1, h2, h3, h4, h5, h6"));
  let previousLevel = 0;

  headings.forEach((heading) => {
    const row = document.createElement("tr");
    const sampleCell = document.createElement("td");
    const tagCell = document.createElement("td");
    const tagBadge = document.createElement("span");
    const textCell = document.createElement("td");
    const resultCell = document.createElement("td");
    const level = Number(heading.tagName.slice(1));
    const warnings = [];

    if (previousLevel > 0 && level > previousLevel + 1) {
      warnings.push(`從 h${previousLevel} 跳到 h${level}，中間層級不清楚`);
    }

    if (heading.dataset.warning) {
      warnings.push(heading.dataset.warning);
    }

    sampleCell.textContent = sampleName;
    tagBadge.className = "tag-badge";
    tagBadge.textContent = heading.tagName.toLowerCase();
    tagCell.append(tagBadge);
    textCell.textContent = heading.textContent;
    resultCell.textContent = warnings.length > 0 ? warnings.join("；") : "層級接續合理";
    resultCell.className = warnings.length > 0 ? "result-warning" : "result-ok";

    row.append(sampleCell, tagCell, textCell, resultCell);
    analysisBody.append(row);
    previousLevel = level;
  });
});
