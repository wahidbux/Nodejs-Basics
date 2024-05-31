
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
const app= express();
app.get('/example.json/:name/:age',(req,res)=>{
    console.log(req.params);
    res.send(req.params.name+":"+req.params.age);
})
app.listen('4000');


