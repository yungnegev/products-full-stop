import { missingProducts } from '../data/data.js';

export const generateMissing = () => {
    const missingItems = document.querySelector('.missing-items');
    return (missingItems.innerHTML = missingProducts.map((product) => {
        return `
            <div class="missing-item">
            <div class="missing-item__left">
                <img src=${product.img} alt="missing-product">
                ${product.size ? `<span class="missing-size-display-mobile">${product.size}</span>` : ''}
                <div class="missing-item__description">
                    <div class="missing-item__title">${product.title}</div>
                    <div class="missing-item__attributes">
                    ${product.color ? `<span>Цвет: ${product.color}</span>` : ''}
                    ${product.size ? `<span class="missing-size-display">Размер: ${product.size}</span>` : ''}
                    </div>
                </div>
            </div>
            <div class="missing-item__right">
                <div class="icon-tray">
                    <img src="./assets/icons/heart.svg" alt="like">
                    <img src="./assets/icons/bin.svg" alt="bin">
                </div>
            </div>
        </div>`;
    }).join(''))
}

export const hideMissing = () => {
    const missingItems = document.querySelector('.missing-items');
    missingItems.style.display = 'none';
}

export const showMissing = () => {
    const missingItems = document.querySelector('.missing-items');
    missingItems.style.display = 'flex';
}