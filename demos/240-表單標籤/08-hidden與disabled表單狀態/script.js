// A 區：用 FormData 顯示 hidden 會提交、disabled 不提交
const form = document.getElementById('demo-form');
const result = document.getElementById('result');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const entries = [...data.entries()];
  result.innerHTML = '';

  for (const [key, value] of entries) {
    const li = document.createElement('li');
    li.innerHTML = `<span class="kv-key">${key}</span> = <span class="kv-val">${value}</span>`;
    result.appendChild(li);
  }

  const skip = document.createElement('li');
  skip.className = 'tag-skip';
  skip.textContent = '✗ 未提交：被 disabled 的 vip_level';
  result.appendChild(skip);
});
