'use strict';

(function () {
  var load = function (onLoad, onError) {
    var xhr = new XMLHttpRequest();
    var URL = 'https://js.dump.academy/kekstagram/data';

    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      if (xhr.status === 200) {
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

    xhr.timeout = 10000; // 10s

    xhr.open('GET', URL);
    xhr.send();
  };

  var uploadForm = function (data, onUploadSuccess, onUploadError) {
    var xhr = new XMLHttpRequest();
    var URL = 'https://js.dump.academy/kekstagram';

    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      if (xhr.status === 200) {
        onUploadSuccess(xhr.response);
      } else {
        onUploadError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
      }
    });

    xhr.addEventListener('error', function () {
      onUploadError('Произошла ошибка соединения');
    });

    xhr.addEventListener('timeout', function () {
      onUploadError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
    });

    xhr.timeout = 10000; // 10s

    xhr.open('POST', URL);
    xhr.send(data);
  };

  window.backend = {
    load: load,
    uploadForm: uploadForm
  };
})();
