
const cartmid= function ( req, res, next) {
    // req.falana= "hi there. i am adding something new to the req object"
    // console.log("Hi I am a middleware named Mid1")
           

    console.log(req.headers.isfreeappuser)
         let  isFreeAppUser = req.headers.isfreeappuser
          console.log(req.headers.isfreeappuser )
    if(isFreeAppUser==null){
        return res.send("mandatory header field required")
     }
     next()
}

const mid2= function ( req, res, next) {
    console.log("Hi I am a middleware named Mid2")
    next()
}

const mid3= function ( req, res, next) {
    console.log("Hi I am a middleware named Mid3")
    next()
}

const mid4= function ( req, res, next) {
    console.log("Hi I am a middleware named Mid4")
    next()
}

module.exports.cartmid= cartmid
// module.exports.mid2= mid2
// module.exports.mid3= mid3
// module.exports.mid4= mid4
