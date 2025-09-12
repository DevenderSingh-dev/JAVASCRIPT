// primitive dataTypes

// 7 Types :- String, Number, Boolean, Undefined, Null, Symbol, BigInt

// const userName = "John Doe";
// const score = 100;
// const scoreValue = 100.5;
// const isloggedIn = true;
// const outsideTemp = null;
// let userEmail;

// console.log(userName);
// console.log(score);
// console.log(scoreValue);
// console.log(isloggedIn);
// console.log(outsideTemp);
// console.log(userEmail);

// const id = Symbol('123')
// const anotherid = Symbol('123')

// console.log(id === anotherid);

// const bigNumber = 12344567899872849283n;
// console.log(bigNumber);

// Reference Types(Non-primitive dataTypes)

// 3 Types :- Object, Array, Function

// const heros = ["Thor", "Ironman", "Hulk"];
// console.log(heros);

// let myObj = {
//     name: "Dev",
//     age: 24,
//     Id : "4948",
// }
// console.log(myObj);


// const myfunction = function() {
//     console.log("Hello world");
// }


// console.log(typeof anotherid);

// ****************************
// stack (primitive) , Heap(Non-primitive)

let myyoutubename = "devsingh"

let anothername = myyoutubename;
anothername = "devsingh2";

// console.log(myyoutubename); // devsingh
// console.log(anothername); // devsingh2  

let userone = {
    email:"dev32@gmail.in",
    upi: "dev@upi",
}

let usertwo = userone;
usertwo.email = "devender3421@.in"

// console.log(userone.email);
// console.log(usertwo.email);

// console.log(userone);
// console.log(usertwo);

