export function addCustomSelect() {
  document.querySelectorAll('select').forEach((selectElement) => {
    const numberOfOptions = selectElement.children.length;

    selectElement.classList.add('select-hidden');
    const selectWrapper = document.createElement('div');
    selectWrapper.classList.add('select');
    selectElement.parentNode.insertBefore(selectWrapper, selectElement);
    selectWrapper.appendChild(selectElement);
    const selectStyled = document.createElement('div');
    selectStyled.classList.add('select-styled');
    selectStyled.setAttribute('tabindex', '0');
    selectStyled.textContent = selectElement.children[0].textContent;
    selectWrapper.appendChild(selectStyled);

    const selectOptions = document.createElement('ul');
    selectOptions.classList.add('select-options');
    selectOptions.setAttribute('data-simplebar', '');
    selectWrapper.appendChild(selectOptions);

    for (let i = 0; i < numberOfOptions; i++) {
      const optionText = selectElement.children[i].textContent;
      const optionValue = selectElement.children[i].value;
      const optionAttr = selectElement.children[i].attribute;
      const listItem = document.createElement('li');
      listItem.textContent = optionText;
      listItem.setAttribute('rel', optionValue, optionAttr);
      listItem.setAttribute('tabindex', 0);
      selectOptions.appendChild(listItem);
      if (selectElement.children[i].selected) {
        listItem.classList.add('is-selected');
      }
    }

    const listItems = selectOptions.children;

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

    selectStyled.addEventListener('keydown', (e) => {
      if (e.key === ' ' || e.key === 'Spacebar') {
        e.preventDefault();
        e.stopPropagation();
        selectStyled.click();
      }
    });

    const chooseActiveOption = (item) => {
      selectStyled.textContent = item.textContent;
      selectStyled.classList.remove('active');
      selectElement.value = item.getAttribute('rel');
      selectOptions.querySelector('.is-selected').classList.remove('is-selected');
      item.classList.add('is-selected');
      selectOptions.style.display = 'none';
    };

    [...listItems].forEach((item) => {
      item.addEventListener('click', (e) => {
        e.stopPropagation();
        chooseActiveOption(item);
      });

      item.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          e.stopPropagation();
          chooseActiveOption(item);
        }
      });


      if ([...listItems].indexOf(item) === listItems.length - 1) {
        item.addEventListener('blur', () => {
          selectOptions.style.display = 'none';
          selectStyled.classList.remove('active');
        });
      }
    });

    document.addEventListener('click', () => {
      selectStyled.classList.remove('active');
      selectOptions.style.display = 'none';
    });
  });
}
