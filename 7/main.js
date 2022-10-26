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
//fevereiro.adicionarLancamento(new Lancamento("Transporte", "despesa", 112));
//fevereiro.adicionarLancamento(new Lancamento("Alimentação", "despesa", 430));
//fevereiro.adicionarLancamento(new Lancamento("Condomínio", "despesa", 230));
//fevereiro.adicionarLancamento(new Lancamento("Farmácia", "despesa", 89));


//MARÇO

const marco = new Mes("marco");
marco.adicionarLancamento(new Lancamento("Salário", "receita", 3000));
marco.adicionarLancamento(new Lancamento("Aluguel", "despesa", 203));
marco.adicionarLancamento(new Lancamento("Conta de luz", "despesa", 400));
marco.adicionarLancamento(new Lancamento("Conta de água", "despesa", 400));
//marco.adicionarLancamento(new Lancamento("Transporte", "despesa", 1024));
//marco.adicionarLancamento(new Lancamento("Alimentação", "despesa", 450));
//marco.adicionarLancamento(new Lancamento("Condomínio", "despesa", 304));
//marco.adicionarLancamento(new Lancamento("Farmácia", "despesa", 124));

const abril = new Mes("abril");
abril.adicionarLancamento(new Lancamento("Salário", "receita", 4000))
abril.adicionarLancamento(new Lancamento("Comida", "despesa", 1000))
//abril.adicionarLancamento(new Lancamento("Benção Divina", "receita", 4500))

const ano = new Ano();
ano.adicionarMes(janeiro);
ano.adicionarMes(fevereiro);
ano.adicionarMes(marco);
ano.adicionarMes(abril);
ano.calcularSaldo();


janeiro.adicionarLancamento(new Lancamento("Escola", "despesa", 1600));
ano.calcularSaldo();
console.log(ano)

// a variavel element recebe um elementType que é onde ele cria o elemento e após isso usa o text para pegar o texto do elemento em questão

function addElement(parent, elementType, text) {
    const element = document.createElement(elementType); // nao se direciona parametros entre aspas
    if (text !== "" && text !== undefined && text !== null && text !== 0) {
        //  if (text === "") {
        element.innerText = text; // condicional para aceitar parametro vazio
    }
    parent.appendChild(element);

}
// parent é de quem ele pega no index, div, por exemplo. é o que ele chama no painel.
//


function renderizar() {
    const app = document.getElementById("app");
    if (app.firstChild) {
        app.firstChild.remove();
    }
    const painel = document.createElement("div");
    for (const mes of ano.meses) {
        addElement(painel, "h3", mes.nome)
        const tabelaLancamentos = document.createElement("table"); //cria a tabela no dom
        for (const lancamento of mes.lancamentos) { //cria o loop que vai chamar as alteração em cada lançamento
            const linhaLancamento = document.createElement("tr");
            addElement(linhaLancamento, "td", lancamento.tipo);
            addElement(linhaLancamento, "td", lancamento.categoria);
            addElement(linhaLancamento, "td", lancamento.valor);
            tabelaLancamentos.appendChild(linhaLancamento);

        }
        const linhaJuros = document.createElement("tr");
        addElement(linhaJuros, "td", "Juros");
        addElement(linhaJuros, "td", mes.totalizador.juros);
        tabelaLancamentos.appendChild(linhaJuros);

        const linhaRendimentos = document.createElement("tr");
        addElement(linhaRendimentos, "td", "Rendimentos");
        addElement(linhaRendimentos, "td", mes.totalizador.rendimentos);
        tabelaLancamentos.appendChild(linhaRendimentos);

        const linhaSaldo = document.createElement("tr");
        addElement(linhaSaldo, "td", "Total");
        addElement(linhaSaldo, "td", mes.totalizador.saldo);
        tabelaLancamentos.appendChild(linhaSaldo);

        painel.appendChild(tabelaLancamentos);
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



// ================================================= + ================================================= + ================================================ + ==============






// app.appendChild(document.createElement("hr")); // aqui chama o createElement ja dentro do appendChild, pq querendo ou nao é a raiz do appendChild essa chamada.
// const nomeDoMes = document.createElement("h3"); // aqui o padrão é sempre criar o elemento, definir o nome do elemento e adicionar o elemento em algum lugar...
// nomeDoMes.innerText = mes.nome;
// app.appendChild(nomeDoMes); //coloca um filho a mais no nódulo
// const detalhesLancamento = document.createElement("p") //associa a variavel a função createElement do JS, para criar o elemento na div
// detalhesLancamento.innerText = lancamento.categoria + " " + lancamento.tipo + " " + lancamento.valor + " "; // após criar o elemento ele pega o texto das variaveis para jogar no elemento criado
// app.appendChild(detalhesLancamento); // apos criar o span o appendChild joga o span dentro da div "app"
// const saldo = document.createElement("h4");
// saldo.innerText = mes.totalizador.saldo;
//  app.appendChild(saldo);
