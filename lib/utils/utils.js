export const spacesForThousands = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

export const smallSpacesForThousands = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

export const removeSpaces = (number) => {
    return number.toString().replace(/\s/g, '');
}

export const addSpacesForPhone = (number) => {
    const numberWithoutSpaces = removeSpaces(number);
    const firstPart = numberWithoutSpaces.slice(0, 2);
    const secondPart = numberWithoutSpaces.slice(2, 5);
    const thirdPart = numberWithoutSpaces.slice(5, 8);
    const fourthPart = numberWithoutSpaces.slice(8, 10);
    const fifthPart = numberWithoutSpaces.slice(10, 12);
    return `${firstPart} ${secondPart} ${thirdPart} ${fourthPart} ${fifthPart}`;
}

export const isSmallScreen = () => {
    return window.innerWidth < 500;
}

export const conjugate = (number, one, two, five) => {
    const lastDigit = number % 10;
    const lastTwoDigits = number % 100;
    if (lastTwoDigits > 10 && lastTwoDigits < 20) {
        return five;
    }
    if (lastDigit === 1) {
        return one;
    }
    if (lastDigit > 1 && lastDigit < 5) {
        return two;
    }
    return five;
}