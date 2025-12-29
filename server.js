const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

const sentimentRoutes = require("./routes/sentiment");

const app = express();

/* MIDDLEWARE */
app.use(cors());
app.use(bodyParser.json());

/* MONGODB CONNECTION */
mongoose.connect("mongodb://127.0.0.1:27017/sentimentDB")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

/* ROUTES */
app.use("/api", sentimentRoutes);

/* FRONTEND */
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public/index.html"));
});

/* SERVER */
app.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
});
