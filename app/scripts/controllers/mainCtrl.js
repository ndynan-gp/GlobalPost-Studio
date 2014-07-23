'use strict';

/**
 * @ngdoc function
 * @name gpStudioApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the gpStudioApp
 */
angular.module('gpStudioApp')
  .controller('MainCtrl', function ($log, $scope) {
      var self = this;
      this.videoShowing = false;
      this.currentPage = 1;
      this.arrowHidden = false;

      this.hideArrow = function(){
          // $log.debug(self.currentPage);
          self.arrowHidden = self.currentPage === 4 || (self.videoShowing && self.currentPage === 2);
          $log.debug(self.arrowHidden);
      };

      $scope.$on('video:showing', function(){
        self.videoShowing = true;
        self.hideArrow();
      });
      $scope.$on('video:hidden', function(){
        self.videoShowing = false;
        self.hideArrow();
      });

      $scope.$on('page:change', function(e, pageNumber){
        self.currentPage = pageNumber;
        self.hideArrow();
        $scope.$apply();
      });
  });
