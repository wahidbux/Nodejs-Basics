/**
 * Piping in NodeJS is the process by which 
 * byte data from one stream is sent to another stream.
 * 
 * zlib ---> The node:zlib module provides compression functionality 
 *           implemented using Gzip, Deflate/Inflate, and Brotli.
 */

// Converting data form one file to an other file 

/*import fs from 'fs';
const readstream = fs.createReadStream('./example.txt','utf8');
const wrietstream = fs.createWriteStream('file2.txt');
readstream.pipe(wrietstream);*/

// Creating a zibfile...........

/*import zlib from 'zlib';
const gzib = zlib.createGzip();
const readstream = fs.createReadStream('./example.txt','utf8');
const wrietstream = fs.createWriteStream('file2.txt.gz');
readstream.pipe(gzib).pipe(wrietstream);*/

// unzib a file 

import fs from 'fs';
import zlib from 'zlib';
const gunzib = zlib.createGunzip();
const readstream = fs.createReadStream('./file2.txt.gz');
const wrietstream = fs.createWriteStream('uncompressed.txt');
readstream.pipe(gunzib).pipe(wrietstream);

