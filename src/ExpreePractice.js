
/*import express from 'express';
const app=express();

app.get('',(req,res)=>{
    console.log("Successfully Sent data ===> "+req.query.name);
    res.send(" This is our page ");
});

app.get('/home',(req,res)=>{
  res.send("<h1>This is our home page<h1> ");
});
app.listen(5000);*/

// Entering data using HTML........
/*import express from 'express';
const app=express();

app.get('/about',(req,res)=>{
    res.send(`
      <input type="txt" placeholder ="User name">
      <button>Click here</button>
      <a href="/">Go to home page</a>
    `);
})
//app.listen(5000);*/

// Entering data using Json......

/*import express from 'express';
const app=express();

app.get('/home',(req,res)=>{
    res.send({
        Name :"Wahid ",
        Email:"Wahidmari@gmail.com"
    })
})
app.listen(5000);*/


// Linking two page each other.......
//import express from 'express';
//const app=express();

/*app.get('',(req,res)=>{
    res.send(`<h1>Wellcom to our home page </h1><a href="/about"
     >Go to about page</a>`);
})
app.listen(5000);*/



// Application level Middleware..........
import express from 'express';
//const app=express();
const reqFilter=((req,res,next)=>{
     console.log(reqFilter);
     next();
})
app.use(reqFilter);

app.get('',reqFilter,(req,res)=>{
    res.send("Wellcom to home page ");
})
app.get('/home',reqFilter,(req,res)=>{
    res.send("This is our page ");
})
app.listen(5000);

// Api using get ,post , put , delete methods........
const dbConnect = require('./mongodb');
const express = require('express');
const mongodb = require('mongodb');
const app = express();

app.use(express.json());

app.get('/', async (res, resp) => {
    let data = await dbConnect();
    data = await data.find().toArray();
    resp.send(data);
});

app.post("/", async (req, resp) => {
    let data = await dbConnect();
    let result = await data.insert(req.body)
    resp.send(result)

})

app.put("/:name", async (req, resp) => {
    const data = await dbConnect();
    let result = data.updateOne(
        { name: req.params.name },
        { $set: req.body }
    )
    resp.send({ status: "updated" })
})

app.delete("/:id", async (req,resp)=>{
    console.log(req.params.id);
    const data = await dbConnect();
    const result = await data.deleteOne({_id: new mongodb.ObjectId(req.params.id)})
    resp.send(result)
})

app.listen(5000)