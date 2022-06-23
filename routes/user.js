var express = require("express");
var router = express.Router();
const auth = require("../middleware/auth");
const { check, validationResult } = require("express-validator");
const user = require("../controllers/user.controller");

/* GET users listing. */
router.get("/", user.take);

router.post(
  "/add",
  auth,
  check("name", "Name is required").notEmpty(),
  check("email", "Please include a valid email").isEmail(),
  check(
    "password",
    "Please enter a password with 6 or more characters"
  ).isLength({ min: 6 }),
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    user.create(req, res);
  }
);

module.exports = router;
