const express = require('express');
const router = express.Router();



let players =
   [
       {
           "name": "manish",
           "dob": "1/1/1995",
           "gender": "male",
           "city": "jalandhar",
           "sports": [
               "swimming"
           ]
       },
       {
           "name": "gopal",
           "dob": "1/09/1995",
           "gender": "male",
           "city": "delhi",
           "sports": [
               "soccer"
           ],
       },
       {
           "name": "lokesh",
           "dob": "1/1/1990",
           "gender": "male",
           "city": "mumbai",
           "sports": [
               "soccer"
           ],
       },
   ]
 
   router.post('/players', function (req, res) {
       let r=false

      let pla= req.body
     let p =pla.name
    for(i=0;i<players.length;i++){
        let n=players[i]
       let f= n.name
        if(f==p){
            r = true;
           break;
        }
        

   }
    if (r==true){
        res.send("not allowed")
    }  else{
        players.push(pla)
       res.send( players )
    }
  });

// router.post('/players', function (req, res) {
    
//     let r=false

//      let pla= req.body
//       let p =pla.name

//     //let player = players.find(p => p.name == newPlayersName)

//     for(i=0;i<players.length;i++){
//         let n=players[i]
//        let f= n.name
//         if(f==p){
//             r = true;
//            break;
//         }
        

//    }

// //     //undefined is same as false/ a falsy value
//    if (r==true) {
// //         //Player exists
//     res.send("This player was already added!")
//     } else {
//                //New entry
//    players.push(pla)
   
//    res.send(players)
//    }
// });



module.exports = router; 