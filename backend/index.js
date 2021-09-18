const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
var createError = require('http-errors');
var cors = require('cors');
var userRouter = require('./routers/User');
var storeRouter = require('./routers/Store');
var storeItemRouter = require('./routers/StoreItem');
var cartItemRouter = require('./routers/CartItem');
var tagLookupRouter = require('./routers/TagLookup');
var tagRouter = require('./routers/Tag');
var s3Router = require('./routers/S3');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    res.append('Accept', ['*/*']);
    next();
});

app.use('/users', userRouter);
app.use('/stores', userRouter);
app.use('/store_items', storeItemRouter);
app.use('/cart_items', cartItemRouter);
app.use('/tag_lookup', tagLookupRouter);
app.use('/tags', tagRouter);
app.use('/s3', s3Router);

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Hello from Moko!" });
});

app.use(function(req, res, next) {
  next(createError(404));
});

// set port, listen for requests
app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});
