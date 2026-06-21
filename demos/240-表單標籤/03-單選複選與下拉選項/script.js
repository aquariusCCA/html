// A 區：即時顯示三組選項控件目前會提交的值
const form = document.getElementById('opt-form');
const result = document.getElementById('result');

function render() {
  const data = new FormData(form);
  result.innerHTML = '';

  // gender（單選）
  addLine('gender', data.getAll('gender'));
  // hobby（複選，可能多個同名）
  addLine('hobby', data.getAll('hobby'));
  // province（下拉）
  addLine('province', data.getAll('province'));
}

function addLine(key, values) {
  const li = document.createElement('li');
  if (values.length === 0) {
    li.innerHTML = `<span class="kv-key">${key}</span> = <span class="tag-skip">(未選，不會提交)</span>`;
  } else {
    li.innerHTML = `<span class="kv-key">${key}</span> = <span class="kv-val">${values.join(', ')}</span>`;
  }
  result.appendChild(li);
}

form.addEventListener('change', render);
render();
