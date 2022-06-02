const express = require('express');
//const myHelper = require('../util/helper')
//const underscore = require('underscore');
const res = require('express/lib/response');

const router = express.Router();


//==============================================================================
router.get('/movies', function (req, res) {
   let movies =["spiderman","batman","wonderwoman"]
    res.send(movies)
});
//==================================================================
router.get('/movies/:index', function (req, res) {
    let movies =["spiderman","batman","wonderwoman"]
    console.log('The request objects is '+ JSON.stringify(req.params))
    if(req.params.index<=movies.length){
     let a=req.params.index
     res.send(movies[a])
    }
    else{
        res.send("not a valid number")}
 });



 //========================================================================

router.get('/films', function (req, res) {
    let film = [ {
        id : 1,
        "name" : "lord of the rings",
    },
    {
        id :2,
       " name" : "rang de"
    },
       {
           id : 3,
           "name" : "inception"
       },
       {
           id :4,
           "name": "tenet"
       },
       ]
       
           console.log("done boss")
        let f=[]
       for(i=0;i<=film.length;i++){
           let a=film[i]
            f.push(a)
            
       }
       res.send(f)
       
 });
 

 //==========================================================================

 router.get('/films/:filmsid', function (req, res) {
    let film = [ {
        id : 1,
        "name" : "lord of the rings",
    },
    {
        id :2,
       " name" : "rang de"
    },
       {
           id : 3,
           "name" : "inception"
       },
       {
           id :4,
           "name": "tenet"
       },
       ]
       //router.get('/films', function (req, res) {
           console.log("done")
        let f=[]
       for(i=1;i<=film.length+1;i++){
           if(req.params.filmsid==i){
           let a=film[i-1]
            f.push(a)
            res.send(f)
            return
           }
       }
       res.send("no such movies as per number")
       
 });


//=====================================================



module.exports = router;
// adding this comment for no reason