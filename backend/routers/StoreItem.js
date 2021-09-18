const express = require('express');
const router = express.Router();
const StoreItem = require('./../modules/storeItemModule.js');

// User Routes - base route /users
router.post('/', createStoreItem);
router.put('/', updateStoreItem);

function createStoreItem(req, res, next) {
  if (!req.body.storeItemID) {
      res.status(400).send({
        message: "storeItemID cannot be empty!"
      });
  }

  const newStoreItem = new StoreItem({
    storeItemID: req.body.storeItemID,
    storeID: req.body.storeID,
    name: req.body.name,
    description: req.body.description,
    stockQty: req.body.stockQty,
    price: req.body.price,
    imageUrl: req.body.imageUrl
  });

	StoreItem.create(newStoreItem, (err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message
      });
    } else { res.send(data); }
  });
}

function updateStoreItem(req, res, next) {
  const newStoreItem = new StoreItem({
    storeItemID: req.body.storeItemID,
    storeID: req.body.storeID,
    name: req.body.name,
    description: req.body.description,
    stockQty: req.body.stockQty,
    price: req.body.price,
    imageUrl: req.body.imageUrl
  });

	StoreItem.updateQuantity(newStoreItem, (err, data) => {
    if (err) {
        res.status(404).send({
          message: `Unable to update storeItem with ID ${newStoreItem.storeItemID}.`
        });
      } else { res.send(data); }
  });
}

module.exports = router;
