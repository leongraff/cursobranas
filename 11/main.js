
const Connection = require("./server/Connection");
const HttpServer = require("./server/HttpServer");
const LancamentoController = require("./server/LancamentoController");
const LancamentoData = require("./server/LancamentoData")      // here the require are pointed to another js/class files
console.log(Connection);


const connection = new Connection();
const lancamentoData = new LancamentoData(connection);
const httpServer = new HttpServer();
new LancamentoController(httpServer, lancamentoData);
httpServer.listen(3000);