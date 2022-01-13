//////////////////
//free code camp//
//////////////////


//Iterate Odd Numbers With a For Loop
/////////////////////////////////////
// Setup
const myArray = [];
for(let i = 1;i<=10;i+=2) {
  myArray.push(i);
}
// Only change code below this line
/////////////////////////////////////
//Count Backwards With a For Loop
// Setup
const myArray = [];
for(let i = 9; i>0;i-=2){
  myArray.push(i);
}
// Only change code below this line
/////////////////////////////////////
var myArr = [2, 3, 4, 5, 6];
var total = 0;

for (let i = 0; i < myArr.length; i++) {
  total += myArr[i];
}

console.log(total);
/////////////////////////////////////
//Nesting For Loops
function multiplyAll(arr) {
  let product = 1;
  // Only change code below this line
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      product *= arr[i][j];
    }
  }
  // Only change code above this line
  return product;
}

multiplyAll([
  [1, 2],
  [3, 4],
  [5, 6, 7],
]);
/////////////////////////////////////////////
//Iterate with JavaScript Do...While Loops
// Setup
const myArray = [];
let i = 10;

// Only change code below this line
do {
  myArray.push(i);
  i++;
}while (i < 5) 
////////////////////////////////////////////////
//Replace Loops using Recursion
function sum(arr, n) {
  // Only change code below this line
  if (n <= 0) {
    return 0;
  } else {
    return sum(arr, n - 1) + arr[n - 1];
  }

  // Only change code above this line
}
////////////////////////////////////////////////
//Profile Lookup
// Setup
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  // Only change code below this line
  for (var i = 0; i < contacts.length; i++) {
    if(contacts[i].firstName === name) {
      return contacts[i][prop] || "No such property";
    }
  }
  return "No such contact";


  // Only change code above this line
}

lookUpProfile("Akira", "likes");
/////////////////////////////////////////////////////////////////
