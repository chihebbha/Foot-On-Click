var express = require('express');
var http = require('http');
var router = express.Router();
// instagram
var ig = require('instagram-node').instagram();
//weather  
var we = require('weather-js') ; 

//user_id hamdi : 278199704
ig.use({ client_id: '88092373fad24e649152152430554170',
         client_secret: '71bfc26f83124a668792c029b6a2ad96' });
ig.use({ access_token: '224236382.1677ed0.7ce35479a1ab4a678a43ef3c5c6fe637' });

/* Les medias populaires */
router.get('/', function(req, res, next) {
    ig.media_popular(function(err, medias, remaining, limit) {
        //res.json('instagram/popular.twig',{"pop":medias})
    res.json(medias);
});

});

/* Les photos que j'ai liké' */
router.get('/user_self', function(req, res, next) {
    ig.user_self_liked(function(err, medias, pagination, remaining, limit) {
         //res.render('instagram/liked.twig',{"liked":medias})
        res.json(medias) ; 
    });
   
});


// les followers du l'utilisateur ( Abonnements)
router.get('/followers', function(req, res, next) {
    ig.user_follows('278199704', function(err, users, pagination, remaining, limit) {
        res.json(users);
    });
    });


// les followers (users) du l'utilisateur ( friends abonnement )
router.get('/followers_user', function(req, res, next) {
   ig.user_relationship('278199704', function(err, result, remaining, limit) {
       res.json(result) ; 
   });
    });

/* Les commentaires d'une photo  */
router.get('/comments', function(req, res, next) {
    ig.comments('1202370110940660754_1458367704', function(err, result, remaining, limit) {
        res.render('instagram/pic_comment.twig',{"com":result})
    });
        
    });
    
/* Les photos contenant un tag précis (ici c'est football ) */
router.get('/tag_media', function(req, res, next) {
    ig.tag_media_recent('realmadrid',function(err, medias, pagination, remaining, limit) {
       
            // res.render('instagram/hashtag.twig',{"prefer_tag":medias}) ; 
      res.json(medias) ; 
    });
});
router.get('/tag_media', function(req, res, next) {
    ig.tag_media_recent('barca',function(err, medias, pagination, remaining, limit) {
       
            //  res.render('instagram/hashtag.twig',{"prefer_tag":medias}) ; 
     res.json(medias) ; 
    });
});

router.get('/tag_media', function(req, res, next) {
    ig.tag_media_recent('milan',function(err, medias, pagination, remaining, limit) {
       
       //      res.render('instagram/hashtag.twig',{"prefer_tag":medias}) ; 
     res.json(medias) ; 
    });
});





/* Les photos  */
router.get('/mes_tof', function(req, res, next) {
    
       ig.user_self_media_recent(function(err, medias, pagination, remaining, limit) {
           //res.render('instagram/my_pic.twig',{"mypic":medias}) ; 
               
           res.json(medias);
       });
             
    });
    
    
/* Les photos d'une position précise L A */
router.get('/position', function(req, res, next) {
   ig.media_search(0.537963, 0.4925926,  function(err, medias, remaining, limit) {
       res.json(medias) ; 
   });
});

/* Mes abonnements */
router.get('/subs', function(req, res, next) {
   ig.subscriptions(function(err, subscriptions, remaining, limit){
       res.json(subscriptions) ; 
   });

});

 



module.exports = router;
