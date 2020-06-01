'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 15;
var GAP_X = 50;
var FONT_GAP = 15;
var TEXT_HEIGHT = 15;
var BAR_WIDTH = 40;
var barHeight = -(150);


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

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  var maxTime = getMaxElement(times);

  ctx.fillText('Ура вы победили!', CLOUD_X + GAP, CLOUD_Y + GAP + FONT_GAP);
  ctx.fillText('Список результатов:', CLOUD_X + GAP, CLOUD_Y + GAP + FONT_GAP + FONT_GAP);


  for (var i = 0; i < players.length; i++) {
    ctx.fillText(players[i], CLOUD_X + GAP_X + (BAR_WIDTH + GAP_X) * i, CLOUD_HEIGHT - GAP);
    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      var hslColor = 'hsl(' + 240 + ',' + (30 + 50 * Math.round(Math.random()) + '%,') + (50 + 30 * Math.random()) + '%)';
      ctx.fillStyle = hslColor;
    }
    ctx.fillRect(CLOUD_X + GAP_X + (BAR_WIDTH + GAP_X) * i, (CLOUD_HEIGHT - GAP - TEXT_HEIGHT), BAR_WIDTH, (barHeight * times[i]) / maxTime);
    ctx.fillStyle = 'black';
    ctx.fillText(Math.round(times[i]), CLOUD_X + GAP_X + (BAR_WIDTH + GAP_X) * i, CLOUD_HEIGHT - GAP - TEXT_HEIGHT - FONT_GAP + (barHeight * times[i]) / maxTime);
  }
};


