const tinyPngDataUrl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAANElEQVR42mNkoBAwUqifgYoABgaG/6kMDIwMDEgNDAwM/4eKGRgYGCgGJ4ZGRkYGBgAASucEGdoz9CcAAAAASUVORK5CYII=";

const formats = {
  jpg: {
    name: "JPG / JPEG",
    badge: "照片",
    summary: "適合照片與色彩連續的圖片，檔案通常較小，但不支援透明。",
    compression: "有損壓縮",
    transparency: "不支援",
    animation: "不支援",
    code: '<img src="product-photo.jpg" alt="商品照片">',
    image: "assets/portrait.jpg",
    caption: "照片類型的圖片通常優先考慮 JPG 或 WebP。"
  },
  png: {
    name: "PNG",
    badge: "透明",
    summary: "適合 Logo、圖示、截圖與需要透明背景的圖片，常比 JPG 大。",
    compression: "無損壓縮",
    transparency: "支援",
    animation: "通常不使用",
    code: '<img src="logo.png" alt="品牌標誌">',
    image: "assets/img-attributes.png",
    caption: "表格、介面截圖、Logo 與透明圖常適合使用 PNG。"
  },
  bmp: {
    name: "BMP",
    badge: "少用",
    summary: "檔案通常很大，不適合網頁傳輸，實務上多轉成 JPG、PNG 或 WebP。",
    compression: "通常未壓縮",
    transparency: "不常用",
    animation: "不支援",
    code: '<!-- 不建議直接在網頁使用大型 BMP -->\n<img src="scan.bmp" alt="掃描圖片">',
    image: "assets/portrait.jpg",
    caption: "BMP 在網頁中通常不是好的發布格式。"
  },
  gif: {
    name: "GIF",
    badge: "動畫",
    summary: "支援簡單動畫，但色彩有限；複雜動畫常改用影片或動畫 WebP。",
    compression: "無損但色彩有限",
    transparency: "支援單色透明",
    animation: "支援",
    code: '<img src="loading.gif" alt="載入中">',
    image: "assets/portrait.jpg",
    caption: "GIF 適合簡單動畫，不適合高品質照片。"
  },
  webp: {
    name: "WebP",
    badge: "現代",
    summary: "WebP 可支援有損、無損、透明與動畫，常用於網頁圖片最佳化。",
    compression: "有損或無損",
    transparency: "支援",
    animation: "支援",
    code: '<picture>\n  <source srcset="banner.webp" type="image/webp">\n  <img src="banner.jpg" alt="活動橫幅">\n</picture>',
    image: "assets/portrait.jpg",
    caption: "需要相容性時，可用 picture 提供 WebP 與 JPG/PNG fallback。"
  },
  base64: {
    name: "Base64",
    badge: "內嵌",
    summary: "Base64 不是圖片格式，而是把圖片資料寫進 HTML 或 CSS 的編碼方式。",
    compression: "依原圖而定",
    transparency: "依原圖而定",
    animation: "依原圖而定",
    code: '<img\n  src="data:image/png;base64,..."\n  alt="小型圖示">',
    image: tinyPngDataUrl,
    caption: "Base64 適合很小、很少變動的內嵌圖示；一般圖片不建議這樣放。"
  }
};

const formatSelect = document.querySelector("#formatSelect");
const formatName = document.querySelector("#formatName");
const formatBadge = document.querySelector("#formatBadge");
const formatSummary = document.querySelector("#formatSummary");
const compressionValue = document.querySelector("#compressionValue");
const transparencyValue = document.querySelector("#transparencyValue");
const animationValue = document.querySelector("#animationValue");
const codeBlock = document.querySelector("#codeBlock");
const previewImage = document.querySelector("#previewImage");
const previewCaption = document.querySelector("#previewCaption");
const needGrid = document.querySelector("#needGrid");
const recommendation = document.querySelector("#recommendation");

function renderFormat() {
  const format = formats[formatSelect.value];
  formatName.textContent = format.name;
  formatBadge.textContent = format.badge;
  formatSummary.textContent = format.summary;
  compressionValue.textContent = format.compression;
  transparencyValue.textContent = format.transparency;
  animationValue.textContent = format.animation;
  codeBlock.textContent = format.code;
  previewImage.src = format.image;
  previewCaption.textContent = format.caption;
}

function selectedNeeds() {
  return [...needGrid.querySelectorAll("input:checked")].map((input) => input.value);
}

function renderRecommendation() {
  const needs = selectedNeeds();
  let text = "建議：JPG；若能使用現代格式，可再評估 WebP。";

  if (needs.includes("small-inline")) {
    text = "建議：小型圖示可評估 Base64，但一般圖片仍應使用獨立檔案。";
  }
  if (needs.includes("transparent")) {
    text = "建議：PNG；若需要更好的網頁壓縮，可評估 WebP。";
  }
  if (needs.includes("animation")) {
    text = "建議：簡單動畫可用 GIF，現代網頁可評估動畫 WebP 或影片。";
  }
  if (needs.includes("photo") && needs.includes("modern")) {
    text = "建議：WebP 搭配 JPG fallback，兼顧壓縮與相容性。";
  }
  if (needs.includes("transparent") && needs.includes("modern")) {
    text = "建議：WebP 搭配 PNG fallback，兼顧透明背景與相容性。";
  }

  recommendation.textContent = text;
}

formatSelect.addEventListener("change", renderFormat);
needGrid.addEventListener("change", renderRecommendation);
renderFormat();
renderRecommendation();
