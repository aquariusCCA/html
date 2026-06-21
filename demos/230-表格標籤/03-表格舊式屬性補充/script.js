// 兩張表同步：左用舊式 HTML 屬性，右用等效 CSS
(function () {
  const inputs = {
    border: document.getElementById('border'),
    cellpadding: document.getElementById('cellpadding'),
    cellspacing: document.getElementById('cellspacing'),
    width: document.getElementById('width')
  };
  const outs = {
    border: document.getElementById('border-out'),
    cellpadding: document.getElementById('cellpadding-out'),
    cellspacing: document.getElementById('cellspacing-out'),
    width: document.getElementById('width-out')
  };
  const oldWrap = document.getElementById('old-wrap');
  const oldCode = document.getElementById('old-code');
  const cssTable = document.getElementById('css-table');
  const cssCode = document.getElementById('css-code');

  if (!oldWrap || !cssTable) return;

  function vals() {
    return {
      border: parseInt(inputs.border.value, 10),
      cellpadding: parseInt(inputs.cellpadding.value, 10),
      cellspacing: parseInt(inputs.cellspacing.value, 10),
      width: parseInt(inputs.width.value, 10)
    };
  }

  function rows() {
    return (
      '  <caption>商品清單</caption>\n' +
      '  <tr><th>商品</th><th>價格</th></tr>\n' +
      '  <tr><td>鍵盤</td><td>1200</td></tr>\n' +
      '  <tr><td>滑鼠</td><td>650</td></tr>'
    );
  }

  function render() {
    const v = vals();
    // 更新輸出數字
    Object.keys(outs).forEach(k => { outs[k].textContent = v[k]; });

    // 左：真的用舊式 HTML 屬性建立表格（瀏覽器原生解析這些屬性）
    oldWrap.innerHTML =
      '<table border="' + v.border + '" cellpadding="' + v.cellpadding +
      '" cellspacing="' + v.cellspacing + '" width="' + v.width + '">' +
      '<caption>商品清單</caption>' +
      '<tr><th>商品</th><th>價格</th></tr>' +
      '<tr><td>鍵盤</td><td>1200</td></tr>' +
      '<tr><td>滑鼠</td><td>650</td></tr>' +
      '</table>';

    oldCode.textContent =
      '<table border="' + v.border + '" cellpadding="' + v.cellpadding + '"\n' +
      '       cellspacing="' + v.cellspacing + '" width="' + v.width + '">\n' +
      rows() + '\n</table>';

    // 右：等效 CSS
    // cellspacing -> border-spacing（需 border-collapse: separate）
    // cellpadding -> td/th padding
    // border -> 表格與每格邊框；width -> table width
    cssTable.style.width = v.width + 'px';
    cssTable.style.borderCollapse = 'separate';
    cssTable.style.borderSpacing = v.cellspacing + 'px';
    cssTable.style.border = v.border > 0 ? v.border + 'px solid #475569' : 'none';
    cssTable.querySelectorAll('th, td').forEach(cell => {
      cell.style.padding = v.cellpadding + 'px';
      cell.style.border = v.border > 0 ? v.border + 'px solid #94a3b8' : 'none';
    });

    cssCode.textContent =
      'table {\n' +
      '  width: ' + v.width + 'px;\n' +
      '  border-collapse: separate;\n' +
      '  border-spacing: ' + v.cellspacing + 'px;   /* = cellspacing */\n' +
      (v.border > 0 ? '  border: ' + v.border + 'px solid #475569;\n' : '  border: none;\n') +
      '}\n' +
      'th, td {\n' +
      '  padding: ' + v.cellpadding + 'px;            /* = cellpadding */\n' +
      (v.border > 0 ? '  border: ' + v.border + 'px solid #94a3b8;\n' : '  border: none;\n') +
      '}';
  }

  Object.values(inputs).forEach(inp => inp.addEventListener('input', render));
  render();
})();
