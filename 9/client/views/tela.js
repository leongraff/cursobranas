class Tela {
    constructor() {
        this.init();
    }
    async init() { // this is an async call, it comes and back
        // when the call comes back, it drops in this const below (response)
        const response = await fetch("http://localhost:3000/api/lancamentos");  //fetch is an api as the dom is, is this the get method?
        const lancamentos = await response.json();
        const ano = new Ano();
        ano.adicionarMes(new Mes("janeiro"));
        ano.adicionarMes(new Mes("fevereiro"));
        ano.adicionarMes(new Mes("marco"));
        ano.adicionarMes(new Mes("abril"));
        ano.adicionarMes(new Mes("maio"));
        for (const lancamento of lancamentos) {
            ano.adicionarLancamento(lancamento.mes, new Lancamento(lancamento.categoria, lancamento.tipo, lancamento.valor))
        }
        ano.calcularSaldo();
        this.ano = ano;
        this.renderizar();
    }

    adicionarLancamento() {
        const mes = document.getElementById("mes");
        const tipo = document.getElementById("tipo");
        const categoria = document.getElementById("categoria");
        const valor = document.getElementById("valor");
        this.ano.adicionarLancamento(mes.value, new Lancamento(categoria.value, tipo.value, parseFloat(valor.value))); //mes.value chama o nome dado no input e larga chamando a função criada no this.ano.js
        fetch("http://localhost:3000/api/lancamentos", { method: "post" }) //get is when it consumes, post is when it writes...
        this.renderizar();
        valor.value = "";
        mes.value = this.ano.meses[0].nome;
        tipo.value = "receita";
        categoria.value = "";
    }

    formatarDinheiro(valor) {
        return new Intl.NumberFormat("pt-br", { currency: "BRL", style: "currency" }).format(valor);
    }

    renderizar() {

        document.getElementById("app").remove();
        const app = new Div("app");
        const titulo = new h4("Finanças Pessoais")
        app.addChildElement(titulo.element)
        const form = new Div("form-lancamento");
        app.addChildElement(form.element);
        const mesSelect = new Select("mes");
        for (const mes of this.ano.meses) {
            mesSelect.addOption(mes.nome);
        }
        const tipoSelect = new Select("tipo");
        tipoSelect.addOption("receita")
        tipoSelect.addOption("despesa")
        const categoriaInputText = new Input("categoria", "text", "Categoria");
        const valorInputNumber = new Input("valor", "number", "Valor");
        const addButton = new Button("botao", "Adicionar")
        addButton.addListener(() => {
            this.adicionarLancamento();
        });
        form.addChildElement(mesSelect.element);
        form.addChildElement(tipoSelect.element);
        form.addChildElement(categoriaInputText.element);
        form.addChildElement(valorInputNumber.element);
        form.addChildElement(addButton.element);
        const grafico = new Grafico();
        for (const mes of this.ano.meses) {
            grafico.adicionarColuna(mes.totalizador.saldo, mes.nome);
        }
        app.addChildElement(grafico.element);
        for (const mes of this.ano.meses) {
            const nomeDoMes = new h4(mes.nome); //new is always used when a class is being  invoked
            app.addChildElement(nomeDoMes.element);
            const tabelaLancamentos = new Tabela("tabela-lancamentos");
            tabelaLancamentos.addRow("th", ["Categoria", "Valor"]);
            for (const lancamento of mes.lancamentos) { //cria o loop que vai chamar as alteração em cada lançamento
                tabelaLancamentos.addRow("td", [lancamento.categoria, this.formatarDinheiro(lancamento.valor)]);//(lancamento.getValorString(valor))]);
            }
            tabelaLancamentos.addRow("th", ["Juros", this.formatarDinheiro(mes.totalizador.juros)]);
            tabelaLancamentos.addRow("th", ["Rendimentos", this.formatarDinheiro(mes.totalizador.rendimentos)]);
            tabelaLancamentos.addRow("th", ["Total", this.formatarDinheiro(mes.totalizador.saldo)]);
            app.addChildElement(tabelaLancamentos.element);
        }
        const [body] = document.getElementsByTagName("body"); // gives you back an array
        body.appendChild(app.element);
    }
}