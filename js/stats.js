'use strict';

(function () {
  var CLOUD_WIDTH = 420;
  var CLOUD_HEIGHT = 270;
  var CLOUD_X = 100;
  var CLOUD_Y = 10;
  var GAP = 15;
  var GAP_X = 50;
  var FONT_GAP = 15;
  var TEXT_HEIGHT = 15;
  var BAR_WIDTH = 40;
  var BAR_HEIGHT = -(150);
  var MAIN_COLOR = '#000';
  var PERSONAL_COLOR = 'rgba(255, 0, 0, 1)';
  var WIN_PHRASE = 'Ура вы победили!';
  var RESULT_LIST = 'Список результатов:';


  var renderCloud = function (ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
  };

  var getMaxElement = function (arr) {
    var maxElement = arr[0];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] > maxElement) {
        maxElement = arr[i];
      }
    }
    return maxElement;
  };

  var generateBlue = function (SaturationMin, SaturationRange, LightnessMin, LightnessRange) {
    var hslColor = 'hsl(240,' + (SaturationMin + SaturationRange * Math.round(Math.random()) + '%,')
     + (LightnessMin + LightnessRange * Math.random()) + '%)';
    return hslColor;
  };

  window.renderStatistics = function (ctx, players, times) {
    renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
    renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

    ctx.fillStyle = MAIN_COLOR;
    ctx.font = '16px PT Mono';
    var maxTime = getMaxElement(times);

    ctx.fillText(WIN_PHRASE, CLOUD_X + GAP, CLOUD_Y + GAP + FONT_GAP);
    ctx.fillText(RESULT_LIST, CLOUD_X + GAP, CLOUD_Y + GAP + FONT_GAP + FONT_GAP);


    for (var i = 0; i < players.length; i++) {
      ctx.fillText(
          players[i],
          CLOUD_X + GAP_X + (BAR_WIDTH + GAP_X) * i,
          CLOUD_HEIGHT - GAP
      );
      if (players[i] === 'Вы') {
        ctx.fillStyle = PERSONAL_COLOR;
      } else {
        ctx.fillStyle = generateBlue(30, 50, 50, 30);
      }
      ctx.fillRect(
          CLOUD_X + GAP_X + (BAR_WIDTH + GAP_X) * i,
          (CLOUD_HEIGHT - GAP - TEXT_HEIGHT),
          BAR_WIDTH, (BAR_HEIGHT * times[i]) / maxTime
      );
      ctx.fillStyle = MAIN_COLOR;
      ctx.fillText(
          Math.round(times[i]),
          CLOUD_X + GAP_X + (BAR_WIDTH + GAP_X) * i,
          CLOUD_HEIGHT - GAP - TEXT_HEIGHT - FONT_GAP + (BAR_HEIGHT * times[i]) / maxTime
      );
    }
  };
})();
