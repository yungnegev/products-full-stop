

const createPaymentOptionCard = () => {
    const section = document.createElement('section');
    section.classList.add('action-card');
    section.innerHTML = `
        <div class="action-card__header">
            <h2>Способ оплаты</h2>
            <button type="button" id="open-payment-modal-card">Изменить</button>
        </div>
        <div>
            <div class="payment-card-display">
                <div class="grey-bg-rounded">
                    <img src="./assets/icons/mir.svg" alt="mir" class="card-icon">
                </div>
                <div class="card-number">1234 56•• •••• 1234</div>
                <span>01/30</span>
            </div>
            <div class="text-gray-sm remove-on-toggle">Спишем оплату с карты при получении</div>
        </div>
    `
    return section;
}


export const generatePaymentSection = () => {
    const container = document.querySelector('.action-card-container')
    const section = createPaymentOptionCard();
    container.appendChild(section);
}