//JANEIRO

const janeiro = new Mes("janeiro")
janeiro.adicionarLancamento(new Lancamento("Salário", "receita", 2000))
janeiro.adicionarLancamento(new Lancamento("Aluguel", "despesa", 2500))

//FEVEREIRO

const fevereiro = new Mes("fevereiro")
fevereiro.adicionarLancamento(new Lancamento("Salário", "receita", 3000));
fevereiro.adicionarLancamento(new Lancamento("Aluguel", "despesa", 1031));
fevereiro.adicionarLancamento(new Lancamento("Conta de luz", "despesa", 145));
fevereiro.adicionarLancamento(new Lancamento("Conta de água", "despesa", 512));
fevereiro.adicionarLancamento(new Lancamento("Transporte", "despesa", 112));
fevereiro.adicionarLancamento(new Lancamento("Alimentação", "despesa", 430));
fevereiro.adicionarLancamento(new Lancamento("Condomínio", "despesa", 230));
fevereiro.adicionarLancamento(new Lancamento("Farmácia", "despesa", 89));


//MARÇO

const marco = new Mes("marco");
marco.adicionarLancamento(new Lancamento("Salário", "receita", 3000));
marco.adicionarLancamento(new Lancamento("Aluguel", "despesa", 203));
marco.adicionarLancamento(new Lancamento("Conta de luz", "despesa", 421));
marco.adicionarLancamento(new Lancamento("Conta de água", "despesa", 500));
marco.adicionarLancamento(new Lancamento("Transporte", "despesa", 1024));
marco.adicionarLancamento(new Lancamento("Alimentação", "despesa", 450));
marco.adicionarLancamento(new Lancamento("Condomínio", "despesa", 304));
marco.adicionarLancamento(new Lancamento("Farmácia", "despesa", 124));

const abril = new Mes("abril");
abril.adicionarLancamento(new Lancamento("Salário", "receita", 4000))
abril.adicionarLancamento(new Lancamento("Comida", "despesa", 1000))
abril.adicionarLancamento(new Lancamento("Benção Divina", "receita", 4500))

const ano = new Ano();
ano.adicionarMes(janeiro);
ano.adicionarMes(fevereiro);
ano.adicionarMes(marco);
ano.adicionarMes(abril);
ano.calcularSaldo();


janeiro.adicionarLancamento(new Lancamento("Escola", "despesa", 1600));
ano.calcularSaldo();
console.log(ano)

function renderizar() {
    console.log("renderização da interface gráfica")
}

