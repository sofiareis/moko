const express = require('express');
const router = express.Router();
const CartItem = require('./../modules/cartItemModule.js');

// CartItem Routes - base route /cart_items
router.post('/', createCartItem);
router.put('/', updateItemQuantity);
router.delete('/:storeItemID', deleteCartItem);

function createCartItem(req, res, next) {
  if (!req.body.userID) {
      res.status(400).send({
        message: "UserID cannot be empty!"
      });
  }

  const newCartItem = new CartItem({
    userID: req.body.userID,
    storeItemID: req.body.storeItemID,
    storeID: req.body.storeID,
    quantity: req.body.quantity,
    price: req.body.price,
    imageUrl: req.body.imageUrl,
    imageName: req.body.imageName,
    name: req.body.name,
    description: req.body.description
  });

	CartItem.create(newCartItem, (err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message
      });
    } else { res.send(data); }
  });
}

function updateItemQuantity(req, res, next) {
  const newCartItem = new CartItem({
    userID: req.body.userID,
    storeItemID: req.body.storeItemID,
    storeID: req.body.storeID,
    quantity: req.body.quantity,
    price: req.body.price,
    imageUrl: req.body.imageUrl,
    imageName: req.body.imageName,
    name: req.body.name,
    description: req.body.description
  });

	CartItem.updateQuantity(newCartItem, (err, data) => {
    if (err) {
        res.status(404).send({
          message: `Unable to update user with cartItem with storeID: ${newCartItem.storeItemID}.`
        });
      } else { res.send(data); }
  });
}

function deleteCartItem(req, res, next) {
  let storeItemID = req.params.storeItemID;
  CartItem.remove(storeItemID, (err, data) => {
    if (err) {
      res.status(400).send({
        message: `Unable to delete cartItem with storeItemID ${storeItemID}.`
      });
    } else { res.send(data); }
  });
}

module.exports = router;
