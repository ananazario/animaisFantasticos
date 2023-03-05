export default class Modal {

    constructor(botaoAbrir, botaoFechar, containerModal) {
        this.botaoAbrir = document.querySelector(botaoAbrir)
        this.botaoFechar = document.querySelector(botaoFechar)
        this.containerModal = document.querySelector(containerModal)

        this.toggleModalEvent = this.toggleModalEvent.bind(this)
        this.cliqueForaModal = this.cliqueForaModal.bind(this);
    }

    toggleModal() {
        this.containerModal.classList.toggle("ativo")
    }

    toggleModalEvent(evento) {
        evento.preventDefault();
        this.toggleModal();
    }

    cliqueForaModal(event) {
        if (event.target === this.containerModal) {
            this.toggleModal(event);
        }
    }

    addModalEvent() {
        this.botaoAbrir.addEventListener('click', this.toggleModalEvent);
        this.botaoFechar.addEventListener('click', this.toggleModalEvent);
        this.containerModal.addEventListener('click', this.cliqueForaModal);
    }

    init() {
        if (this.botaoAbrir && this.botaoFechar && this.containerModal) {
            this.addModalEvent()
        }
        return this;
    }
}
