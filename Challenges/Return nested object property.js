/*Write a function that takes an object as argument.
In some cases the object contains other objects with some deeply nested properties.
Return the property 'b' of object 'a' inside the original object if it exists. If not, return undefined */

function myFunction(obj) {
  return obj?.a?.b;
}

console.log(myFunction({ a: { b: { c: 3 } } })); // { c:3}
console.log(myFunction({ a: 1 })); // undefined

/* Para comprobar si un objeto tiene una propiedad anidada, utilice el operador opcional de encadenamiento - ?.
El operador ? le permite leer el valor de una propiedad anidada sin lanzar un error
si la propiedad no existe en el objeto, por ejemplo, obj?.a?.b. */
