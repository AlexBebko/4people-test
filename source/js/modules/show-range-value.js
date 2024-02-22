const rangeInput = document.getElementById('rangeInput');
const rangeValue = document.getElementById('rangeValue');

export function showRangeValue() {
  rangeValue.textContent = `${rangeInput.value} %`;

  rangeInput.addEventListener('input', function () {
    rangeValue.textContent = `${rangeInput.value} %`;
  });
}
