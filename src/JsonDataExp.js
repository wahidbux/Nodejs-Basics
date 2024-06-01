
// Working with json data express and bodey parser.....
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Whenevr you see use it means middleware........
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/public',express.static(path.join(__dirname,'static')));

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'static','index2.html'));
});
app.post('/',(req,res)=>{
    console.log(req.body);
    // Databse work here..
    res.json({success:true});
})
app.listen(4000);
