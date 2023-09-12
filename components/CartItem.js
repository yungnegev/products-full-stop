import { products } from '../data/data.js';
import { spacesForThousands, smallSpacesForThousands } from '../lib/utils/utils.js';

export const generateProducts = () => {
    const cartItems = document.querySelector('.cart-items');
    return (cartItems.innerHTML = products.map((product) => {
        return `
            <div class="cart-item" id='cart-item-${product.id}'>
                <div class="cart-item__left">
                    <div class="image-with-checkbox">
                        <button type="button" class="cart-checkbox" value="on" data-splitdelivery="${product.delivery.splitDelivery}">
                            <img src="./assets/icons/checkbox.svg" alt="checkbox-icon">
                        </button>
                        <img src=${product.img} alt="item-image">
                        ${product.size ? `<span class="item-size-display-mobile">${product.size}</span>` : ''}
                    </div>
                    <div class="cart-item__description">
                        <p>${product.title}</p>
                        <div class="description-attributes">
                            ${product.color ? `<span>Цвет: ${product.color}</span>` : ''}
                            ${product.size ? `<span class="item-size-display">Размер: ${product.size}</span>` : ''}
                        </div>
                        <p class="description-location">${product.address}</p>
                        <div class="description-company">
                            <p>${product.producer.name}</p>
                            <div class="tooltip-producer">
                                <img src="./assets/icons/info.svg" alt="info">
                                <div class="tooltip-producer-body">
                                    <h2>${product.producer.name2}</h2>
                                    <p>ОГРН: ${product.producer.ogrn}</p>
                                    <p>${product.producer.address}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="cart-item__right">
                    <div class="counter-container">
                        <div class="counter">
                            <button data-id=${product.id} id=db-${product.id}>−</button>
                            <span class="quantity-value" 
                                         id=c-${product.id} 
                                         data-remaining=${product.quantityRemaining}
                                         >
                                ${product.innitialQuanitity}
                            </span>
                            <button data-id=${product.id} id=ib-${product.id}>+</button>
                        </div>
                        ${product.quantityRemaining ? `<span class="remaining-stock">Осталось ${product.quantityRemaining} шт.</span>` : ''}
                        <div class="icon-tray">
                            <img src="./assets/icons/heart.svg" alt="like">
                            <img src="./assets/icons/bin.svg" alt="bin">
                        </div>
                    </div>
                    <div class="price-container">
                        <div class="price">
                            <span class="price-value" 
                                  id=p-${product.id} 
                                  data-price=${product.price}
                                  style=${product.price * product.innitialQuanitity > 50000 ? `font-size:16px` : ''}  
                                  >
                                ${spacesForThousands(product.price * product.innitialQuanitity)}
                            </span>
                            <span class="price-currency">сом</span>
                        </div>
                        <div class="tooltip-discount">
                        <div 
                         class="no-discount-price" 
                         data-no-discount=${product.noDiscount}
                         id=d-${product.id}
                         >
                         ${smallSpacesForThousands(product.noDiscount * product.innitialQuanitity)} сом
                        </div>
                        <div class="tooltip-discount-body">
                        <div>
                            <p>Скидка 55%</p>
                            <p>−300 сом</p>
                        </div>
                        <div>
                            <p>Скидка 10%</p>
                            <p>−30 сом</p>
                        </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>`;
    }).join(''))
}

export const hideProducts = () => {
    const cartItems = document.querySelector('.cart-items');
    cartItems.style.display = 'none';
}


export const showProducts = () => {
    const cartItems = document.querySelector('.cart-items');
    cartItems.style.display = 'flex';
}