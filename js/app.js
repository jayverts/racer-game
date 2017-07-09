setInterval(movePlayer, 20);
var keys = {};

$(document).keydown(function(e) {
    keys[e.keyCode] = true;
});

$(document).keyup(function(e) {
    delete keys[e.keyCode];
});

function movePlayer() {
  for (var direction in keys) {
    if (!keys.hasOwnProperty(direction)) continue;
    if (direction == 37) {
      $("#player1").animate({left: "-=5"}, 0);
    }
    if (direction == 38) {
      $("#player1").animate({top: "-=5"}, 0);
    }
    if (direction == 39) {
      $("#player1").animate({left: "+=5"}, 0);
    }
    if (direction == 40) {
      $("#player1").animate({top: "+=5"}, 0);
    }
  }
}

function movePlayer2() {
  for (var direction in keys) {
    if (!keys.hasOwnProperty(direction)) continue;
    if (direction == 90) {
      $("#player2").animate({left: "-=5"}, 0);
    }
    if (direction == 83) {
      $("#player2").animate({top: "-=5"}, 0);
    }
    if (direction == 65) {
      $("#player2").animate({left: "+=5"}, 0);
    }
    if (direction == 88) {
      $("#player2").animate({top: "+=5"}, 0);
    }
  }
}