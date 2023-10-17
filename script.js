function extrapolateCurrencyRate(data) {
  const array = [];
  for (let i = 1; i <= 5; i++)
  {
    const targetDate = data[data.length - 1].day + i;
    const totalChange = data[data.length - 1].rate - data[0].rate;
    const averageChange = totalChange / (data.length - 1);
    const predictedRate = data[data.length - 1].rate + (targetDate - data.length + 1) * averageChange;
    array.push({day: targetDate, rate: predictedRate});
  }
  return array;
}

module.exports = extrapolateCurrencyRate;

const data = [{day: 1, rate: 97.5},{day: 2, rate: 98.3},{day: 3, rate: 98.1},{day: 4, rate: 99.9},{day: 5, rate: 102.7}];

const predictedRates = extrapolateCurrencyRate(data);
console.log(predictedRates);
console.log("Прогноз валютного курса на 5 дней вперёд: " + predictedRates.map((elem) => ("{day: " + elem.day + ", rate: " + elem.rate + "}")));