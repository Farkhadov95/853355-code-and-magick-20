'use strict';
(function () {
  window.colorize = function (element, inputValue, collection) {
    element.addEventListener('click', function () {
      var color = window.getRandomElement(collection);
      if (element.tagName.toLowerCase() === 'div') {
        element.style.backgroundColor = color;
        inputValue = element.style.backgroundColor;
      } else {
        element.style.fill = color;
        inputValue = element.style.fill;
      }
    });
  };
})();
