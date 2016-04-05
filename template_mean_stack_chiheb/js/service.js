angular.module('footApplication.services', [])

.filter('currentdate', ['$filter', function ($filter) {
    return function () {
        return $filter('date')(new Date(), 'EEEE  dd/MM/yyyy HH:mm');
    };
}])

.service('dataService', function($http) {
   $http.defaults.headers.common['X-Auth-Token'] = '6903147d81d64f048cf2c8117ac49b70';
this.getData = function(link) {
    // $http() returns a $promise that we can add handlers with .then()
    return $http({
        method: 'GET',
        url: link
     });
 }
})



    .factory('AllBet', function ($resource) {
  
        return $resource('http://api.football-data.org/v1/soccerseasons/1/fixtures');

    });
