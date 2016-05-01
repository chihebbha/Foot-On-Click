    angular.module('footApplication.controllers', ['ngMap'])

.controller('BetInFicheParis',function($scope){
    
var datetawa=new Date();
         $scope.date0=new Date();
          $scope.date1=datetawa.setDate(datetawa.getDate()+1);
       
      
        
  
        
    
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
        $scope.italianMatch1=[];
      
    $scope.spanishMatch=[];
        $scope.spanishMatch1=[];

    $scope.championsLeague=[];
        $scope.championsLeague1=[];
 
    $scope.portugalLigue=[];
        $scope.portugalLigue1=[];

    $scope.premierLigue=[];
        $scope.premierLigue1=[];

    $scope.frenshMatch=[];
        $scope.frenshMatch1=[];

    $scope.deutchMatch=[];
        $scope.deutchMatch1=[];

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
    

    
    
    
    $http.get('http://api.football-data.org/v1/soccerseasons/401/fixtures?timeFrame=n1').
        success(function(data) {
   
      
        for(var i=0;i<data.fixtures.length;i++)
            { 
 
            $scope.italianMatch.push(data.fixtures[i]);

            }
        });
        
          $http.get('http://api.football-data.org/v1/soccerseasons/401/fixtures?timeFrame=n2').
        success(function(data) {
        var dt=new Date();
       
        
        var dtdt= dt.toString().substring(0,15);
      
        for(var i=0;i<data.fixtures.length;i++)
            { var ddt=new Date(data.fixtures[i].date);
             var dd=ddt.toString().substring(0,15);
            if(dtdt!=dd){
            $scope.italianMatch1.push(data.fixtures[i]);
                }
             
             
            }
        });
    
    
    
    
    
    
      $http.get('http://api.football-data.org/v1/soccerseasons/400/fixtures?timeFrame=n1').
        success(function(data) {

        for(var i=0;i<data.fixtures.length;i++)
            { 
            $scope.spanishMatch.push(data.fixtures[i]);          
            }
        });
        
           $http.get('http://api.football-data.org/v1/soccerseasons/400/fixtures?timeFrame=n2').
        success(function(data) {
        var dt=new Date();
        var dtdt= dt.toString().substring(0,15);
      
        for(var i=0;i<data.fixtures.length;i++)
            { var ddt=new Date(data.fixtures[i].date);
             var dd=ddt.toString().substring(0,15);
            if(dtdt!=dd){
            $scope.spanishMatch1.push(data.fixtures[i]);
                }
           
                       
            }
       

        });
        
        
    
    
     $http.get('http://api.football-data.org/v1/soccerseasons/394/fixturesfixtures?timeFrame=n1').
        success(function(data) {
      
      
        for(var i=0;i<data.fixtures.length;i++)
            { 
            $scope.deutchMatch.push(data.fixtures[i]);             
            }
       

        });
         $http.get('http://api.football-data.org/v1/soccerseasons/394/fixtures?timeFrame=n2').
        success(function(data) {
        var dt=new Date();
        var dtdt= dt.toString().substring(0,15);
      
        for(var i=0;i<data.fixtures.length;i++)
            { var ddt=new Date(data.fixtures[i].date);
             var dd=ddt.toString().substring(0,15);
            if(dtdt!=dd){
            $scope.deutchMatch1.push(data.fixtures[i]);
                }
                       
            }
       

        });
    
    
      $http.get('http://api.football-data.org/v1/soccerseasons/396/fixtures?timeFrame=n1').
        success(function(data) {

        for(var i=0;i<data.fixtures.length;i++)
            { 
            $scope.frenshMatch.push(data.fixtures[i]);
     
            }
       

        });
           $http.get('http://api.football-data.org/v1/soccerseasons/396/fixtures?timeFrame=n2').
        success(function(data) {
        var dt=new Date();
        var dtdt= dt.toString().substring(0,15);
      
        for(var i=0;i<data.fixtures.length;i++)
            { var ddt=new Date(data.fixtures[i].date);
             var dd=ddt.toString().substring(0,15);
            if(dtdt!=dd){
            $scope.frenshMatch1.push(data.fixtures[i]);
                }
                       
            }
       

        });
    
     $http.get('http://api.football-data.org/v1/soccerseasons/398/fixtures?timeFrame=n1').
        success(function(data) {
    
        for(var i=0;i<data.fixtures.length;i++)
            { 
          
            $scope.premierLigue.push(data.fixtures[i]);
    
            }
       

        });
        
         $http.get('http://api.football-data.org/v1/soccerseasons/398/fixtures?timeFrame=n2').
        success(function(data) {
        var dt=new Date();
        var dtdt= dt.toString().substring(0,15);
      
        for(var i=0;i<data.fixtures.length;i++)
            { var ddt=new Date(data.fixtures[i].date);
             var dd=ddt.toString().substring(0,15);
            if(dtdt!=dd){
            $scope.premierLigue1.push(data.fixtures[i]);
                }
                       
            }
       

        });
    

    
     $http.get('http://api.football-data.org/v1/soccerseasons/402/fixtures?timeFrame=n1').
        success(function(data) {

        for(var i=0;i<data.fixtures.length;i++)
            {

            $scope.portugalLigue.push(data.fixtures[i]);
      
            }
        });
          $http.get('http://api.football-data.org/v1/soccerseasons/402/fixtures?timeFrame=n2').
        success(function(data) {
        var dt=new Date();
        var dtdt= dt.toString().substring(0,15);
      
        for(var i=0;i<data.fixtures.length;i++)
            { var ddt=new Date(data.fixtures[i].date);
             var dd=ddt.toString().substring(0,15);
            if(dtdt!=dd){
            $scope.portugalLigue1.push(data.fixtures[i]);
                }
                       
            }
       

        });
        
    
      $http.get('http://api.football-data.org/v1/soccerseasons/405/fixtures?timeFrame=n1').
        success(function(data) {

        for(var i=0;i<data.fixtures.length;i++)
            { 

            $scope.championsLeague.push(data.fixtures[i]);
         
            }
        });
            $http.get('http://api.football-data.org/v1/soccerseasons/405/fixtures?timeFrame=n2').
        success(function(data) {
        var dt=new Date();
        var dtdt= dt.toString().substring(0,15);
      
      
        for(var i=0;i<data.fixtures.length;i++)
            { var ddt=new Date(data.fixtures[i].date);
             var dd=ddt.toString().substring(0,15);
            if(dtdt!=dd){
            $scope.championsLeague1.push(data.fixtures[i]);
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
    
    
    //-------- statistics --------------
    
    .controller('statistics',function($scope,$http){

    
         $http.defaults.headers.common['X-Auth-Token'] = '6903147d81d64f048cf2c8117ac49b70';
    $scope.allbuts=0;
    
    
$http.get('http://api.football-data.org/v1/soccerseasons/394/fixtures?timeFrame=p6').
        success(function(data) {
    var buts=0;
    for(var i=0;i<data.fixtures.length;i++){
        buts=buts+data.fixtures[i].result.goalsHomeTeam+data.fixtures[i].result.goalsAwayTeam;
    }
       $scope.deutchMatch=buts;
    $scope.allbuts=$scope.allbuts+buts;
  

        });
    
    //---------------------------------------------------
    $http.get('http://api.football-data.org/v1/soccerseasons/396/fixtures?timeFrame=p6').
        success(function(data) {
         var buts=0;
    for(var i=0;i<data.fixtures.length;i++){
        buts=buts+data.fixtures[i].result.goalsHomeTeam+data.fixtures[i].result.goalsAwayTeam;
    }
       $scope.frenshMatch=buts;
    
           $scope.allbuts=$scope.allbuts+buts;


        });
    
     //---------------------------------------------------
    $http.get('http://api.football-data.org/v1/soccerseasons/398/fixtures?timeFrame=p6').
        success(function(data) {
         var buts=0;
    for(var i=0;i<data.fixtures.length;i++){
        buts=buts+data.fixtures[i].result.goalsHomeTeam+data.fixtures[i].result.goalsAwayTeam;
    }
       $scope.englishMatch=buts;
        $scope.allbuts=$scope.allbuts+buts;

       

        });
     //---------------------------------------------------
    $http.get('http://api.football-data.org/v1/soccerseasons/399/fixtures?timeFrame=p6').
        success(function(data) {
         var buts=0;
    for(var i=0;i<data.fixtures.length;i++){
        buts=buts+data.fixtures[i].result.goalsHomeTeam+data.fixtures[i].result.goalsAwayTeam;
    }
       $scope.spanishMatch=buts;
        
         $scope.allbuts=$scope.allbuts+buts;

       

        });
     //---------------------------------------------------
    $http.get('http://api.football-data.org/v1/soccerseasons/401/fixtures?timeFrame=p6').
        success(function(data) {
         var buts=0;
    for(var i=0;i<data.fixtures.length;i++){
        buts=buts+data.fixtures[i].result.goalsHomeTeam+data.fixtures[i].result.goalsAwayTeam;
    }
       $scope.italianMatch=buts;
    
           $scope.allbuts=$scope.allbuts+buts;


        });
        //---------------------------------------------------
    $http.get('http://api.football-data.org/v1/soccerseasons/401/fixtures?timeFrame=p6').
        success(function(data) {
         var buts=0;
    for(var i=0;i<data.fixtures.length;i++){
        buts=buts+data.fixtures[i].result.goalsHomeTeam+data.fixtures[i].result.goalsAwayTeam;
    }
       $scope.portugalMatch=buts;
    
           $scope.allbuts=$scope.allbuts+buts;


        });
    
    
    
})
    
  //------------- end statistics -----------  
    
    //----- work cyrine instagram-------////
    
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
        
        
        
        
        
        
        $scope.reserver1 = function ()
        {
            $scope.reservation1= true ;
             $http.get('http://localhost:3000/reservation/AttaqueDroite12').
        success(function(data) {
            $scope.weath=data;
        });   
            
                     $http.get('http://localhost:3000/reservation/user').
        success(function(data) {
            $scope.users=data;
        }); 
        }
        
        
         $scope.reserver2 = function ()
        {
            $scope.reservation2= true ;
             // $scope.reservation3= false ;
               $http.get('http://localhost:3000/reservation/AttaqueDroite22').
        success(function(data) {
            $scope.weath=data;
        });     
                $http.get('http://localhost:3000/reservation/user').
        success(function(data) {
            $scope.users=data;
        }); 
        }
         
         
         
          $scope.reserver3 = function ()
        {
            $scope.reservation3= true ;
                $http.get('http://localhost:3000/reservation/Defance1').
        success(function(data) {
            $scope.weath=data;
        });
                 $http.get('http://localhost:3000/reservation/user').
        success(function(data) {
            $scope.users=data;
        }); 
        }
          
          
          
          
          
          
          
           $scope.reserver4 = function ()
        {
            $scope.reservation4= true ;
                 $http.get('http://localhost:3000/reservation/gardien2').
        success(function(data) {
            $scope.weath=data;
        });
                  $http.get('http://localhost:3000/reservation/user').
        success(function(data) {
            $scope.users=data;
        }); 
        }
           
           
            $scope.reserver5 = function ()
        {
            $scope.reservation5= true ;
                  $http.get('http://localhost:3000/reservation/Defance2').
        success(function(data) {
            $scope.weath=data;
        });
                   $http.get('http://localhost:3000/reservation/user').
        success(function(data) {
            $scope.users=data;
        }); 
        }
            
            
            
             $scope.reserver6 = function ()
        {
            $scope.reservation6= true ;
                   $http.get('http://localhost:3000/reservation/AttaqueDroite11').
        success(function(data) {
            $scope.weath=data;
        });    
                 
                   $http.get('http://localhost:3000/reservation/user').
        success(function(data) {
            $scope.users=data;
        });      
                 
        }
             
             
              $scope.reserver8 = function ()
        {
            $scope.reservation8= true ;  
                  $http.get('http://localhost:3000/reservation/AttaqueDroite12s').
        success(function(data) {
            $scope.weath=data;
        }); 
                  
                     $http.get('http://localhost:3000/reservation/user').
        success(function(data) {
            $scope.users=data;
        }); 
                  
                  
        }
              
              
              
               $scope.reserver9 = function ()
        {
            $scope.reservation9= true ; 
                   $http.get('http://localhost:3000/reservation/Defance2').
        success(function(data) {
            $scope.weath=data;
        });   
                      $http.get('http://localhost:3000/reservation/user').
        success(function(data) {
            $scope.users=data;
        }); 
        }
               
               
                $scope.reserver10 = function ()
        {
            $scope.reservation10= true ;  
                    $http.get('http://localhost:3000/reservation/Defance3').
        success(function(data) {
            $scope.weath=data;
        });  
                       $http.get('http://localhost:3000/reservation/user').
        success(function(data) {
            $scope.users=data;
        }); 
        }
                
                 $scope.reserver12 = function ()
        {
            $scope.reservation12= true ; 
                     $http.get('http://localhost:3000/reservation/Defance4').
        success(function(data) {
            $scope.weath=data;
        });
                     
                        $http.get('http://localhost:3000/reservation/user').
        success(function(data) {
            $scope.users=data;
        }); 
        }
                 
                 
                  $scope.reserver13 = function ()
        {
            $scope.reservation13= true ;  
                      $http.get('http://localhost:3000/reservation/Defance5').
        success(function(data) {
            $scope.weath=data;
        }); 
                         $http.get('http://localhost:3000/reservation/user').
        success(function(data) {
            $scope.users=data;
        }); 
        }
                  
         $scope.reserver11 = function ()
        {
            $scope.reservation11= true ;  
             $http.get('http://localhost:3000/reservation/gardien2').
        success(function(data) {
            $scope.weath=data;
        });   
             
                $http.get('http://localhost:3000/reservation/user').
        success(function(data) {
            $scope.users=data;
        }); 
        }
         
         
         $scope.inviter = function (id)
         {
         
                 $http.get('http://localhost:3000/reservation/inviter/'+id).
        success(function(data) {
            alert ("succ"); 
        });  
         
         }
         
         
         })
         


.controller('weatherController', function($scope,$http) {

        
        
        
        $http.get('http://localhost:3000/weather').
        success(function(data) {


            $scope.weath=data;
        });

        //$scope.fbs=fb.query();

    })

    
    
    
    
//----- work cyrine neslterr-------////

.controller('NewsletterController', function($scope,$http) {

        $http.get('http://localhost:3000/newslleter').
        success(function(data) {


            $scope.news=data;
        });



    })
    



    //cyrine map1 //
   

.controller('mapController', function($http, $interval, NgMap) {
  var vm = this;
  vm.positions = [
    [54.779951, 9.334164], [47.209613, 15.991539],
    [51.975343, 7.596731], [51.97539, 7.596962], 
    [47.414847, 8.23485], [47.658028, 9.159596],
    [47.525927, 7.68761], [50.85558, 9.704403],
    [54.320664, 10.285977], [49.214374, 6.97506],
    [52.975556, 7.596811], [52.975556, 7.596811],
    [52.975556, 7.596811], [52.975556, 7.596811], 
    [52.975556, 7.596811], [52.975556, 7.596811],
    [52.975556, 7.596811], [52.975556, 7.596811],
    [52.975556, 7.596811], [52.975556, 7.596811]];
    
    vm.dynMarkers = []
    NgMap.getMap().then(function(map) {
      var bounds = new google.maps.LatLngBounds();
      for (var k in map.customMarkers) {
        var cm = map.customMarkers[k];
        vm.dynMarkers.push(cm);
        bounds.extend(cm.getPosition());
      };
      
      vm.markerClusterer = new MarkerClusterer(map, vm.dynMarkers, {});
      map.setCenter(bounds.getCenter());
      map.fitBounds(bounds);  
   });
})
    ////
    
   
    ///cyruine map2///
    
    .controller('MyCtrl', function($interval, NgMap) {
        var map, i=0, interval, chats = document.querySelectorAll('#chats li');
        NgMap.getMap().then(function(evtMap) {
          map = evtMap;
          interval = $interval(talk, 2000);
        });
        var talk = function(){
          var el = chats[i];
          map.customMarkers.usa.setVisible(true);
          map.customMarkers.can.setVisible(true);
            map.customMarkers.tn.setVisible(false);
            map.customMarkers.fr.setVisible(false);
            map.customMarkers.Mex.setVisible(true);
          map.customMarkers[el.className].setContent(el.innerHTML);
          map.customMarkers[el.className].setVisible(true);
          map.customMarkers[el.className].draw();
          i++;
          (i >= chats.length) && $interval.cancel(interval);
        };
      })
    
    
    
    
    
    
    //----- work raja Actuality-------////

    .controller('FbActuality', function($scope,$http) {

        $http.get('http://localhost:3000/fb/data').
        success(function(data) {


            $scope.fbs=data;
        });

        //$scope.fbs=fb.query();

    })


    
    //--------------Raja Account-------

        .controller('AccountUserController', function($scope,$http) {

            $http.get('http://localhost:3000/bet/userB').
            success(function(data) {



                $scope.users=data;
            });

            //$scope.fbs=fb.query();

        })



        //---------end account-------


        //-----------Raja bet-----
        /*

        .controller('BetAfterMatch' , function ($scope , $http) {

            $http.get('http://api.football-data.org/v1/fixtures?timeFrame=p1').
                success(function(data){
                $scope.idMatch=[];

                for(var i=0;i<data.fixtures.length;i++)
                {
                    $scope.idMatch.push(data.fixtures[i].links.self.href);
                }

                    return idMatch ;
                    });


            $http.get('http://localhost:3000/bet/betF').
                success(function(data){
                $scope.MatchsId=[] ;
                for(var i=0 ; i<data.length;i++)
                {
                    $scope.MatchsId.push(data[i].matchs.id);

                }
                return MatchsId;

            });

            $scope.CompaireResults=function(MatchsId ,idMatch )
            {
                for(var i=0;i<$scope.MatchsId.length;i++)
                {
                    if($scope.MatchsId[i].matchs.id==idMatch)


                    {

                         if(idMatch.fixtures.result.goalsHomeTeam > idMatch.fixtures.result.goalsAwayTeam)






                        $scope.Solde=function(solde)
                        {
                            $http.get('http://localhost:3000/bet/userB').
                                success(function(data){
                                for (var i=0;i<data.length;i++)
                                {
                                    $scope.solde.push(data[i].solde);

                                }




                            })
                        }


                    }
                }

            };






        })



*/

        //-----------end bet------









        .controller('ReclamationCtrl', function($scope, $http) {
            $scope.recalmmer = function(c) {
                var aa = {
                    objet: "anobjet",
                    message: "amessage"
                };
                $http.post('http://localhost:3000/claim', aa);
            };
            $http.get('http://localhost:3000/testtwilio').success(function(data, status) {
                console.log(data);
            });
        })
    
        //end work raja
    
   ;

