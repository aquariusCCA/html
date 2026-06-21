// B 區：讓瀏覽器原生驗證先擋；通過後才攔截顯示資料
const form = document.getElementById('v-form');
const result = document.getElementById('result');

form.addEventListener('submit', (e) => {
  // 不呼叫 preventDefault 之前，瀏覽器已先做 required / email 格式驗證；
  // 走到這裡代表已通過原生驗證。
  e.preventDefault();
  const data = new FormData(form);
  result.innerHTML = '';
  for (const [key, value] of data.entries()) {
    const li = document.createElement('li');
    li.innerHTML = `<span class="kv-key">${key}</span> = <span class="kv-val">${value || '(空字串)'}</span>`;
    result.appendChild(li);
  }
});
