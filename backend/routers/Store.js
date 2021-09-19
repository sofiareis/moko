const express = require('express');
const router = express.Router();
const Store = require('./../modules/storeModule.js');

// Store Routes - base route /stores
router.post('/', createStore);
router.get('/', getAllStores);
router.get('/:userID', getStoreByUserId);
router.get('/items/:storeID', findItemsByStoreId);
router.get('/radius', getStoresInRadius);

let cache = {};

function createStore(req, res, next) {
  if (!req.body.storeID) {
      res.status(400).send({
        message: "storeID cannot be empty!"
      });
  }

  const newStore = new Store({
    storeID: req.body.storeID,
    userID: req.body.userID,
    name: req.body.name,
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

function getAllStores(req, res, next) {
  Store.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message: err.message
      });
    else { res.send(data); }
  });
}

function getStoreByUserId(req, res, next) {
  Store.findById(req.params.userID, (err, data) => {
    if (err)
      res.status(404).send({
        message: "User has no store"
      });
    else { res.send(data); }
  });
}

function findItemsByStoreId(req, res, next) {
  Store.findItemsByStoreId(req.params.storeID, (err, data) => {
    if (err)
      res.status(404).send({
        message: "Store not found"
      });
    else { res.send(data); }
  });
}

function getStoresInRadius(req, res, next) {
  const baseAddress = req.body.address;
  const radius = req.body.radius;

  Store.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message: err.message
      });
    else {
      if (cache[radius]) {
        res.send(cache[radius]);
      } else {
        let storesInRadius = data.filter(store => {
          let dist = GeoCoder.getDistanceBetweenAddresses(baseAddress, store.address);
          return dist >= 0 && dist <= radius;
        });

        cache[radius] = storesInRadius;
        res.send(storesInRadius);
      }
    }
  });
}

module.exports = router;
