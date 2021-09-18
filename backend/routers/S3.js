const express = require('express');
const router = express.Router();
const S3 = require('./../modules/s3.js');

// S3 Routes - base route /s3
router.post('/', createImage);
router.delete('/', removeImage);

async function createImage(req, res, next) {
	S3.createImage(req.body, (err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message
      });
    } else { res.send(data); }
  });
}

async function deleteImage(req, res, next) {
  S3.deleteImage(req.body, (err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message
      });
    } else { res.send(data); }
  });
}

module.exports = router;
