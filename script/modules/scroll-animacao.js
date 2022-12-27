export default function animaScroll() {
    const sections = document.querySelectorAll('[data-anime="scroll"]');
    if (sections.length) {
        const windowTamanho = window.innerHeight * 0.5;

        function scroll() {
            sections.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top;
                const isSectionVisible = (sectionTop - windowTamanho) < 0;

                if (isSectionVisible) 
                    section.classList.add('ativo')
                else 
                    section.classList.remove('ativo')
            })
        }
        scroll();
        window.addEventListener('scroll', scroll)
    }
}
