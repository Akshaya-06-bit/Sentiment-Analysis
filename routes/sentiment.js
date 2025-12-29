const express = require("express");
const router = express.Router();

const predictSentiment = require("../ml/sentimentModel");
const Sentiment = require("../models/Sentiment");

router.post("/analyze", async (req, res) => {
    try {
        const { text } = req.body;

        if (!text) {
            return res.status(400).json({ message: "Text is required" });
        }

        const sentiment = predictSentiment(text);

        const record = new Sentiment({
            text,
            sentiment
        });

        await record.save();

        res.json({
            text,
            sentiment
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
