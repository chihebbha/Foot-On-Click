var express = require('express');
var router = express.Router();
var app = express();
var request=require('request');
var mLab = require('mongolab-data-api')('uvxRwGeN6nKy9oQt5hg7yKYLltgGAbyN');
var teams="";
router.get('/teams',function(req,res){
  mLab.listDocuments({
    database: 'footonclick',
    collectionName: 'teams'
    //query:"code":"Watfordfc"
    //findOne:true,
    //limit:2

  },function(err,data){
   // console.log(data);
res.json(data);
  });


//  res.redirect('/saveTeam');


});

//-------------------------------------------------------------------------------
router.get('/deleteTeam',function(req,res){
 mLab.deleteDocuments({
   database: 'footonclick',
   collectionName: 'teams'

 },function(req,res){console.log("delete avec succee");});


  res.redirect('/saveTeam');


});



//-----------------------------------------------------------------------------------------------
router.get('/saveTeam',function(req,res){
  request({headers:{
    'X-Auth-Token':'6903147d81d64f048cf2c8117ac49b70'
  },
    'uri':'http://api.football-data.org/v1/soccerseasons/394/teams'}, function (err, data){
    var  flux=JSON.stringify(JSON.parse(data.body));
    teams=JSON.parse(flux).teams;


    mLab.insertDocuments({
      database: 'footonclick',
      collectionName: 'teams',
      documents: teams
    },function(req,res){console.log("ajput avec succee");});

    res.redirect('/saveTeamBL2');
  });

});


//--------------------------------------------------------------------------------------------------
router.get('/saveTeamBL2',function(req,res){
  request({headers:{
    'X-Auth-Token':'6903147d81d64f048cf2c8117ac49b70'
  },
    'uri':'http://api.football-data.org/v1/soccerseasons/395/teams'}, function (err, data){
    var  flux=JSON.stringify(JSON.parse(data.body));
    teams=JSON.parse(flux).teams;


    mLab.insertDocuments({
      database: 'footonclick',
      collectionName: 'teams',
      documents: teams
    },function(req,res){console.log("ajput avec succee BL1");});

    res.redirect('/saveTeamFL1');
  });

});
//--------------------------------------------------------------------------------------------------
router.get('/saveTeamFL1',function(req,res){
  request({headers:{
    'X-Auth-Token':'6903147d81d64f048cf2c8117ac49b70'
  },
    'uri':'http://api.football-data.org/v1/soccerseasons/396/teams'}, function (err, data){
    var  flux=JSON.stringify(JSON.parse(data.body));
    teams=JSON.parse(flux).teams;


    mLab.insertDocuments({
      database: 'footonclick',
      collectionName: 'teams',
      documents: teams
    },function(req,res){console.log("ajput avec succee FL1");});

    res.redirect('/saveTeamFL2');
  });

});
//--------------------------------------------------------------------------------------------------
router.get('/saveTeamFL2',function(req,res){
  request({headers:{
    'X-Auth-Token':'6903147d81d64f048cf2c8117ac49b70'
  },
    'uri':'http://api.football-data.org/v1/soccerseasons/397/teams'}, function (err, data){
    var  flux=JSON.stringify(JSON.parse(data.body));
    teams=JSON.parse(flux).teams;


    mLab.insertDocuments({
      database: 'footonclick',
      collectionName: 'teams',
      documents: teams
    },function(req,res){console.log("ajput avec succee FL2");});

    res.redirect('/saveTeamPL');
  });

});
//--------------------------------------------------------------------------------------------------
router.get('/saveTeamPL',function(req,res){
  request({headers:{
    'X-Auth-Token':'6903147d81d64f048cf2c8117ac49b70'
  },
    'uri':'http://api.football-data.org/v1/soccerseasons/398/teams'}, function (err, data){
    var  flux=JSON.stringify(JSON.parse(data.body));
    teams=JSON.parse(flux).teams;


    mLab.insertDocuments({
      database: 'footonclick',
      collectionName: 'teams',
      documents: teams
    },function(req,res){console.log("ajput avec succee PL");});

    res.redirect('/saveTeamPD');
  });

});

