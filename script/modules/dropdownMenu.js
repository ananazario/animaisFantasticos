import outsideClick from "./outsideclick.js";

export default class DropdownMenu {

    constructor(dropdownMenus, events) {
        this.dropdownMenus = document.querySelectorAll(dropdownMenus)

        // Define o tipo de eventos
        if(events === undefined) this.events = ['touchstart', 'click']
        else this.events = events

        this.activeClass = 'active'
        this.activeDropdown = this.activeDropdown.bind(this)
    }

    // Ativa o dropdown e adiciona a função que observa o clique fora dele
    activeDropdown(event) {
        event.preventDefault();
        const element = event.currentTarget;
        element.classList.add(this.activeClass);
        outsideClick(element, this.events, () => {
            element.classList.remove(this.activeClass);
        });
    }

    // Adiciona os eventos ao dropdown
    addDropdownEvent() {
        this.dropdownMenus.forEach((menu) => {
            this.events.forEach((userEvent) => {
                menu.addEventListener(userEvent, this.activeDropdown);
            });
        })
    }

    init() {
        if(this.dropdownMenus.length) {
            this.addDropdownEvent()
        }
        return this;
    }
}
