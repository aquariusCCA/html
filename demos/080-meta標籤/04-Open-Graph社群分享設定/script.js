const titleValue = document.querySelector('#titleValue');
const descriptionValue = document.querySelector('#descriptionValue');
const imageValue = document.querySelector('#imageValue');
const urlValue = document.querySelector('#urlValue');
const typeValue = document.querySelector('#typeValue');
const codeSample = document.querySelector('#codeSample');
const imageSlot = document.querySelector('#imageSlot');
const domainText = document.querySelector('#domainText');
const cardTitle = document.querySelector('#cardTitle');
const cardDescription = document.querySelector('#cardDescription');
const imageState = document.querySelector('#imageState');
const urlState = document.querySelector('#urlState');

function tag(text, className) {
  return `<span class="tag ${className}">${text}</span>`;
}

function escapeAttribute(value) {
  return value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
}

function isPublicUrl(value) {
  return /^https?:\/\/[^/]+\.[^/]+/i.test(value);
}

function getDomain(value) {
  try {
    return new URL(value).hostname;
  } catch {
    return 'URL 未設定';
  }
}

function buildCode() {
  return [
    '<head>',
    '  <meta charset="UTF-8">',
    '  <title>我的精彩網頁</title>',
    '',
    `  <meta property="og:title" content="${escapeAttribute(titleValue.value)}">`,
    `  <meta property="og:description" content="${escapeAttribute(descriptionValue.value)}">`,
    `  <meta property="og:image" content="${escapeAttribute(imageValue.value)}">`,
    '  <meta property="og:image:alt" content="HTML meta 標籤教學封面圖">',
    `  <meta property="og:url" content="${escapeAttribute(urlValue.value)}">`,
    `  <meta property="og:type" content="${typeValue.value}">`,
    '  <meta property="og:site_name" content="我的網站">',
    '  <meta property="og:locale" content="zh_TW">',
    '</head>'
  ].join('\n');
}

function update() {
  const image = imageValue.value.trim();
  const url = urlValue.value.trim();
  const imageOk = isPublicUrl(image);
  const urlOk = isPublicUrl(url);

  codeSample.textContent = buildCode();
  cardTitle.textContent = titleValue.value.trim() || '未設定分享標題';
  cardDescription.textContent = descriptionValue.value.trim() || '未設定分享描述';
  domainText.textContent = urlOk ? getDomain(url) : 'URL 未設定或不是完整網址';

  imageSlot.classList.toggle('invalid', !imageOk);
  imageSlot.textContent = imageOk ? 'OG IMAGE' : '圖片可能無法被社群平台抓取';

  imageState.innerHTML = imageOk
    ? `${tag('完整 URL', 'ok')}正式網站的 og:image 應使用外部平台可存取的完整網址。`
    : `${tag('需修正', 'warn')}相對路徑或本機路徑通常無法讓社群平台抓到圖片。`;

  urlState.innerHTML = urlOk
    ? `${tag('已設定', 'ok')}og:url 可協助平台辨識這個頁面的正式代表網址。`
    : `${tag('需補齊', 'warn')}缺少完整 og:url 時，平台可能抓到不同版本或追蹤參數網址。`;
}

[titleValue, descriptionValue, imageValue, urlValue, typeValue].forEach((control) => {
  control.addEventListener('input', update);
  control.addEventListener('change', update);
});

update();
