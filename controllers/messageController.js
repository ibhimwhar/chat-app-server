const Message = require("../models/Message");

exports.sendMessage = async (req, res) => {
    const { to, text } = req.body;
    const from = req.user.id;

    const msg = await Message.create({ from, to, text });
    res.json(msg);
};

exports.getMessages = async (req, res) => {
    const userId = req.user.id;
    const { withUser } = req.query;

    if (!withUser) {
        return res.status(400).json({ error: "Recipient ID (withUser) required" });
    }

    const messages = await Message.find({
        $or: [
            { from: userId, to: withUser },
            { from: withUser, to: userId }
        ]
    }).populate("from to", "username");

    res.json(messages);
};

