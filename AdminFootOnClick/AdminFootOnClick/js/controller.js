angular.module('foot.controllers', [])


.controller('statistics',function($scope,$http){
    
    $scope.standingSpanish=[];
        $scope.standingSpanish=[];

        $scope.standingdeutch=[];

        $scope.standingfrensh=[];

        $scope.standingitalian=[];

        $scope.standingenglish=[];
        $scope.standingPortugal=[];


    
         $http.defaults.headers.common['X-Auth-Token'] = '6903147d81d64f048cf2c8117ac49b70';
    
    
    
$http.get('http://api.football-data.org/v1/soccerseasons/394/leagueTable').
        success(function(data) {
       
       $scope.deutchMatch=data.matchday;
    
  

        });
    
    //---------------------------------------------------
    $http.get('http://api.football-data.org/v1/soccerseasons/396/leagueTable').
        success(function(data) {
       
       $scope.frenshMatch=data.matchday;
    
       

        });
    
     //---------------------------------------------------
    $http.get('http://api.football-data.org/v1/soccerseasons/398/leagueTable').
        success(function(data) {
       
       $scope.englishMatch=data.matchday;
    
       

        });
     //---------------------------------------------------
    $http.get('http://api.football-data.org/v1/soccerseasons/399/leagueTable').
        success(function(data) {
       
       $scope.spanishMatch=data.matchday;
        
      for(var i=0;i<data.standing.length;i++){
          $scope.standingSpanish.push(data.standing[i]);
      }
       

        });
     //---------------------------------------------------
    $http.get('http://api.football-data.org/v1/soccerseasons/401/leagueTable').
        success(function(data) {
       
       $scope.italianMatch=data.matchday;
    
       

        });
        //---------------------------------------------------
    $http.get('http://api.football-data.org/v1/soccerseasons/401/leagueTable').
        success(function(data) {
       
       $scope.portugalMatch=data.matchday;
    
       

        });
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    $scope.myDataSource = {
    chart: {
        caption: "Harry's SuperMart",
        subCaption: "Top 5 stores in last month by revenue",
        numberPrefix: "$",
        theme: "ocean"
    },
    data:[{
        label: "Bakersfield Central",
        value: "880000"
    },
    {
        label: "Garden Groove harbour",
        value: "730000"
    },
    {
        label: "Los Angeles Topanga",
        value: "590000"
    },
    {
        label: "Compton-Rancho Dom",
        value: "520000"
    },
    {
        label: "Daly City Serramonte",
        value: "330000"
    }]
};
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
});