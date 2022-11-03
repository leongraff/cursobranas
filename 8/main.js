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
/*
Anatomia da tabela: (estrutura para o constructor)
<table>
    <tr>
        <th></th>
        <th></th>
    </tr>
    <tr>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td></td>
        <td></td>
    </tr>
</table>

    */


class Tabela { //criou a classe 
    constructor(className) { //parametro que o constructor vai receberrrr = classsName
        this.element = document.createElement("table"); //pq ele chama o element dessa maneira?
        this.element.className = className; //o que essa className significa aqui? // criou aqui a class da div? que é table?
    }

    addRow(type, values) { //função que vai chamar um valor.
        const tr = document.createElement("tr");  // duas variaveis "const" (que não mudam valor) e que chamam a dom
        for (const value of values) {
            const td = document.createElement("td"); //cria o td numa segunda etapa pois nao se pode criar um td diretamente depois de chamar o table...
            td.innerText = value //esse value é o que é chamado dentro da addRow, um texto?
            tr.appendChild(td) //cria a td, filha do tr

        }
        this.element.appendChild(tr); //chama cria o tr, filho do element
    }
}


function renderizar() {
    const app = document.getElementById("app");
    if (app.firstChild) {
        app.firstChild.remove();
    }
    const painel = document.createElement("div");
    //colocar a tabela criada no constructor aqui
    const cores = ["red", "yellow", "green", "blue"];
    const grafico = document.createElement("div");
    grafico.className = "grafico";
    for (const mes of ano.meses) {
        const coluna = document.createElement("div");
        coluna.className = "grafico-coluna";
        const cor = document.createElement("div");
        cor.style.height = (mes.totalizador.saldo * 100) / 10000;
        cor.style.background = cores.pop();
        coluna.appendChild(cor);
        const nomeDoMes = document.createElement("div");
        nomeDoMes.className = "grafico-coluna-texto";
        nomeDoMes.innerText = mes.nome;
        coluna.appendChild(cor);
        coluna.appendChild(nomeDoMes);
        grafico.appendChild(coluna);
    }
    painel.appendChild(grafico);
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
