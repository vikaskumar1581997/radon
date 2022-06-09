const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisherModel= require("../models/publisherModel")

const createBook= async function (req, res) {
    let book = req.body
    let bookCreated = await bookModel.create(book)
    res.send({data: bookCreated})
}

const getBooksData= async function (req, res) {
    let books = await bookModel.find()
    res.send({data: books})
}

const createBooksWithAllDetails = async function (req, res) {
details=req.body;
y=true
z=true
if (!details.author) return res.send("field1 required")
    let authorss = await authorModel.find()
   //console.log(authorss)
      for(i=0;i<authorss.length;i++){
         console.log(details)
        // console.log(authorss[i]._id)
        // console.log( details.author==authorss[i]._id)
      if(details.author==authorss[i]._id){
        //console.log( (details.author==authorss[i]._id))
      //console.log("hdvhes")
      y=false
      break
      }}
       //else{return res.send("no such author")}
       //else{y=true}
   
    if(y){return res.send("no such author")}
//========== for publisher
   if (details.publisher==null){ return res.send("field required")}
  
  let publishers = await publisherModel.find()
  for(j=0;j<publishers.length;j++){
    if(details.publisher==publishers[j]._id){
      z=false
      break
    
    }
    //else{return res.send("no such publisher")}
  }
  if(z){return res.send("no such publisher")}
const created=await bookModel.create(details)
return res.send(created)
 
}

// const createBooksWithAllDetails1 =async function (req, res){
// let authorid=req.body.author
// let publisherid=req.body.publisher
// if(authorid==null){res.send("required")}
// const 

const populated = async function(req,res){
const bookdetails=await bookModel.find().populate("author").populate('publisher')
res.send(bookdetails)
}


// PUT BOOK

const updateBookAttribute = async (req,res)=>{
  const publisher = await newPublisher.find( {$or:[{name:"HarperCollins "} , {name:"Penguin" } ] } );
  for(let i of publisher){
      const updateBookIsHarde = await newBook.updateMany({publisher:i, ratings:{$gt:3.5} } 
          , { isHardCover:true , $inc:{price:10} } , {new:true , upsert:true} )
  }
 return  res.send({msg: "Update" } )
} 
 

// }
module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.createBooksWithAllDetails = createBooksWithAllDetails
module.exports.populated = populated
module.exports.updateBookAttribute  = updateBookAttribute 
