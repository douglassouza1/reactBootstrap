const express = require('express');
const app = express();

//rota home
app.get('/', function(req, res){
    res.sendfile(__dirname + '/Home.html');

});

//rota sobre
app.get('/Menu', function(req, res){
    res.sendfile(__dirname + '/Menu.html');

});

//rota params

app.get('/user/:nome',function(req,res){
    res.send("Ola," + req.params.nome + ".")

});