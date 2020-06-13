'use strict';
(function () {
  var WIZARD_NAMES = ['Иван ', 'Хуан Себастьян ', 'Мария', 'Кристоф ', 'Виктор ', 'Юлия ', 'Люпита ', 'Вашингтон '];
  var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var FIREBALLS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  var manageSetup = function () {
    var setupOpen = document.querySelector('.setup-open');
    var setupClose = document.querySelector('.setup-close');
    var setup = document.querySelector('.setup');
    var setupSimilar = document.querySelector('.setup-similar');

    var onPopupEscPress = function (evt) {
      if (evt.keyCode === 27) {
        evt.preventDefault();
        setup.classList.add('hidden');
      }
    };

    var openPopup = function () {
      setup.classList.remove('hidden');
      setupSimilar.classList.remove('hidden');

      document.addEventListener('keydown', onPopupEscPress);
    };

    var closePopup = function () {
      setup.classList.add('hidden');

      document.removeEventListener('keydown', onPopupEscPress);
    };

    setupOpen.addEventListener('click', function () {
      openPopup();
    });

    setupOpen.addEventListener('keydown', function (evt) {
      if (evt.keyCode === 13) {
        openPopup();
      }
    });

    setupClose.addEventListener('click', function () {
      closePopup();
    });

    setupClose.addEventListener('keydown', function (evt) {
      if (evt.keyCode === 13) {
        closePopup();
      }
    });
  };

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

    wizardCoat.addEventListener('click', function () {
      wizardCoat.style.fill = getRandomElement(COAT_COLORS);
      CoatInput.value = wizardCoat.style.fill;
    });

    wizardEyes.addEventListener('click', function () {
      wizardEyes.style.fill = getRandomElement(EYES_COLORS);
      EyesInput.value = wizardEyes.style.fill;
    });
    wizardFireball.addEventListener('click', function () {
      wizardFireball.style.backgroundColor = getRandomElement(FIREBALLS);
      fireballInput.value = wizardFireball.style.backgroundColor;
    });
  };


  manageSetup();
  changeWizardLook();
  displayWizards();
})();
