
// A Simple api............
import http from 'http';
http.createServer((req,res)=>{
    res.writeHead(200,{'Content-type':'application/json'});
    res.write(JSON.stringify([{Name :"wahid ",Email:"Wahidmari2004@gmail.com"},
                               {Name :"Asad Ali",Email:"asasali23@gmail.com"},
                               { Name :"Ameen", Email:"ameen239@gamil.com"
    }]));
    res.end();
}).listen(3000);
