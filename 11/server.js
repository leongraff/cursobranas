const express = require("express"); //CommonJS
const Connection = require("./server/Connection");
const LancamentoData = require("./server/LancamentoData")
console.log(Connection);


const connection = new Connection();
const lancamentoData = new LancamentoData(connection);


const app = express();
app.use(express.json()); // setting the express to being able to read the body of the requisition
app.use("/", express.static("./client"));


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

app.listen(3000);