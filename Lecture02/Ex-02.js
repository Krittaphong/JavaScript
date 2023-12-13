function equation(str) {
    let spit = str.split("");
    let strletter = "";
    let letter = [];
    let operater = "";
    let sum = 0;
    
    for (let i = 0 ; i < spit.length ; i++) {
        if (isNaN(spit[i])) {
            operater += spit[i];
            letter.push(strletter);
            strletter = "";
        }
        else {
            strletter += spit[i];
            if (i == spit.length - 1) {
                letter.push(strletter);
            }
        }
    }
    
    for (let i = 0 ; i < spit.length ; i++) {
        if (operater[i] == "+") {
            if (i == 0) {
                sum = parseInt(letter[i]) + parseInt(letter[i+1]);
            }
            else {
                sum += parseInt(letter[i+1]);
            }
        }

        else if (operater[i] == "-") {
            if (i == 0) {
                sum = parseInt(letter[i]) - parseInt(letter[i+1]);
            }
            else{
                sum -= parseInt(letter[i+1]);
            }
        }

        else if (operater[i] == "*") {
            if (i == 0) {
                sum = parseInt(letter[i]) * parseInt(letter[i+1]);
            }
            else{
                sum *= parseInt(letter[i+1]);
            }
        }
    }
    console.log(sum)
}

equation("11+1+2");
equation("10*4");
equation("1+1+1+1+1");
