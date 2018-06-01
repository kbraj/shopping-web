var express = require("express");
var app = express();
var port = process.env.PORT || 3000;
var db = require("./db");
var path = require("path")
var server = app.listen(port, function() {
  console.log("Express server listening on port " + port);
});

app.use(express.static(__dirname + '/dist'));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

var productController = require("./controllers/productController");
app.use("/api/product", productController);

var categoryController = require("./controllers/cateogoryController");
app.use("/api/category", categoryController);

app.get('/*', function(req, res) {
  res.sendfile(path.join(__dirname + '/dist/index.html'));
});

// Create link to Angular build directory
var distDir = __dirname + "/dist/";
app.use(express.static(distDir));

module.exports = app;
