    
    // Full node js Practics in one file.........

    // A Simple api............
/*import http from 'http';
http.createServer((req,res)=>{
    res.writeHead(200,{'Content-type':'application/json'});
    res.write(JSON.stringify([{Name :"wahid ",Email:"Wahidmari2004@gmail.com"},
                               {Name :"Asad Ali",Email:"asasali23@gmail.com"},
                               { Name :"Ameen", Email:"ameen239@gamil.com"
    }]));
    res.end();
}).listen(3000);
/*import fs from 'fs';

const input=process.argv;

if(input[2]=='add'){
    fs.writeFileSync(input[3],input[4]);
}else if(input[2]=='remove'){
    fs.unlinkSync(input[3]);
}else{
    console.log("invalid input");
}*/

// creating multipile files in a folder through loop....

/*import fs from 'fs';
import path, { dirname } from 'path';
const dirpath = path.join(__dirname,'public');
for(i=0;i<6;i++){
    fs.writeFileSync(dirpath+"/Hello"+i+".txt","This is a simple file ");
}

// Show list of files 

fs.readdir(dirpath,(err,files)=>{
    files.forEach((files)=>{
        console.log(files);
    })
})*/


// CRUD opreation in nodejs......

import fs from 'fs ';
import path from 'path ';
const dirpath = path.join(__dirname,'public');
const filePath = `${dirpath}/Application.txt`;

// Create a file....
fs.writeFileSync(filePath,'This is a application file ');
// Read a file.....
fs.readFile(filePath,(err,iteam)=>{
    console.log(iteam);
})
// Update a file...
fs.appendFile(filePath,'and this is a simple file  ',(err)=>{
    if(!err) return "file is updated...";
});
// \Rename a file...
fs.rename(filePath,`${dirpath}/Application.txt`,(err)=>{
    if(!err) return "Successfully rename file...";
})
// Delete a file....
fs.unLink(filePath,`${dirpath}/Application.txt`);

