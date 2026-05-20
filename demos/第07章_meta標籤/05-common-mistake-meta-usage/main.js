const locationList = document.querySelector("[data-meta-location-list]");
const metas = Array.from(document.querySelectorAll("meta"));

function getMetaLabel(meta) {
  if (meta.hasAttribute("charset")) {
    return `charset="${meta.getAttribute("charset")}"`;
  }

  if (meta.hasAttribute("name")) {
    return `name="${meta.getAttribute("name")}"`;
  }

  if (meta.hasAttribute("property")) {
    return `property="${meta.getAttribute("property")}"`;
  }

  if (meta.hasAttribute("http-equiv")) {
    return `http-equiv="${meta.getAttribute("http-equiv")}"`;
  }

  return "未命名 meta";
}

metas.forEach((meta) => {
  const row = document.createElement("tr");
  const labelCell = document.createElement("td");
  const parentCell = document.createElement("td");
  const statusCell = document.createElement("td");
  const parentName = meta.parentElement.tagName.toLowerCase();
  const isInHead = parentName === "head";

  labelCell.textContent = getMetaLabel(meta);
  parentCell.textContent = parentName;
  statusCell.textContent = isInHead ? "位置正確" : "通常應移到 head";
  statusCell.className = isInHead ? "status-ok" : "status-warn";

  row.append(labelCell, parentCell, statusCell);
  locationList.append(row);
});

