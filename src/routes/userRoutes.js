const express = require("express");
const router = express.Router();
const { signupUser, loginUser } = require("../controllers/userController");


router.post("/signup", signupUser);


router.post("/login", loginUser);

router.get("/", (req, res) => {
    res.send("User API is working!");
});

module.exports = router;
