const form = document.querySelector('#register-form');
const summary = document.querySelector('#summary');

function describeValue(value) {
  if (value instanceof File) {
    return value.name ? `${value.name} (${value.type || '未知類型'})` : '未選擇檔案';
  }

  return value || '(空值)';
}

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const lines = [];

  for (const [name, value] of formData.entries()) {
    lines.push(`${name} = ${describeValue(value)}`);
  }

  summary.textContent = [
    '瀏覽器收集到的表單資料：',
    lines.join('\n'),
    '',
    '觀察提醒：',
    '- required 欄位未填時，瀏覽器會先阻止 submit。',
    '- password 欄位會提交值，但此 demo 不顯示明文密碼用途。',
    '- file 欄位需要搭配 enctype="multipart/form-data" 做傳統表單上傳。'
  ].join('\n');
});

form.addEventListener('reset', () => {
  summary.textContent = '表單已重置，尚未重新提交。';
});
