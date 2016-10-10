var names = ['andrew', 'julie', 'jen'];
//
// // iterate over an array
// // the function gets passed the array element
// // using an anonymous function
// names.forEach(function(name){
//   console.log('forEach',name);
// });
//
// // example of implementation of arrow functions
// // passes the element into anonymous function
// names.forEach((name) => {
//   console.log('arrowFunc',name);
// });
//
// // another example of arrow functions
// // do not actually need curly braces for one line
// names.forEach((name) => console.log(name));

// var returnMe = (name) => name + '!';
//
// console.log(returnMe('Andrew'));

// var person = {
//   name: 'Owen',
//   greet: function() {
//     names.forEach((name) => {
//       // 'this' keyword inside anonymous function takes on parent value
//       console.log(this.name + ' says hi to ' + name)
//     })
//   }
// }
//
// person.greet();

// challenge area
function add(a,b) {
  return a+b;
}
// created an arrow function with a variable
var add2 = (a,b) => {return a+b};

var add3 = (a,b) => a + b; // no need to return

console.log(add(1,3));
console.log(add2(1,3));
console.log(add3(1,3))

// add3(1,3);


// console.log(add(1,3));
// console.log(add(9,0));
