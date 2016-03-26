angular.module('footApplication.services', [])


    .factory('AllBet', function ($resource) {
  
        return $resource('http://api.football-data.org/v1/soccerseasons/1/fixtures');
   
    
/*    return  {
 method: 'GET',
 url: 'http://api.football-data.org/v1/soccerseasons',
 headers: {
     'Access-Control-Allow-Credentials' :'true',
     //'X-Auth-Token': '33b36cb6ea9044b098286f052b6dec8f',
     'Access-Control-Allow-Headers':'*',
    'Access-Control-Allow-Origin': '*',
   'Content-Type': undefined
 },
 data: { test: 'test' }
};*/
    // Note the full endpoint address
    })






;
//https://edg.epa.gov/data.json
//http://bassemchagra.com/bourse.php