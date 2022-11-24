function getCurrentDate(){
    // лучше не делать глобальные переменные
    return Date.now() + globalThis.testData
}

// module.exports = getCurrentDate
module.exports = {
    getCurrentDate
}