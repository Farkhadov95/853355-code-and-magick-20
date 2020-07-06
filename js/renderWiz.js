'use strict';
(function () {
  var MAX_SIMILAR_WIZARD_COUNT = 4;
  var userDialog = document.querySelector('.setup');
  var similarListElement = userDialog.querySelector('.setup-similar-list');
  var similarList = document.querySelector('.setup-similar-list');

  window.renderWizard = function (wizard) {
    var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;
    return wizardElement;
  };

  window.render = function (data) {
    var fragment = document.createDocumentFragment();
    var takeNumber = data.length > MAX_SIMILAR_WIZARD_COUNT ? MAX_SIMILAR_WIZARD_COUNT : data.length;
    similarList.innerHTML = '';
    for (var i = 0; i < takeNumber; i++) {
      fragment.appendChild(window.renderWizard(data[i]));
    }
    similarListElement.appendChild(fragment);
    userDialog.querySelector('.setup-similar').classList.remove('hidden');
  };
})();
