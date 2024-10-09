// ------------------------
// JavaScript object is a non-primitive data-type that allows you to store multiple collections of data.

// {key: value}
// ------------------------

// ------------------------
// Creating Object
let person = {
  firstName: "Vinay",
  lastName: "Kumar",
  age: 26,
  location: ["Gaya", "India"],
  isJsProgrammer: true,
};

// Accessing Properties
console.log(typeof person);
console.log(person.location[1]);
console.log(person["isJsProgrammer"]);
// console.log(person[isJsProgrammer]); // ERROR -> without quotes

// Updating Properties
console.log(person.firstName);
console.log((person.firstName = "Sam"));

// Add new properties
console.log((person.isJsProgrammer = false));
console.log(person);
