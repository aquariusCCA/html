const metadataList = document.querySelector("[data-metadata-list]");
const metas = Array.from(document.head.querySelectorAll("meta"));

metas.forEach((meta) => {
  const row = document.createElement("tr");
  const typeCell = document.createElement("td");
  const nameCell = document.createElement("td");
  const contentCell = document.createElement("td");

  if (meta.hasAttribute("charset")) {
    typeCell.textContent = "charset";
    nameCell.textContent = "文件字元編碼";
    contentCell.textContent = meta.getAttribute("charset");
  } else if (meta.hasAttribute("name")) {
    typeCell.textContent = "name + content";
    nameCell.textContent = meta.getAttribute("name");
    contentCell.textContent = meta.getAttribute("content") || "未設定 content";
  } else if (meta.hasAttribute("property")) {
    typeCell.textContent = "property + content";
    nameCell.textContent = meta.getAttribute("property");
    contentCell.textContent = meta.getAttribute("content") || "未設定 content";
  }

  row.append(typeCell, nameCell, contentCell);
  metadataList.append(row);
});

