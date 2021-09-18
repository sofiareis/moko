const sql = require("./db.js");

const User = function(user) {
  this.userID = user.userID;
  this.name = user.name;
  this.isSeller = user.isSeller;
  this.address = user.address;
  this.email = user.email;
  this.phoneNumber = user.phoneNumber;
};

User.create = (user, result) => {
  let fields = "userID, name, isSeller, address, email, phoneNUmber";
  let values = "\"" + user.userID + "\",\"" + user.name + "\",\"" + user.isSeller
    + "\",\"" + user.address + "\",\"" + user.email + "\",\"" + user.phoneNumber + "\"";

  sql.query("INSERT INTO USER(" + fields + ") VALUES(" + values + ")", (err,res) => {
      if (err) {
          console.log("error: ", err);
          result(err, null);
          return;
      }
      console.log("created user: ", {...user });
      result(null, {...user});
  });

  if (user.isSeller) {
    Store.create()
  }
};

User.findById = (userID, result) => {
  sql.query('SELECT * FROM USER WHERE userID=\"'+ userID + '\"', (err, res) => {
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
      "UPDATE USER SET name = \"" + user.name + "\" WHERE userID = \"" + user.userID + "\"",
      (err, res) => {
          if (err) {
              console.log("error: ", err);
              result(null, err);
              return;
          } else if (res.affectedRows == 0) {
              result({ kind: "user not found" }, null);
              return;
          }

          console.log("updated user: ", {...user });
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

module.exports = User;
