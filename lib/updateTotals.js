import { spacesForThousands, removeSpaces, conjugate } from './utils/utils.js';

export const updateTotals = () => {
    const totalPrice = document.querySelector('#checkout-price-value');
    const totalQuantity = document.querySelector('#rundown-items-qty');
    const totalNoDiscount = document.querySelector('#rundown-items-value');
    const totalDiscountValue = document.querySelector('#total-discount-value');
    const noDiscountPrices = document.querySelectorAll('.no-discount-price');
    const productPrices = document.querySelectorAll('.price-value');
    const productQuantities = document.querySelectorAll('.quantity-value');
    const cartItemsCheckboxes = document.querySelectorAll('.cart-checkbox');
    const nounDiv = document.querySelector('.conjugate');

    let totalPriceValue = 0;
    let totalNoDiscountValue = 0;
    let quantity = 0;

    productPrices.forEach((price, index) => {
        if (cartItemsCheckboxes[index].value === 'on') {
            totalPriceValue += parseInt(removeSpaces(price.innerText));

        }
    })
    productQuantities.forEach((quantityValue, index) => {
        if (cartItemsCheckboxes[index].value === 'on') {
            quantity += parseInt(removeSpaces(quantityValue.innerText));
        }
    })

    noDiscountPrices.forEach((price, index) => {
        if (cartItemsCheckboxes[index].value === 'on') {
            totalNoDiscountValue += parseInt(removeSpaces(price.innerText));
        }
    })

    totalDiscountValue.innerText = `−${spacesForThousands(totalNoDiscountValue - totalPriceValue)} сом`
    totalNoDiscount.innerText = `${spacesForThousands(totalNoDiscountValue)} сом`
    totalPrice.innerText = spacesForThousands(totalPriceValue);
    totalQuantity.innerText = quantity;
    nounDiv.innerText = conjugate(quantity, 'товар', 'товара', 'товаров');
}


export const updateTotalBtn = (toggle) => {
    const totalBtn = document.querySelector('#order');
    const hideDiv = document.querySelectorAll('.remove-on-toggle');
    const totalPrice = document.querySelector('#checkout-price-value').innerHTML;
    totalBtn.innerHTML = toggle ? `Оплатить ${totalPrice} сом` : 'Заказать';
    hideDiv.forEach(div => {
        div.style.display = toggle ? 'none' : 'flex';
    })
}

export const updateHeaderCart = () => {
    const headerCart = document.querySelector('#header-cart-qty');
    const navBarCart = document.querySelector('.taskbar-cart-icon-quantity');
    const items = document.querySelectorAll('.cart-checkbox');

    let quantity = 0;
    for (let item of items) {
        if (item.value === 'on') {
            quantity++;
        }
    }
    headerCart.innerText = quantity;
    navBarCart.innerText = quantity;

    if (headerCart.innerHTML === '0') {
        headerCart.style.display = 'none';
    } else {
        headerCart.style.display = 'flex';
    }
    if (navBarCart.innerHTML === '0') {
        navBarCart.style.display = 'none';
    } else {
        navBarCart.style.display = 'flex';
    }
}