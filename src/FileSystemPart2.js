
import fs from 'fs';

// Creating a folder 
/*fs.mkdir('nodejs',(err)=>{
    if (err)
        console.log(err)
    else {
        fs.writeFile('./nodejs/example.txt','2342',(err)=>{
            if (err)
                console.log(err)
            else 
            console.log("Successfully created a file inside nodejs folder ");
        })
    }
})*/

// Deleting a folder 

/*fs.rmdir('nodejs',(err)=>{
    if (err)
        console.log(err);
    else 
        console.log("The folder has been deleted successfully.....");
})*/

// Deleting a folder which have file but we can not delete a it directly first we delete the 
// file inside the folder here i am deleting a folder but got an error in this program..

/*fs.rmdir('nodejs',(err)=>{
    if (err)
        console.log(err)
    else
    console.log("folder deleted ");
})*/

// Here we first delete file inside the folder and than delete the folder 

/*fs.unlink('./nodejs/example.txt',(err)=>{
    if(err)
        console.log(err)
    else
    fs.rmdir('nodejs',(err)=>{
      if (err)
        console.log(err);
     else 
     console.log("The folder has been deleted successfully....");
  })
})*/

// Deleting multipile files inside a folder 

fs.readdir('example',(err,files)=>{
    if (err)
        console.log(err)
    else 
    for(let file of files){
          fs.unlink('./example/'+file ,(err)=>{
            if (err)
                console.log(err);
            else{
                console.log("Successfully deleted multiple files.......")
            }
          })
     }
})
