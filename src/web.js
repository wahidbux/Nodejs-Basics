import express from 'express';
const app=express();

app.get('/',(req,res)=>{
    res.send(`<h1>Wellcome to our website <h1>
              <input type="txt" placeholder="User name ">
              <input type="txt" placeholder="User email ">
              `);
})
app.listen(3000);