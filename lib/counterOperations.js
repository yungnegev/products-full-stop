import { spacesForThousands, smallSpacesForThousands } from './utils/utils.js';

const updateButtonStyle = (id) => {
    const decrementButton = document.getElementById(`db-${id}`);
    const incrementButton = document.getElementById(`ib-${id}`);
    const counter = document.getElementById(`c-${id}`);
    const remaining = counter.dataset.remaining;
    if (remaining === 'null' || parseInt(counter.innerHTML) < parseInt(remaining)){
        incrementButton.style.color = '#000';
        incrementButton.style.cursor = 'pointer';
    }
    if (counter.innerHTML > 1){
        decrementButton.style.color = '#000';
        decrementButton.style.cursor = 'pointer';
    }
    if (counter.innerHTML <= 1){
        decrementButton.style.color = '#ccc';
        decrementButton.style.cursor = 'default';
    }
    if (remaining !== 'null' && parseInt(counter.innerHTML) === parseInt(remaining)){
        incrementButton.style.color = '#ccc';
        incrementButton.style.cursor = 'default';
    }
}

export const updateAllButtonsStyle = () => {
    const counterButtons = document.querySelectorAll('.counter button');
    counterButtons.forEach(button => {
        const id = button.dataset.id;
        updateButtonStyle(id);
    })
}

export const increment = (id) => {
    // counter
    const counter = document.getElementById(`c-${id}`);
    const remaining = counter.dataset.remaining;
    if (remaining === 'null' || parseInt(counter.innerHTML) < parseInt(remaining)){
        counter.innerText = parseInt(counter.innerHTML) + 1;
    }
    // price
    const price = document.getElementById(`p-${id}`);
    const priceValue = price.dataset.price
    price.innerText = spacesForThousands(Math.round(parseInt(counter.innerHTML) * priceValue));
    // discount
    const discount = document.getElementById(`d-${id}`);
    const noDiscount = discount.dataset.noDiscount;
    discount.innerText = `${smallSpacesForThousands(Math.round(parseInt(counter.innerHTML) * noDiscount))} сом`

    updateButtonStyle(id);
}

export const decrement = (id) => {
    // counter
    const counter = document.getElementById(`c-${id}`);
    if (counter.innerHTML > 1){
        counter.innerText = parseInt(counter.innerText) - 1;
    }
    // price 
    const price = document.getElementById(`p-${id}`);
    const priceValue = parseInt(price.dataset.price);
    price.innerText = spacesForThousands(Math.round(parseInt(counter.innerText) * priceValue));
    // discount
    const discount = document.getElementById(`d-${id}`);
    const noDiscount = discount.dataset.noDiscount;
    discount.innerText = `${smallSpacesForThousands(Math.round(parseInt(counter.innerText) * noDiscount))} сом`

    updateButtonStyle(id);
}

