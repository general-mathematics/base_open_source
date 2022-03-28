import { receiveMessageOnPort } from 'worker_threads';
import {testVariable} from './sandbox';

export const recordCollection = ["Nirvana", "The Beastie Boys", "Sonic Youth", "Guided by Voices"]

console.log("This is the original record collection: " + recordCollection);

for (let i = 0; i < recordCollection.length; i++){
  recordCollection[i] = recordCollection[i] + "_copy";
}

let copy = recordCollection

console.log("This is a copy of the record collection: " + copy);


console.log("This is the original record collection after the copy has happened. OH NO!! It has MUTATED!: " + recordCollection);

let recordCollection2 =["Belle and Sebastian", "Jeff Buckley", "Autechre"]
let modifiedCollection = recordCollection2.map(function(element){
    return element + "_copy";
});

console.log("This is our original new record collection: " + recordCollection2);
console.log("This is the copy of the original array " + modifiedCollection); 
console.log("This is the original record collection 2, before copying. It hasn't mutated: " + recordCollection2);

//Spread operator method of shallow copying 
let recordCollection3 =["Beatles", "Phil Collins", "U2"]
let recordCollection3Copy = [...recordCollection3]
console.log("After changing some values ")

//change values
recordCollection3[2] = "Moloko"
recordCollection3Copy[0] = "Guided by Voices"

recordCollection3
recordCollection3Copy








