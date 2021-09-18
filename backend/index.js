const express = require("express");
const bodyParser = require("body-parser");
var userRouter = require('./routers/User');
var storeRouter = require('./routers/Store');
var storeItemRouter = require('./routers/StoreItem');
var cartItemRouter = require('./routers/CartItem');
var tagLookupRouter = require('./routers/TagLookup');
var tagRouter = require('./routers/Tag');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/users', userRouter);
app.use('/stores', userRouter);
app.use('/store_items', storeItemRouter);
app.use('/cart_items', cartItemRouter);
app.use('/tag_lookup', tagLookupRouter);
app.use('/tags', tagRouter);

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Hello from Moko!" });
});

// set port, listen for requests
app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});
