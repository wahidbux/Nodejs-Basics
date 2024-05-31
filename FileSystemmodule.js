
import fs from'fs';
// Create a file..
/*
fs.writeFile('example.txt',"This is an example ",(err)=>{
    if (err)
        console.log(err);
    else{
    console.log("File successfully created ");

    fs.readFile('example.txt','uft8',(err,file)=>{
        if (err){
            console.log(err);
        }else{
            console.log(file );
        }
    })
    }
})*/

// Rename a file..
/*
fs.rename('example.txt','example2.txt',(err)=>{
    if (err){
        console.log(err);
    }
    else {
        console.log(" Successfully rename file ");
    }
})*/

// appending data into the file..
/*
fs.appendFile('example2.txt','My name is wahid bux ',(err)=>{
    if (err)
        console.log(err)
    else
    console.log("The data is successfully added to the file ");
});*/

// Deleting a file..

/*fs.unlink('example2.txt',(err)=>{
    if (err)
       console.log(err);
    else
    console.log("The file successfully deleted....");
})*/


fs.writeFile('largeFile.txt','Hello my name is wahid ',(err)=>{
    if (err){
        console.log(err)
    }else{
        console.log("Successfully created file ");
    }
})