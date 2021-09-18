const sql = require("./db.js");

const Tag = function(tag) {
  this.tagID = tag.tagID;
  this.name = tag.name;
};

Tag.create = (tag, result) => {
  let fields = "userID, storeID, tagID";
  let values = "\"" + tag.tagID + "\",\"" + tag.name + "\"";

  sql.query("INSERT INTO TAG(" + fields + ") VALUES(" + values + ")", (err,res) => {
      if (err) {
          console.log("error: ", err);
          result(err, null);
          return;
      }
      console.log("created tag item: ", { ...tag });
      result(null, { ...tag });
  });
};

Tag.getTagByID = (tagID, result) => {
  sql.query('SELECT * FROM TAG WHERE tagID=\"'+ tagID + '\"', (err, res) => {
      if (err) {
          console.log("error: ", err);
          result(err, null);
          return;
      } else if (res.length) {
          console.log("found tag: ", res);
          result(null, res);
          return;
      }

      result({ kind: "tag not found" }, null);
  });
}

Tag.getAll = (result) => {
  sql.query('SELECT * FROM TAG', (err, res) => {
    if (err) {
        console.log("error getting tags: ", err);
        result(null, err);
        return;
    }

    console.log("tags: ", res);
    result(null, res);
  });
};

module.exports = Tag;
