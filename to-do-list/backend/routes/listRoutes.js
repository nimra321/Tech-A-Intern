const express = require('express');
const router = express.Router();

const User = require("../models/user");
const List = require("../models/listModel");

// CREATE 

router.post("/addTask", async (req, res) => {
    try {
        const { title, body, email } = req.body;
        const existingUSer = await User.findOne({ email });
        if(existingUSer) {
            const list = new List({ title, body, user: existingUSer });
            await list.save().then(() => res.status(200).json({ list }));
            existingUSer.list.push(list);
            existingUSer.save();
        }
    } catch (error) {
        console.log(error);
    }
})

//  UPDATE

router.put("/updateTask/:id", async (req, res) => {
    try {
        const { title, body, email } = req.body;
        const existingUSer = await User.findOne({ email });
        if(existingUSer) {
            const list = await List.findByIdAndUpdate(req.params.id, { title, body });
            list.save().then(() => res.status(200).json({ message: "Task Updated"}));
        }
    } catch (error) {
        console.log(error);
    }
})

//  DELETE

router.delete("/deleteTask/:id", async (req, res) => {
    try {
        const { email } = req.body;
        const existingUSer = await User.findOneAndUpdate(
            { email },
            { $pull: { list: req.params.id }} 
        );
        if(existingUSer) {
            await List.findByIdAndDelete(req.params.id).then(() => res.status(200).json({ message: "Task Deleted"}));
        }
    } catch (error) {
        console.log(error);
    }
})

//  GET 

router.get("/getTasks/:id", async (req, res) => {
    const list = await List.find({ user: req.params.id }).sort({ createdAt: -1 });
    if(list.length !== 0) {
        res.status(200).json({ list: list });
    }
    else {
        res.status(200).json({ message: "No Tasks" });
    }
})

module.exports = router;