var mongoose = require("mongoose");
var mongoClient = require( 'mongodb' ).MongoClient
var app = require("./server");
var dbUrl = "mongodb://ibohri:ismail@ds231740.mlab.com:31740/sampledb";

var db;
mongoClient.connect(dbUrl, { useNewUrlParser: true }, (err, client) => {
  if (err) console.log("Error connecting to DB" + err);
  db = client.db("sampledb");
});

module.exports = {
  getDb: function() {
    return db;
  }
};
