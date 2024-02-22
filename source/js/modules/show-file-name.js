const inputFile = document.querySelector('.form__input-file');

export function showFileName() {
  inputFile.addEventListener('change', function (e) {
    const fileName = e.target.value.split('\\').pop();
    document.getElementById('fileName').textContent = `${fileName} загружен`;
  });
}
