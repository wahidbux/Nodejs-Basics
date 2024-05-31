/**
 * an event emitter is a handy tool for making different parts of 
 * a program talk to each other by sending and receiving messages.
 * 
 * on ---> is used to add a callback function that's going to be executed when the 
 *         event is triggered
 * emit ---> emit is used to trigger an event..
 */

import EventEimitter from 'node:events'
const emitter = new EventEimitter();

emitter.on('name',()=>{
    console.log("The name has been done ");
})
emitter.emit('name');

// passing parameters  

let passingParameters =new EventEimitter();
passingParameters.on('sum',(num1,num2)=>{
     console.log("The sum of two numbers is "+(num1+num2));
})
passingParameters.emit('sum',20,10);


class person extends EventEimitter{
    constructor(name){
        super();
        this._name = name;
    }
    get name(){
        return this._name;
    }
}
let wahid = new person("wahid")
wahid.on('name',()=>{
    console.log("My name is "+wahid.name);
})
wahid.emit('name');

