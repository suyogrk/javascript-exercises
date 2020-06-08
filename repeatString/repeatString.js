const repeatString = function (tmpString, numberOfRepetions) {
    
    if(numberOfRepetions<0){
        return 'ERROR'
    }

    let responseString = '';

    for (let i = 0; i < numberOfRepetions; i++) {
        responseString += tmpString

    }

    return responseString;
}

module.exports = repeatString
