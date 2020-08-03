//nonblocking
fs.readFile('text.txt',function(err,data){
    if(err){
        console.log(err);

    }
    setTimeout(()=>{
        console.log("Display After 2 Second")
    },2000);
})
console.log('Starting here');