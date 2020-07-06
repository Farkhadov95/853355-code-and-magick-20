'use strict';
(function () {
  var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var EYES_COLORS = ['red', 'orange', 'yellow', 'green', 'lightblue', 'blue', 'purple'];
  var FIREBALLS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  var changeWizardLook = function () {
    var wizardSetup = document.querySelector('.setup-wizard');
    var wizardAppearance = document.querySelector('.setup-wizard-appearance');
    var wizardCoat = wizardSetup.querySelector('.wizard-coat');
    var CoatInput = wizardAppearance.querySelector('.coat-color');

    var wizardEyes = wizardSetup.querySelector('.wizard-eyes');
    var EyesInput = wizardAppearance.querySelector('.eyes-color');

    var fireballSetup = document.querySelector('.setup-fireball-wrap');
    var wizardFireball = fireballSetup.querySelector('.setup-fireball');
    var fireballInput = fireballSetup.querySelector('input');

    window.colorizeCoatOrEyes(wizardCoat, CoatInput, COAT_COLORS);
    window.colorizeCoatOrEyes(wizardEyes, EyesInput, EYES_COLORS);
    window.colorizeFireball(wizardFireball, fireballInput, FIREBALLS);
  };
  changeWizardLook();
})();
