// 用 FormData 收集表單實際會提交的資料，示範 name / disabled 規則
const form = document.getElementById('demo-form');
const result = document.getElementById('result');
const resetBtn = document.getElementById('reset-btn');

function render() {
  const data = new FormData(form); // FormData 只會收集「有 name 且未被 disabled」的控件
  const entries = [...data.entries()];
  result.innerHTML = '';

  if (entries.length === 0) {
    result.innerHTML = '<li class="empty">沒有任何欄位被提交。</li>';
    return;
  }

  for (const [key, value] of entries) {
    const li = document.createElement('li');
    li.innerHTML = `<span class="kv-key">${key}</span> = <span class="kv-val">${value || '(空字串)'}</span>`;
    result.appendChild(li);
  }

  // 補充說明：哪些被略過
  const skipped = document.createElement('li');
  skipped.className = 'tag-skip';
  skipped.textContent = '✗ 未提交：沒有 name 的欄位、被 disabled 的 vip 欄位';
  result.appendChild(skipped);
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  render();
});

resetBtn.addEventListener('click', () => {
  result.innerHTML = '<li class="empty">尚未提交，點「模擬提交」看看。</li>';
});
