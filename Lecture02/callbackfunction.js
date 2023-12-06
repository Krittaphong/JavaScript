function creatQuote(quote, callback){
    let myQuote = "Like I alaways say, "+ quote;
    callback(myQuote); // 2
}

function logQuote(quote){
    console.log(quote + ' Yes...');
}

creatQuote("you will getting better!",logQuote); //1