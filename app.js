const express = require("express");

const app = express();

app.get("/", function(req, res){
    res.send("hello World")
});
app.get("/user", function(req, res){
    res.send({
        nome: "José"
    })
});
app.delete("/user", function(req, res){
    res.send({
        nome: "José Deletado"
    })
});
app.listen(8080, function(){
    console.log("Servidor rodando")
})