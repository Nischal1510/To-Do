const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    shortId: {
        type: String,
        required: true,
    },
    task: {
        type: String,
        required: true,
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
})

const Task = mongoose.model("Task", TaskSchema);

module.exports = Task;
