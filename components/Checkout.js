
const createCheckout = () => {
    const section = document.createElement('section');
    section.classList.add('checkout');
    section.innerHTML = `
    <div class="checkout-rundown">
        <div class="checkout-total">
            <h1>Итого</h1>
            <div class="checkout-price"><span id="checkout-price-value"></span><span class="small-som">сом</span></div>
        </div>
        <ul class="rundown-items">
            <li class="rundown-item">
                <div>
                    <span id="rundown-items-qty"></span> <span>товара</span>
                </div>
                <span id="rundown-items-value"></span>
            </li>
            <li class="rundown-item">
                <span>Скидка</span>
                <span id="total-discount-value"></span>
            </li>
            <li class="rundown-item">
                <span>Доставка</span>
                <span>Бесплатно</span>
            </li>
        </ul>
    </div>
    <div class="checkout-delivery">
        <div class="checkout__header">
            <h2 class="address-type-display">Доставка в пункт выдачи</h2>
            <button type="button" class="checkout-delivery__button" id="open-address-modal-checkout">
                <img src="./assets/icons/pencil.svg" alt="pencil-icon">
            </button>
        </div>
        <div class="checkout-address address-display">Бишкек, улица Ахматбека Суюмбаева, 12/1</div>
        <div class="checkout-delivery-date">5–8 фев</div>
        <div class="checkout-delivery__modal">
            <div>
                <img src="./assets/icons/greenCheck.svg" alt="delivery">
            </div>
            <div>
                <span>Обратная доставка товаров на склад при отказе — 
                <span class="green-underline tooltip-delivery">
                    бесплатно
                    <div class="tooltip-delivery-body">Если товары вам не подойдут, мы вернем их обратно на склад — это бесплатно</div>
                </span>
                </span>
            </div>
        </div>
    </div>
    <div class="checkout-payment">
        <div class="checkout__header">
            <h2>Оплата картой</h2>
            <button type="button" class="checkout-delivery__button" id="open-payment-modal-checkout">
                <img src="./assets/icons/pencil.svg" alt="pencil-icon">
            </button>
        </div>
        <div class="card-choice">
            <div class="grey-bg-rounded">
                <img src="./assets/icons/mir.svg" alt="mir-pay" class="card-icon">
            </div>
            <div class="card-number">1234 12•• •••• 1234</div>
        </div>
        <div class="checkout-payment__modal">
            <div class="instant-pay">
                <button type="button" id="checkbox-instantpay" value="off">
                    <img src="./assets/icons/emptyCheckbox.svg" alt="checkbox">
                </button>
                <span>Списать оплату сразу</span>
            </div>
            <div>Спишем оплату с карты при получении</div>
        </div>
    </div>
    <div class="checkout-button">
        <button id="order" type="button"><span>Заказать</span></button>
        <div class="user-agreement">
            <img src="./assets/icons/checkmark.svg">
            <span>Соглашаюсь с правилами пользования торговой площадкой и возврата</span>
        </div>
    </div>
    `
    return section;
}


export const generateCheckout = () => {
    const main = document.querySelector('.main-checkout');
    const checkout = createCheckout();
    main.appendChild(checkout);
}