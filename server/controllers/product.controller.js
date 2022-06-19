const db = require("../models");
const Product = db.Product;

// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Validate request
  if (!req.body.Product) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a Tutorial
  const product = new Product({
    name: req.body.name,
    info: req.body.info,
  });

  // Save Tutorial in the database
  product.find({
    name: req.body.name,
  })
    .then((data) => {
      if (!data.length) {
        product
          .save(product)
          .then((data) => {
            res.send({ message: "Success" });
          })
          .catch((err) => {
            res.status(500).send({
              message:
                err.message ||
                "Some error occurred while creating the product.",
            });
          });
      } else {
        res.send({ message: "The user exists" });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Error retrieving product" });
    });
};
