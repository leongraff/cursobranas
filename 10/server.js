const express = require("express");
const pgp = require("pg-promise"); //brought up the library - pg-promise is the library, update, delete and data insertion

const app = express();
app.use(express.json()); // setting the express to being able to read the body of the requisition
app.use("/", express.static("./client"));

const connection = pgp()("postgres://postgres:Uzumymwq1!@@localhost:5432/app");  // creating the connection with the library, why double parentheses?? idk settings?
// this lib create the connection pool, 
//read service
app.get("/api/lancamentos", async function (req, res) { //here it reads the registers
    const lancamentos = await connection.query("select * from personal_finance.lancamento", []) //need the array space to get the data? and pay attention to the connection.query enlacement? 
    console.log(lancamentos);
    res.json(lancamentos); //returning in json format, await e async are always together
});

//write service
app.post("/api/lancamentos", async function (req, res) { //here it posts the register
    const lancamento = req.body; //what is a req.body?
    await connection.query("insert into personal_finance.lancamento (mes,categoria,tipo,valor) values ($1,$2,$3,$4)", [lancamento.mes, lancamento.categoria, lancamento.tipo, lancamento.valor]);
    res.end();
});

app.listen(3000);