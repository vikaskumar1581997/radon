const jwt = require("jsonwebtoken");
//const jwt = require("../middleware/auth.js");

let decodedToken
const authenticate = function(req, res, next) { 
    //check the token in request header
    //validate this token
    console.log(req.headers) 
   try{ 
    let token = req.headers["x-Auth-token"];
    if (!token) token = req.headers["x-auth-token"];
  
    //If no token is present in the request header return error

    if (!token) return res.status(403).send({ status: false, msg: "token must be present" });
  
    let decodedToken = jwt.verify(token, "functionup-thorium");
    console.log(token);
    if (!decodedToken)
      return res.send({ status: false, msg: "token is invalid" });

  
   
  console.log(token);
  console.log("hdh",decodedToken);
//    }catch(err){
//     res.send({msg: err.meassage})
//    }
  
 //next()
   


 // const authorise = function(req, res, next) {
    // comapre the logged in user's id and the id in request
//   try{
console.log("transfered",decodedToken)
//userId for which the request is made. In this case message to be posted.
 
      let userToBeModified = req.params.userId
    //userId for the logged-in user
    console.log("hdvejh",decodedToken)
    let userLoggedIn = decodedToken.userId

    //userId comparision to check if the logged-in user is requesting for their own data
    if(userToBeModified != userLoggedIn) return res.status(403).send({status: false, msg: 'User logged is not allowed to modify the requested users data'})
    next()
//}

 }
catch(err){
    console.log(err)
   res.status(500).send( err)

}
  
  
}

// catch(err){
//        console.log("This is the error :", err.message)
//         res.status(500).send({ msg: "Error", error: err.message })




//authorisation means giving consent to  access ceratin information he is eleigible to acces/modify etc.

module.exports.authenticate=authenticate
//module.exports.authorise=authorise 