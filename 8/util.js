
function formatarDinheiro(valor) {
    return new Intl.NumberFormat("pt-br", { currency: "BRL", style: "currency" }).format(valor);
}
function arredondar(valor) {
    return Math.round(valor * 100) / 100;
}

//function formatarDinheiro(valor) {
//    return "R$" + valor;
//}
// da um return para adicionar R$ em um valor...
