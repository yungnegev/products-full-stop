const createMain = () => {
    const main = document.createElement('main');
    main.classList.add('main');
    main.innerHTML = `
    <div class="main-items">
        <section class="cart">
            <h1>Корзина</h1>
            <div class="cart-item-container">
                <div class="select-all">
                    <div class="select-all__open">
                        <button type="button" class="select-all__checkbox checkbox" id="select-all-products" value="on">
                            <img src="./assets/icons/checkbox.svg" alt="checkbox-icon">
                        </button>
                        <span>Выбрать все</span>
                    </div>
                    <div class="select-all__closed"></div>
                    <button id="toggle-cart" type="button" value="open">
                        <img src="./assets/icons/arrowUp.svg" alt="arrow-icon">
                    </button>
                </div>
                <div class="cart-items"></div>  
            </div>
        </section>
        <div class="separator"></div>
        <section class="missing">
            <div class="select-all">
                <span>Отсутствуют · 3 товара</span>
                <button id="toggle-missing" type="button" value="open">
                    <img src="./assets/icons/arrowUp.svg" alt="arrow-icon">
                </button>
            </div>
            <div class="missing-items"></div>
        </section>
        <div class="action-card-container">
        </div>
    </div>
    <div class="main-checkout"></div>    
    `
    return main;
}

export const generateMain = () => {
    const app = document.querySelector('#app');
    const main = createMain();
    app.appendChild(main);
}