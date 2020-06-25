'use strict';
(function () {

  var MAX_SIMILAR_WIZARD_COUNT = 4;
  var userDialog = document.querySelector('.setup');
  var similarListElement = userDialog.querySelector('.setup-similar-list');
  var URL = 'https://javascript.pages.academy/code-and-magick/data';
  var TIMEOUT_IN_MS = 10000;
  var form = userDialog.querySelector('.setup-wizard-form');
  var URL_UP = 'https://javascript.pages.academy/code-and-magick';
  var StatusCode = {
    OK: 200
  };

  var successHandler = function (wizards) {
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < MAX_SIMILAR_WIZARD_COUNT; i++) {
      fragment.appendChild(window.renderWizard(wizards[i]));
    }
    similarListElement.appendChild(fragment);

    userDialog.querySelector('.setup-similar').classList.remove('hidden');
  };

  var errorHandler = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';

    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);

    document.addEventListener('keydown', function (ESCevt) {
      if (ESCevt.keyCode === 27) {
        node.remove();
      }
    });
  };

  // ------------------------ Load Data--------------------------------

  window.load = function (onLoad, onError) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      if (xhr.status === StatusCode.OK) {
        onLoad(xhr.response);
      } else {
        onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
      }
    });
    xhr.addEventListener('error', function () {
      onError('Произошла ошибка соединения');
    });
    xhr.addEventListener('timeout', function () {
      onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
    });

    xhr.timeout = TIMEOUT_IN_MS;

    xhr.open('GET', URL);
    xhr.send();
  };

  // ------------------------ save - upload ------------------------

  window.save = function (data, onLoad, onError) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      if (xhr.status === StatusCode.OK) {
        onLoad(xhr.response);
      } else {
        onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
      }
    });

    xhr.open('POST', URL_UP);
    xhr.send(data);
  };

  // -------------------- submit ----------------------------
  var submitSuccess = function () {
    userDialog.classList.add('hidden');
  };

  var submitHandler = function (evt) {
    window.save(new FormData(form), submitSuccess, errorHandler);
    evt.preventDefault();
  };
  form.addEventListener('submit', submitHandler);

  // --------------------------------------------
  window.load(successHandler, errorHandler);
})();
