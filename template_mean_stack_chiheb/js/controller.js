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


.controller("GetAllBetItalia",function($scope,AllBet,$http,$timeout,$q,dataService){
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
    $scope.cotes=[];
    $scope.data1="";
    var roundDecimal=function (nombre, precision){
    var precision = precision || 2;
    var tmp = Math.pow(10, precision);
    return Math.round( nombre*tmp )/tmp;
}
    
     $http.defaults.headers.common['X-Auth-Token'] = '6903147d81d64f048cf2c8117ac49b70';
    
  $scope.getCote1=  function (link) {
      var objet;
      dataService.getData(link).then(function(dataResponse) {
          
var cote2=1+(1+dataResponse.data.head2head.homeTeamWins)/(1+dataResponse.data.head2head.awayTeamWins);
          
var cote1=1+(1+dataResponse.data.head2head.awayTeamWins)/(1+dataResponse.data.head2head.homeTeamWins) ;
          
    var diff1=dataResponse.data.fixture.result.goalsHomeTeam - dataResponse.data.fixture.result.goalsAwayTeam;
          if(diff1<0){
              cote1=cote1*1.2;
              cote2=cote2*0.8;
              if(cote2<=1){
                  cote2=1.15;
              }
              
          }
          if(diff1>0){
              cote2=cote1*1.2;
              cote1=cote2*0.8;
              if(cote1<=1){
                  cote1=1.15;
              }
              
          }
       
           objet={
             "equipe2":Math.round(cote2*100)/100,
             "equipe1":Math.round(cote1*100)/100,
            "draw":Math.round(Math.round((cote1+cote2)*100)/200), "match":dataResponse.data.fixture._links.self.href
                   };
          //console.log(objet);
          $scope.cotes.push(objet);
         
           
          
    });
     
      
      

    
  }
    
//  $scope.getCote1=  function (link) {
//      
//   $http.get(link).success(function(data){
//       $scope.data1=data
//     var  array = [5,6,3,2] ;
// ( function()
//   {
//         
//            $scope.result = array ; 
//            console.log(array); 
//        }
// )
//      
//         ()                  
//    console.log($scope.data1);
//       
//     });
//        
//     
//         
//    
//
//}
  
  
    
//     $scope.getCote1=function(link){
//         var defer = $q.defer();
//             $http.get(link).
//        success(function(data) {
//            defer.resolve(22);
//             // $scope.data1=data.data.head2head.homeTeamWins;
//                 
//             $timeout(function() {
//                  
//            console.log(defer.promise.$$state.value);
//             
//    },1000);
//                   return defer.promise.$$state.value;
//        });
//             
//        return {
//    getCote1: $scope.getCote1
//  };
//        
//        
//     
//     
//     };
    
    
    
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
            }
       

        });
    $scope.showTeam=function(team){
      for(var i=0;i<$scope.teams.length;i++)
            { 
                if($scope.teams[i].name==team){
                   
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


})










.controller('classementCTRL',function($scope,$http){
    
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
       
       for(var i=0;i<data.standing.length;i++){
          $scope.standingdeutch.push(data.standing[i]);
      }
  
        });
    
    //---------------------------------------------------
    $http.get('http://api.football-data.org/v1/soccerseasons/396/leagueTable').
        success(function(data) {
       
       for(var i=0;i<data.standing.length;i++){
          $scope.standingfrensh.push(data.standing[i]);
      }
    
       

        });
    
     //---------------------------------------------------
    $http.get('http://api.football-data.org/v1/soccerseasons/398/leagueTable').
        success(function(data) {
       
       for(var i=0;i<data.standing.length;i++){
          $scope.standingenglish.push(data.standing[i]);
      }
    
       

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
       
      for(var i=0;i<data.standing.length;i++){
          $scope.standingitalian.push(data.standing[i]);
      }
    
       

        });
        //---------------------------------------------------
    $http.get('http://api.football-data.org/v1/soccerseasons/401/leagueTable').
        success(function(data) {
       
       for(var i=0;i<data.standing.length;i++){
          $scope.standingPortugal.push(data.standing[i]);
      }
    
       

        });
    
    
})
    
    
.controller('instagramController', function($scope,$http) {

        $http.get('http://localhost:3000/users/tag_media').
        success(function(data) {


            //$scope.insta=angular.fromJson(data);
           $scope.insta=data;
        });

        //$scope.fbs=fb.query();
    

    })
//----- work cyrine reservation------////

    .controller('reservationPlaController', function($scope,$http) {
console.log("ghc");
       // $http.post('http://localhost:3000/reservation').
        //success(function(data) {
//$scope.reserv=angular.fromJson(data);
          
       
        
        
        var config = {
                headers : {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
                }
            }

            $http.post('http://localhost:3000/reservation',{"date_match": 1460481185540,
    "position": 5 }, config)
            .success(function (data, status, headers, config) {
               $scope.reserv=angular.fromJson(data);
            })
            .error(function (data, status, header, config) {
                $scope.ResponseDetails = "Data: " + data +
                    "<hr />status: " + status +
                    "<hr />headers: " + header +
                    "<hr />config: " + config;
            });
        })

    

//----- work cyrine weather-------////

.controller('weatherController', function($scope,$http) {

        $http.get('http://localhost:3000/weather').
        success(function(data) {


            $scope.weath=data;
        });

        //$scope.fbs=fb.query();

    })

//----- work cyrine instagram-------////

    
    //----- work raja Actuality-------////

    .controller('FbActuality', function($scope,$http) {

        $http.get('http://localhost:3000/fb/data').
        success(function(data) {


            $scope.fbs=data;
        });

        //$scope.fbs=fb.query();

    })








.controller('ReclamationCtrl', function($scope,$http) {
   
    $scope.recalmmer=function(c){
        var aa={objet:"anobjet",message:"amessage"};
        $http.post('http://localhost:3000/claim', aa)
           ;

        };
    })
    
        //end work raja
    
   ;

//----- End work cyrrine instagram-------////