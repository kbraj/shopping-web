var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");
var ObjectId = require('mongodb').ObjectID;
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.get("/", (req, res) => {
  var db = require("../db").getDb();
  var pr = new Promise((resolve, reject) => {
    db
      .collection("product")
      .find()
      .toArray((err, products) => {
        if (err) {
          console.log(err);
          reject(err);
        } else {
          resolve(products);
        }
      });
  });
  pr.then(products => res.json(products));
});

router.post("/", (req, res) => {
  var db = require("../db").getDb();
  var p = new Promise((resolve, reject) => {
    db.collection("product").save(req.body, (err, products) => {
      if (err) {
        console.log(err);
        reject(err);
      }
      resolve(products);
    });
  });
  p.then(added => res.json(added));
});

router.get("/:id", (req, res) => {
  var db = require("../db").getDb();
  var getByIdPr = new Promise((resolve, reject) => {
    db
      .collection("product")
      .find({ _id: ObjectId(req.params.id) })
      .toArray((err, products) => {
        if (err) {
          console.log(err);
          reject(err);
        } else {
          resolve(products[0]);
        }
      });
  });
  getByIdPr.then(added => res.json(added));
});

router.put("/:id", (req, res) => {
  var db = require("../db").getDb();
  var up = new Promise((resolve, reject) => {
    db
      .collection("product")
      .updateOne(
        { _id: ObjectId(req.params.id) },
        req.body,
        (err, products) => {
          if (err) {
            console.log(err);
            reject(err);
          }
          resolve(products);
        }
      );
  });
  up.then(added => res.json(added));
});

router.delete("/:id", (req, res) => {
  var db = require("../db").getDb();
  var dp = new Promise((resolve, reject) => {
    db
      .collection("product")
      .deleteOne({ _id: ObjectId(req.params.id) }, (err, products) => {
        if (err) {
          console.log(err);
          reject(err);
        }
        resolve(products);
      });
  });
  dp.then(added => res.json(added));
});

router.get("/getProductByCategory/:category", (req, res) => {
  var db = require("../db").getDb();
  var c = new Promise((resolve, reject) => {
    db
      .collection("product")
      .find({ category: req.params.category })
      .toArray((err, products) => {
        if (err) {
          console.log(err);
          reject(err);
        } else {
          resolve(products);
        }
      });
  });
  c.then(added => res.json(added));
});
module.exports = router;
