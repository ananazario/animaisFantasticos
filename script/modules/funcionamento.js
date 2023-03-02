export default function initFuncionamento() {
    const funcionamento = document.querySelector('[data-semana]');
    const diasSemana = funcionamento.dataset.semana.split(',').map(Number);
    const horarioSremana = funcionamento.dataset.horario.split(',').map(Number);

    const dataAtual = new Date();
    const diaAtual = dataAtual.getDay();
    const horarioAgora = dataAtual.getHours();

    const semanaAberto = diasSemana.indexOf(diaAtual) !== -1;
    const horarioAberto = (horarioAgora >= horarioSremana[0] && horarioAgora < horarioSremana[1])

    if (semanaAberto && horarioAberto) {
        funcionamento.classList.add('aberto');
    }

    console.log(horarioAberto)
}
