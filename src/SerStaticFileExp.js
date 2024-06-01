// Serving Static files with express.........

import express from 'express';
import path from 'path ';
import bodayparser from 'bodyparser'

const app = express();
// Whenevr you see use it means middleware........
app.use('/public',express.static(path.join(__dirname,'Static')));
app.use(bodayparser.urlencoded({extended:false}));
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'Static','Index.html'));
});
app.post('/',(req,res)=>{
    console.log(req.body);
    // Databse work here..
    res.send("Successfully posted data....")
})
app.listen(4000);