//--------------------------------------------------------------------------------------------------
router.get('/saveTeamPD',function(req,res){
  request({headers:{
    'X-Auth-Token':'6903147d81d64f048cf2c8117ac49b70'
  },
    'uri':'http://api.football-data.org/v1/soccerseasons/399/teams'}, function (err, data){
    var  flux=JSON.stringify(JSON.parse(data.body));
    teams=JSON.parse(flux).teams;


    mLab.insertDocuments({
      database: 'footonclick',
      collectionName: 'teams',
      documents: teams
    },function(req,res){console.log("ajput avec succee PD");});

    res.redirect('/saveTeamSD');
  });

});
//--------------------------------------------------------------------------------------------------
router.get('/saveTeamSD',function(req,res){
  request({headers:{
    'X-Auth-Token':'6903147d81d64f048cf2c8117ac49b70'
  },
    'uri':'http://api.football-data.org/v1/soccerseasons/400/teams'}, function (err, data){
    var  flux=JSON.stringify(JSON.parse(data.body));
    teams=JSON.parse(flux).teams;


    mLab.insertDocuments({
      database: 'footonclick',
      collectionName: 'teams',
      documents: teams
    },function(req,res){console.log("ajput avec succee SD");});

    res.redirect('/saveTeamSA');
  });

});
//--------------------------------------------------------------------------------------------------
router.get('/saveTeamSA',function(req,res){
  request({headers:{
    'X-Auth-Token':'6903147d81d64f048cf2c8117ac49b70'
  },
    'uri':'http://api.football-data.org/v1/soccerseasons/401/teams'}, function (err, data){
    var  flux=JSON.stringify(JSON.parse(data.body));
    teams=JSON.parse(flux).teams;


    mLab.insertDocuments({
      database: 'footonclick',
      collectionName: 'teams',
      documents: teams
    },function(req,res){console.log("ajput avec succee SA");});

    res.redirect('/saveTeamPPL');
  });

});

//--------------------------------------------------------------------------------------------------
router.get('/saveTeamPPL',function(req,res){
  request({headers:{
    'X-Auth-Token':'6903147d81d64f048cf2c8117ac49b70'
  },
    'uri':'http://api.football-data.org/v1/soccerseasons/402/teams'}, function (err, data){
    var  flux=JSON.stringify(JSON.parse(data.body));
    teams=JSON.parse(flux).teams;


    mLab.insertDocuments({
      database: 'footonclick',
      collectionName: 'teams',
      documents: teams
    },function(req,res){console.log("ajput avec succee PPL");});

    res.redirect('/saveTeamBL3');
  });

});

//--------------------------------------------------------------------------------------------------
router.get('/saveTeamBL3',function(req,res){
  request({headers:{
    'X-Auth-Token':'6903147d81d64f048cf2c8117ac49b70'
  },
    'uri':'http://api.football-data.org/v1/soccerseasons/403/teams'}, function (err, data){
    var  flux=JSON.stringify(JSON.parse(data.body));
    teams=JSON.parse(flux).teams;


    mLab.insertDocuments({
      database: 'footonclick',
      collectionName: 'teams',
      documents: teams
    },function(req,res){console.log("ajput avec succee BL3");});

    res.redirect('/saveTeamDED');
  });

});
//--------------------------------------------------------------------------------------------------
router.get('/saveTeamDED',function(req,res){
  request({headers:{
    'X-Auth-Token':'6903147d81d64f048cf2c8117ac49b70'
  },
    'uri':'http://api.football-data.org/v1/soccerseasons/404/teams'}, function (err, data){
    var  flux=JSON.stringify(JSON.parse(data.body));
    teams=JSON.parse(flux).teams;


    mLab.insertDocuments({
      database: 'footonclick',
      collectionName: 'teams',
      documents: teams
    },function(req,res){console.log("ajput avec succee DED");});

    res.redirect('/saveTeamCL');
  });

});

//--------------------------------------------------------------------------------------------------
router.get('/saveTeamCL',function(req,res){
  request({headers:{
    'X-Auth-Token':'6903147d81d64f048cf2c8117ac49b70'
  },
    'uri':'http://api.football-data.org/v1/soccerseasons/405/teams'}, function (err, data){
    var  flux=JSON.stringify(JSON.parse(data.body));
    teams=JSON.parse(flux).teams;


    mLab.insertDocuments({
      database: 'footonclick',
      collectionName: 'teams',
      documents: teams
    },function(req,res){console.log("ajput avec succee CL");});

    res.redirect('/saveTeamEL1');
  });

});
//--------------------------------------------------------------------------------------------------
router.get('/saveTeamEL1',function(req,res){
  request({headers:{
    'X-Auth-Token':'6903147d81d64f048cf2c8117ac49b70'
  },
    'uri':'http://api.football-data.org/v1/soccerseasons/425/teams'}, function (err, data){
    var  flux=JSON.stringify(JSON.parse(data.body));
    teams=JSON.parse(flux).teams;


    mLab.insertDocuments({
      database: 'footonclick',
      collectionName: 'teams',
      documents: teams
    },function(req,res){console.log("ajput avec succee EL1");});

    res.redirect('/');
  });

});



//--------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


// Load the library
var webAnalyst = require('web-analyst');
// Initialize with options
webAnalyst.init({
  ignoreIPs: ['192.168.x.x'],
  ignoreRoutes: ['/stats','favicon'],
  ignoreExtensions: ['.map'],
  dataDir: './'
});

// Start the engine
app.use(webAnalyst.track());

// Analytics will be available at: http://yoursite.com/stats
// Note that you might want to provide some sort of authentication
// in order for this page to be available only by you.
router.get('/stats', webAnalyst.render());
// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

module.exports = router;
