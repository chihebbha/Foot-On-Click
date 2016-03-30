angular.module('footApplication.controllers', [])

.controller('BetInFicheParis',function($scope){
    

  
    
     $scope.fiche=[];
$scope.addBetInFiche=function(equipe1,equipe2,cote,equipeParis,rangBet){
if(rangBet==1) 
    
    $scope.betted=true;
   
    if(rangBet==2)    
      $scope.betted1=true;
   
    if(rangBet==3)    
      $scope.betted2=true;
    
    if(rangBet=="match1")
        $scope.match1=true;
    
    if(rangBet=="match2")
        $scope.match2=true;
    
    var paris={};
    paris.equipe1=equipe1;
    paris.equipe2=equipe2;
    paris.cote=cote;
    paris.equipeParis=equipeParis;
    $scope.fiche.push(paris);
    $scope.coteTotal=1;
    for(var i=0;i<$scope.fiche.length;i++){
      $scope.coteTotal=$scope.coteTotal* $scope.fiche[i].cote;
        
          a = 'match'+i;
str = a+' = '+i;
eval(str);  
console.log(a);
        
    }
    
    
} ;  
    
    
})


.controller("GetAllBetItalia",function($scope,AllBet,$http){
  $scope.italianMatch=[];
    $scope.spanishMatch=[];
    $scope.championsLeague=[];
    $scope.portugalLigue=[];
    $scope.premierLigue=[];
    $scope.frenshMatch=[];
    $scope.deutchMatch=[];
    $scope.NextspanishMatch=[];
    $scope.others=[];
    $scope.teams=[];
     $http.defaults.headers.common['X-Auth-Token'] = '6903147d81d64f048cf2c8117ac49b70';
    
    $http.get('http://api.football-data.org/v1/soccerseasons/401/fixtures').
        success(function(data) {
        var dt=new Date();
        var dtdt= dt.toString().substring(0,15);
      
        for(var i=0;i<data.fixtures.length;i++)
            { var ddt=new Date(data.fixtures[i].date);
             var dd=ddt.toString().substring(0,15);
            if(dtdt==dd){
            $scope.italianMatch.push(data.fixtures[i]);
                }
             
             
            }
        });
    
    
    
    
    
    
      $http.get('http://api.football-data.org/v1/soccerseasons/400/fixtures').
        success(function(data) {
        var dt=new Date();
        var dtdt= dt.toString().substring(0,15);
          
          var dt1 = new Date();
          dt1.setDate(dt1.getDate() + 2);
          
          
             
        var dtdt1= dt1.toString().substring(0,15);
      
        for(var i=0;i<data.fixtures.length;i++)
            { var ddt=new Date(data.fixtures[i].date);
             var dd=ddt.toString().substring(0,15);
            if(dtdt==dd){
            $scope.spanishMatch.push(data.fixtures[i]);
                }
             if(dtdt1==dd)
                 {$scope.NextspanishMatch.push(data.fixtures[i]);}
                       
            }
       

        });
    
    
     $http.get('http://api.football-data.org/v1/soccerseasons/394/fixtures').
        success(function(data) {
        var dt=new Date();
        var dtdt= dt.toString().substring(0,15);
      
        for(var i=0;i<data.fixtures.length;i++)
            { var ddt=new Date(data.fixtures[i].date);
             var dd=ddt.toString().substring(0,15);
            if(dtdt==dd){
            $scope.deutchMatch.push(data.fixtures[i]);
                }
                       
            }
       

        });
    
      $http.get('http://api.football-data.org/v1/soccerseasons/396/fixtures').
        success(function(data) {
        var dt=new Date();
        var dtdt= dt.toString().substring(0,15);
      
        for(var i=0;i<data.fixtures.length;i++)
            { var ddt=new Date(data.fixtures[i].date);
             var dd=ddt.toString().substring(0,15);
            if(dtdt==dd){
            $scope.frenshMatch.push(data.fixtures[i]);
                }
                       
            }
       

        });
    
     $http.get('http://api.football-data.org/v1/soccerseasons/398/fixtures').
        success(function(data) {
        var dt=new Date();
        var dtdt= dt.toString().substring(0,15);
      
        for(var i=0;i<data.fixtures.length;i++)
            { var ddt=new Date(data.fixtures[i].date);
             var dd=ddt.toString().substring(0,15);
            if(dtdt==dd){
            $scope.premierLigue.push(data.fixtures[i]);
                }
                       
            }
       

        });
    

    
     $http.get('http://api.football-data.org/v1/soccerseasons/402/fixtures').
        success(function(data) {
        var dt=new Date();
        var dtdt= dt.toString().substring(0,15);
      
        for(var i=0;i<data.fixtures.length;i++)
            { var ddt=new Date(data.fixtures[i].date);
             var dd=ddt.toString().substring(0,15);
            if(dtdt==dd){
            $scope.portugalLigue.push(data.fixtures[i]);
                }
                       
            }
       

        });
    
      $http.get('http://api.football-data.org/v1/soccerseasons/405/fixtures').
        success(function(data) {
        var dt=new Date();
        var dtdt= dt.toString().substring(0,15);
      
      
        for(var i=0;i<data.fixtures.length;i++)
            { var ddt=new Date(data.fixtures[i].date);
             var dd=ddt.toString().substring(0,15);
            if(dtdt==dd){
            $scope.championsLeague.push(data.fixtures[i]);
                }
                       
            }
       

        });
    
    
    
    
    
    
    
    
  
    
    $scope.getImageEquipe=function(path){
            $http.get(path).
        success(function(data) {
     
      
      $scope.img=data.crestUrl;
       

        });
        
       
    };
    
    
       $http.get('http://localhost:3000/teams').success(function(data) {
        
     
        for(var i=0;i<data.length;i++)
            { 
                 
            $scope.teams.push(data[i]);
              console.log("gg"); 
            }
       

        });
    $scope.showTeam=function(team){
      for(var i=0;i<$scope.teams.length;i++)
            { 
                if($scope.teams[i].name==team){
                    console.log(team);
                    
            console.log($scope.teams[i]);
                    return $scope.teams[i].crestUrl;
                break;}
            }
        
    };
    
    
      
    //$scope.prochainMatch=$scope.greeting;
   
 /*  $scope.bets=[];
    $scope.chiheb="kkkkk";
    
    $scope.bets=AllBet.query();
*/
/*
   var req = {
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
}*/



    
})



