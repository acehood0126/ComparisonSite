const config = require("config");
const mongoURI = config.get("MongoURI");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = mongoURI;
db.Company = require("./company.model.js")(mongoose);
db.Product = require("./product.model.js")(mongoose);
db.User = require("./user.model.js")(mongoose);

module.exports = db;
