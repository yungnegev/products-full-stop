export const spacesForThousands = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

export const removeSpaces = (number) => {
    return number.toString().replace(/\s/g, '');
}