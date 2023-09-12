import { addSpacesForPhone, isSmallScreen } from './utils/utils.js';

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
        name.addEventListener('input', validateNameInput);
    } else {
        removeError(name, 'form-error-name');
        name.removeEventListener('input', validateNameInput);
    }
}

const validateSurnameInput = () => {
    const surname = document.getElementById('form-surname');
    const surnameValue = surname.value.trim();
    if (!isValidName(surnameValue)) {
        setError(surname, 'form-error-surname', 'Введите фамилию');
        surname.addEventListener('input', validateSurnameInput);
    } else {
        removeError(surname, 'form-error-surname');
        surname.removeEventListener('input', validateSurnameInput);
    }
}

const validateEmailInput = () => {
    const email = document.getElementById('form-email');
    const emailValue = email.value.trim();
    if (!isValidEmail(emailValue)) {
        setError(email, 'form-error-email', 'Проверьте адрес электронной почты');
        email.addEventListener('input', validateEmailInput);
    } else {
        removeError(email, 'form-error-email');
        email.removeEventListener('input', validateEmailInput);
    }
}

const validatePhoneInput = () => {
    const phone = document.getElementById('form-phone');
    const phoneValue = phone.value.trim()
    if (phoneValue === '') {
        removeError(phone, 'form-error-phone');
        phone.removeEventListener('input', validatePhoneInput);
    }else if (!isValidPhone(phoneValue)) {
        setError(phone, 'form-error-phone', 'Формат: +9 999 999 99 99');
        phone.addEventListener('input', validatePhoneInput);
    } else {
        removeError(phone, 'form-error-phone');
        phone.value = addSpacesForPhone(phoneValue);
        phone.removeEventListener('input', validatePhoneInput);
    }
}

const validateInnInput = () => {
    const inn = document.getElementById('form-inn');
    const innValue = inn.value.trim();
    const innAdditionalInfo = document.querySelector('.inn-additional-info');
    if (innValue === '') {
        removeError(inn, 'form-error-inn');
        inn.removeEventListener('input', validateInnInput);
        innAdditionalInfo.style.display = 'block';
    } else if (innValue.length !== 14 || isNaN(innValue)) {
        setError(inn, 'form-error-inn', 'Проверьте ИНН');
        inn.addEventListener('input', validateInnInput);
        innAdditionalInfo.style.display = 'none';
    } else {
        removeError(inn, 'form-error-inn');
        innAdditionalInfo.style.display = 'block';
        inn.removeEventListener('input', validateInnInput);
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
    const innAdditionalInfo = document.querySelector('.inn-additional-info');
    const options = {
        inline: 'center',
        block: 'center',
        behavior: 'smooth'
      }
    const smallScreen = isSmallScreen()

    if (nameValue === '') {
        setError(name, 'form-error-name', 'Укажите имя');
        name.addEventListener('input', validateNameInput);
        smallScreen ? name.scrollIntoView(options) : null;
    } else if (!isValidName(nameValue)) {
        setError(name, 'form-error-name', 'Укажите имя');
        name.addEventListener('input', validateNameInput);
        console.log(smallScreen)
        smallScreen ? name.scrollIntoView() : null;
    } else {
        removeError(name, 'form-error-name');
        name.removeEventListener('input', validateNameInput);
    }

    if (surnameValue === '') {
        setError(surname, 'form-error-surname', 'Введите фамилию');
        surname.addEventListener('input', validateSurnameInput);
        smallScreen ? surname.scrollIntoView(options) : null;
    } else if (!isValidName(surnameValue)) {
        setError(surname, 'form-error-surname', 'Введите фамилию');
        surname.addEventListener('input', validateSurnameInput);
        smallScreen ? surname.scrollIntoView(options) : null;
    } else {
        removeError(surname, 'form-error-surname');
        surname.removeEventListener('input', validateSurnameInput);
    }

    if (emailValue === '') {
        setError(email, 'form-error-email', 'Укажите электронную почту');
        email.addEventListener('input', validateEmailInput);
        smallScreen ? email.scrollIntoView(options) : null;
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'form-error-email', 'Проверьте адрес электронной почты');
        email.addEventListener('input', validateEmailInput);
        smallScreen ? email.scrollIntoView(options) : null;
    } else {
        removeError(email, 'form-error-email');
        email.removeEventListener('input', validateEmailInput);
    }

    if (phoneValue === '') {
        setError(phone, 'form-error-phone', 'Укажите номер телефона');
        phone.addEventListener('input', validatePhoneInput);
        smallScreen ? phone.scrollIntoView(options) : null;
    } else if (!isValidPhone(phoneValue)) {
        setError(phone, 'form-error-phone', 'Формат: +9 999 999 99 99');
        phone.addEventListener('input', validatePhoneInput);
        smallScreen ? phone.scrollIntoView(options) : null;
    } else {
        removeError(phone, 'form-error-phone');
        phone.value = addSpacesForPhone(phoneValue);
    }

    if (innValue === '') {
        setError(inn, 'form-error-inn', 'Укажите ИНН');
        inn.addEventListener('input', validateInnInput);
        innAdditionalInfo.style.display = 'none';
        smallScreen ? inn.scrollIntoView(options) : null;
    } else if (innValue.length !== 14 || isNaN(innValue)) {
        setError(inn, 'form-error-inn', 'Проверьте ИНН');
        innAdditionalInfo.style.display = 'none';
        inn.addEventListener('input', validateInnInput);
        smallScreen ? inn.scrollIntoView(options) : null;
    } else {
        removeError(inn, 'form-error-inn');
        inn.removeEventListener('input', validateInnInput);
        innAdditionalInfo.style.display = 'block';
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