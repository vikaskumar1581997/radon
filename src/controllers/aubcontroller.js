const { count } = require("console")
const AuthorsModel= require("../models/authors")
const BooksModel= require("../models/Books")

const createBooks= async function (req, res) {
    let data= req.body

    let savedData= await BooksModel.create(data)
    res.send({msg: savedData})
}

const createAuthors= async function (req, res) {
    let data= req.body

    let savedData= await AuthorsModel.create(data)
    res.send({msg: savedData})
}


const list =async function(req,res){
let id=await AuthorsModel.find({"author_name":"vikas singh",}).select({author_id:1,_id:0})
console.log(id)
let book=await BooksModel.find(id[0])
res.send(book)
}

const findAuthor =async function(req,res){
    let book = await BooksModel.findOneAndUpdate(  {name:"The fire 1" } ,  {price : 200} , { new: true}  );  
console.log(book)
let updateddata=await AuthorsModel.find({author_id:book.author_id}).select({author_name:1,_id:0})
console.log(updateddata)
    res.send(["name is "+updateddata[0].author_name,"price is "+book.price])
  

}


const findBooks=async function(req,res){
    let allbooks=await BooksModel.find({price : {$gte: 500, $lte: 570}})
//console.log(allbooks.length)
let allauthors=await AuthorsModel.find()
//console.log(allauthors.length)
let arr=[]
for (let i=0;i<allauthors.length;i++){
for (let j=0;j<allbooks.length;j++){
  
  if(allauthors[i].author_id===allbooks[ j].author_id)
    {
         let b=allauthors[i].author_id;
         arr.push([b,allauthors[i].author_name]) 
  }
// console.log("reached")
  }
}
res.send(arr) 
}
 
module.exports.createBooks= createBooks
module.exports.createAuthors= createAuthors
module.exports.list= list
module.exports.findAuthor= findAuthor
module.exports.findBooks= findBooks

//code for modified question based on last question
const findBooks1=async function(req,res){
    let allbooks=await BooksModel.find({price : {$gte: 500, $lte: 570}})
//console.log(allbooks.length)
let allauthors=await AuthorsModel.find()
//console.log(allauthors.length)
let arr=[]
for (let i=0;i<allauthors.length;i++){
   for  (let j=0;j<allbooks.length;j++){
    r=  allbooks[ j].author_id
   // console.log(r)
  if(allauthors[i].author_id===r)
    {
         let b=allauthors[i].author_id;
         arr.push([b,allbooks[j].name]) 
  }
// console.log("reached")
  }
}
res.send(arr) 
}