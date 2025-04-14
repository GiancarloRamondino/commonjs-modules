function getHobbies(hobbyOne = 'sport', hobbyTwo = 'musica', hobbyThree = 'arte') {
    return [hobbyOne, hobbyTwo, hobbyThree];
}
console.log(getHobbies());

module.exports = getHobbies;