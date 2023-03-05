export default class TabNav {

    constructor(menu, content) {
        this.tabMenu = document.querySelectorAll(menu)
        this.tabContent = document.querySelectorAll(content)
        this.activeClass = 'ativo'
    }

    activeTab(index) {
        this.tabContent.forEach((section) => {
            section.classList.remove('ativo');
        });
        const direcaoAnime = this.tabContent[index].dataset.anime;
        this.tabContent[index].classList.add(this.activeClass, direcaoAnime);
    }

    addTabNavEvent() {
        this.tabMenu.forEach((itemMenu, index) => {
            itemMenu.addEventListener('click', () => {
                this.activeTab(index);
            })
        });
    }

    init() {
        if (this.tabMenu.length && this.tabContent.length) {
            this.activeTab(0)
            this.addTabNavEvent()
    }
    return this;
}
}