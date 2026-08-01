const express = require('express');
const router = express.Router();
const Task = require('../models/task');


router.get('/signup', (req, res) => {
    res.render('signup');
})
router.get('/login', (req, res) => {
    res.render('login');
})
router.get('/task', async (req, res) => {
    if(!req.user) return res.redirect('/login');
    const userTask = await Task.find({
        createdBy: req.user._id,
    });
    res.render("home", { 
        userTask,
        user:req.user,
    });
})


module.exports = router;

