module.exports = function reverse (n) {
  nString = Math.abs(n) + '';
  return nString.split('').reverse().join('');
}
