
const trim = function(){
  let text = "     hello vikas     "
  let result =text.trim()
  console.log(result)
}

const upper = function(){
 let text= "hello ayaan howz you"
 let result=text.toUpperCase()
 console.log(result)
}

const lower = function(){
    let text= "hello aashi howz you doing"
    let result=text.toLowerCase()
    console.log(result)
   }

   module.exports.trim=trim
   module.exports.upper=upper
   module.exports.lower=lower