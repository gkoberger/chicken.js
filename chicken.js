(function( $ ) {
  var count = 0;

  $(document).on('click', function(e, eventInfo) { 

    var $element = e.target;
    var events = jQuery._data( $element, "events" );

    if(events && 'cluck' in events) {

      if(count >= 5) count = 0;

      audio[count].play();
      count++;

      e.type = 'cluck';
      $($element).trigger(e);
    }

  });

  $.fn.cluck = function(cb) {
    $(this).bind('cluck', cb);
  };

  var audio = [];

  for(var i = 1; i <= 5; i++) {

    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'mp3s/' + i + '.mp3');
    audio.push(audioElement);

  }
 
}( jQuery ));
