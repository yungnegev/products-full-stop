import { homeAddresses, deliveryPointAddresses } from '../data/data.js';

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
                <button type="button" id="choose-deliverypoint">В пункт выдачи</button>
                <button type="button" id="chose-courrier">Курьером</button>
            </div>
            <h2 class="modal-subheading">Мои адреса</h2>
            <div class="modal-address-body">
                <div class="modal-address-options home-address-options"></div>
                <div class="modal-address-options deliverypoint-address-options"></div>
                <button type="button" id="change-address" data-id="1" data-type="home">Выбрать</button>
            </div>
        </div>
    `
    return modal;
}

const createAddressOptions = (container, items) => {
    return (container.innerHTML = items.map((item) => {
        return `
        <div class="modal-address-option" data-id=${item.id} data-type=${item.type}>
            <img src="./assets/icons/${item.default ? 'checkboxRound' : 'checkboxRoundEmpty'}.svg" alt="checkbox">
            <div class="modal-address-text">${item.address} ${
                item.type === 'deliveryPoint' 
                    ? `<span class="modal-delivery-rating"><img src="./assets/icons/star.svg"> ${item.rating} <span style="color:gray">Пункт выдачи</span></span> `
                    : ''
            }</div>
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
    const modalAddress = document.querySelector('.home-address-options');
    createAddressOptions(modalAddress, homeAddresses);
    const modalAddress2 = document.querySelector('.deliverypoint-address-options');
    createAddressOptions(modalAddress2, deliveryPointAddresses);
}


export const setDeleieryPointAddresses = (choseCourrierBtn, choseDeliveryPointBtn) => {
    const modalHomeAddress = document.querySelector('.home-address-options');
    const modalDeliveryPointAddress = document.querySelector('.deliverypoint-address-options');
    
    modalHomeAddress.style.display = 'none';
    modalDeliveryPointAddress.style.display = 'flex';
    choseDeliveryPointBtn.style.border = '2px solid #CB11AB';
    choseCourrierBtn.style.border = '2px solid rgba(203, 17, 171, 0.15)';
}

export const setHomeAddresses = (choseCourrierBtn, choseDeliveryPointBtn) => {
    const modalHomeAddress = document.querySelector('.home-address-options');
    const modalDeliveryPointAddress = document.querySelector('.deliverypoint-address-options');

    modalHomeAddress.style.display = 'flex';
    modalDeliveryPointAddress.style.display = 'none';
    choseCourrierBtn.style.border = '2px solid #CB11AB';
    choseDeliveryPointBtn.style.border = '2px solid rgba(203, 17, 171, 0.15)';
}

export const selectAddressOption = (option, addressOptions, changeAddressBtn) => {
    addressOptions.forEach((option) => {
        option.querySelector('img').src = './assets/icons/checkboxRoundEmpty.svg';
    });
    option.querySelector('img').src = './assets/icons/checkboxRound.svg';

    changeAddressBtn.dataset.id = option.dataset.id;
    changeAddressBtn.dataset.type = option.dataset.type;
}


export const setAddressOption = (id, type, addressDisplays, addressTypeDisplays, deliveryRating) => {
    let address;
    if (type === 'home') {
        address = homeAddresses.find((item) => item.id === parseInt(id));
        deliveryRating.style.display = 'none';
    } else {
        address = deliveryPointAddresses.find((item) => item.id === parseInt(id));
        deliveryRating.style.display = 'flex';
    }
    addressDisplays.forEach((display) => {
        display.textContent = address.address;
    });
    addressTypeDisplays.forEach((display) => {
        display.textContent = type === 'home' ? 'Доставка курьером' : 'Довтавка в пункт выдачи';
    });
}