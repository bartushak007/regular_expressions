var timeExp = /([0-1][0-9]|[0-2][0-3])\:([0-6]0|[0-5][0-9])/;
var str = 'time 12:55';
var str1 = 'time 44:55';
var str2 = 'time 23:59';
var str3 = 'time 24:01';
var str4 = 'time 37:98';
var str6 = 'time 00:00';

console.log('time 12:55' + ' is ' + str.match(timeExp));
console.log('time 44:55' + ' is ' + str1.match(timeExp));
console.log('time 23:59' + ' is ' + str2.match(timeExp));
console.log('time 24:01' + ' is ' + str3.match(timeExp));
console.log('time 37:98' + ' is ' + str4.match(timeExp));
console.log('time 00:00' + ' is ' + str6.match(timeExp));

var expressions = '1+ 2, -1.2* 3.4, -3 / -6,, -3 +/ -6, -2 - 2, -1.2 * 3.4, 1#w+ 2d',
  expressionsExp = /(\-?\d[.]\d|\-?\d)\s?[+-\/\*]\s?(\-?\d[.]\d|\-?\d)/;

var newExpressionsArr = expressions.split(', ');
newExpressionsArr.forEach(function(item) {
  var res = item.search(expressionsExp),
  dataInf = 'incorrect data';
  if (res >= 0) {
    dataInf = 'correct data';
  }
    console.log(item + ' is ' + dataInf);
  
});

function createURL(templateURL, params) {  
  for (var key in params) {
    var regExp = new RegExp('{' + key + '}');    
    templateURL = templateURL.replace(regExp, params[key]);
  }

  return templateURL;
}

let url = createURL(`/api/countries/{country}/regions/{region}/`, {
  country: `Ukraine`,
  region: `Kiev`
});
console.log(url);
console.log(url === '/api/countries/Ukraine/regions/Kiev/');