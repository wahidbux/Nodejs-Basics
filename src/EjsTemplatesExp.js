
// Geting Started with Ejs Templates with express.
/**
 * EJS: EJS or Embedded Javascript Templating is a templating engine used 
 * by Node.js. Template engine helps to create an HTML template 
 * with minimal code. Also, it can inject data into an
 *  HTML template on the client side and produce the final HTML.
 */

/*import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
app.set('view engine ','ejs');
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware

app.get('/home',(req,res)=>{
    console.log(__dirname);
    res.sendFile(__dirname+'/Static/index.html');
})
app.listen(4000);*/

// Using templates ejs 
import express from 'express';
const app = express();
app.set('view engine', 'ejs');

app.get('/',(req,res)=>{
    res.render('profile');
})
app.listen(4000);
