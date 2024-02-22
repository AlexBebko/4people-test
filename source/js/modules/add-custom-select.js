export function addCustomSelect() {
  document.querySelectorAll('select').forEach((selectElement) => {
    const numberOfOptions = selectElement.children.length;

    // Создаем кастомные элементы
    selectElement.classList.add('select-hidden');
    const selectWrapper = document.createElement('div');
    selectWrapper.classList.add('select');
    selectElement.parentNode.insertBefore(selectWrapper, selectElement);
    selectWrapper.appendChild(selectElement);
    const selectStyled = document.createElement('div');
    selectStyled.classList.add('select-styled');
    selectStyled.textContent = selectElement.children[0].textContent;
    selectWrapper.appendChild(selectStyled);

    const selectOptions = document.createElement('ul');
    selectOptions.classList.add('select-options');
    selectWrapper.appendChild(selectOptions);

    // Добавляем опции в список
    for (let i = 0; i < numberOfOptions; i++) {
      const optionText = selectElement.children[i].textContent;
      const optionValue = selectElement.children[i].value;
      const optionAttr = selectElement.children[i].attribute;
      const listItem = document.createElement('li');
      listItem.textContent = optionText;
      listItem.setAttribute('rel', optionValue, optionAttr);
      selectOptions.appendChild(listItem);
      if (selectElement.children[i].selected) {
        listItem.classList.add('is-selected');
      }
    }

    const listItems = selectOptions.children;

    // Обработчик события для открытия/закрытия списка опций
    selectStyled.addEventListener('click', (e) => {
      e.stopPropagation();
      const active = document.querySelector('.select-styled.active');
      if (active && active !== selectStyled) {
        active.classList.remove('active');
        active.nextElementSibling.style.display = 'none';
      }
      selectStyled.classList.toggle('active');
      selectStyled.nextElementSibling.style.display = selectStyled.classList.contains('active') ? 'block' : 'none';
    });

    // Обработчик события для выбора опции
    [...listItems].forEach((item) => {
      item.addEventListener('click', (e) => {
        e.stopPropagation();
        selectStyled.textContent = item.textContent;
        selectStyled.classList.remove('active');
        selectElement.value = item.getAttribute('rel'); // Установка значения выбранной опции в элементе <select>
        selectOptions.querySelector('.is-selected').classList.remove('is-selected');
        item.classList.add('is-selected');
        selectOptions.style.display = 'none';
      });
    });

    // Закрытие списка при клике за его пределами
    document.addEventListener('click', () => {
      selectStyled.classList.remove('active');
      selectOptions.style.display = 'none';
    });
  });
}
