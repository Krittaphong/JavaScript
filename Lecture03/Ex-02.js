const values = ['Table', 'Chairs', 'Couch'];

for (const item of values) {
  console.log(`Letters in ${item}:`);
  for (const letter of item) {
    console.log(letter);
  }
}
