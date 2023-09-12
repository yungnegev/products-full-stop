import { products } from '../data/data.js';

const createTaskBar = () => {
    const taskbar = document.createElement('nav');
    taskbar.classList.add('taskbar');
    taskbar.innerHTML = `
        <div class="taskbar-icon-container">
            <img src="./assets/icons/taskbarHome.svg" alt="home-icon">
        </div>
        <div class="taskbar-icon-container">
            <img src="./assets/icons/taskbarCatalog.svg" alt="catalog-icon">
        </div>
        <div class="taskbar-icon-container taskbar-cart-icon-container">
            <img src="./assets/icons/taskbarCart.svg" alt="home-icon">
            <div class="taskbar-cart-icon-quantity">${products.length}</div>
        </div>
        <div class="taskbar-icon-container">
            <img src="./assets/icons/taskbarHeart.svg" alt="heart-icon">
        </div>
        <div class="taskbar-icon-container">
            <img src="./assets/icons/taskbarProfile.svg" alt="profile-icon">
        </div>
    `
    return taskbar;
}


export const generateTaskBar = () => {
    const app = document.querySelector('#app');
    const taskbar = createTaskBar();
    app.appendChild(taskbar);
}