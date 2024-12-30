// let var const for declaring variable 
// it is responsible for decide scope of variable 
// function scope and block scope
// let function scope | var function scope | const function scope 
// let block scope | var  is not block scope (global)| const block scope 
// let v/s const 
if (true) {
    var x = 10;
    console.log(x)
    var x =90;
    console.log(x)
}
const x =90
console.log(x)