// Write your solution here!
const pets= ["Milo", "Otis", "Garfield"];
const append=[...pets,"Odie"];
const prepend=["Odie",...pets];

const removeLast= ["Milo", "Otis", "Garfield"];
removeLast.pop();

const removeFirst= ["Milo", "Otis", "Garfield"];
removeFirst.shift();
