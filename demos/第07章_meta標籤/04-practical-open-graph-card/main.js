const fields = {
  title: document.querySelector('[name="title"]'),
  description: document.querySelector('[name="description"]'),
  image: document.querySelector('[name="image"]'),
  url: document.querySelector('[name="url"]'),
  type: document.querySelector('[name="type"]'),
};

const metas = {
  title: document.querySelector('meta[property="og:title"]'),
  description: document.querySelector('meta[property="og:description"]'),
  image: document.querySelector('meta[property="og:image"]'),
  url: document.querySelector('meta[property="og:url"]'),
  type: document.querySelector('meta[property="og:type"]'),
};

const preview = {
  title: document.querySelector("[data-card-title]"),
  description: document.querySelector("[data-card-description]"),
  image: document.querySelector("[data-card-image]"),
  url: document.querySelector("[data-card-url]"),
  type: document.querySelector("[data-card-type]"),
  code: document.querySelector("[data-og-code]"),
};

Object.entries(fields).forEach(([key, field]) => {
  field.value = metas[key].getAttribute("content");
  field.addEventListener("input", updateOpenGraph);
});

function updateOpenGraph() {
  const values = Object.fromEntries(
    Object.entries(fields).map(([key, field]) => [key, field.value.trim()])
  );

  Object.entries(values).forEach(([key, value]) => {
    metas[key].setAttribute("content", value);
  });

  preview.title.textContent = values.title || "未設定 og:title";
  preview.description.textContent = values.description || "未設定 og:description";
  preview.image.textContent = values.image ? `og:image: ${values.image}` : "未設定 og:image";
  preview.url.textContent = values.url || "未設定 og:url";
  preview.type.textContent = `og:type: ${values.type || "未設定"}`;
  preview.code.textContent = [
    `<meta property="og:title" content="${values.title}">`,
    `<meta property="og:description" content="${values.description}">`,
    `<meta property="og:image" content="${values.image}">`,
    `<meta property="og:url" content="${values.url}">`,
    `<meta property="og:type" content="${values.type}">`,
  ].join("\n");
}

updateOpenGraph();

