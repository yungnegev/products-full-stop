export const increment = (id) => {
    // counter
    const counter = document.getElementById(`c-${id}`);
    const remaining = counter.dataset.remaining;
    if (remaining === 'null' || parseInt(counter.innerHTML) < parseInt(remaining)){
        counter.innerHTML = parseInt(counter.innerHTML) + 1;
    }
    // price
    const price = document.getElementById(`p-${id}`);
    const priceValue = price.dataset.price
    price.innerHTML = Math.round(parseInt(counter.innerHTML) * priceValue);
}

export const decrement = (id) => {
    // counter
    const counter = document.getElementById(`c-${id}`);
    if (counter.innerHTML > 1){
        counter.innerHTML = parseInt(counter.innerHTML) - 1;
    }
    // price 
    const price = document.getElementById(`p-${id}`);
    const priceValue = parseInt(price.dataset.price);
    price.innerHTML = Math.round(parseInt(counter.innerHTML) * priceValue);
}