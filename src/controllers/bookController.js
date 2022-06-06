const { count } = require("console")
const BookModel= require("../models/bookModel")

const createBook= async function (req, res) {
    let data= req.body

    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}



const bookList= async function (req, res) {
    let data=await BookModel.find().select({bookName:1 , authorName:1,_id :0 })
    res.send(data)
      
}


const getBooksInYear=async function(req,res){
    let year=req.query.year
    
     let data = await BookModel.find({"year":year})
    res.send(data)
}
const getBooksInYear1=async function(req,res){
    let year=req.body.year
    
     let data = await BookModel.find({"year":year})
    res.send(data)
}

const getParticularBooks=async function(req,res){
   // let input=req.body
    console.log(req.body)
    let output=await BookModel.find(
      req.body
    )
    res.send(output)
}


const getXINRBooks =async function(req,res){
   //a= BookModel.prices.indianPrice
let print =await BookModel.find({prices:{$or:[{indianPrice:"100INR"},{indianPrice:"200INR"},{indianPrice:"500INR"}]}
  })
//prices:{$in:["100","200","500"]}

res.send(print)
}

const getRandomBooks =async function(req,res){
    let print = await BookModel.find({
     $or:[{totalPages:{$gt : 500}},{stockAvailable:true}]
    //totalPages:100
    
    })
    res.send(print)
}
module.exports.createBook= createBook
module.exports.bookList =bookList
module.exports.getBooksInYear =getBooksInYear
module.exports.getBooksInYear1 =getBooksInYear1
module.exports.getParticularBooks=getParticularBooks
module.exports.getXINRBooks= getXINRBooks;
module.exports.getRandomBooks= getRandomBooks