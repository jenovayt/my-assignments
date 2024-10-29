const testOdds = [5, 4, 3, 2, 1]; [1, 2, 3, 7, 28, 53, 11];

function multiplication(a, b) {
    if (b === undefined) {
        return a * a;
    }
    return a * b;
}

function concatOdds(testOdds) {
    let arr = [];
    for (let i = 0; i < testOdds.length; i++) {
        if (testOdds[i] % 2 !== 0) {
          arr.push(testOdds[i]);
        }
    }
    return arr;
}

module.exports = { multiplication, concatOdds }