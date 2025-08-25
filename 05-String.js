const name = "John";
const num = 43;

// console.log(name + num + "value");

// console.log(`I am ${name} and my num is ${num} `);


const gameName = new String("Devender");

// console.log(gameName);
// console.log(gameName[0]);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
console.log(gameName.indexOf("e"));

const newString = gameName.substring(0, 4);
console.log(newString);
const oldString = gameName.slice(-8, 4);
console.log(oldString);

const anoString = "   Hello World    ";
console.log(anoString);
console.log(anoString.trim());

const url = "https://hitesh.com/hitesh%20choudhary";
console.log(url.replace('%20', "-"));

console.log(url.includes('hitesh')); //true
console.log(url.includes('jitesh')); //false

const spill = "Devender-Choudhary-Singh";
console.log(spill.split("-"));
