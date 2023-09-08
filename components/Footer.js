
export const generateFooter = () => {
    const app = document.querySelector('#app');
    const footer = document.createElement('footer');
    footer.classList.add('footer');
    footer.innerHTML = `<span>© 2022  ООО «Товары и точка»</span>`
    app.appendChild(footer);
}