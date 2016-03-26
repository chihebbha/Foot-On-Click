
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
    
    .when('/contacts', {
        templateUrl: 'views/contacts.html' 
      })
       .when('/pastMatch', {
        templateUrl: 'views/pastMatch.html' 
      })
    ;
    
  }])


.config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
       /* delete $httpProvider.defaults.headers.common['X-Requested-With'];*/
    }
])
;