

const createFormSection = () => {
    const section = document.createElement('section');
    section.classList.add('action-card');
    section.innerHTML = `
        <div class="action-card__header">
            <h2>Получатель</h2>
        </div>
        <div class="form-container">
            <form action="/">
                <div class="field-holder">
                    <input type="text" id="form-name" placeholder="">
                    <label for="form-name">Имя</label>
                    <span class="form-error" id="form-error-name"></span>
                </div>
                <div class="field-holder">
                    <input type="text" id="form-surname" placeholder="">
                    <label for="form-surname">Фамилия</label>
                    <span class="form-error" id="form-error-surname"></span>
                </div>
                <div class="field-holder">
                    <input type="text" id="form-email" placeholder="">
                    <label for="form-email">Почта</label>
                    <span class="form-error" id="form-error-email"></span>
                </div>
                <div class="field-holder">
                    <input type="text" id="form-phone" placeholder="">
                    <label for="form-phone">Телефон</label>
                    <span class="form-error" id="form-error-phone"></span>
                </div>
                <div class="field-holder">
                    <input type="text" id="form-inn" placeholder="">
                    <label for="form-inn">ИНН</label>
                    <span class="form-error" id="form-error-inn"></span>
                </div>
            </form>
        </div>
    `
    return section;
}


export const generateFormSection = () => {
    const container = document.querySelector('.action-card-container')
    const section = createFormSection();
    container.appendChild(section);
}