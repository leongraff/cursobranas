class Tabela { //aqui ele chama a div CRIA O COMPONENTE TABELA PARA QUE POSSA SER USADO EM QUALQUER LUGAR DA INTERFACE
    constructor(className) { //aqui se cria o "parent" para acontecer o appendChild da tr lá embaixo.
        this.element = document.createElement("table"); // cria a table (div)
        this.element.className = className; //linka a className no element, nem toda table tem a mesma class, então className é um parametro. permite que sejam usados classNames diferentes...
    }

    addRow(type, values) { //função que vai chamar um valor.
        const tr = document.createElement("tr");  // cria a tr
        for (const value of values) { //aqui ele automatiza o processo de criar quantas tds sejam necessarias para a tr
            const td = document.createElement(type); //chama a dom p criar o td
            td.innerText = value //pega o innertext dp td
            tr.appendChild(td) //cria a td, filha do tr

        }
        this.element.appendChild(tr); //aqui da o appendchild para 
    }
}