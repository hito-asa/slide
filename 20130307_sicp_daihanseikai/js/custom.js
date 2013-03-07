var touchMove = function(e) {
  if (e.touches[0].pageX < ($(window).width() / 2)) {
    show.setIndex(show.index() - 1);
  } else {
    show.setIndex(show.index() + 1);
  }
};

var keyMove = function(e) {
  if (e.keyCode == 72) {
    show.setIndex(show.index() - 1);
  } else if (e.keyCode == 76){
    show.setIndex(show.index() + 1);
  }
};

$(document).ready(function() {
  $(document).bind("touchend", touchMove);
  $(document).bind("keydown", keyMove);
});
