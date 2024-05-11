const mongoose = require("mongoose");
const express = require('express');
const app = express();

const auth = require("./routes/auth");

app.use(express.json());

async function connectDB() {
    try {
        await mongoose.connect("mongodb+srv://Nimra:nimraJahangir.1125@cluster0.bpkxc2b.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
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

app.listen(1000, () => {
    console.log("Server Started on port 1000.!!");
});
