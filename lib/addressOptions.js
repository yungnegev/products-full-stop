import { homeAddresses, deliveryPointAddresses } from '../data/data.js'

export const selectAddressOption = (option, addressOptions, changeAddressBtn) => {
    addressOptions.forEach((option) => {
        option.querySelector('img').src = './assets/icons/checkboxRoundEmpty.svg';
    });
    option.querySelector('img').src = './assets/icons/checkboxRound.svg';

    changeAddressBtn.dataset.id = option.dataset.id;
}


export const setAddressOption = (id, type, addressDisplays, addressTypeDisplays) => {
    let address;
    if (type === 'home') {
        address = homeAddresses.find((item) => item.id === parseInt(id));
    } else {
        address = deliveryPointAddresses.find((item) => item.id === parseInt(id));
    }
    addressDisplays.forEach((display) => {
        display.textContent = address.address;
    });
    addressTypeDisplays.forEach((display) => {
        console.log(type);
        display.textContent = type === 'home' ? 'Доставка курьером' : 'Довтавка в пункт выдачи';
    });
}