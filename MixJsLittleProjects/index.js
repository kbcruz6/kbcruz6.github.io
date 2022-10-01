const express = require("express");
const app = express();
const path = require ("path");

// const http = require ("http");

// http.createServer(function (req,res){
//     res.writeHead(200, {"Content-Type": "text/html"});
//     res.write("HEllo world");
//     res.end();
// }).listen(8080);

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use(require("./src/routes/mails.js"));

app.use(express.static(path.join(__dirname, "/")));

app.listen(3000, () =>{
    console.log("Server en puerto 3000 king")
});
