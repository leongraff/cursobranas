class Ano {

    constructor() {
        this.meses = [];

    }
    adicionarLancamento(nomeDoMes, lancamento) {
        for (const mes of this.meses) {
            if (mes.nome === nomeDoMes) {
                mes.adicionarLancamento(lancamento);
                break;
            }
        }
    }
    adicionarMes(mes) {
        this.meses.push(mes); // da o push em cada mes apos a função ser chamada....
    }

    calcularSaldo() {
        let saldoInicial = 0; // o let aqui permite que o valor seja mudado ao longo do loop da função..
        for (const mes of this.meses) {     //para cada mes de meses ele da um console log no mes
            mes.saldoInicial = saldoInicial;
            mes.calcularSaldo();
            saldoInicial = mes.totalizador.saldo;


        }
    }

}