const { sum, fromEuroToDollar, fromDollartoYen, fromYentoPound } = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
    const total = sum(14, 9);
    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", () => {
    const euros = 3.5;
    const dollars = fromEuroToDollar(euros);
    const expected = euros * 1.07;
    expect(dollars).toBe(expected);
});

test("converts dollars to yen correctly", () => {
    const dollars = 1;
    const yen = fromDollartoYen(dollars);
    const expected = dollars / 1.07 * 156.5;
    expect(yen).toBe(expected);
});

test("converts yen to pounds correctly", () => {
    const yen = 156.5;
    const pounds = fromYentoPound(yen);
    const expected = yen / 156.5 * 0.87;
    expect(pounds).toBe(expected);
});
