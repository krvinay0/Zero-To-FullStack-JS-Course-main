// 1. Create a function name (showCallFunc)
// 2. pass "valueFn" as parameter
// 3. inside that function, create variable which holds value of 10
// 4. pass that value to the callback function
// 5. Now create callback function & print that value which you pass as parameter to the callback func.

function showCallFunc(valueFn) {
  const value = 100;
  valueFn(value);
}

showCallFunc(function (value) {
  console.log(value);
});
