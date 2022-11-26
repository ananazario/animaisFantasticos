function initTabNav() {
    
    const tabMenu = document.querySelectorAll('.js-tabmenu li')
    const tabContent = document.querySelectorAll('.js-tabcontent section')

    if (tabMenu.length && tabContent.length) {
        tabContent[0].classList.add('ativo')

        function activeTab(index) {
            tabContent.forEach((section) => {
                section.classList.remove('ativo');
            });
            tabContent[index].classList.add('ativo');
        }

        tabMenu.forEach((itemMenu, index) => {
            itemMenu.addEventListener('click', () => {
                activeTab(index);
            })
        });
    }
}
initTabNav();

function accordionList() {
    const accordionList = document.querySelectorAll('.js-accordionlist dt');
    const ativo = 'ativo';
    
    if(accordionList.length) {
        accordionList[0].nextElementSibling.classList.add(ativo)

        function activeAccordion() {
            this.classList.toggle(ativo)
            this.nextElementSibling.classList.toggle(ativo)
        }

        accordionList.forEach((item) => {
            item.addEventListener('click', activeAccordion)
        });
    }
}

accordionList()

function menu() {
    const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

    function scrollToSection(event) {
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href);
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    }

    linksInternos.forEach((link) => {
        link.addEventListener('click', scrollToSection);
    });
}

menu();

function animaScroll() {
    const sections = document.querySelectorAll('.js-scroll');
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

animaScroll();














