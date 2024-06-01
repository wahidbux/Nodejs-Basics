
// Working with express get request..

import express from 'express';

/*const app= express();
app.get('/example',(req,res)=>{
    res.send("Hitting the example route........")
})
app.listen('4000');*/

/*const app= express();
app.get('/example.json/:name/:age',(req,res)=>{
    console.log(req.params);
    res.send("Hitting the example of params......")
})
app.listen('4000');*/

// passing name and age 
// Get api......
const app= express();
app.use(express.json());

app.get('/example.json/:name/:age',(req,res)=>{
    console.log(req.query);
    res.send(req.query.name+":"+req.query.age);
})
// post api.....
app.post('/example',(req,res)=>{
    const {name,age}=req.body // only for post alpi
    res.send({name,age});
})
app.listen('4000');


