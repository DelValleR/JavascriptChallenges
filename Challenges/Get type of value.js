// Write a function that takes a value as argument
// Return the type of the value
function myFunction(a) {
  return typeof a;
}

myFunction(1); //Expected ('number');
myFunction(false); //Expected ('boolean');
myFunction({}); //Expected ('object');
