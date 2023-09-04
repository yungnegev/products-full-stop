import { generateProducts, hideProducts, showProducts } from './components/CartItem.js';
import { generateMissing, hideMissing, showMissing } from './components/MissingItem.js';
import { decrement, increment } from './lib/counterOperations.js';

const attachEventListeners = () => {
    const decrementBtns = document.querySelectorAll('.counter button:first-child');
    const incrementBtns = document.querySelectorAll('.counter button:last-child');
    const toggleCartBtn = document.querySelector('#toggle-cart');
    const toggleMissingBtn = document.querySelector('#toggle-missing')

    toggleCartBtn.addEventListener('click', (e) => {
        if (toggleCartBtn.value === 'open') {
            hideProducts();
            toggleCartBtn.value = 'closed';
        } else {
            showProducts();
            toggleCartBtn.value = 'open';
        }
    })

    toggleMissingBtn.addEventListener('click', (e) => {
        if (toggleMissingBtn.value === 'open') {
            hideMissing();
            toggleMissingBtn.value = 'closed';
        } else {
            showMissing();
            toggleMissingBtn.value = 'open';
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
generateMissing()
attachEventListeners();




