export const increment = (id) => {
    const span = document.getElementById(`c-${id}`);
    span.innerHTML = parseInt(span.innerHTML) + 1;
}

export const decrement = (id) => {
    const span = document.getElementById(`c-${id}`);
    if (span.innerHTML > 1){
        span.innerHTML = parseInt(span.innerHTML) - 1;
    }
}