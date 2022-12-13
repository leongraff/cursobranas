
const Connection = require("./server/Connection");
const LancamentoController = require("./server/LancamentoController");
const LancamentoData = require("./server/LancamentoData")      // here the require are pointed to another js/class files
console.log(Connection);


const connection = new Connection();
const lancamentoData = new LancamentoData(connection);
const lancamentoController = new LancamentoController(lancamentoData);

