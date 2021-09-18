const sql = require("./db.js");

const TagLookup = function(tagLookup) {
  this.userID = tagLookup.userID;
  this.storeID = tagLookup.storeID
  this.tagID = tagLookup.tagID;
};

TagLookup.create = (tagLookup, result) => {
  let fields = "userID, storeID, tagID";
  let values = "\"" + tagLookup.userID + "\",\"" + tagLookup.storeID + "\",\"" + tagLookup.tagID + "\"";

  sql.query("INSERT INTO TAG_LOOKUP(" + fields + ") VALUES(" + values + ")", (err,res) => {
      if (err) {
          console.log("error: ", err);
          result(err, null);
          return;
      }
      console.log("created tag lookup item: ", { ...tagLookup });
      result(null, { ...tagLookup });
  });
};

TagLookup.getTagsForUser = (userID, result) => {
  sql.query('SELECT * FROM TAG_LOOKUP WHERE userID=\"' + userID + '\"', (err, res) => {
    if (err) {
        console.log("error ", err);
        result(err, null);
        return;
    }

    if (res.length) {
        console.log("found tag lookup items: ", res);
        result(null, res);
        return;
    }

    result({ kind: "Tag lookup items for user with userID: " + userID + " not found" }, null);
  });
};

TagLookup.getTagsForStore = (storeID, result) => {
  sql.query('SELECT * FROM TAG_LOOKUP WHERE storeID=\"' + storeID + '\"', (err, res) => {
    if (err) {
        console.log("error ", err);
        result(err, null);
        return;
    }

    if (res.length) {
        console.log("found tag lookup items: ", res);
        result(null, res);
        return;
    }

    result({ kind: "Tag lookup items for store with storeID: " + storeID + " not found" }, null);
  });
};

module.exports = TagLookup;
