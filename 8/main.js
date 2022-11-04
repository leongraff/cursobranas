//JANEIRO

const janeiro = new Mes("janeiro") //chama a classe
janeiro.adicionarLancamento(new Lancamento("Salário", "receita", 3000));
janeiro.adicionarLancamento(new Lancamento("Aluguel", "despesa", 1000));
janeiro.adicionarLancamento(new Lancamento("Conta de Luz", "despesa", 200));
janeiro.adicionarLancamento(new Lancamento("Conta de Água", "despesa", 100));
janeiro.adicionarLancamento(new Lancamento("Internet", "despesa", 100));

//FEVEREIRO

const fevereiro = new Mes("fevereiro"); //chama a classe
fevereiro.adicionarLancamento(new Lancamento("Salário", "receita", 3000));
fevereiro.adicionarLancamento(new Lancamento("Aluguel", "despesa", 1200));
fevereiro.adicionarLancamento(new Lancamento("Conta de Luz", "despesa", 250));
fevereiro.adicionarLancamento(new Lancamento("Conta de Água", "despesa", 100));
fevereiro.adicionarLancamento(new Lancamento("Internet", "despesa", 100));


const marco = new Mes("marco"); //chama a classe
marco.adicionarLancamento(new Lancamento("Salário", "receita", 4000));
marco.adicionarLancamento(new Lancamento("Aluguel", "despesa", 1200));
marco.adicionarLancamento(new Lancamento("Conta de Luz", "despesa", 200));
marco.adicionarLancamento(new Lancamento("Conta de Água", "despesa", 100));
marco.adicionarLancamento(new Lancamento("Internet", "despesa", 200));

const abril = new Mes("abril");
abril.adicionarLancamento(new Lancamento("Salário", "receita", 4000));

const ano = new Ano();
ano.adicionarMes(janeiro);
ano.adicionarMes(fevereiro);
ano.adicionarMes(marco);
ano.adicionarMes(abril);
ano.calcularSaldo();

janeiro.adicionarLancamento(new Lancamento("Escola", "despesa", 500));
fevereiro.adicionarLancamento(new Lancamento("Escola", "despesa", 400));
marco.adicionarLancamento(new Lancamento("Escola", "despesa", 500));
ano.calcularSaldo();

console.log(ano.meses)


function addElement(parent, elementType, text) { // adiciona um elemento com "parent" - pai. que ele usa para chamar ali embaixo; - tipo de elemento "td,tr,"
    const element = document.createElement(elementType); // nao se direciona parametros entre aspas
    if (text !== "" && text !== undefined && text !== null && text !== 0) {
        //  if (text === "") {
        element.innerText = text; // condicional para aceitar parametro vazio
    }
    parent.appendChild(element);
}

class Grafico {
    constructor() {
        this.element = document.createElement("div");
        this.element.className = "grafico";
        this.cores = ["red", "yellow", "green", "blue"];
    }

    adicionarColuna(valor, descricao) {
        const coluna = document.createElement("div");
        coluna.className = "grafico-coluna";
        const cor = document.createElement("div");
        cor.style.height = (valor * 100) / 10000;
        cor.style.background = this.cores.pop();
        coluna.appendChild(cor);
        const nomeDoMes = document.createElement("div");
        nomeDoMes.className = "grafico-coluna-texto";
        nomeDoMes.innerText = descricao;
        coluna.appendChild(cor);
        coluna.appendChild(nomeDoMes);
        this.element.appendChild(coluna);
    }
}

function renderizar() {
    const app = document.getElementById("app");
    if (app.firstChild) {
        app.firstChild.remove();
    }
    const painel = document.createElement("div");
    const grafico = new Grafico();
    for (const mes of ano.meses) {
        grafico.adicionarColuna(mes.totalizador.saldo, mes.nome);
    }
    painel.appendChild(grafico.element);
    for (const mes of ano.meses) {
        addElement(painel, "h3", mes.nome)
        const tabelaLancamentos = new Tabela("tabela-lancamentos");
        tabelaLancamentos.addRow("th", ["Categoria", "Valor"]);
        for (const lancamento of mes.lancamentos) { //cria o loop que vai chamar as alteração em cada lançamento
            tabelaLancamentos.addRow("td", [lancamento.categoria, formatarDinheiro(lancamento.getValorString(valor))]);
        }
        tabelaLancamentos.addRow("th", ["Juros", formatarDinheiro(mes.totalizador.juros)]);
        tabelaLancamentos.addRow("th", ["Rendimentos", formatarDinheiro(mes.totalizador.rendimentos)]);
        tabelaLancamentos.addRow("th", ["Total", formatarDinheiro(mes.totalizador.saldo)]);

        painel.appendChild(tabelaLancamentos.element);
    }
    app.appendChild(painel);
}


renderizar();

function adicionarLancamento() {
    const mes = document.getElementById("mes");
    const tipo = document.getElementById("tipo");
    const categoria = document.getElementById("categoria"); // aqui é chamado categoria.value ali embaixo e dps la no "".
    const valor = document.getElementById("valor"); // define o valor no const, da o getelementbyid para pegar o id do index, e o value é a parte interna que foi digitada
    ano.adicionarLancamento(mes.value, new Lancamento(categoria.value, tipo.value, parseFloat(valor.value))); //mes.value chama o nome dado no input e larga chamando a função criada no ano.js
    // mes.adicionarLancamento(new Lancamento(categoria.value, tipo.value, valor)); // não consigo chamar função assim? mes.adicionarLancamento???????????
    ano.calcularSaldo();
    renderizar();
    valor.value = "";
    mes.value = ano.meses(0).nome;
    tipo.value = "receita";
    categoria.value = "";
}
const botao = document.getElementById("botao");
botao.addEventListener("click", adicionarLancamento);

const mesSelect = document.getElementById("mes")
for (const mes of ano.meses) {
    const option = document.createElement("option")
    option.text = mes.nome;
    mesSelect.add(option)
    console.log(mes.nome)
}


