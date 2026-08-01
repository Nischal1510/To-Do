const express= require('express');
const app=express();
const path=require('path');
const connectMongoDb=require('./connection');
const cookieParser=require('cookie-parser');
const {restrictUser,checkAuth}=require('./middleware/auth');
const staticRoute=require('./routes/staticRoute');
const UserRouter=require('./routes/user');
const taskRoute=require('./routes/taskRoute');

connectMongoDb("mongodb://127.0.0.1:27017/To-Do")
.then(()=>{
    console.log("Connection Successfull");
})
.catch((err)=>{
    console.log(err);
})
app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser());


app.use('/',checkAuth, staticRoute);
app.use('/task',restrictUser,taskRoute);
app.use('/',UserRouter);


app.listen(8000,()=>{
    console.log("Server Running");
})