import { generateProducts, hideProducts, showProducts } from './components/CartItem.js';
import { decrement, increment } from './lib/counterOperations.js';

const attachEventListeners = () => {
    const decrementBtns = document.querySelectorAll('.counter button:first-child');
    const incrementBtns = document.querySelectorAll('.counter button:last-child');
    const toggleBtn = document.querySelector('#toggle-cart');

    toggleBtn.addEventListener('click', (e) => {
        if (toggleBtn.value === 'open') {
            hideProducts();
            toggleBtn.value = 'closed';
        } else {
            showProducts();
            toggleBtn.value = 'open';
        }
    })

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

}

generateProducts()
attachEventListeners();




