const express= require('express');
const router=express.Router();
const {createUser,LogIn,listOfUser}=require('../controller/user');
router.post('/signup',createUser);
router.post('/login',LogIn);
router.get('/admin',listOfUser);
module.exports=router;
