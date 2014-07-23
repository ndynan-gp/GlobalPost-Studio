'use strict';

/**
 * @ngdoc function
 * @name gpStudioApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the gpStudioApp
 */
angular.module('gpStudioApp')
  .controller('VideoCtrl', function ($log, $scope, imageDataService) {

    this.gallery = imageDataService.images;
    this.image = null;

    this.showVideo = function(image){
      this.image = image;
      $scope.$emit('video:showing');
      console.log('video showing event sent');

    };

    this.hideVideo = function(){
      this.image = null;
      $scope.$emit('video:hidden');

    };


  });
