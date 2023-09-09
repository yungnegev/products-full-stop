import { products } from '../data/data.js';

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
                    </div>
                    <div class="cart-item__description">
                        <p>${product.title}</p>
                        <div class="description-attributes">
                            ${product.color ? `<span>Цвет: ${product.color}</span>` : ''}
                            ${product.size ? `<span>Размер: ${product.size}</span>` : ''}
                        </div>
                        <p class="description-location">${product.address}</p>
                        <div class="description-company">
                            <p>${product.producer}</p>
                            <button>
                                <img src="./assets/icons/info.svg" alt="info">
                            </button>
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
                                ${product.price * product.innitialQuanitity}
                            </span>
                            <span class="price-currency">сом</span>
                        </div>
                        <p 
                         class="no-discount-price" 
                         data-no-discount=${product.noDiscount}
                         id=d-${product.id}
                         >
                         ${product.noDiscount * product.innitialQuanitity} сом
                         </p>
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