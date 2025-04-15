const fullName = require('./name.js');
const Hobbies = require('./hobbies.js');

function peaple() {
    return {
     fullName: fullName('francesco', 'cicero'),
     Hobbies: Hobbies('videogames', 'music', 'movies'),
    } 
 }
 
console.log(peaple());