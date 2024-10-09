
// Scope in JavaScript refers to the current context of code, which determines the accessibility of variables to JavaScript.
// The two types of scope are local and global
// Global variables are those declared outside of a block.
// Local variables are those declared inside of a block.

let globalScope = "hi"; // Global Scope

function showMessage() {
  let localScope = "hi"; // Local Scope
  console.log(globalScope, localScope); // Access Local Scope
  // Output: hi hi
}


console.log(globalScope);
// Output: hi

console.log(localScope);
// Output: ReferenceError: localScope is not defined 