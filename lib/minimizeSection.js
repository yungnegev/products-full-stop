export const updateSectionHeading = (value) => {
    const sectionHeadingClosed = document.querySelector('.select-all__closed');
    const sectionHeadingOpen = document.querySelector('.select-all__open');
    const totalQuantity = document.querySelector('#rundown-items-qty');
    const totalPrice = document.querySelector('#checkout-price-value');

    if (value === 'open') {
        sectionHeadingClosed.innerHTML = ''
        sectionHeadingOpen.style.display = 'flex'
    } else {
        sectionHeadingOpen.style.display = 'none'
        sectionHeadingClosed.innerText = `${totalQuantity.innerHTML} товаров · ${totalPrice.innerHTML} сом`
    }
}

export const toggleSeparatorDiv = () => {
    const separatorDiv = document.querySelector('.separator');
    const toggleCartBtn = document.querySelector('#toggle-cart');
    const toggleMissingBtn = document.querySelector('#toggle-missing');

    if (toggleCartBtn.value === 'closed' && toggleMissingBtn.value === 'closed') {
        separatorDiv.style.display = 'block';
    } else {
        separatorDiv.style.display = 'none';
    }
}