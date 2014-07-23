/* global app:true */
'use strict';

/**
 * @ngdoc overview
 * @name gpStudioApp
 * @description
 * # gpStudioApp
 *
 * Main module of the application.
 */

var app = angular.module('gpStudioApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
]);

app.config(function($sceDelegateProvider) {
  $sceDelegateProvider.resourceUrlWhitelist(['self', '*://player.vimeo.com/**', '*://lorempixel.com/**']);
});
