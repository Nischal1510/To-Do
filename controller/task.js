const shortId = require('shortid');
const mongoose = require('mongoose');
const Task = require('../models/task');
async function createTask(req, res) {
    const body = req.body;
    const shortid = shortId.generate();
    const newTask = await Task.create({
        shortId: shortid,
        task: body.task,
        createdBy: req.user._id,
    });
    res.redirect('/task');

}

module.exports = {
    createTask,
}