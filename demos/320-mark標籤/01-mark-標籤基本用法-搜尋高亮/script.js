// Source notes: notes/320-mark標籤/01-mark-標籤基本用法.md
// 示範「搜尋命中片段 → <mark>」：輸入關鍵字後，把命中的文字包成 <mark> 高亮。
const input = document.getElementById('keyword');
const content = document.getElementById('content');
const status = document.getElementById('status');
const htmlView = document.getElementById('html-view');

// 保留原始段落文字，作為每次重新高亮的基準。
const paragraphs = Array.from(content.querySelectorAll('p')).map((p) => p.textContent);

function escapeHtml(text) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function escapeRegExp(text) {
  return text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function render() {
  const keyword = input.value.trim();

  if (keyword === '') {
    content.innerHTML = paragraphs.map((t) => '<p>' + escapeHtml(t) + '</p>').join('');
    status.textContent = '尚未輸入關鍵字。';
    htmlView.textContent = '（輸入關鍵字後，這裡會顯示含 <mark> 的 HTML）';
    return;
  }

  const pattern = new RegExp(escapeRegExp(keyword), 'gi');
  let hitCount = 0;

  const highlighted = paragraphs.map((text) => {
    // 先逐段轉義，再以 <mark> 包住命中片段，避免破壞 HTML。
    const safe = escapeHtml(text);
    return safe.replace(pattern, (match) => {
      hitCount += 1;
      return '<mark>' + match + '</mark>';
    });
  });

  content.innerHTML = highlighted.map((t) => '<p>' + t + '</p>').join('');
  status.textContent = hitCount > 0
    ? '命中 ' + hitCount + ' 處，已用 <mark> 標出。'
    : '沒有命中「' + keyword + '」。';

  // 顯示第一個含 mark 的段落 HTML，讓讀者把畫面回推到標籤。
  const firstWithMark = highlighted.find((t) => t.includes('<mark>'));
  htmlView.textContent = firstWithMark
    ? '<p>' + firstWithMark + '</p>'
    : '（目前沒有命中，因此沒有產生 <mark>）';
}

input.addEventListener('input', render);
