// a method is a function that is associated with an object. It allows objects to perform actions or provide functionalities.

// ------------------------------------
// Defining a method outside the object
// function greet() {
//   return `Hello, my name is ${person.name} and I am ${person.age} years old.`;
// }

// const person = {
//   name: "John",
//   age: 30,
//   greet,
// };

// console.log(person.greet());

// ------------------------------------

  const developer = {
    name: "Vinay",
    age: 28,
    intro: function intro() {
      return `Hello, my name is ${developer.name} and I am ${developer.age} years old.`;
    },
  };

console.log(developer.intro());
// ------------------------------------
