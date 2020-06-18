'use strict';
(function () {
  var WIZARD_NAMES = ['Иван ', 'Хуан Себастьян ', 'Мария ', 'Кристоф ', 'Виктор ', 'Юлия ', 'Люпита ', 'Вашингтон '];
  var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var FIREBALLS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  var displayWizards = function () {
    for (var i = 0; i < 4; i++) {
      var wizards = {
        name: window.getRandomElement(WIZARD_NAMES),
        surname: window.getRandomElement(WIZARD_SURNAMES),
        coatColor: window.getRandomElement(COAT_COLORS),
        eyesColor: window.getRandomElement(EYES_COLORS)
      };
      window.renderWizard(wizards);
    }
  };

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

    window.colorize(wizardCoat, CoatInput, COAT_COLORS);
    window.colorize(wizardEyes, EyesInput, EYES_COLORS);
    window.colorize(wizardFireball, fireballInput, FIREBALLS);
  };

  changeWizardLook();
  displayWizards();
})();
