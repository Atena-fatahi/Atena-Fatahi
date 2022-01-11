// in this folder i did free code camps exercise 


//Return a Value from a Function with Return
let num = 6
function timesFive(num) {
  return num * 5;
}

//Global Scope and Functions
// Declare the myGlobal variable below this line
const myGlobal = 10

function fun1() {
  // Assign 5 to oopsGlobal Here
const func1
}

// Only change code above this line
// Declare your variable here
var myGlobal = 10;

function fun1() {
  oopsGlobal = 5;
}

// Only change code above this line
function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}