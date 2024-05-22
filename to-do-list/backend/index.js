
require('dotenv').config();
const mongoose = require("mongoose");
const express = require('express');
const app = express();
const cors = require("cors");
const auth = require("./routes/auth");
const list = require("./routes/listRoutes");

app.use(express.json());
app.use(cors());

async function connectDB() {
    try {
        const mongoURI = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_CLUSTER}.mongodb.net/${process.env.MONGODB_DB}?retryWrites=true&w=majority&appName=Cluster0`;
        await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Could not connect to MongoDB", error);
    }
}

// Connect to the database when the server starts
connectDB();

app.get("/", (req, res) => {
    res.send("HELLO");
});

app.use("/api/v1", auth);
app.use("/api/v2", list);

app.listen(1000, () => {
    console.log("Server Started on port 1000.!!");
});
