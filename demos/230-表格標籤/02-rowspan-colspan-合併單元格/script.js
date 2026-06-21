// 區塊 A：依模式重建 3x3 表格與原始碼
(function () {
  const wrap = document.getElementById('grid-wrap');
  const codeEl = document.getElementById('grid-code');
  const tip = document.getElementById('dir-tip');
  if (!wrap || !codeEl) return;

  const views = {
    none: {
      html:
        '<table class="demo-table" border="1">' +
        '<tr><td>1</td><td>2</td><td>3</td></tr>' +
        '<tr><td>4</td><td>5</td><td>6</td></tr>' +
        '<tr><td>7</td><td>8</td><td>9</td></tr>' +
        '</table>',
      code:
        '<table border="1">\n' +
        '  <tr><td>1</td><td>2</td><td>3</td></tr>\n' +
        '  <tr><td>4</td><td>5</td><td>6</td></tr>\n' +
        '  <tr><td>7</td><td>8</td><td>9</td></tr>\n' +
        '</table>',
      tip: '每格各自獨立，共 9 格。'
    },
    colspan: {
      html:
        '<table class="demo-table" border="1">' +
        '<tr><td class="cell-colspan" colspan="3">colspan=3（向右跨 3 欄）</td></tr>' +
        '<tr><td>4</td><td>5</td><td>6</td></tr>' +
        '<tr><td>7</td><td>8</td><td>9</td></tr>' +
        '</table>',
      code:
        '<table border="1">\n' +
        '  <tr><td colspan="3">向右跨 3 欄</td></tr>\n' +
        '  <!-- 第一列原本 3 個 td 已合併成 1 個 -->\n' +
        '  <tr><td>4</td><td>5</td><td>6</td></tr>\n' +
        '  <tr><td>7</td><td>8</td><td>9</td></tr>\n' +
        '</table>',
      tip: 'colspan 向右合併：第一列 3 格合成 1 格，所以只剩 1 個 td。'
    },
    rowspan: {
      html:
        '<table class="demo-table" border="1">' +
        '<tr><td class="cell-rowspan" rowspan="3">rowspan=3<br>（向下跨 3 列）</td><td>2</td><td>3</td></tr>' +
        '<tr><td>5</td><td>6</td></tr>' +
        '<tr><td>8</td><td>9</td></tr>' +
        '</table>',
      code:
        '<table border="1">\n' +
        '  <tr><td rowspan="3">向下跨 3 列</td><td>2</td><td>3</td></tr>\n' +
        '  <tr><td>5</td><td>6</td></tr>\n' +
        '  <!-- 第 2、3 列的第一格已被占用，要刪除 -->\n' +
        '  <tr><td>8</td><td>9</td></tr>\n' +
        '</table>',
      tip: 'rowspan 向下合併：第一格占用 3 列，下面兩列的第一格要刪除。'
    }
  };

  function render(mode) {
    const v = views[mode];
    wrap.innerHTML = v.html;
    codeEl.textContent = v.code;
    tip.textContent = v.tip;
  }

  document.querySelectorAll('.mode-buttons button').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.mode-buttons button').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      render(btn.getAttribute('data-mode'));
    });
  });

  render('none');
})();

// 區塊 B：正確 vs 錯誤（是否刪除多餘儲存格）
(function () {
  const toggle = document.getElementById('fix-toggle');
  const fig = document.getElementById('err-fig');
  const cap = document.getElementById('err-cap');
  const tableWrap = document.getElementById('err-table');
  const codeEl = document.getElementById('err-code');
  const note = document.getElementById('err-note');
  if (!toggle) return;

  const states = {
    wrong: {
      table:
        '<table class="demo-table" border="1">' +
        '<tr><td colspan="2" class="cell-colspan">A（colspan=2）</td><td class="err-extra">多餘 td</td></tr>' +
        '<tr><td>C</td><td>D</td><td>E</td></tr>' +
        '</table>',
      code:
        '<tr>\n' +
        '  <td colspan="2">A</td>\n' +
        '  <td>多餘 td</td>  <!-- ✗ 沒刪，總欄數變 4 -->\n' +
        '</tr>',
      note: '第一列 colspan="2" 已占兩欄，又多一個 td，總欄數變成 4，紅框那格被擠出原本結構而錯位。',
      figClass: 'bad',
      cap: '✗ 錯誤：加了 colspan 卻沒刪多餘的 td'
    },
    right: {
      table:
        '<table class="demo-table" border="1">' +
        '<tr><td colspan="2" class="cell-colspan">A（colspan=2）</td><td>B</td></tr>' +
        '<tr><td>C</td><td>D</td><td>E</td></tr>' +
        '</table>',
      code:
        '<tr>\n' +
        '  <td colspan="2">A</td>\n' +
        '  <td>B</td>  <!-- ✓ 被占的那格已刪，這是第 3 欄 -->\n' +
        '</tr>',
      note: '第一列 colspan="2" 占兩欄，再加 1 個 td 剛好 3 欄，與下方對齊，結構正確。',
      figClass: 'good',
      cap: '✓ 正確：colspan 後刪掉被占用的那格'
    }
  };

  function render() {
    const s = toggle.checked ? states.right : states.wrong;
    tableWrap.innerHTML = s.table;
    codeEl.textContent = s.code;
    note.textContent = s.note;
    cap.textContent = s.cap;
    fig.classList.remove('bad', 'good');
    fig.classList.add(s.figClass);
  }

  toggle.addEventListener('change', render);
  render();
})();
