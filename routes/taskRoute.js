const express=require('express');
const router=express.Router();
const {createTask}=require('../controller/task');
const {checkAuth}=require('../middleware/auth');
router.post('/task',createTask);
module.exports=router;