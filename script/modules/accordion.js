export default function accordionList() {
    const accordionList = document.querySelectorAll('[data-anime="accordion"] dt');
    const ativo = 'ativo';

    function activeAccordion() {
        this.classList.toggle(ativo)
        this.nextElementSibling.classList.toggle(ativo)
    }
    
    if (accordionList.length) {
        accordionList[0].nextElementSibling.classList.add(ativo)

        accordionList.forEach((item) => {
            item.addEventListener('click', activeAccordion)
        });
    }
}