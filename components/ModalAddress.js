import { homeAddresses } from '../data/data.js';

const createAddressModal = () => {
    const modal = document.createElement('div');
    modal.classList.add('modal-address');
    modal.innerHTML = `
        <div class="modal-content-address">
            <div class="modal-header">
                <h2>Способ доставки</h2>
                <button type="button" id="modal-address-close">
                    <img src="./assets/icons/close.svg" alt="close-icon">
                </button>
            </div>
            <div class="modal-button-select">
                <button type="button" id="choose-pickup">В пункт выдачи</button>
                <button type="button" id="chose-courrier">Курьером</button>
            </div>
            <h2 class="modal-subheading">Мои адреса</h2>
            <div class="modal-address-body">
                <div class="modal-address-options">

                </div>
                <button type="button" id="change-address" data-id="1" data-type="home">Выбрать</button>
            </div>
        </div>
    `
    return modal;
}

const createAddressOptions = (container) => {
    return (container.innerHTML = homeAddresses.map((item) => {
        return `
        <div class="modal-address-option" data-id=${item.id}>
            <img src="./assets/icons/${item.default ? 'checkboxRound' : 'checkboxRoundEmpty'}.svg" alt="checkbox">
            <div class="modal-address-text">${item.address}</div>
            <button>
                <img src="./assets/icons/bin.svg" alt="remove-address">
            </button>
        </div>  
        `;
    }).join(''))
}

export const generateAddressModal = () => {
    const app = document.querySelector('#app');
    const modal = createAddressModal();
    app.appendChild(modal);
    const modalAddress = document.querySelector('.modal-address-options');
    createAddressOptions(modalAddress);
}

