// Module that makes routing easier
var express = require('express');

var app = express();
var port = 5000;

var products = [{make: "Geo", model: "Tracker"}, {make:"Acura", model:"Legend"}];

// Looks for index.html by default (http://localhost:5000/)
app.use(express.static('server/public'));

// Send back the products array (http://localhost:5000/products/)
app.get("/products", function(req, res){
  res.send(products);
});

app.listen(port);

console.log("Listening on port ", port);
