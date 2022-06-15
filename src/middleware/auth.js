const jwt = require("jsonwebtoken");


const mid = async function (req, res, next) {
 
  let token = req.headers["x-Auth-token"];
  if (!token) token = req.headers["x-auth-token"];

  //If no token is present in the request header return error
  if (!token) return res.send({ status: false, msg: "token must be present" });

  console.log(token);
  let decodedToken = //jwt.verify(token, "functionup-radon");
  jwt.verify(token,  "functionup-radon", (err, payload) => {if(err) return res.send({msg:"Please check Token"})})


  // console.log("ehvjehw   ",decodedToken);
  // if (decodedToken==null)  return res.send({ status: false, msg: "token is invalid" });
    next()
}
module.exports.mid=mid