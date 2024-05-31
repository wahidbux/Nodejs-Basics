// Serving Static files with http and file system module 

/*import http from 'http';
import fs from 'fs';

http.createServer((req,res)=>{
     const readstream=fs.createReadStream('./Static/index.html');
     res.writeHead(200,{'Context-type':'text/html'});
     readstream.pipe(res);
}).listen('4000');*/

/*import http from 'http';
import fs from 'fs';

http.createServer((req,res)=>{
     const readstream=fs.createReadStream('./Static/example.json');
     res.writeHead(200,{'Context-type':'application/json'});
     readstream.pipe(res);
}).listen('4000');*/


import http from 'http';
import fs from 'fs';

http.createServer((req,res)=>{
     const readstream=fs.createReadStream('./Static/image.jpg');
     res.writeHead(200,{'Context-type':'image/jpg'});
     readstream.pipe(res);
}).listen('4000');