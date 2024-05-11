const mongoose = require("mongoose");


const conn = async (req, res) => {
    try {
        await mongoose
        .connect(
            "mongodb+srv://Nimra:nimraJahangir.1125@cluster0.bpkxc2b.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
        )
        .then(() => {
            console.log("Connected");
        });
    } catch (error) {
        res.status(400).json({
            message: "Not Connected",
        });
    }
};

conn();