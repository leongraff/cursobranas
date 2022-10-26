//JANEIRO

const janeiro = new Mes("janeiro")
janeiro.adicionarLancamento(new Lancamento("Salário", "receita", 3000));
janeiro.adicionarLancamento(new Lancamento("Aluguel", "despesa", 1000));
janeiro.adicionarLancamento(new Lancamento("Conta de Luz", "despesa", 200));
janeiro.adicionarLancamento(new Lancamento("Conta de Água", "despesa", 100));
janeiro.adicionarLancamento(new Lancamento("Internet", "despesa", 100));

//FEVEREIRO

const fevereiro = new Mes("fevereiro");
fevereiro.adicionarLancamento(new Lancamento("Salário", "receita", 3000));
fevereiro.adicionarLancamento(new Lancamento("Aluguel", "despesa", 1200));
fevereiro.adicionarLancamento(new Lancamento("Conta de Luz", "despesa", 250));
fevereiro.adicionarLancamento(new Lancamento("Conta de Água", "despesa", 100));
fevereiro.adicionarLancamento(new Lancamento("Internet", "despesa", 100));


const marco = new Mes("marco");
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
        // atribuir classes dinamicamente a um determinado elemento, id é único, classe se pode atribuir a vários elementos
        tabelaLancamentos.className = "tabela-lancamentos";
        const linhaTitulo = document.createElement("tr");
        addElement(linhaTitulo, "th", "Categoria");
        addElement(linhaTitulo, "th", "Valor");
        tabelaLancamentos.appendChild(linhaTitulo);
        for (const lancamento of mes.lancamentos) { //cria o loop que vai chamar as alteração em cada lançamento
            const linhaLancamento = document.createElement("tr");
            addElement(linhaLancamento, "td", lancamento.categoria);
            // addElement(linhaLancamento, "td", lancamento.tipo);
            addElement(linhaLancamento, "td", formatarDinheiro(lancamento.valor));
            tabelaLancamentos.appendChild(linhaLancamento);

        }

        const linhaJuros = document.createElement("tr");
        addElement(linhaJuros, "th", "Juros");
        addElement(linhaJuros, "th", formatarDinheiro(mes.totalizador.juros));
        tabelaLancamentos.appendChild(linhaJuros);

        const linhaRendimentos = document.createElement("tr");
        addElement(linhaRendimentos, "th", "Rendimentos");
        addElement(linhaRendimentos, "th", formatarDinheiro(mes.totalizador.rendimentos));
        tabelaLancamentos.appendChild(linhaRendimentos);

        const linhaSaldo = document.createElement("tr");
        addElement(linhaSaldo, "th", "Total");
        addElement(linhaSaldo, "th", formatarDinheiro(mes.totalizador.saldo));
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
