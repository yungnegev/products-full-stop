import { products } from '../data/data.js';

const createDeliverySection = () => {
    const section = document.createElement('section');
    section.classList.add('action-card', 'action-card-delivery');
    section.innerHTML = `
        <div class="action-card__header">
            <h2>Способ доставки</h2>
            <button type="button" id="open-address-modal-card">Изменить</button>
        </div>
        <div class="action-card__entry">
            <div class="card-entry-title address-type-display">Пункт выдачи</div>
            <div class="card-entry-content">
                <p class="address-display">Бишкек, улица Ахматбека Суюмбаева, 12/1</p>
                <div class="delivery-rating">
                    <img src="./assets/icons/star.svg" alt="star">
                    <span>4.99</span>
                    <p>Ежедневно с 10 до 21 </p>
                </div>
            </div>
        </div>
        <div class="action-card__entry">
            <div class="card-entry-title">Стоимость доставки</div>
            <div class="card-entry-content">Бесплатно</div>
        </div>
        <div class="action-card__entry">
            <div class="card-entry-title">5—6 февраля</div>
            <div class="card-entry-content">
                <div class="delivery-images">
                    ${products.map((product) => {
                        return `
                        <div class="card-image-container">
                            <img src=${product.img} alt="product">
                            <span class="card-product-qty">${product.innitialQuanitity}</span>
                        </div>
                        `
                    }).join('')}
                </div>
            </div>
        </div>
        <div class="action-card__entry">
            <div class="card-entry-title">7—8 февраля</div>
            <div class="card-entry-content">
                <div class="delivery-images">
                    <img src="./assets/images/prod2.png" alt="product">
                </div>
            </div>
        </div>
        <div class="card-free-delivery">
            <div>
                <img src="./assets/icons/greenCheck.svg" alt="delivery">
            </div>
            <div>Обратная доставка товаров на склад при отказе — <span class="green-underline">бесплатно</span></div>
        </div>
    `;

    return section;
}


export const generateDeliverySection = () => {
    const container = document.querySelector('.action-card-container');
    const section = createDeliverySection();
    container.appendChild(section);
}