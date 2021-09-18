/* Database Initialization Script: */
CREATE DATABASE MokoDB;
USE MokoDB;

CREATE TABLE USER(
  userID int NOT NULL AUTO_INCREMENT,
  cartID int NOT NULL AUTO_INCREMENT,
  isSeller boolean NOT NULL,
  address varchar(200) NOT NULL,
  name varchar(40) NOT NULL,
  email varchar(100) NOT NULL,
  phoneNumber varchar(10) NOT NULL,
  PRIMARY KEY(userID, cartID)
);

CREATE TABLE STORE(
  storeID int NOT NULL AUTO_INCREMENT,
  userID int NOT NULL,
  description varchar(200) NOT NULL,
  address varchar(400) NOT NULL,
  FOREIGN KEY (userID) REFERENCES USER (userID),
  PRIMARY KEY(storeID)
);

CREATE TABLE STORE_ITEM(
  storeItemID int NOT NULL AUTO_INCREMENT,
  storeID int NOT NULL,
  name varchar(60) NOT NULL,
  description varchar(60),
  stockQty int unsigned NOT NULL CHECK (stockQty >= 0),
  price money NOT NULL CHECK (price >= 0),
  imageUrl varchar(800),
  FOREIGN KEY (storeID) REFERENCES STORE (storeID),
  PRIMARY KEY(itemID)
);

CREATE TABLE CART_ITEM(
  cartID int NOT NULL AUTO_INCREMENT,
  cartItemID int NOT NULL,
  quantity int,
  FOREIGN KEY (cartID) REFERENCES USER (cartID),
  PRIMARY KEY(cartItemID)
);

CREATE TABLE TAG_LOOKUP(
  tagLookupID int NOT NULL AUTO_INCREMENT,
  userID int,
  storeID int,
  FOREIGN KEY (cartID) REFERENCES USER (userID),
  FOREIGN KEY (storeID) REFERENCES USER (storeID)
);

CREATE TABLE TAG(
  tagID int NOT NULL AUTO_INCREMENT,
  name varchar(400) NOT NULL
);

INSERT INTO TAG(name) VALUES('Vegetables');
INSERT INTO TAG(name) VALUES('Fruit');
INSERT INTO TAG(name) VALUES('Dairy');
INSERT INTO TAG(name) VALUES('Eggs');
INSERT INTO TAG(name) VALUES('Meat Products');
INSERT INTO TAG(name) VALUES('Produce');
INSERT INTO TAG(name) VALUES('Vegetarian');
INSERT INTO TAG(name) VALUES('Home Cooked');
INSERT INTO TAG(name) VALUES('Desserts');
INSERT INTO TAG(name) VALUES('Ready-made');

INSERT INTO USER(isSeller, address, name, email, phoneNumber) VALUES
  VALUES(true, '1580 Point W Blvd, Coppell, TX 75019', 'John Doe', 'john@doe.com', '1234561234');
INSERT INTO USER(isSeller, address, name, email, phoneNumber) VALUES
  VALUES(true, '1575 S Belt Line Rd, Coppell, TX 75019', 'Jane Doe', 'jane@doe.com', '9876543210');

INSERT INTO STORE(userID, description, address) VALUES(1, 'A friendly vegetable stand', '1580 Point W Blvd, Coppell, TX 75019');
INSERT INTO STORE(userID, description, address) VALUES(2, 'A local homemade dessert stand', '1575 S Belt Line Rd, Coppell, TX 75019');

INSERT INTO STORE_ITEM(storeID, name, description, stockQty, price, imageUrl)
  VALUES(1, 'Lettuce', 'Crisp Iceberg lettuce, priced per head', 10, 1.99, "tiadnndskaljn");
INSERT INTO STORE_ITEM(storeID, name, description, stockQty, price, imageUrl)
  VALUES(1, 'Tomatoes', 'Sweet tomatoes, priced per bunch', 20, 2.99, "shajdhjksal");
INSERT INTO STORE_ITEM(storeID, name, description, stockQty, price, imageUrl)
  VALUES(1, 'Cucumbers', 'Freshly picked cucumbers, priced per bunch of 3', 20, 1.99, "shajdhjksal");
INSERT INTO STORE_ITEM(storeID, name, description, stockQty, price, imageUrl)
  VALUES(1, 'Celery', 'Crunchy celery stalks, priced per bunch', 30, 2.99, "shajdhjksal");

INSERT INTO STORE_ITEM(storeID, name, description, stockQty, price, imageUrl)
  VALUES(2, 'Chocolate Chip Cookie', 'Chewy cookies, priced per cookie', 30, 0.99, "shajdhjksal");
INSERT INTO STORE_ITEM(storeID, name, description, stockQty, price, imageUrl)
  VALUES(2, 'Banana Bread', 'A mini-loaf of warm banana bread', 10, 1.50, "shajdhjksal");
INSERT INTO STORE_ITEM(storeID, name, description, stockQty, price, imageUrl)
  VALUES(2, 'Vanilla Cupcake', 'A light vanilla cupcake with sprinkles', 30, 2.99, "shajdhjksal");
