let value1 = ['Apple', 1, false];
let value2 = ['Fries', 2, true];
let value3 = ['Mars', 9, 'Apple'];

// Find common elements
let commonElements = value1.filter(value => value2.includes(value) || value3.includes(value));

console.log(commonElements);
 || v