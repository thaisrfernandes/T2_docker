const http = require("http");
const axios = require("axios");

function format(value) {
  return Number(value).toFixed(2);
}

function average(value1, value2) {
  return (Number(value1) + Number(value2)) / 2;
}

function getQuotation(data) {
  const [currentDay, previousDay] = data;

  const averageCurrentDay = average(currentDay.high, currentDay.low);
  const averagePreviousDay = average(previousDay.high, previousDay.low);
  const averageLastTwoDays = average(averageCurrentDay, averagePreviousDay);

  const json = {
    nome: `${currentDay.code} - ${currentDay.codein}`,
    highValue: format(currentDay.high),
    lowValue: format(currentDay.low),
    bid: format(currentDay.bid),
    averageCurrentDay: format(averageCurrentDay),
    averageLastTwoDays: format(averageLastTwoDays)
  };

  return JSON.stringify(json);
}

const url = "https://economia.awesomeapi.com.br/json/list/USD-BRL/2";

http
  .createServer((request, response) => {
      axios
        .get(url)
        .then(res => response.end(getQuotation(res.data)))
        .catch(error => console.log(error));
  })
  .listen(process.env.PORT || 3000);