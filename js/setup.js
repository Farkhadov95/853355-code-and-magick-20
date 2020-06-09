'use strict';
(function () {
  var WIZARD_NAMES = ['Иван ', 'Хуан Себастьян ', 'Мария', 'Кристоф ', 'Виктор ', 'Юлия ', 'Люпита ', 'Вашингтон '];
  var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

  var displayDialog = function () {
    var userDialog = document.querySelector('.setup');
    userDialog.classList.remove('hidden');
    document.querySelector('.setup-similar').classList.remove('hidden');
  };
  displayDialog();

  var getRandomElement = function (item) {
    var randomElement = item[Math.floor(Math.random() * item.length)];
    return randomElement;
  };

  var renderWizard = function (wizard) {
    var similarListElement = document.querySelector('.setup-similar-list');
    var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name + wizard.surname;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
    similarListElement.appendChild(wizardElement);
  };

  var displayWizards = function () {
    for (var i = 0; i < 4; i++) {
      var wizards = {
        name: getRandomElement(WIZARD_NAMES),
        surname: getRandomElement(WIZARD_SURNAMES),
        coatColor: getRandomElement(COAT_COLORS),
        eyesColor: getRandomElement(EYES_COLORS)
      };
      renderWizard(wizards);
    }
  };
  displayWizards();
})();
