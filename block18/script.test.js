const { multiplication, concatOdds } = require('./script');

describe('multiplication', () => {
    test('multiplies 2 * 3 to equal 6', () => {
        expect(multiplication(2,3)).toBe(6);
    })

    test('squares a number when a single argument is supplied', () => {
        expect(multiplication(3)).toBe(9);
    })

    test('multiples strings', () => {
        expect(multiplication('2', '3')).toBe(6);
    })
});

describe('concatOdds', () => {
    test('filters out all even numbers in the array, leaving only odds', () => {
        expect(concatOdds([5,4,3,2,1], [1,2,3,7,28,53,11])).toContain(5,3,1,1,3,7,53,11);
    })

    test('if all numbers are odd, it returns the givin array', () => {
        expect(concatOdds([1,3,5,7])).toContain(1,3,5,7)
    })

    test('if all numbers are odd but there are multiple, only print one instead of both', () => {
        expect(concatOdds([5,4,3,2,1], [1,2,3,7,28,53,11])).toContain(5,3,1,3,7,53,11)
    })
})