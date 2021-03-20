const express=require('express');
const app= express();
const path=require('path');
const port=80;

app.use('/static',express.static('static'));
app.set('view engine','html');
app.set('views',path.join(__dirname,'template'));

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname + '/template/start.html'));
});
app.get('/home',(req,res)=>{
    res.sendFile(path.join(__dirname + '/template/home.html'));
});
app.get('/Business',(req,res)=>{
    res.sendFile(path.join(__dirname + '/template/Business.html'));
});
app.get('/sports',(req,res)=>{
    res.sendFile(path.join(__dirname + '/template/sports.html'));
});
app.get('/Entertainment',(req,res)=>{
    res.sendFile(path.join(__dirname + '/template/Entertainment.html'));
});
app.get('/health',(req,res)=>{
    res.sendFile(path.join(__dirname + '/template/health.html'));
});
app.get('/world',(req,res)=>{
    res.sendFile(path.join(__dirname + '/template/world.html'));
});
app.get('/video',(req,res)=>{
    res.sendFile(path.join(__dirname + '/template/video.html'));
});
app.get('/cricket',(req,res)=>{
    res.sendFile(path.join(__dirname + '/template/cricket.html'));
});
app.get('/contact',(req,res)=>{
    res.sendFile(path.join(__dirname + '/template/Contact.html'));
});

app.listen(port,()=>{
    console.log(`This Application Started Successfully on port ${port}`);
});
