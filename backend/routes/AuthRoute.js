// const { Signup, Login } = require("../controllers/AuthController");
// const router = require("express").Router();
// router.post('/',userVerification)
// router.post("/signup", Signup);

// module.exports = router;


const express = require("express");
const router = express.Router();

const {
  signup,
  login,
  userVerification,
} = require("../controllers/AuthController");

// ✅ VERIFY USER
router.get("/api/auth/verify", userVerification);

// ✅ SIGNUP
router.post("/api/auth/signup", signup);

// ✅ LOGIN
router.post("/api/auth/login", login);

module.exports = router;
