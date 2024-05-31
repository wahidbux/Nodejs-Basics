/**
 * Writable : streams to which data can be written (for example, fs.createWriteStream() ). 
 * Readable : streams from which data can be read (for example, fs.createReadStream() ).
 */
import fs from 'fs';

/*const readstream = fs.createReadStream('./example.txt','utf8');
readstream.on('data',(chunk)=>{
    console.log(chunk);
});*/

const readstream = fs.createReadStream('./example.txt','utf8');
const writestream  =fs.createWriteStream('example2.txt')
readstream.on('data',(chunk)=>{
    writestream.write(chunk);
});