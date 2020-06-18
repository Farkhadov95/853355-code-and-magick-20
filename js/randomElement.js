'use strict';
(function () {
  window.getRandomElement = function (item) {
    var randomElement = item[Math.floor(Math.random() * item.length)];
    return randomElement;
  };
})();
