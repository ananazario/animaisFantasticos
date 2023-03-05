import AnimaNumeros from './animaNumeros.js'

export default function fetchAnimais(url, target) {

    // Cria a div contendo informações com o total de informações
    function createAnimal(animal) {
        const div = document.createElement('div');

        div.classList.add('numero-animal');

        div.innerHTML = `
            <h3>${animal.specie}</h3>
            <span data-numero>${animal.total}</span>
        `
        return div;
    }

    // Anima os números em cada animal
    function animaNumerosAnimais() {
        const animaNumeros = new AnimaNumeros('[data-numero]', '.numeros', 'ativo');
        animaNumeros.init();
    }

    // Puxa os animais através do arquivo json e cria cada animal com o createAnimal
    const numerosGrid = document.querySelector(target)

    function preencherAnimais(animal) {
        const divAnimal = createAnimal(animal);
        numerosGrid.appendChild(divAnimal)
    }

    async function criarAnimais() {
        try {
            // Fetch e espera resposta
            const animaisResponse = await fetch(url);
            // Transforma a resposta em json
            const animaisJson = await animaisResponse.json();

            // Após a transformação de json, ativa as funções para preencher e animar os números
            animaisJson.forEach(animal => {
                preencherAnimais(animal)
            });
            animaNumerosAnimais();
        } catch(erro) {
            console.log(erro);
        }
    }

    return criarAnimais()
}
