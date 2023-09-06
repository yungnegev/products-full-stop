import { spacesForThousands } from './utils/utils.js';

export const updateTotals = () => {
    const totalPrice = document.querySelector('#checkout-price-value');
    const totalQuantity = document.querySelector('#rundown-items-qty');
    const productPrices = document.querySelectorAll('.price-value');
    const productQuantities = document.querySelectorAll('.quantity-value');
    const cartItemsCheckboxes = document.querySelectorAll('.cart-checkbox');

    let total = 0;
    let quantity = 0;

    productPrices.forEach((price, index) => {
        if (cartItemsCheckboxes[index].value === 'on') {
            total += parseInt(price.innerHTML)
        }
    })
    productQuantities.forEach((quantityValue, index) => {
        if (cartItemsCheckboxes[index].value === 'on') {
            quantity += parseInt(quantityValue.innerHTML);
        }
    })
    totalPrice.innerHTML = spacesForThousands(total);
    totalQuantity.innerHTML = quantity;
}


export const updateTotalBtn = (toggle) => {
    const totalBtn = document.querySelector('#order');
    const totalPrice = document.querySelector('#checkout-price-value').innerHTML;
    totalBtn.innerHTML = toggle ? `Оплатить ${totalPrice} сом` : 'Заказать';
}

export const updateHeaderCart = () => {
    const headerCart = document.querySelector('#header-cart-qty');
    const items = document.querySelectorAll('.cart-checkbox');

    let quantity = 0;
    for (let item of items) {
        if (item.value === 'on') {
            quantity++;
        }
    }
    headerCart.innerHTML = quantity;
}