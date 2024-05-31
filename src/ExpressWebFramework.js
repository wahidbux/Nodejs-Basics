
// Getting start with express web framework.......

import express from 'express';

const app= express();

app.get('/',(req,res)=>{
    res.send("Hello everyone form wahid bux ");
})
app.listen(4000);