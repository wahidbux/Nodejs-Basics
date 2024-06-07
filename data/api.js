
import express from 'express';
import path from 'path'
const app =express();

export default app.get('/',(req,res)=>{
    res.writeHead(200,({'Content-type':'app/json'}));
    res.write(JSON.stringify({name:"wahid ",age:'23',address:"Nawabshah"}));
    res.end();
})
app.listen(5000);


