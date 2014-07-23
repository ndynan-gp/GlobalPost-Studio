'use strict';

/**
 * @ngdoc directive
 * @name gpStudioApp.directive:fullPage
 * @description
 * # fullPage
 */

/// Plays the vimeo player when thumbnails are clicked ///

app.directive('vimeoPlayer', function ($sce) {

    return {
      restrict: 'A',
      scope: {
        // videoId : '@vimeoPlayer'
      },
      replace:true,
      templateUrl: 'views/vimeoPlayer.html',
      link: function postLink(scope, element, attr) {

        attr.$observe('vimeoPlayer', function(val){
          var url = $sce.getTrustedResourceUrl('//player.vimeo.com/video/' + val + '?autoplay=1');
          if (val){
            element.attr('src', url);
          }
          else {
            element.removeAttr('src');
          }
        });
      }
    };
  });



