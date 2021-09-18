const express = require('express');
const router = express.Router();
const Tag = require('./../modules/tagModule.js');

// Tag Routes - base route /tags
router.post('/', createTag);
router.get('/:tagID', getTagByID);
router.get('/', getAllTags);

function createTag(req, res, next) {
  const newTag = new Tag({
    tagID: req.body.tagID,
    name: req.body.name
  });

	Tag.create(newTag, (err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message
      });
    } else { res.send(data); }
  });
}

function getTagByID(req, res, next) {
  Tag.getTagByID(req.params.tagID, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message
      });
    else { res.send(data); }
  });
}

function getAllTags(req, res, next) {
	Tag.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message: err.message
      });
    else { res.send(data); }
  });
}

module.exports = router;
