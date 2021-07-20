const { Router } = require("express");
const authController = require("../controllers/authControllers");

const router = Router();

router.get("/signup", authController.signup_get);

module.exports = router;
