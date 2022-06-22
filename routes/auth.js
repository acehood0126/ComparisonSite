var express = require("express");
var router = express.Router();
const { check, validationResult } = require("express-validator");
const user = require("../controllers/user.controller");

/* GET users listing. */
router.get("/", (req, res) => {
  res.send("users api");
});

router.post(
  "/",
  check("email", "Please include a valid email").isEmail(),
  check("password", "Password is required").exists(),
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    user.auth(req, res);
  }
);

module.exports = router;
