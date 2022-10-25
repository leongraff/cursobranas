class Mes {
    constructor(nome) {
        if (nome === "") throw new Error("Mês Inválido: O nome é obrigatório")
        this.nome = nome
        this.saldoInicial = 0;
        this.totalizador = { saldo: 0, juros: 0, rendimentos: 0, receitas: 0, despesas: 0, distribuicaoDeDespesas: [] }
        this.lancamentos = [];
    }
    adicionarLancamento(lancamento) {
        this.lancamentos.push(lancamento);
    }
    calcularRendimentos(valor) {
        const rendimentos = valor * 0.05;
        return rendimentos;
    }
    calcularJuros(valor) {
        const juros = valor * 0.1;
        return juros;
    }
    calcularSaldo(saldoInicial, lancamentos) {
        // aqui zera tudo para ele não considerar valores antigos no calculo (totalizadorDoMes)
        this.totalizador = { saldo: 0, juros: 0, rendimentos: 0, receitas: 0, despesas: 0, distribuicaoDeDespesas: [] }
        this.totalizador.saldo = this.saldoInicial;
        this.apurarDespesas();
        this.apurarReceitas();
        this.apurarJuros();
        this.calcularRendimentos()
        this.distribuirDespesas()
    }
    apurarRendimentos() {
        if (this.totalizador.saldo > 0) {
            this.totalizador.rendimentos = this.calcularRendimentos(this.totalizador.saldo)
            this.totalizador.saldo = arredondar(this.totalizador.saldo + this.totalizador.rendimentos)
        }
    }
    apurarJuros() {
        if (this.totalizador.saldo < 0) {
            this.totalizador.juros = this.calcularJuros(this.totalizador.saldo)
            this.totalizador.saldo = arredondar(this.totalizador.saldo + this.totalizador.juros)
        }
    }

    apurarDespesas() {
        for (const lancamento of this.lancamentos)
            if (lancamento.tipo === "despesa") {
                this.totalizador.saldo -= lancamento.valor;
                this.totalizador.despesas -= lancamento.valor;
            }
    }

    apurarReceitas() {
        for (const lancamento of this.lancamentos)
            if (lancamento.tipo === "receita") {
                this.totalizador.saldo += lancamento.valor;
                this.totalizador.receitas += lancamento.valor;
            }
    }
    distribuirDespesas() {
        const distribuicaoDeDespesas = []
        for (const lancamento of this.lancamentos) {
            if (lancamento.tipo === "despesa") {
                const percentual = arredondar((lancamento.valor / this.totalizador.despesas) * -100)
                distribuicaoDeDespesas.push({ categoria: lancamento.categoria, valor: lancamento.valor, percentual })
            }
        }
        return this.totalizador.distribuicaoDeDespesas = distribuicaoDeDespesas
    }


}
