const fullName = require('./name.js');
const Hobbies = require('./hobbies.js');

function peaple() {
    return {
     fullName: fullName(),
     Hobbies: Hobbies()
    } 
 }
console.log(peaple());