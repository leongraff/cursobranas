class Lancamento {
    constructor(categoria, tipo, valor) {


        if (tipo !== "receita" && tipo !== "despesa") {
            throw new Error("Lançamento Inválido: Tipo deve ser receita ou despesa.")
        }
        if (valor <= 0) {
            throw new Error("Lançamento Inválido: O valor precisa ser maior que zero.")
        }
        if (categoria === "") {
            throw new Error("Lançamento Inválido: A categoria é obrigatória.")
        }
        this.categoria = categoria;
        this.tipo = tipo;
        this.valor = valor;

    }
    getValorString() {
        return (this.tipo === "despesa") ? this.valor * -1 : this.valor; //simplificadasso.................. op. ternario 
    }   //limitar o uso do ternário a situações pontuais
}
/*getValorString() {
        let valor; // da um "let" na variavel, sinalizando que ela pode mudar de valor;
        valor = (this.tipo === "despesa") ? this.valor * - 1 : this.valor; // ? -> indica onde quer voltar e o ":" indica o ponto de parada do else
        return valor;
    }*/
/* getValorString (){
if (this.tipo === "despesa") {
    return this.valor * -1;
} else {
    return this.valor;
}
}*/
/*
getValorString (){
    let valor;
    if (this.tipo === "despesa") {
        valor = this.valor * -1;
    } else {
        valor = this.valor;
    }
    // operador ternário...
    valor = (this.tipo==="despesa") ? this.valor * - 1 : this.valor;
    return this.valor
}*/