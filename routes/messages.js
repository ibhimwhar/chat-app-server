const express = require("express");
const { sendMessage, getMessages } = require("../controllers/messageController");
const auth = require("../authMiddleware");

const router = express.Router();

router.post("/", auth, sendMessage);
router.get("/", auth, getMessages);

module.exports = router;
