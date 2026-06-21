// 區塊 A：表格儲存格與原始碼雙向高亮聯動
(function () {
  const table = document.getElementById('basic-table');
  const codeLines = document.querySelectorAll('.code .ln');
  if (!table) return;

  function clearActive() {
    table.querySelectorAll('[data-tag].active').forEach(el => el.classList.remove('active'));
    codeLines.forEach(el => el.classList.remove('active'));
  }

  // 滑入表格某格 → 高亮該格 + 同類型原始碼行
  table.querySelectorAll('[data-tag]').forEach(cell => {
    cell.addEventListener('mouseenter', () => {
      clearActive();
      cell.classList.add('active');
      const tag = cell.getAttribute('data-tag');
      codeLines.forEach(ln => {
        if (ln.getAttribute('data-tag') === tag) ln.classList.add('active');
      });
    });
  });

  // 滑入原始碼某行 → 高亮對應所有同類型儲存格
  codeLines.forEach(ln => {
    ln.addEventListener('mouseenter', () => {
      clearActive();
      const tag = ln.getAttribute('data-tag');
      codeLines.forEach(l => { if (l.getAttribute('data-tag') === tag) l.classList.add('active'); });
      if (tag !== 'tr') {
        table.querySelectorAll('[data-tag="' + tag + '"]').forEach(c => c.classList.add('active'));
      }
    });
  });

  table.addEventListener('mouseleave', clearActive);
  document.querySelector('.code').addEventListener('mouseleave', clearActive);
})();

// 區塊 B：語意分區高亮與說明
(function () {
  const table = document.getElementById('full-table');
  const desc = document.getElementById('part-desc');
  if (!table || !desc) return;

  const info = {
    caption: { title: '<caption> 表格標題', body: '說明整張表格在呈現什麼，這裡是「段考成績」。它不是一列資料，而是整張表的標題。' },
    thead: { title: '<thead> 表格頭部', body: '放欄位標題列。「科目」「分數」幫助讀者理解下方每一格資料的意義。' },
    tbody: { title: '<tbody> 表格主體', body: '放主要資料列，也就是各科成績。表格的多筆資料列都應放在這裡。' },
    tfoot: { title: '<tfoot> 表格腳注', body: '放總計或補充。即使寫在最後，瀏覽器與輔助技術仍理解它是表格的總結內容。' }
  };

  document.querySelectorAll('.part-buttons button').forEach(btn => {
    btn.addEventListener('click', () => {
      const part = btn.getAttribute('data-part');
      table.querySelectorAll('[data-part]').forEach(el => el.classList.remove('part-active'));
      if (part === 'none') {
        desc.innerHTML = '<p>選一個分區看說明。</p>';
        return;
      }
      table.querySelectorAll('[data-part="' + part + '"]').forEach(el => el.classList.add('part-active'));
      desc.innerHTML = '<h3>' + info[part].title + '</h3><p>' + info[part].body + '</p>';
    });
  });
})();
