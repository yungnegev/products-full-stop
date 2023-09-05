
const spacesForThousands = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}


export const updateTotals = () => {
    const totalPrice = document.querySelector('#checkout-price-value');
    const totalQuantity = document.querySelector('#rundown-items-qty');
    const productPrices = document.querySelectorAll('.price-value');
    const productQuantities = document.querySelectorAll('.quantity-value');

    let total = 0;
    let quantity = 0;

    productPrices.forEach((price) => {
        total += parseInt(price.innerHTML);
    })
    productQuantities.forEach((quantityValue) => {
        quantity += parseInt(quantityValue.innerHTML);
    })
    totalPrice.innerHTML = spacesForThousands(total);
    totalQuantity.innerHTML = quantity;
}