export default class Funcionamento {

    constructor(date, activeClass) {
        this.funcionamento = document.querySelector(date);
        this.activeClass = activeClass;
    }

    dadosFuncionamento() {
        this.diasSemana = this.funcionamento.dataset.semana.split(',').map(Number);
        this.horarioSremana = this.funcionamento.dataset.horario.split(',').map(Number);
    }

    todayDate() {
        this.dataAtual = new Date();
        this.diaAtual = this.dataAtual.getDay();
        this.horarioAgora = this.dataAtual.getUTCHours() - 3;
    }

    closeOrOpen() {
        const semanaAberto = this.diasSemana.indexOf(this.diaAtual) !== -1;
        const horarioAberto = (this.horarioAgora >= this.horarioSremana[0] && this.horarioAgora < this.horarioSremana[1])

        return semanaAberto && horarioAberto;
    }

    open() {
        if (this.closeOrOpen()) {
            this.funcionamento.classList.add(this.activeClass);
        }
    }

    init() {
        if (this.funcionamento) {
            this.dadosFuncionamento();
            this.todayDate();
            this.open();
        }
        return this;
    }
}
