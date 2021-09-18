const express = require('express');
const router = express.Router();
const Store = require('./../modules/storeModule.js');

// Store Routes - base route /stores
router.post('/', createStore);

function createStore(req, res, next) {
  if (!req.body.storeID) {
      res.status(400).send({
        message: "storeID cannot be empty!"
      });
  }

  const newStore = new Store({
    storeID: req.body.storeID,
    userID: req.body.userID,
    description: req.body.description,
    address: req.body.address
  });

	Store.create(newStore, (err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message
      });
    } else { res.send(data); }
  });
}

module.exports = router;
