const express = require('express');
const router = express.Router();
const User = require('./../modules/userModule.js');

// User Routes - base route /users
router.post('/', createUser);
router.put('/', updateUser);
router.get('/:userID', getUserById)
router.get('/', getUsers);

function createUser(req, res, next) {
  if (!req.body.userID) {
      res.status(400).send({
        message: "UserID cannot be empty!"
      });
  }

  const newUser = new User({
    userID: req.body.userID,
    name: req.body.name,
    isSeller: req.body.isSeller,
    address: req.body.address,
    email: req.body.email,
    phoneNumber: req.body.phoneNumber
  });

	User.create(newUser, (err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message
      });
    } else { res.send(data); }
  });
}

function getUserById(req, res, next) {
	User.findById(req.params.userID, (err, data) => {
    if (err) {
      res.status(404).send({
        message: `Unable to find user with userID ${userID}.`
      });
    } else { res.send(data); }
  });
}

function getUsers(req, res, next) {
	User.getAll((res, data) => {
    if (err)
      res.status(500).send({
        message: err.message
      });
    else { res.send(data); }
  });
}

function updateUser(req, res, next) {
  const newUser = new User({
    userID: req.body.userID,
    name: req.body.name,
    isSeller: req.body.isSeller,
    address: req.body.address,
    email: req.body.email,
    phoneNumber: req.body.phoneNumber
  });

	User.updateSellerStatus(newUser, (err, data) => {
    if (err) {
        res.status(404).send({
          message: `Unable to update user with userID ${userID}.`
        });
      } else { res.send(data); }
  });
}

module.exports = router;
