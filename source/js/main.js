import {showFileName} from './modules/show-file-name.js';
import {showRangeValue} from './modules/Show-range-value.js';
import {addCustomSelect} from './modules/add-custom-select.js';
import {toggleBurgerMenu} from './modules/burger-menu.js';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------
  showRangeValue();
  showFileName();
  addCustomSelect();
  toggleBurgerMenu();


  // Modules
  // ---------------------------------

  // в load скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {

  });
});

// ---------------------------------
