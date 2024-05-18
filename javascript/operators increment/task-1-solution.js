let num1= 5;
let result= num1%2==0 ? "even" : "odd" ;
console.log(`the number is ${result}`);

// post/pre increment/decrement operators
let a=5, b=5;
a++, ++b; // all added to 1
console.log(`a is ${a} and b is ${b}`);

let n=4, m=4;
console.log(`n is ${n++} and m is ${++m}`);

let p=2, q=2;
let y=p++, z=++q;
console.log(`p is ${p} and q is ${q}`);
console.log(`y is ${y} and z is ${z}`);
// or we can write console.log(`y is     ${p++} and z is ${++q}`);

//similarily for --a and a-- decrement operators

//nested ternaryoperator
let k=5;
let res=k>0 ? "positive" : k=0? "zero" : negative;
console.log(`k is ${res}`);

//voting right
let age=18;
let right= age>=18? "eligible" : "not eligible"
console.log(`person is ${right} for voting.`);