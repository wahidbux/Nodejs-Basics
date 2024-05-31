/**
 * The node:readline module provides an interface for reading data from a 
 * Readable stream (such as process. stdin ) one line at a time.
 * 
 * trim() function --->  is a string function of Node.js which is used 
 *  to remove white spaces from the string. 
 * rl.setPrompt() ---> method sets the prompt that will be written to output 
 *  whenever rl.prompt() is called.
 */

import readline from 'readline';
const rl=readline.createInterface ({input: process.stdin,
                                   output: process.stdout });
let num1 =Math.floor((Math.random()*10 )+1);
let num2 =Math.floor((Math.random()*10)+1);

let result = num1+num2;

rl.question(`What is ${num1}+${num2}?\n`,(userinput)=>{
    if(userinput.trim()==result){
        rl.close();
    }else{
        rl.setPrompt('Incorrect response Please try again ');
        rl.prompt();
    }
})
rl.on('close',()=>{
    console.log('Hey you got the correct number ');
});

