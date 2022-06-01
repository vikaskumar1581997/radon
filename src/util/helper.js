const printdate=function(){
    var date_time = new Date();
//console.log(date_time);
let date=date_time.getDate()
console.log(date)
}



const printmonth=function(){
    var date_time = new Date();
//console.log(date_time);
let month=date_time.getMonth()
console.log(month)
}


const get = function(){
console.log("RADON, WEEK 3 DAY3, TODAY WE STARTED WITH NODE.JS")
}



module.exports.printdate=printdate
module.exports.printmonth=printmonth
module.exports.get = get
