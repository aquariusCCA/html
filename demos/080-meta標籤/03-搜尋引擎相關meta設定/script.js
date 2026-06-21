const robotsValue = document.querySelector('#robotsValue');
const descriptionValue = document.querySelector('#descriptionValue');
const keywordsValue = document.querySelector('#keywordsValue');
const codeSample = document.querySelector('#codeSample');
const resultCard = document.querySelector('#resultCard');
const snippetText = document.querySelector('#snippetText');
const snippetHint = document.querySelector('#snippetHint');
const indexState = document.querySelector('#indexState');
const followState = document.querySelector('#followState');
const keywordsState = document.querySelector('#keywordsState');

function tag(text, className) {
  return `<span class="tag ${className}">${text}</span>`;
}

function escapeAttribute(value) {
  return value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
}

function buildCode() {
  return [
    '<head>',
    '  <meta charset="UTF-8">',
    '  <title>HTML meta 標籤教學</title>',
    `  <meta name="description" content="${escapeAttribute(descriptionValue.value)}">`,
    `  <meta name="keywords" content="${escapeAttribute(keywordsValue.value)}">`,
    `  <meta name="robots" content="${robotsValue.value}">`,
    '</head>'
  ].join('\n');
}

function update() {
  const robots = robotsValue.value;
  const noindex = robots.includes('noindex');
  const nofollow = robots.includes('nofollow');
  const description = descriptionValue.value.trim();
  const keywords = keywordsValue.value.split(',').map((item) => item.trim()).filter(Boolean);

  codeSample.textContent = buildCode();
  resultCard.classList.toggle('blocked', noindex);
  snippetText.textContent = description || '沒有提供 description 時，搜尋引擎可能自行從頁面正文挑選片段。';
  snippetHint.textContent = noindex
    ? 'robots 設為 noindex 時，這張搜尋結果卡片代表「不希望出現在搜尋結果」的狀態。'
    : 'description 是摘要候選來源，不保證一定會被搜尋引擎原樣採用。';

  indexState.innerHTML = noindex
    ? `${tag('noindex', 'warn')}提供不要索引此頁面的訊號；前提是爬蟲能讀到這份 HTML。`
    : `${tag('index', 'ok')}允許索引，通常也是一般頁面的預設行為。`;

  followState.innerHTML = nofollow
    ? `${tag('nofollow', 'warn')}提供不要追蹤此頁連結的訊號。`
    : `${tag('follow', 'ok')}允許追蹤頁面中的連結，通常也是預設行為。`;

  keywordsState.innerHTML = keywords.length > 8
    ? `${tag('過量', 'note')}目前有 ${keywords.length} 個 keywords。大量堆疊不等於排名提升。`
    : `${tag('metadata', 'note')}目前有 ${keywords.length} 個 keywords。現代 SEO 不應依賴它提升排名。`;
}

[robotsValue, descriptionValue, keywordsValue].forEach((control) => {
  control.addEventListener('input', update);
  control.addEventListener('change', update);
});

update();
