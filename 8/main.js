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
        element.innerText = text; // this is a conditional that makes the function able to accept empty parameters
    }
    parent.appendChild(element);
}

class Select {
    constructor(id) {
        this.element = document.createElement("select"); // creates the select by an id
        this.element.id = id //linking the id of the class with de id of the element created
    }
    addOption(text) {
        const option = document.createElement("option");
        option.text = text;
        this.element.appendChild(option); //calls the option text
    }
}

class Input {
    constructor(id, type, placeholder) {
        this.element = document.createElement("input");
        this.element.id = id;
        this.element.type;
        this.element.placeholder = placeholder;
    }
}

class Button {
    constructor(id, text) {
        this.element = document.createElement("button");
        this.element.id = id;
        this.element.innerText = text;
    }
    addListener(fn) {
        this.element.addEventListener("click", fn);

    }
}

function adicionarLancamento() {
    const mes = document.getElementById("mes");
    const tipo = document.getElementById("tipo");
    const categoria = document.getElementById("categoria");
    const valor = document.getElementById("valor");
    ano.adicionarLancamento(mes.value, new Lancamento(categoria.value, tipo.value, parseFloat(valor.value))); //mes.value chama o nome dado no input e larga chamando a função criada no ano.js
    // mes.adicionarLancamento(new Lancamento(categoria.value, tipo.value, valor)); // não consigo chamar função assim? mes.adicionarLancamento???????????
    ano.calcularSaldo();
    renderizar();
    valor.value = "";
    mes.value = ano.meses[0].nome;
    tipo.value = "receita";
    categoria.value = "";
}


function renderizar() {
    const app = document.getElementById("app");
    if (app.firstChild) {
        app.firstChild.remove();
    }
    const painel = new Div();
    const titulo = new h4("Finanças Pessoais")

    painel.addChildElement(titulo.element)
    const form = new Div("form-lancamento");
    painel.addChildElement(form.element);
    const mesSelect = new Select("mes");
    for (const mes of ano.meses) {
        mesSelect.addOption(mes.nome);
    }
    const tipoSelect = new Select("tipo");
    tipoSelect.addOption("receita")
    tipoSelect.addOption("despesa")
    const categoriaInputText = new Input("categoria", "text", "Categoria");
    const valorInputNumber = new Input("valor", "number", "Valor");
    const addButton = new Button("botao", "Adicionar")
    form.addChildElement(mesSelect.element);
    form.addChildElement(tipoSelect.element);
    form.addChildElement(categoriaInputText.element);
    form.addChildElement(valorInputNumber.element);
    form.addChildElement(addButton.element);
    addButton.addListener(() => {
        adicionarLancamento();
    });
    const grafico = new Grafico();
    for (const mes of ano.meses) {
        grafico.adicionarColuna(mes.totalizador.saldo, mes.nome);
    }
    painel.addChildElement(grafico.element);
    for (const mes of ano.meses) {
        const nomeDoMes = new h4(mes.nome); //new is always used when a class is being  invoked
        painel.addChildElement(nomeDoMes.element);
        const tabelaLancamentos = new Tabela("tabela-lancamentos");
        tabelaLancamentos.addRow("th", ["Categoria", "Valor"]);
        for (const lancamento of mes.lancamentos) { //cria o loop que vai chamar as alteração em cada lançamento
            tabelaLancamentos.addRow("td", [lancamento.categoria, formatarDinheiro(lancamento.valor)]);//(lancamento.getValorString(valor))]);
        }
        tabelaLancamentos.addRow("th", ["Juros", formatarDinheiro(mes.totalizador.juros)]);
        tabelaLancamentos.addRow("th", ["Rendimentos", formatarDinheiro(mes.totalizador.rendimentos)]);
        tabelaLancamentos.addRow("th", ["Total", formatarDinheiro(mes.totalizador.saldo)]);
        painel.addChildElement(tabelaLancamentos.element);
    }
    app.appendChild(painel.element);
}



renderizar();




