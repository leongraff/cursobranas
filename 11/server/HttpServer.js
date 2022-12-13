const express = require("express");

class HttpServer {
    constructor() {
        this.app = express();
        app.use(express.json()); // setting the express to being able to read the body of the requisition
        app.use("/", express.static("./client"));

    }

    listen(port) {
        app.listen(port);
    };
}