import { products } from '../data/data.js';

const createHeader = () => {
    const header = document.createElement('header');
    header.classList.add('navbar');
    header.innerHTML = `
    <div class="navbar-items__left">
        <div class="menu-container">
            <img src="./assets/icons/menu.svg" alt="menu-icon">
        </div>
        <div class="logo-container">
            <span>Товары и точка</span>
        </div>
        <div class="mobile-menu-container">
            <button><img src="./assets/icons/mobileMenu.svg" alt="mobile-menu"></button>
        </div>
    </div>
    <div class="navbar-items__center">
        <label class="search-bar" for="search-input">
                <input type="text" id="search-input" placeholder="Я ищу...">
                <button><img src="./assets/icons/search.svg" alt="search-icon"></button>
        </label>
        <div class="mobile-logo-container">
            <h1>Товары и точка</h1>
        </div>
    </div>
    <div class="navbar-items__right">
        <div class="user-container">
            <button><img src="./assets/icons/profile.svg" alt="user-icon"></button>
            <span>Профиль</span>
        </div>
        <div class="cart-container">
            <button><img src="./assets/icons/cart.svg" alt="cart-icon"></button>
            <span>Корзина</span>
            <span class="cart-ammount" id="header-cart-qty">${products.length}</span>
        </div>
        <div class="mobile-search">
            <button><img src="./assets/icons/mobileSearch.svg" alt="search-icon"></button>
        </div>
    </div>
    `
    return header;
}

const attachHeaderEventListeners = () => {
    const searchBar = document.querySelector('.search-bar');
    const searchInput = document.querySelector('#search-input');

    searchInput.addEventListener('focus', () => {
        searchBar.classList.add('focused');
    })

    searchInput.addEventListener('blur', () => {
        searchBar.classList.remove('focused');
    })
}


export const generateHeader = () => {
    const app = document.querySelector('#app');
    const header = createHeader();
    app.appendChild(header);
    attachHeaderEventListeners();
}