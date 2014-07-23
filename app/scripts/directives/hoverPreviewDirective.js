'use strict';

/**
 * @ngdoc directive
 * @name gpStudioApp.directive:fullPage
 * @description
 * # fullPage
 */

//// Replaces source element with animated GIF on hover////

app.directive('hoverPreview', function () {

    var fullPageElement;

    return {
      restrict: 'A',
      scope: {
        image: '=hoverPreview',
      },
      template: '<img class="gps_video-preview" data-static="{{image.thumbnail}}" data-animated="{{image.gif}}"/ >',
      link: function postLink(scope, element, attr) {
          element.css('background-image', 'url(' + scope.image.thumbnail + ')');

           var $img = element.find('img');
           element.mouseenter(function(a) {
               var b = $img,
                   d = $img.attr('data-animated');
               element.addClass('hovering');
                   if (element.hasClass('hovering')) {
                       b.css('background-image', 'url(' + d + ')');
                   }
           });
           element.mouseleave(function(a) {
               var b = $img,
                   d = $img.attr('data-static');
               element.removeClass('hovering');
               b.css('background-image', 'url(' + d + ')');
           });
      }
    };
  });



