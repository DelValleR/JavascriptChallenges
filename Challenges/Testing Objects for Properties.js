// Modify the function checkObj to test if an object passed to the function (obj)
// contains a specific property (checkProp).
// If the property is found, return that property's value. If not, return "Not Found".

function checkObj(obj, checkProp) {
  let found = obj.hasOwnProperty(checkProp);
  return found === true ? obj[checkProp] : 'Not Found';
}

console.log(checkObj({ gift: 'pony', pet: 'kitten', bed: 'sleigh' }, 'gift'));
console.log(checkObj({ gift: 'pony', pet: 'kitten', bed: 'sleigh' }, 'pet'));
