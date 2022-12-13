class LancamentoController {
    constructor(httpServer, lancamentoData) {



        //read service
        app.get("/api/lancamentos", async function (req, res) { //here it reads the registers
            const lancamentos = await lancamentoData.getLancamento(); //need the array space to get the data? and pay attention to the connection.query enlacement? 
            console.log(lancamentos);
            res.json(lancamentos);
        });

        //write service
        app.post("/api/lancamentos", async function (req, res) {
            const lancamento = req.body;
            await lancamentoData.saveLancamento(lancamento);
            res.end();
        });

    }
}

module.exports = LancamentoController;