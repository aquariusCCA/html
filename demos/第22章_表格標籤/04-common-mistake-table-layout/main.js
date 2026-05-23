const button = document.querySelector('[data-action]');
const output = document.querySelector('[data-output]');
const tables = document.querySelectorAll('[data-check-table]');

button.addEventListener('click', () => {
  const results = Array.from(tables).map((table) => {
    const name = table.dataset.checkTable;
    const checks = [
      table.querySelector('caption') ? '有 caption' : '缺少 caption',
      table.querySelector('th') ? '有 th' : '缺少 th',
      table.querySelector('thead') ? '有 thead' : '缺少 thead',
      table.querySelector('tbody') ? '有 tbody' : '缺少 tbody'
    ];

    return `<li><strong>${name}</strong>：${checks.join('、')}</li>`;
  });

  output.innerHTML = `
    <strong>檢查結果</strong>
    <ul>${results.join('')}</ul>
  `;
});
