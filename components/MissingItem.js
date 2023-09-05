import { missingProducts } from '../data/data.js';

const missingItems = document.querySelector('.missing-items');

export const generateMissing = () => {
    return (missingItems.innerHTML = missingProducts.map((product) => {
        return `
            <div class="missing-item">
            <div class="missing-item__left">
                <img src=${product.img} alt="missing-product">
                <div class="missing-item__description">
                    <div class="missing-item__title">${product.title}</div>
                    <div class="missing-item__attributes">
                    ${product.color ? `<span>Цвет: ${product.color}</span>` : ''}
                    ${product.size ? `<span>Размер: ${product.size}</span>` : ''}
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
    missingItems.style.display = 'none';
}

export const showMissing = () => {
    missingItems.style.display = 'flex';
}