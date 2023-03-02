import outsideClick from "./outsideclick.js";

export default function initDropdownMenu() {
    const dropdownMenus = document.querySelectorAll('[data-dropdown]');

    function handleClick(event) {
        event.preventDefault();
        this.classList.add('active');
        outsideClick(this, ['touchstart', 'click'], () => {
            this.classList.remove('active');
        });
    }

    dropdownMenus.forEach((menu) => {
        const eventos = ['touchstart', 'click']

        eventos.forEach((userEvent) => {
            menu.addEventListener(userEvent, handleClick);
        });
    })
}
