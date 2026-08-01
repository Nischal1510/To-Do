const mongoose=require('mongoose');
const User=require('../models/user');
const shortId=require('shortid');
const {v4:uuidv4}=require('uuid');
const {setUser}=require('../service/auth');
const Task = require('../models/task');
async function createUser(req,res) {
    const body=req.body;
    const newUser=await User.create({
        name:body.name,
        email:body.email,
        password:body.password,
    });

    res.redirect('login');

}
async function LogIn(req,res){
    const {email,password}=req.body;
    const user=await User.findOne({email,password});

    if(!user){
        return res.render('login');
    }
    // const sessionId=uuidv4();
    const token=setUser(user);
    res.cookie('uid',token);
    const userTask=await Task.find({
        createdBy:user._id,
    });
    res.render('home',{
        userTask:userTask,
        user:user,
    });
    // return res.json({token});
}
async function listOfUser(req,res){
    const users=await User.find({});
    res.render('listOfUsers',{
        user:users,
    })
}

module.exports={
    createUser,
    LogIn,
    listOfUser,
}