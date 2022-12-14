// Write a function that takes an object (a) and a string (b) as argument
// Return true if the object has a property with key 'b', but only if it has a truthy value
// In other words, it should not be null or undefined or false
// Return false otherwise

function myFunction(a, b) {
  return !!a[b];
  // return Boolean(a[b]) es otra forma de solucionarlo
}
myFunction({ a: 1, b: 2, c: 3 }, 'b'); //true
myFunction({ x: 'a', y: null, z: 'c' }, 'y'); //false
myFunction({ x: 'a', b: 'b', z: undefined }, 'z'); //false
