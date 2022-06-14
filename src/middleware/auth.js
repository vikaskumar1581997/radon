const jwt = require("jsonwebtoken");


const mid = async function (req, res, next) {
 
  let token = req.headers["x-Auth-token"];
  if (!token) token = req.headers["x-auth-token"];

  //If no token is present in the request header return error
  if (!token) return res.send({ status: false, msg: "token must be present" });

  console.log(token);
  let decodeToken = jwt.verify(token, "functionup-radon");
  console.log("ehvjehw   ",decodedToken);
  if (decodeToken==null)  return res.send({ status: false, msg: "token is invalid" });
    next()
}
module.exports.mid=mid