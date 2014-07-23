'use strict';

/**
 * @ngdoc directive
 * @name gpStudioApp.directive:fullPage
 * @description
 * # fullPage
 */

//// Controls Sly.js used to implement a carousel video gallery. It is only visible on Mobile ////

app.directive('sly', function($window, $log) {
    var options = {
        horizontal: 1,
        itemNav: 'forceCentered',
        smart: 1,
        activateMiddle: 1,
        mouseDragging: 1,
        touchDragging: 1,
        releaseSwing: 1,
        startAt: 0,
        scrollBy: 1,
        speed: 300,
        elasticBounds: 1,
        easing: 'swing',
        dragHandle: 1,
        dynamicHandle: 1,
        clickBar: 1,
        prev: $('.gps_prev'),
        next: $('.gps_next')
    };

    return {
        restrict: 'A',
        link: function postLink(scope, element, attrs) {
            var sly = new Sly(element[0], options).init();
            angular.element($window).bind('resize', function() {
                sly.destroy();
                element.find('.gps_video_grid--mobile-inner').css('width', '300%');
                sly.init();
            });
        }
    };
});


app.directive('slyItems', function($sce) {

    var fullPageElement;
    var setSrc = function(element, val) {
        if (val) {
            var url = $sce.getTrustedResourceUrl('//player.vimeo.com/video/' + val.video);
            element.attr('src', url);
        } else {
            element.removeAttr('src');
        }
    };

    return {
        restrict: 'A',
        scope: {
            image: '=slyItems',
        },
        template: '<span class="gps_video_grid-item-cover"><iframe width="100%" height="100%" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></span>',
        link: function postLink(scope, element, attr) {
            var iframe = element.find('iframe');
            setSrc(iframe, scope.image);
        }
    };
});