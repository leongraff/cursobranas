class Tela {
    constructor() {
        const janeiro = new Mes("janeiro") //chama a classe
        janeiro.adicionarLancamento(new Lancamento("Salário", "receita", 3000));
        janeiro.adicionarLancamento(new Lancamento("Aluguel", "despesa", 1000));
        janeiro.adicionarLancamento(new Lancamento("Conta de Luz", "despesa", 200));
        janeiro.adicionarLancamento(new Lancamento("Conta de Água", "despesa", 100));
        janeiro.adicionarLancamento(new Lancamento("Internet", "despesa", 100));


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
        this.ano = ano;
    }

    adicionarLancamento() {
        const mes = document.getElementById("mes");
        const tipo = document.getElementById("tipo");
        const categoria = document.getElementById("categoria");
        const valor = document.getElementById("valor");
        this.ano.adicionarLancamento(mes.value, new Lancamento(categoria.value, tipo.value, parseFloat(valor.value))); //mes.value chama o nome dado no input e larga chamando a função criada no this.ano.js
        // mes.adicionarLancamento(new Lancamento(categoria.value, tipo.value, valor)); // não consigo chamar função assim? mes.adicionarLancamento???????????
        this.ano.calcularSaldo();
        renderizar();
        valor.value = "";
        mes.value = this.ano.meses[0].nome;
        tipo.value = "receita";
        categoria.value = "";
    }


    renderizar() {
        const app = document.getElementById("app").remove();
        /* if (app.firstChild) {
             app.firstChild.remove();
         }*/
        const painel = new Div();
        const titulo = new h4("Finanças Pessoais")
        painel.addChildElement(titulo.element)
        const form = new Div("form-lancamento");
        painel.addChildElement(form.element);
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
        painel.addChildElement(grafico.element);
        for (const mes of this.ano.meses) {
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
}