const mongoose = require("mongoose");

const sentimentSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    sentiment: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Sentiment", sentimentSchema);
