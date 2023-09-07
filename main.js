import { generateProducts, hideProducts, showProducts } from './components/CartItem.js';
import { generateMissing, hideMissing, showMissing } from './components/MissingItem.js';
import { decrement, increment } from './lib/counterOperations.js';
import { updateTotals, updateTotalBtn, updateHeaderCart } from './lib/updateTotals.js';
import { validateInputs } from './lib/formValidation.js';
import { toggleCheckbox, toggleArrow } from './lib/checkboxToggle.js';
import { updateSectionHeading, toggleSeparatorDiv } from './lib/minimizeSection.js';
import { updateSelectAllCheckbox } from './lib/updateSelectAllCheckbox.js';
import { generatePaymentModal } from './components/ModalPayment.js';
import { generateAddressModal } from './components/ModalAddress.js';
import { selectPaymentOption, setPaymentOption } from './lib/paymentOptions.js';
import { selectAddressOption, setAddressOption } from './lib/addressOptions.js';

const attachEventListeners = () => {
    const decrementBtns = document.querySelectorAll('.counter button:first-child');
    const incrementBtns = document.querySelectorAll('.counter button:last-child');
    const toggleCartBtn = document.querySelector('#toggle-cart');
    const toggleMissingBtn = document.querySelector('#toggle-missing')
    const orderBtn = document.querySelector('#order');
    const paymentCheckbox = document.querySelector('#checkbox-instantpay');
    const cartItemsCheckboxes = document.querySelectorAll('.cart-checkbox');
    const selectAllCheckbox = document.querySelector('#select-all-products');
    const modalPayment = document.querySelector('.modal-payment');
    const modalPaymentCloseBtn = document.querySelector('#modal-payment-close');
    const modalPaymentOpenBtn = document.querySelector('#open-payment-modal-checkout');
    const modalPaymentOpenBtn2 = document.querySelector('#open-payment-modal-card');
    const paymentOptions = document.querySelectorAll('.modal-payment-method');
    const changeCardBtn = document.querySelector('#change-card');
    const cardNumberDisplays = document.querySelectorAll('.card-number');
    const cardIcons = document.querySelectorAll('.card-icon');
    const modalAddress = document.querySelector('.modal-address');
    const openAddressModalBtn = document.querySelector('#open-address-modal-checkout');
    const openAddressModalBtn2 = document.querySelector('#open-address-modal-card');
    const closeAddressModalBtn = document.querySelector('#modal-address-close');
    const addressOptions = document.querySelectorAll('.modal-address-option');
    const changeAddressBtn = document.querySelector('#change-address');
    const addressDisplays = document.querySelectorAll('.address-display');
    const addressTypeDisplays = document.querySelectorAll('.address-type-display');

    toggleCartBtn.onclick = () => {
        if (toggleCartBtn.value === 'open') {
            hideProducts();
            updateSectionHeading('closed');
            toggleArrow(toggleCartBtn);
        } else {
            showProducts();
            updateSectionHeading('open');
            toggleArrow(toggleCartBtn);
        }
        toggleSeparatorDiv();
    }

    toggleMissingBtn.onclick = () => {
        if (toggleMissingBtn.value === 'open') {
            hideMissing();
            toggleArrow(toggleMissingBtn)
        } else {
            showMissing();
            toggleArrow(toggleMissingBtn)
        }
        toggleSeparatorDiv();
    }

    decrementBtns.forEach((btn) => {
        btn.onclick = () => {
            const id = btn.dataset.id;
            const isBtnToggled = paymentCheckbox.value === 'on';
            decrement(id);
            updateTotals();
            updateTotalBtn(isBtnToggled);
        }
    });

    incrementBtns.forEach((btn) => {
        btn.onclick = () => {
            const id = btn.dataset.id;
            const isBtnToggled = paymentCheckbox.value === 'on';
            increment(id);
            updateTotals();
            updateTotalBtn(isBtnToggled);
        }
    })

    orderBtn.onclick = () => validateInputs();


    paymentCheckbox.onclick = () => {
        const toggle = toggleCheckbox(paymentCheckbox);
        updateTotalBtn(toggle);
    }

    cartItemsCheckboxes.forEach((checkbox) => {
        checkbox.onclick = () => {
            toggleCheckbox(checkbox);
            const isBtnToggled = paymentCheckbox.value === 'on';
            updateHeaderCart();
            updateTotals();
            updateTotalBtn(isBtnToggled);
            updateSelectAllCheckbox(cartItemsCheckboxes, selectAllCheckbox);
        }
    });

    selectAllCheckbox.onclick = () => {
        cartItemsCheckboxes.forEach((checkbox) => {
            if (checkbox.value === 'off') {
                toggleCheckbox(checkbox);
                const isBtnToggled = paymentCheckbox.value === 'on';
                updateHeaderCart();
                updateTotals();
                updateTotalBtn(isBtnToggled);
                updateSelectAllCheckbox(cartItemsCheckboxes, selectAllCheckbox);
            }
        })
    };

    modalPaymentCloseBtn.onclick = () => {
        modalPayment.style.display = 'none';
    }

    modalPaymentOpenBtn.onclick = () => {
        modalPayment.style.display = 'flex';
    }

    modalPaymentOpenBtn2.onclick = () => {
        modalPayment.style.display = 'flex';
    }

    paymentOptions.forEach((option) => {
        option.onclick = () => {
            selectPaymentOption(option, paymentOptions, changeCardBtn);
        }
    });

    changeCardBtn.onclick = () => {
        const id = changeCardBtn.dataset.id;
        setPaymentOption(id, cardIcons, cardNumberDisplays);
        modalPayment.style.display = 'none';
    }

    openAddressModalBtn.onclick = () => {
        modalAddress.style.display = 'flex';
    }

    openAddressModalBtn2.onclick = () => {
        modalAddress.style.display = 'flex';
    }

    closeAddressModalBtn.onclick = () => {
        modalAddress.style.display = 'none';
    }

    window.addEventListener('click', (e) => {
        if (e.target === modalPayment) {
            modalPayment.style.display = 'none';
        }
        if (e.target === modalAddress) {
            modalAddress.style.display = 'none';
        }
    });

    addressOptions.forEach((option) => {
        option.onclick = () => {
            selectAddressOption(option, addressOptions, changeAddressBtn);
        }
    });

    changeAddressBtn.onclick = () => {
        const id = changeAddressBtn.dataset.id;
        const type = changeAddressBtn.dataset.type;
        setAddressOption(id, type, addressDisplays, addressTypeDisplays);
        modalAddress.style.display = 'none';
    };
}

const init = () => {
    generateProducts()
    generateMissing()
    generatePaymentModal()
    generateAddressModal()
    attachEventListeners();
}

init();




