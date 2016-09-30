String.prototype.toJadenCase = function () {
  return this.split(' ').map(function(word) {
    return word.charAt(0).toUpperCase() + word.substring(1).toLowerCase();
  }).join(' ');
};
