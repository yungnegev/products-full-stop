import { generateProducts, hideProducts, showProducts } from './components/CartItem.js';
import { generateMissing, hideMissing, showMissing } from './components/MissingItem.js';
import { decrement, increment } from './lib/counterOperations.js';
import { updateTotals, updateTotalBtn } from './lib/updateTotals.js';
import { validateInputs } from './lib/formValidation.js';
import { toggleCheckbox, toggleArrow } from './lib/checkboxToggle.js';

const attachEventListeners = () => {
    const decrementBtns = document.querySelectorAll('.counter button:first-child');
    const incrementBtns = document.querySelectorAll('.counter button:last-child');
    const toggleCartBtn = document.querySelector('#toggle-cart');
    const toggleMissingBtn = document.querySelector('#toggle-missing')
    const orderBtn = document.querySelector('#order');
    const paymentCheckbox = document.querySelector('#checkbox-instantpay');

    toggleCartBtn.addEventListener('click', (e) => {
        if (toggleCartBtn.value === 'open') {
            hideProducts();
            toggleArrow(toggleCartBtn);
        } else {
            showProducts();
            toggleArrow(toggleCartBtn);
        }
    })

    toggleMissingBtn.addEventListener('click', (e) => {
        if (toggleMissingBtn.value === 'open') {
            hideMissing();
            toggleArrow(toggleMissingBtn)
        } else {
            showMissing();
            toggleArrow(toggleMissingBtn)
        }
    })

    decrementBtns.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            const id = btn.dataset.id;
            const isBtnToggled = paymentCheckbox.value === 'on';
            decrement(id);
            updateTotals();
            updateTotalBtn(isBtnToggled);
        })
    });

    incrementBtns.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            const id = btn.dataset.id;
            const isBtnToggled = paymentCheckbox.value === 'on';
            increment(id);
            updateTotals();
            updateTotalBtn(isBtnToggled);
        })
    })

    orderBtn.addEventListener('click', (e) => {
        validateInputs();
    })

    paymentCheckbox.addEventListener('click', (e) => {
        const toggle = toggleCheckbox(paymentCheckbox);
        updateTotalBtn(toggle);
    })
}

generateProducts()
generateMissing()
attachEventListeners();




