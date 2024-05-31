

// Creating a Http server using the Http module..
// using response here 
/*import http from 'http';
const server =http.createServer((req,res)=>{
    res.write("Hello world form node js ");
    res.end();
})
server.listen('4000');*/

// Here i am going to use request 
import http from 'http';
const server =http.createServer((req,res)=>{
    if (req.url==='/'){
        res.write("Hello world form wahid bux...");
        res.end();
    }
    else{
        res.write("Using some other domain....");
        res.end();
    }
})
server.listen('4000');