.controller("GetAllBetPast",function($scope,AllBet,$http){
  $scope.italianMatchPast=[];
    $scope.spanishMatchPast=[];
    $scope.championsLeaguePast=[];
    $scope.portugalLiguePast=[];
    $scope.premierLiguePast=[];
    $scope.frenshMatchPast=[];
    $scope.deutchMatchPast=[];
    $scope.NextspanishMatchPast=[];
    $scope.othersPast=[];
  
     $http.defaults.headers.common['X-Auth-Token'] = '6903147d81d64f048cf2c8117ac49b70';
    
  $http.get('http://api.football-data.org/v1/soccerseasons/401/fixtures?timeFrame=p10').
        success(function(data) {
      
      
        for(var i=0;i<data.fixtures.length;i++)
            {
            $scope.italianMatchPast.push(data.fixtures[i]);

            }
        });
    
    
     $http.get('http://api.football-data.org/v1/soccerseasons/400/fixtures?timeFrame=p10').
        success(function(data) {
      
      
        for(var i=0;i<data.fixtures.length;i++)
            {
            $scope.spanishMatchPast.push(data.fixtures[i]);

            }
        });
    
    
       $http.get('http://api.football-data.org/v1/soccerseasons/405/fixtures?timeFrame=p10').
        success(function(data) {
      
      
        for(var i=0;i<data.fixtures.length;i++)
            {
            $scope.championsLeaguePast.push(data.fixtures[i]);

            }
        });
    
      $http.get('http://api.football-data.org/v1/soccerseasons/402/fixtures?timeFrame=p10').
        success(function(data) {
      
      
        for(var i=0;i<data.fixtures.length;i++)
            {
            $scope.portugalLiguePast.push(data.fixtures[i]);

            }
        });
    
    
       $http.get('http://api.football-data.org/v1/soccerseasons/398/fixtures?timeFrame=p10').
        success(function(data) {
      
      
        for(var i=0;i<data.fixtures.length;i++)
            {
            $scope.premierLiguePast.push(data.fixtures[i]);

            }
        });
    
    
    
    
       $http.get('http://api.football-data.org/v1/soccerseasons/396/fixtures?timeFrame=p10').
        success(function(data) {
      
      
        for(var i=0;i<data.fixtures.length;i++)
            {
            $scope.frenshMatchPast.push(data.fixtures[i]);

            }
        });
    
    
    
        $http.get('http://api.football-data.org/v1/soccerseasons/394/fixtures?timeFrame=p10').
        success(function(data) {
      
      
        for(var i=0;i<data.fixtures.length;i++)
            {
            $scope.deutchMatchPast.push(data.fixtures[i]);

            }
        });


});