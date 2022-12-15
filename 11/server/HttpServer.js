const express = require("express");

class HttpServer {
    constructor() {
        this.app = express();
        this.app.use(express.json()); // setting the express to being able to read the body of the requisition
        this.app.use("/", express.static("./client"));

    }

    register(method, url, callback) {
        this.app[method](url, async function (req, res) { //here it reads the registers
            const output = await callback(req.params, req.body); //need the array space to get the data? and pay attention to the connection.query enlacement? 
            res.json(output);
        }); // between brackets, method property, execute.
        // u can dinamically call a function between brackets
    }

    listen(port) {
        this.app.listen(port);
    };
}

module.exports = HttpServer;
// a method is a key value where the value is a function