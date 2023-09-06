import { cards } from '../data/data.js';


export const selectPaymentOption = (paymentOption, paymentOptions, changeCardBtn) => {
    paymentOptions.forEach((paymentOption) => {
        paymentOption.querySelector('img').src = './assets/icons/checkboxRoundEmpty.svg';
    });
    paymentOption.querySelector('img').src = './assets/icons/checkboxRound.svg';

    changeCardBtn.dataset.id = paymentOption.dataset.id;
}

export const setPaymentOption  =  (id, cardIcons, cardNumberDisplays) => {
    const card = cards.find((item) => item.id === +id);
    cardIcons.forEach((icon) => {
        icon.src = card.icon;
    });
    cardNumberDisplays.forEach((number) => {
        number.textContent = card.number;
    });
}