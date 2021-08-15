// імпорт шаблону
import cardsTemplate from '../template/cards.hbs';
// імпорт данних карток
import menu from '../menu.json'

// магія створення карток з шаблону і данних
const markup = cardsTemplate(menu);

// знаходимо елемент в DOM і додаємо розмітку
const menuRef = document.querySelector('.js-menu');
menuRef.insertAdjacentHTML('beforeend', markup);