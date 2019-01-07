var timeExp = /(([0-1][0-9]|[0-2][0-3]):([0-6]0|[0-5][0-9]))|(24:00)/;
var str = 'time 12:55';
var str1 = 'time 44:55';
var str2 = 'time 24:00';
var str3 = 'time 24:01';
var str4 = 'time 37:98';
var str6 = 'time 00:00';

console.log('time 12:55' + ' is ' + str.search(timeExp));
console.log('time 44:55' + ' is ' + str1.search(timeExp));
console.log('time 24:00' + ' is ' + str2.search(timeExp));
console.log('time 24:01' + ' is ' + str3.search(timeExp));
console.log('time 37:98' + ' is ' + str4.search(timeExp));
console.log('time 00:00' + ' is ' + str6.search(timeExp));

var expressions = '1+ 2, -1.2* 3.4, -3 / -6, -2 - 2, -1.2 * 3.4',
  expressionsExp = /(\-?\d[.]\d|\-?\d)\s?[+-\/\*]\s?(-?\d[.]\d|-?\d)/;

var newExpressionsArr = expressions.split(', ');
newExpressionsArr.forEach(function(item) {
  console.log(item + ' is ' + item.search(expressionsExp));
});

function createURL(country, region) {
  var regExpCountry = /\{country\}/;
  var regExpRegion = /\{region\}/;
  var url = country.replace(regExpCountry, region.country);
  url = url.replace(regExpRegion, region.region);
  console.log(url);
  console.log(url === '/api/countries/Ukraine/regions/Kiev/');
}

let url = createURL(`/api/countries/{country}/regions/{region}/`, {
  country: `Ukraine`,
  region: `Kiev`
});