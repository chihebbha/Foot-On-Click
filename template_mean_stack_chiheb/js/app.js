
angular.module('footApplication', ['ngRoute','footApplication.controllers','footApplication.services','ngResource'])

.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'views/index.html' 
      })
    
    
    .when('/buying', {
        templateUrl: 'views/buying.html' 
      })
    
    .when('/selling', {
        templateUrl: 'views/selling.html' 
      })
    
    .when('/renting', {
        templateUrl: 'views/renting.html' 
      })
    .when('/actualityInsta', {
        templateUrl: 'views/instagram.html' 
      })
     .when('/weather', {
        templateUrl: 'views/weather.html' 
      })
    .when('/Newsletter', {
        templateUrl: 'views/Newsletter.html' 
      })
    .when('/contacts', {
        templateUrl: 'views/contacts.html' 
      })
       .when('/pastMatch', {
        templateUrl: 'views/pastMatch.html' 
      })
      .when('/classement', {
        templateUrl: 'views/classement.html',
        controller:'classementCTRL'
      })
    .when('/reclamation', {
        templateUrl: 'views/reclamation.html'
       
      })
     .when('/actuality', {
        templateUrl: 'views/actuality.html'
       
      })
    ;
    
  }])


.config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
       /* delete $httpProvider.defaults.headers.common['X-Requested-With'];*/
    }
])
;