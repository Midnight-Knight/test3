const extrapolateCurrencyRate = require('./script');

describe('тесты', () => {
  const data = [{day: 1, rate: 97.5},{day: 2, rate: 98.3},{day: 3, rate: 98.1},{day: 4, rate: 99.9},{day: 5, rate: 102.7}];
  const answer = [
    { day: 6, rate: 105.30000000000001 },
    { day: 7, rate: 106.60000000000001 },
    { day: 8, rate: 107.9 },
    { day: 9, rate: 109.2 },
    { day: 10, rate: 110.5 }
  ];

  test('тест на дурака', () => {
    expect(extrapolateCurrencyRate(data)).toEqual(answer);
  })

  test('тест на тип данных', () => {
    expect(Array.isArray(extrapolateCurrencyRate(data))).toBe(true);
  })
})