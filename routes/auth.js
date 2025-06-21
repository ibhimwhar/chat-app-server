const express = require("express");
const { register, login } = require("../controllers/authController");
const User = require("../models/User")

const router = express.Router();

router.get("/users", async (req, res) => {
    const users = await User.find({}, "_id username");
    res.json(users);
});
router.post("/register", register);
router.post("/login", login);


module.exports = router;
