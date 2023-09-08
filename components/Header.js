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
    </div>
    <div class="navbar-items__center">
        <div class="search-bar">
                <input type="text" placeholder="Я ищу...">
                <button><img src="./assets/icons/search.svg" alt="search-icon"></button>
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
    </div>
    `
    return header;
}


export const generateHeader = () => {
    const app = document.querySelector('#app');
    const header = createHeader();
    app.appendChild(header);
}