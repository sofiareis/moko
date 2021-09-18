const express = require('express');
const router = express.Router();
const TagLookup = require('./../modules/tagLookupModule.js');

// Tag Lookup Routes - base route /tag_lookup
router.post('/', createTagLookup);
router.get('/:userID', getTagsByUser);
router.get('/:storeID', getTagsByStore);

function createTagLookup(req, res, next) {
  const newTagLookup = new TagLookup({
    userID: req.body.userID,
    storeID: req.body.storeID,
    tagID: req.body.tagID
  });

	TagLookup.create(newCartItem, (err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message
      });
    } else { res.send(data); }
  });
}

function getTagsByUser(req, res, next) {
	TagLookup.getTagsForUser(req.params.userID, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message
      });
    else { res.send(data); }
  });
}

function getTagsByStore(req, res, next) {
	TagLookup.getTagsForStore(req.params.storeID, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message
      });
    else { res.send(data); }
  });
}

module.exports = router;
