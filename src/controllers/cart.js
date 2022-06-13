const refOrders= require("../models/reforder.js")
const Products= require("../models/product.js")
const Users= require("../models/user.js")
const Orders= require("../models/createorder.js")
const createorder = require("../models/createorder.js")


const createproduct= async function (req, res) {
    let data= req.body
   

    let savedData= await Products.create(data)
    res.send({msg: savedData})
}

const createuser= async function (req, res) {
    let data= req.body
    data.isFreeAppUser= req.headers.isFreeAppUser

    let savedData= await Users.create(data)
    res.send({msg: savedData})
}

//===================================================
const createOrder= async function (req, res) {
    let data= req.body
    data.isFreeAppUser= req.headers.isfreeappuser
    console.log(data)

    let allusers = await Users.find()
    console.log("allusers   "+ allusers) 
    let allProducts = await Products.find()//.select({_id:1})
    console.log("allProducts"+ allProducts) 
    //let alldetail = await refOrders.find().populate("userId").populate("productId")

    let userexist = allusers.find(x=>x._id==data.userId)
    console.log("userexist"+userexist) 
    let productexist =  allProducts.find(x=>x._id==data.productId)
    console.log("productexist"+productexist) 
    if(!userexist||!productexist){
        return res.send("invalid user or  product")
    }
   
	//let orderdata = req.header
    if(data.isFreeAppUser=="true") {console.log("inside"+data.isFreeAppUser)
        data.amount=data.amount-data.amount
        return res.send({msg1:data})
    }
    // console.log(data)
 console.log(data.isFreeAppUser)

     if(data.isFreeAppUser=="false") {
      //oldprice= allProducts.price;
      console.log(productexist.price)
     data.amount=productexist.price;
      console.log(productexist.price<=userexist.balance)
      if(data.amount<=userexist.balance) {
    userexist.balance= userexist.balance-productexist.price
      let final = await Users.updateMany({ _id:userexist._id},{$set:{balance:userexist.balance}})
      
    }
      else{return res.send("balance insufficient")}
      
      
      let savedData = await createorder.create(data)
     
    res.send({msg: savedData})
      
    //  let savedData = await createorder.create(final)
     
    // res.send({msg: savedData})
   
} 

}


module.exports.createuser = createuser
module.exports.createOrder = createOrder
module.exports.createproduct = createproduct