const removeFromArray = function (initialArray, ...itemToBeRemoved) {

    const arrayRemoved = initialArray.filter((item) => {
        return !itemToBeRemoved.includes(item);
    })

    return arrayRemoved;
}

module.exports = removeFromArray
