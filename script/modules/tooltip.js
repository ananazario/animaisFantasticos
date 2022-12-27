export default function tooltip() {
    const tooltips = document.querySelectorAll('[data-tooltip]')

    tooltips.forEach((item) => {
        item.addEventListener('mouseover', onMouseOver)
    })

    function onMouseOver(event) {
        const tooltipBox = criarTooltipBox(this);
        tooltipBox.style.top = event.pageY + 'px'
        tooltipBox.style.top = event.pageX + 'px'

        onMouseLeave.tooltipBox = tooltipBox;
        onMouseLeave.element = this;
        const onMouseLeave = {
            handleEvent() {
                tooltipBox.remove();
            }
        }

        this.addEventListener('mouseleave', onMouseLeave)
    }

    const onMouseLeave = {
        
    }

    function criarTooltipBox(element) {
        const tooltipBox = document.createElement('div');
        const text = element.getAttribute('aria-label');

        tooltipBox.classList.add('tooltip');
        tooltipBox.innerText = text;
        document.body.appendChild(tooltipBox);
        return tooltipBox
    }
}