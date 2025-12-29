const natural = require("natural");
const classifier = new natural.BayesClassifier();

/* TRAINING DATA */
classifier.addDocument("I love this product", "positive");
classifier.addDocument("This is amazing", "positive");
classifier.addDocument("I am very happy", "positive");
classifier.addDocument("Excellent work", "positive");

classifier.addDocument("I hate this", "negative");
classifier.addDocument("This is terrible", "negative");
classifier.addDocument("Very bad experience", "negative");
classifier.addDocument("Worst app ever", "negative");

classifier.addDocument("It is okay", "neutral");
classifier.addDocument("Nothing special", "neutral");
classifier.addDocument("Average experience", "neutral");

classifier.train();

function predictSentiment(text) {
    return classifier.classify(text);
}

module.exports = predictSentiment;
