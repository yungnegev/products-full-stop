import { generateProducts } from './components/CartItems.js';
import { decrement, increment } from './utils/counterOperations.js';

generateProducts()

const decrementBtns = document.querySelectorAll('.counter button:first-child');
const incrementBtns = document.querySelectorAll('.counter button:last-child');

decrementBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const id = btn.dataset.id;
        decrement(id);
    })
});

incrementBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const id = btn.dataset.id;
        increment(id);
    })
})