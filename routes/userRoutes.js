const express = require("express");
const { 
    registerUser, 
    loginUser, 
    currentUser 
} = require("../controllers/userController");
const validateToken = require("../middleware/validateTokenHandler");

const router = express.Router();

router.post("/register", registerUser);  //POST

router.post("/login", loginUser);  //POST

router.get("/current", validateToken, currentUser); //GET

module.exports = router;