'use strict';
(function () {
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = document.querySelector('.setup-close');
  var setup = document.querySelector('.setup');
  var setupSimilar = document.querySelector('.setup-similar');
  var setupUsername = document.querySelector('.setup-user-name');
  var setupDialogElement = document.querySelector('.setup');


  var onPopupEscPress = function (evt) {
    if (setupUsername === document.activeElement) {
      setupUsername.blur();
      return;
    } else {
      window.util.isEscEvent(evt, closePopup);
    }
  };

  setupOpen.addEventListener('click', function () {
    openPopup();
  });

  setupOpen.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, openPopup);
  });

  setupClose.addEventListener('click', function () {
    closePopup();
  });

  setupClose.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, closePopup);
  });

  var openPopup = function () {
    setup.classList.remove('hidden');
    setupSimilar.classList.remove('hidden');
    setupDialogElement.style.top = '80px';
    setupDialogElement.style.left = '50%';


    document.addEventListener('keydown', onPopupEscPress);
  };

  var closePopup = function () {
    setup.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
  };

})();
