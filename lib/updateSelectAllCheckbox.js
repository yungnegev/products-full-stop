export const updateSelectAllCheckbox = (checkboxes, selectAllCheckbox) => {
    const checkboxesArray = Array.from(checkboxes);
    const checkedCheckboxes = checkboxesArray.filter((checkbox) => {
        return checkbox.value === 'on';
    });
    if (checkedCheckboxes.length === checkboxesArray.length) {
        selectAllCheckbox.value = 'on';
        selectAllCheckbox.innerHTML = `<img src="./assets/icons/checkbox.svg" alt="checkbox-icon">`;
    } else {
        selectAllCheckbox.value = 'off';
        selectAllCheckbox.innerHTML = '<img src="./assets/icons/emptyCheckbox.svg" alt="checkbox-icon">';
    }
}