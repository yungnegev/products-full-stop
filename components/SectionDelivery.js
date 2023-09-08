import { products } from '../data/data.js';

const createEntryByDate = () => {
    let dates;
    for(let prduct of products) {
        if(prduct.delivery.deliveryDates.length > 1) {
            dates = prduct.delivery.deliveryDates;
            break;
        }
    }
    const entry = dates.map((date) => {
        return `
        <div class="action-card__entry delivery-date-entry" data-date="${date}" >
            <div class="card-entry-title ">${date}</div>
            <div class="card-entry-content">
                <div class="delivery-images" data-date="${date}"></div>
            </div>
        </div>
        `
    }).join('');

    return entry;
}

const fillDeliveryImages = () => {
  const containers = document.querySelectorAll('.delivery-images');
  containers.forEach((container, index) => {
    container.innerHTML =
      container.dataset.date === products[index].delivery.deliveryDates[index]
        ? products
            .map((product) => {
              if (
                product.delivery.deliveryDates[index] === container.dataset.date
              ) {
                return `
                            <div class="card-image-container" data-splitdelivery="${product.delivery.splitDelivery}">
                                <img src="${product.img}" alt="product">
                                <div class="card-product-qty">${
                                  product.delivery.splitDelivery
                                    ? product.delivery.deliveryCutoff[index]
                                    : product.innitialQuanitity
                                }</div>
                            </div>
                        `;
              }
            })
            .join('')
        : '';
  });
};

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
        ${createEntryByDate()} 
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
    fillDeliveryImages();
}


export const updateDeliveryItems = () => {
    const deliveryDates = document.querySelectorAll('.delivery-date-entry');
    const deliveryItems = document.querySelectorAll('.card-image-container');
    const cardQties = document.querySelectorAll('.card-product-qty');
    const liveQties = document.querySelectorAll('.quantity-value');
    const cartItemsCheckboxes = document.querySelectorAll('.cart-checkbox');

    let quantities = Array.from(liveQties).map((qty) => qty.innerText);
    let cutoffs = products.map((product) => product.delivery.deliveryCutoff);
    let buttonValues = Array.from(cartItemsCheckboxes).map((checkbox) => checkbox.value);
    quantities = quantities.map((qty) => parseInt(qty));
    cutoffs = cutoffs.map((cutoff) => parseInt(cutoff));

    const allEqual = arr => arr.every( v => v === arr[0] )

    deliveryDates.forEach((date, index) => {
        if(allEqual(buttonValues) && buttonValues[0] === 'off') {
            date.style.display = 'none';
        }
        if(allEqual(buttonValues) && buttonValues[0] === 'on') {
            date.style.display = 'flex';
        }
    });

    quantities.forEach((qty, index) => {
        if(cartItemsCheckboxes[index].value === 'off') {
            deliveryItems[index].style.display = 'none';
        }
        if (cartItemsCheckboxes[index].value === 'on' && deliveryItems[index].dataset.splitdelivery === 'false') {
            deliveryItems[index].style.display = 'flex';
            cardQties[index].innerText = qty;
        }
    })

    const splitDeliveryItems = Array.from(deliveryItems).filter((item) => item.dataset.splitdelivery === 'true');
    const splitDeliveryCheckbox = document.querySelector('.cart-checkbox[data-splitdelivery="true"]');

    if (splitDeliveryCheckbox.value === 'off') {
        splitDeliveryItems.forEach(item => item.style.display = 'none')
        deliveryDates[1].style.display = 'none';
    }

    if (splitDeliveryCheckbox.value === 'on') {
        splitDeliveryItems.forEach(item => item.style.display = 'flex')
        deliveryDates[1].style.display = 'flex';
    }

    const splitDeliveryProducs = products.filter((product) => product.delivery.splitDelivery === true);
    const splitDeliveryQties = Array.from(splitDeliveryItems).map((item) => item.querySelector('.card-product-qty'));
    const cutoff = splitDeliveryProducs[0].delivery.deliveryCutoff[0];

    if (quantities[1] > cutoff) {
        splitDeliveryQties[0].innerText = cutoff;
        splitDeliveryQties[1].innerText =  quantities[1] - cutoff;
    }

    if (quantities[1] <= cutoff) {
        splitDeliveryQties[0].innerText = quantities[1];
        deliveryDates[1].style.display = 'none';
    }
}