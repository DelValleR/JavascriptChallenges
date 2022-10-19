// Write a function that takes an array (a) as argument
// Extract the last 3 elements of 'a'
// Return the resulting array

function myFunction(a) {
  const last3 = a.slice(-3);
  return console.log(last3);
}

myFunction([1, 2, 3, 4]);
myFunction([5, 4, 3, 2, 1, 0]);
myFunction([99, 1, 1]);
