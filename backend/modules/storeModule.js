const sql = require("./db.js");

const Store = function(store) {
  this.storeID = store.storeID;
  this.userID = store.userID;
  this.description = store.description;
  this.address = store.address;
};

Store.create = (store, result) => {
  let fields = "userID, storeID, isSeller, address, email, phoneNUmber";
  let values = "\"" + store.userID + "\",\"" + store.storeID + "\",\"" + store.description
    + "\",\"" + store.address + "\"";

  sql.query("INSERT INTO STORE(" + fields + ") VALUES(" + values + ")", (err,res) => {
      if (err) {
          console.log("error: ", err);
          result(err, null);
          return;
      }
      console.log("created store: ", { ...store });
      result(null, { ...store });
  });
};

module.exports = Store;
