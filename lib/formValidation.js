const name = document.getElementById('form-name');
const surname = document.getElementById('form-surname');
const email = document.getElementById('form-email');
const phone = document.getElementById('form-phone');
const inn = document.getElementById('form-inn');


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
    const nameRegex = /^[a-zA-Zа-яА-Я]+$/;
    return nameRegex.test(name);
}

const isValidEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/;
    return emailRegex.test(email);
}

const isValidPhone = (phone) => {
    const phoneRegex = /^\+7\d{10}$/;
    return phoneRegex.test(phone);
}

export const validateInputs = () => {
    const nameValue = name.value.trim();
    const surnameValue = surname.value.trim();
    const emailValue = email.value.trim();
    const phoneValue = phone.value.trim();
    const innValue = inn.value.trim();

    if (nameValue === '') {
        setError(name, 'form-error-name', 'Укажите имя');
    } else if (!isValidName(nameValue)) {
        setError(name, 'form-error-name', 'Укажите имя');
    } else {
        removeError(name, 'form-error-name');
    }

    if (surnameValue === '') {
        setError(surname, 'form-error-surname', 'Укажите фамилию');
    } else if (!isValidName(surnameValue)) {
        setError(surname, 'form-error-surname', 'Укажите фамилию');
    } else {
        removeError(surname, 'form-error-surname');
    }

    if (emailValue === '') {
        setError(email, 'form-error-email', 'Укажите email');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'form-error-email', 'Укажите email');
    } else {
        removeError(email, 'form-error-email');
    }

    if (phoneValue === '') {
        setError(phone, 'form-error-phone', 'Укажите телефон');
    } else if (!isValidPhone(phoneValue)) {
        setError(phone, 'form-error-phone', 'Укажите телефон');
    } else {
        removeError(phone, 'form-error-phone');
    }

    if (innValue === '') {
        setError(inn, 'form-error-inn', 'Укажите ИНН');
    } else if (innValue.length !== 11 || isNaN(innValue)) {
        setError(inn, 'form-error-inn', 'Укажите ИНН');
    } else {
        removeError(inn, 'form-error-inn');
    }
}