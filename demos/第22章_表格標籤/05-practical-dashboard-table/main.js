const filterButtons = document.querySelectorAll('[data-filter]');
const sortButton = document.querySelector('[data-sort-score]');
const memberBody = document.querySelector('[data-member-body]');
const rows = Array.from(memberBody.querySelectorAll('tr'));
const summary = document.querySelector('[data-summary]');
const countCell = document.querySelector('[data-count-cell]');

let currentFilter = 'all';
let sortDescending = true;

function updateVisibleRows() {
  let visibleCount = 0;

  rows.forEach((row) => {
    const shouldShow = currentFilter === 'all' || row.dataset.status === currentFilter;
    row.hidden = !shouldShow;

    if (shouldShow) {
      visibleCount += 1;
    }
  });

  summary.textContent = `目前顯示 ${visibleCount} 筆會員資料。`;
  countCell.textContent = `${visibleCount} 筆`;
}

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    currentFilter = button.dataset.filter;

    filterButtons.forEach((item) => item.classList.remove('active'));
    button.classList.add('active');

    updateVisibleRows();
  });
});

sortButton.addEventListener('click', () => {
  const sortedRows = [...rows].sort((a, b) => {
    const scoreA = Number(a.dataset.score);
    const scoreB = Number(b.dataset.score);

    return sortDescending ? scoreB - scoreA : scoreA - scoreB;
  });

  sortedRows.forEach((row) => memberBody.append(row));
  sortDescending = !sortDescending;
  sortButton.textContent = sortDescending ? '依積分排序' : '依積分反向排序';
});

updateVisibleRows();
