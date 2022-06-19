const db = require("../models");
const Company = db.Company;

// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Validate request
  if (!req.body.Company) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a Tutorial
  const company = new Company({
    name: req.body.name,
    info: req.body.info,
  });

  // Save Tutorial in the database
  Company.find({
    name: req.body.name,
  })
    .then((data) => {
      if (!data.length) {
        company
          .save(company)
          .then((data) => {
            res.send({ message: "Success" });
          })
          .catch((err) => {
            res.status(500).send({
              message:
                err.message ||
                "Some error occurred while creating the retailer.",
            });
          });
      } else {
        res.send({ message: "The user exists" });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Error retrieving retailer" });
    });
};
