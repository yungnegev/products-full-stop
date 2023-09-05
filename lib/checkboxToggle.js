export const toggleCheckbox = (checkbox) => {
    if (checkbox.value === 'off') {
        checkbox.value = 'on';
        checkbox.innerHTML = `<img src="./assets/icons/checkbox.svg" alt="checkbox-icon">`
        return true
    } else {
        checkbox.value = 'off';
        checkbox.innerHTML = '<img src="./assets/icons/emptyCheckbox.svg" alt="checkbox-icon">';
        return false
    }
}


export const toggleArrow = (arrow) => {
    if (arrow.value === 'closed') {
        arrow.value = 'open';
        arrow.innerHTML = `<img src="./assets/icons/arrowUp.svg" alt="arrow-icon">`
        return true
    } else {
        arrow.value = 'closed';
        arrow.innerHTML = '<img src="./assets/icons/arrowDown.svg" alt="arrow-icon">';
        return false
    }
}