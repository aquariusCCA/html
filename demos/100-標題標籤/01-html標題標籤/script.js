const scenarios = {
  structured: {
    html: [
      '<h1>HTML 入門</h1>',
      '<h2>HTML 是什麼</h2>',
      '<p>HTML 是用來描述網頁內容結構的標記語言。</p>',
      '<h2>常見 HTML 標籤</h2>',
      '<h3>標題標籤</h3>',
      '<p>標題標籤用來表示文章或段落的標題層級。</p>',
      '<h3>段落標籤</h3>',
      '<p>段落標籤用來表示一段普通文字內容。</p>'
    ],
    headings: [
      { level: 1, text: 'HTML 入門' },
      { level: 2, text: 'HTML 是什麼' },
      { level: 2, text: '常見 HTML 標籤' },
      { level: 3, text: '標題標籤' },
      { level: 3, text: '段落標籤' }
    ],
    observation: '這組寫法讓讀者能從標題看出文章主題、主要段落與次層內容。標題層級依內容關係遞進，文件大綱清楚。',
    state: 'good'
  },
  sizeOnly: {
    html: [
      '<h1>這段文字想要變大</h1>',
      '<p>但它其實不是頁面主標題。</p>',
      '<h2>HTML 是什麼</h2>',
      '<p>HTML 是用來描述網頁內容結構的標記語言。</p>'
    ],
    headings: [
      { level: 1, text: '這段文字想要變大' },
      { level: 2, text: 'HTML 是什麼' }
    ],
    observation: '這裡的 h1 被拿來控制視覺大小，但它會被解讀成最高層級標題。若只是要變大，應該用 CSS 調整外觀。',
    state: 'error',
    noticeIndex: 0
  },
  skipped: {
    html: [
      '<h1>文章標題</h1>',
      '<h4>第一個小節</h4>',
      '<p>這段內容在畫面上可能看得懂，但文件層級中間缺少 h2 和 h3。</p>'
    ],
    headings: [
      { level: 1, text: '文章標題' },
      { level: 4, text: '第一個小節', warning: true }
    ],
    observation: '從 h1 直接跳到 h4，會讓文件大綱像是少了中間層級。一般情況應依結構從 h1 到 h2，再到 h3 往下安排。',
    state: 'warning'
  }
};

const articlePreview = document.querySelector('#articlePreview');
const outlinePreview = document.querySelector('#outlinePreview');
const codeSample = document.querySelector('#codeSample');
const observation = document.querySelector('#observation');
const scenarioInputs = document.querySelectorAll('input[name="scenario"]');

function renderArticle(scenario) {
  articlePreview.innerHTML = scenario.html.join('\n');

  if (typeof scenario.noticeIndex === 'number') {
    const headings = articlePreview.querySelectorAll('h1, h2, h3, h4, h5, h6');
    headings[scenario.noticeIndex]?.classList.add('notice-heading');
  }
}

function renderOutline(scenario) {
  outlinePreview.innerHTML = '';

  scenario.headings.forEach((heading) => {
    const item = document.createElement('li');
    item.className = `level-${heading.level}`;
    item.textContent = `h${heading.level} ${heading.text}`;

    if (heading.warning) {
      item.classList.add('warning');
    }

    outlinePreview.append(item);
  });
}

function renderCode(scenario) {
  codeSample.textContent = scenario.html.join('\n');
}

function renderObservation(scenario) {
  observation.className = `observation ${scenario.state === 'good' ? '' : scenario.state}`.trim();
  observation.textContent = scenario.observation;
}

function updateDemo() {
  const selected = document.querySelector('input[name="scenario"]:checked')?.value || 'structured';
  const scenario = scenarios[selected];

  renderArticle(scenario);
  renderOutline(scenario);
  renderCode(scenario);
  renderObservation(scenario);
}

scenarioInputs.forEach((input) => {
  input.addEventListener('change', updateDemo);
});

updateDemo();
