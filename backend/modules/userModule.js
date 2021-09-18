const sql = require("./db.js");

const User = function(user) {
  this.userID = user.userID;
  this.isSeller = user.isSeller;
  this.address = user.address;
  this.email = user.email;
  this.phoneNumber = user.phoneNumber;
};

User.create = (user, result) => {
  let fields = "userID, isSeller, address, email, phoneNUmber";
  let values = "\"" + user.userID + "\",\"" + user.isSeller
    + "\",\"" + user.address + "\",\"" + user.email + "\",\"" + user.phoneNumber + "\"";

  sql.query("INSERT INTO USER(" + fields + ") VALUES(" + values + ")", (err,res) => {
      if (err) {
          console.log("error: ", err);
          result(err, null);
          return;
      }
      console.log("created user: ", { ...user });
      result(null, { ...user });
  });
};

User.findById = (userID, result) => {
  sql.query('SELECT * FROM USER WHERE userID=\"' + userID + '\"', (err, res) => {
      if (err) {
          console.log("error ", err);
          result(err, null);
          return;
      }

      if (res.length) {
          console.log("found user: ", res[0]);
          result(null, res);
          return;
      }

      result({ kind: "User not found" }, null);
  });
};

User.updateSellerStatus = (user, result) => {
  sql.query(
      "UPDATE USER SET isSeller=\"" + user.isSeller + "\" WHERE userID=\"" + user.userID + "\"",
      (err, res) => {
          if (err) {
              console.log("error: ", err);
              result(null, err);
              return;
          } else if (res.affectedRows == 0) {
              result({ kind: "user not found" }, null);
              return;
          }

          console.log("updated user: ", { ...user });
          result(null, { ...user });
      }
  );
};

User.getAll = (result) => {
    sql.query("SELECT * FROM USER", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("users: ", res);
        result(null, res);
    });
};

User.getCartItems = (userID, result) => {
  sql.query('SELECT * FROM CART_ITEMS WHERE userID=\"' + userID + '\"', (err, res) => {
    if (err) {
        console.log("error ", err);
        result(err, null);
        return;
    }

    if (res.length) {
        console.log("found cart items: ", res);
        result(null, res);
        return;
    }

    result({ kind: "Cart items for user with userID: " + userID + " not found" }, null);
  });
}

User.deleteAllCartItems = (userID, result) => {
  sql.query('DELETE FROM CART_ITEMS WHERE userID=\"' + userID + '\"', (err, res) => {
    if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
    } else if (res.affectedRows == 0) {
        result({ kind: "cartItem cannot be deleted" }, null);
        return;
    }

    console.log("deleted all cartItems with userID: ", userID);
    result(null, res);
  });
}

User.getStoresInRadius = (user, radius, result) => {
  
}

module.exports = User;
