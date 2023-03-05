import debounce from "./debounce.js";

export default class AnimaScroll {

    constructor(sections) {
        this.sections = document.querySelectorAll(sections);
        this.windowTamanho = window.innerHeight * 0.5;

        this.checkDistance = debounce(this.checkDistance.bind(this), 80);
    }

    // Pega a distancia de cada item com relação ao topo do site
    getDistance() {
        this.distance = [...this.sections].map(section => {
            const offset = section.offsetTop;
            return {
                element: section,
                offset: Math.floor(offset - this.windowTamanho),
            }
        })
    }

    // Verifica a distância em cada objeto em relação ao scroll do site
    checkDistance() {
        this.distance.forEach((item) => {
            if (window.pageYOffset > item.offset) 
                item.element.classList.add('ativo')
            else if (item.element.classList.contains('ativo')) 
                item.element.classList.remove('ativo') 
        })
    }

    init() {
        if (this.sections.length) {
            this.getDistance();
            this.checkDistance();
            window.addEventListener('scroll', this.checkDistance);
        }
        return this;
    }

    stop() {
        window.removeEventListener('scroll', this.checkDistance)
    }

}
