var express = require('express');
var app = express();//teste 2

app.get('/', function(req, res){
	res.send('<html><body><h1>Página Inicial</h1></body></html>');
})

app.get('/cursos', function(req, res){
	res.send('<html><body><h1>Not&iacute;cias IFMS dos cursos</h1></body></html>');
})

app.get('/esportes', function(req, res){
	res.send('<html><body><h1>Not&iacute;cias IFMS dos esportes</h1></body></html>');
})

app.get('/pesquisa', function(req, res){
	res.send('<html><body><h1>Not&iacute;cias IFMS das pesquisas</h1></body></html>');
})

app.listen(3000, function(){
	console.log("servidor rodando com express");
});