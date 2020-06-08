const sumAll = function (initialNumber, finalNumber) {
    let startNum, endNum;

    if(!Number.isInteger(initialNumber) || !Number.isInteger(finalNumber)){
        return 'ERROR'
    }

    if(initialNumber<0 || finalNumber<0){
        return 'ERROR'
    }

    if (initialNumber > finalNumber) {
        startNum = finalNumber;
        endNum = initialNumber;
    } else {
        startNum = initialNumber;
        endNum = finalNumber;
    }

    let sum = 0;
    for (let i = startNum; i <= endNum; i++) {
        sum += i;
    }

    return sum;
}

module.exports = sumAll
