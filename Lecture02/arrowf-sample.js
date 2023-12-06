//Arrow function with two arguments
const sum = (firstParm,secondParam) => {
    return firstParm + secondParam;
};
console.log(sum(2,5)); //Print: 7

//Arrow function with no arguments
const printHello = () => {
    console.log("hello");
};
printHello(); //Prints : hello

//Arrow function with a single arguments
const checkWeight = (weight) => {
    console.log(`Baggage weight : ${weight} kriligrams.`);
};
checkWeight(25); //Print : Baggage weight : 25 kriligrams.

//Concise arrow functions
const multipy = (a,b) => a * b;
console.log(multipy(2,30)); // Prints : 60