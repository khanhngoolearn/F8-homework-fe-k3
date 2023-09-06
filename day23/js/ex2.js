Number.prototype.getCurrency = function(currencyUnit) {
  return this.toLocaleString() + ' ' + currencyUnit;
}

String.prototype.getCurrency = function(currencyUnit) {
  var stringToNumber = Number(this);
  return stringToNumber.toLocaleString() + ' ' + currencyUnit;
}


var price = 134000;
console.log(price.getCurrency('vnd'));