
angular.module('foot', ['ngResource', 'ngRoute','foot.controllers','foot.services','ng-fusioncharts'])

 .config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: '/pages/home.html' 
      }).
    when('/calendar', {
        templateUrl: '/pages/calendar.html'
       
      }).
    when('/profile', {
        templateUrl: '/pages/profile.html'
       
      }).
     when('/statistic', {
        templateUrl: '/pages/statistic.html'
       
      }).
    when('/book', {
        templateUrl: '/pages/booking.html'
       
      }).
     when('/login', {
        templateUrl: '/pages/login.html'
       
      }).
     when('/composeMail', {
        templateUrl: '/pages/composeMail.html'
       
      }).
    
    when('/mailbox', {
        templateUrl: '/pages/mailbox.html'
       
      }).
    when('/readMail', {
        templateUrl: '/pages/readMail.html'
       
      }).
    when('/users', {
        templateUrl: '/pages/user.html'
       
      }).
     when('/gallery', {
        templateUrl: '/pages/gallery.html'
       
      }).
      otherwise({
        redirectTo: '/'
      });
  }])
 

