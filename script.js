// On the webbrowser, the window object, is the global object in Js
// Means that all variables and function declared globally i.e. with var keyword
// become properties and methods of window object 

alert("This works");

var counter = 137;
var showCounter = () => console.log("Counter: " + counter);

console.log( window.counter );
console.log( window.showCounter() )


// due to counter and showCounter() are defined using var, they're automatically added to window object
// if you don't want to pollute the window object, use let 