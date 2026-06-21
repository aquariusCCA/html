const titleInput = document.querySelector('#titleInput');
const h1Input = document.querySelector('#h1Input');
const tabPreview = document.querySelector('#tabPreview');
const pageHeading = document.querySelector('#pageHeading');
const codeSample = document.querySelector('#codeSample');
const observation = document.querySelector('#observation');
const presetButtons = document.querySelectorAll('.preset');

function escapeHtml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;');
}

function classifyTitle(title) {
  const normalized = title.trim();

  if (normalized.length <= 2 || ['首頁', '網站', '教學'].includes(normalized)) {
    return 'generic';
  }

  const words = normalized.split(/\s+/);
  const repeatedHtml = words.filter((word) => word.toLowerCase().includes('html')).length;

  if (repeatedHtml >= 3 || normalized.length > 32) {
    return 'stuffed';
  }

  return 'clear';
}

function buildCode(title, h1) {
  return [
    '<!doctype html>',
    '<html lang="zh-Hant">',
    '<head>',
    '  <meta charset="utf-8">',
    `  <title>${escapeHtml(title)}</title>`,
    '</head>',
    '<body>',
    `  <h1>${escapeHtml(h1)}</h1>`,
    '  <p>這裡介紹我的作品與學習紀錄。</p>',
    '</body>',
    '</html>'
  ].join('\n');
}

function updateObservation(title) {
  const type = classifyTitle(title);

  if (type === 'generic') {
    observation.innerHTML = '<strong>觀察：</strong>這個 &lt;title&gt; 太籠統，分頁或書籤只看到「首頁」時，很難判斷頁面內容。';
    return;
  }

  if (type === 'stuffed') {
    observation.innerHTML = '<strong>觀察：</strong>這個 &lt;title&gt; 讀起來像關鍵字堆砌，不適合作為自然可讀的文件標題。';
    return;
  }

  observation.innerHTML = '<strong>觀察：</strong>目前的 &lt;title&gt; 清楚指出頁面主題，適合出現在分頁、書籤或搜尋結果標題附近。';
}

function syncActivePreset() {
  presetButtons.forEach((button) => {
    const isActive = button.dataset.title === titleInput.value && button.dataset.h1 === h1Input.value;
    button.classList.toggle('active', isActive);
  });
}

function updateDemo() {
  const documentTitle = titleInput.value.trim() || '未命名文件';
  const pageTitle = h1Input.value.trim() || '未命名頁面';

  document.title = documentTitle;
  tabPreview.textContent = documentTitle;
  pageHeading.textContent = pageTitle;
  codeSample.textContent = buildCode(documentTitle, pageTitle);
  updateObservation(documentTitle);
  syncActivePreset();
}

titleInput.addEventListener('input', updateDemo);
h1Input.addEventListener('input', updateDemo);

presetButtons.forEach((button) => {
  button.addEventListener('click', () => {
    titleInput.value = button.dataset.title;
    h1Input.value = button.dataset.h1;
    updateDemo();
  });
});

updateDemo();
