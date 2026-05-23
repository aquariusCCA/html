const rules = {
  bad: [
    { pass: false, text: '缺少 main：主要內容只用 div 包住，語意不明確。' },
    { pass: false, text: 'section 只為排版：裡面沒有能說明主題的標題。' },
    { pass: false, text: 'nav 沒有 aria-label：多組導覽時用途不容易區分。' },
    { pass: false, text: '主要文章內容沒有使用 article：內容獨立性沒有被表達。' }
  ],
  good: [
    { pass: true, text: '有 main：頁面主要內容範圍清楚。' },
    { pass: true, text: 'section 有標題：主題分段可以被辨識。' },
    { pass: true, text: 'nav 有 aria-label：導覽用途清楚。' },
    { pass: true, text: '使用 article：可獨立閱讀的內容有明確語意。' }
  ]
};

function renderResult(target) {
  const output = document.querySelector(`[data-result="${target}"]`);
  output.innerHTML = '';

  rules[target].forEach((rule) => {
    const item = document.createElement('li');
    item.className = rule.pass ? 'pass' : 'warn';
    item.textContent = `${rule.pass ? '通過' : '提醒'}：${rule.text}`;
    output.append(item);
  });
}

document.querySelectorAll('[data-check-target]').forEach((button) => {
  button.addEventListener('click', () => {
    renderResult(button.dataset.checkTarget);
  });
});
