var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.get("/", (req, res) => {
  var db = require("../db").getDb();
  var c = new Promise((resolve, reject) => {
   db
      .collection("category")
      .find()
      .toArray((err, category) => {
        if (err) {
          reject(err);
          console.log(err);
        } else {
          resolve(category);
        }
      });
  });
  c.then(categories => res.json(categories));
});
module.exports = router;
