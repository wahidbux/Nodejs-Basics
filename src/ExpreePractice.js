
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
const app=express();
const reqFilter=((req,res,next)=>{
     console.log(reqFilter);
     next();
})
app.use(reqFilter);

app.get('',(req,res)=>{
    res.send("Wellcom to home page ");
})
app.get('/home',(req,res)=>{
    res.send("This is our page ");
})
app.listen(5000);

//Route Level middleware..........
