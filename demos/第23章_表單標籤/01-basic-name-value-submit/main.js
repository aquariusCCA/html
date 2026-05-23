const form = document.querySelector('#signup-form');
const output = document.querySelector('#output');

function formatFormData(formData) {
  const lines = [];

  for (const [name, value] of formData.entries()) {
    lines.push(`${name} = ${value}`);
  }

  return lines.join('\n');
}

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const queryString = new URLSearchParams(formData).toString();

  output.textContent = [
    'FormData 內容：',
    formatFormData(formData),
    '',
    '若使用 method="get"，類似的 query string：',
    queryString
  ].join('\n');
});

form.addEventListener('reset', () => {
  output.textContent = '表單已重置，尚未重新提交。';
});
