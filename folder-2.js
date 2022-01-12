
/////////////////////////////////////////////////////////////////
// today i did some freecode camp exercises and js-1-3 homeworks//
/////////////////////////////////////////////////////////////////

/////////////////
//frecoode camp//
/////////////////

// Setup
const testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};

// Only change code below this line
const hatValue = testObj.hat;      // Change this line
const shirtValue = testObj.shirt;    // Change this line

/////////////////////////////////////////////////////////

// Setup
const testObj = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
};

// Only change code below this line
const entreeValue = testObj["an entree"];// Change this line
const drinkValue = testObj["the drink"];// Change this line
////////////////////////////////////////////////////////////
// Setup
var testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

// Only change code below this line
var playerNumber = 16;// Change this line
var player = testObj[playerNumber];// Change this line
/////////////////////////////////////////////////////////////
// Setup
const myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

// Only change code below this line
myDog.name = "happy coder";
/////////////////////////////////////////////////////////////
const myDog = {
  name: "Happy Coder",
  legs: 4,
  tails: 1,
  friends: ["freeCodeCamp Campers"],
};

myDog.bark = "Woof";
/////////////////////////////////////////////////////////////
// Setup
const myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"],
  "bark": "woof"
};

// Only change code below this line
 delete myDog.tails;
 //////////////////////////////////////////////////////////////
// Setup
function phoneticLookup(val) {
var result = '';

// Only change code below this line
var lookup = {
'alpha': 'Adams',
'bravo': 'Boston',
charlie: 'Chicago',
delta: 'Denver',
echo: 'Easy',
foxtrot: 'Frank'
};
return lookup[val];

// Only change code above this line
return result;
}

// Change this value to test
phoneticLookup("charlie");
///////////////////////////////////////////////////////////////
function checkObj(obj, checkProp) {
  // Only change code below this line
  if (obj.hasOwnProperty(checkProp)) {
    return obj[checkProp];
  } else {
    return "Not Found";
  }
  // Only change code above this line
}
/////////////////////////////////////////////////////////////////
var myMusic = [
  {
    artist: "Billy Joel",
    title: "Piano Man",
    release_year: 1973,
    formats: ["CD", "8T", "LP"],
    gold: true,
  },
  // Add record here
  {
    artist: "Deep Purple",
    title: "Smoke on the water",
    release_year: 1976,
    formats: ["CD", "8T", "LP"],
  },
];
/////////////////////////////////////////////////////////////////
const myStorage = {
  car: {
    inside: {
      "glove box": "maps",
      "passenger seat": "crumbs",
    },
    outside: {
      trunk: "jack",
    },
  },
};

const gloveBoxContents = myStorage.car.inside["glove box"];
//////////////////////////////////////////////////////////////////
const myPlants = [
  {
    type: "flowers",
    list: ["rose", "tulip", "dandelion"],
  },
  {
    type: "trees",
    list: ["fir", "pine", "birch"],
  },
];

const secondTree = myPlants[1].list[1];
///////////////////////////////////////////////////////////////////
// Setup
var recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
  if (prop !== 'tracks' && value !== "") {
    records[id][prop] = value;
  } else if (prop === "tracks" && records[id].hasOwnProperty("tracks") === false) {
    records[id][prop] = [value];
  } else if (prop === "tracks" && value !== "") {
    records[id][prop].push(value);
  } else if (value === "") {
    delete records[id][prop];
  }
  return records;
}

updateRecords(recordCollection, 5439, 'artist', 'ABBA');
///////////////////////////////////////////////////////////////////
// Setup
const myArray = [];
let i = 5;

while (i >= 0) {
  myArray.push(i);
  i--;
}

// Only change code below this line
///////////////////////////////////////////////////////////////////
var myArray = [];
for (var i = 1; i <= 5; i++) {
  myArray.push(i);
}
///////////////////////////////////////////////////////////////////
