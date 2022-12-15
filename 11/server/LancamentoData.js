class LancamentoData {
    constructor(connection) {
        this.connection = connection;
    }
    async getLancamentos() {
        const lancamentos = await this.connection.query("select * from personal_finance.lancamento", []);
        return lancamentos;
    }

    async saveLancamento(lancamento) {
        await this.connection.query("insert into personal_finance.lancamento (mes,categoria,tipo,valor) values ($1,$2,$3,$4)", [lancamento.mes, lancamento.categoria, lancamento.tipo, lancamento.valor]);
    }


}
module.exports = LancamentoData;