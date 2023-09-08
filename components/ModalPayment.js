import { cards } from '../data/data.js';

const createPaymentModal = () => {
    const modal = document.createElement('div');
    modal.classList.add('modal-payment');
    modal.innerHTML = `
        <div class="modal-content-payment">
            <div class="modal-header">
                <h2>Способ оплаты</h2>
                <button type="button" id="modal-payment-close">
                    <img src="./assets/icons/close.svg" alt="close-icon">
                </button>
            </div>
            <div class="modal-payment-body">
                <div class="modal-payment-methods"></div>
                <button type="button" id="change-card" data-id="1">Выбрать</button>
            </div>
        </div>
    `
    return modal;
}

const createPaymentMethod = (container) => {
    return (container.innerHTML = cards.map((item) => {
        return `
        <div class="modal-payment-method" data-id=${item.id} data-type=${item.type}>
            <img src="./assets/icons/${item.default ? 'checkboxRound' : 'checkboxRoundEmpty'}.svg" alt="checkbox">
            <div class="modal-card-choice">
                <div class="grey-bg-rounded">
                    <img src=${item.icon} alt="icon">
                </div>
                <div id="modal-card-number-${item.id}">${item.number}</div>
            </div>
        </div>    
        `;
    }).join(''))
}

export const generatePaymentModal = () => {
    const app = document.querySelector('#app');
    const modal = createPaymentModal();
    app.appendChild(modal);
    const modalPaymentMethods = document.querySelector('.modal-payment-methods');
    createPaymentMethod(modalPaymentMethods);
}


export const selectPaymentOption = (paymentOption, paymentOptions, changeCardBtn) => {
    paymentOptions.forEach((paymentOption) => {
        paymentOption.querySelector('img').src = './assets/icons/checkboxRoundEmpty.svg';
    });
    paymentOption.querySelector('img').src = './assets/icons/checkboxRound.svg';

    changeCardBtn.dataset.id = paymentOption.dataset.id;
}

export const setPaymentOption  =  (id, cardIcons, cardNumberDisplays) => {
    const card = cards.find((item) => item.id === parseInt(id));
    cardIcons.forEach((icon) => {
        icon.src = card.icon;
    });
    cardNumberDisplays.forEach((number) => {
        number.textContent = card.number;
    });
}
