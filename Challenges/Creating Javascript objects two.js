/*Write a function that takes two strings (a and b) as arguments.
Create an object that has a property with key 'a' and a value of 'b'. Return the object. */

function myFunction(a, b) {
  const obj = { [a]: b };
  return obj;
}
myFunction('a', 'b'); // {a:'b'}
myFunction('z', 'x'); // {z:'x'}
