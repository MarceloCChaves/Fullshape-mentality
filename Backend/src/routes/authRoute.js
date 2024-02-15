const { Router } = require('express');
const AuthController = require("../controllers/AuthController");

const router = Router();

router.post("/auth/login", AuthController.loginUser);
router.post("/auth/register", AuthController.registerUser);

module.exports = router;