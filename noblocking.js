//nonblocking
 var fs = require("fs");

 fs.readFile('text.txt',function(err,data){
    if(err){
        console.log(err);

    }
    setTimeout(()=>{
        console.log("after 5 seconds")
    },5000);
})
console.log('Starting here');