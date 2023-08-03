const express=require('express');
const app=express();
const path=require('path');
const publicPath = path.resolve(__dirname,'./public');

const PUERTO= process.env.PORT || 3001

app.use(express.static(publicPath));

app.listen(PUERTO,()=>{
console.log("run port "+PUERTO)
})

app.get('/home',(req,res)=>{
res.sendFile(path.join(__dirname,'./views/home.html'))
})

app.get('/register',(req,res)=>{
    res.sendFile(path.join(__dirname,'./views/register.html'))
})

app.post('/register',(req,res)=>{
    res.redirect("/home")
})

app.get('/login',(req,res)=>{
    res.sendFile(path.join(__dirname,'./views/login.html'))
})

app.post('/login',(req,res)=>{
    res.redirect("/home")
})
