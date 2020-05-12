/**
 * jquery.snow - jQuery Snow Effect Plugin
 *
 * Available under MIT licence
 *
 * @version 1 (21. Jan 2012)
 * @author Ivan Lazarevic
 * @requires jQuery
 * @see http://workshop.rs
 *
 * @params minSize - min size of snowflake, 10 by default
 * @params maxSize - max size of snowflake, 20 by default
 * @params newOn - frequency in ms of appearing of new snowflake, 500 by default
 * @params flakeColor - color of snowflake, #FFFFFF by default
 * @example $.fn.snow({ maxSize: 200, newOn: 1000 });
 */
(function ($) {
  $.fn.snow = function (options) {
    var $flake = $('<img src="images/light.png"/>').css({ 'position': 'absolute', 'top': '0', 'z-index': '999' }),
      documentHeight = $(window).height(),
      documentWidth = $(window).width(),
      defaults = {
        minSize: 3,
        maxSize: 8,
        newOn: 500
      },
      options = $.extend({}, defaults, options);
  
  
    var interval = setInterval(function () {
      var
        startPositionLeft = Math.random() * documentWidth,
        startOpacity = 0.5 + Math.random(),
        sizeFlake = options.minSize + Math.random() * options.maxSize,
        // endPositionTop = documentHeight - 200,
        endPositionTop = 0,
        endPositionLeft = startPositionLeft+ Math.random() * 200,
        durationFall = documentHeight * 10 + Math.random() * 5000;
      $flake
        .clone()
        .appendTo('.snow')
        .css(
          {
            left: startPositionLeft,
            top: documentHeight,//開始的值 預設為 top:0;
            opacity: startOpacity,
            'width': sizeFlake,
            color: options.flakeColor
          }
        )
        .animate(
          {
            top: endPositionTop,//結束的值
            left: endPositionLeft
          },
          durationFall,
          'linear',
          function () {
            $(this).remove();
          }
        );
    }, options.newOn);
  };
})(jQuery);


$.fn.snow({
  //  maxSize: 50, 
  //  newOn: 100 
})
