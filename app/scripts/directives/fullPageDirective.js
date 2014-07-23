'use strict';

/**
 * @ngdoc directive
 * @name gpStudioApp.directive:fullPage
 * @description
 * # fullPage
 */

/// Responsible for controlling FullPage.js - https://github.com/alvarotrigo/fullPage.js
/// this.MoveDown is triggered by the fullPageDown directive
app.directive('fullPage', function() {
    var fullPageElement;

    return {
        restrict: 'A',
        controller: function($scope) {
            this.moveDown = function() {
                fullPageElement.moveDown();
            };
        },
        link: function postLink(scope, element, attrs) {
            fullPageElement = $('#l_gps_main');
        }
    };
});

/// Responsible for configuring FullPage.js as well as swiping events for mobile devices
app.directive('fullPageContent', function($log, $window, $swipe) {

    return {
        restrict: 'A',
        require: '^fullPage',
        link: function postLink(scope, element) {

            element.onepage_scroll({
                sectionContainer: 'section',
                responsiveFallback: false,
                pagination: true,
                animationTime: 1000,
                easing: 'ease',
                updateURL: false,
                beforeMove: function(i) {
                    scope.$emit('page:change', i);
                }
            });

            var startY;
            $swipe.bind(element, {
                start: function(c) {
                    startY = c.y;
                },
                end: function(c) {},
                cancel: function(event) {
                    var touches = event.originalEvent.touches;
                    if (touches && touches.length) {
                        var deltaY = startY - touches[0].pageY;
                        $log.debug(startY);
                        $log.debug(deltaY);

                        if (deltaY > 0) {
                            element.moveDown();
                        }
                        if (deltaY < 0) {
                            element.moveUp();
                        }

                        event.preventDefault();
                    }
                }
            });
        }
    };
});

/// Triggers fullpage directive's move down function through require options
app.directive('fullPageDown', function() {
    return {
        restrict: 'A',
        require: '^fullPage',
        link: function postLink(scope, element, attrs, fullPageCtrl) {
            element.on('click', function() {
                fullPageCtrl.moveDown();
            });
        }
    };
});