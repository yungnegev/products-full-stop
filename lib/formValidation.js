import { addSpacesForPhone } from './utils/utils.js';

const setError = (input, elementId, message) => {
    const errorDisplay = document.getElementById(elementId);
    input.classList.add('input-error');
    errorDisplay.innerText = message;
}

const removeError = (input, elementId) => {
    const errorDisplay = document.getElementById(elementId);
    input.classList.remove('input-error');
    errorDisplay.innerText = '';
}

const isValidName = (name) => {
    const nameRegex = /^$|^[a-zA-Zа-яА-Я]+$/;
    return nameRegex.test(name);
}

const isValidEmail = (email) => {
    const emailRegex = /^$|^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/;
    return emailRegex.test(email);
}

const isValidPhone = (phone) => {
    const phoneRegex = /^$|^\+?[0-9]{1,12}$/;
    const phoneRegex2 = /^$|^\+?[0-9]{1} [0-9]{3} [0-9]{3} [0-9]{2} [0-9]{2}$/;
    return phoneRegex.test(phone) || phoneRegex2.test(phone);
}

const validateNameInput = () => {
    const name = document.getElementById('form-name');
    const nameValue = name.value.trim();
    if (!isValidName(nameValue)) {
        setError(name, 'form-error-name', 'Укажите имя');
    } else {
        removeError(name, 'form-error-name');
    }
}

const validateSurnameInput = () => {
    const surname = document.getElementById('form-surname');
    const surnameValue = surname.value.trim();
    if (!isValidName(surnameValue)) {
        setError(surname, 'form-error-surname', 'Введите фамилию');
    } else {
        removeError(surname, 'form-error-surname');
    }
}

const validateEmailInput = () => {
    const email = document.getElementById('form-email');
    const emailValue = email.value.trim();
    if (!isValidEmail(emailValue)) {
        setError(email, 'form-error-email', 'Проверьте адрес электронной почты');
    } else {
        removeError(email, 'form-error-email');
    }
}

const validatePhoneInput = () => {
    const phone = document.getElementById('form-phone');
    const phoneValue = phone.value.trim()
    if (phoneValue === '') {
        removeError(phone, 'form-error-phone');
    }else if (!isValidPhone(phoneValue)) {
        setError(phone, 'form-error-phone', 'Формат: +9 999 999 99 99');
    } else {
        removeError(phone, 'form-error-phone');
        phone.value = addSpacesForPhone(phoneValue);
    }
}

const validateInnInput = () => {
    const inn = document.getElementById('form-inn');
    const innValue = inn.value.trim();
    if (innValue === '') {
        removeError(inn, 'form-error-inn');
    } else if (innValue.length !== 11 || isNaN(innValue)) {
        setError(inn, 'form-error-inn', 'Проверьте ИНН');
    } else {
        removeError(inn, 'form-error-inn');
    }
}

export const validateAllInputs = () => {
    const phone = document.getElementById('form-phone');
    const phoneValue = phone.value.trim();
    const name = document.getElementById('form-name');
    const nameValue = name.value.trim();
    const surname = document.getElementById('form-surname');
    const surnameValue = surname.value.trim();
    const email = document.getElementById('form-email');
    const emailValue = email.value.trim();
    const inn = document.getElementById('form-inn');
    const innValue = inn.value.trim();

    if (nameValue === '') {
        setError(name, 'form-error-name', 'Укажите имя');
    } else if (!isValidName(nameValue)) {
        setError(name, 'form-error-name', 'Укажите имя');
    } else {
        removeError(name, 'form-error-name');
    }

    if (surnameValue === '') {
        setError(surname, 'form-error-surname', 'Введите фамилию');
    } else if (!isValidName(surnameValue)) {
        setError(surname, 'form-error-surname', 'Введите фамилию');
    } else {
        removeError(surname, 'form-error-surname');
    }

    if (emailValue === '') {
        setError(email, 'form-error-email', 'Укажите электронную почту');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'form-error-email', 'Проверьте адрес электронной почты');
    } else {
        removeError(email, 'form-error-email');
    }

    if (phoneValue === '') {
        setError(phone, 'form-error-phone', 'Укажите номер телефона');
    } else if (!isValidPhone(phoneValue)) {
        setError(phone, 'form-error-phone', 'Формат: +9 999 999 99 99');
    } else {
        removeError(phone, 'form-error-phone');
    }

    if (innValue === '') {
        setError(inn, 'form-error-inn', 'Укажите ИНН');
    } else if (innValue.length !== 14 || isNaN(innValue)) {
        setError(inn, 'form-error-inn', 'Проверьте ИНН');
    } else {
        removeError(inn, 'form-error-inn');
    }
}

export const validateInputEventListeners = () => {
    const name = document.getElementById('form-name');
    const surname = document.getElementById('form-surname');
    const email = document.getElementById('form-email');
    const phone = document.getElementById('form-phone');
    const inn = document.getElementById('form-inn');

    name.addEventListener('blur', validateNameInput);
    surname.addEventListener('blur', validateSurnameInput);
    email.addEventListener('blur', validateEmailInput);
    phone.addEventListener('blur', validatePhoneInput);
    inn.addEventListener('blur', validateInnInput);
}