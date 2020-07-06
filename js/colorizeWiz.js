'use strict';
(function () {
  // window.colorize = function (element, inputValue, collection) {
  //   element.addEventListener('click', function () {
  //     var color = window.getRandomElement(collection);
  //     if (element.tagName.toLowerCase() === 'div') {
  //       element.style.backgroundColor = color;
  //       inputValue = element.style.backgroundColor;
  //     } else {
  //       element.style.fill = color;
  //       inputValue = element.style.fill;
  //     }
  //   });
  // };

  var wizard = {
    onEyesChange: function () {},
    onCoatChange: function () {}
  };

  window.colorizeFireball = function (element, inputValue, collection) {
    element.addEventListener('click', function () {
      var color = window.getRandomElement(collection);
      element.style.backgroundColor = color;
      inputValue = element.style.backgroundColor;
    });
  };

  window.colorizeCoatOrEyes = function (element, inputValue, collection) {
    element.addEventListener('click', function () {
      var color = window.getRandomElement(collection);
      element.style.fill = color;
      inputValue = element.style.fill;
      if (element.classList.value === 'wizard-coat') {
        wizard.onCoatChange(color);
      } else {
        wizard.onEyesChange(color);
      }
    });
  };

  window.wizard = wizard;
})();
