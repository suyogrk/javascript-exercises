const reverseString = function(stringToBeReversed) {
    const stringLength = stringToBeReversed.length;
    let reversedString = ''

    for(let i=stringLength-1; i>=0; i--){
        let tmpChar = stringToBeReversed.charAt(i);

        reversedString += tmpChar;

    }

    return reversedString;

}
module.exports = reverseString
