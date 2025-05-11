import './utils/pxToRem.js' 
class Header {
    selectors = {
        root: '[data-js-header]',
        overlay: '[data-js-header-overlay]',
        burgerButton: '[data-js-header-burger-button]'
    }

    stateClasses = {  // Исправлено на stateClasses
        isActive: 'is-active',
        isLock: 'is-lock'  // Исправлено на isLock
    }

    constructor() {
        this.rootElement = document.querySelector(this.selectors.root);

        if (!this.rootElement) {
            console.error('Корневой элемент не найден');
            return; // Прерываем выполнение, если rootElement не найден
        }

        this.overlayElement = this.rootElement.querySelector(this.selectors.overlay);
        this.burgerButtonElement = this.rootElement.querySelector(this.selectors.burgerButton);

        // Проверка на существование элементов
        if (!this.overlayElement || !this.burgerButtonElement) {
            console.error('Не все необходимые элементы были найдены');
            return;
        }

        this.bindEvents();
    }

    onBurgerButtonClick = () => {
        // Переключение классов
        this.burgerButtonElement.classList.toggle(this.stateClasses.isActive);
        this.overlayElement.classList.toggle(this.stateClasses.isActive);
        document.documentElement.classList.toggle(this.stateClasses.isLock);
    }

    bindEvents() {
        // Добавляем обработчик клика
        this.burgerButtonElement.addEventListener('click', this.onBurgerButtonClick);
    }
}

export default Header;
