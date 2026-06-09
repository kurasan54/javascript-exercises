const repeatString = function(word, amount) {
    let totalString = "";

    if (amount > 0)
    {
        for (let i = 0; i < amount; i++){
        totalString += word;
        }
    }
    else if (amount === 0){
        totalString == "";
    }
    else{
        totalString = "ERROR";
    }
    return totalString;
};

// Do not edit below this line
module.exports = repeatString;
