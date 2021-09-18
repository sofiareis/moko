const express = require("express");
const bodyParser = require("body-parser");
var userRouter = require('./routers/User');
var storeRouter = require('./routers/Store');
var storeItemRouter = require('./routers/StoreItem');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/users', userRouter);
app.use('/stores', userRouter);
app.use('/store_items', storeItemRouter);

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Hello from Moko!" });
});

// set port, listen for requests
app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});
