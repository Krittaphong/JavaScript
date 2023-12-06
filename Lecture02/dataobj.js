//Date function return milliseconds that have elaosed
//since midnight on January 1, 1970, UTC
//this example take 2 seconds to run
const start = Date.now();

console.log('starting timer...');
//expected output:starting timer...

setTimeout (() => {
    const millis = Date.now() - start;

    console.log(`seconds elapsed = ${Math.floor(millis / 1000)}`);
    //expected output :  second elapsed = 2
},2000);