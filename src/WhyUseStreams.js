
// We use Stream to read a very very large file.....
import fs from 'fs';

/*fs.readFile('./largeFile.txt',(err,file)=>{
    if (err)
        console.log(err)
    else{
        console.log(file);
    }
})*/

const readstream = fs.createReadStream('./example2.txt','utf8');
readstream.on('data',(chunk)=>{
    console.log(chunk);
});