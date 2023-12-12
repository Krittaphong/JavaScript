let value1 = ['Apple', 1, false];
let value2 = ['Fries', 2, true];
let value3 = ['Mars', 9, 'Apple'];

let commonElements = [];

for (let i = 0; i < value1.length; i++) {
  if (value2.includes(value1[i]) || value3.includes(value1[i])) {
    commonElements.push(value1[i]);
  }
}

console.log(commonElements);
