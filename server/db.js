var mongoose = require("mongoose");
var mongoClient = require( 'mongodb' ).MongoClient
var app = require("./server");
var dbUrl = "mongodb://bkraj:bkraj123@ds239940.mlab.com:39940/shopping-web";

var db;
mongoClient.connect(dbUrl, { useNewUrlParser: true }, (err, client) => {
  if (err) console.log("Error connecting to DB" + err);
  db = client.db("shopping-web");
});

module.exports = {
  getDb: function() {
    return db;
  }
};
