const express = require("express");
const router = express.Router();

const { signupDirect } = require("../controllers/mainController");
const { home } = require("../controllers/mainController");
const { loginDirect } = require("../controllers/mainController");
const { login } = require("../controllers/mainController");
const { loginPost } = require("../controllers/mainController");
const { loginSuccess } = require("../controllers/mainController");

const validateSignup = require("../validation/validationFile");
router.post("/loginsucc", validateSignup, loginSuccess);
router.get("/Sign", signupDirect);
router.get("/home", home);
router.post("/signup", validateSignup, loginDirect);
router.get("/login", validateSignup, login);
router.get("/logoutt", loginPost);

module.exports = router;
